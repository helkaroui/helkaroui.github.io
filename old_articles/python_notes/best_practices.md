---
title: Best Practices
keywords: ['python', 'practice', 'langauge']
description: "Important python best practices every Python Developer should follow before,during & after writing the code. Also, remember what not to do."
tags: ['python']
toc_max_heading_level: 4
---

Learn what are the Python Coding Practices that you should follow to write a cleaner and more professional code.
- project structure
- using virtual envs
- writing unit & integration tests
- publishing to pypi
- using a CICD
- using OOP
- use data structures
- follow PEP8 style guidelines
- use click to create a cli tool

## Structure of the Python Project

If you have ever been on Github you must have noticed that most Python projects have a similar structure as follow :

```
├── docs
│   └── index.rst
├── module
│   ├── core.py
│   └── __init__.py
├── tests
│   └── core.py
├── venv
│   ├── bin/
│   └── lib/
├── LICENSE
├── README.md
├── requirements.txt
└── setup.py
```

### Module
This holds your actual code that may be inside a subdirectory or inside root.

### Tests
Most projects have tests- keep these in the tests directory.

### Docs
So, next in python best practices is readable documentation. You may find it burdensome, but it creates clean code.
For this, you can use Markdown, reStructuredText, Sphinx, or docstrings.
* *Markdown* and reStructuredText are markup languages with plain text formatting syntax to make it easier to mark up text and convert it to a format like HTML or PDF.
* *reStructuredText* lets you create in-line documentation.
* *Sphinx* is a tool to easily create intelligent and beautiful documentation. It lets you generate Python documentation from existing reStructuredText and export documentation in formats like HTML.
* *Docstrings* are documentation strings at the beginning of each module, class, or method.

### requirements.txt
This is not mandatory, but if you use this, you put it in the root directory.

### Setup.py
This script in the root lets distutils build and distribute modules needed by the project.

## Virtual Environment
A virtual environment is a tool that helps with managing dependencies in a Python project. A seperate environment is created for each project.
So the dependencies of every project are isolated from the system and each other.

To create & use a virtual environment :

1- install virtualenv
```shell
pip install virtualenv
```

2- create the virtual environment
```
virtualenv venv     // created virtual Environment named 'venv'
```

If you want to specify Python interpreter of your choice, for example, Python 3, it can be done using the following command :
```shell
virtualenv -p /usr/bin/python3 venv
```

3- After creating the virtual environment, you need to activate it.
```shell
source venv/bin/activate

C:/> name\Scripts\Activate.ps1 # for Windows cmd.exe
```

4- We can see the packages installed in this virtual environment using :
```
pip list


Package    Version
---------- -------
pip        21.2.4
setuptools 58.1.0
wheel      0.37.0
```


## Coding style guidelines


## Use data classes
Since version 3.7, Python offers data classes. There are several advantages over regular classes or other alternatives like returning multiple values or dictionaries:
- a data class requires a minimal amount of code
- you can compare data classes because __eq__ is implemented for you
- you can easily print a data class for debugging because __repr__ is implemented as well
- data classes require type hints, reduced the chances of bugs

Here’s an example of a data class at work:
```python
from dataclasses import dataclass

@dataclass
class Car:
    """Class representing car object"""
    color: str
    owner: str
    
car = Car("red", "Jeff")
```