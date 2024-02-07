"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[748],{5788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=y(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,g=s["".concat(l,".").concat(d)]||s[d]||p[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var y={};for(var l in n)hasOwnProperty.call(n,l)&&(y[l]=n[l]);y.originalType=e,y[s]="string"==typeof e?e:a,i[1]=y;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>y,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(5072),a=(t(1504),t(5788)),o=t(964);const i={title:"ReduceByKey vs GroupByKey"},y=void 0,l={unversionedId:"spark/optimizations/reducebykey_vs_groupbykey",id:"spark/optimizations/reducebykey_vs_groupbykey",title:"ReduceByKey vs GroupByKey",description:"In this article we are demystifying two known Spark Operators: reduceByKey and groupByKey",source:"@site/sections/data_processing/spark/02-optimizations/reducebykey_vs_groupbykey.mdx",sourceDirName:"spark/02-optimizations",slug:"/spark/optimizations/reducebykey_vs_groupbykey",permalink:"/data_processing/spark/optimizations/reducebykey_vs_groupbykey",draft:!1,tags:[],version:"current",frontMatter:{title:"ReduceByKey vs GroupByKey"},sidebar:"docs",previous:{title:"Quick wins",permalink:"/data_processing/spark/optimizations/quick_wins"},next:{title:"Overview",permalink:"/data_processing/spark/internals/index"}},u={},c=[{value:"groupByKey",id:"groupbykey",level:2},{value:"reduceByKey",id:"reducebykey",level:2},{value:"When to avoid <code>groupByKey</code> ?",id:"when-to-avoid-groupbykey-",level:2},{value:"When to avoid <code>reduceByKey</code> ?",id:"when-to-avoid-reducebykey-",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In this article we are demystifying two known Spark Operators: ",(0,a.yg)("inlineCode",{parentName:"p"},"reduceByKey")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"groupByKey")),(0,a.yg)("h2",{id:"groupbykey"},"groupByKey"),(0,a.yg)("p",null,"Imagine a Dataset distributed in 3 partitions. The dataset consist of a transactional table with in each row the revenue\nof a store located in different countries. We want to sum these revenues at country level."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="GroupByKey example"',title:'"GroupByKey','example"':!0},'case class Record(country: String, revenue: Double)\n\nimport spark.implicits._\n\nval ds = Seq(\n    Record("USA", 112),\n    Record("USA", 250),\n    Record("USA", 360),\n    Record("INIDA", 102),\n    Record("INDIA", 205),\n).toDS[Record]\n\nds\n  .groupbByKey(_.country)\n  .mapGroups((country, revenues) => Record(country, revenues.map(_.revenue).sum))\n')),(0,a.yg)("p",null,"a ",(0,a.yg)("inlineCode",{parentName:"p"},"groupByKey")," will start by moving data from original partitions and create a partition per country (aggregation key).\nThen, it will apply the aggregation function (here a ",(0,a.yg)("inlineCode",{parentName:"p"},"sum")," function)."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{alt:"spark reducebykey",src:(0,o.c)("/img/groupByKeyDiagram.svg")})),(0,a.yg)("p",null,"As shown in the diagram, the data will be repartitioned and thus a shuffle will take place. In real life data is not\nnaturally balanced, so in case where a key is too frequent, it's related data will be put in one partition."),(0,a.yg)("h2",{id:"reducebykey"},"reduceByKey"),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"reduceByKey")," will operate in two steps: (1) In each partition it will apply the aggregation function locally\n(2) all the key-value pairs are then shuffled around, send over wire, and finally being reduced to get the final result."),(0,a.yg)("p",null,"Here is the implementation of the same example using reduceByKey :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'case class Record(country: String, revenue: Double)\n\nimport spark.implicits._\n\nval ds = Seq(\n    Record("USA", 112),\n    Record("USA", 250),\n    Record("USA", 360),\n    Record("INIDA", 102),\n    Record("INDIA", 205),\n).toDS[Record]\n\nds\n  .rdd\n  .keyBey(_.country)\n  .reduceByKey((r1, r2) => r1.copy(revenue = r1.revenue + r2.revenue ) )\n')),(0,a.yg)("p",null,"Look at the diagram below to understand what happens with reduceByKey. Notice how pairs on the same machine with the\nsame key are combined (by using the lamdba function passed into reduceByKey) before the data is shuffled. And only the\npartial sum results are sent over the wire to be reduced."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{alt:"spark reducebykey",src:(0,o.c)("/img/reduceByKeyDiagram.svg")})),(0,a.yg)("p",null,"This means we are more likely to have an OOM exception with a groupByKey than a reduceByKey."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("h3",{parentName:"admonition",id:"how-oom-exception-occurs-"},"How OOM exception occurs ?"),(0,a.yg)("p",{parentName:"admonition"},"Spark spills data to disk when there is more data shuffled onto a single executor machine than can fit in memory.\nHowever, it flushes out the data to disk one key at a time - so if a single key has more key-value pairs than can fit\nin memory, an out of memory exception occurs.")),(0,a.yg)("p",null,"While both of these functions will produce the correct answer, the reduceByKey example works much better on a large\ndataset. That's because Spark knows it can combine output with a common key on each partition before shuffling the data."),(0,a.yg)("h2",{id:"when-to-avoid-groupbykey-"},"When to avoid ",(0,a.yg)("inlineCode",{parentName:"h2"},"groupByKey")," ?"),(0,a.yg)("p",null,"You can imagine that for a much larger dataset size, the difference in the amount of data you are shuffling becomes\nmore exaggerated and different between reduceByKey and groupByKey. Here are some rules when to avoid a ",(0,a.yg)("inlineCode",{parentName:"p"},"groupByKey")," :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When returning a type different from your input value type. You would like to favor a ",(0,a.yg)("inlineCode",{parentName:"li"},"combineByKey")," in this case."),(0,a.yg)("li",{parentName:"ul"},"When merging the values for each key using an associative function. You would like to use a ",(0,a.yg)("inlineCode",{parentName:"li"},"foldByKey")," operator.")),(0,a.yg)("h2",{id:"when-to-avoid-reducebykey-"},"When to avoid ",(0,a.yg)("inlineCode",{parentName:"h2"},"reduceByKey")," ?"),(0,a.yg)("p",null,"This operator is only available with RDD API, thus switching from typed dataset to rdd and back, induces performance\nreduction due to java serialization."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Choosing the right operator can be tricky the first time, but can help to optimize long-running jobs quickly."))}d.isMDXComponent=!0}}]);