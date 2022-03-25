---
hide:
    - navigation

---
# PL/ Static Analysis

[:octicons-arrow-left-24: Return to Programming Languages](/Bodies-of-Knowledge/Programming-Languages/)

---

??? info "Learning outcomes"

    1. Define useful static analyses in terms of a conceptual framework such as dataflow analysis. [Usage]
    2. Explain why non-trivial sound static analyses must be approximate. [Familiarity]
    3. Communicate why an analysis is correct (sound and terminating). [Usage]
    4. Distinguish “may” and “must” analyses. [Familiarity]
    5. Explain why potential aliasing limits sound program analysis and how alias analysis can help. [Familiarity]
    6. Use the results of a static analysis for program optimization and/or partial program correctness. [Usage]

## Relevant program representations

- basic blocks
- control-flow graphs
- def-use chains
- static single assignment

## Undecidability and consequences for program analysis

## Flow-insensitive analyses

- type-checking and scalable pointer
- alias analyses

## Flow-sensitive analyses

### Forward and backward dataflow analyses

## Path-sensitive analyses

### software model checking

## Tools and frameworks for defining analyses

## Role of static analysis in program optimization

## Role of static analysis in (partial) verification and bug-finding