# System Resource Management (SRM)

**Area Scope**

The knowledge units in this area collectively encompass the following:

1. Management of resources in computing systems with diverse components
2. Real-time operating constraints and their effect on system resource management
3. Resource management in mobile environments
4. Tradeoffs associated with resource management in different operating environments

## [SRM/History and overview of operating systems]

??? info "Learning outcomes"

- Explain the purpose of an operating system and the services one provides.
- Describe differences in functionality found in mobile, networked, client-server, distributed operating systems, and single user systems. 
- Define key design criteria including efficiency, robustness, and security.
- Explain major threats to operating systems and how to guard against them.

## [SRM/Relevant tools, standards, and/or engineering constraints]

??? info "Learning outcomes"

- Give examples of real-time performance monitoring tools and log-based performance monitoring tools.
- Explain what information a real-time performance monitoring tool provides and when such a tool is useful. 
- Explain what information a log-based performance monitoring tool provides and when such a tool is useful. - List key components of the IEEE POSIX (Portable Operating System Interface) standard.
- Define the role of some key SRM APIs such as WinAPI and various Java APIs.

## [SRM/Managing system resources]

??? info "Learning outcomes"

- Describe the role of an operating system in managing system resources and interfacing between hardware and software elements.
- Explain what concurrency is and why it must be supported in managing system resources.
- Give examples of runtime problems that can arise due to concurrent operation of multiple tasks or components in the system, such as deadlock and race conditions.
- Describe basic types of interrupts and what must be done to handle them.
- Give examples that illustrate why task scheduling and dispatch are needed as system resources are managed.
- Explain the difference between preemptive and non-preemptive scheduling and demonstrate awareness of common algorithms used for scheduling.
- Describe how interrupts, dispatching tasks, and context switching are used to support concurrency.
- Explain the memory hierarchy (cache through virtual memory) and the cost-performance tradeoffs made in design.
- Describe the choices to be made in file system design and how these choices affect system resource management.

## [SRM/Real-time operating system design]

??? info "Learning outcomes"

- Explain the characteristics of hard real-time, soft real-time, and safety-critical real-time environments.
- Discuss issues of uncertainty that can arise in memory hierarchy design and disk or other fixed storage design and methods of
addressing them.
- Explain latency and its role in RTOS design.
- Explain how an event-driven scheduler operates and be able give examples of commonly used algorithms.
- Explain how round-robin scheduling differs from event driven strategies.
- Explain why memory allocation is critical in a real-time system.
- Explain failure modes and recovery strategies appropriate for RTOS.
- Discuss tradeoffs among various operating system options.

## [SRM/Operating systems for mobile devices]

??? info "Learning outcomes"

- Describe the system communication that must be managed in a mobile device (e.g., Wi-Fi, Bluetooth). 
- Discuss constraints inherent in the mobile environment.
- Explain the demands placed on the mobile operating system by the user.
- Discuss the challenges of implementation across mobile platforms.
- Discuss sources of security threats and their management. 

## [SRM/Support for concurrent processing]

??? info "Learning outcomes"

- Explain and give examples of basic concepts in concurrent processing such as multiprocessor, multicore, SIMD, MIMD, shared memory, and distributed memory.
- Explain what is needed to support scheduling of multiple threads.
- Describe how simultaneous multithreaded (SMT) execution works.

## [SRM/System performance evaluation]

- Describe why performance is important in significant applications (e.g., mission critical systems).
- Explain why metrics such as response time, throughput, latency, availability, reliability, and power consumption are significant in performance evaluation.
- Explain what must be measured to make use of important performance evaluation metrics.
- Describe the strengths of commonly used benchmark suites and their limitations.
- Demonstrate understanding of commonly used evaluation models (e.g., deterministic, stochastic, simulation) and circumstances in
which it is appropriate to use them.
- Explain how profiling and tracing data is collected and used in evaluating system performance.

## [SRM/Support for virtualization]

- Define the role of the hypervisor or virtual machine monitor.
- Describe what the role of the host machine is and its relationship to the guest machines.
- Describe what the host operating system is and how it is related to guest operating systems. 
- Explain what a native hypervisor is and how it differs from a hosted hypervisor.
- Give examples of isolation and security issues arising in virtualized environments.