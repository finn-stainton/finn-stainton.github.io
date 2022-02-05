# Circuits and Electronics (CAE)

**Area Scope**

The knowledge units in this area collectively encompass the following:

1. Purpose and role of circuits and electronics in computer engineering, including key differences between analog and digital circuits, their implementations, and methods of approximating digital behavior with analog systems
2. Definitions and representations of basic electrical quantities and elements, as well as the relationships among them
3. Analysis and design of simple electronic circuits using appropriate techniques, including software tools, and incorporating appropriate constraints and tradeoffs
4. Properties of materials that make them useful for constructing electronic devices
5. Properties of semiconductor devices, their use as amplifiers and switches, and their use in the construction of a range of basic analog and logic circuits
6. Effects of device parameters and various design styles on circuit characteristics, such as timing, power, and performance
7. Practical considerations and tradeoffs associated with distributing signals within large circuits and of interfacing between different logic families or with external environments

## History and overview

**Learning Outcomes**:

- Describe ways in which computer engineering uses or benefits from electronic devices and circuits.
- Identify some contributors to circuits and electronics and relate their achievements to this knowledge area.
- Explain the key differences between analog and digital systems, their implementations, and methods for approximating digital behavior
with analog systems.
- Summarize basic electrical quantities and elements that show the relationship between current and voltage.
- Describe the use of the transistor as an amplifier and as a switch.
- Explain the historical progression from discrete devices to integrated circuits to current state-of-the-art electronics.

## Relevant tools, standards, and/or engineering constraints

**Learning Outcomes**:

- Describe at least two common types of circuit simulators and contrast the advantages and applications of each.
- Interpret issues associated with interfacing digital computer systems with an analog world, including the use of standard data
conversion circuits.
- Summarize the role of standards in compatibility, interconnection, and safety of systems.
- Articulate the purpose of buses and other interconnection and communication networks.
- Illustrate the role of constraints, parameters, and tradeoffs in electronic circuit design.

## Electrical quantities and basic elements

**Learning Outcomes**:

- State the definitions and representations of basic electrical quantities (charge, current, voltage, energy, power), as well as the
relationships among them.
- Define and represent basic circuit elements (resistors, inductors, capacitors).
- Solve problems using Ohm’s law, including its power representations.
- Analyze basic electrical circuits using Ohm’s law.
- Explain the difference between resistance and reactance, the meaning of phase, and the effect of frequency on capacitance and
inductance.
Elective Learning Outcomes:
- Interpret the role of capacitors and inductors as basic storage elements.
- Contrast related electrical quantities and concepts including frequency response, sinusoids, convolution, diodes and transistors, and
other storage elements.
- Provide examples of using circuit simulators to model and analyze simple circuits.

## Electrical circuits

**Learning Outcomes**:

- Contrast various elements of circuit models including independent and dependent sources as well as series and parallel elements.
- Analyze basic electrical circuits using mesh and nodal analysis, Kirchoff’s laws, superposition, Thevenin’s theorem, and Norton’s
theorem.
- Apply properties of circuits containing various combinations of resistance (R), inductance (L), and capacitance (C) elements including
time constants, transient and steady-state responses, and damping.
- Analyze and design simple circuits containing R, L, and C elements.
- Illustrate the frequency domain characteristics of electrical circuits.
- Contrast power for resistive and reactive circuits.
- Define and use the phasor representations of voltage and current in analyzing circuits.
- Calculate the response of electrical circuits from sinusoidal signal excitation.
- Define and use impedance and admittance as well as source transformations.
- Model and analyze simple resistive and RLC circuits using a circuit simulator.
Elective Learning Outcomes:
- Identify the characteristics and uses of transformers.
- Explain the relation between electrical quantities and concepts such as transfer functions, two-port circuits, parallel and series
resonance, maximum power transfer, and mutual inductance.
- Describe the characteristics of electronic voltage sources such as ideal voltage source, voltage references, emitter followers, and
voltage sources utilizing operational amplifiers.
- Express the characteristics of electronic current sources for the following: ideal current source; transistor current sources; common-
emitter, cascode, and regulated cascode circuits; current sources utilizing operational amplifiers.

