"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[1352],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2619:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={title:"01- setup Nginx"},c=void 0,l={unversionedId:"infrastructure/nginx/setup",id:"infrastructure/nginx/setup",title:"01- setup Nginx",description:"In order to",source:"@site/notes/home_lab_notes/infrastructure/nginx/setup.md",sourceDirName:"infrastructure/nginx",slug:"/infrastructure/nginx/setup",permalink:"/home_lab/infrastructure/nginx/setup",draft:!1,tags:[],version:"current",frontMatter:{title:"01- setup Nginx"},sidebar:"docs",previous:{title:"Keycloak",permalink:"/home_lab/infrastructure/keycloak"},next:{title:"02- Secure Nginx",permalink:"/home_lab/infrastructure/nginx/nginx-security-best-practices"}},s={},p=[{value:"How To Use the Official NGINX Docker Image",id:"how-to-use-the-official-nginx-docker-image",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to "),(0,i.kt)("h2",{id:"how-to-use-the-official-nginx-docker-image"},"How To Use the Official NGINX Docker Image"),(0,i.kt)("p",null,"To check the setup, we will run a get request with a custom header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Host: welcome.sharek.dev" -A "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0" -I \nhttp://localhost:8000 \n')))}m.isMDXComponent=!0}}]);