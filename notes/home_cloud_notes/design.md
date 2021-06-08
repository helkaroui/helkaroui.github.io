---
title: Design & Decisions
---

In the design phase, we consider four important principles :
* Highly available : our cloud's services can tolerate a partial failure of physical and software components.
* Secure : since we're running our services on-prem, the security is out of question.
* Automated : require minimal care and maintenance.
* Portable : Our stack should be easily portable to the cloud, in case of disaster.

## Security
Under this configuration requirements, the security is essential :
- We're only permitting inbound connections on ports 80 & 433
- The hosted applications should provide a trusted level of authentication

## High availability


## Automated


## Portable


