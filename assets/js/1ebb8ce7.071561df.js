"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Create a Spark plugin",description:"Extend Spark with custom plugin",image:"/img/plugins.jpg",keywords:["spark","internal","plugins"]},o=void 0,s={unversionedId:"spark/customization/create-plugin",id:"spark/customization/create-plugin",title:"Create a Spark plugin",description:"Extend Spark with custom plugin",source:"@site/sections/data_processing/spark/04-customization/create-plugin.md",sourceDirName:"spark/04-customization",slug:"/spark/customization/create-plugin",permalink:"/data_processing/spark/customization/create-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"Create a Spark plugin",description:"Extend Spark with custom plugin",image:"/img/plugins.jpg",keywords:["spark","internal","plugins"]},sidebar:"docs",previous:{title:"Plugin Framework",permalink:"/data_processing/spark/internals/plugin-framework"},next:{title:"Databricks Certified Associate Developer for Apache Spark Exam questions",permalink:"/data_processing/spark/articles/databricks-spark-developer-associate-exam"}},l={},p=[{value:"Spark Plugin Framework",id:"spark-plugin-framework",level:2},{value:"Features :",id:"features-",level:2},{value:"Internals :",id:"internals-",level:2},{value:"Simple Plugin",id:"simple-plugin",level:3},{value:"Metrics Connector",id:"metrics-connector",level:3},{value:"Custom Metrics UI Tab",id:"custom-metrics-ui-tab",level:3},{value:"Control Spark Streaming Application",id:"control-spark-streaming-application",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"spark-plugin-framework"},"Spark Plugin Framework"),(0,a.kt)("p",null,"It was introduced in Spark 3.0.\nThis plugin allows users to plug custom code to the driver or/and worker instances at start time. This allows customization to be fairly simple and straightforward. It allows to have custom metrics tracking and more control over the Spark application."),(0,a.kt)("h2",{id:"features-"},"Features :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Access to the Spark Context"),"\nSpark plugin gives access to the Spark Context instance and thus a way in to application metrics.\n",(0,a.kt)("strong",{parentName:"p"},"Ability to Communicate Between Driver and Executor"),"\nSpark plugin framework exposes a RPC communication option between driver and executor plugins. This communication can be used to send any user defined messages between executors and driver.\n",(0,a.kt)("strong",{parentName:"p"},"Ability to push dynamic events to driver and executor"),"\nSpark plugin framework allows user to run arbitrary listeners on driver or executor side. This allows for a communication to spark JVM\u2019s from the external application. As these plugins have access to spark context, this will allow for dynamic control of the execution from outside which is very powerful."),(0,a.kt)("h2",{id:"internals-"},"Internals :"),(0,a.kt)("p",null,"To understand the internals Plugin Framework, see this ",(0,a.kt)("a",{parentName:"p",href:"./../03-internals/plugin-framework.md"},"article")),(0,a.kt)("h3",{id:"simple-plugin"},"Simple Plugin"),(0,a.kt)("p",null,"TBC"),(0,a.kt)("h3",{id:"metrics-connector"},"Metrics Connector"),(0,a.kt)("p",null,"TBC"),(0,a.kt)("h3",{id:"custom-metrics-ui-tab"},"Custom Metrics UI Tab"),(0,a.kt)("p",null,"TBC"),(0,a.kt)("h3",{id:"control-spark-streaming-application"},"Control Spark Streaming Application"),(0,a.kt)("p",null,"TBC"))}m.isMDXComponent=!0}}]);