## Electronic materials, diodes, and bipolar transistors

**Learning Outcomes**:

- Explain characteristics and properties of electronic materials including electrons and holes; doping, acceptors, and donors;
p-type and n-type materials; conductivity and resistivity; drift and diffusion currents, mobility, and diffusivity.
- Illustrate the operation and properties of diodes, including I-V characteristics, regions of operation, equivalent circuit models and their
limitations.
- Illustrate the operation and properties of NPN and PNP transistors, including I-V characteristics, regions of operation, equivalent circuit
models and their limitations, and transfer characteristic with a load resistor.
- Contrast NPN and PNP transistor biasing for logic and amplifier applications.
- Explain the properties of bipolar transistors when used as amplifiers and as switches.
- Produce mathematical models to represent material properties of electronic devices.
- Provide examples of using mathematical models in circuit simulators.
Elective Learning Outcomes:
- Contrast the Schottky, Zener, and variable capacitance diodes.
- Design a single diode circuit and describe the significance of a load line.
- Illustrate multidiode circuits such as rectifiers and direct current (DC) involving DC-DC voltage level converters.
- Design a multidiode circuit including rectifiers.
- Design a multidiode circuit including DC-DC voltage level converters.
- Implement diode logic using only AND and OR functions.
- Provide examples of bipolar transistors used in the construction of a range of common circuits.

## MOS transistor circuits, timing, and power

**Learning Outcomes**:

- Illustrate the operation and properties of nMOS (n-type metal-oxide semiconductor) and pMOS field-effect transistors, including I-V
characteristics, regions of operation, equivalent circuit models and their limitations, enhancement-mode and depletion-mode devices,
and transfer characteristic with a load resistor.
- Apply nMOS and pMOS transistor biasing for logic and amplifier applications.
- Contrast the properties of nMOS and pMOS transistors used as switches.
- Implement basic logic functions using nMOS, pMOS, and complementary metal-oxide semiconductor (CMOS) logic.
- Implement logic functions using pass transistors and transmission gates.
- Analyze the implications of implementing logic functions with switch networks versus logic gates.
- Define propagation delay, rise time, and fall time.
- Illustrate simplified Unit-Delay and Tau models for circuit timing.
- Analyze the effects of logic gate fan-in and fan-out on circuit timing and power and their associated tradeoffs.
- Contrast the effects of transistor sizing on timing and power, including nMOS and CMOS power/delay scaling.
- Compute the effects on circuit characteristics of various design styles, e.g., static logic, dynamic logic, multiple clocking schemes.

## Storage cell architecture

**Learning Outcomes**:

- Contrast the circuit properties of implementations of various storage elements (e.g., latches, flip-flops, clocked registers).
- Contrast the circuit properties of implementations of various memory cells (e.g., static RAM, dynamic RAM, ROM) and related circuitry
(e.g., sense amplifiers).
- Contrast storage elements and memory cells, emphasizing the tradeoffs that make each appropriate for specific uses.
Elective Learning Outcomes:
- Contrast the circuit properties of different kinds of non-volatile storage elements (e.g., flash memory, ROM).
- Derive timing diagrams showing the relationships among input, output, and clock signals for different storage devices.

## Interfacing logic families

**Learning Outcomes**:

- Explain the practical difficulties resulting from interfacing signals within a system and to the external world.
- Employ terminal characteristics of various logic families and of standard interfaces.
- Write the requirements for common signal translations between different logic families, such as between transistor-transistor logic
(TTL) and CMOS.
- Illustrate common methods to overcome difficulties when interfacing different logic families.
- Explain the practical difficulties resulting from single-ended to differential and differential to single-ended conversions.
- Contrast transmission line characteristics, reflections, and options for bus termination including passive, active, DC, and alternating
current (AC) features.

## Operational amplifiers

**Learning Outcomes**:

