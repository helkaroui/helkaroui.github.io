---
title: Configure k8s cluster
---


## Configure a private docker registry:
The Kubernetes cluster uses the Secret type of docker-registry to authenticate with a container registry to retrieve a private image there. 
If you have already launched docker login, you can copy these credentials to Kubernetes 

```sh
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=/home/<your-user>/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson
```