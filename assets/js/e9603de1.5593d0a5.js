"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9004],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(a),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"OOP Basics"},o=void 0,l={unversionedId:"languages/scala/course/oop-basics",id:"languages/scala/course/oop-basics",title:"OOP Basics",description:"Infix, Postfix and Prefix Operators",source:"@site/sections/developer/languages/scala/course/oop-basics.md",sourceDirName:"languages/scala/course",slug:"/languages/scala/course/oop-basics",permalink:"/developer/languages/scala/course/oop-basics",draft:!1,tags:[],version:"current",frontMatter:{title:"OOP Basics"},sidebar:"docs",previous:{title:"Akka Cluster",permalink:"/developer/languages/scala/akka/akka_cluster"},next:{title:"Get field names of a case class",permalink:"/developer/languages/scala/hacks & tricks/case-class-fields"}},s={},c=[{value:"Infix, Postfix and Prefix Operators",id:"infix-postfix-and-prefix-operators",level:2},{value:"Infix",id:"infix",level:3},{value:"Postfix",id:"postfix",level:3},{value:"Prefix",id:"prefix",level:3},{value:"Convention for Operator Notation",id:"convention-for-operator-notation",level:3},{value:"Equality in Scala",id:"equality-in-scala",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"infix-postfix-and-prefix-operators"},"Infix, Postfix and Prefix Operators"),(0,r.kt)("h3",{id:"infix"},"Infix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operators are methods used in operator notation"),(0,r.kt)("li",{parentName:"ul"},"Operator nation means ommitting dots and parentheses "),(0,r.kt)("li",{parentName:"ul"},"Methods with one parameter can be used in ",(0,r.kt)("strong",{parentName:"li"},"Infix")," notation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'"Hamza is a data engineer".split(" ")\n\n"Hamza is a data engineer" split " "\n')),(0,r.kt)("h3",{id:"postfix"},"Postfix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods without parameters can be used in ",(0,r.kt)("strong",{parentName:"li"},"Postfix")," notation"),(0,r.kt)("li",{parentName:"ul"},"In general, Postfix notation is depreceated ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'"Hamza is a data engineer".split(" ").size\n\n"Hamza is a data engineer" split " " size\n')),(0,r.kt)("h3",{id:"prefix"},"Prefix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods starting with ",(0,r.kt)("strong",{parentName:"li"},"unary_")," keyword followed by +, -, ! or ~ can be used in prefix notation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"! true\n\ntrue.unary_!\n")),(0,r.kt)("h3",{id:"convention-for-operator-notation"},"Convention for Operator Notation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Infix for methods with Symbolic names"),(0,r.kt)("li",{parentName:"ul"},"Use Prefix for unary_ methods"),(0,r.kt)("li",{parentName:"ul"},"Otherwise use dot notation")),(0,r.kt)("h2",{id:"equality-in-scala"},"Equality in Scala"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'new String("Scala") == new String("Scala")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Use "==" for equality'),(0,r.kt)("li",{parentName:"ul"},'No defference between "primitive" or "reference" like in Java'),(0,r.kt)("li",{parentName:"ul"},"There is no type check, because the compilation will not event happen if the types are not the same")))}u.isMDXComponent=!0}}]);