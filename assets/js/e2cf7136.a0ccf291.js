"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[2939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),k=l,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={title:"Concepts"},o="Introduction",i={unversionedId:"scheduler/concepts",id:"scheduler/concepts",title:"Concepts",description:"Nebula is a general purpose workflow engine that runs workflows in a distributed fashion. It provides high-level APIs in Java, Scala, Python and JavaScript, and a workflow engine that supports DAG execution. It also supports a set of high-level tools such as Nebula-Actions for CICD pipelines support, Nebula-ML to manage the ML lifecycle.",source:"@site/sections/projects/scheduler/1-concepts.md",sourceDirName:"scheduler",slug:"/scheduler/concepts",permalink:"/projects/scheduler/concepts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Concepts"},sidebar:"docs",next:{title:"Implementation",permalink:"/projects/scheduler/implementation"}},s={},c=[{value:"Nebula Core",id:"nebula-core",level:2},{value:"Nebula Workflow",id:"nebula-workflow",level:2},{value:"Nebula Actions (CICD)",id:"nebula-actions-cicd",level:2},{value:"Cluster Specification",id:"cluster-specification",level:2},{value:"Node",id:"node",level:3},{value:"cluster",id:"cluster",level:3},{value:"leader",id:"leader",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Nebula is a general purpose workflow engine that runs workflows in a distributed fashion. It provides high-level APIs in Java, Scala, Python and JavaScript, and a workflow engine that supports DAG execution. It also supports a set of high-level tools such as Nebula-Actions for CICD pipelines support, Nebula-ML to manage the ML lifecycle."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://images.assetsdelivery.com/compings_v2/alexkava/alexkava1708/alexkava170800130.jpg",alt:null})),(0,l.kt)("h1",{id:"concepts"},"Concepts"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Stack",src:a(9151).Z})),(0,l.kt)("p",null,"A workflow is represented as a DAG and contains Tasks, which are individual pieces of work. In a DAG, tasks are arranged with dependencies and data/metadata flows taken into account."),(0,l.kt)("p",null,"A Nebula installation generally consists of the following components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One or more Master nodes"),(0,l.kt)("li",{parentName:"ul"},"One or more Worker nodes"),(0,l.kt)("li",{parentName:"ul"},"Event Store")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Architecture",src:a(5543).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sharding"),"\nA shard is a group of ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," that will be managed together. The grouping is typically defined by a hashing function of the ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowId"),". For a specific ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," identifier the shard identifier must always be the same. Otherwise the Flow might accidentally be started in several places at the same time."),(0,l.kt)("p",null,"The shards are allocated to the nodes in the cluster. The decision of where to allocate a shard is done by a shard allocation strategy. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"State Persistence"),"\nWhen using sharding, Flows can be moved to different nodes in the cluster. Persistence can be used to recover the state of a Flow after it has moved."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Artifact Persistence"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"TBD")),(0,l.kt)("h2",{id:"nebula-core"},"Nebula Core"),(0,l.kt)("p",null,"The core module provides building blocks to create, schedule and monitor ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," instances. A ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," specifies the dependencies between ",(0,l.kt)("inlineCode",{parentName:"p"},"Tasks")," and the order in which to execute them and run retries."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tasks")," descibe the work to do and can communicate metadata or ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," results using a ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowFile"),". In core module, ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowFile")," is a wrapper around a JVM object that is serializable and give the freedom to implement the serialization method."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Workflow",src:a(8223).Z})),(0,l.kt)("p",null,"Core module implements the ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowScheduler"),", it monitors all ",(0,l.kt)("inlineCode",{parentName:"p"},"Tasks")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows"),", then triggers the task instances once their dependencies are complete."),(0,l.kt)("h2",{id:"nebula-workflow"},"Nebula Workflow"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WorkFlow")," module is build on top of ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," and provides high-level API to create job workflows. ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkFlow")," API implements all the boilerplate code used to initlize the flow and give access to the following objects :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Working Directory : create temporary files, etc."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FlowFile")," to exchange global variables, task variables and results.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkFlow")," API come with build-in Tasks such as :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SparkTask : to submit spark applications in Standalone mode."),(0,l.kt)("li",{parentName:"ul"},"KubeCTLTask : to have access to the KubeCtl CLI "),(0,l.kt)("li",{parentName:"ul"},"S3Task : to store or retrieve files from S3"),(0,l.kt)("li",{parentName:"ul"},"SFTPTask : to store or retrieve a file from SFTP"),(0,l.kt)("li",{parentName:"ul"},"JDBCTask : to query a JDBC database."),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Workflow",src:a(42).Z})),(0,l.kt)("h2",{id:"nebula-actions-cicd"},"Nebula Actions (CICD)"),(0,l.kt)("p",null,"Like Workflow module, Actions is based on the core ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," object and it build and run CI/CD flows. The ",(0,l.kt)("inlineCode",{parentName:"p"},"ActionFlow")," API provides out of the box capabilities in order to build a simple and rich CICD pipelines. The API gives access to the following objects :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Working Directory : to clone ",(0,l.kt)("inlineCode",{parentName:"li"},"Git")," repositories and run builds"),(0,l.kt)("li",{parentName:"ul"},"Artifact Store : to store build packages."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FlowFile")," to exchange global variables, task variables and results.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ActionFlow")," API come with build-in Tasks such as :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitTask : to manage Git repositories"),(0,l.kt)("li",{parentName:"ul"},"DockerTask : to build and push docker images easily"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula CICD",src:a(7900).Z})),(0,l.kt)("h2",{id:"cluster-specification"},"Cluster Specification"),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("p",null,"A logical member of a cluster. There could be multiple nodes on a physical machine. Defined by a hostname:port:uid tuple."),(0,l.kt)("h3",{id:"cluster"},"cluster"),(0,l.kt)("p",null,"A set of nodes joined together through the Cluster Membership Service."),(0,l.kt)("h3",{id:"leader"},"leader"),(0,l.kt)("p",null,"A single node in the cluster that acts as the leader. Managing cluster convergence and membership state transitions."),(0,l.kt)("h1",{id:"resources-"},"Resources :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitlab.in2p3.fr/MaitresNageurs/QuatreNages/MultiLangages"},"https://gitlab.in2p3.fr/MaitresNageurs/QuatreNages/MultiLangages"))))}d.isMDXComponent=!0},5543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aaplication_architecture.drawio-8763ce5fd7882db0c9ddcfe11ee1f7ab.svg"},8223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dag.drawio-a55976d5a5031bed38bf0a29579c404f.svg"},7900:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dag_cicd.drawio-43354a210f1645d1c9c53ec2cb351333.svg"},42:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dag_workflow.drawio-7f5e22e8b42bf72723502b0757f5d8c4.svg"},9151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scheduler_stack-01558e3a54e1fcac96fce0089615b916.svg"}}]);