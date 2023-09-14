"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[2055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Quick wins"},i=void 0,l={unversionedId:"spark/optimizations/quick_wins",id:"spark/optimizations/quick_wins",title:"Quick wins",description:"Here are simple rules to follow to avoid crashing your spark job :",source:"@site/sections/data_processing/spark/02-optimizations/quick_wins.mdx",sourceDirName:"spark/02-optimizations",slug:"/spark/optimizations/quick_wins",permalink:"/data_processing/spark/optimizations/quick_wins",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick wins"},sidebar:"docs",previous:{title:"Host your own Spark cluster",permalink:"/data_processing/spark/tutorials/setup_standalone_cluster"},next:{title:"ReduceByKey vs GroupByKey",permalink:"/data_processing/spark/optimizations/reducebykey_vs_groupbykey"}},s={},c=[{value:"Avoid collecting to your driver",id:"avoid-collecting-to-your-driver",level:2},{value:"Avoid collect_list",id:"avoid-collect_list",level:2},{value:"Avoid counting",id:"avoid-counting",level:2},{value:"use Broadcast for small datasets",id:"use-broadcast-for-small-datasets",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are simple rules to follow to avoid crashing your spark job :"),(0,r.kt)("h2",{id:"avoid-collecting-to-your-driver"},"Avoid collecting to your driver"),(0,r.kt)("p",null,"If your Dataset is so large that all of it's elements won't fit in memory on the drive machine, don't collect dataset\nto the driver. Collect will attempt to copy every single element in the RDD onto the single driver program, and then run\nout of memory and crash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val values = ds.collect()\n")),(0,r.kt)("p",null,"Instead, you can make sure the number of elements you return is capped by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"takeSample"),", or perhaps\nfiltering or sampling your Dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val values = ds.take(10)\n")),(0,r.kt)("p",null,"Similarly, be cautious of these other actions as well unless you are sure your dataset size is small enough to fit in\nmemory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countByKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countByValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collectAsMap"))),(0,r.kt)("h2",{id:"avoid-collect_list"},"Avoid collect_list"),(0,r.kt)("h2",{id:"avoid-counting"},"Avoid counting"),(0,r.kt)("p",null,"Don't use count() when you don't need to return the exact number of rows. You can use this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"if (df.takeAsList(1).size() == 0) {...}\n\nor\n\nif (df.queryExecution.toRdd.isEmpty()) {...}\n\nor\n\nif (ds.rdd.isEmpty()) {...}\n")),(0,r.kt)("p",null,"With RDDs, you can use isEmpty() because if you see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/spark/blob/master/core/src/main/scala/org/apache/spark/rdd/RDD.scala"},"the code"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  /**\n   * @note Due to complications in the internal implementation, this method will raise an\n   * exception if called on an RDD of `Nothing` or `Null`. This may be come up in practice\n   * because, for example, the type of `parallelize(Seq())` is `RDD[Nothing]`.\n   * (`parallelize(Seq())` should be avoided anyway in favor of `parallelize(Seq[T]())`.)\n   * @return true if and only if the RDD contains no elements at all. Note that an RDD\n   *         may be empty even when it has at least 1 partition.\n   */\n  def isEmpty(): Boolean = withScope {\n    partitions.length == 0 || take(1).length == 0\n  }\n")),(0,r.kt)("h2",{id:"use-broadcast-for-small-datasets"},"use Broadcast for small datasets"),(0,r.kt)("p",null,"Spark can \u201cbroadcast\u201d a small DataFrame by sending all the data in that small DataFrame to all nodes in the cluster.\nAfter the small DataFrame is broadcasted, Spark can perform a join without shuffling any of the data in the large DataFrame."),(0,r.kt)("p",null,"Let\u2019s create a DataFrame with information about people and another DataFrame with information about cities. In this\nexample, the peopleDF is huge and the citiesDF is tiny. In this case broadcasting the citiesDF will accelerate the join."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"{7}","{7}":!0},'val citiesDF = Seq(\n  ("medellin", "colombia", 2.5),\n  ("bangalore", "india", 12.3)\n).toDF("city", "country", "population")\n\npeopleDF.join(\n  broadcast(citiesDF),\n  peopleDF("city") <=> citiesDF("city")\n).show()\n')),(0,r.kt)("p",null,"By default, spark will broadcast automatically any dataset with size under 10 MB. You can modify this threshold with\n",(0,r.kt)("inlineCode",{parentName:"p"},"spark.sql.autoBroadcastJoinThreshold")," property."))}d.isMDXComponent=!0}}]);