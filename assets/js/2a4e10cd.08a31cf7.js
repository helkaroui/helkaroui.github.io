"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[4262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Introduction"},l={unversionedId:"functional_programming/introduction",id:"functional_programming/introduction",isDocsHomePage:!1,title:"Introduction",description:"Functional Programming (FP for short) is a programming style that focuses on the functions in the program, for me a",source:"@site/notes/scala_notes/functional_programming/introduction.mdx",sourceDirName:"functional_programming",slug:"/functional_programming/introduction",permalink:"/scala/functional_programming/introduction",version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Overview",permalink:"/scala/overview"},next:{title:"Monads",permalink:"/scala/functional_programming/monads"}},c=[{value:"Concepts",id:"concepts",children:[{value:"Pure Functions",id:"pure-functions",children:[]},{value:"Variables are Immutable",id:"variables-are-immutable",children:[]},{value:"Referential Transparency",id:"referential-transparency",children:[]},{value:"Recursion",id:"recursion",children:[]},{value:"Functions are First-Class and can be Higher-Order",id:"functions-are-first-class-and-can-be-higher-order",children:[]}]},{value:"Advantages",id:"advantages",children:[]},{value:"Disadvantages",id:"disadvantages",children:[]},{value:"Applications",id:"applications",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Functional Programming (FP for short) is a programming style that focuses on the functions in the program, for me a\nfunction may has a large spectrum of definitions. Pure FP programmers, stick by the mathematical definition that is\nfunctions are relations that maps arguments to results. Others admit that functions may have side effects."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"But what's a side effect ?")," A side effect refers simply to the modification of some kind of state - for instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Changing the value of a variable;"),(0,i.kt)("li",{parentName:"ul"},"Writing some data to disk;"),(0,i.kt)("li",{parentName:"ul"},"Enabling or disabling a button in the User Interface.")),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"FP comes with 5 important concepts that we will explain privily :"),(0,i.kt)("h3",{id:"pure-functions"},"Pure Functions"),(0,i.kt)("p",null,"A function is pure if it has two important properties :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deterministic: it produces the same output with the same arguments"),(0,i.kt)("li",{parentName:"ul"},"Immutable : it has no observable effect on the execution of the program other thant compute it's result. In other\nworlds, it doesn't modify any arguments, variables outside it's scope or have hidden I/O.")),(0,i.kt)("h3",{id:"variables-are-immutable"},"Variables are Immutable"),(0,i.kt)("p",null,"Variables are immutable i.e. it isn\u2019t possible to modify a variable once it has been initialized. Though we can create\na new variable, modifying existing variables is not allowed."),(0,i.kt)("h3",{id:"referential-transparency"},"Referential Transparency"),(0,i.kt)("p",null,"Variables once defined in a functional programming language aren\u2019t allowed to change the value that they are holding\nthroughout the execution of the program. This is known as referential transparency. It assures that the same language\nexpression gives the same output."),(0,i.kt)("h3",{id:"recursion"},"Recursion"),(0,i.kt)("p",null,"In FP there is no for and while loops. Instead, it relies heavily on recursion, since each iteration of a loop will\napply the same function until a specific condition is satisfied."),(0,i.kt)("h3",{id:"functions-are-first-class-and-can-be-higher-order"},"Functions are First-Class and can be Higher-Order"),(0,i.kt)("p",null,"Functions in the functional programming style are treated as variables. Hence, they are first-class functions.\nThese first-class functions are allowed to be passed to other functions as parameters or returned from functions or\nstored in data structures.\nA higher-order function is a function that takes other functions as arguments and/or returns functions. First-Class\nfunctions can be higher-order functions in functional programming languages."),(0,i.kt)("h2",{id:"advantages"},"Advantages"),(0,i.kt)("p",null,"Let's return to the subject, ",(0,i.kt)("em",{parentName:"p"},"why would I learn functional programming ?")," - FP helps to solve problems effectively and\nimproves modularity."),(0,i.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this article, we introduced FP and explained what FP is and why you may want to use it. The benefits of this\nprogramming style will become clearer over the course of this series of articles. In the next couple of articles we will\ndeep dive into the fundamentals of FP and we will apply it's concepts and principles throught a series of coding\nexercises. We'll be using Scala programming language to showcase the implementations, but keep in mind that you can use\nthe programming language of you choice."))}p.isMDXComponent=!0}}]);