"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[434],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Deep dive in Kafka internals"},c={unversionedId:"kafka/internals/deep_dive",id:"kafka/internals/deep_dive",isDocsHomePage:!1,title:"Deep dive in Kafka internals",description:"https://soat.developpez.com/tutoriels/bigdata/apprendre-kafka-concepts-fonctionnement/",source:"@site/notes/big_data_notes/kafka/internals/deep_dive.mdx",sourceDirName:"kafka/internals",slug:"/kafka/internals/deep_dive",permalink:"/big_data/kafka/internals/deep_dive",version:"current",frontMatter:{title:"Deep dive in Kafka internals"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://soat.developpez.com/tutoriels/bigdata/apprendre-kafka-concepts-fonctionnement/"},"https://soat.developpez.com/tutoriels/bigdata/apprendre-kafka-concepts-fonctionnement/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://assets.confluent.io/m/1b509accf21490f0/original/20170707-EB-Confluent_Kafka_Definitive-Guide_Complete.pdf"},"https://assets.confluent.io/m/1b509accf21490f0/original/20170707-EB-Confluent_Kafka_Definitive-Guide_Complete.pdf")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"concepts"),(0,o.kt)("li",{parentName:"ul"},"message format "),(0,o.kt)("li",{parentName:"ul"},"log file structure"),(0,o.kt)("li",{parentName:"ul"},"topics "),(0,o.kt)("li",{parentName:"ul"},"partitions & replicas"),(0,o.kt)("li",{parentName:"ul"},"how replication works in cluster mode"),(0,o.kt)("li",{parentName:"ul"},"consumer groups")))}f.isMDXComponent=!0}}]);