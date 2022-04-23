CE-SEC Information Security
[20 core hours]
Area Scope
The knowledge units in this area collectively encompass the following:
1. Recognition that security is risk management and inherently includes tradeoffs
2. Familiarity with the implications of hostile users, including social engineering attacks and misuse cases
3. Framework for understanding algorithms and other technological measures for enhancing security
4. Strategic and tactical design issues in information security
CE-SEC Core Knowledge Units
CE-SEC-1 History and overview
Minimum core coverage time: 2 hours
Core Learning Outcomes:
Final Curriculum Report 2016 December 15
 􏰁 State examples of famous security breaches and denials of service.
􏰁 Discuss common computer crime cost estimates and the difficulty of estimating them.
􏰁 Define ethical hacking.
􏰁 Contrast active with passive attacks.
􏰁 Discuss the issues surrounding computer security and privacy rights.
􏰁 Enumerate various motivations of attackers.
􏰁 Identify the types and targets of computer crime.
􏰁 Summarize the major types of attacks performed by cybercriminals.
􏰁 Discuss the professional’s role in security and the tradeoffs involved.
􏰁 Give examples of historic and contemporary cryptography algorithms.
􏰁 Justify the use of various security principles (e.g. defense in depth, functional vs. assurance requirements, security through obscurity is
flawed, security is risk management, complexity is the enemy of security, and benefits of responsible open disclosure).
􏰁 Explain and defend the use of each of various security mechanisms (e.g., least privilege, fail-safe defaults, complete mediation,
separation of privilege, and psychological acceptability).
CE-SEC-2 Relevant tools, standards, and/or engineering constraints
Minimum core coverage time: 2 hours
Core Learning Outcomes:
􏰁 Discuss the major provisions of a relevant law such as HIPAA or the EU Data Protection Directive. 􏰁 Summarize intellectual property and export control laws affecting security, especially encryption. 􏰁 Describe some common approaches and tools used in penetration testing.
􏰁 Articulate some challenges of computer forensics.
CE-SEC-3 Data security and integrity
Minimum core coverage time: 1 hour
Core Learning Outcomes:
􏰁 Define confidentiality and integrity.
􏰁 Give examples of systems where integrity alone is sufficient.
􏰁 Define “perfect forward secrecy” and explain why it is desirable.
CE-SEC-4 Vulnerabilities: technical and human factors
Minimum core coverage time: 4 hours
Core Learning Outcomes:
􏰁 Define misuse cases and explain their role in information security.
􏰁 Describe the role of human behavior in security system design, including examples of social engineering attacks. 􏰁 Perform a simple fault tree analysis.
􏰁 Explain the types of errors that fuzz testing can reveal.
􏰁 Discuss issues related to the difficulty of updating deployed systems.
􏰁 Explain the role of code reviews in system security.
􏰁 Define the problem of insecure defaults.
􏰁 Explain the tradeoffs inherent in responsible disclosure.
Page 89 of 149
Computer Engineering 2016 Final Curriculum Report
CE2016
2016 December 15
􏰁 Discuss why the advantage is with the attacker in many contexts and how this must be addressed in system design.
􏰁 Explain how to execute a stack overrun attack and the knowledge it requires.
􏰁 Discuss recent examples of exploited memory access bugs and the errors that lead to their deployment and exploitation.
􏰁 Explain the role of both safe libraries and argument validation in defending against buffer overflows.
􏰁 Illustrate how a stack canary works.
􏰁 Explain the problems solved by address space randomization and non-executable memory.
􏰁 Define several types of malware such as viruses, worms, Trojan horses, key loggers, and ransomware.
􏰁 Discuss countermeasures to common types of malware.
􏰁 Explain current issues in the “arms race” between malware authors and defense system authors.
CE-SEC-5 Resource protection models
Minimum core coverage time: 1 hour
Core Learning Outcomes:
􏰁 Explain the pros and cons of various discretionary and mandatory resource protection models. 􏰁 Illustrate an access control matrix model.
􏰁 Define the Bell-LaPadula model.
CE-SEC-6 Secret and public key cryptography
Minimum core coverage time: 3 hours
Core Learning Outcomes:
􏰁 State the motivation for putting all encryption algorithm variability in the keys.
􏰁 Discuss the effect of processing power on the effectiveness of cryptography.
􏰁 Explain the meaning of and relationship between the three basic classes of cryptographic attacks: ciphertext only, known plaintext,
chosen plaintext.
􏰁 Discuss the similarities and differences among the three basic types of cryptographic functions (zero-, one-, and two-key): hash, secret
key, and public key.
􏰁 Discuss block and key length issues related to secret key cryptography.
􏰁 Describe and evaluate a symmetric algorithm such as advanced encryption standard (AES), focusing on both design and
implementation issues.
􏰁 Explain some uses of one-time pads.
􏰁 Perform modular arithmetic (addition, multiplication, and exponentiation).
􏰁 Apply the basic theory of modular arithmetic (Totient function and Euler’s theorem).
􏰁 Execute and apply the RSA algorithm for encryption and digital signatures.
􏰁 Execute and apply the Diffie-Hellman algorithm for establishing a shared secret.
􏰁 Demonstrate and discuss the motivations and weaknesses in various methods for applying secret key (block) encryption to a message
stream such as cipher block chaining (CBC), cipher feedback mode (CFB), and counter mode (CTR).
CE-SEC-7 Message authentication codes
Minimum core coverage time: 1 hour
Core Learning Outcomes:
􏰁 Explain why hashes need to be roughly twice the length of secret keys using the birthday problem.
􏰁 Discuss the uses of hashes for fingerprinting and signing.
􏰁 Discuss the key properties of a cryptographic hash function contrasted with a general hash function.
􏰁 Explain the purpose of key operations used in cryptographic hashes such as permutation and substitution. 􏰁 Explain how one can use a hash for a message authentication code (MAC).
􏰁 State key properties of secure hash algorithms or family such as SHA-3, or its successor. 􏰁 Explain the problem solved by the HMAC standard.
CE-SEC-8 Network and web security
Minimum core coverage time: 3 hours
Core Learning Outcomes:
􏰁 Describe the goals of Transport layer security (TLS) and how they are attained using secret and public key methods along with certificates
􏰁 Discuss the reasons for using a firewall, various topologies, and firewall limitations.
􏰁 Diagram and explain the use of virtual private networks (VPNs).
􏰁 Describe common denial of service attack methods, including distributed and amplified attacks, along with countermeasures taken at
the computing system, protocol design, and backbone provider levels.
􏰁 Define packet filtering.
􏰁 Discuss the ramifications of the HTTP/HTTPS web platform design being stateless.
Page 90 of 149

