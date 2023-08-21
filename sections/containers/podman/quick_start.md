---
title: "Quick Start Guide: Getting Started with Podman"
---

Podman is a containerization tool similar to Docker, designed to manage containers and pods. It allows you to run and manage containers, pods, and images without requiring a daemon process. Here's a quick start guide to help you get started with Podman:

**1. Installation:**

Podman is available on various Linux distributions. You can install it using your package manager. For example, on a Debian-based system (such as Ubuntu), you can use:

```bash
sudo apt-get install -y podman
```

On Red Hat-based systems (such as Fedora or CentOS), you can use:

```bash
sudo dnf install -y podman
```

**2. Basic Container Commands:**

- **Run a Container:**
  To run a container, you can use the `podman run` command followed by the image name. For example, to run an Nginx container:

  ```bash
  podman run -d -p 8080:80 nginx
  ```

- **List Containers:**
  To list all running containers, use:

  ```bash
  podman ps
  ```

- **Stop and Remove a Container:**
  To stop and remove a running container:

  ```bash
  podman stop <container_id>
  podman rm <container_id>
  ```

**3. Working with Images:**

- **List Images:**
  To list locally available container images:

  ```bash
  podman images
  ```

- **Pull an Image:**
  To pull an image from a registry (default is Docker Hub):

  ```bash
  podman pull ubuntu:latest
  ```

- **Remove an Image:**
  To remove a locally cached image:

  ```bash
  podman rmi ubuntu:latest
  ```

**4. Managing Pods:**

- **Create a Pod:**
  Pods are groups of containers that share network and storage namespaces. To create a pod with multiple containers:

  ```bash
  podman pod create --name mypod
  ```

- **Add Containers to a Pod:**
  To add containers to the created pod:

  ```bash
  podman run -dt --pod mypod nginx
  podman run -dt --pod mypod alpine
  ```

- **List Pods:**
  To list all pods and their containers:

  ```bash
  podman pod ps
  ```

**5. Running Commands in Containers:**

- **Run a Command in a Container:**
  To run a command inside a running container:

  ```bash
  podman exec -it <container_id> /bin/bash
  ```

**6. Miscellaneous:**

- **Logs:**
  To view the logs of a container:

  ```bash
  podman logs <container_id>
  ```

- **Inspect:**
  To inspect details about a container, image, or pod:

  ```bash
  podman inspect <container_id_or_image_name_or_pod_name>
  ```

These are just a few basic commands to get you started with Podman. The tool offers many more features for managing containers and pods. You can refer to the official [Podman documentation](https://podman.io/) for more in-depth information and advanced usage scenarios.