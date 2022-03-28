---

hide:
    - navigation
---
# IAS/ Cryptography

[:octicons-arrow-left-24: Return to Information Assurance Security](/Knowledge-Notebook/Information-Assurance-Security/)

---

??? info "Learning outcomes:"

    1. Describe the purpose of cryptography and list ways it is used in data communications. [Familiarity]
    2. Define the following terms: cipher, cryptanalysis, cryptographic algorithm, and cryptology, and describe the two basic methods (ciphers) for transforming plain text in cipher text. [Familiarity]
    3. Discuss the importance of prime numbers in cryptography and explain their use in cryptographic algorithms. [Familiarity]
    4. Explain how public key infrastructure supports digital signing and encryption and discuss the limitations/vulnerabilities. [Familiarity]
    5. Use cryptographic primitives and describe their basic properties. [Usage]
    6. Illustrate how to measure entropy and how to generate cryptographic randomness. [Usage]
    7. Use public-key primitives and their applications. [Usage]
    8. Explain how key exchange protocols work and how they fail. [Familiarity]
    9. Discuss cryptographic protocols and their properties. [Familiarity]
    10. Describe real-world applications of cryptographic primitives and protocols. [Familiarity]
    11. Summarize security definitions related to attacks on cryptographic primitives, including attacker capabilities and goals.[Familiarity]
    12. Apply appropriate known cryptographic techniques for a given scenario. [Usage]
    13. Appreciate the dangers of inventing one’s own cryptographic methods. [Familiarity]
    14. Describe quantum cryptography and the impact of quantum computing on cryptographic algorithms. [Familiarity]

## Basic Cryptography Terminology

covering notions pertaining to the different (communication) partners, secure/unsecure channel, attackers and their capabilities, encryption, decryption, keys and their characteristics, signatures

## Cipher types

(e.g., Caesar cipher, affine cipher) together with typical attack methods such as frequency analysis

## Public Key Infrastructure

support for digital signature and encryption and its challenges

## Mathematical Preliminaries

essential for cryptography, including topics in linear algebra, number theory, probability theory, and statistics

## Cryptographic primitives:

### pseudo-random generators and stream ciphers

### block ciphers (pseudo-random permutations)

, e.g., AES o pseudo-random functions

### hash functions

, e.g., SHA2, collision resistance

### message authentication codes

### key derivations functions

## Symmetric key cryptography

### Perfect secrecy and the one time pad

### Modes of operation for semantic security and authenticated encryption

 (e.g., encrypt-then-MAC, OCB, GCM)

### Message integrity
 (e.g., CMAC, HMAC)

## Public key cryptography

### Trapdoor permutation, e.g., RSA

### Public key encryption, e.g., RSA encryption, EI Gamal encryption o Digital signatures

### Public-key infrastructure (PKI) and certificates

### Hardness assumptions, e.g., Diffie-Hellman, integer factoring

## Authenticated key exchange protocols

, e.g., TLS

## Cryptographic protocols

: challenge-response authentication, zero-knowledge protocols, commitment, oblivious transfer, secure 2-party or multi-party computation, secret sharing, and applications

## Motivate concepts using real-world applications

, e.g., electronic cash, secure channels between clients and servers, secure electronic mail, entity authentication, device pairing, voting systems.

## Security definitions and attacks on cryptographic primitives

### Goals

indistinguishability, unforgeability, collision-resistance

### Attacker capabilities

chosen-message attack (for signatures), birthday attacks, side channel attacks, fault injection attacks.

## Cryptographic standards and references implementations

## Quantum cryptography