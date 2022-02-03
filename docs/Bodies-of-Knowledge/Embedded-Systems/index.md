# Embedded Systems (ESY)

**Area Scope**

The knowledge units in this area collectively encompass the following:

1. Purpose and role of embedded systems in computer engineering, along with important tradeoffs in such areas as power, performance,
and cost
2. Embedded systems software design, either in assembly language or a high-level language or both, for typical embedded systems
applications using modern tools and approaches for development and debugging
3. Digital interfacing using both parallel and asynchronous/synchronous serial techniques incorporating typical on-chip modules as such as
general purpose I/O, timers, and serial communication modules (e.g., UART, SPI, I2C, and CAN)
4. Analog interfacing using analog-to-digital convertors connected to common sensor elements and digital-to-analog converters
connected to typical actuator elements
5. Mobile and wireless embedded systems using both short-range (e.g., Bluetooth, 802.15.4) and long-range (e.g., cellular, Ethernet) in
various interconnection architectures

## ESY/History and overview

**Learning Outcomes**:

- Identify some contributors to embedded systems and relate their achievements to the knowledge area.
- Describe the characteristics of an embedded system and its role in several example applications.
- Explain the reasons for the importance of embedded systems.
- Describe the relationship between programming languages and embedded systems.
- Describe how computer engineering uses or benefits from embedded systems.

## ESY/Relevant tools, standards, and/or engineering constraints

**Learning Outcomes**:

- Use an integrated development environment (IDE) to write, compile and/or assemble, and debug a program (high-level or assembly
language) for a target embedded system.
- Contrast instrumentation choices for diagnosing/understanding hardware aspects of embedded systems behavior.
- List several standards applicable to embedded such as signaling levels and serial communication protocols.

## ESY/Characteristics of embedded systems

**Learning Outcomes**:

- Contrast CPUs used for embedded systems versus those used for general purpose computing.
- Evaluate and rank tradeoffs such as cost, power, and performance for different embedded systems applications.
- Describe architectural features of the target embedded system(s) (register structure, memory architecture, CPU features, peripheral
subsystems).
- Contrast the different types of processors for embedded systems: CPU microcontrollers, DSP processors, GPUs, heterogeneous SOCs
(CPUs/accelerators), FPGA-based processors.

## ESY/Basic software techniques for embedded applications

**Learning Outcomes**:

- Manually translate simple high-level language statements to equivalent assembly language.
- Describe the actions of compilation, assembly, linking in the program translation process.
- Describe actions taken by compiler-generated code after system reset but before user application execution.
- Describe memory assignments made by a compiler for global variables, local variables, subroutine parameters and dynamically allocated
storage.
- Explain the basic loop-forever structure of an embedded program.
- Design simple programs for embedded system applications including some that include modular/hierarchical programming techniques
such as subroutines and functions.
- Demonstrate debugging techniques for simple embedded application programs.

## ESY/Parallel input and output

**Learning Outcomes**:

- Describe the appropriateness of different I/O configurations (input, strong drive, weak pullup/pulldown, open-drain, tri-state) available
in general purpose I/O (GPIO) for a given target application.
- Create programs that perform a set of input/output operations on one more GPIOs using a polled approach.
- Describe how interrupts are supported on the target embedded system(s).
- Create programs that perform a sequence of input/output operations on one more GPIOs using an interrupt-driven approach.
- Discuss mechanisms such as hardware and software FIFOs for buffering data streams.
Elective Learning Outcomes:
- Discuss Direct Memory Access (DMA) and describe how it is supported on the target embedded system.
- Create programs that perform a sequence of input/output operations using DMA.

## ESY/Asynchronous and synchronous serial communication

**Learning Outcomes**:

- Discuss the concepts of full-duplex and half-duplex communication.
- Contrast parallel I/O versus serial I/O tradeoffs in terms of throughput, wiring cost, and application.
- Describe the data formatting, timing diagrams, and signaling levels used in an asynchronous serial interface.
- Create programs that perform I/O to an external device or system that uses an asynchronous serial interface.
- Describe the data formatting, timing diagrams, and signaling levels used in a synchronous serial interface such as SPI or I2C.
- Create programs that perform I/O to an external device or system that uses a synchronous serial interface such as SPI or I2C.

## ESY/Periodic interrupts, waveform generation, time measurement

**Learning Outcomes**:

