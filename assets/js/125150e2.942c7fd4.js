"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[1382],{5680:(e,o,a)=>{a.d(o,{xA:()=>i,yg:()=>y});var r=a(6540);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,r,t=function(e,o){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),c=function(e){var o=r.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},i=function(e){var o=c(e.components);return r.createElement(p.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},g=r.forwardRef((function(e,o){var a=e.components,t=e.mdxType,n=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=t,y=u["".concat(p,".").concat(g)]||u[g]||m[g]||n;return a?r.createElement(y,s(s({ref:o},i),{},{components:a})):r.createElement(y,s({ref:o},i))}));function y(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=a.length,s=new Array(n);s[0]=g;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l[u]="string"==typeof e?e:t,s[1]=l;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3662:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(8168),t=(a(6540),a(5680));const n={title:"Cheat Sheet"},s=void 0,l={unversionedId:"kafka/cheat_sheet",id:"kafka/cheat_sheet",title:"Cheat Sheet",description:"You can create a new Kafka topic named my-topic as follows:",source:"@site/sections/data_processing/kafka/03-cheat_sheet.md",sourceDirName:"kafka",slug:"/kafka/cheat_sheet",permalink:"/data_processing/kafka/cheat_sheet",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Cheat Sheet"},sidebar:"docs",previous:{title:"Best practices",permalink:"/data_processing/kafka/best_practices"},next:{title:"Quick Start Guide to Apache Flink",permalink:"/data_processing/flink/"}},p={},c=[{value:"Consume messages",id:"consume-messages",level:2},{value:"Consume Avro messages",id:"consume-avro-messages",level:2},{value:"Consumers admin operations",id:"consumers-admin-operations",level:2}],i={toc:c},u="wrapper";function m(e){let{components:o,...a}=e;return(0,t.yg)(u,(0,r.A)({},i,a,{components:o,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"You can create a new Kafka topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 3 --topic my-topic\n")),(0,t.yg)("p",null,"You can verify that the ",(0,t.yg)("inlineCode",{parentName:"p"},"my-topic")," topic was successfully created by listing all available topics:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-topics.sh --list --zookeeper localhost:2181\n")),(0,t.yg)("p",null,"You can add more partitions as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-topics.sh --zookeeper localhost:2181 --alter --topic my-topic --partitions 16\n")),(0,t.yg)("p",null,"You can delete a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-topics.sh --zookeeper localhost:2181 --delete --topic my-topic\n")),(0,t.yg)("p",null,"You can find more details about a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"cc_payments")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-topics.sh --describe --zookeeper localhost:2181 --topic cc_payments\n")),(0,t.yg)("p",null,"You can see the under-replicated partitions for all topics as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-topics.sh --zookeeper localhost:2181/kafka-cluster --describe --under-replicated-partitions\n")),(0,t.yg)("h1",{id:"producers"},"Producers"),(0,t.yg)("p",null,"You can produce messages from standard input as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-console-producer.sh --broker-list localhost:9092 --topic my-topic\n")),(0,t.yg)("p",null,"You can produce new messages from an existing file named ",(0,t.yg)("inlineCode",{parentName:"p"},"messages.txt")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-console-producer.sh --broker-list localhost:9092 --topic test < messages.txt\n")),(0,t.yg)("p",null,"You can produce Avro messages as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'kafka-avro-console-producer.sh --broker-list localhost:9092 --topic my.Topic --property value.schema=\'{"type":"record","name":"myrecord","fields":[{"name":"f1","type":"string"}]}\' --property schema.registry.url=http://localhost:8081\n')),(0,t.yg)("p",null,"You can enter a few new values from the console as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{"f1": "value1"}\n')),(0,t.yg)("h1",{id:"consumers"},"Consumers"),(0,t.yg)("h2",{id:"consume-messages"},"Consume messages"),(0,t.yg)("p",null,"You can begin a consumer from the beginning of the log as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my-topic --from-beginning\n")),(0,t.yg)("p",null,"You can consume a single message as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my-topic  --max-messages 1\n")),(0,t.yg)("p",null,"You can consume a single message from ",(0,t.yg)("inlineCode",{parentName:"p"},"__consumer_offsets")," as follows:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"kafka version 0.9.x.x ~ 0.10.x.x*")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-console-consumer --bootstrap-server localhost:9092 --topic __consumer_offsets --formatter 'kafka.coordinator.GroupMetadataManager$OffsetsMessageFormatter' --max-messages 1\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"kafka version 0.11.x.x+ *")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic __consumer_offsets --formatter "kafka.coordinator.group.GroupMetadataManager\\$OffsetsMessageFormatter" --max-messages 1\n')),(0,t.yg)("p",null,"You can consume and specify a consumer group as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-console-consumer.sh --topic my-topic --new-consumer --bootstrap-server localhost:9092 --consumer-property group.id=my-group\n")),(0,t.yg)("h2",{id:"consume-avro-messages"},"Consume Avro messages"),(0,t.yg)("p",null,"You can consume 10 Avro messages from a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"position-reports")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-avro-console-consumer.sh --topic position-reports --new-consumer --bootstrap-server localhost:9092 --from-beginning --property schema.registry.url=localhost:8081 --max-messages 10\n")),(0,t.yg)("p",null,"You can consume all existing Avro messages from a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"position-reports")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-avro-console-consumer.sh --topic position-reports --new-consumer --bootstrap-server localhost:9092 --from-beginning --property schema.registry.url=localhost:8081\n")),(0,t.yg)("h2",{id:"consumers-admin-operations"},"Consumers admin operations"),(0,t.yg)("p",null,"You can list all groups as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-consumer-groups.sh --new-consumer --list --bootstrap-server localhost:9092\n")),(0,t.yg)("p",null,"You can describe a Group named ",(0,t.yg)("inlineCode",{parentName:"p"},"testgroup")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group testgroup\n")),(0,t.yg)("h1",{id:"config"},"Config"),(0,t.yg)("p",null,"You can set the retention for a topic as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-configs.sh --zookeeper localhost:2181 --alter --entity-type topics --entity-name my-topic --add-config retention.ms=3600000\n")),(0,t.yg)("p",null,"You can print all configuration overrides for a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-configs.sh --zookeeper localhost:2181 --describe --entity-type topics --entity-name my-topic\n")),(0,t.yg)("p",null,"You can delete a configuration override for ",(0,t.yg)("inlineCode",{parentName:"p"},"retention.ms")," for a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-configs.sh --zookeeper localhost:2181 --alter --entity-type topics --entity-name my-topic --delete-config retention.ms \n")),(0,t.yg)("h1",{id:"performance"},"Performance"),(0,t.yg)("p",null,"Although Kafka is pretty fast by design, it is good to be able to test its performance.\nYou can check the Produce performance of Kafka as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'kafka-producer-perf-test.sh --topic position-reports --throughput 10000 --record-size 300 --num-records 20000 --producer-props bootstrap.servers="localhost:9092"\n')),(0,t.yg)("h1",{id:"acls"},"ACLs"),(0,t.yg)("p",null,"You can add a new ",(0,t.yg)("em",{parentName:"p"},"consumer")," ACL to an existing topic as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:Bob --consumer --topic topicA --group groupA\n")),(0,t.yg)("p",null,"You can add a new ",(0,t.yg)("em",{parentName:"p"},"producer")," ACL to an existing topic as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:Bob --producer --topic topicA\n")),(0,t.yg)("p",null,"You can list the ACLs of a topic named ",(0,t.yg)("inlineCode",{parentName:"p"},"topicA")," as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 --list --topic topicA\n")),(0,t.yg)("h1",{id:"zookeeper"},"Zookeeper"),(0,t.yg)("p",null,"You can enter the zookeeper shell as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"zkCli.sh localhost:2182 \n\n> ls /brokers/ids\n")))}m.isMDXComponent=!0}}]);