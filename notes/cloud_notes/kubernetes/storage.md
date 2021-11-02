---
title: Storage
---

## Volumes
In k8s pods are ephemeral which means on-disk files will be lost when container crashes. The kubelet restarts the container with a clean state.
The second important point is file sharing between pods.


K8s solves both of these problems with it's volume abstraction.

### Background
k8s supports many types of volumes and a pod can use any number of volume types simultaneously. Volume types can be :
- Ephemeral volume types: have a lifetime of the pod and k8s destroys it when the pod ceases to exist.
- Persistant volume types: it's preserved across container restarts.

### Volume Types
Here are some examples of volume types, please refer to k8s [documentation](https://kubernetes.io/docs/concepts/storage/volumes/#volume-types) for the full list.


#### Ephemeral: emptyDir
An `emptyDir` volume is first created when a Pod is assigned to a node, and exists as long as that Pod is running on that node. When created the volume is initially empty.

*Use cases :*
- scratch space
- checkpointing a long computation for recovery from crashes
- holding files that a content-manager container fetches while a webserver container serves the data

`emptyDir` volumes are stored on whatever medium you chose, such as disk or SSD or network storage or memory.

:::note

When the `Memory` medium is chosen, k8s mounts a tmpfs (RAM based filesystem) for you instead. Unlike disk, tmpfs is very fast, but it's size will be count against your container's memory limit.

:::

*How to create an `emptyDir` volume ?*

```yaml {14}
apiVersion: v1
kind: Pod
metadata:
  name: test-pd
spec:
  containers:
  - image: k8s.gcr.io/test-webserver
    name: test-container
    volumeMounts:
    - mountPath: /cache
      name: emptydir-volume
  volumes:
  - name: emptydir-volume
    emptyDir:
      medium: "Memory"
```


#### Persistant: local
A `local` volume represents a mounted local storage device such as a disk, partition or directory.
Local volumes can only be used as a statically created PersistentVolume. Dynamic provisioning is not supported.


`local` volumes are used in a durable and portable manner without manually scheduling pods to nodes. The system is aware of the volume's node constraints by looking at the node affinity on the PersistentVolume.

The following example shows a `PersistentVolume` using a `local` volume and `nodeAffinity`:
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

3- Apply your PersistentVolume :
You must set a PersistentVolume nodeAffinity when using local volumes. The Kubernetes scheduler uses the PersistentVolume nodeAffinity to schedule these Pods to the correct node.

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: example-pv
spec:
  capacity:
    storage: 100Gi
  volumeMode: Filesystem
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /mnt/disks/ssd1
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: disktype
          operator: In
          values:
          - ssd
```
