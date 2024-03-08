"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[2750],{5680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>s});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),u=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=u(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,s=m["".concat(p,".").concat(d)]||m[d]||y[d]||l;return t?n.createElement(s,i(i({ref:a},o),{},{components:t})):n.createElement(s,i({ref:a},o))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var g={};for(var p in a)hasOwnProperty.call(a,p)&&(g[p]=a[p]);g.originalType=e,g[m]="string"==typeof e?e:r,i[1]=g;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8663:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=t(8168),r=(t(6540),t(5680));const l={title:"About",description:"Hamza EL KAROUI is a data engineer and devops, specializing in Apache Spark, Delta Lake, Apache Kafka (with brief forays into a wider data engineering space."},i="About me",g={type:"mdx",permalink:"/about",source:"@site/src/pages/about.md",title:"About",description:"Hamza EL KAROUI is a data engineer and devops, specializing in Apache Spark, Delta Lake, Apache Kafka (with brief forays into a wider data engineering space.",frontMatter:{title:"About",description:"Hamza EL KAROUI is a data engineer and devops, specializing in Apache Spark, Delta Lake, Apache Kafka (with brief forays into a wider data engineering space."}},p=[{value:"Work Experience",id:"work-experience",level:2},{value:"BNP Parisbas",id:"bnp-parisbas",level:3},{value:"Kering Group",id:"kering-group",level:3},{value:"Make.org",id:"makeorg",level:3},{value:"Education",id:"education",level:2},{value:"Master degree in Computer Science &amp; Telecommunications",id:"master-degree-in-computer-science--telecommunications",level:3},{value:"Master degree in Telecommunications",id:"master-degree-in-telecommunications",level:3},{value:"Mastered Skills",id:"mastered-skills",level:2},{value:"Technical skills",id:"technical-skills",level:2},{value:"Certificates",id:"certificates",level:2},{value:"Download CV",id:"download-cv",level:2}],u={toc:p},o="wrapper";function m(e){let{components:a,...l}=e;return(0,r.yg)(o,(0,n.A)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"about-me"},"About me"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://images.weserv.nl/?url=avatars.githubusercontent.com/u/22795356?s=96&v=4&fit=cover&mask=circle&maxage=7d",alt:"avatar"})),(0,r.yg)("p",null,"Hi I'm ",(0,r.yg)("a",{parentName:"p",href:"https://www.linkedin.com/in/hamza-el-karoui/"},"Hamza EL KAROUI"),", a Senior data engineer / DevOps freelancer, specializing in Apache Spark (incl. Spark SQL and Spark Structured Streaming), Delta Lake, Databricks, and Apache Kafka with brief forays into a wider data engineering space."),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"work-experience"},"Work Experience"),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"bnp-parisbas"},(0,r.yg)("a",{parentName:"h3",href:"https://group.bnpparibas/"},"BNP Parisbas")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"2021-03 to 2023-10")," - ",(0,r.yg)("strong",{parentName:"p"},"2 Years 8 months")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Taking ownership of building data solutions to provide actionable insights into key\nbusiness metrics."),(0,r.yg)("li",{parentName:"ul"},"Tuning Spark jobs performance, optimizing the code and solving data skew issues."),(0,r.yg)("li",{parentName:"ul"},"Developed ML inference job using Spark + Deep Java Library + PyTorch."),(0,r.yg)("li",{parentName:"ul"},"Migrating scheduling from legacy systems to Airflow.")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"KEYWORDS: SCALA/SPARK, KUBERNETES, SKAFFOLD, KUSTOMIZE, AIRFLOW.")),(0,r.yg)("h3",{id:"kering-group"},(0,r.yg)("a",{parentName:"h3",href:"https://www.kering.com"},"Kering Group")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"2019-06 to 2021-02")," - ",(0,r.yg)("strong",{parentName:"p"},"2 Years")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Designing, developing and maintaining a world-class, high-performing data pipelines to enhance the business insights using Spark 2.4 running on AWS EMR."),(0,r.yg)("li",{parentName:"ul"},"Developed Spark Streaming applications integrated with Kafka as broker & Cassandra for data consolidation."),(0,r.yg)("li",{parentName:"ul"},"Designed a multi-channel marketing attribution engine to replace old batch jobs",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Reduced compute time and used resources (from 7h30 with 1TB ram to 30 min with only 20GB)."),(0,r.yg)("li",{parentName:"ul"},"Migrated Spark/SQL jobs to AWS Athena \ue046 Glue \ue046 Lambda function for data source refresh")))),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"KEYWORDS: SCALA/SPARK, PYSPARK, PYTHON, AWS, ATHENA, DELTALAKE, NIFI")),(0,r.yg)("h3",{id:"makeorg"},(0,r.yg)("a",{parentName:"h3",href:"https://make.org"},"Make.org")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"2019-01 to 2019-03")," - ",(0,r.yg)("strong",{parentName:"p"},"3 Months")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Developed an inference API using Akka Http & Actors to serve NLP models saved in PMML format."),(0,r.yg)("li",{parentName:"ul"},"Anomaly detection based on access logs and tracking data using PySpark.")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"KEYWORDS: AKKA, KAFKA, PYSPARK, PANDAS, DOCKER, GITLAB CI")),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"education"},"Education"),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"master-degree-in-computer-science--telecommunications"},"Master degree in Computer Science & Telecommunications"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"2016-2018"),"\nEngineering School : ",(0,r.yg)("a",{parentName:"p",href:"https://www.imt-atlantique.fr/en"},"IMT Atlantique")," (ex Telecom Bretagne)"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"IMT Atlantique is one of the top 10 engineering schools in France, one of the top 400 universities in the world in THE ",(0,r.yg)("a",{parentName:"p",href:"https://www.timeshighereducation.com/world-university-rankings/imt-atlantique"},"World University Ranking"),".")),(0,r.yg)("h3",{id:"master-degree-in-telecommunications"},"Master degree in Telecommunications"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"2014-2018"),"\nEngineering School : ",(0,r.yg)("a",{parentName:"p",href:"https://www.supcom.tn"},"SupCom")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SupCom is an excellent engineering school in Tunisia")),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"mastered-skills"},"Mastered Skills"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Programming languages",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Scala"),(0,r.yg)("li",{parentName:"ul"},"Python"),(0,r.yg)("li",{parentName:"ul"},"SQL"))),(0,r.yg)("li",{parentName:"ul"},"Big data Tools & frameworks",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Mastering Spark, Spark Streaming"),(0,r.yg)("li",{parentName:"ul"},"Akka Actors & Akka Streaming"),(0,r.yg)("li",{parentName:"ul"},"ELK"),(0,r.yg)("li",{parentName:"ul"},"Kafka for Event Driven Architecture"))),(0,r.yg)("li",{parentName:"ul"},"Automation :",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Ansible + Vagrant"),(0,r.yg)("li",{parentName:"ul"},"Jenkins, GitlabCI"),(0,r.yg)("li",{parentName:"ul"},"Skaffold + kustomize")))),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"technical-skills"},"Technical skills"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Newbie")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Padawan")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Jedi")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Yoda")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Scala"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SQL"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Spark"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Python"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nifi"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AWS"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Git"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Airflow"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Java"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ansible"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jenkins"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GitlabCI"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Go"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MLFlow"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Github Actions"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2b50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"certificates"},"Certificates"),(0,r.yg)("a",{href:"https://www.credly.com/badges/535e02f3-3d2e-40ad-b3f4-2806e81e22c4/public_url"},(0,r.yg)("img",{width:"150",src:t(7400).A})),(0,r.yg)("a",{href:"https://www.credly.com/badges/ccac1fc1-a614-430c-9598-6e28723ab6dd/public_url"},(0,r.yg)("img",{width:"150",src:t(1534).A})),(0,r.yg)("a",{href:"https://www.credly.com/badges/f105781e-411f-46d2-a234-81b226663e9b/public_url"},(0,r.yg)("img",{width:"150",src:t(4496).A})),(0,r.yg)("h2",{id:"download-cv"},"Download CV"),(0,r.yg)("p",null,"To download my cv in :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"French :  ",(0,r.yg)("a",{target:"_blank",href:t(518).A},"hamza-el-karoui-resume-fr.pdf"))),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h1",{id:"work-with-me-"},"Work with me ?"),(0,r.yg)("p",null,"Need some Microservices / Data Pipeline development work done? I'm a full-time Data Engineer consultant,\nI've been doing this for the past 5.5 years, and it's my bread and butter! \ud83c\udf5e ",(0,r.yg)("br",null),"\nGet in touch, and let's talk business!"),(0,r.yg)("h1",{id:"get-in-touch-"},"Get in touch \ud83d\udc4b"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tweet me up, I'm \ud83d\udc26 ",(0,r.yg)("a",{parentName:"li",href:"https://twitter.com/Stringly_Typed"},"@Stringly_Typed")),(0,r.yg)("li",{parentName:"ul"},"Contact me by mail \ud83d\udcec ",(0,r.yg)("a",{parentName:"li",href:"mailto:helkarou@gmail.com"},"helkarou@gmail.com"))))}m.isMDXComponent=!0},518:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/files/hamza-el-karoui-resume-fr-1aa8a6f1a599a254dddef869a29a6c93.pdf"},4496:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/aws-certified-cloud-practitioner-3b21598504d778b1ee2eaba4bae19d12.png"},1534:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/lightbend-akka-cluster-fundamentals-level-2-1338447208eb448811da937d03e586e3.png"},7400:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/lightbend-scala-language-professional-level-2.1-bbb8f5b6fb61bad8d0e2cd63b21cd7ac.png"}}]);