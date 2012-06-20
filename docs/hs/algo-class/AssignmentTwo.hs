import Data.Functor
import Data.Monoid
import Data.List
import Control.Monad.Writer
import Control.Arrow
import Control.Monad.ST
import Data.Array.ST
import Data.Array
import Data.Foldable
import Control.Monad

firstPivot :: Ord a => [a] -> (a, [a])
firstPivot = head &&& tail

lastPivot :: Ord a => [a] -> (a, [a])
lastPivot = last &&& init

medianOfThreePivot :: Ord a => [a] -> (a, [a])
medianOfThreePivot [x] = (x, [])
medianOfThreePivot xs =
  (mid, delete mid xs) where
    (l,r)      = splitAt (length xs `div` 2) xs
    center     = if length l == length r then last l else head r
    left       = head xs
    right      = last r
    lst        = [left, center, right]
    mid        = median lst
  

quicksort :: Ord a => [a] -> ([a] -> (a, [a])) -> Writer (Sum Int) [a]
quicksort [] _   = return []
quicksort [x] _  = return [x]
quicksort xs fun = do
    left  <- quicksort l fun
    right <- quicksort r fun
    tell . Sum $ length xss
    return $ left ++ [pivot] ++ right
  where
    (pivot, xss)  = fun xs
    -- partition routine should be reimplemented
    (l, r)        = partition (< pivot) xss

comparisons :: Ord a => [a] -> ([a] -> (a, [a])) -> Int
comparisons xs fun = getSum . execWriter $ quicksort xs fun

comparisonsInfile :: ([Int] -> (Int, [Int])) -> IO Int
comparisonsInfile fun = compare . convert <$>
                    getLines "/home/folone/Downloads/QuickSort.txt" where
                      compare = flip comparisons fun

firstPivotComparisons :: IO Int
firstPivotComparisons = comparisonsInfile firstPivot

lastPivotComparisons :: IO Int
lastPivotComparisons = comparisonsInfile lastPivot

medianOfThreeComparisons :: IO Int
medianOfThreeComparisons = comparisonsInfile medianOfThreePivot

convert :: [String] -> [Int]
convert = map read

getLines :: String -> IO [String]
getLines = fmap lines . readFile

nth (x:xs) n
    | k == n    = x
    | k > n     = nth ys n
    | otherwise = nth zs $ n - k - 1
    where (ys, zs) = partition (<x) xs
          k = length ys
 
median xs = nth xs $ length xs `div` 2
