# Discrete 8-bit Computer

Starting in 2018 after watching Ben Eater's videos on an 8-bit breadboard computer which sparked my interest in digital logic design. 

<!-- <figure markdown> 
  ![Dummy image](https://dummyimage.com/600x400/){ width="300" }
  <figcaption>Image caption</figcaption>
</figure> -->

Eater’s design was itself based on the purely academic SAP-1. 

## First Design
The original plan was to copy Eater's design with a few improvements. These
improvement where as follows:

- Increase number of RAM addresses to eight
- Increase the instruction set to thirty-two (five bits) instructions
- Increase program memory to a thirteen bit word
- Increase the program counter to eight bit counter

The improvements (in same order as above) would:

- Enable the computer to store a larger program,
- Enable new conditional branch instructions, 
- larger data could be stored with each instruction (up-to unsigned 255). 

I had an issue with having a five bit
instruction set, hardware registers only come in iterations of four, therefore to
store five bits, you’ll need an eight bit instruction register. So then why be limited
to five bits? This lead me to the Second Iteration.

<!-- ## Second Iteration

## Current Status

![Version Five Block Diagram](./8-bit_5.png) -->