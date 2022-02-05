# Software Engineering (SE)

In every computing application domain, professionalism, quality, schedule, and cost are critical to producing software systems. Because of this, the elements of software engineering are applicable to developing software in all areas of computing. A wide variety of software engineering practices have been developed and utilized since the need for a discipline of software engineering was first recognized. Many trade-offs between these different practices have also been identified. Practicing software engineers have to select and apply appropriate techniques and practices to a given development effort in order to maximize value. To learn how to do so, they study the elements of software engineering.

Software engineering is the discipline concerned with the application of theory, knowledge, and practice to effectively and efficiently build reliable software systems that satisfy the requirements of customers and users. This discipline is applicable to small, medium, and large-scale systems. It encompasses all phases of the lifecycle of a software system, including requirements elicitation, analysis and specification; design; construction; verification and validation; deployment; and operation and maintenance. Whether small or large, following a traditional plan-driven development process, an agile approach, or some other method, software engineering is concerned with the best way to build good software systems.

Software engineering uses engineering methods, processes, techniques, and measurements. It
benefits from the use of tools for managing software development; analyzing and modeling
software artifacts; assessing and controlling quality; and for ensuring a disciplined, controlled
approach to software evolution and reuse. The software engineering toolbox has evolved over the
years. For instance, the use of contracts, with requires and ensure clauses and class invariants, is
one good practice that has become more common. Software development, which can involve an
individual developer or a team or teams of developers, requires choosing the most appropriate
tools, methods, and approaches for a given development environment.
<!-- 
Students and instructors need to understand the impacts of specialization on software engineering
approaches. For example, specialized systems include:

- Real time systems
- Client-server systems
- Distributed systems
- Parallel systems
- Web-based systems
- High integrity systems
- Games
- Mobile computing
- Domain specific software (e.g., scientific computing or business applications)

Issues raised by each of these specialized systems demand specific treatments in each phase of software engineering. Students must become aware of the differences between general software engineering techniques and principles and the techniques and principles needed to address issues specific to specialized systems.

An important effect of specialization is that different choices of material may need to be made when teaching applications of software engineering, such as between different process models, different approaches to modeling systems, or different choices of techniques for carrying out any of the key activities. This is reflected in the assignment of core and elective material, with the core topics and learning outcomes focusing on the principles underlying the various choices, and the details of the various alternatives from which the choices have to be made being assigned to the elective material.

Another division of the practices of software engineering is between those concerned with the fundamental need to develop systems that implement correctly the functionality that is required for them and those concerned with other qualities for systems and the trade-offs needed to balance these qualities. This division too is reflected in the assignment of core and elective material, so that topics and learning outcomes concerned with the basic methods for developing such system are assigned to the core and those that are concerned with other qualities and trade- offs between them are assigned to the elective material.

In general, students can best learn to apply much of the material defined in the Sofware Engineering KA by participating in a project. Such projects should require students to work on a team to develop a software system through as much of its lifecycle as is possible. Much of software engineering is devoted to effective communication among team members and stakeholders. Utilizing project teams, projects can be sufficiently challenging to require students to use effective software engineering techniques and to develop and practice their communication skills. While organizing and running effective projects within the academic framework can be challenging, the best way to learn to apply software engineering theory and knowledge is in the practical environment of a project. The minimum hours specified for some knowledge units in this document may appear insufficient to accomplish associated application- level learning outcomes. It should be understood that these outcomes are to be achieved through project experience that may even occur later in the curriculum than when the topics within the knowledge unit are introduced.

Further, there is increasing evidence that students learn to apply software engineering principles more effectively through an iterative approach, where students have the opportunity to work through a development cycle, assess their work, and then apply the knowledge gained through their assessment to another development cycle. Agile and iterative lifecycle models inherently afford such opportunities. Software lifecycle terminology in this document is based on that used in earlier sources, such as the Software Engineering Body of Knowledge (SWEBOK) and the ACM/IEEE-CS Software Engineering 2004 Curriculum Guidelines (SE2004). While some terms were originally defined in the context of plan-driven development processes, they are treated here as generic, and thus equally applicable to agile processes -->

## [SE/Software Processes](Software-Processes.md)

**Topics**:

- Systems level considerations, i.e., the interaction of software with its intended environment (cross-reference IAS/Secure Software Engineering)
- Introduction to software process models (e.g., waterfall, incremental, agile)
    - Activities within software lifecycles
- Programming in the large vs. individual programming
- Evaluation of software process models
- Software quality concepts
- Process improvement
- Software process capability maturity models
- Software process measurements

## [SE/Software Project Management](Software-Project-Management.md)

**Topics**:

- Team participation
    - Team processes including responsibilities for tasks, meeting structure, and work schedule
    - Roles and responsibilities in a software team
    - Team conflict resolution
    - Risks associated with virtual teams (communication, perception, structure)
- Effort Estimation (at the personal level)
- Risk (cross reference IAS/Secure Software Engineering)
    - The role of risk in the lifecycle
    - Risk categories including security, safety, market, financial, technology, people, quality, structure
and process
- Team management
    - Team organization and decision-making
    - Role identification and assignment
    - Individual and team performance assessment
- Project management
    - Scheduling and tracking
    - Project management tools
    - Cost/benefit analysis
- Software measurement and estimation techniques
- Software quality assurance and the role of measurements
- Risk
    - Risk identification and management
    - Risk analysis and evaluation
    - Risk tolerance (e.g., risk-adverse, risk-neutral, risk-seeking)
    - Risk planning
- System-wide approach to risk including hazards associated with tools

## [SE/Tools and Environments](Tools-Environments.md)

**Topics**:

