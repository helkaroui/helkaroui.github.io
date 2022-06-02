---
title: Cheat Sheet
---

## Build & Run
build & run docker image in one command : 

bash:
```shell
TAG=my-image docker build -t $TAG . && docker run -d -p 8080:8080 run $TAG
```

fish (function):
```fish
function dbr -d 'docker build and run' --argument tag
    docker build -t $tag . && docker run $argv run $tag
end
```
And run this command in cmd :
```
dbr app-scheduler -d -p 8080:8080
```