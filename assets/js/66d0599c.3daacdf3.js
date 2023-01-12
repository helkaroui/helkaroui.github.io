"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[7159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={slug:"Update a running pod in k8s",title:"Update a running pod in k8s",authors:["hamza"],tags:["k8s"]},l=void 0,i={permalink:"/blog/Update a running pod in k8s",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-06-14-update-running-pod.md",source:"@site/blog/2021-06-14-update-running-pod.md",title:"Update a running pod in k8s",description:"Problem",date:"2021-06-14T00:00:00.000Z",formattedDate:"June 14, 2021",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:1.7,hasTruncateMarker:!1,authors:[{name:"Hamza EL KAROUI",title:"Data Engineer @ DataFab.io",url:"https://github.com/helkaroui",email:"helkarou@gmail.com",imageURL:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",key:"hamza"}],frontMatter:{slug:"Update a running pod in k8s",title:"Update a running pod in k8s",authors:["hamza"],tags:["k8s"]},prevItem:{title:"A curated list of my Todos :)",permalink:"/blog/todo"},nextItem:{title:"Install docker compose on RPI",permalink:"/blog/Install docker compose on RPI"}},p={authorsImageUrls:[void 0]},u=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Get into the failling pod",id:"get-into-the-failling-pod",level:3},{value:"Update a Jar file",id:"update-a-jar-file",level:3},{value:"Restart the pod",id:"restart-the-pod",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("p",null,"Some tasks might require debugging a failing pod in k8s and so fixing and files inside the pod. This article describes how to perform these operations."),(0,r.kt)("p",null,"In a previous project, we were running a huge Play application on Kubernetes. The app was failing just after initialization, so we had to change some configuration at the fly (coz the CI/CD was a boggling nightmare and was failing the build)"),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("h3",{id:"get-into-the-failling-pod"},"Get into the failling pod"),(0,r.kt)("p",null,"If your pod is always crashing after restarts, consider changing it's entrypoint to allow you to enter your pod and run it manually.\nTo do so, edit your deployment and change your entrypoint so that it never dies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"k edit deployment.apps my-deployment\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{10,11}","{10,11}":!0},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: ubuntu\nspec:\n  containers:\n  - name: ubuntu\n    image: ubuntu:latest\n    # Just spin & wait forever\n    command: [ "/bin/bash", "-c", "--" ]\n    args: [ "while true; do sleep 30; done;" ]\n')),(0,r.kt)("p",null,"Now restart your pod, and it will keep running. Now you need to enter the pod :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"k exec -it my-pod bash\n")),(0,r.kt)("p",null,"Once in, you can investigate or run your application manually with extra parameters for debugging."),(0,r.kt)("h3",{id:"update-a-jar-file"},"Update a Jar file"),(0,r.kt)("p",null,"Now copy the jar out from the pod :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl cp <your-pod-name>:<src-path> <local-dest-path> \n")),(0,r.kt)("p",null,"Once you have the jar in your workdirectory, you can update it with the right configuration.\nTo do so, you need to run through these steps :",(0,r.kt)("br",{parentName:"p"}),"\n","1- extract the file you want to update :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jar xf my-play-app.jar application.conf\n")),(0,r.kt)("p",null,"2- Edit the .conf file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vim application.conf\n")),(0,r.kt)("p",null,"3- Update the jar with the modified .conf file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jar uf my-play-app.jar application.conf\n")),(0,r.kt)("h3",{id:"restart-the-pod"},"Restart the pod"),(0,r.kt)("p",null,"Now you can re-upload the jar to the pod :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl cp <local-dest-path> <your-pod-name>:<src-path>\n")),(0,r.kt)("p",null,"Don't forget to reinitiate the deployment to the default entrypoint "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"k edit deployment.apps my-deployment\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: ubuntu\nspec:\n  containers:\n  - name: ubuntu\n    image: ubuntu:latest\n")),(0,r.kt)("p",null,"That's it \ud83d\ude01"))}c.isMDXComponent=!0}}]);