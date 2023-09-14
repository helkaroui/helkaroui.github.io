"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[4650],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||k[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Spark meets Kubernetes: the complete guide"},o=void 0,s={unversionedId:"spark/articles/spark-meets-kubernetes",id:"spark/articles/spark-meets-kubernetes",title:"Spark meets Kubernetes: the complete guide",description:"In today's data-driven world, the ability to efficiently process and analyze large datasets is crucial. Apache Spark has been a go-to solution for big data processing, while Kubernetes has emerged as a leading platform for container orchestration. Together, these two technologies form a potent combination, offering a scalable and flexible environment for managing and executing Spark workloads.",source:"@site/sections/data_processing/spark/06-articles/spark-meets-kubernetes.md",sourceDirName:"spark/06-articles",slug:"/spark/articles/spark-meets-kubernetes",permalink:"/data_processing/spark/articles/spark-meets-kubernetes",draft:!1,tags:[],version:"current",frontMatter:{title:"Spark meets Kubernetes: the complete guide"},sidebar:"docs",previous:{title:"Spark meets Go Lang",permalink:"/data_processing/spark/articles/spark-meets-go"},next:{title:"Exploring the Exciting New Features in Apache Spark 3.0",permalink:"/data_processing/spark/articles/whats-new-in-spark3"}},l={},p=[{value:"How Spark Works on Kubernetes",id:"how-spark-works-on-kubernetes",level:2},{value:"Spark-Submit vs Spark Operator",id:"spark-submit-vs-spark-operator",level:2},{value:"Dynamic Scaling",id:"dynamic-scaling",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setting up a the project",id:"setting-up-a-the-project",level:2},{value:"The project structure",id:"the-project-structure",level:3},{value:"Minimal working example",id:"minimal-working-example",level:3},{value:"Building &amp; Deploying Example",id:"building--deploying-example",level:3},{value:"Kubernetes Components",id:"kubernetes-components",level:2},{value:"Spark Submit Image",id:"spark-submit-image",level:3},{value:"Spark Submit Service",id:"spark-submit-service",level:3},{value:"Using Pod Template",id:"using-pod-template",level:3},{value:"Adding a configmap",id:"adding-a-configmap",level:3},{value:"Ingress",id:"ingress",level:3},{value:"Spark History Server",id:"spark-history-server",level:3},{value:"UI Proxy",id:"ui-proxy",level:3},{value:"Deploying the Spark Pi Demo Application",id:"deploying-the-spark-pi-demo-application",level:2},{value:"Checking the logs",id:"checking-the-logs",level:3},{value:"Accessing the Spark UI",id:"accessing-the-spark-ui",level:3},{value:"Spark Job Execution History",id:"spark-job-execution-history",level:3},{value:"Monitoring",id:"monitoring",level:3}],u={toc:p},c="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9266).Z,width:"1650",height:"1060"})),(0,r.kt)("p",null,"In today's data-driven world, the ability to efficiently process and analyze large datasets is crucial. Apache Spark has been a go-to solution for big data processing, while Kubernetes has emerged as a leading platform for container orchestration. Together, these two technologies form a potent combination, offering a scalable and flexible environment for managing and executing Spark workloads."),(0,r.kt)("p",null,"In this context, we want to share our take aways from migrating old Spark Standalone clusters to kubernetes using Spark Submit."),(0,r.kt)("h1",{id:"project-context"},"Project context"),(0,r.kt)("p",null,"The client's infrastructure is build on top of OpenStack, thus most of services are installed manually or using Ansible, on top of virtual machines. With these constraints, the big data team has build multiple Spark Standalone clusters for each of their environments."),(0,r.kt)("h1",{id:"migration-goals--constraints"},"Migration Goals & Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints")," "),(0,r.kt)("p",null,"The client is very demanding regarding security and authorization, thus the architects forbidden different teams from installing k8s operators."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals")," "),(0,r.kt)("p",null,"The integration of Apache Spark with Kubernetes has opened up new horizons for running Spark workloads in a more efficient and flexible manner. Here's why this combination is so compelling:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Resource Management and Isolation")),(0,r.kt)("p",null,"Kubernetes provides fine-grained control over resources, enabling Spark applications to be isolated in containers with specific CPU and memory limits. This ensures that Spark jobs don't contend for resources with other applications running on the same cluster."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Scalability")),(0,r.kt)("p",null,"Kubernetes makes it easy to scale Spark clusters up or down based on workload demands. This dynamic scaling ensures optimal resource utilization, reducing infrastructure costs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Multi-Tenancy")),(0,r.kt)("p",null,"Kubernetes supports multi-tenancy, allowing different teams or users to share the same cluster securely. Each Spark application can run within its own namespace, ensuring data and resource isolation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Portability")),(0,r.kt)("p",null,"With Kubernetes, you can deploy Spark applications consistently across various environments, from on-premises data centers to public clouds. This portability simplifies deployment and minimizes compatibility issues."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Simplified Operations")),(0,r.kt)("p",null,"Kubernetes abstracts away many of the complexities associated with managing Spark clusters. It automates tasks like scaling, monitoring, and recovery, reducing the operational overhead."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Efficient Resource Utilization")),(0,r.kt)("p",null,"Kubernetes' bin-packing capabilities ensure efficient use of cluster resources. Spark pods are scheduled on worker nodes with available resources, minimizing wastage."),(0,r.kt)("h1",{id:"getting-started-with-spark-on-kubernetes"},"Getting Started with Spark on Kubernetes"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h2",{id:"how-spark-works-on-kubernetes"},"How Spark Works on Kubernetes"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h2",{id:"spark-submit-vs-spark-operator"},"Spark-Submit vs Spark Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spark-submit")," and the Spark Operator are two different approaches for running Apache Spark applications on Kubernetes. Each has its own advantages and use cases, and the choice between them depends on your specific requirements and infrastructure setup."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use spark-submit when:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You need maximum flexibility and control over Spark configurations."),(0,r.kt)("li",{parentName:"ul"},"You are already comfortable with the spark-submit command."),(0,r.kt)("li",{parentName:"ul"},"Your Spark applications need to run in various cluster environments."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use Spark Operator when:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You want a Kubernetes-native, automated solution."),(0,r.kt)("li",{parentName:"ul"},"You prefer to define and manage Spark applications as Kubernetes resources."),(0,r.kt)("li",{parentName:"ul"},"You need dynamic scaling and resource management features."),(0,r.kt)("li",{parentName:"ul"},"You are using Kubernetes extensively in your infrastructure.")))),(0,r.kt)("h2",{id:"dynamic-scaling"},"Dynamic Scaling"),(0,r.kt)("p",null,"Dynamic scaling refers to the ability to automatically adjust the number of Spark executors in response to workload demands. This feature allows applications to efficiently utilize cluster resources while maintaining optimal performance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Initial Deployment"),":\nWhen you submit a Spark application to run on Kubernetes, you define an initial number of executor pods based on your workload requirements and resource availability. These executor pods run alongside the Spark driver pod.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Monitoring Metrics"),":\nKubernetes, along with monitoring tools like Prometheus and Grafana, collects metrics about the Spark application's resource usage, such as CPU and memory consumption, as well as the progress of tasks within the application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource Utilization Thresholds"),":\nYou can configure resource utilization thresholds or policies that define when the cluster should scale up or down based on predefined criteria. These thresholds are often defined in terms of CPU and memory utilization.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scaling Trigger"),":\nWhen the metrics collected breach the predefined thresholds, Kubernetes triggers the scaling process. If resource utilization is consistently high and exceeds the defined threshold, Kubernetes initiates the scaling up process to allocate more resources to the Spark application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scaling Up"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kubernetes increases the desired number of Spark executor pods by creating new pods."),(0,r.kt)("li",{parentName:"ul"},"These new executor pods join the existing Spark driver pod and executor pods to distribute the workload."),(0,r.kt)("li",{parentName:"ul"},"The Spark application can take advantage of the additional resources to process data faster."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Continued Monitoring"),":\nKubernetes and monitoring tools continue to monitor the Spark application's resource usage. If resource utilization drops below a certain threshold or the workload decreases, Kubernetes may trigger a scaling down process to reduce the number of executor pods.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scaling Down"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kubernetes gracefully terminates the selected executor pods."),(0,r.kt)("li",{parentName:"ul"},"Spark gracefully handles the termination of these executor pods, ensuring that in-progress tasks are not lost and that data is not corrupted."),(0,r.kt)("li",{parentName:"ul"},"Once the executor pods have been safely terminated, the Spark application continues to run with the remaining resources."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Iterative Process"),":\nDynamic scaling is an iterative process that can occur multiple times during the execution of a Spark application. It allows the application to adapt to changing resource demands, ensuring efficient resource utilization without manual intervention."))),(0,r.kt)("h1",{id:"getting-hands-dirty"},"Getting hands dirty"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"Skaffold"),(0,r.kt)("li",{parentName:"ul"},"Kustomize")),(0,r.kt)("h2",{id:"setting-up-a-the-project"},"Setting up a the project"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://skaffold.dev/"},(0,r.kt)("strong",{parentName:"a"},"Skaffold"))," is a command line tool that facilitates continuous development for container based & Kubernetes applications. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9850).Z,width:"8305",height:"4309"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kustomize.io/"},(0,r.kt)("strong",{parentName:"a"},"Kustomize"))," is a Kubernetes configuration transformation tool that allows you to customize untemplated YAML files, leaving the original files intact."),(0,r.kt)("h3",{id:"the-project-structure"},"The project structure"),(0,r.kt)("h3",{id:"minimal-working-example"},"Minimal working example"),(0,r.kt)("h3",{id:"building--deploying-example"},"Building & Deploying Example"),(0,r.kt)("h2",{id:"kubernetes-components"},"Kubernetes Components"),(0,r.kt)("h3",{id:"spark-submit-image"},"Spark Submit Image"),(0,r.kt)("h3",{id:"spark-submit-service"},"Spark Submit Service"),(0,r.kt)("h3",{id:"using-pod-template"},"Using Pod Template"),(0,r.kt)("h3",{id:"adding-a-configmap"},"Adding a configmap"),(0,r.kt)("h3",{id:"ingress"},"Ingress"),(0,r.kt)("h3",{id:"spark-history-server"},"Spark History Server"),(0,r.kt)("h3",{id:"ui-proxy"},"UI Proxy"),(0,r.kt)("h2",{id:"deploying-the-spark-pi-demo-application"},"Deploying the Spark Pi Demo Application"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"checking-the-logs"},"Checking the logs"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"accessing-the-spark-ui"},"Accessing the Spark UI"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"spark-job-execution-history"},"Spark Job Execution History"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h1",{id:"pros-and-cons-of-spark-submit-with-k8s"},"Pros and Cons of Spark Submit with K8s"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros of Spark with K8s:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"..."),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cons of Spark with K8s:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"..."),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://skaffold.dev/"},"https://skaffold.dev/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.cellenza.com/en/data/using-spark-with-kubernetes-k8s/"},"https://blog.cellenza.com/en/data/using-spark-with-kubernetes-k8s/"))))}k.isMDXComponent=!0},9850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/skaffold-architecture-04ec12ff6f7ea3c159df0acd2f8b7cda.png"},9266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spark-on-k8s-41426f75a2dc0b543430a8d6c2fdcc15.png"}}]);