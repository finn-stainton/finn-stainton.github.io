# Digital Design (DIG)

**Area Scope**

The knowledge units in this area collectively encompass the following:

1. Digital design basics: number representation, arithmetic operations, Boolean algebra, and their realization as basic logic circuits
2. Building blocks: combinational, sequential, memories, and elements for arithmetic operations
3. Hardware Description Languages (HDLs), digital circuit modeling, design tools, and tool flow
4. Programmable logic platforms (e.g., FPGAs) for implementing digital systems
5. Datapaths and control units composed of combinational and sequential building blocks
6. Analysis and design of digital systems including design space exploration, and tradeoffs based on constraints such as performance, power, and cost

## History and overview

**Learning Outcomes**:

- Identify some early contributors to digital design and relate their achievements to the knowledge area.
- Discuss applications in computer engineering that benefit from the area of digital design.
- Describe how Boolean logic relates to digital design.
- Enumerate key components of digital design such as combinational gates, memory elements, and arithmetic blocks.

## Relevant tools, standards, and/or engineering constraints

**Learning Outcomes**:

- Describe design tools and tool flow (e.g., design entry, compilation, simulation, and analysis) that are useful for the creation and simulation of digital circuits and systems.
- Discuss the need for standards and enumerate standards important to the area of digital design such as floating-point numbers (IEEE 1)   and character encoding (ASCII, Unicode)
- Use one of the standard HDLs (e.g., IEEE 1364/Verilog, IEEE 1076/VHDL) for modeling simple digital circuits.
- Define important engineering constraints such as timing, performance, power, size, weight, cost, and their tradeoffs in the context of digital systems design.

## Number systems and data encoding

**Learning Outcomes**:

- Convert signed/unsigned, integer/fixed-point decimal numbers to/from binary/hex representations.
- Perform integer/fixed-point addition/subtraction using binary/hex number representations.
- Define precision and overflow for integer/fixed-point, signed/unsigned, addition/subtraction operations.
- Encode/decode character strings using ASCII and Unicode standards.

## Boolean algebra applications

**Learning Outcomes**:

- Define basic (AND, OR, NOT) and derived (e.g., NAND, NOR, XOR) Boolean operations.
- Enumerate Boolean algebra laws and theorems.
- Use basic and derived Boolean operations to evaluate Boolean expressions.
- Write and simplify Boolean expressions by applying appropriate laws and theorems and other techniques (e.g., Karnaugh maps).

## Basic logic circuits

**Learning Outcomes**:

- Describe electrical representations of TRUE/FALSE.
- Describe physical logic gate implementations of basic (AND, OR, NOT) and derived (e.g., NAND, NOR, XOR) Boolean operations.
- Describe the high-impedance condition and logic gate implementation such as a tri-state buffer.
- Implement Boolean expressions using the two-level gate forms of AND-OR, OR-AND, NAND-NAND, NOR-NOR and positive/negative/mixed-logic conventions.
- Implement Boolean expressions using multiple gating levels and positive/negative/mixed-logic conventions.
- Discuss the physical properties of logic gates such as fan-in, fan-out, propagation delay, power consumption, logic voltage levels, and noise margin and their impact on the constraints and tradeoffs of a design.
- Explain the need for a hardware description language (HDL) in digital system design.
- Describe the logic synthesis process that transforms an HDL description into a physical implementation.
- Implement combinational networks using an HDL and generate/verify using appropriate design tools.

## Modular design of combinational circuits

**Learning Outcomes**:

- Describe and design single-bit/multi-bit structure/operation of combinational building blocks such as multiplexers, demultiplexers, decoders, and encoders.
- Describe and design the structure/operation of arithmetic building blocks such adders (ripple-carry), subtractor, shifters, and comparators.
- Describe and design structures for improving adder performance such as carry lookahead and carry select.
- Analyze and design combinational circuits (e.g., arithmetic logic unit, ALU) in a hierarchical, modular manner, using standard and custom combinational building blocks.
- Implement combinational building blocks and modular circuits using an HDL and generate/verify using appropriate design tools.

## Modular design of sequential circuits

**Learning Outcomes**:

