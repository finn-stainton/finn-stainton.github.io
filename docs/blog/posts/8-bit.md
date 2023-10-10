---
title: Discrete 8-bit Computer
author: 
    - Finn Stainton
date: 2021-12-20
draft: true
---

# Discrete 8-bit Computer

Inspired by Ben Eaters video series, I set out to construct a simple 8-bit computer from discrete 74 series chips. My aim was to To understand how software is executed.

<!-- more -->

## Instruction Set Architecture

| Operation | Machine Code (HexDecimal) | Description |
| --- | --- | --- |
| NOP | 00 | No Operation |
| HLT | 01 | Halt |
| LD | 02 | Load |
| LDI | 03 | Load immediately out |
| MOV | 04 | Move |
| IN | 05 | In |
| ADD | 06 | Add A and B |
| SUB | 07 | Subtract A and B |
| COMA | 08 | Two's Compliment of A |
| COMB | 09 | Two's Compliment of B |
| NEGA | 0A | Negate A register |
| NEGB | 0B | Negate B register |
| AND | 0C | Bitwise AND |
| OR | 0D | Bitwise OR |
| XOR | 0E | Bitwise XOR |
| ADDI | 0F | Addition with immediately out |
| SUBI | 10 | Subtract with immediately out |
| ANDI | 11 | Bitwise AND immediately |
| ORI | 12 | Bitwise OR immediately |
| ROR | 13 | Rotate Right |
| ROL | 14 | Rotate Left |
| RORC | 15 | Rotate Right with Carry |
| ROLC | 16 | Rotate Left with Carry |
| ST | 17 | Store |
| OUT | 18 | Output |
| JMP | 19 | Jump |
| BRG |  | Branch if Greater than Flag set |
| BRGE |  | Branch if Greater than or Equal Flag set |
| BRNE |  | Branch if Negative or Equal Flag set |
| BRLE |  | Branch if Less than or Equal Flag set |
| BRL |  | Branch if Less than Flag set |
| BRN |  | Branch if Negative Flag set |
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
