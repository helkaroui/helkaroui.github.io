---
slug: Update a running pod in k8s
title: Update a running pod in k8s
author: Hamza EL KAROUI
author_title: Data Engineer @ DataFab.io
author_url: https://github.com/helkaroui
author_image_url: https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light
tags: [k8s]
---

## Problem
Some tasks might require debugging a failing pod in k8s and so fixing and files inside the pod. This article describes how to perform these operations.

In a previous project, we were running a huge Play application on Kubernetes. The app was failing just after initialization, so we had to change some configuration at the fly (coz the CI/CD was a boggling nightmare and was failing the build)

## Solution

### Get into the failling pod
If your pod is always crashing after restarts, consider changing it's entrypoint to allow you to enter your pod and run it manually. 
To do so, edit your deployment and change your entrypoint so that it never dies.

```shell
k edit deployment.apps my-deployment
```

```yaml {10,11}
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu
spec:
  containers:
  - name: ubuntu
    image: ubuntu:latest
    # Just spin & wait forever
    command: [ "/bin/bash", "-c", "--" ]
    args: [ "while true; do sleep 30; done;" ]
```

Now restart your pod, and it will keep running. Now you need to enter the pod :
```shell
k exec -it my-pod bash
```

Once in, you can investigate or run your application manually with extra parameters for debugging.

### Update a Jar file
Now copy the jar out from the pod :
```
kubectl cp <your-pod-name>:<src-path> <local-dest-path> 
```

Once you have the jar in your workdirectory, you can update it with the right configuration.
To do so, you need to run through these steps :  
1- extract the file you want to update :
```
jar xf my-play-app.jar application.conf
```
2- Edit the .conf file
```
vim application.conf
```
3- Update the jar with the modified .conf file
```
jar uf my-play-app.jar application.conf
```

### Restart the pod
Now you can re-upload the jar to the pod :
```
kubectl cp <local-dest-path> <your-pod-name>:<src-path>
```

Don't forget to reinitiate the deployment to the default entrypoint 
```shell
k edit deployment.apps my-deployment
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu
spec:
  containers:
  - name: ubuntu
    image: ubuntu:latest
```

That's it 😁