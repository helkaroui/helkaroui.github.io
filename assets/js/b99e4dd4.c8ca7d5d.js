"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[6653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Quick start"},l=void 0,s={unversionedId:"languages/scala/quick_start",id:"languages/scala/quick_start",title:"Quick start",description:"In this section you will find interesting notes covering some of the most interesting topics in software engineering.",source:"@site/sections/developer/languages/scala/01-quick_start.md",sourceDirName:"languages/scala",slug:"/languages/scala/quick_start",permalink:"/developer/languages/scala/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick start"},sidebar:"docs",next:{title:"Akka Cluster",permalink:"/developer/languages/scala/akka/akka_cluster"}},i={},c=[{value:"Install SBT",id:"install-sbt",level:2},{value:"Create a &quot;Hello world&quot; project",id:"create-a-hello-world-project",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section you will find interesting notes covering some of the most interesting topics in software engineering.\nThese notes helped me improve my understanding of many concepts and principles all throughout my learning journey.\nWith these notes, you'll find code examples and simple projects used in these notes."),(0,a.kt)("p",null,"The following topics are covered :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Functional Programing"),(0,a.kt)("li",{parentName:"ul"},"Actor model"),(0,a.kt)("li",{parentName:"ul"},"Reactive Programing")),(0,a.kt)("p",null,"Feel free to give your feedback."),(0,a.kt)("h2",{id:"install-sbt"},"Install SBT"),(0,a.kt)("p",null,"Sbt stands for Simple Build Tool. It is a simple, flexible and scala native build tool.\nTo download sbt on linux, run the following commands :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | sudo tee /etc/apt/sources.list.d/sbt.list\necho "deb https://repo.scala-sbt.org/scalasbt/debian /" | sudo tee /etc/apt/sources.list.d/sbt_old.list\ncurl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add\nsudo apt-get update\nsudo apt-get install sbt\n')),(0,a.kt)("h2",{id:"create-a-hello-world-project"},'Create a "Hello world" project'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Init an empty scala project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sbt new scala/scala-seed.g8\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt")," in the terminal to open the interactive console")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To run the main class, run ",(0,a.kt)("inlineCode",{parentName:"p"},"run")))))}d.isMDXComponent=!0}}]);