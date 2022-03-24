---
hide:
    - toc

---

# Software Development Fundamentals (SDF)

!!! note
    *May migrate to other BoK*

Fluency in the process of software development is a prerequisite to the study of most of computer science. In order to use computers to solve problems effectively, students must be competent at reading and writing programs in multiple programming languages. Beyond programming skills, however, they must be able to design and analyse algorithms, select appropriate paradigms, and utilise modern development and testing tools. 

This knowledge area brings together those fundamental concepts and skills related to the software development process. As such, it provides a foundation for other software-oriented knowledge areas, most notably Programming Languages, Algorithms and Complexity, and Software Engineering. It is important to note that this knowledge area is distinct from the old Programming Fundamentals knowledge area from CC2001. Whereas that knowledge area focused exclusively on the programming skills required in an introductory computer science course, this new knowledge area is intended to fill a much broader purpose. It focuses on the entire software development process, identifying those concepts and skills that should be mastered in the first year of a computer science program. This includes the design and simple analysis of algorithms, fundamental programming concepts and data structures, and basic software development methods and tools. As a result of its broader purpose, the Software Development Fundamentals knowledge area includes fundamental concepts and skills that could naturally be listed in other software-oriented knowledge areas (e.g., programming constructs from Programming Languages, simple algorithm analysis from Algorithms & Complexity, simple development methodologies from Software Engineering). Likewise, each of these knowledge areas will contain more advanced material that builds upon the fundamental concepts and skills listed here. While broader in scope than the old Programming Fundamentals, this knowledge area still allows for considerable flexibility in the design of first-year curricula. For example, the Fundamental Programming Concepts unit identifies only those concepts that are common to all programming paradigms. It is expected that an instructor would select one or more programming paradigms (e.g., object-oriented programming, functional programming, scripting) to illustrate these programming concepts, and would pull paradigm-specific content from the Programming Languages knowledge area to fill out a course. Likewise, an instructor could choose to emphasize formal analysis (e.g., Big-Oh, computability) or design methodologies (e.g., team projects, software life cycle) early, thus integrating hours from the Programming Languages, Algorithms and Complexity, and/or Software Engineering knowledge areas. Thus, the 43 hours of material in this knowledge area will typically be augmented with core material from one or more of these knowledge areas to form a complete and coherent first-year experience.

When considering the hours allocated to each knowledge unit, it should be noted that these hours reflect the minimal amount of classroom coverage needed to introduce the material. Many software development topics will reappear and be reinforced by later topics (e.g., applying iteration constructs when processing lists). In addition, the mastery of concepts and skills from this knowledge area requires a significant amount of software development experience outside of
class.

## [SDF/Algorithms and Design](01_Algorithms-Design.md)

This unit builds the foundation for core concepts in the Algorithms and Complexity Knowledge
Area, most notably in the Basic Analysis and Algorithmic Strategies knowledge units.

**Topics**:

- The concept and properties of algorithms
  - Informal comparison of algorithm efficiency (e.g., operation counts)
- The role of algorithms in the problem-solving process
- Problem-solving strategies
  - Iterative and recursive mathematical functions
  - Iterative and recursive traversal of data structures
  - Divide-and-conquer strategies
- Fundamental design concepts and principles
  - Abstraction
  - Program decomposition
  - Encapsulation and information hiding
  - Separation of behavior and implementation

## [SDF/Fundamental Programming Concepts](02_Fundamental-Programming-Concepts.md)

This knowledge unit builds the foundation for core concepts in the Programming Languages
Knowledge Area, most notably in the paradigm-specific units: Object-Oriented Programming,
Functional Programming, and Event-Driven & Reactive Programming.

**Topics**:

- Basic syntax and semantics of a higher-level language
- Variables and primitive data types (e.g., numbers, characters, Booleans)
- Expressions and assignments
- Simple I/O including file I/O
- Conditional and iterative control structures
- Functions and parameter passing
- The concept of recursion

## [SDF/Fundamental Data Structures](03_Fundamental-Data-Structures.md)

This unit builds the foundation for core concepts in the Algorithms and Complexity Knowledge
Area, most notably in the Fundamental Data Structures and Algorithms and Basic Computability
and Complexity knowledge units.

**Topics:**

- Arrays
- Records/structs (heterogeneous aggregates)
- Strings and string processing
- Abstract data types and their implementation
  - Stacks
  - Queues
  - Priority queues
  - Sets
  - Maps
- References and aliasing
- Linked lists
- Strategies for choosing the appropriate data structure

## [SDF/Development Methods](04_Development-Methods.md)

This unit builds the foundation for core concepts in the Software Engineering knowledge area,
most notably in the Software Processes, Software Design and Software Evolution knowledge
units.

**Topics**:

- Program comprehension
- Program correctness
  - Types of errors (syntax, logic, run-time)
  - The concept of a specification
  - Defensive programming (e.g. secure coding, exception handling)
  - Code reviews
  - Testing fundamentals and test-case generation
  - The role and the use of contracts, including pre- and post-conditions
  - Unit testing
- Simple refactoring
- Modern programming environments
  - Code search
  - Programming using library components and their APIs
- Debugging strategies
- Documentation and program style
