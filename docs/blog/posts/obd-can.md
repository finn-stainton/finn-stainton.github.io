---
title: OBD-II/ CAN
author:
    - Finn Stainton
date: 
  created: 2020-11-20 
  updated: 2023-10-08
draft: true
---

# OBD-II/ CAN: Experiment

To read sensor values off the CAN network. To read diagnostic codes from the Onboard Diagnostics (OBD)

<!-- more -->

## Background

To reduce the amount of writing a vehicle needed to connect sensor to control unit, Bosch developed a shared communication network which only required two wires to transmit data between sensors to controllers.

## Aim

1. To read sensor values off the CAN network
2. To read diagnostic codes from the Onboard Diagnostics (OBD)

## Controller Area Network (CAN)

### Seeed Studio CAN-BUS Shield V2.0

- MCP2515: CAN Controller with SPI, Microchip
- MCP2551: CAN Transceiver

### Physical Interface

- DB9 for OBD-II (need a DBG to OBD-II cable)

![DB9 to OBD-II](assets/DB9-OBD.png)

## OBD-II
