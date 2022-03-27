---
hide:
	- navigation

---

# Common LISP

[:octicons-arrow-left-24: Return to Programming Languages](/Knowledge-Notebook/Programming-Languages/)

---

## Resources/ Bib

- COMMON LISP: A Gentle Introduction to Symbolic Computation, David S. Touretzky (Great Book)

## Getting Started


### EQ

### EQL

### HALF

### NOT

### NOT-EQUAL

### AND

### OR

### XOR

### DEFUN

### LENGTH

### CAR

### CDR

### CAR/ CDR Derivertives 

### CONS

### LIST

### LISTP

### CONSP

### ATOM

### SETF

### COND

- macro
- Input: many test-and-consequent clauses.
``` lisp 
(COND (test-1 consequent-1)
      (test-2 consequent-2)
      (test-3 consequent-3) 
 	  ....
      (test-n consequent-n))
```
- Going thought the clauses, testing. 
- If the test **passes** (true) **evaluates** the **consequent** and **returns** its **value** then **exits**
- If the test **failes** (false), skips the consequent and tests the next clause
- If all tests fail. returns nil
``` lisp
(defun compare (x y)
	(cond ((equal x y) ’numbers-are-the-same) 
		  ((< x y) ’first-is-smaller)
          ((> x y) ’first-is-bigger)))
```
### NTHCDR

Returns the $n^{th}$ successibe cdr of a list. 

0 -> the lists
to many -> end of the con cell i.e. NIL
```lisp
(nthcdr 0 '(a b c)) => (a b c)
(nthcdr 1 '(a b c)) => (b c)
(nthcdr 2 '(a b c)) => (c)
(nthcdr 3 '(a b c)) => NIL
```

### NTH

Takes the **car** of the **nthcdr** of a list
```lisp
(nth 0 '(a b c) => a
(nth 1 '(a b c) => b
(nth 2 '(a b c) => c
(nth 3 '(a b c) => nil
```

### LAST

Returns the last con cell of a list
```lisp
(last '(all is forgiven)) => (forgiven)
(last '(a b c . d)) => (c . d)
(last '(rosebud) =>
(last '((a b c))) =>  
```

### REMOVE

removes an item from a list (normally all occurrences). Returns a new list without the members
```lisp
(remove 'a '(b a n a n a)) => (b n n)
```

is **Nondestructive**, Doesn't change any variable. Builts new chain of con cells

### Sets

