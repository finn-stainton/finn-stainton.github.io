---
hide:
    - navigation

---

# Cypress

End-to-End testing tool

[:octicons-arrow-left-24: Return to Software Engineering](/Knowledge-Notebook/Software-Engineering/)

---

## Resources/ Bib

!!! cite ""

## Getting Started

``` console
npm install -D cypress
```

``` console
npx cypress open
```

## Structure

- **fixtures**: Mock Data
- **integration**: Test Files
- **plugins**: Extend Cypress
- **support**: Global Config

## Test Files

- Uses `.spec` extension

- `describe('name', () => {})`
- `beforeEach`: runs setup code before each test
- `it`: test case

## Cy

- `.visit('url')`
- .get

## Further Reading

- [Chai](Chai.md)