# PL/ Functional Programming

??? info "Learning outcomes"

    1. Write basic algorithms that avoid assigning to mutable state or considering reference equality. [Usage]
    2. Write useful functions that take and return other functions. [Usage]
    3. Compare and contrast (1) the procedural/functional approach (defining a function for each operation with the function body providing a case for each data variant) and (2) the object-oriented approach (defining a class for each data variant with the class definition providing a method for each operation). Understand both as defining a matrix of operations and variants. [Assessment] This outcome also appears in PL/Object-Oriented Programming.
    4. Correctly reason about variables and lexical scope in a program using function closures. [Usage]
    5. Use functional encapsulation mechanisms such as closures and modular interfaces. [Usage]
    6. Define and use iterators and other operations on aggregates, including operations that take functions as arguments, in multiple programming languages, selecting the most natural idioms for each language. [Usage] This outcome also appears in PL/Object-Oriented Programming.

## Effect-free programming

**Function calls have no side effects, facilitating compositional reasoning**

**Variables are immutable, preventing unexpected changes to program data by other code**

**Data can be freely aliased or copied without introducing unintended effects from mutation**

## Processing structured data

 (e.g., trees) via functions with cases for each data variant

**Associated language constructs such as discriminated unions and pattern-matching over them**

**Functions defined over compound data in terms of functions applied to the constituent pieces**
## First-class functions

### taking

### returning

### storing functions

## Function closures

**(functions using variables in the enclosing lexical environment)**

**Basic meaning and definition - creating closures at run-time by capturing the environment**

**Canonical idioms: call-backs, arguments to iterators, reusable code via function arguments**

**Using a closure to encapsulate data in its environment**

**Currying and partial application**

## Defining higher-order operations on aggregates, especially map, reduce/fold, and filter