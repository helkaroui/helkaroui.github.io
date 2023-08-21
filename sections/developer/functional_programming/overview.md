---
title: Introduction
---

Functional Programming (FP for short) is a programming style that focuses on the functions in the program, for me a
function may has a large spectrum of definitions. Pure FP programmers, stick by the mathematical definition that is
functions are relations that maps arguments to results. Others admit that functions may have side effects.

_But what's a side effect ?_ A side effect refers simply to the modification of some kind of state - for instance:
- Changing the value of a variable;
- Writing some data to disk;
- Enabling or disabling a button in the User Interface.

## Concepts
FP comes with 5 important concepts that we will explain privily :
### Pure Functions
A function is pure if it has two important properties :
- Deterministic: it produces the same output with the same arguments
- Immutable : it has no observable effect on the execution of the program other thant compute it's result. In other
worlds, it doesn't modify any arguments, variables outside it's scope or have hidden I/O.

### Variables are Immutable
Variables are immutable i.e. it isn’t possible to modify a variable once it has been initialized. Though we can create
a new variable, modifying existing variables is not allowed.

### Referential Transparency
Variables once defined in a functional programming language aren’t allowed to change the value that they are holding
throughout the execution of the program. This is known as referential transparency. It assures that the same language
expression gives the same output.

### Recursion
In FP there is no for and while loops. Instead, it relies heavily on recursion, since each iteration of a loop will
apply the same function until a specific condition is satisfied.

### Functions are First-Class and can be Higher-Order
Functions in the functional programming style are treated as variables. Hence, they are first-class functions.
These first-class functions are allowed to be passed to other functions as parameters or returned from functions or
stored in data structures.
A higher-order function is a function that takes other functions as arguments and/or returns functions. First-Class
functions can be higher-order functions in functional programming languages.

## Advantages
Let's return to the subject, _why would I learn functional programming ?_ - FP helps to solve problems effectively and
improves modularity.

## Disadvantages


## Applications


## Summary
In this article, we introduced FP and explained what FP is and why you may want to use it. The benefits of this
programming style will become clearer over the course of this series of articles. In the next couple of articles we will
deep dive into the fundamentals of FP and we will apply it's concepts and principles throught a series of coding
exercises. We'll be using Scala programming language to showcase the implementations, but keep in mind that you can use
the programming language of you choice.


TBC