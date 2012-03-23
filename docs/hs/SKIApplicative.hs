{-
Illustration to http://thedeemon.livejournal.com/44180.html
This is also described in The Monad Reader issue 17, The Reader Monad and Abstraction Elimination by Petr Pudlak
-}
import Control.Applicative
main     = print $ answer succ 0  where
  one    = pure <*> (pure :: a -> b -> a)
  inc    = (<*>) ((<*>) <$> pure)
  mul    = (<*>) <$> pure
  h      = mul <*> inc
  answer = h . h . h $ one
