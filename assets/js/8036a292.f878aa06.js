"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[763],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Quick Start Guide: Getting Started with Docker"},i=void 0,s={unversionedId:"docker/quick_start",id:"docker/quick_start",title:"Quick Start Guide: Getting Started with Docker",description:"Docker is a widely used platform that enables you to develop, ship, and run applications in containers. Containers package software and its dependencies, making it easy to ensure consistency across different environments. Here's a quick start guide to help you get started with Docker:",source:"@site/sections/containers/docker/quick_start.md",sourceDirName:"docker",slug:"/docker/quick_start",permalink:"/containers/docker/quick_start",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick Start Guide: Getting Started with Docker"},sidebar:"docs",previous:{title:"Cheat Sheet",permalink:"/containers/docker/cheat_sheet"},next:{title:"Cheat Sheet",permalink:"/containers/kubernetes/cheat_sheet"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Docker is a widely used platform that enables you to develop, ship, and run applications in containers. Containers package software and its dependencies, making it easy to ensure consistency across different environments. Here's a quick start guide to help you get started with Docker:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Installation:")),(0,r.kt)("p",null,"Docker can be installed on various operating systems. Here's a simple guide for installing Docker on a Linux-based system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Docker: Use your package manager to install Docker."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install docker.io\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start and Enable Docker: Start the Docker service and enable it to start on boot."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start docker\nsudo systemctl enable docker\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Basic Docker Concepts:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Images:"),"\nImages are the building blocks of containers. They contain an executable software package, along with its dependencies, libraries, and configurations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Containers:"),"\nContainers are instances of Docker images. They run in isolated environments with their own filesystem, network, and processes."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Basic Docker Commands:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pull an Image:"),"\nTo pull an image from the Docker Hub repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ubuntu:latest\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run a Container:"),"\nTo run a container based on an image:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it ubuntu:latest /bin/bash\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Containers:"),"\nTo list all running containers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stop and Remove a Container:"),"\nTo stop and remove a container:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop <container_id>\ndocker rm <container_id>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Images:"),"\nTo list locally available Docker images:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remove an Image:"),"\nTo remove a locally cached image:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi ubuntu:latest\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Building Docker Images:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dockerfile:"),'\nDocker images are often created using a "Dockerfile," which is a script that defines the steps to build an image.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Building an Image:"),"\nCreate a Dockerfile in a directory with your application code and run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t myapp .\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Networking and Ports:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port Mapping:"),"\nTo map a container port to a host port:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:80 nginx\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Cleaning Up:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remove All Containers:"),"\nTo remove all stopped containers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm $(docker ps -aq)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remove All Images:"),"\nTo remove all unused images:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker image prune -a\n")))),(0,r.kt)("p",null,"These are just some of the basic steps to get started with Docker. Docker provides more advanced features for managing containers, networks, volumes, and orchestrating applications. The official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation")," is a comprehensive resource for diving deeper into Docker's capabilities and usage."))}u.isMDXComponent=!0}}]);