---
hide:
    - navigation

---
# PL/ Basic Type Systems

[:octicons-arrow-left-24: Return to Programming Languages](/Knowledge-Notebook/Programming-Languages/)

---

??? info "Learning outcomes"

    1. For both a primitive and a compound type, informally describe the values that have that type. [Familiarity]
    2. For a language with a static type system, describe the operations that are forbidden statically, such as passing the wrong type of value to a function or method. [Familiarity]
    3. Describe examples of program errors detected by a type system. [Familiarity]
    4. For multiple programming languages, identify program properties checked statically and program properties checked dynamically. [Usage]
    5. Give an example program that does not type-check in a particular language and yet would have no error if run. [Familiarity]
    6. Use types and type-error messages to write and debug programs. [Usage] 
    7. Explain how typing rules define the set of operations that are legal for a type. [Familiarity]
    8. Write down the type rules governing the use of a particular compound type. [Usage]
    9. Explain why undecidability requires type systems to conservatively approximate program behavior. [Familiarity]
    10. Define and use program pieces (such as functions, classes, methods) that use generic types, including for collections. [Usage]
    11. Discuss the differences among generics, subtyping, and overloading. [Familiarity]
    12. Explain multiple benefits and limitations of static typing in writing, maintaining, and debugging software. [Familiarity]

## A type as a set of values together with a set of operations

### Primitive types

#### Numbers

#### Booleans

### Compound types built from other types

#### records

#### unions

#### arrays

#### lists

#### functions

#### references

## Association of types

### To variables

### To arguments

### To results

### To fields

## Type safety and errors caused by using values inconsistently given their intended types

## Goals and limitations of static typing

### Eliminating some classes of errors without running the program

### Undecidability means static analysis must conservatively approximate program behavior

## Generic types (parametric polymorphism)

### Definition

### Use for generic libraries such as collections

### Comparison with ad hoc polymorphism (overloading) and subtype polymorphism

## Complementary benefits of static and dynamic typing

### Errors early vs. errors late/avoided

### Enforce invariants during code development

code maintenance vs. postpone typing decisions while prototyping and conveniently allow flexible coding patterns such as heterogeneous collections

### Avoid misuse of code vs. allow more code reuse

### Detect incomplete programs vs. allow incomplete programs to run
