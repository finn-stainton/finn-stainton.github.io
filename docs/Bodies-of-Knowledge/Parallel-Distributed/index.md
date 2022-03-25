---
hide:
    - navigation
    - toc

---
# Parallel and Distributed Systems (PD)

[:octicons-arrow-left-24: Return to Bodies of Knowledge](/Bodies-of-Knowledge/)

---

The past decade has brought explosive growth in multiprocessor computing, including multi-core processors and distributed data centers. As a result, parallel and distributed computing has moved from a largely elective topic to become more of a core component of undergraduate computing curricula. Both parallel and distributed computing entail the logically simultaneous execution of multiple processes, whose operations have the potential to interleave in complex ways.

Parallel and distributed computing builds on foundations in many areas, including an understanding of fundamental systems concepts such as concurrency and parallel execution, consistency in state/memory manipulation, and latency. Communication and coordination among processes is rooted in the message-passing and shared-memory models of computing and such algorithmic concepts as atomicity, consensus, and conditional waiting. Achieving speedup in practice requires an understanding of parallel algorithms, strategies for problem decomposition, system architecture, detailed implementation strategies, and performance analysis and tuning.

Distributed systems highlight the problems of security and fault tolerance, emphasize the maintenance of replicated state, and introduce additional issues that bridge to computer networking. Because parallelism interacts with so many areas of computing, including at least algorithms, languages, systems, networking, and hardware, many curricula will put different parts of the knowledge area in different courses, rather than in a dedicated course. While we acknowledge that computer science is moving in this direction and may reach that point, in 2013 this process is still in flux and we feel it provides more useful guidance to curriculum designers to aggregate the fundamental parallelism topics in one place. Note, however, that the fundamentals of concurrency and mutual exclusion appear in the Systems Fundamentals (SF) Knowledge Area. Many curricula may choose to introduce parallelism and concurrency in the same course (see below for the distinction intended by these terms). Further, we note that the topics and learning outcomes listed below include only brief mentions of purely elective coverage. At the present time, there is too much diversity in topics that share little in common (including for example, parallel scientific computing, process calculi, and non-blocking data structures) to recommend particular topics be covered in elective courses. Because the terminology of parallel and distributed computing varies among communities, we provide here brief descriptions of the intended senses of a few terms. This list is not exhaustive or definitive, but is provided for the sake of clarity.

- **Parallelism**: Using additional computational resources simultaneously, usually for speedup.
- **Concurrency**: Efficiently and correctly managing concurrent access to resources.
- **Activity**: A computation that may proceed concurrently with others; for example a program, process, thread, or active parallel hardware component.
- **Atomicity**: Rules and properties governing whether an action is observationally indivisible; for example, setting all of the bits in a word, transmitting a single packet, or completing a transaction.
- **Consensus**: Agreement among two or more activities about a given predicate; for example, the value of a counter, the owner of a lock, or the termination of a thread.
- **Consistency**: Rules and properties governing agreement about the values of variables written, or messages produced, by some activities and used by others (thus possibly exhibiting a data race); for example, sequential consistency, stating that the values of all variables in a shared memory parallel program are equivalent to that of a single program performing some interleaving of the memory accesses of these activities.
- **Multicast**: A message sent to possibly many recipients, generally without any constraints about whether some recipients receive the message before others. An event is a multicast message sent to a designated set of listeners or subscribers. As multi-processor computing continues to grow in the coming years, so too will the role of parallel and distributed computing in undergraduate computing curricula. 

!!! cite ""
    Extract from: ACM 2016 Computer Science Curriculum

## Units

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
</div>
