# Computer Architecture and Organization (2004)

## CA/History and overview of computer architecture and organization 

**Topics**:

- Indicate some reasons for studying computer architecture and organization
- Highlight some people that influenced or contributed to the area of computer architecture and organization
- Indicate some important topic areas such as system organization and architecture, memory, interfacing, microprocessors, and performance
- Contrast the meanings of between computer organization and computer architecture
- Indicate the importance of doing binary arithmetic with computers
- Mention memory as a crucial component to the design of a computer
- Illustrate the importance of interfacing with computer components and peripherals
- Mention a typical CPU and sketch its organization
- Indicate why performance leads to alternate architectures
- Mention caching a way to improve performance
- Mention some of the strategies used in architecture such as CISC and RISC approaches
- Mention the strategies of multiprocessing strategies and their potential
- Explore some additional resources associated with computer architecture and organization
- Explain the purpose and role of computer architecture and organization in computer engineering
  
??? info "Learning Outcomes"

    1. Identify some contributors to computer architecture and organization and relate their achievements to the knowledge area. 
    2. Explain the reasons and strategies for different architectures.
    3. Articulate differences between computer organization and computer architecture.
    4. Identify some of the components of a computer.
    5. Indicate some strengths and weaknesses inherent in different architectures.
    6. Describe how computer engineering uses or benefits from computer architecture and organization.
   
## CA/Fundamentals of computer architecture (2004)

**Topics**:

- Organization of the von Neumann machine
- Instruction formats
- The fetch/execute cycle; instruction decoding and execution
- Registers and register files
- Instruction types and addressing modes
- Subroutine call and return mechanisms
- Programming in assembly language
- I/O techniques and interrupts
- Other design issues

??? info "Learning Outcomes"

    1. Explain the organization of a von Neumann machine and its major functional units.
    2. Explain how a computer fetches from memory and executes an instruction.
    3. Articulate the strengths and weaknesses of the von Neumann architecture.
    4. Explain the relationship between the representation of machine level operation at the binary level and their representation by a symbolic assembler.
	5. Explain why a designer adopted a given different instruction formats, such as the number of addresses per instruction and
    variable length vs. fixed length formats.
	6. Write small programs and fragments of assembly language code to demonstrate an understanding of machine level operations.
    7. Implement some fundamental high-level programming constructs at the machine-language level.
    8. Use computer simulation packages to investigate assembly language programming.

## CA/Computer arithmetic (2004)

**Topics**:

- Representation of integers (positive and negative numbers)
- Algorithms for common arithmetic operations (addition, subtraction, multiplication, division)
- Significance of range, precision, and accuracy in computer arithmetic
- Representation of real numbers (standards for floating-point arithmetic)
- Algorithms for carrying out common floating-point operations
- Converting between integer and real numbers
- Multi-precision arithmetic
- Hardware and software implementation of arithmetic unit
- The generation of higher order functions from square roots to transcendental functions
  
??? info "Learning Outcomes"

    1. Appreciate how numerical values are represented in digital computers
    2. Understand the limitations of computer arithmetic and the effects of errors on calculations. 
    3. Appreciate the effect of a processor’s arithmetic unit on its overall performance,

## CA/Memory system organization and architecture (2004) 

**Topics**:

- Memory systems hierarchy
- Coding, data compression, and data integrity
- Electronic, magnetic and optical technologies
- Main memory organization and its characteristics and performance
- Latency, cycle time, bandwidth, and interleaving
- Cache memories (address mapping, line size, replacement and write-back policies)
- Virtual memory systems
- Memory technologies such as DRAM, EPROM, and FLASH
- Reliability of memory systems; error detecting and error correcting systems

??? info "Learning Outcomes"

    1. Identify the main types of memory technology.
    2. Explain the effect of memory latency and bandwidth on performance.
    3. Explain the use of memory hierarchy to reduce the effective memory latency. 4. Describe the principles of memory management.
    4. Understand how errors in memory systems arise and how to resolve them.

## CA/Interfacing and communication (2004)

**Topics**:

- I/O fundamentals: handshaking, buffering,
- I/O techniques: programmed I/O, interrupt-driven I/O, DMA
- Interrupt structures: vectored and prioritized, interrupt overhead, interrupts and reentrant code
- Memory system design and interfacing
- Buses: bus protocols, local and geographic arbitration

