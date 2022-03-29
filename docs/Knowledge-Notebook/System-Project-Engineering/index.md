---
hide:
    - navigation
    - toc
---
# Systems and Project Engineering (SPE)

[:octicons-arrow-left-24: Return to Knowledge Notebook](/Knowledge-Notebook/)

---

The knowledge units in this area collectively encompass the following:

1. The role of systems engineering principles throughout a computer system’s life cycle, including important tradeoffs in such areas as power, performance, and cost
2. Project management, including team management, scheduling, project configuration, information management, and design of project plans
3. Human-computer interaction styles and usability requirements, design of user interfaces, and input/output technologies
4. Analysis and design to produce desired levels of risk, dependability, safety, and fault tolerance in computer-based systems
5. System requirements and methods for eliciting and analyzing requirements for a computer-based system
6. System specifications, their relationship to requirements and system design, and methods for developing and evaluating quality specifications for computer-based systems
7. System architectural design and evaluation, including tools and methods for modeling, simulating, and evaluating system designs at the architectural level
8. Methods and tools for concurrent hardware and software design, system integration, testing, and validation, including unit and system level test plans
9. Design for manufacturability, sustainability, and maintainability throughout the product life cycle


!!! cite ""
    Extract from: ACM 2016 Computer Engineering Curriculum

<!--## Units

---

<div class="container px-4 py-2" id="custom-cards">
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
        <div class="col">
            <a href="02_Parallelism-Fundamentals">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2>PD/Parallelism Fundamentals</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <a href="03_Parallel-Decomposition">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2>PD/Parallel Decomposition</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <a href="04_Communication-Coordination">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2>PD/Communication and Coordination</h2>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
        <div class="col">
            <a href="05_Parallel-Algorithms-Analysis-Programming">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2>PD/Parallel Algorithms, Analysis, and Programming</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <a href="06_Parallel-Architecture">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2>PD/Parallel Architecture</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <a href="07_Parallel-Performance">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2>PD/Parallel Performance</h2>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
        <div class="col">
            <a href="08_Distributed-Systems">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2>PD/Distributed Systems</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <a href="09_Cloud-Computing">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2>PD/Cloud Computing</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <a href="10_Formal-Models-Semantics">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2>PD/Formal Models and Semantics</h2>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>-->

## History and overview

??? info "Learning outcomes"

    - Articulate differences between software and hardware engineering, and computer systems engineering.
    - Explain briefly the concept of a system and a subsystem, and discuss the role of people, the different disciplines involved, and the need for interdisciplinary approaches to the development of the range of computer-based systems.
    - Indicate some important elements of computer systems engineering such as design processes, requirements, specifications, design, testing, validation, evolution, project management, hardware-software interface, and the human-computer interface.
    - Define and explain product life cycle, the role of system engineering throughout a product life cycle, and reasons why many computer- based system designs become continually evolving systems.
    - Provide reasons for the importance of testing, validation, and maintenance in computer systems development.
    - Explain the importance of design decisions and tradeoffs at the systems level, including balancing costs, performance, power, dependability, and market considerations.

## Relevant tools, standards and/or engineering constraints

??? info "Learning outcomes"

    - Select, with justification, an appropriate set of tools to support the development of a range of computer-based systems, including tools for project management, requirements and specifications definition and analysis, configuration management, tradeoff analysis, and computer-aided tools for software, hardware, and systems design, including modeling, simulation, evaluation, and testing.
    - Analyze and evaluate a set of tools in an area of computer system development (e.g., management, modeling, or testing).
    - Demonstrate the ability to use a range of tools to support the development of a computer-based system of medium size. (This could be done in the context of a class project or assignment.)
    - Explain the importance and influence of standards, guidelines, legislation, regulations, and professional issues on the development of computer-based systems.
    - Describe tradeoffs that occur in following regulatory standards and regulations.

## Project management

??? info "Learning outcomes"

- Describe basic elements of project management that support development of computer-based systems for a variety of applications,
  including interdisciplinary issues.
- Describe the different phases of a system’s life cycle and identify tools to support these phases, including such project-management
  tools as Gantt charts for project planning, scheduling, cost analysis, resource allocation, and teamwork.
- Demonstrate, through involvement in team projects, the central elements of team building and team management, including team
  composition and organization, roles and responsibilities in a design team, decision-making processes, project tracking, and team
  problem resolution.
- Describe methods and tools for project configuration management and management of project information, ensuring timely
  compliance with specifications and timely delivery.
- Prepare a project plan for a computer-system design project that includes estimates of size and effort, a schedule, resource allocation,
  configuration control, change management, and project risk identification and management—this could be done in the context of a
  class project or assignment.
  Elective Learning Outcomes:
