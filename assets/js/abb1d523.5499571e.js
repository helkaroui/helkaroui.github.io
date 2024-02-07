"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[760],{5788:(e,a,n)=>{n.d(a,{Iu:()=>i,yg:()=>u});var r=n(1504);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var g=r.createContext({}),m=function(e){var a=r.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=m(e.components);return r.createElement(g.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,g=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=m(n),y=t,u=s["".concat(g,".").concat(y)]||s[y]||c[y]||p;return n?r.createElement(u,o(o({ref:a},i),{},{components:n})):r.createElement(u,o({ref:a},i))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,o=new Array(p);o[0]=y;var l={};for(var g in a)hasOwnProperty.call(a,g)&&(l[g]=a[g]);l.originalType=e,l[s]="string"==typeof e?e:t,o[1]=l;for(var m=2;m<p;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4392:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=n(5072),t=(n(1504),n(5788));const p={title:"Cheat Sheet"},o=void 0,l={unversionedId:"docker/cheat_sheet",id:"docker/cheat_sheet",title:"Cheat Sheet",description:"Docker Cheat Sheet: Common Commands",source:"@site/sections/containers/docker/cheat_sheet.md",sourceDirName:"docker",slug:"/docker/cheat_sheet",permalink:"/containers/docker/cheat_sheet",draft:!1,tags:[],version:"current",frontMatter:{title:"Cheat Sheet"},sidebar:"docs",next:{title:"Quick Start Guide: Getting Started with Docker",permalink:"/containers/docker/quick_start"}},g={},m=[],i={toc:m},s="wrapper";function c(e){let{components:a,...n}=e;return(0,t.yg)(s,(0,r.c)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Docker Cheat Sheet: Common Commands")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. Basics:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Pull an Image:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker pull image_name[:tag]\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Run a Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker run [options] image_name[:tag]\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"List Running Containers:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker ps\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"List All Containers (including stopped):")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. Container Management:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Start a Stopped Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker start container_id/container_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Stop a Running Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker stop container_id/container_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Restart a Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker restart container_id/container_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Remove a Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker rm container_id/container_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Remove All Stopped Containers:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker container prune\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"3. Image Management:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"List Downloaded Images:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker images\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Remove an Image:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker rmi image_name[:tag]\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Remove Dangling (Unused) Images:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker image prune\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"4. Logs and Monitoring:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"View Container Logs:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker logs container_id/container_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Monitor Real-time Logs:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker logs -f container_id/container_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Display Container Stats:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker stats container_id/container_name\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"5. Executing Commands in a Container:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Run a Command in a Running Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it container_id/container_name command\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Start a Shell Session in a Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it container_id/container_name /bin/bash\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"6. Building Images:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Build an Image from a Dockerfile:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker build -t image_name[:tag] path_to_dockerfile\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"7. Networking:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Create a Custom Network:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker network create network_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Run a Container in a Specific Network:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --network network_name image_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"List Networks:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker network ls\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"8. Docker Compose:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Start Services Defined in a Compose File:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Stop Services Defined in a Compose File:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Build and Start Services:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose up --build\n")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"9. Docker Volume:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Create a Volume:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker volume create volume_name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"List Volumes:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker volume ls\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Mount a Volume to a Container:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker run -v volume_name:/path/in/container image_name\n")))),(0,t.yg)("p",null,"These are some of the fundamental Docker commands that will help you get started with containerization and managing Docker environments efficiently. Remember that Docker provides many more options and features, so further exploration will allow you to utilize Docker's full potential."))}c.isMDXComponent=!0}}]);