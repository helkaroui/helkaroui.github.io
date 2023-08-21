"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9004],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return t?n.createElement(f,i(i({ref:a},u),{},{components:t})):n.createElement(f,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2911:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const l={title:"OOP Basics"},i=void 0,s={unversionedId:"languages/scala/course/oop-basics",id:"languages/scala/course/oop-basics",title:"OOP Basics",description:"Equality in Scala",source:"@site/sections/developer/languages/scala/course/oop-basics.md",sourceDirName:"languages/scala/course",slug:"/languages/scala/course/oop-basics",permalink:"/developer/languages/scala/course/oop-basics",draft:!1,tags:[],version:"current",frontMatter:{title:"OOP Basics"},sidebar:"docs",previous:{title:"Akka Cluster",permalink:"/developer/languages/scala/akka/akka_cluster"},next:{title:"Get field names of a case class",permalink:"/developer/languages/scala/hacks & tricks/case-class-fields"}},o={},c=[{value:"Equality in Scala",id:"equality-in-scala",level:2},{value:"Default arguments",id:"default-arguments",level:2},{value:"Packages and Imports",id:"packages-and-imports",level:2},{value:"Infix, Postfix and Prefix Operators",id:"infix-postfix-and-prefix-operators",level:2},{value:"Infix",id:"infix",level:3},{value:"Postfix",id:"postfix",level:3},{value:"Prefix",id:"prefix",level:3},{value:"Convention for Operator Notation",id:"convention-for-operator-notation",level:3},{value:"Access Modifiers",id:"access-modifiers",level:2}],u={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"equality-in-scala"},"Equality in Scala"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'new String("Scala") == new String("Scala") // true\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Use "==" for equality'),(0,r.kt)("li",{parentName:"ul"},'No defference between "primitive" or "reference" like in Java'),(0,r.kt)("li",{parentName:"ul"},"There is no type check, because the compilation will not event happen if the types are not the same")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'new String("Scala") eq new String("Scala") // false\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Use "eq" and "ne" for checking identity (compare references)'),(0,r.kt)("li",{parentName:"ul"},"Comparison in Scala is null safe")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"null == null // true\n")),(0,r.kt)("h2",{id:"default-arguments"},"Default arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def name(first: String = "", last: String = ""): String\n\nval person = name("John")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lets you omit trailing arguments"),(0,r.kt)("li",{parentName:"ul"},"Can omit leading arguments by using named arguments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val person = name(last = "Doe")\n')),(0,r.kt)("h2",{id:"packages-and-imports"},"Packages and Imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import dev.sharek.tutorials.scalacars.Car\nimport dev.sharek.tutorials.scalacars._\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("em",{parentName:"li"},"Import")," if you don't want to use the fully qualified name"),(0,r.kt)("li",{parentName:"ul"},"Use the underscore ",(0,r.kt)("em",{parentName:"li"},"_")," to import all members of a package")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import dev.sharek.tutorials.scalacars.{YellowCar, RedCar}\nimport dev.sharek.tutorials.scalacars.{Car => OldCar}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import multiple members with {...}"),(0,r.kt)("li",{parentName:"ul"},"Rename imported objects to avoid conflicts")),(0,r.kt)("h2",{id:"infix-postfix-and-prefix-operators"},"Infix, Postfix and Prefix Operators"),(0,r.kt)("h3",{id:"infix"},"Infix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operators are methods used in operator notation"),(0,r.kt)("li",{parentName:"ul"},"Operator nation means ommitting dots and parentheses "),(0,r.kt)("li",{parentName:"ul"},"Methods with one parameter can be used in ",(0,r.kt)("strong",{parentName:"li"},"Infix")," notation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'"Hamza is a data engineer".split(" ")\n\n"Hamza is a data engineer" split " "\n')),(0,r.kt)("h3",{id:"postfix"},"Postfix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods without parameters can be used in ",(0,r.kt)("strong",{parentName:"li"},"Postfix")," notation"),(0,r.kt)("li",{parentName:"ul"},"In general, Postfix notation is depreceated ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'"Hamza is a data engineer".split(" ").size\n\n"Hamza is a data engineer" split " " size\n')),(0,r.kt)("h3",{id:"prefix"},"Prefix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods starting with ",(0,r.kt)("strong",{parentName:"li"},"unary_")," keyword followed by +, -, ! or ~ can be used in prefix notation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"! true\n\ntrue.unary_!\n")),(0,r.kt)("h3",{id:"convention-for-operator-notation"},"Convention for Operator Notation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Infix for methods with Symbolic names"),(0,r.kt)("li",{parentName:"ul"},"Use Prefix for unary_ methods"),(0,r.kt)("li",{parentName:"ul"},"Otherwise use dot notation")),(0,r.kt)("h2",{id:"access-modifiers"},"Access Modifiers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'class Hello {\n    private val message = "Hello"\n}\n\nclass Welcome {\n    protected val message = "Welcome"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, all members are ",(0,r.kt)("em",{parentName:"li"},"public")),(0,r.kt)("li",{parentName:"ul"},"Use private to restrict access"),(0,r.kt)("li",{parentName:"ul"},"Using protected makes the member only visible within the enclosing entity or subclasses")))}p.isMDXComponent=!0}}]);