---
hide:
    - navigation 

---
# PD/Distributed Systems

[:octicons-arrow-left-24: Return to Parallel and Distributed Computing](/Bodies-of-Knowledge/Parallel-Distributed/)

---

??? info "Learning outcomes"

    1. Distinguish network faults from other kinds of failures. [Familiarity]
    2. Explain why synchronization constructs such as simple locks are not useful in the presence of distributed faults. [Familiarity]
    3. Write a program that performs any required marshaling and conversion into message units, such as packets, to communicate interesting data between two hosts. [Usage]
    4. Measure the observed throughput and response latency across hosts in a given network. [Usage]
    5. Explain why n### distributed system can be simultaneously consistent, available, and partition tolerant. [Familiarity]
    6. Implement a simple server -- for example, a spell checking service. [Usage]
    7. Explain the tradeoffs among overhead, scalability, and fault tolerance when choosing a stateful v. stateless design for a given service. [Familiarity]
    8. Describe the scalability challenges associated with a service growing to accommodate many clients, as well as those associated with a service only transiently having many clients. [Familiarity]
    9. Give examples of problems for which consensus algorithms such as leader election are required. [Usage]

## Faults (cross-reference OS/Fault Tolerance)

### Network-based (including partitions) and node-based failures

### Impact on system-wide guarantees (e.g., availability)

## Distributed message sending

### Data conversion and transmission

### Sockets

### Message sequencing

### Buffering, retrying, and dropping messages

## Distributed system design tradeoffs

### Latency versus throughput

### Consistency, availability, partition tolerance

## Distributed service design

### Stateful versus stateless protocols and services

### Session (connection-based) designs

### Reactive (IO-triggered) and multithreaded designs

## Core distributed algorithms

### Election, discovery
