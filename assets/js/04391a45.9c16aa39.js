(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,l(l({ref:t},c),{},{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(131)),i={slug:"What I learned while setting up my Kubernetes Cluster",title:"What I learned while setting up my Kubernetes Cluster",author:"Hamza EL KAROUI",author_title:"Data Engineer @ DataFab.io",author_url:"https://github.com/helkaroui",author_image_url:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",tags:["sharek"]},l={permalink:"/blog/What I learned while setting up my Kubernetes Cluster",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-03-30-kubernetes-rex.md",source:"@site/blog/2021-03-30-kubernetes-rex.md",description:"Rex on setting up a Kubernetes Cluster",date:"2021-03-30T00:00:00.000Z",formattedDate:"March 30, 2021",tags:[{label:"sharek",permalink:"/blog/tags/sharek"}],title:"What I learned while setting up my Kubernetes Cluster",readingTime:.135,truncated:!1,prevItem:{title:"Install docker compose on RPI",permalink:"/blog/Install docker compose on RPI"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},u=[{value:"Rex on setting up a Kubernetes Cluster",id:"rex-on-setting-up-a-kubernetes-cluster",children:[]}],c={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"rex-on-setting-up-a-kubernetes-cluster"},"Rex on setting up a Kubernetes Cluster"),Object(o.b)("p",null,"In Mars 2021, I decided to build my own on-prem cluster that hosts all my services and applications.\nTBC"))}s.isMDXComponent=!0}}]);