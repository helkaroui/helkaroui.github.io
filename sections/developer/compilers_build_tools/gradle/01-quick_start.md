---
title: Quick Start Guide to Gradle
---

Gradle is a powerful build automation tool used for building, testing, and deploying projects. It supports various programming languages and offers a flexible and efficient way to manage project dependencies, tasks, and configurations. In this quick start guide, we'll walk you through the basics of getting started with Gradle.

## Installation

Before you can use Gradle, you need to install it on your system. Here's how to do it:

1. **Download Gradle:** Visit the official Gradle website (https://gradle.org/) and download the latest version of Gradle.

2. **Extract the Archive:** Once the download is complete, extract the downloaded archive to a location on your system.

3. **Environment Variables (Optional):** For easy command-line access, you can add the Gradle `bin` directory to your system's `PATH` environment variable.

4. **Verify Installation:** Open a terminal or command prompt and run the following command to verify the installation:
   
   ```bash
   gradle --version
   ```

   You should see information about the installed Gradle version.

## Creating a New Gradle Project

Let's create a simple Java project using Gradle:

1. **Navigate to Project Directory:** Open a terminal/command prompt and navigate to the directory where you want to create your project.

2. **Initialize a New Project:** Run the following command to initialize a new Gradle project:

   ```bash
   gradle init --type java-application
   ```

   This will create a basic Java project structure.

## Building and Running the Project

Now that your project is set up, you can build and run it using Gradle:

1. **Navigate to Project Directory:** Open a terminal/command prompt and navigate to the root directory of your Gradle project.

2. **Build the Project:** Run the following command to build your project:

   ```bash
   gradle build
   ```

   This command compiles your code, runs tests, and generates any necessary artifacts.

3. **Run the Project:** If your project has an application class with a `main` method, you can run it using the following command:

   ```bash
   gradle run
   ```

   This will execute the main class of your application.

## Managing Dependencies

Gradle makes it easy to manage project dependencies using a configuration file named `build.gradle` in your project directory:

1. **Edit `build.gradle`:** Open the `build.gradle` file in a text editor.

2. **Add Dependencies:** To add dependencies, use the `dependencies` block. For example:

   ```groovy
   dependencies {
       implementation 'org.apache.commons:commons-lang3:3.12.0'
   }
   ```

3. **Sync Gradle:** After editing `build.gradle`, you need to sync Gradle to apply the changes. Run:

   ```bash
   gradle sync
   ```

## Running Tests

Gradle supports running tests using various testing frameworks like JUnit or TestNG:

1. **Write Tests:** Create test classes in the appropriate test source directory.

2. **Run Tests:** To run tests, use the following command:

   ```bash
   gradle test
   ```

## Packaging and Distribution

To package your project into a JAR or other distribution formats:

1. **Package Project:** Run the following command to package your project:

   ```bash
   gradle assemble
   ```

2. **Distribute:** The packaged artifacts will be located in the `build/libs` directory.

## Conclusion

You've successfully set up a Gradle project, managed dependencies, built and run your project, and even tested and packaged it. This quick start guide covers the essentials to get you started with Gradle, but remember that Gradle offers a wide range of advanced features and customizations. Explore the official [Gradle documentation](https://docs.gradle.org/current/userguide/userguide.html) to dive deeper into its capabilities. Happy building!