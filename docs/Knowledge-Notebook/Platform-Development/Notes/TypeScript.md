---
hide:
    - navigation

---
# TypeScript

Is a strongly typed language developed by Microsoft which is a superset of JavaScript. Additional features include static types. It has to be compiled down to JavaScript.

[:octicons-arrow-left-24: Return to Web Platforms](/Knowledge-Notebook/Platform-Development/02_Web-Platforms/)

---

## Resources/ Bib

!!! cite ""

    - [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
    - [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
    - [Playground](https://www.typescriptlang.org/play)
    - [Cheatsheets](https://www.typescriptlang.org/cheatsheets)
    - [Type Search](https://www.typescriptlang.org/dt/search)

## Getting Started

Install with npm

```
npm install -g typescript
```

To compile a `.ts` file to `.js` use `tsc` util.

```
tsc file.ts
```

Instead of having to compile each time, we can watch the file

```
tsc --watch file.ts
```

create a tsconfig options file

```console
tsc --init
```

```
npm i -D @types/lodash
```

Can install syntax checking

## tsconfig

## Types

> [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### Primitive Types

**Default:**

- boolean
- string
- number
- undefined
- null
- any
- unknown
- never
- void
- bigint
- symbol

**Common Object:** Date, Error, Array, Map, Set, Regexp, Promise

**Type Literals:**

- Object `{ field: string }`
  
- Function `(arg: number) => string`
  
- Arrays: `string[]` or `Array&lt;string>`
  
- Tuple: `[string, number]`
  

```typescript
let variable = 20 // Without type annotations, inferred as a 'number'
variable = '23' // Results in an error as not assignable to type 'number' 
let foo: string = '23' // With type annotations 
let ahh: any = 20 // 'any' type allows any data type to be written over the variable. 
ahh = '21' // Change from number to string
```

## Interfaces

### Overloads

### Getters and Setters

## Classes

### Abstract

### Decorators

### Attributes

### Generics

## If Statements

## Type Guard

## Assertion functions

## Discriminated Unions

## Assignment

[![Control Flow Analysis Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png)](https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png)

[![Interfaces Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)

[![Class Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)

[![Types Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Types-4cbf7b9d45dc0ec8d18c6c7a0c516114.png)](https://www.typescriptlang.org/static/TypeScript%20Types-4cbf7b9d45dc0ec8d18c6c7a0c516114.png)