---
title: OpenVPN
---

## Overview
OpenVPN allows peers to authenticate each other using pre-shared secret keys, certificates or username/password. It uses 
the OpenSSL encryption library extensively, as well as the TLS protocol, and contains many security and control 
features. It uses a custom security protocol that utilizes SSL/TLS for key exchange.

We've chosen OpenVPN because of its reliability and availability on several operating systems, especially under Android.

## Manual installation

### Setup OpenVPN
To get started we need to install the openvpn server along with the tools needed to create and manage security keys. 
Run the following command to install it:
```shell
sudo apt install openvpn easy-rsa
```

### Configure the server
OpenVPN offers various internal security features. It has up to 256-bit encryption through the OpenSSL library


### Configure the client


### Enable routing
For the purpose of this example, we will assume that the server-side LAN uses a subnet of `192.168.1.0/24` and the VPN IP
address pool uses `10.8.0.0/24` as cited in the server directive in the OpenVPN server configuration file.
First, you must advertise the `192.168.1.0/24` subnet to VPN clients as being accessible through the VPN. This can easily be
done with the following server-side config file directive.

Add the following line :
```text title="Modify the file /etc/openvpn/server/server.conf"
push "route 192.168.1.0 255.255.255.0"
```

Then restart OpenVPN server:
```shell
sudo systemctl restart openvpn-server@server.service
```

### Enable local DNS
In order to advertise our DNS to the clients, we can order OpenVPN to push the DNS server to the client. Modify the 
conf file and add the following line :
```text title="Modify the file /etc/openvpn/server/server.conf"
push "dhcp-option DNS 10.8.0.1"
```
In this example our DNS server is running on the same machine where we are hosting the DNS `10.8.0.1`
If you're running the DNS on a different machine, you should first advertise the 192.168.1.0/24 subnet to VPN clients 
then advertise the DNS address.
```text title="Modify the file /etc/openvpn/server/server.conf"
push "route 192.168.1.0 255.255.255.0"
push "dhcp-option DNS 10.8.0.23"
```

Then restart OpenVPN server:
```shell
sudo systemctl restart openvpn-server@server.service
```

## Dockerized version
