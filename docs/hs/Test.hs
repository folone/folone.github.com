{-# LANGUAGE ScopedTypeVariables #-}
import Control.Monad.State
import Control.Monad.List
import Control.Arrow
import Data.List
import Control.Applicative

str = "abc"

res = do
  s <- str
  return $ print s

result = sequence res

printChars :: String -> IO [()]

printChars = mapM print

changeStr :: String -> String
changeStr = flip (>>=) (:"\n")

fx1 f = let x = f x in f x
fx2 f = let x = f x in x
-- uses recursion, not fair
fx3 f = f $ fx3 f

example :: [Int]
example = reverse . fst . head $ lists

φ :: [Int] -> Int -> [Int]
φ = undefined

phi :: ([Int], [Int]) -> [([Int], [Int])]
phi (xs, ys) = map ((:xs) &&& φ ys) ys

list1 = [0, 1]

lst = iterate (concatMap phi) [([], list1)]

lists :: [([Int], [Int])]
lists = iterate (concatMap phi) [([], list1)] !! 5
