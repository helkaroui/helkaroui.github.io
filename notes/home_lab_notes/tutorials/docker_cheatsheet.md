---
title: Docker cheatsheet
---


### Change entrypoint
To start an interactive shell for a docker image, we can change entrypoint on the fly when running the container:
**in docker Alpine container**
```shell
docker run -it --entrypoint /bin/ash  alpine:3.13
```

**in debian based container**
```shell
docker run -it --entrypoint /bin/bash  alpine:3.13
```