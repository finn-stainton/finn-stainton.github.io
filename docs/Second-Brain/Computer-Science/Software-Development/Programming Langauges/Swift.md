# Swift

## Resources

[Swift Book](https://docs.swift.org/swift-book/)

## Basics

### Constants and Variables

Without type annotations
``` swift
let constant = 3.1415
var variable = "Gidday"
```

With type annotations
``` swift
let constant: Double = 3.1415
var variable: String = "Gidday"
```
Types allowed:

- `String`
- `Double`
- `Int`
- `UInt`

Nearly all characters can be used as names except reserved word (without a backtick)
Constant's values can not be changed after being set.


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

Are not needed at end of line but are available.

### Integers

Are whole numbers being ether *signed* or *unsigned* in 8, 16, 32 and 64 bit forms.

- `UInt8` (0-255)
- `UInt16` ()
- `UInt32` ()
- `UInt64` ()
- `Int8` ()
- `Int16` ()
- `Int32` ()
- `Int64` ()

**However** in most cases `Int` is sufficient which uses the current platforms native word size. There is also an unsigned version `UInt`.

### Floating Point

