---
title: Get field names of a case class
---

Often case classes represent the data moved further in the pipeline. For example, they can represent JSON data that will be written into your data warehouse storage or an RDBMS.

If for whatever reason like defining a CREATE TABLE... expression with these fields, you need to get all fields from the case class, you can print them quite easily with the help of reflection:

```scala
  

import scala.reflect.runtime.universe._

case class MyData(column1: String, column2: Integer)

object TestFieldsPrinting {

    def classAccessors[T: TypeTag]: List[MethodSymbol] = typeOf[T].members.collect {
        case m: MethodSymbol if m.isCaseAccessor => m
    }.toList

    def main(args: Array[String]): Unit = {
        val fields = classAccessors[MyData].map(field => field.name.toString).sorted.mkString(", ")
        println(s"fields=${fields}")

        assert(fields == "column1, column2")
    }

}
```