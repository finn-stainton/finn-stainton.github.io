---
hide:
    - navigation 

---
# PD/Parallelism Fundamentals

[:octicons-arrow-left-24: Return to Parallel and Distributed Computing](/Bodies-of-Knowledge/Parallel-Distributed/)

---

Build upon students’ familiarity with the notion of basic parallel execution—a concept addressed in Systems Fundamentals—to delve into the complicating issues that stem from this notion, such as race conditions and liveness.

Cross-reference SF/Computational Paradigms and SF/System Support for Parallelism.

??? info "Learning outcomes"

    1. Distinguish using computational resources for a faster answer from managing efficient access to a shared resource. (Cross-reference GV/Fundamental Concepts, outcome 5.) [Familiarity]
    2. Distinguish multiple sufficient programming constructs for synchronization that may be inter-implementable but have complementary advantages. [Familiarity]
    3. Distinguish data races from higher level races. [Familiarity]

## Multiple simultaneous computations

## Goals of parallelism (e.g., throughput) versus concurrency (e.g., controlling access to shared resources)

## Parallelism, communication, and coordination

### Programming constructs for coordinating multiple simultaneous computations

### Need for synchronization

## Programming errors not found in sequential programming

### Data races (simultaneous read/write or write/write of shared state)

### Higher-level races (interleavings violating program intention, undesired non-determinism)

### Lack of liveness/progress (deadlock, starvation)