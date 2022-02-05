---
hide:
    - navigation
---
# AL/Basic Analysis

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

An *Algorithm* is a step-by-step procedure for solving a problem that takes some values as *input* and produces some other values as *output*. Two important characteristics of an algorithm are its efficiency and its correctness.  The efficiency of an algorithm can be measured base on various factors, such as storage or network resource requirements, but usually it is the running time and to a lesser extent the memory usage that are typically of greatest interest.  The Correctness refers to whether the algorithm eventually halts and produces the correct output. [^1]

## Differences among best, expected, and worst case behaviors of an algorithm

## Asymptotic analysis of upper and expected complexity bounds

## Big O notation: formal definition

## Complexity classes

- constant
- logarithmic
- linear
- quadratic
- exponential

## Empirical measurements of performance

## Time and space trade-offs in algorithms

## Big O notation: Uses

## Other notation

### Little o 

### Big omega

### Big theta

## Recurrence relations

## Analysis of iterative 

## Recursive algorithms

## Master Theorem

Suppose $T(n)$ is given for $n \geq 1$ by the recurrence $T(n) = aT(n/b) + f(n)$ where $a \geq 1$ and $b > 1$ are constants, and $f(n)$ is some known function.

- If $f(n)$ is $O(n^{\log_{b}a-\epsilon})$ for some constant $\epsilon > 0$ then $T(n)$ is $\Theta({n^{\log_{b}a})}.$
- If $f(n)$ is $\Theta({n^{\log_{b}a}})$ then $T(n)$ is $\theta({n^{\log_{b}a}} \log_{b}n).$
- If $f(n)$ is $\ohm({n^{\log_{b}a+\epsilon}})$ for some constant $\epsilon > 0$ and if a $f(n/b) \geq r f(n)$ for some constant $r < 1$ and all large enough $n$ then $T(n)$ is $\theta(f(n)).$

## Resources/ Bib.

[^1]:
    Distributed and Mobile Systems, Andrew Ensor