??? info "Learning Outcomes"

    1. Explain how to use interrupts to implement I/O control and data transfers.
    2. Write small interrupt service routines and I/O drivers using assembly language. 3. Identify various types of buses in a computer system.
    3. Describe data access from a magnetic disk drive.
    4. Analyze and implement interfaces.

## CA/Device subsystems (2004)

Topics:

- External storage systems; organization and structure of disk drives and optical memory
- Basic I/O controllers such as a keyboard and a mouse - RAID architectures
- Video control
- I/O Performance
- SMART technology and fault detection - Processor to network interfaces

??? info "Learning Outcomes"

    1. Compute the various parameters of performance for standard I/O types. 2. Explain the basic nature human computer interaction devices.
    2. Describe data access from magnetic and optical disk drives.

## CA/Processor systems design (2004)

Topics:

- The CPU interface: clock, control, data and address buses
- Address decoding and memory interfacing
- Basic parallel and serial interfaces
- Timers
- System firmware

??? info "Learning Outcomes"

    1. Understand how a CPU chip becomes a complete system.
    2. Design an interface to memory
    3. Understand how to interface and use peripheral chips
    4. Write sufficient EPROM-based system software to create a basic stand-alone system. 5. Specify and design simple computer interfaces.

## CA/Organization of the CPU (2004)

Topics:

- Implementation of the von Neumann machine
- Single vs. multiple bus datapaths
- Instruction set architecture; machine architecture as a framework for encapsulating design decisions
- Relationship between the architecture and the compiler
- Implementing instructions
- Control unit: hardwired realization vs. microprogrammed realization
- Arithmetic units, for multiplication and division
- Instruction pipelining
- Trends in computer architecture: CISC, RISC, VLIW
- Introduction to instruction-level parallelism (ILP)
- Pipeline hazards: structural, data and control
- Reducing the effects of hazards

??? info "Learning Outcomes"

    1. Compare alternative implementation of datapaths.
    2. Discuss the generation of control signals using hardwired or microprogrammed implementations.
    3. Explain basic instruction level parallelism using pipelining and the major hazards that may occur.
    4. Explain what has been done to overcome the effect of branches
    5. Discuss the way in which instruction sets have evolved to improve performance; for example, predicated execution.

## CA/Performance (2004)

**Topics**:

- Metrics for computer performance; clock rate, MIPS, Cycles per instruction, benchmarks
- Strengths and weaknesses of performance metrics
- Averaging metrics: arithmetic, geometric and harmonic
- The role of Amdahl’s law in computer performance

??? info "Learning Outcomes"

    1. Understand the factors that contribute to computer performance.
    2. Understand the limitations of performance metrics
    3. Select the most appropriate performance metric when evaluating a computer.
    4. Discuss the impact on control and datapath design for performance enhancements.
 
## CA/Distributed system models (2004)

**Topics**:

- Classification of models: parallel machine models (SIMD, MIMD, SISD, MISD): Flynn’s taxonomy, Handler’s classification, message passing
- Granularity, levels of parallelism
- Multiprocessors and multi-computers: Topology, tightly coupled and loosely coupled architectures
-  Processes: threads, clients, servers, code migration, software agents
-   Physical and logical clocks: clock synchronizing algorithms, Lamport timestamps, vector timestamps
- Election Algorithms
- Mutual Exclusion algorithms
- Distributed transactions: models, classification, concurrency control

??? info "Learning Outcomes"

    1. Explain the differences between different paradigms and their usefulness and applicability
    2. Understand how client server model works in a decentralized fashion
    3. Understand how agents work and how they solve simple tasks.
    4. Understand the concept of logical clocks vs. physical clocks and how they affect implementation of distributed systems 
    5. Be familiar with simple election and mutual exclusion algorithms and their applicability.

## CA/Performance enhancements (2004)

**Topics**:

- Superscalar architecture
- Branch prediction
- Prefetching
- Speculative execution
- Multithreading
- Scalability
- Short vector instruction sets: Streaming extensions, AltiVec, relationship between computer architecture and multimedia applications

??? info "Learning Outcomes"

    1. Discuss how various architectural enhancements affect system performance.
    2. Discuss how to apply parallel processing approaches to design scalar and superscalar processors.
    3. Discuss how to apply vector-processing techniques to enhance instruction sets for multimedia and signal processing. 4. Understand how each of the functional parts of a computer system affects its overall performance.
    4. Estimate the effect on system performance of changes to functional units.