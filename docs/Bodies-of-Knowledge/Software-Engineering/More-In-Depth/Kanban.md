---
hide:
    - navigation

---

# Kanban

[:octicons-arrow-left-24: Return to Software Engineering](/Bodies-of-Knowledge/Software-Engineering/)

---

Kanban 看板, meaning "sign board" originated from Lean manufacturing in Toyota factories where the main aim was to avoid inventory stockpiling and achieving Just In Time (JIT) manufacturing. 

## Principles

Kanban aims to reduce waste (producing more than is needed) at each step in the workflow by:

1. Making the workflow steps visible
2. Limiting the work in progress at each step
3. Look for ways to reduce the cycle time

## Board Queues

- Stories Todo
- Analyse Doing
- Analyse Done
- Dev. Doing
- Dev. Done
- Testing
- Done

## Limit

Aim to avoid:

- Building features users don't need right now
- Writing more specifications than can be coded
- Writing more code than can be tested
- Testing more code than can be deployed

The aim is to reduce cycle/ lead time not velocity by finding and fixing bottlenecks and limiting WIP. 

Common formula to find WIP limits:

1. Total WIP limit is half the total number of team members.
2. Then limit the 'Todo' queue to about half again.
3. Each other process should be half the number of people who can perform the work. 

This will force members to work with each other to support other practices like Mob Programming. 

Other limits maybe 1-1 or 1-1.5 depending on the team.



## Cards

Cards are Minimal Marketable Features (MMF)

- Minimal in that being any smaller it wouldn't be Marketable
- Marketable in that when it is released, people would use/ buy the feature.

MMF's may take weeks to build. 

!!! cite "Resources/ Bib."

- 