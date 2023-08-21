---
title: FunkWhale
sidebar_position: 2
---

# Introduction

Funkwhale is an open-source, self-hosted platform for organizing, sharing, and streaming music. It is designed to provide individuals, communities, and organizations with a way to create their own music libraries, playlists, and streaming services, similar to commercial music streaming platforms, but with a focus on privacy, control, and decentralization.

Key features of Funkwhale include:

1. **Self-Hosted Music Server:** Funkwhale allows users to host their own music server, giving them full control over their music collection and how it's accessed.

2. **Music Library Organization:** Users can upload and organize their music collections into albums, artists, and genres, creating a personalized music library.

3. **User Profiles:** Users can create profiles, follow other users, and discover music shared by friends or within a community.

4. **Playlist Creation:** Funkwhale enables users to create and manage playlists, making it easy to curate music for different moods and occasions.

5. **Audio Streaming:** The platform provides streaming capabilities, allowing users to listen to their music collections from anywhere with an internet connection.

6. **Podcasting Support:** Funkwhale also supports podcasting, allowing users to subscribe to and listen to podcasts they're interested in.

7. **Decentralization:** Funkwhale is part of the broader movement toward decentralization and self-hosting. It enables users to have more control over their data and privacy by running their own instance of the platform.

8. **Open Source:** Funkwhale is developed as open-source software, meaning that the source code is freely available for anyone to view, modify, and contribute to.

Funkwhale operates on the principle of "federated" or "federation," which means that multiple instances of Funkwhale can communicate with each other. This allows users on one instance to discover and follow users on other instances, enhancing the social aspect of the platform and fostering a network of interconnected music libraries.

In essence, Funkwhale aims to provide an alternative to commercial music streaming services by giving users the tools to create their own streaming platforms while maintaining control over their data and enjoying a more personalized music experience. It's particularly well-suited for individuals and communities who value privacy, customization, and self-hosting capabilities.



![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Capture_d%27%C3%A9cran_de_la_page_d%27accueil_de_Funkwhale.png/1200px-Capture_d%27%C3%A9cran_de_la_page_d%27accueil_de_Funkwhale.png)


# Setup
First, ensure you have Docker and docker-compose installed.

```bash
export FUNKWHALE_VERSION="1.2.9"
mkdir -p funkwhale/nginx
curl -L -o funkwhale/nginx/funkwhale.template "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/docker.nginx.template"
curl -L -o funkwhale/nginx/funkwhale_proxy.conf "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/docker.funkwhale_proxy.conf"
curl -L -o funkwhale/docker-compose.yml "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/docker-compose.yml"
```


At this point, the architecture of `funkwhale` should look like that:
```
.
├── docker-compose.yml
└── nginx
    ├── funkwhale_proxy.conf
    └── funkwhale.template

1 directory, 3 files
```


Create your env file:
```
curl -L -o .env "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/env.prod.sample"
sed -i "s/FUNKWHALE_VERSION=latest/FUNKWHALE_VERSION=$FUNKWHALE_VERSION/" .env
sed -i "s/DJANGO_SECRET_KEY=/DJANGO_SECRET_KEY=1234/" .env

chmod 600 .env
```

You'll also need to set these variables :
```
FUNKWHALE_HOSTNAME=localhost
FUNKWHALE_PROTOCOL=http
```

**Then, you should be able to pull the required images:**
```
docker-compose pull
```

**Run the database container and the initial migrations:**
```
docker-compose up -d postgres
docker-compose run --rm api python manage.py migrate
```

**Create your admin user:**
```
docker-compose run --rm api python manage.py createsuperuser --username admin --email admin@admin.com
```

You'll be prompted to enter the admin password

**Create a user:**
```
docker-compose run --rm api python manage.py fw users create --username alice --email alice@email.host
```

**Then launch the whole thing:**
```
docker-compose up -d
```


## Configuring Email


## Setting cloud storage


