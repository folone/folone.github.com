import Control.Monad.State
import Data.Functor

merge :: Ord a => [a] -> [a] -> State Int [a]
merge [] xs = return xs
merge xs [] = return xs
merge (x:xs) (y:ys)
    | x < y = (x :) <$> merge xs (y:ys)
    | otherwise = do
        lst <- merge (x:xs) ys
        modify (+ length (x:xs))
        return $ y : lst

mergesort :: Ord a => [a] -> ([a], Int)
mergesort [] = ([], 0)
mergesort [x] = ([x], 0)
mergesort xs = do
  let (lst1, i) = mergesort left
  let (lst2, k) = mergesort right
  runState (merge lst1 lst2) (i + k) where
    (left, right) = splitAt (length xs `div` 2) xs

inversions :: Ord a => [a] -> Int
inversions = snd . mergesort

calculate :: IO Int
calculate = inversions . convert <$>
    getLines "/home/folone/Downloads/IntegerArray.txt"

convert :: [String] -> [Int]
convert = map read
 
getLines :: String -> IO [String]
getLines = fmap lines . readFile
