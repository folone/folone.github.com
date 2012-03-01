{-# LANGUAGE TupleSections #-}
import Data.List
import Control.Arrow
import qualified Data.Map as M
import Data.Ord (comparing)
import Data.Tuple
import Test.QuickCheck

main :: IO()
main = do
  putStrLn $ "calculate   [2,4,5,6,4] = " ++ show (calculate [2,4,5,6,4])
  putStrLn $ "mycalculate [2,4,5,6,4] = " ++ show (mycalculate [2,4,5,6,4])
  putStrLn $ "calculate   [1,2,1,3,1] = " ++ show (calculate [1,2,1,3,1])
  putStrLn $ "mycalculate [1,2,1,3,1] = " ++ show (mycalculate [1,2,1,3,1])

test = quickCheck ((\xs -> calculate xs == mycalculate xs) :: [Int] -> Bool)

calculate :: [Int] -> Int
calculate []  = 0
calculate [x] = x
calculate xs  = snd result where
  result      = second sum $ head (sortBy descending commonInts)
  commonInts  = map (\ys -> (length ys, ys)) (group $ sort xs)
  descending  = flip compare

mergesort :: Ord a => [a] -> [a]
mergesort []   =  []
mergesort [x]  =  [x]
mergesort xs   =  merge (sort left) (sort right) where
    (left, right) = splitAt (length xs `div` 2) xs
    merge [] xs = xs
    merge xs [] = xs
    merge (x:xs) (y:ys)
      | x <= y    = x : merge xs (y:ys)
      | otherwise = y : merge (x:xs) ys

mycalculate []  = 0
mycalculate [x] = x
mycalculate xs  = (fst (commonInt xs)) * (snd (commonInt xs))

commonInt = last . mergesort . mycount
mycount   = map swap . M.toList . M.fromListWith (+) . map (, 1)