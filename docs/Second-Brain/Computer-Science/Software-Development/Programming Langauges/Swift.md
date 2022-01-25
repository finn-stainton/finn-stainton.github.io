# Swift

## Resources

[Swift Book](https://docs.swift.org/swift-book/)

## Basics

### Constants and Variables

Without type annotations (uses Type Inference but still explicitly typed)
``` swift
let constant = 3 // inferred as a Int
var variable = "Gidday" // inferred as a String
let pi = 3 + 0.14159 // inferred as a Double

```

With type annotations
``` swift
let constant: Int = 3
var variable: String = "Gidday"
let pi: Double = 3 + 0.14159
```
Nearly all characters can be used as names except reserved word (without a backtick)

Constant's values can not be changed after being set.

### Types

- `String`
- `Double` represents a 64-bit floating point number which has at least 15 decimal digits
- `Float` represents a 32-bit floating point number which can have as little as 6 decimal digits (Double is preferred in situations where both are suitable.)
- `Int` represents a signed whole number which uses the current platforms native word size. e.g. `Int` on a 32-bit platform is the same size as `Int32`, 64-bit platform -> `Int64`.
    -  8, 16, 32 and 64 bit forms are also available but not preferred.
    - `Int8` ()
    - `Int16` ()
    - `Int32` ()
    - `Int64` ()
- `UInt` represents an unsigned whole number which uses the current platforms native word size.
    -  8, 16, 32 and 64 bit forms are also available but not preferred.
    - `UInt8` (0-255)
    - `UInt16` ()
    - `UInt32` ()
    - `UInt64` ()

Swift is *type-safe* language and performs *type checks*  during compiling and flags any errors from mismatched types. 

#### Literals

- `decimal`with no prefix
- `binary` with `0b` prefix
- `octal` with `0o` prefix
- `hexadecimal` with a `0x` prefix

### Printing

``` swift
print(variable)
// Prints "Gidday"

print("\(variable) to you too!")
// Prints "Gidday to you too!"
```

### Comments

``` swift
// Single line

/* Start of a Multiline
    /* Possible nested comment */
End of a multiline */
```

### Semicolons

Are not needed at end of line but are available. (Are needed where multiple statements are on a single line.)


