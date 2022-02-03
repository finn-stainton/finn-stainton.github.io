# Algorithms and Complexity (AL)

## AL/Fundamental Data Structures and Algorithms

**Topics**:

- Simple numerical algorithms, such as computing the average of a list of numbers, finding the min, max, and mode in a list, approximating the square root of a number, or finding the greatest common divisor
- Sequential and binary search algorithms
- Worst case quadratic sorting algorithms (selection, insertion)
- Worst or average case O(N log N) sorting algorithms (quicksort, heapsort, mergesort)
- Hash tables, including strategies for avoiding and resolving collisions
- Binary search trees
    - Common operations on binary search trees such as select min, max, insert, delete, iterate over tree
- Graphs and graph algorithms
    - Representations of graphs (e.g., adjacency list, adjacency matrix)
    - Depth- and breadth-first traversals
- Heaps
- Graphs and graph algorithms
    - Shortest-path algorithms (Dijkstra’s and Floyd’s algorithms)
    - Minimum spanning tree (Prim’s and Kruskal’s algorithms)
- Pattern matching and string/text algorithms (e.g., substring matching, regular expression matching, longest
common subsequence algorithms)

## AL/Algorithmic Strategies

**Learning Outcomes**:

1. Implement basic numerical algorithms. [Usage]
2. Implement simple search algorithms and explain the differences in their time complexities. [Assessment]
3. Be able to implement common quadratic and O(N log N) sorting algorithms. [Usage]
4. Describe the implementation of hash tables, including collision avoidance and resolution. [Familiarity]
5. Discuss the runtime and memory efficiency of principal algorithms for sorting, searching, and hashing. [Familiarity]
6. Discuss factors other than computational efficiency that influence the choice of algorithms, such as
programming time, maintainability, and the use of application-specific patterns in the input data. [Familiarity]
7. Explain how tree balance affects the efficiency of various binary search tree operations. [Familiarity]
8. Solve problems using fundamental graph algorithms, including depth-first and breadth-first search. [Usage]


**Topics:**

- Brute-force algorithms
- Greedy algorithms
- Divide-and-conquer (cross-reference SDF/Algorithms and Design/Problem-solving strategies)
- Recursive backtracking
- Dynamic Programming
- Branch-and-bound
- Heuristics
- Reduction: transform-and-conquer

**Learning Outcomes:**

1. For each of the strategies (brute-force, greedy, divide-and-conquer, recursive backtracking, and dynamic programming), identify a practical example to which it would apply. [Familiarity]
2. Use a greedy approach to solve an appropriate problem and determine if the greedy rule chosen leads to an optimal solution. [Assessment]
3. Use a divide-and-conquer algorithm to solve an appropriate problem. [Usage]
4. Use recursive backtracking to solve a problem such as navigating a maze. [Usage]
5. Use dynamic programming to solve an appropriate problem. [Usage]
6. Determine an appropriate algorithmic approach to a problem. [Assessment]

## AL/Basic Analysis

**Topics**:

- Differences among best, expected, and worst case behaviors of an algorithm
- Asymptotic analysis of upper and expected complexity bounds
- Big O notation: formal definition
- Complexity classes, such as constant, logarithmic, linear, quadratic, and exponential
- Empirical measurements of performance
- Time and space trade-offs in algorithms
- Big O notation: use
- Little o, big omega and big theta notation
- Recurrence relations
- Analysis of iterative and recursive algorithms
- Some version of a Master Theorem

**Learning Outcomes**:

1. Explain what is meant by “best”, “expected”, and “worst” case behavior of an algorithm. [Familiarity]
2. In the context of specific algorithms, identify the characteristics of data and/or other conditions or assumptions that lead to different behaviors. [Assessment]
3. Determine informally the time and space complexity of simple algorithms. [Usage]
4. State the formal definition of big O. [Familiarity]
5. List and contrast standard complexity classes. [Familiarity]
6. Perform empirical studies to validate hypotheses about runtime stemming from mathematical analysis. Run algorithms on input of various sizes and compare performance. [Assessment]
7. Give examples that illustrate time-space trade-offs of algorithms. [Familiarity]
8. Use big O notation formally to give asymptotic upper bounds on time and space complexity of algorithms.
[Usage]
9. Use big O notation formally to give expected case bounds on time complexity of algorithms. [Usage]
10. Explain the use of big omega, big theta, and little o notation to describe the amount of work done by an algorithm. [Familiarity]
11. Use recurrence relations to determine the time complexity of recursively defined algorithms. [Usage]
12. Solve elementary recurrence relations, e.g., using some form of a Master Theorem. [Usage]

