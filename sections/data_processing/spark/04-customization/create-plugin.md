---
title: Create a Spark plugin
description: Extend Spark with custom plugin
image: /img/plugins.jpg
keywords: [spark, internal, plugins]
---

## Spark Plugin Framework
It was introduced in Spark 3.0. 
This plugin allows users to plug custom code to the driver or/and worker instances at start time. This allows customization to be fairly simple and straightforward. It allows to have custom metrics tracking and more control over the Spark application.


## Features :
**Access to the Spark Context** 
Spark plugin gives access to the Spark Context instance and thus a way in to application metrics.
**Ability to Communicate Between Driver and Executor** 
Spark plugin framework exposes a RPC communication option between driver and executor plugins. This communication can be used to send any user defined messages between executors and driver.
**Ability to push dynamic events to driver and executor** 
Spark plugin framework allows user to run arbitrary listeners on driver or executor side. This allows for a communication to spark JVM’s from the external application. As these plugins have access to spark context, this will allow for dynamic control of the execution from outside which is very powerful.


## Internals :
To understand the internals Plugin Framework, see this [article](../03-internals/plugin-framework.mdx)

### Simple Plugin
TBC


### Metrics Connector
TBC


### Custom Metrics UI Tab
TBC

### Control Spark Streaming Application
TBC