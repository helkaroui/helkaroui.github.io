"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[1325],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=i(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],l={title:"Get field names of a case class"},c=void 0,i={unversionedId:"languages/scala/tips/case-class-fields",id:"languages/scala/tips/case-class-fields",title:"Get field names of a case class",description:"Often case classes represent the data moved further in the pipeline. For example, they can represent JSON data that will be written into your data warehouse storage or an RDBMS.",source:"@site/sections/developer/languages/scala/tips/case-class-fields.md",sourceDirName:"languages/scala/tips",slug:"/languages/scala/tips/case-class-fields",permalink:"/developer/languages/scala/tips/case-class-fields",draft:!1,tags:[],version:"current",frontMatter:{title:"Get field names of a case class"},sidebar:"docs",previous:{title:"Akka Cluster",permalink:"/developer/languages/scala/akka/akka_cluster"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Often case classes represent the data moved further in the pipeline. For example, they can represent JSON data that will be written into your data warehouse storage or an RDBMS."),(0,s.kt)("p",null,"If for whatever reason like defining a CREATE TABLE... expression with these fields, you need to get all fields from the case class, you can print them quite easily with the help of reflection:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'  \n\nimport scala.reflect.runtime.universe._\n\ncase class MyData(column1: String, column2: Integer)\n\nobject TestFieldsPrinting {\n\n    def classAccessors[T: TypeTag]: List[MethodSymbol] = typeOf[T].members.collect {\n        case m: MethodSymbol if m.isCaseAccessor => m\n    }.toList\n\n    def main(args: Array[String]): Unit = {\n        val fields = classAccessors[MyData].map(field => field.name.toString).sorted.mkString(", ")\n        println(s"fields=${fields}")\n\n        assert(fields == "column1, column2")\n    }\n\n}\n')))}d.isMDXComponent=!0}}]);