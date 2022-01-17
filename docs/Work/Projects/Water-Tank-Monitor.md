# Water Tank Monitor & Control

## Problem

After a failed attempt to install a larger capacity water tank (taller) at the same level of some existing tanks, it was installed so that it had to be isolated before its full capacity could be achieved.

This lead to manually having to shut an output ball valve before opening an input ball valve. However, this procedure more often than not had to be preformed when it was raining (meaning someone had to get wet).

**Aims:** 

1. Develop a system which can monitor the water level in multiple tanks.
2. Develop a system which can be automatically trigger a procedure to control multiple valves.
   
## Monitoring

The main aim of the project was to remotely monitor the water level in multiple tanks. I proceeded to conduct research on possible input methods:

### Input 

1. Ultrasonic (inside, top of tank)
    - Pro:
    - Con:
2. Reed switch array
    - Pro:
    - Con:
3. Flow actuator
    - Pro:
    - Con: Only one physical level monitored
4. Infrared Proximity Sensor
    - Pro:
    - Con:
5. Pressure Transducer
    - Pro:
    - Con:

I decided to go with the pressure transducer...

### Node

### Transmission

### Gateway

### API

### User

Given that 

## Control

The secondary aim of the project was to remotely control the water level in multiple tanks. This meant controlling valves and pumps to move water around the network. With the current water system, the pump has kick-in/ cutoff pressure points. This means that simply controlling valves would be enough for the pump to turn on and off by itself (if however pump control is needed, a high power (250VAC 15A) relay could be used, preferable with a Photo-TRIAC Optocoupler)

### Output

1. Solenoid Valve
    - Pro:
    - Con:
2. Motorised Ball Valve
    - Pro:
    - Con:

I decided to go with the Motorised Ball Valve...

!!! note ""

    See my teardown of it [here](../Projects/Repairs-and-Teardowns/US_Solid_Motorised_Valve_Teardown.md)

## Installation
