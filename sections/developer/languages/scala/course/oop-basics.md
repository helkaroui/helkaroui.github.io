---
title: OOP Basics
---


## Equality in Scala

```scala
new String("Scala") == new String("Scala") // true
```

- Use "==" for equality
- No defference between "primitive" or "reference" like in Java
- There is no type check, because the compilation will not event happen if the types are not the same


```scala
new String("Scala") eq new String("Scala") // false
```
- Use "eq" and "ne" for checking identity (compare references)
- Comparison in Scala is null safe

```scala
null == null // true
```

## Default arguments

```scala
def name(first: String = "", last: String = ""): String

val person = name("John")
```
- Lets you omit trailing arguments
- Can omit leading arguments by using named arguments

```scala
val person = name(last = "Doe")
```

## Packages and Imports
```scala
import dev.sharek.tutorials.scalacars.Car
import dev.sharek.tutorials.scalacars._
```
- Use *Import* if you don't want to use the fully qualified name
- Use the underscore *_* to import all members of a package

```scala
import dev.sharek.tutorials.scalacars.{YellowCar, RedCar}
import dev.sharek.tutorials.scalacars.{Car => OldCar}
```
- Import multiple members with {...}
- Rename imported objects to avoid conflicts



## Infix, Postfix and Prefix Operators
### Infix
- Operators are methods used in operator notation
- Operator nation means ommitting dots and parentheses 
- Methods with one parameter can be used in **Infix** notation

```scala
"Hamza is a data engineer".split(" ")

"Hamza is a data engineer" split " "
```

### Postfix
- Methods without parameters can be used in **Postfix** notation
- In general, Postfix notation is depreceated 

```scala
"Hamza is a data engineer".split(" ").size

"Hamza is a data engineer" split " " size
```

### Prefix
- Methods starting with **unary_** keyword followed by +, -, ! or ~ can be used in prefix notation

```scala
! true

true.unary_!
```

### Convention for Operator Notation
- Use Infix for methods with Symbolic names
- Use Prefix for unary_ methods
- Otherwise use dot notation


## Access Modifiers
```scala
class Hello {
    private val message = "Hello"
}

class Welcome {
    protected val message = "Welcome"
}
```

- By default, all members are *public*
- Use private to restrict access
- Using protected makes the member only visible within the enclosing entity or subclasses