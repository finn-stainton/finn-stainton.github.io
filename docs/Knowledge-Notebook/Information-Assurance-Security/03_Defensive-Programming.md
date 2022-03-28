---

hide:
    - navigation
---

# IAS/Defensive Programming

Topics in defensive programming are generally not thought about in isolation, but applied to
other topics particularly in SDF, SE and PD Knowledge Areas.

[:octicons-arrow-left-24: Return to Information Assurance Security](/Knowledge-Notebook/Information-Assurance-Security/)

---

??? info "Learning outcomes"

    1. Explain why input validation and data sanitization is necessary in the face of adversarial control of the
    input channel. [Familiarity]
    1. Explain why you might choose to develop a program in a type-safe language like Java, in contrast to an
    unsafe programming language like C/C++. [Familiarity]
    1. Classify common input validation errors, and write correct input validation code. [Usage]
    2. Demonstrate using a high-level programming language how to prevent a race condition from occurring and
    how to handle an exception. [Usage]
    1. Demonstrate the identification and graceful handling of error conditions. [Usage]
    [Core-Tier2]
    1. Explain the risks with misusing interfaces with third-party code and how to correctly use third-party code.
    [Familiarity]
    1. Discuss the need to update software to fix security vulnerabilities and the lifecycle management of the fix.
    [Familiarity]
    1. List examples of direct and indirect information flows. [Familiarity]
    2. Explain the role of random numbers in security, beyond just cryptography (e.g. password generation, randomized algorithms to avoid algorithmic denial of service attacks). [Familiarity]
    3.  Explain the different types of mechanisms for detecting and mitigating data sanitization errors. [Familiarity]
    4.  Demonstrate how programs are tested for input handling errors. [Usage]
    5.  Use static and dynamic tools to identify programming faults. [Usage]
    6.  Describe how memory architecture is used to protect runtime attacks. [Familiarity]

## Input validation and data sanitization

---

(cross-reference SDF/Development Methods/Program Correctness)

## Choice of programming language and type-safe languages

---

## Examples of input validation and data sanitization errors

---
(cross-reference SDF/Development Methods/Program Correctness and SE/Software Construction/Coding Practices)

### Buffer overflows

### Integer errors

### SQL injection

### XSS vulnerability

## Race conditions

---

(cross-reference SF/Parallelism/Parallel programming and PD/Parallel Architecture/Shared vs. distributed memory and PD/Communication and Coordination/Shared Memory and PD/Parallelism Fundamentals/Programming errors not found in sequential programming)

## Correct handling of exceptions and unexpected behaviors

---

(cross-reference SDF/Development Methods/program correctness)

## Correct usage of third-party components

---

(cross-reference SDF/Development Methods/program correctness and Operating System Principles/Concepts of application program interfaces (APIs)

## Effectively deploying security updates

---

(cross-reference OS/Security and Protection/Security methods and devices)

## Information flow control

---

## Correctly generating randomness for security purposes

---

## Mechanisms for detecting and mitigating input and data sanitization errors

---

? below

### Fuzzing

### Static analysis and dynamic analysis

### Program verification

### Operating system support (e.g., address space randomization, canaries)

### Hardware support (e.g., DEP, TPM)