- Interpret the properties of an ideal operational amplifier (op-amp).
- Analyze and design circuits containing ideal op-amp circuits to include inverting and non-inverting amplifiers, summing and difference
amplifiers, integrators, and low-pass filters.
Elective Learning Outcomes:
- Contrast the properties of non-ideal op-amps to include DC errors, common-mode rejection ratio (CMRR), input and output
resistances, frequency response, output voltage, and current limitations.
- Analyze and design simple circuits containing non-ideal op-amps.
- Contrast and design multistage op-amp circuits.

## Mixed-signal circuit design

**Learning Outcomes**:

- Discuss common types of mixed-signal circuits and applications, including digital-to-analog (D/A) and analog-to-digital (A/D) converters
and sample-and-hold circuits.
- Describe key characteristics of D/A and A/D converters, such as least-significant bit (LSB), linearity, offset, and gain errors.
- Contrast the properties that distinguish between specific D/A and A/D converters for meeting system design requirements.
- Analyze issues associated with the integration of digital and analog circuits in a single IC or package, including both benefits and
challenges.
- Provide examples of commercial mixed-signal devices.
- Describe how D/A converter characteristics depend upon implementation; examples include weighted resistor, R/2R resistor ladders,
weighted current source converters, and delta-sigma converters.
- Describe how A/D converter characteristics depend upon implementation; examples include successive approximation converters,
single and dual slope converters, flash converters, and delta-sigma converters.
- Design A/D and D/A converters to meet given criteria using specified implementations.

## Design parameters and issues

**Learning Outcomes**:

- Calculate the effects of design parameters on switching energy, power-delay product, power dissipation, and noise margin.
- Indicate issues associated with power supply distribution.
- Describe sources of signal coupling and degradation, and their effects on circuit behavior.
- Contrast transmission line effects, particularly for passive, active, DC, and AC terminations.
- Use appropriate design strategies and software tools for power distributions and transmission lines, incorporating element tolerances
and tradeoffs.
- Use appropriate design strategies and software tools to minimize noise and other signal degradations in designs.
- Develop methods for worst-case analysis of circuits.
- Explain Monte Carlo analysis and describe tools for using Monte Carlo analysis in circuit design.
- Examine the use of six-sigma design methods for electronic circuits.

## Circuit modeling and simulation methods

**Learning Outcomes**:

- Predict the benefits and drawbacks associated with simulation as a method of circuit analysis.
- Apply simulation methods for DC analysis, AC analysis, transient analysis, and steady-state analysis.
- Identify aspects of circuits that are not readily amenable to simulation.
- Contrast methods and parameters for controlling simulation to include built-in device models, device parameter controls, and device
and circuit libraries.

---

Electronics

## ELE/History and overview

Topics:

- Indicate some reasons for studying electronics
- Highlight some people that influenced or contributed to the area of electronics
- Indicate some important topic areas such as material properties, diodes and transistors, storage elements, interfaces and buses, operational amplifiers, and circuit simulators
- Contrast the meanings transistors and diodes
- Mention some issues and parameters in electronics design
- Describe the difference between an ordinary amplifier and an operational amplifier
- Mention the importance of data conversion and the circuits for doing the same
- Indicate some circuit simulators and contrast the advantages of each
- Explore some additional resources associated with electronics
- Explain the purpose and role of electronics in computer engineering

Learning outcomes:

1. Identify some contributors to electronics and relate their achievements to the knowledge area. 2. Describe a transistor and its functionality.
2. Identify some storage elements.
3. Articulate the purpose of buses.
4. Indicate the importance of designing data conversion circuits.
5. Identify two software products used for designing and simulating circuits. 7. Describe how computer engineering uses or benefits from electronics.

## ELE/Electronic properties of materials

Topics:

- Solid-state materials
- Electrons and holes
- Doping, acceptors and donors
- p- and n-type material
- Conductivity and resistivity
- Drift and diffusion currents, mobility and diffusivity

Learning outcomes:

1. Indicate the properties of materials that lead to be useful for the construction of electronic circuits, giving reasons. 2. Explain the uses of one particular material (as opposed to alternatives) to serve a stated purpose.

