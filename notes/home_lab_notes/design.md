---
title: Design & Decisions
---

## Design Principles
In the design phase, we consider three important principles :
- Secure : since we're running our services on-prem, the security is out of question.
- Automated : require minimal care and maintenance.
- Portable : Our stack should be easily portable to the cloud, in case of disaster.

### Security
Under this configuration requirements, the security is essential :
- We're only permitting inbound connections on ports 80 & 433
- The hosted applications should provide a trusted level of authentication
- The network should have a minimal monitoring to alert in case of attack

### Automated
As this is a side project, it should require minimal manual actions.
- Applications should be tolerant to failures and be able to restart automatically.
- All components should be monitored and automated alerts should be in place.

### Portable
The cloud should be easy to put in place and automated setup tools such as Ansible or Terraform, should be used. This will reduce the time of setup in case of physical failure.


## Design



