# PL/ Language Translation and Execution

??? info "Learning outcomes"

    1. Distinguish a language definition (what constructs mean) from a particular language implementation (compiler vs. interpreter, run-time representation of data objects, etc.). [Familiarity]
    2. Distinguish syntax and parsing from semantics and evaluation. [Familiarity]
    3. Sketch a low-level run-time representation of core language constructs, such as objects or closures. [Familiarity]
    4. Explain how programming language implementations typically organize memory into global data, text, heap, and stack sections and how features such as recursion and memory management map to this memory model. [Familiarity]
    5. Identify and fix memory leaks and dangling-pointer dereferences. [Usage]
    6. Discuss the benefits and limitations of garbage collection, including the notion of reachability. [Familiarity]

## Interpretation vs. compilation to native code vs. compilation to portable intermediate representation

## Language translation pipeline: 

### parsing

### optional type-checking

### translation

### linking

### Execution

#### Execution as native code or within a virtual machine

#### Dynamic loading and dynamic (or “just-in-time”) code generation

## Run-time representation of core language constructs

### objects (method tables)

### first-class functions (closures)

## Run-time layout of memory

### call-stack

### heap

### static data

#### Implementation loops, recursion, and tail calls

## Memory management

### Manual memory management

#### allocating

#### de-allocating

#### reusing heap memory

### Automated memory management

#### garbage collection as an automated technique using the notion of reachability