## ELE/Diodes and diode circuits

Topics:

- Diode operation and i-v characteristics
- Regions of operation, models, and limitations
- Schottky, Zener, variable capacitance diodes - Single diode circuits, the load line
- Multi-diode circuits
- Rectifiers
- dc/dc converters
- Diode logic: AND and OR functions

Learning outcomes:

1. Explain the properties of diodes.
2. Outline the use of diodes in the construction of a range of circuits including rectifiers, ac/dc converters, and common logic functions.

## ELE/MOS transistors and biasing

Topics:

- NMOS field-effect transistor operation
- i-v characteristics
- Regions of operation, models, and limitations
- Enhancement and depletion-mode devices
- PMOS devices
- Transfer characteristic of FET with load resistor
- Biasing for logic and amplifier applications

Learning outcomes

1. Indicate the areas of use of NMOS, PMOS, CMOS, and dynamic logic families.
2. Demonstrate the ability to implement a range of logic functions using each of NMOS, PMOS, CMOS, and dynamic logic.

## ELE/MOS logic families

Topics:

- Logic level definitions
- NMOS logic design: Inverter, NOR, NAND, SOP, POS, complex gates
- PMOS logic
- CMOS logic: Inverter, NOR, NAND, SOP, POS, complex gates
- Dynamic logic
- CVS logic
- Cascade buffers
- NMOS and CMOS power/delay scaling

Learning outcomes

1. Explain the differences between the different MOS logic families. 2. Articulate the advantages of dynamic logic.

## ELE/Bipolar transistors and logic families

Topics:

- npn and pnp transistor operation
- i-v characteristics
- Regions of operation, models, and limitation
- Transfer characteristic of BJT with load resistor
- Biasing for logic and amplifier applications
- Logic level definitions
- The differential pair as a current switch
- Transistor-transistor logic – inverters, NAND, other functions
- Emitter-coupled logic – OR/NOR gate, other functions
- Low voltage bipolar logic families

Learning outcomes:

1. Indicate the areas of use of bipolar logic families.
2. Demonstrate the ability to implement a range of logic functions using bipolar logic.

## ELE/Design parameters and issues

Topics:

- Switching energy, power-delay product comparison,
- Propagation delay, rise time, fall time
- Fan-in and fan-out
- Power dissipation, noise margin
- Power supply distribution
- Sources of signal coupling and degradation
- Transmission line effects; passive, active, dc and ac termination
- Element tolerances
- Worst-case analysis of circuits
- Monte Carlo analysis
- Monte Carlo analysis in SPICE
- Six-sigma design

Learning outcomes:

1. Incorporate design strategies in power distributions and transmission. 2. Apply methods to minimize noise and other signal degradations.

## ELE/Storage elements

Topics:

- Latches
- Flip-flops
- Static RAM cells
- Dynamic RAM cells
- Sense amplifiers

Learning outcomes:

1. Compare and contrast the properties of different kinds of storage element to serve different purposes. 2. Select (with reasons) appropriate kinds of storage elements for use in a range of possible devices.

## ELE/Interfacing logic families and standard buses

Topics:

- Terminal characteristics of various logic families
- Standard interface characteristics
- Level translations: TTL/CMOS, TTL/ECL, CMOS/ECL
- Single-ended to differential and differential to single-ended conversion
- Transmission line characteristics, reflections
- Bus termination: Passive, active, dc, ac
- 4-20 mA current interfaces
- RS-XXX buses
- IEEE-XXXX buses
- Low-level differential signaling
- RAMBUS
- DDR

Learning outcomes:

1. Explain the practical difficulties resulting from the distribution of signals.
2. Explain ways to overcome these difficulties when interfacing different logic families.

## ELE/Operational amplifiers

Topics:

- Ideal op-amps and circuit analysis
- Ideal op-amp circuits: Inverting and non-inverting amplifiers, summing amplifier, difference amplifier, integrator, low pass filter
- Non-ideal op-amps: dc errors, CMRR, input and output resistances, frequency response, output voltage and current limitations
- Circuits with non-ideal amplifiers
- Multi-stage op-amp circuits

