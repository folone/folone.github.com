import Control.Arrow
import Control.Monad.Writer
import Data.Functor
import Data.Monoid

merge :: Ord a => [a] -> [a] -> Writer (Sum Int) [a]
merge [] xs = return xs
merge xs [] = return xs
merge xxs@(x:xs) yys@(y:ys)
    | x < y = (x :) <$> merge xs yys
    | otherwise = do
        tell . Sum $ length xxs
        (y :) <$> merge xxs ys

mergesort :: Ord a => [a] -> Writer (Sum Int) [a]
mergesort [] = return []
mergesort [x] = return [x]
mergesort xs = do
    lst1 <- mergesort left
    lst2 <- mergesort right
    merge lst1 lst2
  where
    (left, right) = splitAt (length xs `div` 2) xs

inversions :: Ord a => [a] -> Int
inversions = getSum . execWriter . mergesort

calculate :: IO Int
calculate = inversions . convert <$>
    getLines "/home/folone/Downloads/IntegerArray.txt"

convert :: [String] -> [Int]
convert = map read
 
getLines :: String -> IO [String]
getLines = fmap lines . readFile
