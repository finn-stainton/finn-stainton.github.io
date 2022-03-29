---
hide:
    - navigation

---

# C

[:octicons-arrow-left-24: Return to Programming Languages](/Knowledge-Notebook/Programming-Languages/)

---

## Resources

## Getting Started

## Noteworthy

The syntax of C in Backus-Naur Form

::= {}* ::= | ::= {}* {}* ::= | | ::= auto | register | static | extern | typedef ::= void | char | short | int | long | float | double | signed | unsigned | | | ::= { {}+ } | { {}+ } | ::= struct | union ::= {}* ::= | ::= | , ::= | : | : ::= {}? ::= * {}* {}? ::= const | volatile ::= | ( ) | [ {}? ] | ( ) | ( {}* ) ::= ::= | ? : ::= | || ::= | && ::= | | ::= | ^ ::= | & ::= | == | != ::= | < | > | <= | >= ::= | << | >> ::= | + | - ::= | * | / | % ::= | ( ) ::= | ++ | -- | | sizeof | sizeof ::= | [ ] | ( {}* ) | . | -> | ++ | -- ::= | | | ( ) ::= | | | ::= | , ::= | ::= = | \*= | /= | %= | += | -= | <<= | >>= | &= | ^= | |= ::= & | * | + | - | ~ | ! ::= {}+ {}? ::= | , ... ::= | , ::= {}+ | {}+ | {}+ ::= | | ::= ( ) | {}? [ {}? ] | {}? ( {}? ) ::= enum { } | enum { } | enum ::= | , ::= | = ::= ::= {}+ {}* ; ::= | = ::= | { } | { , } ::= | , ::= { {}* {}* } ::= | | | | | ::= : | case : | default : ::= {}? ; ::= if ( ) | if ( ) else | switch ( ) ::= while ( ) | do while ( ) ; | for ( {}? ; {}? ; {}? ) ::= goto ; | continue ; | break ; | return {}? ; 

This grammar was adapted from Section A13 of **The C programming language**, 2nd edition, by Brian W. Kernighan and Dennis M. Ritchie, Prentice Hall, 1988