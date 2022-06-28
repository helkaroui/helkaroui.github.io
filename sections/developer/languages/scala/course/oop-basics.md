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


## Companion Object
```scala
object Welcome {
    private val message: String = "Welcome"
}

class Welcome {
    def Greet(msg: String = Welcome.message): String = msg
}
```
- When a class and an object having the same name, located in the same file and package, they are called Companion
- Class can access Companion private members
- Companion are useful for these use cases :
  - Having a class utility
  - Having a class static methods
  - Constructing a class factory 

## Predef
- `scala.Predef` is a singleton object
- It's part of the standard library, it has many useful functions, and needs to be explicitly imported into Scala classes
- all it's members are imported automatically to any scala script (import scala.Predef._)
- require method is a member of Predef

## Case classes
```scala
case class Person(name: String)

val p1 = Person("John")
val p2 = Person.apply("Christopher")
```

- `case` adds several additional features to a class :
  - create new instance without `new` keyword
  - each case class has a companion object that has an apply method
  - compiler creates nice toString, equals and hashCode implementations
  - class parameters are promoted to immutable fields automatically
  - copy method is automatically implemented
  - used in pattern matching

**Why are not all classes case-classes ?**
- Overhead in bytecode size
- Can not inherit a case class from another
  
*Best Practices*:
- Value objects are perfect for case classes => data holders
- Service objects should not be case classes


