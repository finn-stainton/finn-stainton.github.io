---
date: 2021-12-20
author:
    - Finn Stainton
title: Worker Down System
draft: true
---

# Worker Down System

As part of my Bachelors degree, we had to complete a capstone project where a team spent a year working with an organistion to develop a solution for a real-world problem.

WorkSafe's innovation unit had put forward a request for a...

<!-- more -->

!!! note
    This project is on the same topic as my Final Year R&D Project. However this page is a further advancement on the idea and not intended to cover all items completed or the final conclusions made in the R&D project. This is a working document and is not complete.

## Background

As part of my Bachelors degree, we had to complete a capstone project where a team spent a year working with an organistion to develop a solution for a real-world problem.

WorkSafe's innovation unit had put forward a request for a...

## Problem

## Aim

To reduce the response time of first responders to trapped and injured workers.

## Constraints

- May have no/ limited connection to internet
- System shouldn't solely rely on GPS.

## Requirements

1. Device can locate itself
2. Device network can forward messages between multiple nodes.
3. Device can automatic trigger an alarm
4. Device can record and transmit alarm activation
5. Device can receive alarms.
6. Portable computer can display a map with all units last know location
7. Map can display alarms

---

## Working Environment

### Forestry

The current problem in the forestry industry is that there are ~~no reliable ~~safety measures in place for workers if they are involved in an accident. Through this project we feel that we can create a safer industry and give workers a greater peace of mind of making it home safely at the end of the day. There are a variety of accidents that are prominent in the forestry industry. These being falling objects such as trees, branches, heavy machinery, trip hazards, fatigue and overhead wires from the log hauler operation. The client being Worksafe has come to us to develop a worker down solution to give forestry workers a greater chance of survival in the event of an accident. Our main objective is to limit the time that is taken to get to a worker that has been involved in an accident. By limiting the time that it takes to get a worker in trouble the greater the chance of survival or limiting the severity of the injury.

Agriculture and Forestry in New Zealand is one of the largest industries in New Zealand currently employing over 20,000 workers. In 2019, there were 7 fatalities and 136 injuries for the forestry industry which resulted in a week or more off work (Worksafe, MPI, FISC 2020). With the implementation of a worker down system we believe we can limit the number of deaths and give workers a peace of mind while working in one of the most dangerous industries in New Zealand (MBIE 2018).

Currently in the forestry industry the only safety device in use is there UHF radios (Haines, L, Worksafe 2012). Each work has one of these and can communicate with anyone at the site who also has a radio on the same channel. Whether this be other workers nearby or the foreman back at base. Using the radios every 30 – 45 minutes workers radio into the foreman who takes a register of each worker checking their safety and location at that specific time. Through talking to researchers and people currently in industry this is not a mandatory protocol for all of forestry. The foreman on site also has many other jobs, so he is not always available to take the register. Secondly time if a worker was to have an accident factor is the time between radios check-ins. If an accident were to occur straight after a check-in had taken place and a worker was knocked unconscious, they could be unnoticed for up to 45 minutes. They would only then be identified as in trouble when the next check-in takes place. Even then the foreman must notify other workers and has no exact location of the worker injured. Depending on the terrain and distance it could take a lengthy amount of time to locate and get to the injured worker. This current protocol of checking in is not reliable and heavily depends on the foreman’s competence that day. By implementing a specific worker down system there would be no need for radio check-ins and a register to be taken. Each worker’s exact location would be tracker frequently and displayed on a map giving a foreman precise location and status information of each worker.

#### Roles

- **Faller**

#### Kit

Agriculture Industry

On average, five people are killed on New Zealand farms each year in work- related quad bike incidents. In addition, there are more than 845 work-related injuries each year on New Zealand farms, with more than 160 serious enough to require time off work or ongoing help. 52% of the serious harm incidents on farms investigated by the Department of Labour between 2000 and 2008 involved a quad bike rollover (Taunton E 2017). The system could be used in multiple worker down scenarios not just limiting it to the forestry industry. In the farming industry many workers are alone for long periods of time as well. A lone worker system would be incredibly useful. The system would be easily adaptable to work in the agriculture industry with minor adjustments. With agriculture workers not having any kind of safety device currently it would bring peace of mind and safety to those working alone.

---

## Positioning System

For a worker to be positioned, we have to have a universal coordinate system which is related to their actual geographic location (why)