- unordered (order doesn't matter)
- items appear only once


### SUBST

### FUNCALL

- call a function on some input
`(funcall #'cons 'a 'b) ⇒ (a . b)`
- #' (sharp quote) correct way to quote a function (ordinary only)
- 

### MAPCAR

- applicative operator
- applies a function to each element of a list
- one at a time
- returns a list of the results
`> (defun square (n) (* n n))`
`> (mapcar #’square ’(1 2 3 4 5))`
`(1 4 9 16 25)`
`> (mapcar #’first words)
           (ONE TWO THREE FOUR FIVE)`
		
### LAMBDA

- used to pass a function definition directly into an applicative operator
- list called a **lambda expression**
- are functions
`(lambda (n) (* n n))`
- use sharp quote to pass an operator
`(mapcar #’(lambda (n) (* n n))  ’(1 2 3 4 5)) => (1 4 9 16 25)`
- saves writing a `defun`
- doesn't need a function name (unnamed functions)
- not a macro or special function
- doesn't need to be evaluated
- marker ("this list represents a function")
- synthesizing one-input functions from related functions of two inputs
	- `> (mapcar #’(lambda (n) (* n 10)) ’(1 2 3 4 5)) => (10 20 30 40 50)`

### FIND-IF

- Applicative Opperator
- Give a predicate and a list
- Finds the first element of the list for which the predicate returns *true* (non-NIL)
- returns the element or nil
- `> (find-if #’oddp ’(2 4 6 7 8 9)) => 7`

```lisp
> (defun my-assoc (key table)
	(find-if #’(lambda (entry)
				(equal key (first entry)))
             table))
			 
> (my-assoc ’two words)
(TWO DEUX)
```

### REMOVE-IF

- applicative operator
- Input: Predicate, List
- Removes all the items from a list that satisfy the predicate
- Returns a list of remaining items (non-satisfing)
`(remove-if #’numberp ’(2 for 1 sale)) => (FOR SALE)`

### PLUSP

- test a **number** if it is greater than zero

### REMOVE-IF-NOT

- applicative operator
- Input: Predicate, List
- Inverts the predicate, So removes all the items from a list which return nil from the original predicate
- Returns a list of items which satisfy the predicate
```lisp 
> (remove-if-not #’plusp ’(2 0 -4 6 -8 10)) 
(2 6 10)

> (remove-if-not #’oddp ’(2 0 -4 6 -8 10))
NIL
```

### REDUCE

- applicative operator
- reduces elements of a list into a single result
- Input: Function (sharp quote), List
	- Function must accept two inputs
`(reduce #'+ '(1 2 3)) => 6`
`(reduce #'* '(2 4 5)) => 40`
- can be applied to lists of lists
`> (reduce #’append’((one un) (two deux) (three trois)))`
`(ONE UN TWO DEUX THREE TROIS)`

### EVERY
- Input: Predicate (#'), List
- Returns T if there is no element that causes the predicate to return false
`(every #'numberp '(1 2 3 4 5)) => T`
`(every #'numberp '(1 2 A B C 5)) => NIL`

### WHEN, UNLESS
- conditional form
- evaluate more that one expression
- if *when* test results nil, returns nil
- non-nil, evaluates its body returning the last one
```
(WHEN test 
	body)

```
- if *unless* test results non-nil, returns nil
```
(UNLESS test 
	body)
```

### DO
- Macro
- bind any number of variables 
- step any number of index variables
- specify own test
```lisp
(DO ((var1 init1 [update1]) 
	 (var2 init2 [update2])
		...)  
	(test action-1 ... action-n)
  body)
```
1. each variable is initialed a value
2. test form is evaluated
	- True => DO evaluates the termination actions and returns the value of the last one.
	- False => DO evaluates the forms in its body in order
- Body may contain **returns**
- Completes another loop when DO reachs the end of the body
	1. each variable updates to the value of the update expression (may be omitted, value is unchanged)
	2. Termination test
	3. Evaluates body

```lisp
(defun launch (n)
	(do ((cnt n (- cnt 1))) 
		((zerop cnt) (format t "Blast off!"))
      (format t "~S..." cnt))) 

> (launch 10)
10...9...8...7...6...5...4...3...2...1...Blast off!
NIL
```

### DOTIMES
- iterative form
- macros (don't evaluate all arguments)
`(DOTIMES (index-var n [result-form]) body)`
- evaluates body n times (*zero* through *n-1*)
- Returns values of *result-form* (nil if omitted)
```lisp
> (dotimes (i 4) 
	(format t "~&I is ~S." i)) 
I is 0.
I is 1.
I is 2.
I is 3.
NIL
```
### DOLIST

`(DOLIST (index-var list [result-form]) body)`
- steps index variable through the elements of a list
```lisp
> (dolist (x ’(red blue green) ’flowers) 
	(format t "~&Roses are ~S." x)) 
Roses are RED.
Roses are BLUE.
Roses are GREEN.
FLOWERS
```

### RETURN
- Input: value to return


### LET


### &OPTIONAL
- if unsupplied, defaults to NIL (can be changed via `(name default)`)
```lisp
(defun foo (x &optional y)
	(format t "~&X is ~S" x)
    (format t "~&Y is ~S" y)
    (list x y))

> (foo 3 5)
X is 3
Y is 5
(3 5) 

> (foo 4)
X is 4
Y is NIL
(4 NIL)
```

### &REST

```lisp
(defun average (&rest args)
	(/ (reduce #’+ args) 
	   (length args)
       1.0))
> (average 1 2 3 4 5) ⇒ 3.0
```

### KEYWORD ARGUMENTS

### TYPEP

`(typep 3 'numberp) => t`
### TYPE-OF


### FORMAT
Inputs
1. T, to write to the screen
2. String, (**format control string**)
	- writes to screen without ""
	- special formatting starting with ~
	- ~% => new line
	- ~%~% => blank line
	- ~& => new line unless already at the start of a new line
	- ~S => inserts a printed rep of an objects which follows the ""
	`> (format t "From ~S to ~S in ~S minutes!" ’boston ’(new york) 55)`
	`From BOSTON to (NEW YORK) in 55 minutes! NIL`
	- ~A => prints object without escape characters e.g. quotation mark

## Predicates

### NUMBERP

### SYMBOLP

### ZEROP

### ODDP

### EVENP

### EQUAL

### EQUALP

### ONEMOREP

### SUBSETP
- returns T if one set is contained in another
```lisp
(subsetp '(a i) '(a e i o u)) ⇒ T
(subsetp '(a x) '(a e i o u)) ⇒ NIL
```

### MEMEBER
- Predicate, 
- checks whether an item is a member of a list. 
- Returns a sublist starting from the occurrence of the member being checked. Otherwise NIL. 
- NEVER returns T
`(member 'a '(b a n d)) => (a n d)`

Functions

## Arithmetic
---
### +

``` lisp
> (+ 1 5)
(6)
```

### -

``` lisp
> (- 1 5)
(4)
```
### *

``` lisp
> (* 1 5)
(5)
```
 
### /

``` lisp
> (/ 1 5)
(0.2)
```

### ABS

### SQRT

## Set Operations
---
### UNION

- Accepts two sets
- Returns a list of items which appear in *ether* set
- *Example:*
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

### INTERSECTION

- Accepts two sets
- Returns a list of items appearing in *both* sets or NIL if no items appear in both
- *Example:*
``` lisp
> (intersection ’(fred john mary) ’(sue mary fred)) 
(FRED MARY)
```
- intersection with nil is nil
- set intersection with itself is all the elements of itself
``` lisp
(defun contains-article-p(L)
	(intersection '(and a the) L2))
```

### SET-DIFFERENCE

- Accepts two sets
- Returns the remaining elements of the first set after elements which appear in the second set have been removed
- not symmetric function (swapping set can have different outcomes)
`> (set-difference '(alpha bravo charlie delta) '(bravo charlie)))`
`(ALPHA DELTA)`


## Table
---
### ASSOC

- Look up's an entry in a table given it's key
- Returns the entry (list) (have to use 'second' to get the *value*)
- *Example:*
``` lisp
> (assoc 'three words)
(three trois)
```

### RASSOC 

- Reverse Assoc
- look up's an element given the cdr of it (*value*)
- table must be a list of dotted pairs `(cow . moo)`
- `(rassoc '(moo) table)`
- Returns as soon as it finds a match

Data

## Numbers

- Integers,
- Floating Point, 
- Ratios,

## Symbols

- 

### Special Symbols

- T,
- NIL, 

## Con Cell

## Lists

Associated Functions: 

Associated Predicates: 

## Sets

Associated Functions: 

Associated Predicates: 

## Tables

Also known as an association list (a-list).
They are a List of Lists. 
Each list is called an *entry*.
The `Car` is the key

```lisp 
(setf words
    ’((one un) 
	  (two deux)
      (three trois)
      (four quatre)
      (five cinq)))
```
Associated Functions: [ASSOC](finn-stainton.github.io/knowledge/Computing/Programming Languages/Common LISP/Functions/#ASSOC), [RASSOC](finn-stainton.github.io/knowledge/Computing/Programming Languages/Common LISP/Functions/#RASSOC)

## Tree
