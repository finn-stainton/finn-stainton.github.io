# UML State Diagram

Is a behavior diagram which provides a dynamic model of the evolution a single object has over time. Used mainly for describing the behavior of a complex object over several use cases. They are not designed to show a sequence of actions for several objects. They also helpful in defining a class view of an object. Invented by David Harel and originally called State Charts (Harel, 1987). Refined in UML 1 and 2.

## Components

<!-- TODO: Add photos of each component -->

1. State: Condition of the object at a moment in time (Simple, Composite, Start or End)
2. Event: A significant or noteworthy atomic occurrence (Internal or external)
3. Transitions: Relationship between two states that indicates when an event occurs. Can indicate an event where no change in state occurs (loop/ self).
4. Actions: Triggered by a transition, a state can have a single atomic element which can be interrupted by an event. Triggers Include:
      1. On entry
      2. Do
      3. On Event
      4. On exit
      5. Include
5. Guards: Condition that must be meet for the transition to occur.

## Guidelines

- Only create state machines for complex object
- Draw the initial state in the top left hand corner
- Draw the final state in the bottom right hand corner
- Use simple but descriptive ste names
- Question "black hole" and \*miracle\* states
- Make sure guards are mutually exclusive
- Make sure transitions are associated with messages and operations

!!! cite
    Ambler, S. W. (2005). The Elements of UML 2.0 Style. Cambridge, England: Cambridge University Press

## Examples

<!-- TODO: Add example diagrams -->

## Resources

- System Analysis Design UML Version 2.0: An Object-Oriented Approach. Dennis, A., Wixom, B. H. (2012).