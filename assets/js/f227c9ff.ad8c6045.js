(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(131)),i={title:"Nginx"},a={unversionedId:"services/nginx",id:"services/nginx",isDocsHomePage:!1,title:"Nginx",description:"In order to",source:"@site/notes/home_cloud_notes/services/nginx.md",slug:"/services/nginx",permalink:"/home_cloud/services/nginx",version:"current",sidebar:"docs",previous:{title:"Keycloak",permalink:"/home_cloud/services/keycloak"},next:{title:"Minio",permalink:"/home_cloud/services/minio"}},l=[{value:"How To Use the Official NGINX Docker Image",id:"how-to-use-the-official-nginx-docker-image",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In order to "),Object(c.b)("h2",{id:"how-to-use-the-official-nginx-docker-image"},"How To Use the Official NGINX Docker Image"),Object(c.b)("p",null,"To check the setup, we will run a get request with a custom header:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},'curl -H "Host: welcome.sharek.dev" -A "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0" -I \nhttp://localhost:8000 \n')))}s.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||c;return n?o.a.createElement(d,a(a({ref:t},u),{},{components:n})):o.a.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);