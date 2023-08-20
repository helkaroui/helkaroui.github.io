---
title: FunkWhale
sidebar_position: 2
---

# Introduction
![](https://wiki.zatoufly.fr/wiki-assets/funkwhale-banner.png)




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


