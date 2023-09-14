"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[2013],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),u=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return r.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(k,l(l({ref:a},p),{},{components:t})):r.createElement(k,l({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3510:function(e,a,t){t.r(a),t.d(a,{assets:function(){return T},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return w}});var r=t(7462),n=t(3366),o=t(7294),l=t(3905),s=t(6010),i=t(2389),u=t(7392),p=t(7094),c=t(2466),m="tabList__CuJ",d="tabItem_LNqP";function k(e){var a,t,n=e.lazy,l=e.block,i=e.defaultValue,k=e.values,f=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:g.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,u.l)(h,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===i?i:null!=(a=null!=i?i:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?a:g[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,p.U)(),T=N.tabGroupChoices,w=N.setTabGroupChoices,_=(0,o.useState)(y),O=_[0],E=_[1],x=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=T[f];null!=P&&P!==O&&h.some((function(e){return e.value===P}))&&E(P)}var I=function(e){var a=e.currentTarget,t=x.indexOf(a),r=h[t].value;r!==O&&(C(a),E(r),null!=f&&w(f,String(r)))},S=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r,n=x.indexOf(e.currentTarget)+1;t=null!=(r=x[n])?r:x[0];break;case"ArrowLeft":var o,l=x.indexOf(e.currentTarget)-1;t=null!=(o=x[l])?o:x[x.length-1]}null==(a=t)||a.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var a=e.value,t=e.label,n=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:I,onClick:I},n,{className:(0,s.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":O===a})}),null!=t?t:a)}))),n?(0,o.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}function f(e){var a=(0,i.Z)();return o.createElement(k,(0,r.Z)({key:String(a)},e))}var v="tabItem_Ymn6";function g(e){var a=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,s.Z)(v,r),hidden:t},a)}var h=["components"],b={title:"Quick Start",sidebar_position:1},y=void 0,N={unversionedId:"kafka/index",id:"kafka/index",title:"Quick Start",description:"Introduction",source:"@site/sections/data_processing/kafka/index.mdx",sourceDirName:"kafka",slug:"/kafka/",permalink:"/data_processing/kafka/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start",sidebar_position:1},sidebar:"docs",previous:{title:"ReduceByKey vs GroupByKey",permalink:"/data_processing/spark/02.5-optimizations/reducebykey_vs_groupbykey"},next:{title:"Best practices",permalink:"/data_processing/kafka/best_practices"}},T={},w=[{value:"Introduction",id:"introduction",level:2},{value:"How does kafka work in a nuttshel ?",id:"how-does-kafka-work-in-a-nuttshel-",level:2},{value:"Setup a kafka cluster",id:"setup-a-kafka-cluster",level:2},{value:"Manage topics",id:"manage-topics",level:2},{value:"Create topics",id:"create-topics",level:3},{value:"Configure topics",id:"configure-topics",level:3},{value:"Delete a topic",id:"delete-a-topic",level:3},{value:"Create simple producers and clients",id:"create-simple-producers-and-clients",level:2},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Resources",id:"resources",level:2}],_={toc:w};function O(e){var a=e.components,t=(0,n.Z)(e,h);return(0,l.kt)("wrapper",(0,r.Z)({},_,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Kafka is a message broker system. It's main purpose is to handle real-time data feeds send by producers and make it available to consumers to subscribe and read those feeds.\nIn other terms, Kafka is a data bus for scalable distributed systems.\nKafka insures 3 main key points : "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unified plateform"),(0,l.kt)("li",{parentName:"ul"},"high-throughput"),(0,l.kt)("li",{parentName:"ul"},"low-latency")),(0,l.kt)("h2",{id:"how-does-kafka-work-in-a-nuttshel-"},"How does kafka work in a nuttshel ?"),(0,l.kt)("p",null,"Kafka is a distributed system consisting of servers and clients that communicate via a high-performance TCP network protocol"),(0,l.kt)("h2",{id:"setup-a-kafka-cluster"},"Setup a kafka cluster"),(0,l.kt)("p",null,"In this tutorial, we will use docker-compose to run a 3 node cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2'\n\nservices:\n  zookeeper:\n    image: 'bitnami/zookeeper:latest'\n    ports:\n     - '2181:2181'\n    environment:\n      - ALLOW_ANONYMOUS_LOGIN=yes\n  kafka-1:\n    image: 'bitnami/kafka:latest'\n    hostname: kafka.example.com\n    ports:\n      - '9091:9092'\n    environment:\n      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181\n      - ALLOW_PLAINTEXT_LISTENER=yes\n\n  kafka-2:\n    image: 'bitnami/kafka:latest'\n    hostname: kafka.example.com\n    ports:\n      - '9092:9092'\n    environment:\n      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181\n      - ALLOW_PLAINTEXT_LISTENER=yes\n\n  kafka-3:\n    image: 'bitnami/kafka:latest'\n    hostname: kafka.example.com\n    ports:\n      - '9093:9092'\n    environment:\n      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181\n      - ALLOW_PLAINTEXT_LISTENER=yes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zkCli.sh\n\n> ls /brokers/ids\n[1001, 1002, 1003]\n")),(0,l.kt)("h2",{id:"manage-topics"},"Manage topics"),(0,l.kt)("h3",{id:"create-topics"},"Create topics"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Create a topic"',title:'"Create',a:!0,'topic"':!0},"kafka-topics.sh --zookeeper zookeeper:2181 --create --topic sharek.awesome-tutorials.likes --partitions 3 --replication-factor 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"WARNING: Due to limitations in metric names, topics with a period ('.') or underscore ('_') could collide. To avoid issues it is best to use either, but not both.\nCreated topic sharek.awesome-tutorials.likes.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="List topics"',title:'"List','topics"':!0},"kafka-topics.sh --zookeeper zookeeper:2181 --list\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="List topics"',title:'"List','topics"':!0},"kafka-topics.sh --zookeeper zookeeper:2181 --describe\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Topic: sharek.awesome-tutorials.likes   TopicId: j8Lr93OTQSytSsasSZk4mg PartitionCount: 3       ReplicationFactor: 3    Configs: \n        Topic: sharek.awesome-tutorials.likes   Partition: 0    Leader: 1001    Replicas: 1001,1002,1003        Isr: 1001\n        Topic: sharek.awesome-tutorials.likes   Partition: 1    Leader: 1002    Replicas: 1002,1003,1001        Isr: 1002,1003,1001\n        Topic: sharek.awesome-tutorials.likes   Partition: 2    Leader: 1003    Replicas: 1003,1001,1002        Isr: 1003,1001,1002\n")),(0,l.kt)("h3",{id:"configure-topics"},"Configure topics"),(0,l.kt)("p",null,"retention\npurge "),(0,l.kt)("h3",{id:"delete-a-topic"},"Delete a topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kafka-topics.sh --zookeeper zookeeper:2181 --delete --topic sharek.awesome-tutorials.likes\n")),(0,l.kt)("h2",{id:"create-simple-producers-and-clients"},"Create simple producers and clients"),(0,l.kt)(f,{className:"unique-tabs",groupId:"programming-language",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Scala",value:"scala"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,l.kt)(g,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"pip install kafka-python\n"))),(0,l.kt)(g,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n    "org.apache.kafka" % "kafka-clients" % "2.5 .0",\n    scalaTest % Test\n  )\n'))),(0,l.kt)(g,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"")))),(0,l.kt)("h3",{id:"producer"},"Producer"),(0,l.kt)(f,{className:"unique-tabs",groupId:"programming-language",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Scala",value:"scala"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,l.kt)(g,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from time import sleep\nfrom json import dumps\nfrom random import random\nfrom kafka import KafkaProducer\nimport itertools as it\n\nbootstrap_servers = ['localhost:9093']\nserialiser = lambda x: dumps(x).encode('utf-8')\n\ntopic_name = \"sharek.tutorial.likes\"\nproducer = KafkaProducer(bootstrap_servers=bootstrap_servers, value_serializer=serialiser)\n\ncounter = it.count()\nwhile True:\n    data = {'x' : next(counter), 'y': random()}\n    producer.send(topic_name, value=data)\n    sleep(0.5)\n"))),(0,l.kt)(g,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.kafka.clients.producer.{KafkaProducer, ProducerRecord}\nimport java.util.Properties\n\nobject SimpleProducer extends App {\n\n  val props = new Properties()\n  props.put("bootstrap.servers", "localhost:9093,localhost:9094,localhost:9095")\n  props.put("group.id", "scala-consumer")\n  props.put("auto.offset.reset", "latest")\n  props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer")\n  props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer")\n\n  val producer = new KafkaProducer[String, String](props)\n\n  val topic = "sharek.tutorial.likes"\n\n  while (true) {\n    producer.send(new ProducerRecord(topic, "Hi !"))\n    Thread.sleep(1000)\n  }\n}\n'))),(0,l.kt)(g,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"")))),(0,l.kt)("h3",{id:"consumer"},"Consumer"),(0,l.kt)(f,{className:"unique-tabs",groupId:"programming-language",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Scala",value:"scala"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,l.kt)(g,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from json import loads\nfrom kafka import KafkaConsumer\n\nbootstrap_servers = ['localhost:9093', 'localhost:9094', 'localhost:9095']\ndef deserialiser(x): return loads(x.decode('utf-8'))\n\n\ntopic_name = \"sharek.tutorial.likes\"\n\nconsumer = KafkaConsumer(topic_name,\n                         bootstrap_servers=bootstrap_servers,\n                         auto_offset_reset='earliest', \n                         enable_auto_commit=True, \n                         group_id='sharek.consumer.likes', \n                         value_deserializer=deserialiser)\n\nfor message in consumer:\n    print (\"%s:%d:%d: key=%s value=%s\" % (message.topic, message.partition,\n                                          message.offset, message.key,\n                                          message.value))\n"))),(0,l.kt)(g,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.kafka.clients.consumer.KafkaConsumer\n\nimport java.time.Duration.ofHours\nimport java.util.Properties\nimport scala.jdk.CollectionConverters._\n\nobject SimpleConsumer extends App {\n\n  val props = new Properties()\n  props.put("bootstrap.servers", "localhost:9093,localhost:9094,localhost:9095")\n  props.put("group.id", "scala-consumer")\n  props.put("auto.offset.reset", "latest")\n  props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer")\n  props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer")\n\n  val consumer = new KafkaConsumer[String, String](props)\n\n  consumer.subscribe(List("sharek.tutorial.likes").asJavaCollection)\n\n  while(true) {\n    val record = consumer.poll(ofHours(100)).asScala\n\n    for (data <- record.iterator){\n      println(s"Fetched ${data.value()}")\n    }\n  }\n}\n'))),(0,l.kt)(g,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"")))),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/@TimvanBaarsen/apache-kafka-cli-commands-cheat-sheet-a6f06eac01b"},"https://medium.com/@TimvanBaarsen/apache-kafka-cli-commands-cheat-sheet-a6f06eac01b"))))}O.isMDXComponent=!0}}]);