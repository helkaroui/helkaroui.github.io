---
title: Hacks & Tricks
---

## Create a filebrowser
```shell
python3 -m http.server
```

## Inline conditions
```python
is_empty = True if len(List(1,2,3)) == 0 else False
```

## Reversing a string in Python
```python
a = "GeeksForGeeks"
print("Reverse is", a[::-1])
```

## Check The Memory Usage Of An Object
```python
import sys
x = 1
print(sys.getsizeof(x))
```

## Print string N times
```python
n = 4
a = "Ha"
print(a * n)
```

## List Comprehensions
A list comprehension can replace ugly for loops used to fill a list. The basic syntax for a list comprehension is:

```python
[ expression for item in list if conditional ]

mylist = [i for i in range(10)]
print(mylist)
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Decorate your functions
```python
def print_argument(func):
    def wrapper(the_number):
        print("Argument for", 
              func.__name__, 
              "is", the_number)        return func(the_number)
    return wrapper@print_argument
def add_one(x):
    return x + 1

print(add_one(1))
```

## Slicing a list
```python
a[start:stop:step]
```