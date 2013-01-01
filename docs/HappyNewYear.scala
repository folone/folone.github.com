import scalaz._, Scalaz._

case class Happy[A](a: A)
case class NewYear(year: Int)

implicit val happyInstance = new Applicative[Happy] {
  def point[A](a: ⇒ A) = Happy(a)
  def ap[A, B](fa: ⇒ Happy[A])(f: ⇒ Happy[A => B]) =
    f match {
      case Happy(f) ⇒ fa match {
        case Happy(x) ⇒ Happy(f(x))
      }
    }
}

def from(year: Int): Happy[Int] = (year + 1).point[Happy]

def congratulation: Happy[NewYear] =
  from(2012) <*> Happy(NewYear)

def bonusCongratulation = ("Year", 3) <*> (("New ", 671) <*> ("Happy ", ((_: Int) * (_: Int)) curried))
