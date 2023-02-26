"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),k=n,m=p["".concat(o,".").concat(k)]||p[k]||d[k]||l;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={title:"Akka Cluster",description:"Learn to build the pinnacle of scalable, reactive applications with Akka Cluster"},s=void 0,i={unversionedId:"languages/scala/akka/akka_cluster",id:"languages/scala/akka/akka_cluster",title:"Akka Cluster",description:"Learn to build the pinnacle of scalable, reactive applications with Akka Cluster",source:"@site/sections/developer/languages/scala/akka/akka_cluster.md",sourceDirName:"languages/scala/akka",slug:"/languages/scala/akka/akka_cluster",permalink:"/developer/languages/scala/akka/akka_cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"Akka Cluster",description:"Learn to build the pinnacle of scalable, reactive applications with Akka Cluster"},sidebar:"docs",previous:{title:"Quick start",permalink:"/developer/languages/scala/quick_start"},next:{title:"OOP Basics",permalink:"/developer/languages/scala/course/oop-basics"}},o={},u=[{value:"So, what is Akka Cluster ?",id:"so-what-is-akka-cluster-",level:2},{value:"Cluster Creation",id:"cluster-creation",level:2},{value:"Cluster Failures",id:"cluster-failures",level:2},{value:"Resources :",id:"resources-",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Akka Cluster provides a fault-tolerant decentralized peer-to-peer based Cluster Membership Service with no single point of failure or single point of bottleneck."),(0,n.kt)("p",null,"Akka Cluster allows for building distributed applications, where one application or service spans multiple nodes."),(0,n.kt)("h1",{id:"use-cases-"},"Use cases :"),(0,n.kt)("p",null,"An architectural choice you have to make is if you are going to use a microservices architecture or a traditional distributed application. This choice will influence how you should use Akka Cluster."),(0,n.kt)("p",null,"Akka is well known to :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"providing a way to distribute Akka Actors across a cluster."),(0,n.kt)("li",{parentName:"ul"},"helping in distirbuting large tasks across a cluster.")),(0,n.kt)("h1",{id:"terminologie"},"Terminologie"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"node"),"\nA logical member of a cluster. There could be multiple nodes on a physical machine. Defined by a hostname:port:uid tuple."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"cluster"),"\nA set of nodes joined together through the Cluster Membership Service."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"leader"),"\nA single node in the cluster that acts as the leader. Managing cluster convergence and membership state transitions. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Seed Nodes"),"\nThe seed nodes are contact points for new nodes joining the cluster. When a new node is started it sends a message to all seed nodes and then sends a join command to the seed node that answers first."),(0,n.kt)("p",null,"The seed nodes configuration value does not have any influence on the running cluster itself, it is only relevant for new nodes joining the cluster as it helps them to find contact points to send the join command to; a new member can send this command to any current member of the cluster, not only to the seed nodes."),(0,n.kt)("h1",{id:"fundamentals"},"Fundamentals"),(0,n.kt)("p",null,"In this aricle, we will focus on the underlaying Akka Cluster Framework and in particular :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the comunication mechanism"),(0,n.kt)("li",{parentName:"ul"},"failures scenarions"),(0,n.kt)("li",{parentName:"ul"},"how to manage akka clusters")),(0,n.kt)("p",null,"It will help you for :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"architecting your system"),(0,n.kt)("li",{parentName:"ul"},"dubegging a cluster"),(0,n.kt)("li",{parentName:"ul"},"managing failures and recover from them"),(0,n.kt)("li",{parentName:"ul"},"and more ...")),(0,n.kt)("h2",{id:"so-what-is-akka-cluster-"},"So, what is Akka Cluster ?"),(0,n.kt)("p",null,"Akka Cluster provides a way to distribute Akka actors accross a cluster of nodes. This distribution framework allows to overcome many resource limitations that we found in traditional systems."),(0,n.kt)("p",null,"With Akka Cluster, we can :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"distribute large tasks across of bunch of machines"),(0,n.kt)("li",{parentName:"ul"},"build a cache layer and share critical data across nodes without additional infrastructure"),(0,n.kt)("li",{parentName:"ul"},"reduce the traffic to an overloaded database")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Typical use cases")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Large workloads"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Akka Cluster workloads",src:a(8502).Z,width:"522",height:"292"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some requests are large to be computed on a single machine"),(0,n.kt)("li",{parentName:"ul"},"Scale computations of Tasks to meet demand"),(0,n.kt)("li",{parentName:"ul"},"Cost effectiveness : machines with average memory are cheaper then ones with more memory.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Distriuted Data/State"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Akka Cluster distributed data",src:a(4580).Z,width:"646",height:"373"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provides local, replicated in-memory data storage"),(0,n.kt)("li",{parentName:"ul"},"Fast access (super fast caching)"),(0,n.kt)("li",{parentName:"ul"},"No additinal external caching service")),(0,n.kt)("h2",{id:"cluster-creation"},"Cluster Creation"),(0,n.kt)("p",null,"TBC"),(0,n.kt)("h2",{id:"cluster-failures"},"Cluster Failures"),(0,n.kt)("h2",{id:"resources-"},"Resources :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://academy.lightbend.com/courses/course-v1:lightbend+LAC-Fundamentals+v1/course/"},"https://academy.lightbend.com/courses/course-v1:lightbend+LAC-Fundamentals+v1/course/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/how-to-make-a-simple-application-with-akka-cluster-506e20a725cf/"},"https://www.freecodecamp.org/news/how-to-make-a-simple-application-with-akka-cluster-506e20a725cf/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/qDr6WHFa1TI"},"https://youtu.be/qDr6WHFa1TI"))))}d.isMDXComponent=!0},8502:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/distribute_work.drawio-cf8b86215eb9f06ad3d433d4d9db3141.svg"},4580:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/use_case_distributed_data.drawio-6862a73784e712d3e58b9862c6727896.svg"}}]);