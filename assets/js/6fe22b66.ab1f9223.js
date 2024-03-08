"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[7355],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),s=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(a.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,y=p["".concat(a,".").concat(g)]||p[g]||f[g]||c;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5041:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},metadata:function(){return a},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],u={title:"Configure k8s cluster"},a={unversionedId:"kubernetes/configure_k8s_cluster",id:"kubernetes/configure_k8s_cluster",isDocsHomePage:!1,title:"Configure k8s cluster",description:"Configure a private docker registry:",source:"@site/notes/cloud_notes/kubernetes/configure_k8s_cluster.md",sourceDirName:"kubernetes",slug:"/kubernetes/configure_k8s_cluster",permalink:"/cloud/kubernetes/configure_k8s_cluster",version:"current",frontMatter:{title:"Configure k8s cluster"}},s=[{value:"Configure a private docker registry:",id:"configure-a-private-docker-registry",children:[]}],l={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"configure-a-private-docker-registry"},"Configure a private docker registry:"),(0,c.kt)("p",null,"The Kubernetes cluster uses the Secret type of docker-registry to authenticate with a container registry to retrieve a private image there.\nIf you have already launched docker login, you can copy these credentials to Kubernetes "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic regcred \\\n    --from-file=.dockerconfigjson=/home/<your-user>/.docker/config.json \\\n    --type=kubernetes.io/dockerconfigjson\n")))}f.isMDXComponent=!0}}]);