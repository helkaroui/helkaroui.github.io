"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[1744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Storage"},s=void 0,l={unversionedId:"kubernetes/storage",id:"kubernetes/storage",title:"Storage",description:"Volumes",source:"@site/sections/containers/kubernetes/storage.md",sourceDirName:"kubernetes",slug:"/kubernetes/storage",permalink:"/containers/kubernetes/storage",draft:!1,tags:[],version:"current",frontMatter:{title:"Storage"},sidebar:"docs",previous:{title:"Quick start",permalink:"/containers/kubernetes/quick_start"},next:{title:"Node Affinity",permalink:"/containers/kubernetes/node_affinity"}},i={},u=[{value:"Volumes",id:"volumes",level:2},{value:"Background",id:"background",level:3},{value:"Volume Types",id:"volume-types",level:3},{value:"Ephemeral: emptyDir",id:"ephemeral-emptydir",level:4},{value:"Persistant: local",id:"persistant-local",level:4}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"volumes"},"Volumes"),(0,a.kt)("p",null,"In k8s pods are ephemeral which means on-disk files will be lost when container crashes. The kubelet restarts the container with a clean state.\nThe second important point is file sharing between pods."),(0,a.kt)("p",null,"K8s solves both of these problems with it's volume abstraction."),(0,a.kt)("h3",{id:"background"},"Background"),(0,a.kt)("p",null,"k8s supports many types of volumes and a pod can use any number of volume types simultaneously. Volume types can be :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ephemeral volume types: have a lifetime of the pod and k8s destroys it when the pod ceases to exist."),(0,a.kt)("li",{parentName:"ul"},"Persistant volume types: it's preserved across container restarts.")),(0,a.kt)("h3",{id:"volume-types"},"Volume Types"),(0,a.kt)("p",null,"Here are some examples of volume types, please refer to k8s ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#volume-types"},"documentation")," for the full list."),(0,a.kt)("h4",{id:"ephemeral-emptydir"},"Ephemeral: emptyDir"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"emptyDir")," volume is first created when a Pod is assigned to a node, and exists as long as that Pod is running on that node. When created the volume is initially empty."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Use cases :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"scratch space"),(0,a.kt)("li",{parentName:"ul"},"checkpointing a long computation for recovery from crashes"),(0,a.kt)("li",{parentName:"ul"},"holding files that a content-manager container fetches while a webserver container serves the data")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"emptyDir")," volumes are stored on whatever medium you chose, such as disk or SSD or network storage or memory."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory")," medium is chosen, k8s mounts a tmpfs (RAM based filesystem) for you instead. Unlike disk, tmpfs is very fast, but it's size will be count against your container's memory limit.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How to create an ",(0,a.kt)("inlineCode",{parentName:"em"},"emptyDir")," volume ?")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{14}","{14}":!0},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: test-pd\nspec:\n  containers:\n  - image: k8s.gcr.io/test-webserver\n    name: test-container\n    volumeMounts:\n    - mountPath: /cache\n      name: emptydir-volume\n  volumes:\n  - name: emptydir-volume\n    emptyDir:\n      medium: "Memory"\n')),(0,a.kt)("h4",{id:"persistant-local"},"Persistant: local"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," volume represents a mounted local storage device such as a disk, partition or directory.\nLocal volumes can only be used as a statically created PersistentVolume. Dynamic provisioning is not supported."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"local")," volumes are used in a durable and portable manner without manually scheduling pods to nodes. The system is aware of the volume's node constraints by looking at the node affinity on the PersistentVolume."),(0,a.kt)("p",null,"The following example shows a ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," using a ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," volume and ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeAffinity"),":\n1- Add a label to a node :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get nodes --show-labels\n")),(0,a.kt)("p",null,"The output is similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAME      STATUS    ROLES    AGE     VERSION        LABELS\nworker0   Ready     <none>   1d      v1.13.0        ...,kubernetes.io/hostname=worker0\nworker1   Ready     <none>   1d      v1.13.0        ...,kubernetes.io/hostname=worker1\ndata-node   Ready     <none>   1d      v1.13.0        ...,kubernetes.io/hostname=data-node\n")),(0,a.kt)("p",null,"2- Chose one of your nodes, and add a label to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl label nodes <your-node-name> disktype=ssd\n")),(0,a.kt)("p",null,"3- Apply your PersistentVolume :\nYou must set a PersistentVolume nodeAffinity when using local volumes. The Kubernetes scheduler uses the PersistentVolume nodeAffinity to schedule these Pods to the correct node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: example-pv\nspec:\n  capacity:\n    storage: 100Gi\n  volumeMode: Filesystem\n  accessModes:\n  - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: local-storage\n  local:\n    path: /mnt/disks/ssd1\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n      - matchExpressions:\n        - key: disktype\n          operator: In\n          values:\n          - ssd\n")))}m.isMDXComponent=!0}}]);