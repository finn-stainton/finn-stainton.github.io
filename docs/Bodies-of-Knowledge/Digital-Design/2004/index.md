# DIG/Digital Logic (2004)

## DIG/History and overview

**Topics**:

- Indicate some reasons for studying digital logic
- Highlight some people that influenced or contributed to the area of digital logic
- Indicate some important topic areas such as logic circuits, switching, memory, registers, and digital systems
- Highlight the importance of Boolean logic to the knowledge area
- Mention the meaning and importance of sequential logic
- Contrast the meanings of gates, circuits, combinational circuits, and modules
- Indicate that memory is a logical circuit
- Highlight that a special form of memory module forms registers
- Mention how systems result from modules and circuits
- Explore some additional resources associated with digital logic
- Explain the purpose and role of digital logic in computer engineering

??? "Learning outcomes:"

    1. Identify some contributors to digital logic and relate their achievements to the knowledge area. 
    2. Explain why Boolean logic is important to this subject.
    3. Articulate why gates are the fundamental elements of a digital system.
    4. Contrast the difference between a memory element and a register.
    5. Indicate some uses for sequential logic.
    6. Describe how computer engineering uses or benefits from digital logic.

## DIG/Switching theory 

**Topics**:

- Number systems and codes
- Binary arithmetic
- Boolean and switching algebra
- Representation and manipulation of switching functions
- Minimization of switching functions
- Incompletely specified switching functions

??? "Learning outcomes:"

    1. Work with binary number systems and arithmetic.
    2. Derive and manipulate switching functions that form the basis of digital circuits. 3. Reduce switching functions to simplify circuits used to realize them.

## DIG/Combinational logic circuits

**Topics**:

- Basic logic gates (AND,OR,NOT,NAND,NOR,XOR)
- Realization of switching functions with networks of logic gates
- 2-level networks: AND-OR,OR-AND,NAND-NAND,NOR-NOR
- Multi-level networks
- Physical properties of logic gates (technology, fan-in, fan-out, propagation delay)
- Elimination of timing hazards/glitches

??? "Learning outcomes:"

    1. Realize switching functions with networks of logic gates.
    2. Explain and apply fundamental characteristics of relevant electronic technologies, such as propagation delay, fan-in, fan-out, and power dissipation and noise margin.

## DIG/Modular design of combinational circuits

**Topics**:

- Design of medium scale combinational logic modules
- Multiplexers, demultiplexers, decoders, encoders, comparators
- Arithmetic functions (adders, subtracters, carry lookahead)
- Multipliers, dividers
- Arithmetic and logic units (ALUs)
- Hierarchical design of combinational circuits using logic modules

??? "Learning outcomes:"

    1. Analyze and explain uses of small- and medium-scale logic functions as building blocks.
    2. Analyze and design combinational logic networks in a hierarchical, modular approach, using standard and custom logic functions.

## DIG/Memory elements

**Topics**:

- Unclocked and clocked memory devices (latches, flip flops)
- Level vs. edge-sensitive, and master-slave devices
- Basic flip flops (SR, D, JK, T)
- Asynchronous flip flop inputs (preset, clear)
- Timing constraints (setup time, hold time) and propagation delays
- Data registers (selection, clocking, timing)
- Random-access memory (RAM)

??? "Learning outcomes:"

    1. Design and describe the operation of basic memory elements.
    2. Analyze circuits containing basic memory elements.
    3. Apply the concepts of basic timing issues, including clocking, timing constraints, and propagation delays during the design process.

## DIG/Sequential logic circuits

**Topics**:

- Finite state machines (FSMs), clocked and unclocked
- Mealy vs. Moore models of FSMs
- Modeling FSM behavior: State diagrams and state tables, timing diagrams, algorithmic state machine charts
- Analysis of synchronous and asynchronous circuits
- Design of synchronous sequential circuits: State minimization, state assignment, next state and output equation realization
- Sequential functional units: Data registers, shift registers, counters, sequence detectors, synchronizers, debouncers, controllers

