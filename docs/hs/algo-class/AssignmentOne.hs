import Control.Monad.State

merge :: Ord a => [a] -> [a] -> State Int [a]
merge [] xs = return xs
merge xs [] = return xs
merge (x:xs) (y:ys)
  | x <  y    = do
                st <- get
                let (lst, state) = runState (merge xs (y:ys)) st
                put state
                return $ x : lst
  | otherwise = do
                modify(+1)
                st <- get
                let (lst, state) = runState (merge (x:xs) ys) st
                put $ state + length xs
                return $ y : lst

mergesort :: Ord a => [a] -> ([a], Int)
mergesort []   =  ([], 0)
mergesort [x]  =  ([x], 0)
mergesort xs   = do
  let (lst1, i) = mergesort left
  let (lst2, k) = mergesort right
  runState (merge lst1 lst2) (i+k) where
    (left, right) = splitAt (length xs `div` 2) xs

inversions = snd . mergesort

calculate = do
            list <- getLines "/home/folone/Downloads/IntegerArray.txt"
            return $ inversions (convert list)

convert :: [String] -> [Int]
convert = map read

getLines = liftM lines . readFile
