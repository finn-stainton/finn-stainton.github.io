---

hide:
    - navigation 
---
# SE/Software Design

[:octicons-arrow-left-24: Return to Software Engineering](/Bodies-of-Knowledge/Software-Engineering/)

??? info "Learning Outcomes"

    1. Articulate design principles including separation of concerns, information hiding, coupling and cohesion, and encapsulation. [Familiarity]
    2. Use a design paradigm to design a simple software system, and explain how system design principles have been applied in this design. [Usage]
    3. Construct models of the design of a simple software system that are appropriate for the paradigm used to design it. [Usage]
    4. Within the context of a single design paradigm, describe one or more design patterns that could be applicable to the design of a simple software system. [Familiarity]
    5. For a simple system suitable for a given scenario, discuss and select an appropriate design paradigm. [Usage]
    6. Create appropriate models for the structure and behavior of software products from their requirements specifications. [Usage]
    7. Explain the relationships between the requirements for a software product and its design, using appropriate models. [Assessment]
    8. For the design of a simple software system within the context of a single design paradigm, describe the software architecture of that system. [Familiarity]
    9. Given a high-level design, identify the software architecture by differentiating among common software architectures such as 3-tier, pipe-and-filter, and client-server. [Familiarity]
    10. Investigate the impact of software architectures selection on the design of a simple system. [Assessment]
    11. Apply simple examples of patterns in a software design. [Usage]
    12. Describe a form of refactoring and discuss when it may be applicable. [Familiarity]
    13. Select suitable components for use in the design of a software product. [Usage]
    14. Explain how suitable components might need to be adapted for use in the design of a software product. [Familiarity]
    15. Design a contract for a typical small software component for use in a given system. [Usage]
    16. Discuss and select appropriate software architecture for a simple system suitable for a given scenario. [Usage]
    17. Apply models for internal and external qualities in designing software components to achieve an acceptable tradeoff between conflicting quality aspects. [Usage]
    18. Analyze a software design from the perspective of a significant internal quality attribute. [Assessment]
    19. Analyze a software design from the perspective of a significant external quality attribute. [Assessment]
    20. Explain the role of objects in middleware systems and the relationship with components. [Familiarity]
    21. Apply component-oriented approaches to the design of a range of software, such as using components for concurrency and transactions, for reliable communication services, for database interaction including services for remote query and database management, or for secure communication and access. [Usage]
    22. Refactor an existing software implementation to improve some aspect of its design. [Usage]
    23. State and apply the principles of least privilege and fail-safe defaults. [Familiarity]

## System design principle

levels of abstraction (architectural design and detailed design), separation of
concerns, information hiding, coupling and cohesion, re-use of standard structures

## Design Paradigms

- Structured design (top-down functional decomposition)
- object-oriented analysis and design
- event driven design
- component-level design
- data-structured centered
- aspect oriente
- function oriented
- service oriented

## Structural models

## Behavioral models

of software designs

## Design patterns

### Behavioral Patterns

#### Iterator Pattern

#### Filtered Pattern

#### Observer Pattern

#### Strategy Pattern

#### Template Pattern

### Creational Patterns

Deal with the best way of creating instances of objects. Sometimes the exact nature of an objects may vary, so it is preferable to delegate the calling of a appropriate constructor to some class which is better suited. 


#### Factory Pattern

Uses a class known as a *factory class* to create instances of objects. It has methods for instantiating and returning an object instance. The constructor and class used to create the appropriate object are chosen by the the factory from one or more subclasses of some abstract class or classes which implement the same interface.

#### Abstract Factory Pattern

Uses a class known as an *abstract factory class* to create factory class(es)

#### Singleton

### Structural Patterns

#### Adapter Pattern

#### Composite Pattern

#### Decorator Pattern

#### Façade Pattern

#### Proxy Pattern

## Relationships between requirements and designs

transformation of models

design of contracts

invariants

## Software architecture concepts and standard architectures

client-server

n-layer

transform centered

pipes-and-filters

## Refactoring designs using design patterns

## The use of components in design

- component selection
- design
- adaptation
- assembly of components
- components and patterns
- components and objects (for example, building a GUI using a standard widget set)

## Internal design qualities, and models for them

- efficiency and performance
- redundancy and fault tolerance
- traceability of requirements

## External design qualities, and models for them

- functionality
- reliability
- performance and efficiency
- usability
- maintainability
- portability

## Measurement and analysis of design quality

## Tradeoffs between different aspects of quality

## Application frameworks

## Middleware

the object-oriented paradigm within middleware, 
object request brokers and marshalling, 
transaction processing monitors,
workflow systems

## Principles of secure design and coding 

(cross-reference IAS/Principles of Secure Design)

### Principle of least privilege

### Principle of fail-safe defaults

### Principle of psychological acceptability