## AL/Advanced Data Structures Algorithms and Analysis

**Topics**:

- Balanced trees (e.g., AVL trees, red-black trees, splay trees, treaps)
- Graphs (e.g., topological sort, finding strongly connected components, matching)
- Advanced data structures (e.g., B-trees, Fibonacci heaps)
- String-based data structures and algorithms (e.g., suffix arrays, suffix trees, tries)
- Network flows (e.g., max flow [Ford-Fulkerson algorithm], max flow – min cut, maximum bipartite
matching)
- Linear Programming (e.g., duality, simplex method, interior point algorithms)
- Number-theoretic algorithms (e.g., modular arithmetic, primality testing, integer factorization)
- Geometric algorithms (e.g., points, line segments, polygons. [properties, intersections], finding convex hull, spatial decomposition, collision detection, geometric search/proximity)
- Randomized algorithms
- Stochastic algorithms
- Approximation algorithms
- Amortized analysis
- Probabilistic analysis
- Online algorithms and competitive analysis

**Learning Outcomes**:
1. Understand the mapping of real-world problems to algorithmic solutions (e.g., as graph problems, linear
programs, etc.). [Assessment]
2. Select and apply advanced algorithmic techniques (e.g., randomization, approximation) to solve real
problems. [Assessment]
3. Select and apply advanced analysis techniques (e.g., amortized, probabilistic, etc.) to algorithms.[Assessment]

## AL/Basic Automata Computability and Complexity

**Topics**:

- Finite-state machines
- Regular expressions
- The halting problem
- Context-free grammars (cross-reference PL/Syntax Analysis)
- Introduction to the P and NP classes and the P vs. NP problem
- Introduction to the NP-complete class and exemplary NP-complete problems (e.g., SAT, Knapsack)

**Learning Outcomes**:

1. Discuss the concept of finite state machines. [Familiarity]
2. Design a deterministic finite state machine to accept a specified language. [Usage]
3. Generate a regular expression to represent a specified language. [Usage]
4. Explain why the halting problem has no algorithmic solution. [Familiarity]
5. Design a context-free grammar t0 represent a specified language. [Usage]
6. Define the classes P and NP. [Familiarity]
7. Explain the significance of NP-completeness. [Familiarity]

## AL/Advanced Computational Complexity

**Topics**:

- Review of the classes P and NP; introduce P-space and EXP
- Polynomial hierarchy
- NP-completeness (Cook’s theorem)
- Classic NP-complete problems
- Reduction Techniques

**Learning Outcomes**:
1. Define the classes P and NP. (Also appears in AL/Basic Automata, Computability, and Complexity).[Familiarity]
2. Define the P-space class and its relation to the EXP class. [Familiarity]
3. Explain the significance of NP-completeness. (Also appears in AL/Basic Automata, Computability, and Complexity). [Familiarity]
4. Provide examples of classic NP-complete problems. [Familiarity]
5. Prove that a problem is NP-complete by reducing a classic known NP-complete problem to it. [Usage]

## AL/Advanced Automata Theory and Computability:

**Topics**:
- Sets and languages
    - Regular languages
    - Review of deterministic finite automata (DFAs)
    - Nondeterministic finite automata (NFAs)
    - Equivalence of DFAs and NFAs
    - Review of regular expressions; their equivalence to finite automata
    - Closure properties
    - Proving languages non-regular, via the pumping lemma or alternative means
- Context-free languages
    - Push-down automata (PDAs)
    - Relationship of PDAs and context-free grammars
    - Properties of context-free languages
- Turing machines, or an equivalent formal model of universal computation
- Nondeterministic Turing machines
- Chomsky hierarchy
- The Church-Turing thesis
- Computability
- Rice’s Theorem
- Examples of uncomputable functions
- Implications of uncomputability

**Learning Outcomes**:
1. Determine a language’s place in the Chomsky hierarchy (regular, context-free, recursively enumerable). [Assessment]
2. Convert among equivalently powerful notations for a language, including among DFAs, NFAs, and regular expressions, and between PDAs and CFGs. [Usage]
3. Explain the Church-Turing thesis and its significance. [Familiarity]
4. Explain Rice’s Theorem and its significance. [Familiarity]
5. Provide examples of uncomputable functions. [Familiarity]
6. Prove that a problem is uncomputable by reducing a classic known uncomputable problem to it. [Usage]