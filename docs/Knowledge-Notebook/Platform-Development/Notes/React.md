---
hide:
    - navigation

---

# React.js

A JavaScript library for building user interfaces

[:octicons-arrow-left-24: Return to Platform Development](/Knowledge-Notebook/Platform-Development/)

---

## Resources

!!! cite ""

    1. [React Docs | Getting Started](https://reactjs.org/docs/getting-started.html)
    2. [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)

---

## Getting Started

---

## JSX/ TSX

---

## Components/ Props

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
> 
> Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
> 
> [Component API Docs](https://reactjs.org/docs/react-component.html)
> 
> Names should always start with a capital letter

### Function Components

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Accepts a single "props" object argument and returns a React element.

### Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Rendering Components

```jsx
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### Composing Components

```jsx
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### Extracting Components

``` jsx
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

``` jsx
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

> A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be extracted to a separate component.

## State

---

> [The State of State Management in React - YouTube](https://www.youtube.com/watch?v=BhQYZmaxTCM)

Original used as part of classes

### Redux

- Central data store for all app data
- Any component can access data from it
- Component
- Dispatch action (action passed to reducer)
- Reducer(updates the state)

``` js
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

---

## Context

---

## Hooks

Only works with functions (not classes)

Cannot be nested in control structures?

### State Hook

```js
import { useState } from "react";
const [count, setCount] = useState(10);
const [{anObject, anotherObject}, setObject] = useState(() => expensiveInitalState())

setCount(currentCount => currentCount + 1);
setObject(currentState => ({
    ...currentState,
    anObject: currentState.anObject = something
}))
```

### Effect Hook

### Reference Hook

### LayoutEffect Hook

### Callback Hook

### Memo Hook

### Reducer Hook

### Context Hook

### Custom Hooks

---

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
