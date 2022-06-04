"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[8507],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Quick wins"},s=void 0,c={unversionedId:"spark/02.5-optimizations/quick_wins",id:"spark/02.5-optimizations/quick_wins",title:"Quick wins",description:"Here are simple rules to follow to avoid crashing your spark job :",source:"@site/sections/data_processing/spark/02.5-optimizations/quick_wins.mdx",sourceDirName:"spark/02.5-optimizations",slug:"/spark/02.5-optimizations/quick_wins",permalink:"/data_processing/spark/02.5-optimizations/quick_wins",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick wins"},sidebar:"docs",previous:{title:"Host your own Spark cluster",permalink:"/data_processing/spark/tutorials/setup_standalone_cluster"},next:{title:"ReduceByKey vs GroupByKey",permalink:"/data_processing/spark/02.5-optimizations/reducebykey_vs_groupbykey"}},u={},p=[{value:"Avoid collecting to your driver",id:"avoid-collecting-to-your-driver",level:2},{value:"Avoid collect_list",id:"avoid-collect_list",level:2},{value:"Avoid counting",id:"avoid-counting",level:2},{value:"use Broadcast for small datasets",id:"use-broadcast-for-small-datasets",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here are simple rules to follow to avoid crashing your spark job :"),(0,o.kt)("h2",{id:"avoid-collecting-to-your-driver"},"Avoid collecting to your driver"),(0,o.kt)("p",null,"If your Dataset is so large that all of it's elements won't fit in memory on the drive machine, don't collect dataset\nto the driver. Collect will attempt to copy every single element in the RDD onto the single driver program, and then run\nout of memory and crash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val values = ds.collect()\n")),(0,o.kt)("p",null,"Instead, you can make sure the number of elements you return is capped by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"take")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"takeSample"),", or perhaps\nfiltering or sampling your Dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val values = ds.take(10)\n")),(0,o.kt)("p",null,"Similarly, be cautious of these other actions as well unless you are sure your dataset size is small enough to fit in\nmemory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"countByKey")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"countByValue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collectAsMap"))),(0,o.kt)("h2",{id:"avoid-collect_list"},"Avoid collect_list"),(0,o.kt)("h2",{id:"avoid-counting"},"Avoid counting"),(0,o.kt)("p",null,"Don't use count() when you don't need to return the exact number of rows. You can use this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"if (df.takeAsList(1).size() == 0) {...}\n\nor\n\nif (df.queryExecution.toRdd.isEmpty()) {...}\n\nor\n\nif (ds.rdd.isEmpty()) {...}\n")),(0,o.kt)("p",null,"With RDDs, you can use isEmpty() because if you see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/spark/blob/master/core/src/main/scala/org/apache/spark/rdd/RDD.scala"},"the code"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"  /**\n   * @note Due to complications in the internal implementation, this method will raise an\n   * exception if called on an RDD of `Nothing` or `Null`. This may be come up in practice\n   * because, for example, the type of `parallelize(Seq())` is `RDD[Nothing]`.\n   * (`parallelize(Seq())` should be avoided anyway in favor of `parallelize(Seq[T]())`.)\n   * @return true if and only if the RDD contains no elements at all. Note that an RDD\n   *         may be empty even when it has at least 1 partition.\n   */\n  def isEmpty(): Boolean = withScope {\n    partitions.length == 0 || take(1).length == 0\n  }\n")),(0,o.kt)("h2",{id:"use-broadcast-for-small-datasets"},"use Broadcast for small datasets"),(0,o.kt)("p",null,"Spark can \u201cbroadcast\u201d a small DataFrame by sending all the data in that small DataFrame to all nodes in the cluster.\nAfter the small DataFrame is broadcasted, Spark can perform a join without shuffling any of the data in the large DataFrame."),(0,o.kt)("p",null,"Let\u2019s create a DataFrame with information about people and another DataFrame with information about cities. In this\nexample, the peopleDF is huge and the citiesDF is tiny. In this case broadcasting the citiesDF will accelerate the join."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"{7}","{7}":!0},'val citiesDF = Seq(\n  ("medellin", "colombia", 2.5),\n  ("bangalore", "india", 12.3)\n).toDF("city", "country", "population")\n\npeopleDF.join(\n  broadcast(citiesDF),\n  peopleDF("city") <=> citiesDF("city")\n).show()\n')),(0,o.kt)("p",null,"By default, spark will broadcast automatically any dataset with size under 10 MB. You can modify this threshold with\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.sql.autoBroadcastJoinThreshold")," property."))}m.isMDXComponent=!0}}]);