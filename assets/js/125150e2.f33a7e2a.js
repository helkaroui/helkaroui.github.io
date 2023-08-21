"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[8984],{3905:(e,o,t)=>{t.d(o,{Zo:()=>i,kt:()=>m});var a=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var o=a.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},i=function(e){var o=c(e.components);return a.createElement(p.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},k=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=c(t),m=r,f=k["".concat(p,".").concat(m)]||k[m]||u[m]||n;return t?a.createElement(f,s(s({ref:o},i),{},{components:t})):a.createElement(f,s({ref:o},i))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=k;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<n;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5173:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const n={title:"Cheat Sheet"},s=void 0,l={unversionedId:"kafka/cheat_sheet",id:"kafka/cheat_sheet",title:"Cheat Sheet",description:"You can create a new Kafka topic named my-topic as follows:",source:"@site/sections/data_processing/kafka/03-cheat_sheet.md",sourceDirName:"kafka",slug:"/kafka/cheat_sheet",permalink:"/data_processing/kafka/cheat_sheet",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Cheat Sheet"},sidebar:"docs",previous:{title:"Best practices",permalink:"/data_processing/kafka/best_practices"}},p={},c=[{value:"Consume messages",id:"consume-messages",level:2},{value:"Consume Avro messages",id:"consume-avro-messages",level:2},{value:"Consumers admin operations",id:"consumers-admin-operations",level:2}],i={toc:c};function u(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create a new Kafka topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 3 --topic my-topic\n")),(0,r.kt)("p",null,"You can verify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic was successfully created by listing all available topics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-topics.sh --list --zookeeper localhost:2181\n")),(0,r.kt)("p",null,"You can add more partitions as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-topics.sh --zookeeper localhost:2181 --alter --topic my-topic --partitions 16\n")),(0,r.kt)("p",null,"You can delete a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-topics.sh --zookeeper localhost:2181 --delete --topic my-topic\n")),(0,r.kt)("p",null,"You can find more details about a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"cc_payments")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-topics.sh --describe --zookeeper localhost:2181 --topic cc_payments\n")),(0,r.kt)("p",null,"You can see the under-replicated partitions for all topics as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-topics.sh --zookeeper localhost:2181/kafka-cluster --describe --under-replicated-partitions\n")),(0,r.kt)("h1",{id:"producers"},"Producers"),(0,r.kt)("p",null,"You can produce messages from standard input as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-console-producer.sh --broker-list localhost:9092 --topic my-topic\n")),(0,r.kt)("p",null,"You can produce new messages from an existing file named ",(0,r.kt)("inlineCode",{parentName:"p"},"messages.txt")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-console-producer.sh --broker-list localhost:9092 --topic test < messages.txt\n")),(0,r.kt)("p",null,"You can produce Avro messages as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kafka-avro-console-producer.sh --broker-list localhost:9092 --topic my.Topic --property value.schema=\'{"type":"record","name":"myrecord","fields":[{"name":"f1","type":"string"}]}\' --property schema.registry.url=http://localhost:8081\n')),(0,r.kt)("p",null,"You can enter a few new values from the console as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"f1": "value1"}\n')),(0,r.kt)("h1",{id:"consumers"},"Consumers"),(0,r.kt)("h2",{id:"consume-messages"},"Consume messages"),(0,r.kt)("p",null,"You can begin a consumer from the beginning of the log as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my-topic --from-beginning\n")),(0,r.kt)("p",null,"You can consume a single message as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my-topic  --max-messages 1\n")),(0,r.kt)("p",null,"You can consume a single message from ",(0,r.kt)("inlineCode",{parentName:"p"},"__consumer_offsets")," as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kafka version 0.9.x.x ~ 0.10.x.x*")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-console-consumer --bootstrap-server localhost:9092 --topic __consumer_offsets --formatter 'kafka.coordinator.GroupMetadataManager$OffsetsMessageFormatter' --max-messages 1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kafka version 0.11.x.x+ *")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic __consumer_offsets --formatter "kafka.coordinator.group.GroupMetadataManager\\$OffsetsMessageFormatter" --max-messages 1\n')),(0,r.kt)("p",null,"You can consume and specify a consumer group as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-console-consumer.sh --topic my-topic --new-consumer --bootstrap-server localhost:9092 --consumer-property group.id=my-group\n")),(0,r.kt)("h2",{id:"consume-avro-messages"},"Consume Avro messages"),(0,r.kt)("p",null,"You can consume 10 Avro messages from a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"position-reports")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-avro-console-consumer.sh --topic position-reports --new-consumer --bootstrap-server localhost:9092 --from-beginning --property schema.registry.url=localhost:8081 --max-messages 10\n")),(0,r.kt)("p",null,"You can consume all existing Avro messages from a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"position-reports")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-avro-console-consumer.sh --topic position-reports --new-consumer --bootstrap-server localhost:9092 --from-beginning --property schema.registry.url=localhost:8081\n")),(0,r.kt)("h2",{id:"consumers-admin-operations"},"Consumers admin operations"),(0,r.kt)("p",null,"You can list all groups as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-consumer-groups.sh --new-consumer --list --bootstrap-server localhost:9092\n")),(0,r.kt)("p",null,"You can describe a Group named ",(0,r.kt)("inlineCode",{parentName:"p"},"testgroup")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group testgroup\n")),(0,r.kt)("h1",{id:"config"},"Config"),(0,r.kt)("p",null,"You can set the retention for a topic as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-configs.sh --zookeeper localhost:2181 --alter --entity-type topics --entity-name my-topic --add-config retention.ms=3600000\n")),(0,r.kt)("p",null,"You can print all configuration overrides for a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-configs.sh --zookeeper localhost:2181 --describe --entity-type topics --entity-name my-topic\n")),(0,r.kt)("p",null,"You can delete a configuration override for ",(0,r.kt)("inlineCode",{parentName:"p"},"retention.ms")," for a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-configs.sh --zookeeper localhost:2181 --alter --entity-type topics --entity-name my-topic --delete-config retention.ms \n")),(0,r.kt)("h1",{id:"performance"},"Performance"),(0,r.kt)("p",null,"Although Kafka is pretty fast by design, it is good to be able to test its performance.\nYou can check the Produce performance of Kafka as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kafka-producer-perf-test.sh --topic position-reports --throughput 10000 --record-size 300 --num-records 20000 --producer-props bootstrap.servers="localhost:9092"\n')),(0,r.kt)("h1",{id:"acls"},"ACLs"),(0,r.kt)("p",null,"You can add a new ",(0,r.kt)("em",{parentName:"p"},"consumer")," ACL to an existing topic as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:Bob --consumer --topic topicA --group groupA\n")),(0,r.kt)("p",null,"You can add a new ",(0,r.kt)("em",{parentName:"p"},"producer")," ACL to an existing topic as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:Bob --producer --topic topicA\n")),(0,r.kt)("p",null,"You can list the ACLs of a topic named ",(0,r.kt)("inlineCode",{parentName:"p"},"topicA")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 --list --topic topicA\n")),(0,r.kt)("h1",{id:"zookeeper"},"Zookeeper"),(0,r.kt)("p",null,"You can enter the zookeeper shell as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zkCli.sh localhost:2182 \n\n> ls /brokers/ids\n")))}u.isMDXComponent=!0}}]);