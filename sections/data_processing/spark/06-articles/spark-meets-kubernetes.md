---
title: "Spark meets Kubernetes: the complete guide"
---

![](img/spark-on-k8s.png)

In today's data-driven world, the ability to efficiently process and analyze large datasets is crucial. Apache Spark has been a go-to solution for big data processing, while Kubernetes has emerged as a leading platform for container orchestration. Together, these two technologies form a potent combination, offering a scalable and flexible environment for managing and executing Spark workloads.

In this context, we want to share our take aways from migrating old Spark Standalone clusters to kubernetes using Spark Submit.

## Project context
The client's infrastructure is build on top of OpenStack, thus most of services are installed manually or using Ansible, on top of virtual machines. With these constraints, the big data team has build multiple Spark Standalone clusters for each of their environments.

## Migration Goals & Constraints

**Constraints** 

The client is very demanding regarding security and authorization, thus the architects forbidden different teams from installing k8s operators.


**Goals** 

The integration of Apache Spark with Kubernetes has opened up new horizons for running Spark workloads in a more efficient and flexible manner. Here's why this combination is so compelling:

**1. Resource Management and Isolation**

Kubernetes provides fine-grained control over resources, enabling Spark applications to be isolated in containers with specific CPU and memory limits. This ensures that Spark jobs don't contend for resources with other applications running on the same cluster.

**2. Scalability**

Kubernetes makes it easy to scale Spark clusters up or down based on workload demands. This dynamic scaling ensures optimal resource utilization, reducing infrastructure costs.

**3. Multi-Tenancy**

Kubernetes supports multi-tenancy, allowing different teams or users to share the same cluster securely. Each Spark application can run within its own namespace, ensuring data and resource isolation.

**4. Portability**

With Kubernetes, you can deploy Spark applications consistently across various environments, from on-premises data centers to public clouds. This portability simplifies deployment and minimizes compatibility issues.

**5. Simplified Operations**

Kubernetes abstracts away many of the complexities associated with managing Spark clusters. It automates tasks like scaling, monitoring, and recovery, reducing the operational overhead.

**6. Efficient Resource Utilization**

Kubernetes' bin-packing capabilities ensure efficient use of cluster resources. Spark pods are scheduled on worker nodes with available resources, minimizing wastage.

## Getting Started with Spark on Kubernetes

TBD

### Architecture

TBD

### How Spark Works on Kubernetes

TBD

### Spark-Submit vs Spark Operator
`spark-submit` and the Spark Operator are two different approaches for running Apache Spark applications on Kubernetes. Each has its own advantages and use cases, and the choice between them depends on your specific requirements and infrastructure setup.

* Use spark-submit when:
  * You need maximum flexibility and control over Spark configurations.
  * You are already comfortable with the spark-submit command.
  * Your Spark applications need to run in various cluster environments.

* Use Spark Operator when:
  * You want a Kubernetes-native, automated solution.
  * You prefer to define and manage Spark applications as Kubernetes resources.
  * You need dynamic scaling and resource management features.
  * You are using Kubernetes extensively in your infrastructure.


### Dynamic Scaling

Dynamic scaling refers to the ability to automatically adjust the number of Spark executors in response to workload demands. This feature allows applications to efficiently utilize cluster resources while maintaining optimal performance.

1. **Initial Deployment**:
   When you submit a Spark application to run on Kubernetes, you define an initial number of executor pods based on your workload requirements and resource availability. These executor pods run alongside the Spark driver pod.

2. **Monitoring Metrics**: 
   Kubernetes, along with monitoring tools like Prometheus and Grafana, collects metrics about the Spark application's resource usage, such as CPU and memory consumption, as well as the progress of tasks within the application.

3. **Resource Utilization Thresholds**:
   You can configure resource utilization thresholds or policies that define when the cluster should scale up or down based on predefined criteria. These thresholds are often defined in terms of CPU and memory utilization.

4. **Scaling Trigger**:
   When the metrics collected breach the predefined thresholds, Kubernetes triggers the scaling process. If resource utilization is consistently high and exceeds the defined threshold, Kubernetes initiates the scaling up process to allocate more resources to the Spark application.

5. **Scaling Up**:
   - Kubernetes increases the desired number of Spark executor pods by creating new pods.
   - These new executor pods join the existing Spark driver pod and executor pods to distribute the workload.
   - The Spark application can take advantage of the additional resources to process data faster.

