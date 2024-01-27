---
title: Discrete Logic Computer
author: 
    - Finn Stainton
date: 2024-01-20
draft: true
tags:
  - HTML5
  - JavaScript
  - CSS
---

# Discrete Logic Computer

I recently finished soldering up a PCB version of Ben Eater's 8-bit build from 74" series discrete logic chips. In this project, I learnt about the basics of computer architecture, from how basic logic gates throught to instruction architecture can be coupled together too compute software.

<!-- more -->

## A long, long time ago...

Around 2016, a video popped up in my feed about building a computer from 74" series logic chips. The video I'm talking about is of course, Ben Eater's series. Being in high school, I didn't have the finances to purchase all the components needed. However I learnt about boolean logic, how transistor can be formed into logic gates, how gates can be combined to perform logical operations and how these modules can be grouped to run software.

From this basis, I started designing modifications to the orginial design which I may write in a future article. Survise to say, It when off on a little bit of a tagent.

Finally once I was in uni and had a part time job, I finally had the money to purchase components. I decided (maybe unfor) to use strip board. This required soldering many wires across the traces from chip to chip. This soon got to tendis and the project fell to the weigh side.

Fast forward to late 2023 when I was going through my project draw and decided to restart. When I thought about the purpose of the system, it was to demonstrate in a simple but intrusive way how hardware can compute software.
Therefore, I decided that Eater's design meet that criteria.

## Ben Eater's Design

Ben Eater's design, was itself based off a theoretical computer named the "Simple as Possible 1" (SAP-1). which as the name indicates was aim as a educational design.

## The PCB

The PCB designer has put together some great documentation on both the hardware, but also the instruction architecture. So I won't go into too much detail on the individual hardware blocks, But to summarise the characteristics of the system;

- The system is of a Von Neumann Architecture where the Program and Data are accessed via the same address and data bus.
- There is a single 8-bit common bus plus an 8-bit memory bus

Limitations of the system include:

- Only having 4 bits for instructions limiting the system to a max of 16 instructions

## Learnings

Is a PCB simpler to manufacture (hand solder) then a breadboard? Yes and No

Does the PCB allow you to expand? No
