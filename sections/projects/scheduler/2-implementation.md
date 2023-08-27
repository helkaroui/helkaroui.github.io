---
title: "Implementation"
---

In this section, I'll explain the technical details of the Scheduler.

## Akka Cluster :
I choosed `Akka Cluster` librarie as a base framework to build on the Scheduler for various reasons :
- Akka is a production prooved framework, that enables to build distributed applications.
- Akka Cluster gives you out-of-the-box the discovery of members in the same cluster
- Using Cluster Aware Routers it is possible to balance the messages between actors in different nodes

Akka clusters provide a solid foundation for building systems that are resilient to failure and also capable of elastically expanding and contracting as needed to handle the current processing load.

To distrubute work to the workers nodes, `Akka Cluster Aware Routers` can balance messages between actors in different nodes. It also provides several balancing policies, making load-balancig a piece of cake.

Aware Routers come with two types :

*Group Router* — The actors to send the messages to — called routees — are specified using their actor path. The routers share the routees created in the cluster. We will use a Group Router in this example.


*Pool Router* — The routees are created and deployed by the router, so they are its children in the actor hierarchy. Routees are not shared between routers. This is ideal for a primary-replica scenario, where each router is the primary and its routees the replicas.


## Actor hierarchy


### Minimal Cluster application :
To use Akka Cluster, we add the following dependency in the project:
```scala
val AkkaVersion = "2.6.19"
libraryDependencies += "com.typesafe.akka" %% "akka-cluster-typed" % AkkaVersion
```

The minimum configuration required is to set a host/port for remoting and the `akka.actor.provider = "cluster"`.
```
akka {
  actor {
    provider = "cluster"
  }
  remote.artery {
    canonical {
      hostname = "127.0.0.1"
      port = 2551
    }
  }

  cluster {
    seed-nodes = [
      "akka://ClusterSystem@127.0.0.1:2551",
      "akka://ClusterSystem@127.0.0.1:2552"]
    
    downing-provider-class = "akka.cluster.sbr.SplitBrainResolverProvider"
  }
}
```




## Resources :
- Code generation : https://youtu.be/wVs1FZyKXMY