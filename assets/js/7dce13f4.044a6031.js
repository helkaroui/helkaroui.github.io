"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[5292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=l,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const i={title:"Concepts",sidebar_position:1},r="Introduction",o={unversionedId:"scheduler/index",id:"scheduler/index",title:"Concepts",description:"Nebula is a general purpose workflow engine that runs workflows in a distributed fashion. It provides high-level APIs in Java, Scala, Python and JavaScript, and a workflow engine that supports DAG execution. It also supports a set of high-level tools such as Nebula-Actions for CICD pipelines support, Nebula-ML to manage the ML lifecycle.",source:"@site/sections/projects/scheduler/index.md",sourceDirName:"scheduler",slug:"/scheduler/",permalink:"/projects/scheduler/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Concepts",sidebar_position:1},sidebar:"docs"},s={},c=[{value:"Nebula Core",id:"nebula-core",level:2},{value:"Nebula Workflow",id:"nebula-workflow",level:2},{value:"Nebula Actions (CICD)",id:"nebula-actions-cicd",level:2},{value:"Cluster Specification",id:"cluster-specification",level:2},{value:"Node",id:"node",level:3},{value:"cluster",id:"cluster",level:3},{value:"leader",id:"leader",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Nebula is a general purpose workflow engine that runs workflows in a distributed fashion. It provides high-level APIs in Java, Scala, Python and JavaScript, and a workflow engine that supports DAG execution. It also supports a set of high-level tools such as Nebula-Actions for CICD pipelines support, Nebula-ML to manage the ML lifecycle."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://images.assetsdelivery.com/compings_v2/alexkava/alexkava1708/alexkava170800130.jpg",alt:null})),(0,l.kt)("h1",{id:"concepts"},"Concepts"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Stack",src:a(9151).Z,width:"701",height:"366"})),(0,l.kt)("p",null,"A workflow is represented as a DAG and contains Tasks, which are individual pieces of work. In a DAG, tasks are arranged with dependencies and data/metadata flows taken into account."),(0,l.kt)("p",null,"A Nebula installation generally consists of the following components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One or more Master nodes"),(0,l.kt)("li",{parentName:"ul"},"One or more Worker nodes"),(0,l.kt)("li",{parentName:"ul"},"Event Store")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Architecture",src:a(5543).Z,width:"1051",height:"791"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sharding"),"\nA shard is a group of ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," that will be managed together. The grouping is typically defined by a hashing function of the ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowId"),". For a specific ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," identifier the shard identifier must always be the same. Otherwise the Flow might accidentally be started in several places at the same time."),(0,l.kt)("p",null,"The shards are allocated to the nodes in the cluster. The decision of where to allocate a shard is done by a shard allocation strategy. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"State Persistence"),"\nWhen using sharding, Flows can be moved to different nodes in the cluster. Persistence can be used to recover the state of a Flow after it has moved."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Artifact Persistence"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"TBD")),(0,l.kt)("h2",{id:"nebula-core"},"Nebula Core"),(0,l.kt)("p",null,"The core module provides building blocks to create, schedule and monitor ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," instances. A ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," specifies the dependencies between ",(0,l.kt)("inlineCode",{parentName:"p"},"Tasks")," and the order in which to execute them and run retries."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tasks")," descibe the work to do and can communicate metadata or ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," results using a ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowFile"),". In core module, ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowFile")," is a wrapper around a JVM object that is serializable and give the freedom to implement the serialization method."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Workflow",src:a(8223).Z,width:"602",height:"202"})),(0,l.kt)("p",null,"Core module implements the ",(0,l.kt)("inlineCode",{parentName:"p"},"FlowScheduler"),", it monitors all ",(0,l.kt)("inlineCode",{parentName:"p"},"Tasks")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows"),", then triggers the task instances once their dependencies are complete."),(0,l.kt)("h2",{id:"nebula-workflow"},"Nebula Workflow"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WorkFlow")," module is build on top of ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," and provides high-level API to create job workflows. ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkFlow")," API implements all the boilerplate code used to initlize the flow and give access to the following objects :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Working Directory : create temporary files, etc."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FlowFile")," to exchange global variables, task variables and results.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkFlow")," API come with build-in Tasks such as :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SparkTask : to submit spark applications in Standalone mode."),(0,l.kt)("li",{parentName:"ul"},"KubeCTLTask : to have access to the KubeCtl CLI "),(0,l.kt)("li",{parentName:"ul"},"S3Task : to store or retrieve files from S3"),(0,l.kt)("li",{parentName:"ul"},"SFTPTask : to store or retrieve a file from SFTP"),(0,l.kt)("li",{parentName:"ul"},"JDBCTask : to query a JDBC database."),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula Workflow",src:a(42).Z,width:"562",height:"111"})),(0,l.kt)("h2",{id:"nebula-actions-cicd"},"Nebula Actions (CICD)"),(0,l.kt)("p",null,"Like Workflow module, Actions is based on the core ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," object and it build and run CI/CD flows. The ",(0,l.kt)("inlineCode",{parentName:"p"},"ActionFlow")," API provides out of the box capabilities in order to build a simple and rich CICD pipelines. The API gives access to the following objects :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Working Directory : to clone ",(0,l.kt)("inlineCode",{parentName:"li"},"Git")," repositories and run builds"),(0,l.kt)("li",{parentName:"ul"},"Artifact Store : to store build packages."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FlowFile")," to exchange global variables, task variables and results.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ActionFlow")," API come with build-in Tasks such as :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitTask : to manage Git repositories"),(0,l.kt)("li",{parentName:"ul"},"DockerTask : to build and push docker images easily"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nebula CICD",src:a(7900).Z,width:"562",height:"181"})),(0,l.kt)("h2",{id:"cluster-specification"},"Cluster Specification"),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("p",null,"A logical member of a cluster. There could be multiple nodes on a physical machine. Defined by a hostname:port:uid tuple."),(0,l.kt)("h3",{id:"cluster"},"cluster"),(0,l.kt)("p",null,"A set of nodes joined together through the Cluster Membership Service."),(0,l.kt)("h3",{id:"leader"},"leader"),(0,l.kt)("p",null,"A single node in the cluster that acts as the leader. Managing cluster convergence and membership state transitions."),(0,l.kt)("h1",{id:"resources-"},"Resources :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitlab.in2p3.fr/MaitresNageurs/QuatreNages/MultiLangages"},"https://gitlab.in2p3.fr/MaitresNageurs/QuatreNages/MultiLangages"))))}u.isMDXComponent=!0},5543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aaplication_architecture.drawio-8763ce5fd7882db0c9ddcfe11ee1f7ab.svg"},8223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dag.drawio-a55976d5a5031bed38bf0a29579c404f.svg"},7900:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dag_cicd.drawio-43354a210f1645d1c9c53ec2cb351333.svg"},42:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dag_workflow.drawio-7f5e22e8b42bf72723502b0757f5d8c4.svg"},9151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scheduler_stack-01558e3a54e1fcac96fce0089615b916.svg"}}]);