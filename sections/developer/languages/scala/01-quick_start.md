---
title: Quick Start Guide to Scala Programming
---

Scala is a versatile programming language that combines object-oriented and functional programming paradigms. Known for its concise syntax and powerful features, Scala is an excellent choice for a wide range of software development tasks. In this quick start guide, we'll walk you through the essentials of getting started with Scala programming.

## Installation

Before you begin, you'll need to install Scala on your system. Follow these steps:

1. **Download Scala:** Visit the official Scala website (https://www.scala-lang.org/download/) and follow the installation guide for your operating system.
To install Scala, it is recommended to use cs setup, the Scala installer powered by Coursier. It installs everything necessary to use the latest Scala release from a command line:

```bash
# For linux users
curl -fL https://github.com/coursier/coursier/releases/latest/download/cs-x86_64-pc-linux.gz | gzip -d > cs && chmod +x cs && ./cs setup
```
The .profile file is updated but it will not be applied until next reboot of the os. To have the scala available either reboot your os or run the following command :

```bash
source ~/.profile
```

2. **Verify Installation:** Open a terminal and type `scala -version` to verify that Scala is installed correctly. You should see the version information displayed.

## Hello, Scala!

Let's dive right into writing a simple "Hello, World!" program in Scala.

1. **Open a Text Editor:** Open your favorite text editor or integrated development environment (IDE) to write your Scala code.

2. **Write the Code:** Enter the following code:

   ```scala
   object HelloWorld {
       def main(args: Array[String]): Unit = {
           println("Hello, Scala!")
       }
   }
   ```

3. **Save the File:** Save the file with a `.scala` extension, such as `HelloWorld.scala`.

## Compiling and Running

Now that you have your Scala code ready, it's time to compile and run it.

1. **Open a Terminal:** Open a terminal and navigate to the directory where you saved the `HelloWorld.scala` file.

2. **Compile:** Compile the Scala code using the `scalac` compiler:

   ```bash
   scalac HelloWorld.scala
   ```

3. **Run:** After compiling, you'll find a `.class` file in the same directory. Run your program using the `scala` command followed by the name of the class without the `.class` extension:

   ```bash
   scala HelloWorld
   ```

## Basic Syntax

Here are a few basic Scala syntax elements to get you started:

- **Variable Declaration:** Declare variables using `val` (immutable) or `var` (mutable).

  ```scala
  val message = "Hello, Scala!"
  var count = 10
  ```

- **Functions:** Define functions using the `def` keyword.

  ```scala
  def greet(name: String): Unit = {
      println(s"Hello, $name!")
  }
  ```

- **String Interpolation:** Embed variables directly in strings using the `s` prefix.

  ```scala
  val name = "Alice"
  val greeting = s"Hello, $name!"
  ```

## Conclusion

Congratulations! You've taken your first steps into the world of Scala programming. This quick start guide introduced you to installing Scala, writing a simple program, and compiling and running it. As you continue your Scala journey, you'll explore its rich features, including pattern matching, functional programming constructs, and advanced libraries. Scala's versatility makes it an excellent choice for various application domains, from web development to data processing and beyond. Happy coding!


**Resources:** [https://github.com/helkaroui/sharek.dev-playbooks](https://github.com/helkaroui/sharek.dev-playbooks/tree/main/developer/languages/scala/1-quick-start)
