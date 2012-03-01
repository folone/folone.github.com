# Solution.

1. The first solution contains two variants: one, using library's
default functions, `calculate`, and the second one, using hand written
sorting and grouping functions (`mergesort` and `mycount`), `mycalculate`.
Due to haskell's optimizations and laziness, I believe, it will run in
O(n log n) (complexity of sort).
2. To perform a space-optimizing algorithm, I'd maintain a map-like
structure, where keys would be the numbers from the array, and values
would contain a value, which increments on each new number,
encountered. After loopong through the array, I'd search for the
maximum value in the map, and multiplied it by the key. That would be a
resulting value.
3. To test, if everything works correct, just run the `main` function of
the provided source file. There is a small test, created with the help
of quickcheck lib (http://hackage.haskell.org/package/QuickCheck).
Run it with `test` function.
4. To run everything, you need a ghci (I'm using version 7.0.3) and
`cabal-install` (to install quickcheck, do `cabal install quickcheck`).

Please note, that Haskell is not my best programming language, I just
happen to really like it, so I'm trying to use it where possible. I'm
a lot more comfortable with Scala.
