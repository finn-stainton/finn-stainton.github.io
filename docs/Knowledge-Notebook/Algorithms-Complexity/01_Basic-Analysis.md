---

hide:
    - navigation
---
# AL/ Basic Analysis

[:octicons-arrow-left-24: Return to Algorithms and Complexity](/Knowledge-Notebook/Algorithms-Complexity/)

---

??? info "Learning Outcomes"

    1. Explain what is meant by “best”, “expected”, and “worst” case behavior of an algorithm. [Familiarity]
    2. In the context of specific algorithms, identify the characteristics of data and/or other conditions or assumptions that lead to different behaviors. [Assessment]
    3. Determine informally the time and space complexity of simple algorithms. [Usage]
    4. State the formal definition of big O. [Familiarity]
    5. List and contrast standard complexity classes. [Familiarity]
    6. Perform empirical studies to validate hypotheses about runtime stemming from mathematical analysis. Run algorithms on input of various sizes and compare performance. [Assessment]
    7. Give examples that illustrate time-space trade-offs of algorithms. [Familiarity]
    8. Use big O notation formally to give asymptotic upper bounds on time and space complexity of algorithms. [Usage]
    9. Use big O notation formally to give expected case bounds on time complexity of algorithms. [Usage]
    10. Explain the use of big omega, big theta, and little o notation to describe the amount of work done by an algorithm. [Familiarity]
    11. Use recurrence relations to determine the time complexity of recursively defined algorithms. [Usage]
    12. Solve elementary recurrence relations, e.g., using some form of a Master Theorem. [Usage]

## Introduction to Algorithms

"An *Algorithm* is a step-by-step procedure for solving a problem that takes some values as *input* and produces some other values as *output*. Two important characteristics of an algorithm are its *efficiency* and its *correctness*.  The efficiency of an algorithm can be measured base on various factors, such as storage or network resource requirements, but usually it is the running time and to a lesser extent the memory usage that are typically of greatest interest.  The Correctness refers to whether the algorithm eventually halts and produces the correct output." [(Ensor, 2020)](#resources-bib)

"Analysis of an Algorithm in order to predict the resources it will require when translated into a programming language and executed on a computer requires some assumptions about the computing device itself. The *Random Access Model* (RAM) views a computer as a single processor connected to memory which it can access each part of in constant time (no caches or virtual memory). The RAM presumes that instructions are executed sequentially, with no actual concurrency. Allowing for parallel processors or a memory hierarch changes the analysis of the algorithm." [(Ensor, 2020)](#resources-bib)

## Different behaviours of an algorithm

An algorithm can behave differently depending on the particular input. 

- **Best case**:

- **Worst case**:

- **Expected**:

Best case is rarely used

## Asymptotic analysis of upper and expected complexity bounds

## Big O notation

**Formal definition**

**Uses**

## Complexity classes

**Constant**

**Logarithmic**

**Linear**

**Quadratic**

**Exponential**

## Empirical measurements of performance

## Time and space trade-offs in algorithms

## Other notation

### Little o

### Big Omega (&#937;)

Describes the lower bound. An algorithm could be described as $\Omega (N)$, as well as $\Omega (\log N)$ and $\Omega (1)$. It won't be *faster* that those runtime.

### Big Theta (&#920;)

Means both O and $\Omega$. That is, if an algorithm is both $O(N)$ and $\Omega (N)$, then it is $\Theta (N)$, giving a tight bound on runtime

## Recurrence relations

## Analysis of iterative

## Recursive algorithms

### Master Theorem

Suppose $T(n)$ is given for $n \geq 1$ by the recurrence $T(n) = aT(n/b) + f(n)$ where $a \geq 1$ and $b > 1$ are constants, and $f(n)$ is some known function.

- If $f(n)$ is $O(n^{\log_{b}a-\epsilon})$ for some constant $\epsilon > 0$ then $T(n)$ is $\Theta({n^{\log_{b}a})}.$
- If $f(n)$ is $\Theta({n^{\log_{b}a}})$ then $T(n)$ is $\theta({n^{\log_{b}a}} \log_{b}n).$
- If $f(n)$ is $\Omega({n^{\log_{b}a+\epsilon}})$ for some constant $\epsilon > 0$ and if a $f(n/b) \geq r f(n)$ for some constant $r < 1$ and all large enough $n$ then $T(n)$ is $\theta(f(n)).$

## Resources/ Bib.

!!! cite ""
    - Algorithm Design and Analysis, Andrew Ensor, 2020
    - Cracking the Coding Interview, Mcdowell