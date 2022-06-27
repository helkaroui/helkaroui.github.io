---
title: Pattern matching with Java objects 
---

## Pattern matching with Java objects 
Let's say that we have a pre-defined java class :
```java

public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

And assuming we can't refactor this class into a scala object. Right now we can't apply pattern matching with instances of this class. Because pattern matching is to be applied only on some groups of types in the Scala library:
    constants
    strings
    singletons
    case classes
    tuples
    some collections
    combinations of the above

Here is the solution :
We can define an `unapply` method that is used to decompose the instance into a scala type from the above list.
```scala
object Person {
    def unapply(person: Person): (String, Int) = (person.name, person.age)
}
```
This is an example of an unapply method which takes an instance of Person as an argument, and it will return a tuple of the instance variables.

A method that has this signature will suddenly allow us to write the following:
```scala
val adam = new Person("Adam", 18)
val adamStatus = adam match {
  case Person(n, a) => s"Adam was successfully deconstructed: $n, $a"
}
```