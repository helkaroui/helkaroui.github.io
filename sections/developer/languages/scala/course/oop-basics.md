---
title: OOP Basics
---

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


## Equality in Scala

```scala
new String("Scala") == new String("Scala")
```

- Use "==" for equality
- No defference between "primitive" or "reference" like in Java
- There is no type check, because the compilation will not event happen if the types are not the same