### Geographic Coordinate System (GCS)

[New Zealand Geodetic Datum 2000 (NZGD2000)]([New Zealand Geodetic Datum 2000 (NZGD2000) | Toitū Te Whenua Land Information New Zealand](https://www.linz.govt.nz/data/geodetic-system/datums-projections-and-heights/geodetic-datums/new-zealand-geodetic-datum-2000-nzgd2000))

[New Zealand Vertical Datum 2016 (NZVD2016)](https://www.linz.govt.nz/data/geodetic-system/datums-projections-and-heights/vertical-datums/new-zealand-vertical-datum-2016-nzvd2016)

[Height Transformation Examples](https://www.linz.govt.nz/data/geodetic-services/coordinate-conversion/height-transformation-examples)

### Global Positioning System

### Wireless Local Positioning System

!!! quote
    "A wireless local positioning system (WLPS) is a positioning system that functions in global positioning system (GPS)‐denied environments and/or when the GPS is jammed. It allows single‐node localization through roundtrip time‐of‐arrival estimation and direction‐of‐arrival (DOA) estimation via antenna arrays." [Wireless Local Positioning Systems](https://doi.org/10.1002/9781119434610).ch34

### Trilateration

### Triangulation

### Ranging

#### Time (Difference) of Arrival (ToA/TDoA)

#### Direction of Arrival

### Calculations

---

## Alarm System

- A "worker down" alarm should be triggered when a worker is incapacitated
- A user should be able to manually trigger a worker down alarm
- A set of emergency contacts should be contacted if a worker down alarm is triggered
- Worker down alarms should contain the last know location of the worker
- The device should notify a member to check­in every 30 minutes
- If a work fails to check in after 5 minutes, a worker down alarm should be sent.
- All emergency contacts should be alerted to all active worker down alarms
- A user should be able to pause automatic alarm triggers (meal break)

### Automatic Trigger

Alarm would be automatically triggered after verification the user is in an abnormal unresponsive state

1. Detect abnormal state (fall/ no movement)
2. Verify abnormal state (time)
3. Test unresponsive state (alarm)
4. Verify unresponsive state (time)
5. Send Alarm (Continuous)
6. Cancel Alarm

#### Fall Detection

**Definition**: A fall is a rapid descent from a higher to lower height.

Detection of falls could be achieved by measuring:

- **Angle** :A person being at a angle of less that 45 degrees for a period of time. This could be measured by a calibrated gyroscope.
- **Acceleration**: A high increase and/or decrease in a person’s velocity. This could be measured by a calibrated accelerometer.

#### Motion Detection

A lack of motion for a period could be an indication that a worker is incapacitated. Measuring motion could be achieved via a accelerometer.

### Manual Trigger

An alarm can be triggered manually on the device using a button or pull latch.

### Interface

Given the work environment this system will be working in, where distractions could lead to serious injury. Response times to warning should be extended to give time for the user to complete work. Warnings should be noticeable in a loud environment, but if Audible warning are used, they should be bearable to work through to complete a dangerous task.

Worker Unit – “Worker Down” Alarm:

!!! warning
    Following may change with refinement

#### Transmit: Manual Trigger

1. Should be a toggle switch to provide visual feedback which reassures the user that an alarm has been triggered.
2. Toggle switch should be physically protected against accidental motion.
3. To cancel a manual triggered alarm, the worker must switch the toggle switch back to the normal position, then must provide three instances (button presses or similar) within a 5 second period.

#### Transmit: Automatic Trigger

1. A wearer is assumed to need help after they have collapsed and are unresponsive.
2. A collapsed state is when the wearer’s device is at an angle of less than 45 ̊ for more than 30 seconds.
3. Upon a collapsed state being declared, a “Warning alert” is triggered.
4. A “warning alert” is a prerequisite to a full “Worker Down” alarm and is aimed at giving the worker an option to cancel the alarm sequence.
5. An “unresponsive” state is when the wearer does not cancel the warning alert within (less than) 30 seconds.
6. To cancel a warning alert, the wearer must provide three instances (button presses or similar) within a 5 second period.
7. A wearer can only cancel a warning alert if they are the origin.
8. When both the collapsed and/ or just the unresponsive state are fulfilled, then a “worker down” alarm is triggered.
9. If a worker has fallen but are not at an angle of 45 ̊ or less, then after 5 minutes a check in notification

#### Worker Down Alarm Transmit sequence

1. While an alarm is transmitting and not accepted. The device will be in a “Alarm Transmitting” state.
2. Upon the alarm being accepted by a responder. The device will go to a ‘alarm accepted’ state.

#### Receive: Warning Alert

1. All connected members of a group will receive a “Warning Alert” whenever there is an active “Worker Down” alarm. This will last until the alarm has be deactivated.
2. Members may accept a Warning alert which will hush any audibly alert and change the light sequence.

#### Receive: Respond Alert

1. A Respond Alert will be sent to a set of pre-set “responders”, this will include the foreman and secondary emergency contacts.
2. A Respond Alert will also be sent to one or two of the members closest to the active alarm.

#### Receive: Check in

1. A “Check in” alert is activated when a worker has been motionless for more than 5 minutes. This is to check that a worker has not be collapsed at an angle of more than 45 degrees and has not manually activated a “Worker Down” Alarm.
- Should not rely location as it may have an inaccuracy which a worker may not exceed.
- Can implemented to activate on a rolling timer, this would be used in situation where the operator is in a static position.

#### Receive: Muster Alert

1. A muster alert is to communicate with all workers to gather a pre-determined location.

#### Alarms/ Notifications Table

| Type | Priority | Before accepted | After accepted |
| --------------------------------- | -------- | ------------------------------------------------------------- | ------------------- |
| Muster | 4 | Blue/ Yellow | Blue/ Yellow |
| Abnormal/Warning Alert | 3 | Yellow-Red Dual Flash (Chirp down/up repeat 2 sec) | Yellow Dual Flash |
| Respond Alert | 2 | Red Fast Strobe (fade in siren) | Red Fast Strobe |
| Alarm Transmitting | 1 | Slow Purple fade in/out | [Alarm Received] |
| Check in | 4 | Blue (Dual Chirp Up, repeats every 5 seconds) | [Check in Received] |
| Alarm/ Check in Received | 4 | Green for 10 secs (Single Chirp up/down) | n/a |
| Break time (Worker down sleeping) | 4 | Long Blue Pulse | n/a |
| Normal | 4 | Green flash (1 sec) upon passing connection test (~5 minutes) | n/a |

<figure markdown>

![State Diagram](assets/worker-down/Worker_Unit_FSM_01.png){ width="600" }

</figure>

---

## Map System

Due to environment constraints with no/ limited internet access, an offline

<figure markdown>

![Wireframe](assets/worker-down/Web_App_Concept_01.png){ width="800" }

</figure>

---

## Network

### Physical Layer

#### LoRa

**Limitations**

### Sigfox

### NB-IoT

### Topology

#### AD HOC Network

#### Mesh Network

#### Wireless Sensor Network

A Wireless Sensor Network is a group of spatially oriented sensors to monitor physical or environmental conditions and to cooperatively pass the data via a network to a main location. A WSN is normally composed of a central processor, communication module and sensor nodes with internal or external power supplies. Currently Wireless Sensor Networks are used in the monitoring of temperature within materials, heavy load handling, engineering structures and for extreme event detection. These sensors can be highly sensitive and detect even the most minute change depending on what they are detecting. The sensors can have multiple uses such as pressure sensing, temperature sensing or movement detection. For this project a Wireless Sensor Network would be difficult to implement as it is easily blocked or interfaced by obstacles which there are a lot of where this device is going to be used. This type of network also consumes a large amount energy as it is constantly sensing (Zhang M, Cao T, Zhao X 2017).

<figure markdown>

![Network Diagram](assets/worker-down/Actor_Network_Diagram.png){ width="600" }

</figure>

---

## Implementation

<figure markdown>

![Concept One](assets/worker-down/System_Concept_N1_8_3_21.png)

</figure>

<figure markdown>

![Concept Two](assets/worker-down/System_Concept_N2_8_3_21.png)

</figure>

<figure markdown>

![Concept Three](assets/worker-down/System_Concept_N3_13_3_21.png)

</figure>

### Hardware

Decided to use TTGO T-Beam's for "Worker Units"

<figure markdown>

![T-Beam](assets/worker-down/t-beam.png){ width="400" }

</figure>

- ESP core

- Bluetooth

- HRF 96 LoRa Radio

- GPS (NEO-6m)

- 1x18650 battery

- Display support (I2C)

Timer

System time

Gyroscope

## Reflection

## References