??? "Learning outcomes:"

    1. Analyze the behavior of synchronous and asynchronous machines. 
    2. Synthesize synchronous and asynchronous sequential machines.

## DIG/Digital systems design

**Topics**:

- Hierarchical, modular design of digital systems
- Synthesis of digital circuits from HDL models
- Design principles and techniques: Bridging conceptual levels – top down/bottom up, divide and conquer, iteration, satisfying a behavior with a digital structure
- Functional units, building blocks and LSI components: Adder, shifter, register, ALU, and control circuits, tri-state devices and buses
- Control concepts: Register transfer notation, major control state, sequences of micro-operations, conditional execution of micro-operations
- Timing concepts: System timing dependencies, sequencing, clock generation, distribution, and skew
- Programmable logic devices (PLDs) and field-programmable gate arrays (FPGAs), PLAs, ROMs, PALs, complex PLDs

??? "Learning outcomes:"

    1. Apply digital system design principles and descriptive techniques.
    2. Analyze and design functional building blocks and control and timing concepts of digital systems.
    3. Develop a complex digital system design in a hierarchical fashion using top-down and bottom-up design approaches. 
    4. Utilize programmable devices such as FPGAs and PLDs to implement digital system designs.

## DIG/Modeling and simulation

**Topics**:

- Schematic capture
- Hierarchical schematic modeling for complex systems
- Digital system modeling with hardware description languages (VHDL, Verilog)
- Other modeling techniques (timing diagrams, register transfer languages, state diagrams, algorithmic state machines)
- Functional simulation of combinational and sequential circuits
- Timing models of digital circuit elements: Propagation delay, rise/fall time, setup and hold times, pulse widths
- Timing simulation to measure delays and study signals subject to timing constraints
- Simulation test-bench design

??? "Learning outcomes:"

    1. Model and simulate a digital system using schematic diagrams.
    2. Model and simulate a digital system using a hardware description language, such as VHDL or Verilog. 
    3. Understand timing issues in digital systems and know how to study these via digital circuit simulation.

## DIG/Formal verification

**Topics**:

- Relationship of good design practice to formal verification
- Comparison and contrast of formal verification, validation, testing, and reliability
- Verification by model checking
- Verification by proofs
- Verification by equivalence checking
- Verification by simulation and test-benches
- Verification by assertions and verification languages
- Verification by testing
- Economics of verification
- Other verification: signal integrity, specification, reliability, safety, power, cooling

??? "Learning outcomes:"

    1. Understand the difference between good design practice and formal verification. 
    2. Distinguish between the various forms of verification.

## DIG/Faults models and testing

**Topics**:

- Logical (stuck-at) faults (single and multiple)
- Other fault models (bridging, opens, delay faults)
- Yield and defect levels
- Test coverage
- Fault equivalence and dominance
- Fault simulation and fault grading
- Test generation algorithms such as the D-algorithm and PODEM
- Automatic Test Pattern Generation (ATPG): Pseudorandom techniques, deterministic test pattern generation
- Test generation algorithms for sequential circuits
- Memory testing
- PLA testing

??? "Learning outcomes:"

    1. Understand the types and characteristics of the most common faults that occur in digital circuits.
    2. Understand the concept of test coverage, and be able to design a test to achieve high test coverage for stuck-at faults. 3. Understand the role of computer-aided testing tools, including fault simulation and ATPG.
    3. Understand basic approaches to testing memory devices and PLAs.

## DIG/Design for testability 

**Topics**:

- Testability measures (controllability, observability)
- Scan and partial scan design
- BIST and other design for testability techniques
- Boundary scan and the IEEE 1149.1 testability standard
- Ad-hoc methods

??? "Learning outcomes:"

    1. Understand measures of testability to appreciate what to do to improve testability.
    2. Understand scan design and some of the other basic methods used to improve testability in digital circuits. 3. Understand the concept of built-in self test and some of the basic BIST approaches used in digital circuits.