- Describe the basic features and operation of typical hardware timers used in embedded systems.
- Create programs that perform periodic I/O triggered by hardware timer-generated interrupts.
- Create programs that measure waveform characteristics such as pulse width and frequency using hardware timers.
- Describe applications of pulse width modulation.
- Create programs that use pulse width modulation for external device control.

## ESY/Data acquisition, control, sensors, actuators

**Learning Outcomes**:

- Describe terms and properties relating to Analog-to-Digital Conversion (ADC) and Digital-to-Analog Conversion (DAC) such as sampling rate, reference voltage, conversion time, precision, range, and encoding method.
- Perform voltage to binary and binary to voltage numerical conversions given range, encoding method, and reference voltage parameters.
- Describe DAC and ADC architectural approaches such as resistor ladder, successive approximation, flash, and delta-sigma, and give tradeoffs such as conversion time and circuit complexity.
- Demonstrate numerical conversion from a physical quantity such as pressure, temperature, and acceleration to voltage or current given an example sensor and its characteristic equation or graph.
- Create programs that use one or more external sensors for monitoring physical properties.
- Demonstrate numerical conversion from voltage or current to a physical quantity such as linear/angular movement, sound, and light given an example actuator and its characteristic equation or lookup-up table.
- Create programs that use one or more actuators for effecting physical control by an embedded system.
- Design circuitry that transforms voltage level/current drive from/to external sensors/actuators to that required/provided by a target CPU.

## ESY/Implementation Strategies for Complex Embedded Systems

**Learning Outcomes**:

- Describe the need for structured approaches in writing complex embedded applications.
- Describe techniques used in event-driven state machine frameworks such as events, event queues, active objects, event processing,
priority queues, and hierarchical state machines.
- Describe techniques used in real time operating systems (RTOS) such as message passing, preemptive versus cooperative scheduling, semaphores, queues, tasks, co-routines, and mutexes.
- Create programs using either a state machine framework or an RTOS (or both) for sample embedded system applications.

## ESY/Techniques for low-power operation

**Learning Outcomes**:

- Describe sources of energy consumption such as toggling, leakage and pin configurations used for minimizing power.
- Describe power saving approaches used in embedded system design and their corresponding performance/power tradeoffs such as
sleep/hibernate modes, peripheral system enable/disable, and clock frequency management, and appropriate GPIO configurations during sleep/hibernate.
- Describe wakeup mechanisms such as watchdog timer, real time clock, and external interrupts.
- Write programs that demonstrate minimal energy usage in performing I/O tasks through use of sleep and/or hibernate modes.
- Compute system battery life for an embedded system platform given parameters such as battery capacity, current draw, wake time, sleep time, clock frequency.

## ESY/Mobile and networked embedded systems

**Learning Outcomes**:

- Describe the role of embedded systems in the ‘internet of things.’
- Discuss options for adding short-range wireless connectivity to an embedded system such as Bluetooth and 802.15.4 and tradeoffs relating to cost, power, throughput, and connectivity.
- Discuss options for adding long-range wireless connectivity to an embedded system such as cellular and Ethernet and tradeoffs relating to cost, power, throughput, and connectivity.
- Contrast hardware options for adding wireless connectivity to an embedded system such as external smart modules or software stack-plus-radio integrated circuits.
- Contrast connectivity architectures such as point-to-point, star, and mesh.
- Discuss security options for protecting wireless communication links.

## ESY/Advanced input/output issues

**Learning Outcomes**:

- Discuss concepts used in I/O buses such as master/slave devices, arbitration, transactions, priorities, and packets.
- Contrast single-ended signaling versus differential signaling for use in high-speed serial busses, and methods for measuring differential signaling quality such as eye-diagrams.
- Describe features such as topology, signaling levels, arbitration, speed, packet structure, and data transfers for one or more advanced serial bus protocols such as the Controller Area Network, Universal Serial Bus, and IEEE 1394 (FireWire).
- Discuss architectures and applications of persistent storage for embedded systems, such as flash drives, SD cards, and FRAM.

##  ESY/Computing platforms for Embedded Systems

**Learning Outcomes**:

- Describe multimedia peripherals found in advanced embedded System-On-Chip implementations such video encoding, audio processing, display processing.
- Describe interconnect and networking options for SoCs, including Network-on-Chip architectures.
- Contrast performance, power, and flexibility tradeoffs for hard core versus software CPUs found in Field Programmable Gate Arrays.
- Describe embedded applications that benefit from a multi-core approach.
- Describe embedded applications that benefit from other types of processors for embedded systems: DSP processors, GPUs, heterogeneous SOCs (CPUs/accelerators), FPGA-based processo