6. **Continued Monitoring**:
   Kubernetes and monitoring tools continue to monitor the Spark application's resource usage. If resource utilization drops below a certain threshold or the workload decreases, Kubernetes may trigger a scaling down process to reduce the number of executor pods.

7. **Scaling Down**:
   - Kubernetes gracefully terminates the selected executor pods.
   - Spark gracefully handles the termination of these executor pods, ensuring that in-progress tasks are not lost and that data is not corrupted.
   - Once the executor pods have been safely terminated, the Spark application continues to run with the remaining resources.

8.  **Iterative Process**:
   Dynamic scaling is an iterative process that can occur multiple times during the execution of a Spark application. It allows the application to adapt to changing resource demands, ensuring efficient resource utilization without manual intervention.


## Getting hands dirty

TBD

### Requirements
- Kubernetes cluster / Minikube
- Docker
- Skaffold
- Kustomize
- sbt

### Setting up a the project

[**Skaffold**](https://skaffold.dev/) is a command line tool that facilitates continuous development for container based & Kubernetes applications. 

![](img/skaffold-architecture.png)

[**Kustomize**](https://kustomize.io/) is a Kubernetes configuration transformation tool that allows you to customize untemplated YAML files, leaving the original files intact.

[**Minikube**](https://minikube.sigs.k8s.io/docs/start/) is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes.

#### 1- The project structure

We will start by creating a project with a structure that emphasis the separation of rules, i.e. we seperate the code base, the service component and the environment specifics on which the application will run. This concept is also called `Environment-Agnostic Design` also known as `environment-agnostic architecture` or `platform-agnostic design`.

In that sperit, here is our project structure :

```
├── images
│   ├── base-images
│   │   └── spark-base-image
│   └── custom-images
│       └── spark-app-example
├── services
│   ├── sparkhs
│   ├── spark-job-example
│   └── spark-reverse-proxy
└── deployment
    ├── base
    └── overlays
        ├── dev
        └── prod
```

- **images :** The docker images folder is where lives our code base, it can also be split into two folders :
  - *base-images* for base docker that will be used to build other images. Example : spark, jdk, python, sbt, gradle.
  - *custom-images* which can enhirit from base images, and holds images with our code base.

- **services :** Here we define the services that will run our docker images on kubernetes.

- **Deployment :** this folder holds resources and variants of environment configurations - like `development`, `staging` and `production` - using overlays that modify a common base.


#### 2- Spark Base Image

We decided to create a custom spark docker image rather than using the provided docker image, in order to showcase the possibility of customizing Spark upon the project needs.


The easiest way is to mimic the Dockerfile located in Spark [Repository](https://github.com/apache/spark/blob/master/resource-managers/kubernetes/docker/src/main/dockerfiles/spark/Dockerfile)


We reduce the dockerfile to it's minimum and we add a stage to build spark from source using maven.


```Dockerfile
FROM maven:3.9.4-eclipse-temurin AS BUILD

TBD


FROM eclipse-temurin:17-jre as RUNTIME

ARG spark_uid=185

RUN set -ex && \
    apt-get update && \
    ln -s /lib /lib64 && \
    apt install -y bash tini && \
    mkdir -p /opt/spark && \
    mkdir -p /opt/spark/examples && \
    mkdir -p /opt/spark/work-dir && \
    touch /opt/spark/RELEASE && \
    rm /bin/sh && \
    ln -sv /bin/bash /bin/sh && \
    echo "auth required pam_wheel.so use_uid" >> /etc/pam.d/su && \
    chgrp root /etc/passwd && chmod ug+rw /etc/passwd && \
    rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/*


COPY entrypoint.sh /opt/
COPY decom.sh /opt/

ENV SPARK_HOME /opt/spark

WORKDIR /opt/spark/work-dir
RUN chmod g+w /opt/spark/work-dir \
      && chmod a+x /opt/decom.sh

ENTRYPOINT [ "/opt/entrypoint.sh" ]

# Specify the User that the actual main process will run as
USER ${spark_uid}

```


#### 3- Spark App Example Image

To showcase a fully working spark application, we create a basic Scala/Spark application with two scripts :
- *Compute Pi* this script will compute an approximation to PI and log the result. The code is also included in [Spark-Examples](https://github.com/apache/spark/blob/master/examples/src/main/scala/org/apache/spark/examples/SparkPi.scala) module.
- *Streaming Example* A basic streaming script with Spark structured streaming.

We first start by creating an SBT project as follow :

1- `cd` to the folder `images/custom-images/`.

2- Run the following command `sbt new scala/scala3.g8`. This pulls the ‘scala3’ template from GitHub. It will also create a target folder, which you can ignore.

3- When prompted, name the application `spark-app-example`. This will create a project called “spark-app-example”.

4- Let’s take a look at what just got generated:
```
├── build.sbt
├── project
│   └── build.properties
├── README.md
└── src
    ├── main
    │   └── scala
    │       └── Main.scala
    └── test
        └── scala
            └── MySuite.scala
```

5- Adding a dependency in the `build.sbt` file :
```sbt
libraryDependencies ++= Seq(
      "org.apache.spark" %% "spark-sql" % "3.5.0" % Provided cross CrossVersion.for3Use2_13,
      "org.apache.spark" %% "spark-streaming" % "3.5.0" % Provided cross CrossVersion.for3Use2_13
)
```

:::note

Because there is no Scala 3 version of spark-sql available, we use CrossVersion for3Use2_13 to tell sbt we want the Scala 2.13 version of this library

:::


6- Add `sbt-assembly` plugin under `project/plugins.sbt` :
```scala
addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "2.1.1")
```

7- Create the scala script `SparkPi` under package `dev.sharek.examples` :
```scala
package dev.sharek.examples

import org.apache.spark.sql.SparkSession

import scala.math.random

class SparkPi(args: Array[String]) {

  val spark = SparkSession
    .builder
    .appName("Spark Pi")
    .getOrCreate()

  SparkPiLogic(spark, args)

  spark.stop()
}


class SparkPiLogic(spark: SparkSession, args: Array[String]) {

  val slices = if (args.length > 0) args(0).toInt else 2
  val numSecondsToSleep = if (args.length > 1) args(1).toInt else 10


  val n = math.min(100000L * slices, Int.MaxValue).toInt // avoid overflow
  val count = spark.sparkContext.parallelize(1 until n, slices).map { i =>
    val x = random * 2 - 1
    val y = random * 2 - 1
    if (x * x + y * y <= 1) 1 else 0
  }.reduce(_ + _)

  println(s"Pi is roughly ${4.0 * count / (n - 1)}")


  for (i <- 1 until numSecondsToSleep) {
    println(s"Alive for $i out of $numSecondsToSleep seconds")
    Thread.sleep(1000)
  }

}
```


8- Finaly, we add the Dockerfile that builds the sbt project into jar files:

```docker
FROM sbtscala/scala-sbt:eclipse-temurin-jammy-8u382-b05_1.9.6_3.3.1

ENV SRC_DIR=/opt/source
ENV APP_DIR=/opt/spark-app-example


RUN mkdir -p $SRC_DIR \
    && mkdir -p $APP_DIR

COPY . $SRC_DIR

RUN cd $SRC_DIR \
    && sbt assembly \
    && cp target/scala-3.3.1/spark-app-example.jar $APP_DIR/

WORKDIR $APP_DIR
```

:::note

At this point, we can test everything by building the docker image `docker build .`

:::


#### Minimal working example


#### Building & Deploying Example


### Kubernetes Components

#### Spark Submit Image

#### Spark Submit Service

#### Using Pod Template

#### Adding a configmap

#### Ingress

#### Spark History Server

#### UI Proxy


### Deploying the Spark Pi Demo Application

TBD

#### Checking the logs

TBD

#### Accessing the Spark UI

TBD

#### Spark Job Execution History

TBD

#### Monitoring

TBD


### Continuous Development

TBD 

#### Hot reloading

TBD



## Pros and Cons of Spark Submit with K8s

TBD

**Pros of Spark with K8s:**
* ...
* ...

**Cons of Spark with K8s:**
* ...
* ...

## Conclusion

TBD


**Resources:**
- https://skaffold.dev/
- https://blog.cellenza.com/en/data/using-spark-with-kubernetes-k8s/
- https://devopscube.com/kustomize-tutorial/
- [Using Scala 3 with Spark](https://xebia.com/blog/using-scala-3-with-spark/)