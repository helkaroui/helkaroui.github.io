"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9219],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"Update a running pod in k8s",title:"Update a running pod in k8s",author:"Hamza EL KAROUI",author_title:"Data Engineer @ DataFab.io",author_url:"https://github.com/helkaroui",author_image_url:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",tags:["k8s"]},p={permalink:"/blog/Update a running pod in k8s",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-06-14-update-running-pod.md",source:"@site/blog/2021-06-14-update-running-pod.md",title:"Update a running pod in k8s",description:"Problem",date:"2021-06-14T00:00:00.000Z",formattedDate:"June 14, 2021",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:1.7,truncated:!1,prevItem:{title:"How to learn 5 Big data tools online (fast)",permalink:"/blog/fast-learning"},nextItem:{title:"Install docker compose on RPI",permalink:"/blog/Install docker compose on RPI"}},u=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[{value:"Get into the failling pod",id:"get-into-the-failling-pod",children:[]},{value:"Update a Jar file",id:"update-a-jar-file",children:[]},{value:"Restart the pod",id:"restart-the-pod",children:[]}]}],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Some tasks might require debugging a failing pod in k8s and so fixing and files inside the pod. This article describes how to perform these operations."),(0,o.kt)("p",null,"In a previous project, we were running a huge Play application on Kubernetes. The app was failing just after initialization, so we had to change some configuration at the fly (coz the CI/CD was a boggling nightmare and was failing the build)"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("h3",{id:"get-into-the-failling-pod"},"Get into the failling pod"),(0,o.kt)("p",null,"If your pod is always crashing after restarts, consider changing it's entrypoint to allow you to enter your pod and run it manually.\nTo do so, edit your deployment and change your entrypoint so that it never dies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"k edit deployment.apps my-deployment\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{10,11}","{10,11}":!0},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: ubuntu\nspec:\n  containers:\n  - name: ubuntu\n    image: ubuntu:latest\n    # Just spin & wait forever\n    command: [ "/bin/bash", "-c", "--" ]\n    args: [ "while true; do sleep 30; done;" ]\n')),(0,o.kt)("p",null,"Now restart your pod, and it will keep running. Now you need to enter the pod :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"k exec -it my-pod bash\n")),(0,o.kt)("p",null,"Once in, you can investigate or run your application manually with extra parameters for debugging."),(0,o.kt)("h3",{id:"update-a-jar-file"},"Update a Jar file"),(0,o.kt)("p",null,"Now copy the jar out from the pod :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl cp <your-pod-name>:<src-path> <local-dest-path> \n")),(0,o.kt)("p",null,"Once you have the jar in your workdirectory, you can update it with the right configuration.\nTo do so, you need to run through these steps :",(0,o.kt)("br",{parentName:"p"}),"\n","1- extract the file you want to update :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jar xf my-play-app.jar application.conf\n")),(0,o.kt)("p",null,"2- Edit the .conf file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vim application.conf\n")),(0,o.kt)("p",null,"3- Update the jar with the modified .conf file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jar uf my-play-app.jar application.conf\n")),(0,o.kt)("h3",{id:"restart-the-pod"},"Restart the pod"),(0,o.kt)("p",null,"Now you can re-upload the jar to the pod :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl cp <local-dest-path> <your-pod-name>:<src-path>\n")),(0,o.kt)("p",null,"Don't forget to reinitiate the deployment to the default entrypoint "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"k edit deployment.apps my-deployment\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: ubuntu\nspec:\n  containers:\n  - name: ubuntu\n    image: ubuntu:latest\n")),(0,o.kt)("p",null,"That's it \ud83d\ude01"))}s.isMDXComponent=!0}}]);