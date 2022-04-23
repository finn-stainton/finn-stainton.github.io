---
hide:
    - navigation

---

# SF/Computational Paradigms

[:octicons-arrow-left-24: Return to System Fundamentals](/Knowledge-Notebook/System-Fundamentals/)

---

The view presented here is the multiple representations of a system across layers, from hardware
building blocks to application components, and the parallelism available in each representation.
Cross-reference PD/Parallelism Fundamentals.

??? info "Learning outcomes"

    1. List commonly encountered patterns of how computations are organized. [Familiarity]
    2. Describe the basic building blocks of computers and their role in the historical development of computer architecture. [Familiarity]
    3. Articulate the differences between single thread vs. multiple thread, single server vs. multiple server models, motivated by real world examples (e.g., cooking recipes, lines for multiple teller machines and couples shopping for food). [Familiarity]
    4. Articulate the concept of strong vs. weak scaling, i.e., how performance is affected by scale of problem vs. scale of resources to solve the problem. This can be motivated by the simple, real-world examples. [Familiarity]
    5. Design a simple logic circuit using the fundamental building blocks of logic design. [Usage]
    6. Use tools for capture, synthesis, and simulation to evaluate a logic design. [Usage]
    7. Write a simple sequential problem and a simple parallel version of the same program. [Usage]
    8. Evaluate performance of simple sequential and parallel versions of a program with different problem sizes, and be able to describe the speed-ups achieved. [Assessment]

## Basic building blocks and components of a computer

(gates, flip-flops, registers, interconnections; Datapath + Control + Memory)

## Hardware as a computational paradigm

: Fundamental logic building blocks; Logic expressions,
minimization, sum of product forms

## Application-level sequential processing

: single thread

## Simple application-level parallel processing

: request level (web services/client-server/distributed), single thread per server, multiple threads with multiple servers

## Basic concept of pipelining, overlapped processing stages

## Basic concept of scaling

: going faster vs. handling larger problems
