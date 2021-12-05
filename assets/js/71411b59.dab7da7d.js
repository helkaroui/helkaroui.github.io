"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[575],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),y=i,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6959:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Quick start"},s={unversionedId:"asyncio/quick_start",id:"asyncio/quick_start",isDocsHomePage:!1,title:"Quick start",description:"asyncio is a library to write concurrent code using the async/await syntax. It provide high-performance network and web-servers, database connection libraries, distributed task queues, etc.",source:"@site/notes/python_notes/asyncio/quick_start.md",sourceDirName:"asyncio",slug:"/asyncio/quick_start",permalink:"/python/asyncio/quick_start",version:"current",frontMatter:{title:"Quick start"},sidebar:"docs",previous:{title:"Cheat Sheet",permalink:"/python/cheat_sheet"},next:{title:"Quick Start",permalink:"/python/fastapi/quick_start"}},u=[{value:"High-level APIs",id:"high-level-apis",children:[{value:"Coroutines and Tasks",id:"coroutines-and-tasks",children:[]},{value:"Queues",id:"queues",children:[]},{value:"Streams",id:"streams",children:[]}]},{value:"Example of project using Asyncio",id:"example-of-project-using-asyncio",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"asyncio is a library to write concurrent code using the async/await syntax. It provide high-performance network and web-servers, database connection libraries, distributed task queues, etc."),(0,o.kt)("p",null,"Here is a simple Hello world application using asyncio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n\nasync def main():\n    print('Hello ...')\n    await asyncio.sleep(1)\n    print('... World!')\n\n# Python 3.7+\nasyncio.run(main())\n")),(0,o.kt)("h2",{id:"high-level-apis"},"High-level APIs"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h3",{id:"coroutines-and-tasks"},"Coroutines and Tasks"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h3",{id:"queues"},"Queues"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h3",{id:"streams"},"Streams"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h2",{id:"example-of-project-using-asyncio"},"Example of project using Asyncio"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"TBD"))}p.isMDXComponent=!0}}]);