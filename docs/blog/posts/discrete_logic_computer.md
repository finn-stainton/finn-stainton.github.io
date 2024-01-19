---
title: Discrete Logic Computer
author: 
    - Finn Stainton
date: 2024-01-20
draft: true
---
# Discrete Logic Computer

I recently finished soldering up a PCB version of Ben Eater's 8-bit build from 74' series discrete logic chips. 

<!-- more -->

Around 2016 a video popped up about building a computer from 74 series logic chips. The video I'm talking about is of course Ben Eater's series. Like many others, this started my interest in computer architecture. But being in high school, I didn't have the finace to purchase all the components needed.


---

Ben Eater's design, was itself based off a theoretical computer named the "Simple as Possible 1" (SAP-1). 


The PCB designer has put together some great documentation on both the hardware, but also the instruction architecture. So I won't go into too much detail on the individual hardware blocks, But to summarise the characteristics of the system;
- The system is of a Von Neumann Architecture where the Program and Data are accessed via the same address and data bus.
- There is a single 8-bit common bus plus an 8-bit memory bus

Limitations of the system include:
- Only having 4 bits for instructions limiting the system to a max of 16 instructions

I may write a future article on my planned adaptions to Eater's design.

However, when I thought about the purpose of the system, it was to demonstrate in a simple but intrusive way how hardware can compute software.
Therefore, I decided that Eater's design meet that criteria 

---

Is a PCB simpler to manufacture (hand solder) then a breadboard? Yes and No
Does the PCB allow you to expand? No

---
- Intro
- Ben eater's design
- History
- My PCB
- Discussion on PCB
- Learnings