- Define a clock signal using period, frequency, and duty-cycle parameters.
- Explain the structure/operation of basic latches (D, SR) and flip-flops (D, JK, T).
- Describe propagation delay, setup time, and hold time for basic latches and flip-flops.
- Describe and design the structure/operation of sequential building blocks such as registers, counters, and shift registers.
- Analyze and create timing diagrams for sequential block operation.
- Enumerate design tradeoffs in using different types of basic storage elements for sequential building block implementation.
- Implement sequential building blocks using an HDL and generate/verify using appropriate design tools.
- Describe the characteristics of static memory types such static SRAM, ROM, and EEPROM.
- Describe the characteristics of dynamic memories.
Elective Learning Outcomes:
- Describe techniques (e.g., handshaking) of asynchronous design, and discuss their advantages (e.g., performance/power in some cases) and design issues (e.g., hazards such as race conditions, lack of tool support).
- Describe the characteristics of advanced memory technologies such as multi-port memories, double data rate (DDR) memories, and hybrid memories (e.g., hybrid memory cube, HMC).

## Control and datapath design

**Learning Outcomes**:

- Describe a digital system that is partitioned into control+datapath and explain the need for control to sequence operations on a
datapath.
- Contrast the different types of Finite State Machines (FSMs): e.g., Mealy State Machine, Moore State Machine, and Algorithmic State Machine (ASM).
- Represent FSM operation graphically using a state diagram (e.g., Mealy state diagram, Moore state diagram, or ASM chart).
- Analyze state diagrams and create timing diagrams for FSM operation.
- Compute timing parameters such as maximum operating frequency, setup/hold time of synchronous inputs, clock-to-out propagation delays, pin-to-pin propagate delay for a control+datapath design.
- Design an RTL model of a control+datapath using a HDL and synthesize/verify using appropriate design tools.
- Discuss clock generation, clock distribution, clock skew in relationship to a control+datapath design.
- Use pipelining to improve the performance of a control+datapath design.
- Discuss applications that require serialization/de-serialization of bit streams, and implement a design that performs serialization/de-serialization.

## Design with programmable logic

**Learning Outcomes**:

- Describe basic elements of programmable logic such as lookup tables (LUTs), AND/OR plane programmable logic, programmable mux
logic, and programmable routing.
- Discuss programmable logic architectures such as Field Programmable Gate Arrays (FPGAs) and Complex Programmable Logic Devices
(CPLDs).
- Describe common features of programmable logic architectures such as hard macros (e.g., adders, multipliers, SRAMs), clock
generation support (e.g., PLLs, multiple clock networks), and support for different logic standards.
- Implement a digital system in an FPGA or CPLD and describe and evaluate tradeoffs for implementation characteristics such as
programmable logic resources that are used, maximum clock frequency, setup/hold times for external inputs, and clock-to-out delay.
- Describe advanced features of programmable logic architectures in the form of hard macros such as CPUs, high-speed serial
transceivers, and support for other transceiver standards (e.g., PCI Express, Ethernet PCS).

## System design and constraints

**Learning Outcomes**:

- Contrast top-down versus bottom-up design methodologies for system design.
- Describe how to use logic synthesis timing constraints with an appropriate design tool for affecting logic generated for a control+datapath implementation.
- Use constraints of clock-cycle latency and clock-cycle throughput to create alternate designs for a digital system.
- Use other appropriate design tools (e.g., power estimator) for design space exploration and tradeoffs based on constraints such as performance, power, and cost.
- Describe the role of testability as a system design constraint and different approaches and tools for improving testability.
- Describe features/architecture of the JTAG standard and its role in digital systems testing.
- Create an HDL-based self-checking behavioral test bench for a digital system design.


## Fault models, testing, and design for testability

**Learning Outcomes**:

- Explain the need for systematic testing methods in digital design.
- Define fault models such as stuck-at, bridging, and delay.
- Define the terms controllability, observability, test coverage, and test generation when designing a method for testing a digital system.
- Describe design for testability methods such as ad-hoc, full-scan/partial scan and built-in-self-test (BIST).
- Describe the role of computer-aided testing tools for digital systems testing