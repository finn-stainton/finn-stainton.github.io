# Common LISP: Functions

## UNION
- takes to sets
- returns a list of items which appear in *ether* set
``` console
> (union '(finger hand arm) '(toe finger foot leg))
(FINGER HAND ARM TOE FOOT LEG)
```
- union with nil returns only the non-nil set (no NIL element)
- a set union with itself returns itself (no duplicate elements)
``` lisp
(defun add-vowels(L)
	(union '(a e i o u) L)))
```

## INTERSECTION
- takes two sets
- returns a list of items appearing in *both* sets
- or NIL if no items appear in both
`(intersection ’(fred john mary) ’(sue mary fred)) => 
(FRED MARY)`
- intersection with nil is nil
- set intersection with itself is all the elements of itself
``` lisp
(defun contains-article-p(L)
	(intersection '(and a the) L2))
```

## SET-DIFFERENCE
- takes two sets
- returns the remaining elements of the first set after elements which appear in the second set have been removed
- not symmetric function (swapping set can have different outcomes)
`> (set-difference '(alpha bravo charlie delta) '(bravo charlie)))`
`(ALPHA DELTA)`

## ASSOC
- look up's an entry in a table given it's key
- returns the entry (list) (have to use 'second' to get the *value*)
`(assoc 'three words) => (three trois)`

## RASSOC 
- Reverse Assoc
- look up's an element given the cdr of it (*value*)
- table must be a list of dotted pairs `(cow . moo)`
- `(rassoc '(moo) table)`
- Returns as soon as it finds a match