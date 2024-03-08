---
title: Strongly Typed Joins
---

When I discovered Spark,I was a fresh graduate looking for a data scientist position, with a limited knowledge of Python programming language and a love for machine learning libraries. So basically, my first interaction with Spark was throught PySpark : RDDs and DataFrames. 

And it was until I land my first consultant job, that I discovered Scala, and I felt in love. Anyway, since then, I have been working with Dataset API, and that lead to fewer RUNTIME errors, since most of the coding errors were illiminated thanks to the compiler.

Except for one thing, Joins ! 
to code join conditions in scala, one should pass the field name as a string :

```scala
salesDs
    .joinWith(customerDs, salesDs("clientId") === customerDs("id"), "left")
```

In this article, I'll describe how I solved the typing issue in join conditions, and came up with a strongly typed join condition in Spark.

Here is how the typed join condition looks like :
```scala
salesDs
    .joinWith(customerDs, salesDs.fields.clientId === customerDs.fields.id, "left")
```

## Background
TBD


## Introducing Scala-meta & macros
### Scala macros
TBD
### Scala-meta
Scalameta has syntax trees that represent Scala programs. 
Syntax trees are a representation of source code that makes it easier to programmatically analyze programs
Scalameta trees are lossless, meaning that they represent Scala programs in sufficient detail to go from text to trees and vice-versa.


## Get Fields from case class
TBD

## Wrap things up
TBD

## Conclusion

Resources :
- https://github.com/lorandszakacs/field-names



Example for Idea plugin :
https://github.com/shadaj/slinky/blob/main/coreIntellijSupport/build.sbt

Answer on gitter :
https://gitter.im/JetBrains/intellij-scala?at=5dca8885add5717a88f332f8

How to create Macro support for Idea
https://blog.jetbrains.com/scala/2015/10/14/intellij-api-to-build-scala-macros-support/

Why not create a compiler plugin like scalapb
https://github.com/scalapb/ScalaPB/tree/master/compiler-plugin/src/main/scala/scalapb

