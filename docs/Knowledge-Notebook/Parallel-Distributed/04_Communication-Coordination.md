---
hide:
    - navigation 

---

# PD/Communication and Coordination

[:octicons-arrow-left-24: Return to Parallel and Distributed Computing](/Knowledge-Notebook/Parallel-Distributed/)

---

Cross-reference OS/Concurrency for mechanism implementation issues.

??? info "Learning outcomes"

    1. Use mutual exclusion to avoid a given race condition. [Usage]
    2. Give an example of an ordering of accesses among concurrent activities (e.g., program with a data race) that is not sequentially consistent. [Familiarity]
    3. Give an example of a scenario in which blocking message sends can deadlock. [Usage]
    4. Explain when and why multicast or event-based messaging can be preferable to alternatives. [Familiarity]
    5. Write a program that correctly terminates when all of a set of concurrent tasks have completed. [Usage]
    6. Use a properly synchronized queue to buffer data passed among activities. [Usage]
    7. Explain why checks for preconditions, and actions based on these checks, must share the same unit of atomicity to be effective. [Familiarity]
    8. Write a test program that can reveal a concurrent programming error; for example, missing an update when two activities both try to increment a variable. [Usage]
    9. Describe at least one design technique for avoiding liveness failures in programs using multiple locks or semaphores. [Familiarity]
    10. Describe the relative merits of optimistic versus conservative concurrency control under different rates of contention among updates. [Familiarity]
    11. Give an example of a scenario in which an attempted optimistic update may never complete. [Familiarity]
    12. Use semaphores or condition variables to block threads until a necessary precondition holds. [Usage]

## Shared Memory

## Consistency, and its role in programming language guarantees for data-race-free programs

## Message passing

### Point-to-point versus multicast (or event-based) messages

### Blocking versus non-blocking styles for sending and receiving messages

### Message buffering (cross-reference PF/Fundamental Data Structures/Queues)

## Atomicity

### Specifying and testing atomicity and safety requirements

### Granularity of atomic accesses and updates, and the use of constructs such as critical sections or transactions to describe them

### Mutual Exclusion using locks, semaphores, monitors, or related constructs

#### Potential for liveness failures and deadlock (causes, conditions, prevention)

### Composition

#### Composing larger granularity atomic actions using synchronization

#### Transactions, including optimistic and conservative approaches

## Consensus

### (Cyclic) barriers, counters, or related constructs

## Conditional actions

### Conditional waiting (e.g., using condition variables)
