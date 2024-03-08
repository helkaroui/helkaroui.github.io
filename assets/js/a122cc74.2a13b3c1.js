"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9520],{5788:(e,a,n)=>{n.d(a,{Iu:()=>m,yg:()=>d});var t=n(1504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},m=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=l(n),c=r,d=g["".concat(s,".").concat(c)]||g[c]||u[c]||o;return n?t.createElement(d,p(p({ref:a},m),{},{components:n})):t.createElement(d,p({ref:a},m))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6960:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(5072),r=(n(1504),n(5788));const o={title:"Quick Start Guide: Getting Started with Podman"},p=void 0,i={unversionedId:"podman/quick_start",id:"podman/quick_start",title:"Quick Start Guide: Getting Started with Podman",description:"Podman is a containerization tool similar to Docker, designed to manage containers and pods. It allows you to run and manage containers, pods, and images without requiring a daemon process. Here's a quick start guide to help you get started with Podman:",source:"@site/sections/containers/podman/quick_start.md",sourceDirName:"podman",slug:"/podman/quick_start",permalink:"/containers/podman/quick_start",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick Start Guide: Getting Started with Podman"},sidebar:"docs",previous:{title:"Cheat Sheet",permalink:"/containers/podman/cheat_sheet"}},s={},l=[],m={toc:l},g="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.c)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Podman is a containerization tool similar to Docker, designed to manage containers and pods. It allows you to run and manage containers, pods, and images without requiring a daemon process. Here's a quick start guide to help you get started with Podman:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Installation:")),(0,r.yg)("p",null,"Podman is available on various Linux distributions. You can install it using your package manager. For example, on a Debian-based system (such as Ubuntu), you can use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y podman\n")),(0,r.yg)("p",null,"On Red Hat-based systems (such as Fedora or CentOS), you can use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install -y podman\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Basic Container Commands:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run a Container:"),"\nTo run a container, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"podman run")," command followed by the image name. For example, to run an Nginx container:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman run -d -p 8080:80 nginx\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"List Containers:"),"\nTo list all running containers, use:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman ps\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Stop and Remove a Container:"),"\nTo stop and remove a running container:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman stop <container_id>\npodman rm <container_id>\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Working with Images:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"List Images:"),"\nTo list locally available container images:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman images\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Pull an Image:"),"\nTo pull an image from a registry (default is Docker Hub):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman pull ubuntu:latest\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Remove an Image:"),"\nTo remove a locally cached image:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman rmi ubuntu:latest\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. Managing Pods:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create a Pod:"),"\nPods are groups of containers that share network and storage namespaces. To create a pod with multiple containers:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman pod create --name mypod\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add Containers to a Pod:"),"\nTo add containers to the created pod:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman run -dt --pod mypod nginx\npodman run -dt --pod mypod alpine\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"List Pods:"),"\nTo list all pods and their containers:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman pod ps\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. Running Commands in Containers:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run a Command in a Container:"),"\nTo run a command inside a running container:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman exec -it <container_id> /bin/bash\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"6. Miscellaneous:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Logs:"),"\nTo view the logs of a container:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman logs <container_id>\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Inspect:"),"\nTo inspect details about a container, image, or pod:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman inspect <container_id_or_image_name_or_pod_name>\n")))),(0,r.yg)("p",null,"These are just a few basic commands to get you started with Podman. The tool offers many more features for managing containers and pods. You can refer to the official ",(0,r.yg)("a",{parentName:"p",href:"https://podman.io/"},"Podman documentation")," for more in-depth information and advanced usage scenarios."))}u.isMDXComponent=!0}}]);