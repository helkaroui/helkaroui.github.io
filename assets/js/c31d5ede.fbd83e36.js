"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[1076],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},942:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Used Cars Comparator"},c={unversionedId:"infrastructure/compare_used_cars",id:"infrastructure/compare_used_cars",isDocsHomePage:!1,title:"Used Cars Comparator",description:"This article describes a webapp that I developed to help me in my search for the most affordable used car in the market.",source:"@site/notes/home_lab_notes/infrastructure/compare_used_cars.md",sourceDirName:"infrastructure",slug:"/infrastructure/compare_used_cars",permalink:"/home_lab/infrastructure/compare_used_cars",version:"current",frontMatter:{title:"Used Cars Comparator"},sidebar:"docs",previous:{title:"Minio",permalink:"/home_lab/infrastructure/minio"},next:{title:"Docker cheatsheet",permalink:"/home_lab/tutorials/docker_cheatsheet"}},s=[{value:"The Goal",id:"the-goal",children:[]},{value:"Design phase",id:"design-phase",children:[{value:"Scrapper",id:"scrapper",children:[]},{value:"ETL",id:"etl",children:[]},{value:"WebApp",id:"webapp",children:[]}]},{value:"Development phase",id:"development-phase",children:[{value:"1- Scrapper",id:"1--scrapper",children:[]},{value:"2- ETL",id:"2--etl",children:[]}]}],p={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article describes a webapp that I developed to help me in my search for the most affordable used car in the market."),(0,o.kt)("h2",{id:"the-goal"},"The Goal"),(0,o.kt)("p",null,"In Mars 2021, I decided to buy a second hand car, since I wanted to discover more France's cities. The goal was to buy\nan affordable car, suitable for long distances and, since I'll make hundreds of miles each weekend, It should be\neconomical. "),(0,o.kt)("p",null,"My search was essentially focussed on p2p cars marketplace like : LaCentrale, LeBonCoin, L'argus ... etc. It was a never\nending comparison. For that reason, I wanted to have an automated service, in which I can define custom scoring system,\nthat also send alerts whenever a new opportunity is detected."),(0,o.kt)("h2",{id:"design-phase"},"Design phase"),(0,o.kt)("p",null,"Even it's a simple application, I wanted to develop a scalable, production ready architecture that is easily deployed to\nkubernetes. Hence, all my application's components were dockerized. For the architecture, I went with the following\ndesign choice :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scrapper : The component that scraps websites and save new results to a database."),(0,o.kt)("li",{parentName:"ul"},"ETL Module : The component that loads then enrich the scrapped data and saves the results to an indexed NoSQL\ndatabase."),(0,o.kt)("li",{parentName:"ul"},"WebApp : The presentation layer of the application. It also performs complex query against the NoSQL database.")),(0,o.kt)("h3",{id:"scrapper"},"Scrapper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Language : Scala, with a purely functional approach."),(0,o.kt)("li",{parentName:"ul"},"Concurrency is ensured with the use of ZIO framework (a cool library that handles concurrent programming like charm).")),(0,o.kt)("h3",{id:"etl"},"ETL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Language : Scala / Spark"),(0,o.kt)("li",{parentName:"ul"},"Approach : The aim is to develop a general purpose framework to compute scoring & aggregations out of the box. The\nentire development effort could be ported as a separate library, that could be reused later-on. Some example of\nfunctionalities include : Scoring an entity, RollDown, RollUp. Aggregated Views, ScoreCards & Graph based scores.")),(0,o.kt)("h3",{id:"webapp"},"WebApp"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Language : Scala with Play Framework (or Spring Boot) for backend & Angular for front end.")),(0,o.kt)("h2",{id:"development-phase"},"Development phase"),(0,o.kt)("h3",{id:"1--scrapper"},"1- Scrapper"),(0,o.kt)("h3",{id:"2--etl"},"2- ETL"))}u.isMDXComponent=!0}}]);