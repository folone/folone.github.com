{-# LANGUAGE NoMonomorphismRestriction #-}
import Data.Functor.Fixedpoint
import Prelude hiding (succ)

type Nat = Fix Maybe

succ = Fix . Just
zero = Fix Nothing

foldNat x y = cata $ maybe x y

toNum = foldNat 0 (+1)

fromNum = ana $ makeMaybe (>0) (-1)

makeMaybe :: (a -> Bool) -> (a -> a) -> a -> Maybe a
makeMaybe cond f x 
	| cond x = Just (f x)
	| otherwise = Nothing

add a = foldNat a succ
mul a = foldNat zero (add a)

fact = toNum . fst . foldNat (succ zero,succ zero) (\(x, y) -> (mul x y, succ y)) . fromNum
