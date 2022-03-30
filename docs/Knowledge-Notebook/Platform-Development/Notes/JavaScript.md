---
hide:
    - navigation

---

# JavaScript (ECMAScript)

[:octicons-arrow-left-24: Return to Web Platforms](/Knowledge-Notebook/Platform-Development/02_Web-Platforms/)

---

## Resources/ Bib

!!! cite ""

    1. [Microsoft JavaScript Docs](https://docs.microsoft.com/en-us/javascript/)
    2. [Mozilla JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    3. [Mozilla | A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

## History

---

Created in 1995 by Brenda Eich while an engineer at NetScape. First released with NetScape 2

## Lexical Structure

---

### Control characters

### Semicolons

### Line terminators

### Comments

### Hashbang comments

`#!env/node`

### Keywords

- [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [`case`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- [`default`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [`do`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [`finally`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [`try`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)
- [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)
- [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

### Literals

#### Template Literals

## Expressions

## Types

---

### Number

[double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (numbers between -(2^53 − 1) and 2^53 − 1).

An *apparent integer* is in fact *implicitly a float*. In practice, a integer is stored as a 32-bit

#### Numeric literals

``` js
1234567890
42

// Caution when using with a leading zero:
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal

// Exponential
0e-5   // => 0
0e+5   // => 0
5e1    // => 50
175e-2 // => 1.75
1e3    // => 1000
1e-3   // => 0.001

// Binary (0 followed by B or b)
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

### BigInt

uses numeric literals

### String

sequences of [Unicode characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#unicode) (UTF-16 code units)

#### Methods

- .charAt()
  
- .toUpperCase()
  
- .toLowerCase()
  
- .length
  
#### String literals

``` js
'foo'
"bar"
```

### Boolean

1. `false`, `0`, empty strings (`""`), `NaN`, `null`, and `undefined` all become `false`.
2. All other values become `true`.

```js
Boolean('');  // false
Boolean(234); // true
```

### Object

##### Object literals

```js
var o = { a: 'foo', b: 'bar', c: 42 };

// shorthand notation. New in ES2015
var a = 'foo', b = 'bar', c = 42;
var o = {a, b, c};
```

#### Function

#### Array

#### Date

#### RegExp

##### Regular Expression Literal

```
/ab+c/g
```

#### Symbol (new in ES2015)

### null

### undefined

## Variables

---

### `let`

Block-level variables available from the block they are declared in.

```js
let a;
let name = 'Simon';
```

### `const`

Variables whose values are never intended to change and are available from the block they are declared in.

```js
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
```

### `var`

## Operators

---

`+`, `-`, `*`, `/` and `%`

Values are assigned using `=`

Compound assignment statements such as `+=` and `-=`

`&lt;`, `>`, `&lt;=` and `>=`

### Comparison

`==` performs type coercion if you give it different types

`===` avoids type coercion

### Bitwise operations

## Control structures

---

### Loops

### if/ else if/ else

### switch

### termary

## Classes

---

### this

## Functions

---

Core components of JavaScript

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

### Anonymous functions

### Arrow Functions

Don't have there own  `this` binding
Don't have there own constructor
Don't have a prototype property

## Scopes

## DOM

---

> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

## Strict Mode

---

## ECMAScript 6, 2016, 2017

---

## Timers

---

## Promises

---

## Async/ Await

---

## Array Methods

---

### map

### filter

### reduce

## Fetch

---

## Math

---

- sin
  
- tan
  
- PI

## Further Reading

---

- [Node.js](../../Platform-Development/Notes/Node.md)