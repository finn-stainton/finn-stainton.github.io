# VLSI Design and Fabrication (VLS)

## VLS/History and overview

**Topics**:

- Indicate some reasons for studying VLSI and ASIC design
- Highlight some people that influenced or contributed to the area of VLSI and ASIC design
- Indicate some important topic areas such as MOS transistors, inverter structure, circuit performance, combinational and sequential circuits, memory and array structures, chip I/O design, and application-specific integrated circuits
- Describe a transistor and relate it to a semiconductor
- Indicate the characteristics of a MOS transistor
- Describe CMOS transistors and contrast them with MOS technologies
- Describe some sequential logic circuits such as latches and clock distribution
- Describe the structure of memory design
- Contrast memory structures with array structures
- Contrast the advantages of SRAM and DRAM memory devices
- Describe at which point a circuit becomes a chip
- Provide some examples of application-specific integrated circuits
- Explore some additional resources associated with VLSI and ASIC design
- Explain the purpose and role of VLSI and ASIC design in computer engineering

**Learning outcomes**:

1. Identify some contributors to VLSI and ASIC design and relate their achievements to the knowledge area. 2. Define a semiconductor.
2. Explain the difference between MOS and CMOS transistors.
3. Define a sequential circuit.
4. Identify some memory devices related to VLSI circuits.
5. Define the meaning of a chip.
6. Give an example of an ASIC chip design.
7. Describe how computer engineering uses or benefits from VLSI and ASIC design.

## VLS/Electronic properties of materials

**Topics**:

- Solid-state materials
- Electronics and holes
- Doping, acceptors and donors
- p- and n-type material
- Conductivity and resistivity
- Drift and diffusion currents, mobility and diffusion

**Learning outcomes**:

1. Understand the current carrying mechanism and the I/V characteristics of intrinsic and doped semiconductor materials. 2. Understand the behavior and the I/V characteristics of a reverse-biased and forward-biased PN junction.
3. Understand the function of a PMOS and a NMOS field effect transistor (FET).
4. Indicate a method to model that function using the device equations.
5. Understand the effect of sub-micron device sizes on the function of MOSFETS.
6. Understand the origin and effect of parasitic resistances and capacitances within the transistor itself.

## VLS/Function of the basic inverter structure

**Topics**:

- Connectivity, layout, and basic functionality of a CMOS inverter
- The CMOS inverter voltage transfer characteristic (VTC)
- Analysis of the CMOS VTC for switching threshold, VOH, VOL, VIH, VIL, and noise margins
- Effect of changing the inverter configuration on the CMOS VTC
- Connectivity and basic functionality of a Bipolar ECL inverter (optional)
- Connectivity and basic functionality of a Bipolar TTL inverter (optional)

**Learning outcomes**:

1. Understand the basic functionality of the CMOS inverter.
2. Understand how the VTC of a CMOS inverter is derived from the PMOS and NMOS characteristic ID vs. VDS family of curves.
3. Analyze the VTC to determine switching threshold, VOH, VOL, VIH, VIL, and Noise Margins.
4. Understand how these quantities reflect the ability of the inverter to operate in the presence of noise.
5. Understand how changing the configuration of the inverter and the MOSFETS that make it up changes the VTC and thus the inverter’s operation.
6. Understand the functionality of bipolar-based logic gates. (Optional)

## VLS/Combinational logic structures

**Topics**:

- Basic CMOS gate design
- Layout techniques for combinational logic structures
- Transistor sizing for complex CMOS logic devices
- Transmission gates
- Architectural building blocks (multiplexers, decoders, adders, counters, multipliers)

**Learning outcomes**:

1. Understand the method to perform circuit design for CMOS logic gates.
2. Understand the techniques, such as Euler paths and stick diagrams, used to optimize the layout of CMOS logic circuits. 
3. Understand how the size for each transistor in a CMOS logic gate can be determined.
4. Understand the functionality of the CMOS transmission gate.
5. Demonstrate how to use these gates in several logic functions (e.g. multiplexers, transmission gate-based XOR gates). 6. Understand the functionality of several of the more important architectural building blocks identified above.
6. Demonstrate how to optimize these blocks for CMOS implementation.

## VLS/Sequential logic structures

**Topics**:

- Storage mechanisms in CMOS logic
- Dynamic latch circuits
- Static latch and flip-flop circuits
- Sequential circuit design
- Single and multiphase clocking
- Clock distribution, clock skew

**Learning outcomes**:

1. Understand how to use charge storage (capacitance) and feedback to store values in CMOS logic.
2. Understand the circuit design, functionality, advantages, and disadvantages of dynamic latches in CMOS.
3. Understand the circuit design, functionality and advantages and disadvantages of static latches and flip-flops (including edge-
triggered) in CMOS.
4. Understand the concepts of bi-stability and metastability in static flip-flops.
5. Understand how latches and flip-flops are used in the design of state machines and data paths
6. Understand the functionality, advantages, and disadvantages of single phase clocking, both level sensitive and edge triggered.
7. Understand the functionality, advantages, and disadvantages of multi (two) phase clocking.
8. Understand the problems arising from clock skew and how one can use clock distribution schemes (including the use of PLLs) to solve it.


