---
title: Cheat Sheet
---


### Managing Containers and Pods:

1. **Run a Container:**
   ```
   podman run [options] IMAGE [command]
   ```

2. **List Running Containers:**
   ```
   podman ps
   ```

3. **List All Containers (Running and Exited):**
   ```
   podman ps -a
   ```

4. **Start a Container:**
   ```
   podman start CONTAINER_ID/NAME
   ```

5. **Stop a Container:**
   ```
   podman stop CONTAINER_ID/NAME
   ```

6. **Remove a Container:**
   ```
   podman rm CONTAINER_ID/NAME
   ```

7. **Create a Pod:**
   ```
   podman pod create [options] POD_NAME
   ```

8. **List Pods:**
   ```
   podman pod ps
   ```

9. **Stop a Pod:**
   ```
   podman pod stop POD_NAME
   ```

10. **Remove a Pod:**
    ```
    podman pod rm POD_NAME
    ```

### Working with Images:

11. **List Local Images:**
    ```
    podman images
    ```

12. **Pull an Image:**
    ```
    podman pull IMAGE_NAME[:TAG]
    ```

13. **Remove an Image:**
    ```
    podman rmi IMAGE_NAME[:TAG]
    ```

14. **Build an Image from a Dockerfile:**
    ```
    podman build -t IMAGE_NAME:TAG PATH_TO_DOCKERFILE_DIR
    ```

### Managing Volumes:

15. **Create a Volume:**
    ```
    podman volume create VOLUME_NAME
    ```

16. **List Volumes:**
    ```
    podman volume ls
    ```

17. **Remove a Volume:**
    ```
    podman volume rm VOLUME_NAME
    ```

### Networking:

18. **Create a Network:**
    ```
    podman network create NETWORK_NAME
    ```

19. **List Networks:**
    ```
    podman network ls
    ```

20. **Remove a Network:**
    ```
    podman network rm NETWORK_NAME
    ```

### Executing Commands:

21. **Execute a Command Inside a Running Container:**
    ```
    podman exec [options] CONTAINER_ID/NAME COMMAND
    ```

### Miscellaneous:

22. **View Logs of a Container:**
    ```
    podman logs CONTAINER_ID/NAME
    ```

23. **Inspect Container Details:**
    ```
    podman inspect CONTAINER_ID/NAME
    ```

24. **Inspect Pod Details:**
    ```
    podman pod inspect POD_NAME
    ```

25. **Search for Images:**
    ```
    podman search IMAGE_NAME
    ```

Remember to replace placeholders (like `CONTAINER_ID`, `NAME`, `IMAGE_NAME`, etc.) with actual values relevant to your use case.

Please note that Podman's syntax and options might change over time, so always refer to the official documentation for the most up-to-date information.