Learning outcomes:

1. Explain with justification the ideal properties of operational amplifiers. 
2. Design various amplifier structures and filters with ideal op-amps.
3. Understand characteristics of non-ideal op-amps.
4. Design simple circuits with them.

## ELE/Circuit modeling and simulations

Topics:

- DC analysis
- AC analysis
- Transient analysis
- Simulation control options
- Built-in solid-state device models
- Device parameter control
- Libraries
- Mixed-mode simulation

Learning outcomes:

1. Explain with justification the benefits and the drawbacks associated with the simulation of circuits. 
2. Identify aspects of circuits that are not readily amenable to simulation.
3. Simulate a range of possible circuits using a suitable software package.

## ELE/Data conversion circuits
Topics:

- D/A Converters: Definitions such as for codes, LSB, and MSB; linearity, differential linearity, offset and gain errors; weighted resistor D/A converter; R/2R ladders and D/A converters; weighted current source converters; delta-sigma converters
- A/D Converters: Definitions such as for codes, LSB, MSB, and missing codes; linearity, differential linearity, offset and gain errors, missing codes; counting converter; successive approximation; single and dual slope converters; flash converters; delta- sigma converters
- Sample-and-hold circuits

Learning outcomes:

1. Describe the properties that distinguish particular kinds of converters.
2. Given a range of possible scenarios, select (with justification) a converter appropriate for the scenario.

## ELE/Electronic voltage and current sources

Topics:

- Electronic voltage sources: ideal voltage source characteristics; voltage references; emitter followers; voltage sources utilizing operational amplifiers
- Electronic current sources: ideal current source characteristics; transistor current sources; common-emitter, cascode, regulated cascode circuits; current sources utilizing operational amplifiers

Learning outcomes:

1. Explain the various types of electronic voltage sources. 2. Explain the various types of electronic current sources.

## ELE/Amplifier design

Topics:

- Characteristics and properties of a linear amplifier: voltage gain, current gain, power gain, dB scale, frequency domain characteristics, distortion
- Definition of small-signal in diodes and transistors
- Bias circuits for linear amplification, voltage, current, power gain, input/output resistances
- Amplifier configurations: BJT common-emitter, common-base and common-collector; MOSFET common-source, common-gate, common-drain
- Low frequency response, high frequency device models, high frequency response; short-circuit and open-circuit time constant techniques
- Multistage transistor amplifiers: ac and dc coupled amplifiers; frequency response
- Differential pairs such as MOSFET and BJT
- Current sources and biasing; current mirrors; active loads - Elementary two- and three-stage op-amp circuits
- Classical op-amp input stages

Learning outcomes:

1. Explain the properties of linear amplifiers (as opposed to other kinds of amplifiers) and to identify significant uses. 
2. Demonstrate an ability to design and build a range of possible linear amplifiers.

## ELE/Integrated circuit building blocks

Topics:

- Power circuits: class A output stages; class B and class B push-pull output stages; cross over distortion; class AB amplifiers; power semiconductor devices; switching (boost and buck) converters
- Active filters: their properties and characteristics
- Continuous time filter: bandwidth, Q; single op-amp active filters; multi op-amp filters; Q and cutoff/center frequency sensitivity
- Switched capacitor filters
- Oscillators: Barkhausen criteria for oscillation; RC oscillators; LC oscillators Colpitts, Hartley; crystal oscillators; multivibrators
- Operational amplifiers and circuits; comparators; PTAT circuits; band-gap references; voltage regulators; Gilbert multipliers
- Circuits for wireless applications: noise; noise; passive components; low noise amplifiers; frequency conversion and mixers; power amplifiers – Class B, Class C

Learning outcomes:

1. Explain the properties and the nature of the common building blocks used to build integrated circuits.
2. Design and assemble integrated circuit building blocks to provide circuits for a range of applications including wireless applications.