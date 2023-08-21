"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),g=r,h=u["".concat(i,".").concat(g)]||u[g]||m[g]||s;return a?n.createElement(h,c(c({ref:t},p),{},{components:a})):n.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<s;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={title:"Pattern matching with Java objects"},c=void 0,o={unversionedId:"languages/scala/hacks & tricks/pattern-matching-java",id:"languages/scala/hacks & tricks/pattern-matching-java",title:"Pattern matching with Java objects",description:"Pattern matching with Java objects",source:"@site/sections/developer/languages/scala/hacks & tricks/pattern-matching-java.md",sourceDirName:"languages/scala/hacks & tricks",slug:"/languages/scala/hacks & tricks/pattern-matching-java",permalink:"/developer/languages/scala/hacks & tricks/pattern-matching-java",draft:!1,tags:[],version:"current",frontMatter:{title:"Pattern matching with Java objects"},sidebar:"docs",previous:{title:"Get field names of a case class",permalink:"/developer/languages/scala/hacks & tricks/case-class-fields"},next:{title:"Best Practices",permalink:"/developer/languages/python/best_practices"}},i={},l=[{value:"Pattern matching with Java objects",id:"pattern-matching-with-java-objects",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pattern-matching-with-java-objects"},"Pattern matching with Java objects"),(0,r.kt)("p",null,"Let's say that we have a pre-defined java class :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class Person {\n    String name;\n    int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n")),(0,r.kt)("p",null,"And assuming we can't refactor this class into a scala object. Right now we can't apply pattern matching with instances of this class. Because pattern matching is to be applied only on some groups of types in the Scala library:\nconstants\nstrings\nsingletons\ncase classes\ntuples\nsome collections\ncombinations of the above"),(0,r.kt)("p",null,"Here is the solution :\nWe can define an ",(0,r.kt)("inlineCode",{parentName:"p"},"unapply")," method that is used to decompose the instance into a scala type from the above list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object Person {\n    def unapply(person: Person): (String, Int) = (person.name, person.age)\n}\n")),(0,r.kt)("p",null,"This is an example of an unapply method which takes an instance of Person as an argument, and it will return a tuple of the instance variables."),(0,r.kt)("p",null,"A method that has this signature will suddenly allow us to write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val adam = new Person("Adam", 18)\nval adamStatus = adam match {\n  case Person(n, a) => s"Adam was successfully deconstructed: $n, $a"\n}\n')))}u.isMDXComponent=!0}}]);