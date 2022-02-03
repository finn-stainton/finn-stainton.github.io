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