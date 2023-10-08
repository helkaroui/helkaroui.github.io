"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[4421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"how-to-crate-a-proof-of-concept",title:"How to achieve a Proof Of Concept",authors:["hamza"],tags:["new tech"]},i=void 0,c={permalink:"/blog/how-to-crate-a-proof-of-concept",editUrl:"https://github.com/helkaroui/helkaroui.github.io/edit/develop/blog/blog/2023-01-13-how-to-crate-a-proof-of-concept.md",source:"@site/blog/2023-01-13-how-to-crate-a-proof-of-concept.md",title:"How to achieve a Proof Of Concept",description:"A proof of concept (POC) is an exercise in which work is focused on determining whether an idea can be turned into a reality. A POC's goal is not to seek market demand for the concept or choose the best way to produce it. Rather than focusing on building or developing the idea, it tests whether it's viable. In addition, it enables those involved in the proof-of-concept exercise to explore its financial potential.",date:"2023-01-13T00:00:00.000Z",formattedDate:"January 13, 2023",tags:[{label:"new tech",permalink:"/blog/tags/new-tech"}],readingTime:.6066666666666667,hasTruncateMarker:!1,authors:[{name:"Hamza EL KAROUI",title:"Freelance, Senior Data Engineer / DevOps",url:"https://github.com/helkaroui",email:"helkarou@gmail.com",imageURL:"https://images.weserv.nl/?url=avatars.githubusercontent.com/u/22795356?s=96&v=4&fit=cover&mask=circle&maxage=7d",key:"hamza"}],frontMatter:{slug:"how-to-crate-a-proof-of-concept",title:"How to achieve a Proof Of Concept",authors:["hamza"],tags:["new tech"]},prevItem:{title:"Ideas Board: #1",permalink:"/blog/ideas-board"},nextItem:{title:"New year learning plan",permalink:"/blog/new-year-learning-plan"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A proof of concept (POC) is an exercise in which work is focused on determining whether an idea can be turned into a reality. A POC's goal is not to seek market demand for the concept or choose the best way to produce it. Rather than focusing on building or developing the idea, it tests whether it's viable. In addition, it enables those involved in the proof-of-concept exercise to explore its financial potential."),(0,o.kt)("p",null,"A POC typically requires time or other resources, such as supporting technologies or necessary physical components. Going through this process, however, enables companies to determine an idea's practicality before putting production-level resources behind an untested hypothesis."),(0,o.kt)("p",null,"My proof-of-concept process should include the following:"),(0,o.kt)("p",null,"1- Demonstrate the need for the product"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Use cases\n- Known advantages & disadvantages\n")),(0,o.kt)("p",null,"2- Compare with alternatives\n3- Describe architecture"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Principles\n- Components\n- Architecture\n")),(0,o.kt)("p",null,"4- Create a reproduciable test environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- create a git repository\n- create a dockerized test environement\n- describe setup process\n")),(0,o.kt)("p",null,"5- Gather and document feedback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Setup considerations\n- Encountered difficulties\n- Limits & use cases feedback\n")))}h.isMDXComponent=!0}}]);