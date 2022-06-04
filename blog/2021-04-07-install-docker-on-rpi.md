---
slug: Install docker compose on RPI
title: Install docker compose on RPI
authors: [hamza]
tags: [docker, RPI]
---
I like to use Docker containers on my Raspberry Pis as they come with a great layer of abstraction and portability. 
Here is how to get your Raspberry Pi ready for Docker and Docker-Compose.

# Install Docker
it's time to install Docker. Fortunately, Docker provides a handy install script for that.
```shell
curl -sSL https://get.docker.com | sh
```
After the script has finished, add the permissions to the current user to run Docker commands.

```shell
sudo usermod -aG docker ${USER}
```
Reboot the Raspberry Pi to let the changes take effect.

## Setup docker compose
Docker-Compose usually gets installed using pip3
```shell
sudo apt-get install libffi-dev libssl-dev
sudo apt install python3-dev
sudo apt-get install -y python3 python3-pip
```

Once python3 and pip3 are installed, we can install Docker-Compose using the following command.
```shell
sudo pip3 install docker-compose
```

## Enable the Docker system service to start your containers on boot
you can configure your Raspberry Pi to automatically run the Docker system service, whenever it boots up.
```shell
sudo systemctl enable docker
```

## Test Docker Compose 
That's it !
Now you can start the containers using Docker-Compose, run the following command.
```shell
docker-compose -f docker-compose.yaml up -d
```