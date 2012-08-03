{-# LANGUAGE BangPatterns #-}

import Control.Monad
import Control.Monad.ST
import Data.List
import Data.STRef
import qualified Data.IntSet as S
import qualified Data.IntMap as M

buildGraphs :: [(Int, Int)] -> (M.IntMap [Int], M.IntMap [Int])
buildGraphs = foldl' addEdge (M.empty, M.empty)
  where
    addEdge (!g, !gRev) (tl, hd) = let 
      g' = M.insertWith' (++) tl [hd] g
      gRev' = M.insertWith' (++) hd [tl] gRev
      in (g', gRev')

dfs1 :: M.IntMap [Int] -> STRef s S.IntSet -> [Int] -> Int -> ST s [Int]
dfs1 graph explored ordering i = do
  modifySTRef explored $ S.insert i
  let edges = M.findWithDefault [] i graph
  ord' <- foldM (doIfNotExplored (dfs1 graph) explored) ordering edges
  return $ i:ord'

dfs2 :: M.IntMap [Int] -> STRef s S.IntSet -> [[Int]] -> Int -> ST s [[Int]]
dfs2 graph explored scc i = do 
  comp <- dfs2' graph explored [] i
  return $ comp : scc

dfs2' :: M.IntMap [Int] -> STRef s S.IntSet -> [Int] -> Int -> ST s [Int]
dfs2' graph explored comp i = do
  modifySTRef explored $ S.insert i
  let edges = M.findWithDefault [] i graph
  let comp' = i : comp
  foldM (doIfNotExplored (dfs2' graph) explored) comp' edges

findScc :: [(Int, Int)] -> [[Int]]
findScc edges = let 
  (g, gRev) = buildGraphs edges
  ordering = runST $ do
    explored <- newSTRef S.empty
    foldM (doIfNotExplored (dfs1 gRev) explored) [] $ M.keys gRev
  in runST $ do
    explored <- newSTRef S.empty
    foldM (doIfNotExplored (dfs2 g) explored) [] ordering

doIfNotExplored :: (STRef s S.IntSet -> a -> Int -> ST s a) -> STRef s S.IntSet -> a -> Int -> ST s a
doIfNotExplored op explored r i = do
  e <- readSTRef explored 
  if i `S.member` e
    then return r
    else op explored r i

main :: IO ()
main = do
  contents <- readFile "/home/folone/Downloads/SCC.txt"
  let edges = map (pair . map read . words) $ lines contents
  let scc = findScc edges
  let sccSizes = map length scc
  print $ take 5 $ sortBy (flip compare) sccSizes
    where
      pair [x, y] = (x, y)
