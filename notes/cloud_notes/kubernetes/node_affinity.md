---
title: Node Affinity
---

## Description
Node affinity is a set of rules used by the scheduler to determine where a pod can be placed. The rules are defined using custom labels on nodes and label selectors specified in pods.

Node affinity allows a pod to specify an affinity (or anti-affinity) towards a group of nodes it can be placed on. 

:::info Use cases
- Nodes with different architectures : arm / amd.
- Nodes with different purposes: worker nodes/ data nodes.

:::

There are two types of node affinity rules: required and preferred.

:::note

Required rules must be met before a pod can be scheduled on a node. Preferred rules specify that, if the rule is met, the scheduler tries to enforce the rules, but does not guarantee enforcement.

:::

## Label based affinity
Here is an example how to enforce affinity :

1- Add a label to a node :
```
kubectl get nodes --show-labels
```

The output is similar to this:

```text
NAME      STATUS    ROLES    AGE     VERSION        LABELS
worker0   Ready     <none>   1d      v1.13.0        ...,kubernetes.io/hostname=worker0
worker1   Ready     <none>   1d      v1.13.0        ...,kubernetes.io/hostname=worker1
data-node   Ready     <none>   1d      v1.13.0        ...,kubernetes.io/hostname=data-node
```
2- Chose one of your nodes, and add a label to it:
```
kubectl label nodes <your-node-name> disktype=ssd
```

### Schedule a Pod using required node affinity
Apply the manifest to create a Pod that is scheduled onto your chosen node:

```yaml {8,11}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: disktype
            operator: In
            values:
            - ssd            
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
```

### Schedule a Pod using preferred node affinity
This manifest describes a Pod that has a preferredDuringSchedulingIgnoredDuringExecution node affinity

```yaml {8}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  affinity:
    nodeAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 1
        preference:
          matchExpressions:
          - key: disktype
            operator: In
            values:
            - ssd          
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
```