- Identify and describe the use of metrics in support of project management.
- Describe the roles of consultants and subcontractors in design projects, including their use and their management.
- Discuss how standards and legal requirements can affect the management of design projects.

## User Experience

??? info "Learning outcomes"

- Define the meaning of user experience (UX) and describe the evolution from human factors to user experience design (UXD).
- Contrast the physical and non-physical aspects of UXD.
- Summarize some common human-computer interaction styles, and discuss how one would analyze human interaction with computer-based systems.
- Describe common usability guidelines and standards; give examples of functional and usability requirements that can be beneficial in
  developing human-centered computer systems, including users with different abilities (e.g., age, physical disabilities).
- Identify fundamental principles for effective GUI design, relevant to different applications and different system platforms in computer engineering.
- Discuss tradeoffs involved when developing a UX system environment.
- Identify system components that are suitable for the realization of high-quality multimedia interfaces.
- Evaluate an existing interactive system with appropriate human-centered criteria and usability, giving reasons for selection of criteria and techniques.
- Discuss the role of visualization technologies in human-computer interaction.
- Explain the importance of social psychology in the design of user interfaces.
- Describe two main principles for universal design.
- List advantages and disadvantages of biometric access control.
- Describe a possible interface that allows a user with severe physical disabilities to use a website.
- Design, prototype, and conduct a usability test of a simple 2D GUI, using a provided GUI-builder, and, in doing so, create an appropriate usability test plan.
- Discuss other techniques for interaction, such as command line interface and shell scripts.
- Identify the potential for the use of intelligent systems in a range of computer-based applications, and describe situations in which intelligent systems may, or may not, be reliable enough to deliver a required response.

## Risk, dependability, safety, and fault tolerance

??? info "Learning outcomes"

- Recognize risk, dependability, and safety requirements for a range of computer-based systems, and discuss potential tradeoffs between these and other system requirements, such as performance and low-power operation.
- Explain the concepts of reliability, availability, and maintainability, as measures of system dependability, and explain their relationship to faults.
- Perform a risk analysis of a medium-size computer-based system.
- Identify at least two tradeoff concerns when developing a safety critical system.
- Indicate why it is important to know how to build dependable systems from unreliable components.
- Demonstrate an ability to model reliability, availability, and maintainability of simple computer-based systems.
- Describe some strategies for achieving desired levels of dependability, safety, and security.
- Discuss the nature of hardware and software faults, and redundancy methods used to tolerate them.
- Describe fault tolerance and dependability requirements of different applications (such as database, aerospace, telecommunications, industrial control, and transaction processing).
- Describe one or more strategies for risk reduction and risk control, including implications for implementation.
- Discuss how international standards, legal requirements, and regulations relate to risk, safety and dependability impact the design of computer-based systems. 2 User experience (UX) was formerly known as human-computer interaction (HCI)
- Discuss the use of failure modes and effects analysis (FEMA) and fault tree analysis in the design of high-integrity systems.
- Identify some hardware redundancy approaches for fault-tolerant system design, including the use of error detecting and correcting
  codes.
- Discuss one or more software approaches to tolerating hardware faults.
- Describe one or more methods for tolerating software faults, such as N-version programming, recovery blocks, and rollback and
  recovery.

## Hardware and software processes

??? info "Learning outcomes"

- Explain the need for a disciplined approach to system development and the elements of a disciplined approach in specific contexts.
- Describe the nature of a life cycle, the role of life cycle models, quality in relation to the life cycle, the influence of system nature, and
  the size on choice of life cycle model.
- Describe some common software and hardware development models and show how to use these models during the development of a
  computer-based system.
- Explain how to gather data to inform, assess, and improve system design processes.
- Describe the benefits of agile methods for hardware and software design.
- Discuss the importance of modular design processes, and the design for modularity and reuse in the development of a computer-based system.
- Select, with justification, system development models most appropriate for the development and maintenance of diverse computer-based systems.
- Explain the role of process maturity models, standards, and guidelines.
- Identify several metrics for software, hardware, and system processes.

## Requirements analysis and elicitation

??? info "Learning outcomes"

- Perform an analysis of a proposed computer-based system design project, including identification of need, information gathering, problem definition, feasibility considerations, and economic considerations.
- Articulate a range of functional and non-functional requirements that might be applicable to the design of computer-based systems for a range of applications, and discuss how requirements can change as a system design project evolves.
- Discuss how tradeoffs between different system requirements might be necessary for a proposed computer-based system design.
- Describe the strengths and weaknesses of different approaches to requirements elicitation and capture.
- Apply one or more techniques for elicitation and analysis to produce a set of requirements for a medium-size computer-based system.
- Describe some quality factors for measuring the ability of a system design to meet requirements
- Conduct a review of a computer-based system requirements document using best practices to determine the document’s quality.
  Elective Learning Outcomes:
