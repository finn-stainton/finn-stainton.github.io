# Common LISP: Predicates

## NUMBERP

## SYMBOLP

## ZEROP

## ODDP

## EVENP

## EQUAL

## EQUALP

## ONEMOREP

## SUBSETP
- returns T if one set is contained in another
```lisp
(subsetp '(a i) '(a e i o u)) ⇒ T
(subsetp '(a x) '(a e i o u)) ⇒ NIL
```

## MEMEBER
- Predicate, 
- checks whether an item is a member of a list. 
- Returns a sublist starting from the occurrence of the member being checked. Otherwise NIL. 
- NEVER returns T
`(member 'a '(b a n d)) => (a n d)`