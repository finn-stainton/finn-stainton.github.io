---
hide:
    - navigation

---

# SDF/Development Methods

[:octicons-arrow-left-24: Return to Software Development Fundamentals](/Bodies-of-Knowledge/Software-Development-Fundamentals/)

---

??? "Learning Outcomes:"

    1. Trace the execution of a variety of code segments and write summaries of their computations. [Assessment]
    2. Explain why the creation of correct program components is important in the production of high-quality software. [Familiarity]
    3. Identify common coding errors that lead to insecure programs (e.g., buffer overflows, memory leaks, malicious code) and apply strategies for avoiding such errors. [Usage]
    4. Conduct a personal code review (focused on common coding errors) on a program component using a provided checklist. [Usage]
    5. Contribute to a small-team code review focused on component correctness. [Usage]
    6. Describe how a contract can be used to specify the behavior of a program component. [Familiarity]
    7. Refactor a program by identifying opportunities to apply procedural abstraction. [Usage]
    8. Apply a variety of strategies to the testing and debugging of simple programs. [Usage]
    9. Construct, execute and debug programs using a modern IDE and associated tools such as unit testing tools and visual debuggers. [Usage]
    10. Construct and debug programs using the standard libraries available with a chosen programming language. [Usage]
    11. Analyze the extent to which another programmer’s code meets documentation and programming style standards. [Assessment]
    12. Apply consistent documentation and program style standards that contribute to the readability and maintainability of software. [Usage]

## Program comprehension

## Program correctness

### Types of errors 

#### syntax errors

#### logic errors

#### run-time errors

### The concept of a specification

### Defensive programming 

#### secure coding

#### exception handling

### Code reviews

- **Readability**: Are there any redundant comments in the code?
- **Security**: Does the code expose the system to a cyber attack?
- **Test coverage**: Is there a need to test more cases?
- **Architecture**: Does the code use encapsulation and modularisation to achieve separation of concerns?
- **Reusability**: Does the code use reusable components, functions, and services?

- **Design**: Is the code well-designed and appropriate for your system?
- **Functionality**: Does the code behave as the author likely intended? Is the way the code behaves good for its users?
- **Complexity**: Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future?
- **Tests**: Does the code have correct and well-designed automated tests?
- **Naming**: Did the developer choose clear names for variables, classes, methods, etc.?
- **Comments**: Are the comments clear and useful?
- **Style**: Does the code follow our [style guides](http://google.github.io/styleguide/)?
- **Documentation**: Did the developer also update relevant documentation

#### Metrics

- **Inspection rate**: The speed at which your team reviews a specific amount of code, calculated by dividing lines of code (LoC) by number of inspection hours. If it takes a long time to review the code, there may be readability issues that need to be addressed.
- **Defect rate**: The frequency with which you identify a defect, calculated by dividing the defect count by hours spent on inspection. This metric helps determine the effectiveness of your testing procedures; for example, if your developers are slow to find defects, you may need better testing tools.
- **Defect density**: The number of defects you identify in a specific amount of code, calculated by dividing the defect count by thousands of lines of code (kLOC). Defect density helps identify which components are more prone to defects than others, allowing you to allocate more resources toward the vulnerable components. For example, if one of your web applications has significantly more defects than others in the same project, you may need to assign more experienced developers to work on it.

#### Feedback

compliment developers on **good things** that they do.

#### Summary

- The code is well-designed.
- The functionality is good for the users of the code.
- Any UI changes are sensible and look good.
- Any parallel programming is done safely.
- The code isn’t more complex than it needs to be.
- The developer isn’t implementing things they *might* need in the future but don’t know they need now.
- Code has appropriate unit tests.
- Tests are well-designed.
- The developer used clear names for everything.
- Comments are clear and useful, and mostly explain *why* instead of *what*.
- Code is appropriately documented (generally in g3doc).
- The code conforms to our style guides.

### Testing fundamentals and test-case generation

### The role and the use of contracts, including pre- and post-conditions

### Unit testing

## Simple refactoring

## Modern programming environments

### Code search

### Programming using library components and their APIs

## Debugging strategies

## Documentation and program style
