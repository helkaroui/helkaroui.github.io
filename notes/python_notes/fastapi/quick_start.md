---
title: Quick Start
---

## Installation

To install fastapi, run the following command :
```
pip install fastapi
```

You will also need an ASGI server, for production such as Uvicorn or Hypercorn.
```
pip install "uvicorn[standard]"
```

## "Hello World" Example
### Create a simple API
Create a file `main.py` with:
```python
from typing import Optional
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
```

### Run it
Run the server with:
```shell
uvicorn main:app --reload
```

The command uvicorn main:app refers to:
* `main`: the file `main.py` (the Python "module").
* `app`: the object created inside of `main.py` with the line app = FastAPI().
* `--reload`: make the server restart after code changes. Only do this for development.

### Check it
Go to [http://localhost:8000/items/5?q=Hamza](http://localhost:8000/items/5?q=Hamza)
You will see the JSON response as:
```
{"item_id": 5, "q": "Hamza"}
```

### Swagger UI
Now go to [http://localhost:8000/docs](http://localhost:8000/docs)
You will see the automatic interactive API documentation (provided by Swagger UI)

### ReDoc
Now go to [http://localhost:8000/redoc](http://localhost:8000/redoc)
You will see the alternative automatic documentation (provided by ReDoc)