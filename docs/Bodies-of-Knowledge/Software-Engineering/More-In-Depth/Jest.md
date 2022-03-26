---
hide:
    - navigation

---

# Jest

JavaScript Testing Framework that works with projects using: Babel, TypeScript, Node, React, Angular, Vue.

[:octicons-arrow-left-24: Return to Software Engineering](/Bodies-of-Knowledge/Software-Engineering/)

---

## Resources/ Bib.

!!! cite ""
    1. [Jest Docs](https://jestjs.io/docs/getting-started)

## Getting started

---

``` bash
npm install --save-dev jest
```

``` js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

``` js
// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### TypeScript

Via Babel `npm install @babel/preset-typescript --save-dev`

Via ts-jest (Jest [transformer](https://jestjs.io/docs/next/code-transformation#writing-custom-transformers) for TypeScript support) `npm install ts-jest --save-dev`, `npx ts-jest config:init`

### Types

``` bash
npm install @types/jest --save-dev
```

``` javascript
// jsconfig.json

{ "typeAcquistion": { "include": [ "jest" ] } }
```

`describe('title', () => {});`

`it.todo('title', () => {});`

## Expect

---

- [`.not`](https://jestjs.io/docs/next/expect#not)
- [`.resolves`](https://jestjs.io/docs/next/expect#resolves)
- [`.rejects`](https://jestjs.io/docs/next/expect#rejects)
- [`.toBe(value)`](https://jestjs.io/docs/next/expect#tobevalue)
- [`.toHaveBeenCalled()`](https://jestjs.io/docs/next/expect#tohavebeencalled)
- [`.toHaveBeenCalledTimes(number)`](https://jestjs.io/docs/next/expect#tohavebeencalledtimesnumber)
- [`.toHaveBeenCalledWith(arg1, arg2, ...)`](https://jestjs.io/docs/next/expect#tohavebeencalledwitharg1-arg2-)
- [`.toHaveBeenLastCalledWith(arg1, arg2, ...)`](https://jestjs.io/docs/next/expect#tohavebeenlastcalledwitharg1-arg2-)
- [`.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)`](https://jestjs.io/docs/next/expect#tohavebeennthcalledwithnthcall-arg1-arg2-)
- [`.toHaveReturned()`](https://jestjs.io/docs/next/expect#tohavereturned)
- [`.toHaveReturnedTimes(number)`](https://jestjs.io/docs/next/expect#tohavereturnedtimesnumber)
- [`.toHaveReturnedWith(value)`](https://jestjs.io/docs/next/expect#tohavereturnedwithvalue)
- [`.toHaveLastReturnedWith(value)`](https://jestjs.io/docs/next/expect#tohavelastreturnedwithvalue)
- [`.toHaveNthReturnedWith(nthCall, value)`](https://jestjs.io/docs/next/expect#tohaventhreturnedwithnthcall-value)
- [`.toHaveLength(number)`](https://jestjs.io/docs/next/expect#tohavelengthnumber)
- [`.toHaveProperty(keyPath, value?)`](https://jestjs.io/docs/next/expect#tohavepropertykeypath-value)
- [`.toBeCloseTo(number, numDigits?)`](https://jestjs.io/docs/next/expect#tobeclosetonumber-numdigits)
- [`.toBeDefined()`](https://jestjs.io/docs/next/expect#tobedefined)
- [`.toBeFalsy()`](https://jestjs.io/docs/next/expect#tobefalsy)
- [`.toBeGreaterThan(number | bigint)`](https://jestjs.io/docs/next/expect#tobegreaterthannumber--bigint)
- [`.toBeGreaterThanOrEqual(number | bigint)`](https://jestjs.io/docs/next/expect#tobegreaterthanorequalnumber--bigint)
- [`.toBeLessThan(number | bigint)`](https://jestjs.io/docs/next/expect#tobelessthannumber--bigint)
- [`.toBeLessThanOrEqual(number | bigint)`](https://jestjs.io/docs/next/expect#tobelessthanorequalnumber--bigint)
- [`.toBeInstanceOf(Class)`](https://jestjs.io/docs/next/expect#tobeinstanceofclass)
- [`.toBeNull()`](https://jestjs.io/docs/next/expect#tobenull)
- [`.toBeTruthy()`](https://jestjs.io/docs/next/expect#tobetruthy)
- [`.toBeUndefined()`](https://jestjs.io/docs/next/expect#tobeundefined)
- [`.toBeNaN()`](https://jestjs.io/docs/next/expect#tobenan)
- [`.toContain(item)`](https://jestjs.io/docs/next/expect#tocontainitem)
- [`.toContainEqual(item)`](https://jestjs.io/docs/next/expect#tocontainequalitem)
- [`.toEqual(value)`](https://jestjs.io/docs/next/expect#toequalvalue)
- [`.toMatch(regexp | string)`](https://jestjs.io/docs/next/expect#tomatchregexp--string)
- [`.toMatchObject(object)`](https://jestjs.io/docs/next/expect#tomatchobjectobject)
- [`.toMatchSnapshot(propertyMatchers?, hint?)`](https://jestjs.io/docs/next/expect#tomatchsnapshotpropertymatchers-hint)
- [`.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)`](https://jestjs.io/docs/next/expect#tomatchinlinesnapshotpropertymatchers-inlinesnapshot)
- [`.toStrictEqual(value)`](https://jestjs.io/docs/next/expect#tostrictequalvalue)
- [`.toThrow(error?)`](https://jestjs.io/docs/next/expect#tothrowerror)
- [`.toThrowErrorMatchingSnapshot(hint?)`](https://jestjs.io/docs/next/expect#tothrowerrormatchingsnapshothint)
- [`.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)`](https://jestjs.io/docs/next/expect#tothrowerrormatchinginlinesnapshotinlinesnapshot)

## Mock

---

- [`mockFn.getMockName()`](https://jestjs.io/docs/next/mock-function-api#mockfngetmockname)
- [`mockFn.mock.calls`](https://jestjs.io/docs/next/mock-function-api#mockfnmockcalls)
- [`mockFn.mock.results`](https://jestjs.io/docs/next/mock-function-api#mockfnmockresults)
- [`mockFn.mock.instances`](https://jestjs.io/docs/next/mock-function-api#mockfnmockinstances)
- [`mockFn.mock.lastCall`](https://jestjs.io/docs/next/mock-function-api#mockfnmocklastcall)
- [`mockFn.mockClear()`](https://jestjs.io/docs/next/mock-function-api#mockfnmockclear)
- [`mockFn.mockReset()`](https://jestjs.io/docs/next/mock-function-api#mockfnmockreset)
- [`mockFn.mockRestore()`](https://jestjs.io/docs/next/mock-function-api#mockfnmockrestore)
- [`mockFn.mockImplementation(fn)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockimplementationfn)
- [`mockFn.mockImplementationOnce(fn)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockimplementationoncefn)
- [`mockFn.mockName(name)`](https://jestjs.io/docs/next/mock-function-api#mockfnmocknamename)
- [`mockFn.mockReturnThis()`](https://jestjs.io/docs/next/mock-function-api#mockfnmockreturnthis)
- [`mockFn.mockReturnValue(value)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockreturnvaluevalue)
- [`mockFn.mockReturnValueOnce(value)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockreturnvalueoncevalue)
- [`mockFn.mockResolvedValue(value)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockresolvedvaluevalue)
- [`mockFn.mockResolvedValueOnce(value)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockresolvedvalueoncevalue)
- [`mockFn.mockRejectedValue(value)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockrejectedvaluevalue)
- [`mockFn.mockRejectedValueOnce(value)`](https://jestjs.io/docs/next/mock-function-api#mockfnmockrejectedvalueoncevalue)