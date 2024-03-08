---
title: Cheat Sheet
---

Certainly, here's a list of common Kubernetes commands for your cheat sheet:

**Kubernetes Cheat Sheet: Common Commands**

**1. Cluster and Nodes:**
- **Check Cluster Info:**
  ```bash
  kubectl cluster-info
  ```

- **List Nodes:**
  ```bash
  kubectl get nodes
  ```

**2. Pods:**
- **List Pods:**
  ```bash
  kubectl get pods
  ```

- **Describe Pod:**
  ```bash
  kubectl describe pod pod_name
  ```

- **Pod Logs:**
  ```bash
  kubectl logs pod_name
  ```

**3. Deployments:**
- **List Deployments:**
  ```bash
  kubectl get deployments
  ```

- **Describe Deployment:**
  ```bash
  kubectl describe deployment deployment_name
  ```

- **Scale Deployment:**
  ```bash
  kubectl scale deployment deployment_name --replicas=3
  ```

**4. Services:**
- **List Services:**
  ```bash
  kubectl get services
  ```

- **Describe Service:**
  ```bash
  kubectl describe service service_name
  ```

**5. Configuration:**
- **List ConfigMaps:**
  ```bash
  kubectl get configmaps
  ```

- **Describe ConfigMap:**
  ```bash
  kubectl describe configmap configmap_name
  ```

- **List Secrets:**
  ```bash
  kubectl get secrets
  ```

- **Describe Secret:**
  ```bash
  kubectl describe secret secret_name
  ```

**6. Namespaces:**
- **List Namespaces:**
  ```bash
  kubectl get namespaces
  ```

- **Switch Namespace:**
  ```bash
  kubectl config set-context --current --namespace=new_namespace
  ```

**7. Scaling:**
- **Horizontal Pod Autoscaler:**
  ```bash
  kubectl autoscale deployment deployment_name --min=2 --max=5 --cpu-percent=80
  ```

**8. Updating Resources:**
- **Apply Changes to Resource:**
  ```bash
  kubectl apply -f resource.yaml
  ```

- **Rolling Update Deployment:**
  ```bash
  kubectl set image deployment/deployment_name container_name=image:version
  ```

**9. Port Forwarding:**
- **Forward Local Port to Pod:**
  ```bash
  kubectl port-forward pod_name local_port:pod_port
  ```

**10. Deleting Resources:**
- **Delete Resource:**
  ```bash
  kubectl delete resource_type resource_name
  ```

**11. Getting Help:**
- **Get Help for a Command:**
  ```bash
  kubectl --help
  kubectl <command> --help
  ```

These are essential Kubernetes commands that will help you manage your Kubernetes clusters, workloads, and resources effectively. Keep in mind that Kubernetes offers a vast set of features, so continue exploring to become proficient in orchestrating and managing containerized applications.