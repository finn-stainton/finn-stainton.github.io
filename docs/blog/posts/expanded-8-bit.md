---
title: "Discrete Logic Computer: An Expansion"
author: 
    - Finn Stainton
date: 2021-12-20
draft: true
---

# Discrete Logic Computer: An Expansion

Inspired by Ben Eaters video series, I set out to construct a simple 8-bit computer from discrete 74 series chips. My aim was to To understand how software is executed.

<!-- more -->

## Instruction Set Architecture

| Operation | Machine Code | Description |
| --- | --- | --- |
| NOP | 0x00 | No Operation |
| HLT | 0x01 | Halt |
| LD | 0x02 | Load |
| LDI | 0x03 | Load immediately out |
| MOV | 0x04 | Move |
| IN | 0x05 | In |
| ADD | 0x06 | Add A and B |
| SUB | 0x07 | Subtract A and B |
| COMA | 0x08 | Two's Compliment of A |
| COMB | 0x09 | Two's Compliment of B |
| NEGA | 0x0A | Negate A register |
| NEGB | 0x0B | Negate B register |
| AND | 0x0C | Bitwise AND |
| OR | 0x0D | Bitwise OR |
| XOR | 0x0E | Bitwise XOR |
| ADDI | 0x0F | Addition with immediately out |
| SUBI | 0x10 | Subtract with immediately out |
| ANDI | 0x11 | Bitwise AND immediately |
| ORI | 0x12 | Bitwise OR immediately |
| ROR | 0x13 | Rotate Right |
| ROL | 0x14 | Rotate Left |
| RORC | 0x15 | Rotate Right with Carry |
| ROLC | 0x16 | Rotate Left with Carry |
| ST | 0x17 | Store |
| OUT | 0x18 | Output |
| JMP | 0x19 | Jump |
| BRG | 0x1A | Branch if Greater than Flag set |
| BRGE | 0x1B | Branch if Greater than or Equal Flag set |
| BRNE | 0x1C | Branch if Negative or Equal Flag set |
| BRLE | 0x1D | Branch if Less than or Equal Flag set |
| BRL | 0x1E | Branch if Less than Flag set |
| BRN | 0x1F | Branch if Negative Flag set |
| BRP |  | Branch if Positive Flag set |
| BRNC |  | Branch if Greater than Flag set |
| BRZ |  | Branch if Zero Flag set |
| BRV |  | Branch if Greater than Flag set |
| JSUB |  | Jump to Subroutine |
| RET |  | Return from Subroutine |

## Hardware Blocks

### Bus

### Control Unit

### ALU

### Registers

### Program Memory

### Random Access Memory

### Input

### Output

## Programs

## Other Systems

- [Ben Eater SAP-1](https://eater.net/8bit)
- [https://dangrie158.github.io/SAP-1/](https://dangrie158.github.io/SAP-1/)
- Gigatron

!!! notice "Status"
    Paused
