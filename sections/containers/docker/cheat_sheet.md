---
title: Cheat Sheet
---

**Docker Cheat Sheet: Common Commands**

**1. Basics:**
- **Pull an Image:**
  ```bash
  docker pull image_name[:tag]
  ```

- **Run a Container:**
  ```bash
  docker run [options] image_name[:tag]
  ```

- **List Running Containers:**
  ```bash
  docker ps
  ```

- **List All Containers (including stopped):**
  ```bash
  docker ps -a
  ```

**2. Container Management:**
- **Start a Stopped Container:**
  ```bash
  docker start container_id/container_name
  ```

- **Stop a Running Container:**
  ```bash
  docker stop container_id/container_name
  ```

- **Restart a Container:**
  ```bash
  docker restart container_id/container_name
  ```

- **Remove a Container:**
  ```bash
  docker rm container_id/container_name
  ```

- **Remove All Stopped Containers:**
  ```bash
  docker container prune
  ```

**3. Image Management:**
- **List Downloaded Images:**
  ```bash
  docker images
  ```

- **Remove an Image:**
  ```bash
  docker rmi image_name[:tag]
  ```

- **Remove Dangling (Unused) Images:**
  ```bash
  docker image prune
  ```

**4. Logs and Monitoring:**
- **View Container Logs:**
  ```bash
  docker logs container_id/container_name
  ```

- **Monitor Real-time Logs:**
  ```bash
  docker logs -f container_id/container_name
  ```

- **Display Container Stats:**
  ```bash
  docker stats container_id/container_name
  ```

**5. Executing Commands in a Container:**
- **Run a Command in a Running Container:**
  ```bash
  docker exec -it container_id/container_name command
  ```

- **Start a Shell Session in a Container:**
  ```bash
  docker exec -it container_id/container_name /bin/bash
  ```

**6. Building Images:**
- **Build an Image from a Dockerfile:**
  ```bash
  docker build -t image_name[:tag] path_to_dockerfile
  ```

**7. Networking:**
- **Create a Custom Network:**
  ```bash
  docker network create network_name
  ```

- **Run a Container in a Specific Network:**
  ```bash
  docker run --network network_name image_name
  ```

- **List Networks:**
  ```bash
  docker network ls
  ```

**8. Docker Compose:**
- **Start Services Defined in a Compose File:**
  ```bash
  docker-compose up
  ```

- **Stop Services Defined in a Compose File:**
  ```bash
  docker-compose down
  ```

- **Build and Start Services:**
  ```bash
  docker-compose up --build
  ```

**9. Docker Volume:**
- **Create a Volume:**
  ```bash
  docker volume create volume_name
  ```

- **List Volumes:**
  ```bash
  docker volume ls
  ```

- **Mount a Volume to a Container:**
  ```bash
  docker run -v volume_name:/path/in/container image_name
  ```

These are some of the fundamental Docker commands that will help you get started with containerization and managing Docker environments efficiently. Remember that Docker provides many more options and features, so further exploration will allow you to utilize Docker's full potential.