- Use a common, non-formal method to model and state—in the form of a requirements specification document—the requirements for
  a medium-size computer-based system (e.g., structured analysis or object-oriented-analysis).

## System specifications

??? info "Learning outcomes"

- Discuss the relationship and differences between system specifications and requirements.
- Articulate some typical functional and nonfunctional specifications for the design of a computer-based system and the importance of
  specifications to the design process.
- Discuss one or more approaches for deriving system specifications from a requirements document.
- Discuss how tradeoffs between different system specifications might be necessary to meet system requirements.
- Assess the quality of a given specification, considering such factors as completeness, consistency, simplicity, verifiability, basis for design, specification in the event of failure, and degraded modes of operation.
- Given a set of requirements, create a high-quality specification for a computer-based system of medium complexity.
- Create a test plan, based on the specification, considering the role of independence in relation to test, safety cases, and limitations of such tests.
- Describe and demonstrate the use of one or more formal specification languages and techniques.
- Translate into natural language a system specification written in a commonly used formal specification language.

## System architectural design and evaluation

??? info "Learning outcomes"

- Describe concepts and principles of system architecture design, such as top-down design, subdivision into systems and subsystems, modularity and reuse, the hardware/software interface, and tradeoffs between various design options.
- Describe strengths and weaknesses of various systems-level architectural design methods, including procedural and functional methods.
- Describe design methods to meet system specifications and achieve performance measures, including dependability and safety.
- Given a system specification, select an appropriate design methodology (e.g., structured design or modular design) and create an architectural design for a medium-size computer-based system.
- Demonstrate ability to model, simulate, and prototype a range of computer-based system architectures.
- Using appropriate guidelines, conduct the review of one or more computer-based system designs to evaluate design quality based on key design principles and concepts.
- At the architectural level, discuss possible failure modes, common cause failures, dealing with failure, inclusion of diagnostics in the
  event of failure, and approaches to fault-tolerant design.
- Discuss design issues associated with achieving dependability, the role of redundancy, independence of designs, separation of concerns, and specifications of subsystems.

## Concurrent hardware and software design

??? info "Learning outcomes"

- Recognize the potential of hardware-software co-design in circumstances in which this approach is pertinent.
- Discuss how particular design constraints can make the coordinated development of both hardware and software important, such as in
  the design of low-power systems, real-time systems, or systems with high-performance requirements.
- Apply hardware-software co-design principles in situations of modest complexity.
- Discuss challenges to effective hardware-software co-design, such as demands of hard real-time features.
- Demonstrate ability to co-design to achieve specific technical objectives, such as low power, real-time operation, and high
  performance.
- Select and apply computer-aided tools to support hardware and software co-design.

## System integration, testing and validation

??? info "Learning outcomes"

- Recognize the range of testing and validation methods appropriate for each stage of the system life cycle, including review of hardware models and software code; white box, black box, and regression testing; stress testing; and interface testing.
- Describe the role of various system validation tools and show how tools can support efficient and effective development.
- Discuss approaches to testing and validation at the unit level and at the integration and system levels.
- Create a test plan and generate test cases for a computer-based system of medium complexity, selecting an appropriate combination of tests for ensuring system quality.
- Demonstrate the application of the different types and levels of testing (unit, integration, systems, and acceptance) on computer-based systems of medium size.
- Undertake, as part of a team activity, an inspection of a medium-size computer-based system design.
- Discuss methods used for manufacturing test and inspection, and acceptance testing.
  Elective Learning Objectives:
- Discuss methods for specialized testing: security, dependability/fault tolerance, and usability.

## Maintainability, sustainability, manufacturability

??? info "Learning outcomes"

- Describe the need for, and characteristics of, maintainable software, hardware, and system designs.
- Discuss the inevitability of maintenance in certain systems, such as diagnosis, defect removal, hardware and/or software upgrades, and enhancement.
- Describe how to apply principles of maintainable design to a computer-based system of modest complexity.
- Identify issues associated with system evolution and explain their impact on the system life cycle.
- Explain configuration management and version control in engineering systems—the need for it, the issues associated with it, the nature of the information to be held, legal requirements, and planning for possible disasters.
- Develop a plan for reengineering a medium-size product in response to a change request.
- Identify and exploit opportunities for component reuse in a variety of contexts.
- Discuss how design decisions can affect future generations, including impact on the environment and energy resources, and disposal of systems and components at end of life.
- Discuss design for manufacturability, part selection and standardization, manufacturing cost, and product lead-time for delivery