---
hide:
    - navigation

---

# React.js

A JavaScript library for building interactive user interfaces

[:octicons-arrow-left-24: Return to Platform Development](/Knowledge-Notebook/Platform-Development/)

---

## Resources

!!! cite ""

    1. [React Docs | Getting Started](https://reactjs.org/docs/getting-started.html)
    2. [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
    3. [React Tutorial by Tania Rascia](https://www.taniarascia.com/getting-started-with-react/)

## Prerequisites

---

- [HTML](HTML.md) and [CSS](CSS.md)
- [JavaScript](JavaScript.md)
- [DOM](DOM.md)
- [Node.js](Node.md) and npm installed

## Getting Started

---

## Create React App

---

## JSX

---

## Components and Props

---

!!! quote
    "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen." [(Component API Docs)](https://reactjs.org/docs/react-component.html)

Names should always start with a capital letter

!!! note
    Class components were the main components used in projects (and still are used), however functional components are now the recommended way and therefore, I will only be writing about them.

``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Accepts a single "props" object argument and returns a React element.

> https://reactjs.org/docs/react-component.html

### Extracting Components

``` js
// Original
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

It accepts `author` (an object), `text` (a string), and `date` (a date) as props, and describes a comment on a social media website.

But it is hard to reuse. Extracting

``` js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

!!! note
    A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be extracted to a separate component. (React)

Presentation Components

Container Components

## State

---

> [The State of State Management in React - YouTube](https://www.youtube.com/watch?v=BhQYZmaxTCM)

Original used as part of classes, functional components can now use state via [State Hooks](#state-hook)

## Events

---

## Conditional Rendering

---

## Fragment

---

## Hooks

---

> "Hooks are functions that let you “hook into” React state and lifecycle features from function components." (React)

- Only works with functions (not classes)
- Cannot be nested in control structures?

### Hook Rules

1. Only Call Hooks at the Top Level
    - unconditionally call hook just below
2. Only Call Hooks from React Components

### State Hook

- local state
- Preserves between renders
- returns current state and a function to update state
- one initial state argument which is only used during first render
- useState does not automatically merge update objects (use object spread syntax)

```js
import { useState } from "react";
const [count, setCount] = useState(10);

// Functional Update
setCount(currentCount => currentCount + 1);

```

If initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render.

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

### Effect Hook

``` js
useEffect(() => {
  
}, []);
```

### Context Hook

### Reducer Hook

### Memo Hook

### Reference Hook

> https://www.youtube.com/watch?v=W6AJ-gRupCs

- storing a [Reference] to a Component
- imperially call components

``` js
const inputRef = useRef();

<input ref={input} name="input"/>

<button onClick={() => {
  inputRef.current.focus();
}}>Focus on Input</button>
```

### Custom Hooks

- extract component logic into reusable functions
- should keep with hook naming conventions ("use...")
- doesn’t need to have a specific signature

``` js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // Logic

  return isOnline;
}
```

## State Management Libraries

> https://www.youtube.com/watch?v=u_o09PD_qA
> https://www.youtube.com/watch?v=P95DuIBwnqw

---

### Redux

- Central data store for all app data
- Any component can access data from it
- Component
- Dispatch action (action passed to reducer)
- Reducer(updates the state)

```js
    const { createStore } = Redux;

    const initState = { things: [] }

    function reducer(state = initState, action) {
        if(action.type == 'ADD_THING') {
            return {
                ...state,
                things: [state.things, action.thing]
            }
        }
    }

    const store = createStore(reducer);

    // Normally part of a component
    store.subscribe(() => {
        console.log('state updated');
        console.log(store.getState());
    })

    const anAction = { type: 'ADD_THING', thing: 'new thing'}

    store.dispatch(anAction)
```

### Zustand

### MobX

### Recoil

### Akita

## Query Libraries

---

### Redux Toolkit Query

### React Query

## Lazy Loading/ Suspense

---

## TypeScript

---

```ts
export const Component: React.FC = () => {}
```

**Types**

React.FC: Function Component

## Testing

---

### Jest

### React Testing Library

### Mocha

### Chai

## ESLint

---

## Performance Improvements
