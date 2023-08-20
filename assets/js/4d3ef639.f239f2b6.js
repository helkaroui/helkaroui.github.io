"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[2885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=m(a),k=r,N=i["".concat(o,".").concat(k)]||i[k]||u[k]||p;return a?n.createElement(N,l(l({ref:t},c),{},{components:a})):n.createElement(N,l({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[i]="string"==typeof e?e:r,l[1]=s;for(var m=2;m<p;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const p={title:"Cheat Sheet"},l=void 0,s={unversionedId:"kubernetes/cheat_sheet",id:"kubernetes/cheat_sheet",title:"Cheat Sheet",description:"Certainly, here's a list of common Kubernetes commands for your cheat sheet:",source:"@site/sections/containers/kubernetes/cheat_sheet.md",sourceDirName:"kubernetes",slug:"/kubernetes/cheat_sheet",permalink:"/containers/kubernetes/cheat_sheet",draft:!1,tags:[],version:"current",frontMatter:{title:"Cheat Sheet"},sidebar:"docs",previous:{title:"Quick start",permalink:"/containers/kubernetes/quick_start"},next:{title:"Storage",permalink:"/containers/kubernetes/storage"}},o={},m=[],c={toc:m},i="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Certainly, here's a list of common Kubernetes commands for your cheat sheet:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kubernetes Cheat Sheet: Common Commands")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Cluster and Nodes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check Cluster Info:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Nodes:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Pods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Pods:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Describe Pod:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe pod pod_name\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pod Logs:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs pod_name\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Deployments:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Deployments:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Describe Deployment:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe deployment deployment_name\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scale Deployment:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale deployment deployment_name --replicas=3\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Services:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Services:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get services\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Describe Service:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe service service_name\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Configuration:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List ConfigMaps:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get configmaps\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Describe ConfigMap:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe configmap configmap_name\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Secrets:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secrets\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Describe Secret:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe secret secret_name\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Namespaces:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Namespaces:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespaces\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Switch Namespace:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-context --current --namespace=new_namespace\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7. Scaling:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Horizontal Pod Autoscaler:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl autoscale deployment deployment_name --min=2 --max=5 --cpu-percent=80\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8. Updating Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apply Changes to Resource:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f resource.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rolling Update Deployment:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl set image deployment/deployment_name container_name=image:version\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9. Port Forwarding:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Forward Local Port to Pod:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward pod_name local_port:pod_port\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10. Deleting Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete Resource:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete resource_type resource_name\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11. Getting Help:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Get Help for a Command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --help\nkubectl <command> --help\n")))),(0,r.kt)("p",null,"These are essential Kubernetes commands that will help you manage your Kubernetes clusters, workloads, and resources effectively. Keep in mind that Kubernetes offers a vast set of features, so continue exploring to become proficient in orchestrating and managing containerized applications."))}u.isMDXComponent=!0}}]);