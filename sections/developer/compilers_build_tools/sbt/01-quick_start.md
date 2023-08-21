---
title: Quick Start Guide to SBT (Scala Build Tool)
---

SBT (Scala Build Tool) is a popular build tool for Scala projects. It automates various tasks related to building, testing, and packaging Scala projects, making the development process smoother and more efficient. This quick start guide will help you get up and running with SBT in no time.

## Installation

Before you start using SBT, you need to install it on your system. SBT requires Java to be installed, so make sure you have Java (JDK) installed as well.

1. **Install Java:** If you don't have Java installed, download and install the latest Java Development Kit (JDK) for your platform from the official Oracle/OpenJDK website.

2. **Install SBT:** You can install SBT using various methods, but one of the most common ways is by using a package manager like `brew` (for macOS) or `scoop` (for Windows), or by downloading the SBT launcher directly from the [official SBT website](https://www.scala-sbt.org/download.html).

## Creating a New SBT Project

Once SBT is installed, you can create a new Scala project easily:

1. **Open Terminal/Command Prompt:** Navigate to the directory where you want to create your project.

2. **Create a New Project:** Run the following command to create a new SBT project:
   
   ```bash
   sbt new scala/scala-seed.g8
   ```

   This command will use the "scala-seed.g8" template to create a basic Scala project structure.

3. **Enter Project Details:** SBT will prompt you to enter various details like the project name, organization, and package name. Follow the prompts to set up your project.

## Building and Running the Project

Now that your project is set up, you can build and run it using SBT:

1. **Navigate to Project Directory:** Open a terminal/command prompt and navigate to the root directory of your SBT project.

2. **Compile the Project:** Run the following command to compile your project:
   
   ```bash
   sbt compile
   ```

3. **Run the Project:** If your project has a main class defined, you can run it using the following command:
   
   ```bash
   sbt run
   ```

## Managing Dependencies

SBT makes it easy to manage project dependencies using a configuration file named `build.sbt` in your project directory:

1. **Edit `build.sbt`:** Open the `build.sbt` file in a text editor.

2. **Add Dependencies:** To add dependencies, use the `libraryDependencies` setting. For example:
   
   ```scala
   libraryDependencies += "org.apache.spark" %% "spark-core" % "3.2.0"
   ```

3. **Reload Changes:** After editing `build.sbt`, go back to your terminal and run:
   
   ```bash
   sbt reload
   ```

   This will load the changes you made to the `build.sbt` file.

## Running Tests

SBT also supports running tests using various testing frameworks like ScalaTest or specs2:

1. **Write Tests:** Create test files in the `src/test/scala` directory of your project.

2. **Run Tests:** To run tests, use the following command:
   
   ```bash
   sbt test
   ```

## Packaging and Distribution

To package your project into a JAR or other distribution formats:

1. **Package Project:** Run the following command to package your project:
   
   ```bash
   sbt package
   ```

2. **Distribute:** The packaged artifacts will be located in the `target` directory of your project.

## Conclusion

Congratulations! You've successfully set up an SBT project, managed dependencies, built and run your project, and even tested and packaged it. This quick start guide provides just a glimpse into the capabilities of SBT, but it should be enough to get you started on your Scala development journey. Remember to explore the official [SBT documentation](https://www.scala-sbt.org/documentation.html) for more advanced features and configurations. Happy coding!