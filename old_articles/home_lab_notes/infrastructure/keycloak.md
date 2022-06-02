---
title: Keycloak
---

Keycloak is an open source Identity and Access Management solution aimed at modern applications and services.  It makes 
it easy to secure applications and services with little to no code. 

Keycloak implements the following features :
* Single-Sign On: users authenticate with keycloak rather than individual applications auth systems. Once logged-in to 
  Keycloak, users don't have to login again. 
* LDAP Bridge: if your users authenticate to workstations using LDAP or Active Directory, they can also be authenticated
  to keycloak automatically without providing username and password.
* Social login: Enabling login with social networks is easy to add through the admin console. This means, you only need
  to configure keycloak once per social network.
* Standard Protocols: Keycloak is based on standard protocols and provides support for OpenID Connect, OAuth 2.0, and SAML.

## Getting started


```shell
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:12.0.4
```