---
title: Quick Start Guide to Apache Flink
sidebar_position: 1
---

Apache Flink is an open-source stream processing and batch processing framework that enables developers to process large-scale data in real-time and batch modes. With its powerful stream processing capabilities and fault-tolerant architecture, Flink is an excellent choice for building data-driven applications. In this quick start guide, we'll introduce you to the basics of getting started with Apache Flink.

## Installation

Before you begin working with Apache Flink, you need to install it on your system. Follow these steps:

1. **Download Flink:** Visit the official Apache Flink website (https://flink.apache.org/downloads.html) and download the latest version of Flink.

2. **Extract Flink:** Once downloaded, extract the Flink archive to a directory of your choice.

3. **Set Environment Variables:** Configure environment variables to point to your Flink installation. Add the following line to your shell profile file (e.g., `.bashrc` or `.zshrc`):

   ```bash
   export FLINK_HOME=/path/to/flink
   export PATH=$PATH:$FLINK_HOME/bin
   ```

## Hello, Flink!

Let's start by creating a simple "Hello, Flink!" program using the Flink's DataSet API for batch processing.

1. **Create a Java Project:** Create a new directory for your Flink project and create a Java source file, such as `HelloFlink.java`.

2. **Write the Code:** Enter the following code to create a Flink program that prints "Hello, Flink!" using the DataSet API:

   ```java
   import org.apache.flink.api.java.ExecutionEnvironment;

   public class HelloFlink {
       public static void main(String[] args) throws Exception {
           final ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();

           env.fromElements("Hello, Flink!")
              .print();
       }
   }
   ```

3. **Compile and Run:** Compile and run your program using standard Java tools or your preferred integrated development environment (IDE).

## Running Flink Applications

Apache Flink supports various execution modes, including local execution and cluster deployment. Here's a basic overview:

1. **Local Execution:** For testing and development, you can execute Flink applications locally. Use the following command:

   ```bash
   ./bin/flink run -c package.ClassName path/to/your.jar
   ```

2. **Cluster Deployment:** For production use, deploy Flink applications to a Flink cluster managed by a resource manager like Apache YARN or Apache Mesos.

## Stream Processing with Flink

Flink is equally powerful for stream processing. Here's a quick glimpse of how to create a simple stream processing application:

1. **Create a Stream Execution Environment:** Use the StreamExecutionEnvironment to set up your stream processing environment.

2. **Define Data Sources and Operations:** Define data sources, apply transformations, and define sink operations on your streams.

3. **Execute the Stream:** Use the `execute` method to start the stream processing job.

## Conclusion

Congratulations! You've just taken your first steps into the world of Apache Flink. This quick start guide covered installing Flink, creating a basic batch processing program, and running it. Flink's capabilities span beyond what we covered here, including advanced stream processing, event time processing, and integration with various data sources and sinks. As you delve deeper into Flink, you'll explore more complex scenarios, tackle real-time data challenges, and leverage Flink's powerful APIs and connectors to build data processing pipelines that scale with your needs. Happy streaming with Apache Flink!