## VLS/Semiconductor memories and logic arrays

**Topics**:

- Latches
- Flip-flops
- Dynamic read-write memory (DRAM) circuits
- Static read-write memory (SRAM) circuits
- Memory system organization
- Read-only memory circuits
- EPROM/EEPROM/Flash memory circuits
- Programmable Logic Array (PLA) circuits
- FPGA and related devices
- Sense amplifiers

**Learning outcomes**:

1. Understand how we organize memory systems and why we do not typically organize them in the most simplistic arrangement such as in a one-dimensional word array.
2. Understand the circuit-level implementations possible for read-only memory (ROM) organizations.
3. Understand the layout and function of the specialized transistors used in non-volatile ROM devices and how their
characteristics influence the circuit-level implementations of ROMs using them.
4. Understand the functionality and layout of cells used to implement static RAM (SRAM) memories.
5. Understand how SRAMs are typically organized and how their associated peripheral circuitry (sense amps, decoders, address
translation detectors, etc.) is organized and functions.
6. Understand how a typical 3-transistor and 1-transistor DRAM cell functions and how to represent them.
7. Understand how DRAMs are typically organized and accessed, and how their associated peripheral circuitry (sense amps,
decoders, etc.) is organized and functions.
8. Understand how PLAs function, how can be implemented in CMOS, and how logic functions are mapped to them.

## VLS/Chip input/output circuits

**Topics**:

- General I/O pad issues
- Bonding pads
- ESD Protection circuits
- Input, Output, Bidirectional, and analog pads
- VDD and VSS pads

**Learning outcomes**:

1. Understand the unique functions that I/O circuits must perform and their general circuit-level implementations.
2. Understand the functions of signal I/O pads and their general transistor-level implementations.
3. Understand the functions of VDD and VSS pads for both the core and padframe, and their general transistor-level implementations.

## VLS/Processing and layout

**Topics**:

- Processing steps for patterning SiO2 on a silicon wafer
- CMOS processing technology steps and their results
- Layout design rules and their objectives
- Scalable (λ-based) design rules
- Design-rule checking

**Learning outcomes**:

1. Understand the basic steps of photolithography, its limitations, and how that determines minimum line width and device sizes. 2. Understand the processing steps required for fabrication of CMOS devises and the general results of each step.
2. Understand the physical defects that can arise in silicon processing and how design rules attempt to minimize their effects.
3. Understand the spacing and minimum device sizes specified by a typical set of design rules.
4. Understand the benefits and tradeoffs of a -based scalable design rule. 6. Understand the process and tools used for design rule checking.

## VLS/Circuit characterization and performance

**Topics**:

- Switching characteristics (rise and fall times, gate delays)
- Power dissipation
- Resistance and capacitance estimation
- CMOS transistor sizing
- Conductor sizing

**Learning outcomes**:

1. Understand the basic causes of propagation delay and power dissipation in CMOS logic.
2. Understand the techniques for estimating parasitic resistance and capacitance for various layers on a CMOS integrated circuit. 3. Understand the effects of changing (and optimizing) the transistor widths in CMOS logic.
3. Understand the effects of changing (and optimizing) the conductor widths on a CMOS integrated circuit.

## VLS/Alternative circuit structures/low power design

**Topics**:

- NMOS
- Pseudo-NMOS,
- Domino-CMOS
- CVSL
- Low power design

**Learning outcomes**:

1. Understand how to implement MOSFET-based logic families other than CMOS. 2. Understand the advantages and disadvantages of these logic families.
2. Understand the reasons for dynamic and static leakage power.
3. Understand how to design CMOS circuits for low power.

## VLS/Semi-custom design technologies

**Topics**:

- Full custom methodology
- Standard cell methodology
- Gate array technologies
- Structured ASICs
- Programmable logic technologies
- Field-programmable gate arrays (FPGAs)
- Time to market and design economics

**Learning outcomes**:

1. Understand the different design techniques, methodologies, and implementation technologies available to implement a function on a single integrated circuit.
2. Understand the advantages and disadvantages of each technique.
3. Demonstrate how a designer might go about selecting a specific technique for his or her current project.

## VLS/ASIC design methodology

**Topics**:

- ASIC design flow (custom, semicustom)
- Design hierarchy
- Computer-aided design (CAD): design modeling and capture (schematic, HDL); design verification (formal, simulation, timing analysis); automated synthesis; layout, floorplanning, place and route; back annotation
- Semi-custom design with programmable logic devices and programmable gate arrays
- System-on-chip (SOC) design and intellectual property (IP) cores
- Testing and design for testability
- Verification

**Learning outcomes**:

1. Understand the more detailed design issues present in implementing a given digital system on an application-specific integrated circuit (ASIC)
2. Understand the function, capabilities, and disadvantages of the various computer-aided design (CAD) tools available to the ASIC designer to automate portions of the design process.
3. Understand the issues that come with implementing a real world, complex design in an ASIC for a production environment.
4. Understand the basic principles of test generation and design for testability
5. Understand the difference between testing and verification