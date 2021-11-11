---
title: Quick start
---

In this section you will find interesting notes covering some of the most interesting topics in software engineering. 
These notes helped me improve my understanding of many concepts and principles all throughout my learning journey. 
With these notes, you'll find code examples and simple projects used in these notes.

The following topics are covered :
- Functional Programing
- Actor model
- Reactive Programing

Feel free to give your feedback.

## Install SBT
Sbt stands for Simple Build Tool. It is a simple, flexible and scala native build tool. 
To download sbt on linux, run the following commands :
```
echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | sudo tee /etc/apt/sources.list.d/sbt.list
echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | sudo tee /etc/apt/sources.list.d/sbt_old.list
curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add
sudo apt-get update
sudo apt-get install sbt
```

## Create a "Hello world" project

1. Init an empty scala project
```
sbt new scala/scala-seed.g8
```

2. Run `sbt` in the terminal to open the interactive console

3. To run the main class, run `run`