- Software configuration management and version control
- Release management
- Requirements analysis and design modeling tools
- Testing tools including static and dynamic analysis tools
- Programming environments that automate parts of program construction processes (e.g., automated builds)
    - Continuous integration
- Tool integration concepts and mechanisms

## [SE/Requirements Engineering](Requirements-Engineering.md)

The purpose of requirements engineering is to develop a common understanding of the needs, priorities, and constraints relevant to a software system. Many software failures arise from an incomplete understanding of requirements for the software to be developed or inadequate management of those requirements. Specifications of requirements range in formality from completely informal (e.g., spoken) to rigorously mathematical (e.g., written in a formal specification language such as Z or first-order logic). In practice, successful software engineering efforts use requirements specifications to reduce ambiguity and improve the consistency and completeness of the development team’s understanding of the vision of the intended software. Plan-driven approaches tend to produce formal documents with numbered requirements. Agile approaches tend to favor less formal specifications that include user stories, use cases, and test cases

**Topics**:

- Describing functional requirements using, for example, use cases or users stories
- Properties of requirements including consistency, validity, completeness, and feasibility
- Software requirements elicitation
- Describing system data using, for example, class diagrams or entity-relationship diagrams
- Non-functional requirements and their relationship to software quality (cross-reference IAS/Secure
Software Engineering)
- Evaluation and use of requirements specifications
- Requirements analysis modeling techniques
- Acceptability of certainty / uncertainty considerations regarding software / system behavior
- Prototyping
- Basic concepts of formal requirements specification
- Requirements specification
- Requirements validation
- Requirements tracing

## [SE/Software Design](Software-Design.md)

**Topics**:

- System design principles: levels of abstraction (architectural design and detailed design), separation of
concerns, information hiding, coupling and cohesion, re-use of standard structures
- Design Paradigms such as structured design (top-down functional decomposition), object-oriented analysis
and design, event driven design, component-level design, data-structured centered, aspect oriented,
function oriented, service oriented
- Structural and behavioral models of software designs
- Design patterns
- Relationships between requirements and designs: transformation of models, design of contracts, invariants
- Software architecture concepts and standard architectures (e.g. client-server, n-layer, transform centered,
pipes-and-filters)
- Refactoring designs using design patterns
- The use of components in design: component selection, design, adaptation and assembly of components, components and patterns, components and objects (for example, building a GUI using a standard widget set)
- Internal design qualities, and models for them: efficiency and performance, redundancy and fault tolerance, traceability of requirements
- External design qualities, and models for them: functionality, reliability, performance and efficiency, usability, maintainability, portability
- Measurement and analysis of design quality
- Tradeoffs between different aspects of quality
- Application frameworks
- Middleware: the object-oriented paradigm within middleware, object request brokers and marshalling, transaction processing monitors, workflow systems
- Principles of secure design and coding (cross-reference IAS/Principles of Secure Design)
    - Principle of least privilege
    - Principle of fail-safe defaults
    - Principle of psychological acceptability

## [SE/Software Construction](Software Construction.md)

**Topics**:

- Coding practices: techniques, idioms/patterns, mechanisms for building quality programs (cross-reference
IAS/Defensive Programming; SDF/Development Methods)
    - Defensive coding practices
    - Secure coding practices
    - Using exception handling mechanisms to make programs more robust, fault-tolerant
- Coding standards
- Integration strategies
- Development context: “green field” vs. existing code base
    - Change impact analysis
    - Change actualization
- Potential security problems in programs
    - Buffer and other types of overflows
    - Race conditions
    - Improper initialization, including choice of privileges
    - Checking input
    - Assuming success and correctness
    - Validating assumptions

## [SE/Software Verification and Validation](Software-Verification-Validation.md)

**Topics**:

- Verification and validation concepts
- Inspections, reviews, audits
- Testing types, including human computer interface, usability, reliability, security, conformance to
specification (cross-reference IAS/Secure Software Engineering)
- Testing fundamentals (cross-reference SDF/Development Methods)
    - Unit, integration, validation, and system testing
    - Test plan creation and test case generation
    - Black-box and white-box testing techniques
    - Regression testing and test automation
- Defect tracking
- Limitations of testing in particular domains, such as parallel or safety-critical systems
- Static approaches and dynamic approaches to verification
- Test-driven development
- Validation planning; documentation for validation
- Object-oriented testing; systems testing
- Verification and validation of non-code artifacts (documentation, help files, training materials)
- Fault logging, fault tracking and technical support for such activities
- Fault estimation and testing termination including defect seeding

## [SE/Software Evolution](Software-Evolution.md)

**Topics**:

- Software development in the context of large, pre-existing code bases
    - Software change
    - Concerns and concern location
    - Refactoring
- Software evolution
- Characteristics of maintainable software
- Re-engineering systems
- Software reuse
    - Code segments
    - Libraries and frameworks
    - Components
    - Product lines

## [SE/Software Reliability](Software-Reliability.md)

**Topics**:

- Software reliability engineering concepts
- Software reliability, system reliability and failure behavior (cross-reference SF/Reliability Through Redundancy)
- Fault lifecycle concepts and techniques
- Software reliability models
- Software fault tolerance techniques and models
- Software reliability engineering practices
- Measurement-based analysis of software reliability

## [SE/Formal Methods](Formal-Methods.md)

The topics listed below have a strong dependency on core material from the Discrete Structures (DS) Knowledge Area, particularly knowledge units DS/Functions Relations and Sets, DS/Basic Logic and DS/Proof Techniques.

**Topics**:

- Role of formal specification and analysis techniques in the software development cycle
- Program assertion languages and analysis approaches (including languages for writing and analyzing pre- and post-conditions, such as OCL, JML)
- Formal approaches to software modeling and analysis
    - Model checkers
    - Model finders
- Tools in support of formal methods
