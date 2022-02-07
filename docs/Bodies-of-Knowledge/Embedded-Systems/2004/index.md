# Embedded Systems (ESY) 2004

## [ESY/History and overview](1_History-Overview.md)

**Topics**:

- Indicate some reasons for studying embedded systems
- Highlight some people that influenced or contributed to the area of embedded systems
- Indicate some important topic areas such as mapping between language and hardware, classifications, influence of software engineering, applications and techniques, and tool support
- Contrast between an embedded system and other computer systems
- Mention the role of programming and its associated languages as applied to embedded systems
- Explore some additional resources associated with embedded systems
- Explain the purpose and role of embedded systems in computer engineering


## [ESY/Embedded microcontrollers](2_Embedded-Microcontrollers.md)

**Topics**:

- Structure of a basic computer system: CPU, memory, I/O devices on a bus
- CPU families used in microcontrollers: 4-bit, 8-bit, 16-32-bit
- Basic I/O devices: timers/counters, GPIO, A/D, D/A
- Polled I/O vs. interrupt-driven I/O
- Interrupt structures: vectored and prioritized interrupts
- DMA transfers
- Memory management units
- Memory hierarchies and caches

## [ESY/Embedded programs](3_Embedded-Programs.md)

**Topics**:

- The program translation process: compilation, assembly, linking
- Representations of programs: data flow and control flow
- Fundamental concepts of assembly language and linking: labels, address management
- Compilation tasks: mapping variables to memory, managing data structures, translating control structures, and translating expressions
- What can and cannot be controlled through the compiler; when writing assembly language makes sense

## [ESY/Real-time operating systems](4_RTOS.md)

**Topics**:

- Context switching mechanisms
- Scheduling policies
- Rate-monotonic scheduling: theory and practice
- Priority inversion
- Other scheduling policies such as EDF
- Message-passing vs. shared memory communication
- Interprocess communication styles such as mailbox and RPC

## [ESY/Low-power computing](5_Low-Power.md)

**Topics**:

- Sources of energy consumption: toggling, leakage
- Instruction-level strategies for power management: function unit management
- Memory system power consumption: caches, off-chip memory
- Power consumption with multiple processes
- System-level power management: deterministic, probabilistic methods

## [ESY/Reliable system design](6_Reliable-System.md)

**Topics**:

- Transient vs. permanent failures in hardware
- Sources of errors from software
- The role of design verification in reliable system design
- Fault-tolerance techniques
- Famous failures of embedded computers

## [ESY/Design methodologies](7_Design-Methodologies.md)

**Topics**:

- Multi-person design projects
- Designing on-time and on-budget
- Design reviews
- Tracking error rates and sources
- Change management
  
## [ESY/Tool support](8_Tool-Support.md)

**Topics**:

- Compilers and programming environments
- Logic analyzers
- RTOS tools
- Power analysis
- Software management tools
- Project management tools

## [ESY/Embedded multiprocessors](9_Multiprocessors.md)

**Topics**:

- Importance of multiprocessors as in performance, power, and cost
- Hardware/software partitioning for single-bus systems
- More general architectures
- Platform FPGAs as multiprocessors

## [ESY/Networked embedded systems](10_Networked.md)

**Topics**:

- Why networked embedded systems
- Example networked embedded systems: automobiles, factory automation systems
- The OSI reference model
- Types of network fabrics
- Network performance analysis
- Basic principles of the Internet protocol
- Internet-enabled embedded systems

## [ESY/Interfacing and mixed-signal systems](11_Interfacing-Mixed-Signal.md)

**Topics**:

- Digital-to-analog conversion
- Analog-to-digital conversion
- How to partition analog/digital processing in interfaces
- Digital processing and real-time considerations
