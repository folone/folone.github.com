import Control.Applicative

data NewYear = NewYear Int
               deriving (Eq, Show)
data Happy a = Happy a
               deriving (Eq, Show)

instance Functor Happy where
  fmap f (Happy a) = Happy $ f a

instance Applicative Happy where
   pure = Happy
   (Happy f) <*> (Happy x) = Happy (f x)

from :: Int -> Happy Int
from = pure . (+ 1)

congratulation :: Happy NewYear
congratulation  = Happy NewYear <*> from 2012

bonusCongratulation = ("Happy ", (*)) <*> ("New ", 671) <*> ("Year", 3)
