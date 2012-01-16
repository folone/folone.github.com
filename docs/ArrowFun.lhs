> {-# LANGUAGE Arrows #-}
> module ArrowFun where
> import Control.Arrow
> import Control.Category
> import Prelude hiding (id,(.))

See original there -> http://www.haskell.org/haskellwiki/Arrow_tutorial

Arrow a b c represents a process that takes as input something of type b and outputs something of type c.

Arr builds an arrow out of a function. This function is arrow-specific. Its signature is

arr :: (Arrow a) => (b -> c) -> a b c
Arrow composition is achieved with (>>>). This takes two arrows and chains them together, one after another. It is also arrow- specific. Its signature is:

(>>>) :: (Arrow a) => a b c -> a c d -> a b d
First and second make a new arrow out of an existing arrow. They perform a transformation (given by their argument) on either the first or the second item of a pair. These definitions are arrow-specific. Their signatures are:

first :: (Arrow a) => a b c -> a (b, d) (c, d)
second :: (Arrow a) => a b c -> a (d, b) (d, c)
First and second may seem pretty strange at first, but they'll make sense in a few minutes.

That's it for the arrow-specific definitions.

2 A Simple Arrow
Let's define a really simple arrow as an example. Our simple arrow is just a function mapping an input to an output. We don't really need arrows for something this simple, but we could use something this simple to explain arrows.

> newtype SimpleFunc a b = SimpleFunc {
>     runF :: (a -> b)
> }
>
> instance Arrow SimpleFunc where
>     arr f = SimpleFunc f
>     first (SimpleFunc f) = SimpleFunc (mapFst f)
>                   where mapFst g (a,b) = (g a, b)
>     second (SimpleFunc f) = SimpleFunc (mapSnd f)
>                   where mapSnd g (a,b) = (a, g b)
>
> instance Category SimpleFunc where
>     (SimpleFunc g) . (SimpleFunc f) = SimpleFunc (g . f)
>     id = arr id

3 Some Arrow Operations
Now lets define some operations that are generic to all arrows.

Split is an arrow that splits a single value into a pair of duplicate values:

> split :: (Arrow a) => a b (b, b)
> split = arr (\x -> (x,x))

Unsplit is an arrow that takes a pair of values and combines them to return a single value:

> unsplit :: (Arrow a) => (b -> c -> d) -> a (b, c) d
> unsplit = arr . uncurry       
>           -- arr (\op (x,y) -> x `op` y)

(***) combines two arrows into a new arrow by running the two arrows on a pair of values (one arrow on the first item of the pair and one arrow on the second item of the pair).

f *** g = first f >>> second g
(&&&) combines two arrows into a new arrow by running the two arrows on the same value:

f &&& g = split >>> first f >>> second g
     -- = split >>> f *** g
LiftA2 makes a new arrow that combines the output from two arrows using a binary operation. It works by splitting a value and operating on both halfs and then combining the result:

> liftA2 :: (Arrow a) => (b -> c -> d) -> a e b -> a e c -> a e d
> liftA2 op f g = split >>> first f >>> second g >>> unsplit op
>            -- = f &&& g >>> unsplit op

4 An Example
Now let's build something using our simple arrow definition and some of the tools we just created. We start with two simple arrows, f and g. F halves its input and g triples its input and adds one:

> f, g :: SimpleFunc Int Int
> f = arr (`div` 2)
> g = arr (\x -> x*3 + 1)

We can combine these together using liftA2:

> h :: SimpleFunc Int Int
> h = liftA2 (+) f g
>
> hOutput :: Int
> hOutput = runF h 8

What is h? How does it work? The process defined by h is (split >>> first f >>> second g >>> unsplit (+)). Lets work through an application of h to some value, 8:

   8 -> (8, 8)             split
   (8, 8) -> (4, 8)        first f (x `div` 2 of the first element)
   (4, 8) -> (4, 25)       second g (3*x + 1 of the second element)
   (4, 25) -> 29           applies (+) to tuple elements.
             +------> f ---------+
             |                   v
   8 ---> (split)          (unsplit (+)) ----> 29
             |                   ^
             +------> g ---------+
so we see that h is a new arrow that when applied to 8, applies 8 to f and applies 8 to g and adds the results.

A lot of juggling occurred to get the plumbing right since h wasn't defined as a linear combination of arrows. GHC has a do-notation that simplifies this in a similar way to how do-notation simplifies monadic computation. To use this notation you must specify the -farrows flag. The h function can be defined as:

> h' :: SimpleFunc Int Int
> h' = proc x -> do
>       fx <- f -< x
>       gx <- g -< x
>       returnA -< (fx + gx)
>
> hOutput' :: Int
> hOutput' = runF h' 8

5 Kleisli Arrows
Let's move on to something a little fancier now: Kleisli arrows. A Kleisli arrow (Kleisli m a b) is the arrow (a -> m b) for all monads. It's defined in Control.Arrows similarly to our SimpleFunc:

newtype Kleisli m a b = Kleisli {
  runKleisli :: (a -> m b) 
}
It comes complete with its own definitions for arr, first, second and (>>>). This means that all multi-value functions (a -> [b]) are already defined as Kleisli arrows (because [] is a monad)! (>>>) performs composition, keeping track of all the multiple results. Split, (&&&) and (***) are all defined as before. So for example:

> plusminus, double, h2 :: Kleisli [] Int Int
> plusminus = Kleisli (\x -> [x, -x])
> double    = arr (* 2)
> h2        = liftA2 (+) plusminus double 
>
> h2Output :: [Int]
> h2Output = runKleisli h2 8

6 A Teaser
Finally, here is a little teaser. There is an arrow function called returnA which returns an identity arrow. There is an ArrowPlus class that includes a zeroArrow (which for the list monad is an arrow that always returns the empty list) and a <+> operator (which takes the results from two arrows and concatenates them). We can build up some pretty interesting string transformations (the multi-valued function String -> [String]) using Kleisli arrows:

> main :: IO ()
> main = do
>    let
>        prepend x = arr (x ++)
>        append  x = arr (++ x)
>        withId  t = returnA <+> t
>        xform = (withId $ prepend "<") >>>
>                (withId $ append ">") >>>
>                (withId $ ((prepend "!") >>> (append "!")))
>        xs = ["test", "foobar"] >>= (runKleisli xform)
>    mapM_ putStrLn xs

An important observation here is that

   f >>> g
is multi-valued composition (g . f), and

   (withId f) >>> (withId g) =
   (returnA <+> f) >>> (returnA <+> g) =
   ((arr id) <+> f) >>> ((arr id) <+> g)
which, when applied to an input x, returns all values:

   ((id . id) x) ++ ((id . f) x) ++ ((id . g) x) ++ ((g . f) x) =
   x ++ (f x) ++ (g x) ++ ((g . f) x)
which are all permutations of using arrows f and g.
