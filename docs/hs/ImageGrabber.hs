-- from here -> http://adit.io/posts/2012-03-10-building_a_concurrent_web_scraper_with_haskell.html
import qualified Data.ByteString.Char8 as B
import Data.Tree.NTree.TypeDefs
import Data.Maybe
import Text.XML.HXT.XPath
import Text.XML.HXT.Core
import Control.Monad
import Control.Monad.Trans
import Control.Monad.Trans.Maybe
import Network.HTTP
import Network.URI
import System.Environment
import Control.Concurrent.ParallelIO

-- helper function for getting page content
openUrl :: String -> MaybeT IO String
openUrl url = case parseURI url of
    Nothing -> fail ""
    Just u  -> liftIO (getResponseBody =<< simpleHTTP (mkRequest GET u))

cssToXPath :: String -> String
cssToXPath s = "//" ++ s

css :: ArrowXml a => String -> a XmlTree XmlTree
css = getXPathTreesInDoc . cssToXPath

get :: String -> IO (IOSArrow XmlTree (NTree XNode))
get url = do
  contents <- runMaybeT $ openUrl url
  return $ readString [withParseHTML yes, withWarnings no] (fromMaybe "" contents)

images tree = tree >>> css "img" >>> getAttrValue "src"

parseArgs = do
  args <- getArgs
  case args of
       (url:[]) -> return url
       otherwise -> error "usage: grabber [url]"

download url = do
  content <- runMaybeT $ openUrl url
  case content of
       Nothing -> putStrLn $ "bad url: " ++ url
       Just _content -> do
          let name = tail . uriPath . fromJust . parseURI $ url
          B.writeFile name (B.pack _content)

main = do
  url <- parseArgs
  doc <- get url
  imgs <- runX . images $ doc
  parallel_ $ map download imgs
  stopGlobalPool
