"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[5861],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return t?a.createElement(g,s(s({ref:n},u),{},{components:t})):a.createElement(g,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6453:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],c={title:"Hacks & Tricks"},i=void 0,l={unversionedId:"languages/scala/hacks",id:"languages/scala/hacks",title:"Hacks & Tricks",description:"Pattern matching with Java objects",source:"@site/sections/developer/languages/scala/hacks.md",sourceDirName:"languages/scala",slug:"/languages/scala/hacks",permalink:"/developer/languages/scala/hacks",draft:!1,tags:[],version:"current",frontMatter:{title:"Hacks & Tricks"}},u={},p=[{value:"Pattern matching with Java objects",id:"pattern-matching-with-java-objects",level:2}],m={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pattern-matching-with-java-objects"},"Pattern matching with Java objects"),(0,o.kt)("p",null,"Let's say that we have a pre-defined java class :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class Person {\n    String name;\n    int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n")),(0,o.kt)("p",null,"And assuming we can't refactor this class into a scala object. Right now we can't apply pattern matching with instances of this class. Because pattern matching is to be applied only on some groups of types in the Scala library:\nconstants\nstrings\nsingletons\ncase classes\ntuples\nsome collections\ncombinations of the above"),(0,o.kt)("p",null,"Here is the solution :\nWe can define an ",(0,o.kt)("inlineCode",{parentName:"p"},"unapply")," method that is used to decompose the instance into a scala type from the above list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object Person {\n    def unapply(person: Person): (String, Int) = (person.name, person.age)\n}\n")),(0,o.kt)("p",null,"This is an example of an unapply method which takes an instance of Person as an argument, and it will return a tuple of the instance variables."),(0,o.kt)("p",null,"A method that has this signature will suddenly allow us to write the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val adam = new Person("Adam", 18)\nval adamStatus = adam match {\n  case Person(n, a) => s"Adam was successfully deconstructed: $n, $a"\n}\n')))}f.isMDXComponent=!0}}]);