Computer Engineering 2016 CE2016
􏰁 Describe the basic structure of URLs, HTTP requests, and HTTP digest authentication as they relate to security.
􏰁 Explain the use of HTTP cookies including session cookies, expiration, and re-authentication for key operations.
􏰁 Define cross-site scripting.
􏰁 Explain an SQL injection attack and various methods of remediation.
􏰁 Be familiar standards such as open web application security project (OWASP) and the OWASP Top 10 list. CE-SEC-9 Authentication
Minimum core coverage time: 1 hour
Core Learning Outcomes:
Final Curriculum Report 2016 December 15
􏰁 Explain the difference between authorization and authentication.
􏰁 Comment on authentication methods using password and/or address-based methods.
􏰁 Discuss eavesdropping and server database reading and explain how various authentication methods deal with them. 􏰁 Explain the general use of trusted intermediaries for both secret and private key systems.
􏰁 Discuss issues specific to authenticating people, including the three main approaches to doing so.
􏰁 Describe the problems solved by multi-factor authentication methods including biometrics.
CE-SEC-10 Trusted computing
Minimum core coverage time: 1 hour
Core Learning Outcomes:
􏰁 Describe current approaches to trusted computing such as trusted hardware, secure storage, and biometrics.
􏰁 Evaluate a circumvention method for a trusted computing system and discuss the tradeoffs between implementation cost, information
value, and circumvention difficulty.
CE-SEC-11 Side-channel attacks
Minimum core coverage time: 1 hour
Core Learning Outcomes:
􏰁 Discuss various side channels and methods of encoding information on them. 􏰁 Discuss the tradeoffs of side-channel protection and system usability.