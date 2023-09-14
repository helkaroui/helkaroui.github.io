"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[4960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,m=c["".concat(i,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(4996);const s={title:"Host your own Spark cluster"},o=void 0,i={unversionedId:"spark/tutorials/setup_standalone_cluster",id:"spark/tutorials/setup_standalone_cluster",title:"Host your own Spark cluster",description:"In this article we will go through the steps of deploying a standalone Spark cluster on a bunch of virtual machines.",source:"@site/sections/data_processing/spark/01-tutorials/setup_standalone_cluster.mdx",sourceDirName:"spark/01-tutorials",slug:"/spark/tutorials/setup_standalone_cluster",permalink:"/data_processing/spark/tutorials/setup_standalone_cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"Host your own Spark cluster"},sidebar:"docs",previous:{title:"Quick Start Guide to Apache Spark",permalink:"/data_processing/spark/tutorials/getting-started-with-spark"},next:{title:"Quick wins",permalink:"/data_processing/spark/optimizations/quick_wins"}},p={},u=[{value:"Design",id:"design",level:2},{value:"Requirements",id:"requirements",level:2},{value:"1. Setup VirtualBox",id:"1-setup-virtualbox",level:3},{value:"2. Install Vagrant",id:"2-install-vagrant",level:3},{value:"3. Install Ansible",id:"3-install-ansible",level:3},{value:"Create VMs with Vagrant",id:"create-vms-with-vagrant",level:2},{value:"Setup Spark Nodes",id:"setup-spark-nodes",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Download Spark",id:"download-spark",level:3},{value:"Verify installation",id:"verify-installation",level:3},{value:"Configure the Master node",id:"configure-the-master-node",level:3},{value:"Run the cluster",id:"run-the-cluster",level:2},{value:"Submitting Application to Cluster",id:"submitting-application-to-cluster",level:2},{value:"Using Spark History Server",id:"using-spark-history-server",level:2},{value:"&quot;One Playbook to unite them all&quot;",id:"one-playbook-to-unite-them-all",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article we will go through the steps of deploying a standalone ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Spark")," cluster on a bunch of virtual machines.\nWe will also run a simple application to test the setup and review the logs using Spark history server.\nAt the end, we will put the setup steps into an ansible playbook to have a full automation.\nAll resources and produced scripts of this article can be retrieved from github repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helkaroui/ansible-vagrant-stacks/tree/main/spark"},"ansible-vagrant-stacks"),"."),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("p",null,"We want to create 3 virtual machines and deploy a standalone Spark cluster on them. These VMs should have the following IP addresses:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"Spark standalone cluster",src:(0,l.Z)("/img/setup_spark_cluster/architecture_diagram.png")})),(0,r.kt)("p",null,"For this task, we're gonna use ",(0,r.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," to automatically create and start virtual machines. Then Ansible will be used to install the dependencies automatically."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VirtualBox"),(0,r.kt)("li",{parentName:"ul"},"Vagrant"),(0,r.kt)("li",{parentName:"ul"},"Ansible")),(0,r.kt)("h3",{id:"1-setup-virtualbox"},"1. Setup VirtualBox"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")," is a powerful virtualization tool that we will use to create virtual machines. "),(0,r.kt)("p",null,"To setup VirtualBox, run the following commands :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=Install VirtualBox on Ubuntu",title:"Install",VirtualBox:!0,on:!0,Ubuntu:!0},'wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -\n\nsudo apt-add-repository "deb [arch=amd64] http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib"\n\nsudo apt-get update && sudo apt-get install -y virtualbox-6.1\n')),(0,r.kt)("p",null,"Now you can run VirtualBox from the Ubuntu Launcher or just run ",(0,r.kt)("inlineCode",{parentName:"p"},"virtualbox")," in your command line."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"VirtualBox fresh installation",src:(0,l.Z)("/img/setup_spark_cluster/virtualbox_install.png")})),(0,r.kt)("p",null,"We also need to download ",(0,r.kt)("em",{parentName:"p"},"VM VirtualBox Extension Pack")," which is a set of extensions of the Oracle VM VirtualBox base package. The extension pack provides functionalities related to connectivity and remote desktop features.\nTo install it, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"download")," page or run the following command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=Download VirtualBox Extension Pack",title:"Download",VirtualBox:!0,Extension:!0,Pack:!0},"wget https://download.virtualbox.org/virtualbox/6.1.22/Oracle_VM_VirtualBox_Extension_Pack-6.1.22.vbox-extpack\n")),(0,r.kt)("p",null,"In VirtualBox, we need to navigate the menu :  ",(0,r.kt)("inlineCode",{parentName:"p"},"File -> Preference -> Extensions"),", then click on the add button and select the package we just downloaded.\nOnce there, the extension will be visible in the window"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"VirtualBox Extensions",src:(0,l.Z)("/img/setup_spark_cluster/virtualbox_extensions.png")})),(0,r.kt)("h3",{id:"2-install-vagrant"},"2. Install Vagrant"),(0,r.kt)("p",null,"Vagrant is a simple and powerful automation tool to deal with VMs. It uses a declarative configuration file which describes all your software requirements. To start let's install Vagrant. Go to ",(0,r.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/downloads"},"Download page")," and choose the right download steps for your OS."),(0,r.kt)("p",null,"For Debian based OS :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n\nsudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\n\nsudo apt-get update && sudo apt-get install vagrant\n')),(0,r.kt)("p",null,"Once installed, run ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant --help")," to verify the installation."),(0,r.kt)("h3",{id:"3-install-ansible"},"3. Install Ansible"),(0,r.kt)("h2",{id:"create-vms-with-vagrant"},"Create VMs with Vagrant"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a Vagrant configuration")),(0,r.kt)("p",null,"Now let's create a project directory, in which we create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"Vagrantfile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir spark-cluster && cd spark-cluster\nvim Vagrantfile\n")),(0,r.kt)("p",null,"So in the first part, we declare the base image we gonna use ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu/xenial64")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=Vagrantfile",title:"Vagrantfile"},'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\nVAGRANTFILE_API_VERSION = "2"\nIMAGE_NAME = "ubuntu/xenial64"\n\nVagrant.configure(VAGRANTFILE_API_VERSION) do |config|\n  config.vm.box = IMAGE_NAME\n\n  config.vm.synced_folder ".", "/vagrant", disabled: true\n\n  config.vm.provider :virtualbox do |v|\n    v.memory = 1024\n    v.cpus = 2\n    v.linked_clone = true\n  end\n\n  boxes = [\n      {:name => "master",   :ip => "10.11.13.10"},\n      {:name => "worker-1", :ip => "10.11.13.11"},\n      {:name => "worker-2", :ip => "10.11.13.12"}\n  ]\n\n  # Provision each of the VMs.\n  boxes.each do |opts|\n    config.vm.define opts[:name] do |config|\n      config.vm.hostname = opts[:name]\n      config.vm.network :private_network, ip: opts[:ip]\n    end\n  end\n\nend\n')),(0,r.kt)("p",null,"To start the VMs, just run :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vagrant up\n")),(0,r.kt)("p",null,"The VMs are now up and running !\nyou can check there status by running ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant status"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Current machine states:\n\nmaster                    running (virtualbox)\nworker-1                  running (virtualbox)\nworker-2                  running (virtualbox)\n")),(0,r.kt)("p",null,"Also you can see the VMs on VirtualBox ui :"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"Spark reduceByKey",src:(0,l.Z)("/img/setup_spark_cluster/virtualbox.png")})),(0,r.kt)("p",null,"Now to ssh into each one on them, just run :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-title=vagrant",metastring:"ssh master",ssh:!0,master:!0},"vagrant@master:~$ \n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To shut down all the VMs at once, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant halt"),"\nTo remove the VMs completely, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant destroy"))),(0,r.kt)("h2",{id:"setup-spark-nodes"},"Setup Spark Nodes"),(0,r.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Spark runs on Java 8/11, Scala 2.12. So we need to have Java JRE 8 installed (also JDK seems to be a pre-requisite as well).\nOn Debian based OS (like Ubuntu), this is as simple as running this command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install default-jdk\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Spark")," runs on Java 8/11, Scala 2.12, Python 3.6+ and R 3.5+. "),(0,r.kt)("p",{parentName:"admonition"},"Java 8 prior to version 8u92 support is deprecated as of Spark 3.0.0. For the Scala API, Spark 3.1.2 uses Scala 2.12.\nYou will need to use a compatible Scala version (2.12.x).")),(0,r.kt)("p",null,"Then check the java version by running :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -version\n")),(0,r.kt)("p",null,"The output tells you that Java is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/jvm/default-java"),"."),(0,r.kt)("h3",{id:"download-spark"},"Download Spark"),(0,r.kt)("p",null,"Download latest Spark version when you are going to install. At writing time it's ",(0,r.kt)("strong",{parentName:"p"},"v3.1.2")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://mirrors.ircam.fr/pub/apache/spark/spark-3.1.2/spark-3.1.2-bin-hadoop3.2.tgz /tmp/spark/\n")),(0,r.kt)("p",null,"Extract the package to ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/spark")," directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar xzvf /tmp/spark/spark-3.1.2-bin-hadoop3.2.tgz -c /opt/spark/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Spark")," uses environment variables to locate it's HOME_DIR and java, so we need to add those variables to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Edit .bashrc file"',title:'"Edit',".bashrc":!0,'file"':!0},"sudo vim ~/.bashrc\n")),(0,r.kt)("p",null,"And add the following entries at the end :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export JAVA_HOME=/usr/lib/jvm/default-java\nexport SPARK_HOME=/opt/spark\nexport PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin\n")),(0,r.kt)("p",null,"Now source the file to apply those changes to the current session :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source ~/.bashrc\n")),(0,r.kt)("p",null,"Latest Apache Spark is successfully installed in your VM !"),(0,r.kt)("h3",{id:"verify-installation"},"Verify installation"),(0,r.kt)("p",null,"To verify the installation, close the Terminal already opened, and open a new Terminal again. Run the following command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spark-shell\n")),(0,r.kt)("h3",{id:"configure-the-master-node"},"Configure the Master node"),(0,r.kt)("p",null,"The most important configuration files you need to know about are :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf/spark-defaults.conf")," : control most application parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf/spark-env.sh")," : can be used to set per-machine settings, such as the IP address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf/log4j.properties")," : can be used to configure applications logging properties.")),(0,r.kt)("p",null,"Let's configure each one of them :"),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-defaults.conf")," and put the following properties inside :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim /opt/spark/conf/spark-defaults.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"spark.master            spark://10.11.13.10:7077\nspark.executor.memory   1g\nspark.eventLog.enabled  true\nspark.serializer        org.apache.spark.serializer.KryoSerializer\n")),(0,r.kt)("p",null,"Copy and edit ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-env.sh")," file :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp $SPARK_HOME/conf/spark-env.sh.template $SPARK_HOME/conf/spark-env.sh\nvim $SPARK_HOME/conf/spark-env.sh\n")),(0,r.kt)("p",null,"Add the following line :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"export SPARK_MASTER_HOST=10.11.13.10\n")),(0,r.kt)("p",null,"Copy and edit ",(0,r.kt)("inlineCode",{parentName:"p"},"slaves")," file :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp $SPARK_HOME/conf/slaves.template $SPARK_HOME/conf/slaves\nvim $SPARK_HOME/conf/slaves\n")),(0,r.kt)("p",null,'Add IP address of slaves. Delete "localhost" #if present'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"10.11.13.11\n10.11.13.12\n")),(0,r.kt)("h2",{id:"run-the-cluster"},"Run the cluster"),(0,r.kt)("p",null,"From spark master node, run the following command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$SPARK_HOME/sbin/start-all.sh\n")),(0,r.kt)("p",null,"The spark ui will be available on ",(0,r.kt)("a",{parentName:"p",href:"http://10.11.13.10:8080"},"10.11.13.10:8080")),(0,r.kt)("h2",{id:"submitting-application-to-cluster"},"Submitting Application to Cluster"),(0,r.kt)("p",null,"We can check if our cluster is correctly running by submitting an application. Spark comes with some examples, run the code below to calculate the value of Pi."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"spark-submit \\\n  --class org.apache.spark.examples.SparkPi \\\n  --master spark://10.11.13.10:7077 \\\n  $SPARK_HOME/examples/jars/spark-examples_2.12-3.1.2.jar\n")),(0,r.kt)("p",null,"In the console, you will see the following output : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Compute PI" {11}',title:'"Compute','PI"':!0,"{11}":!0},"21/06/20 10:10:49 INFO SparkContext: Running Spark version 3.1.2\n21/06/20 10:10:49 INFO ResourceUtils: ==============================================================\n21/06/20 10:10:49 INFO ResourceUtils: No custom resources configured for spark.driver.\n21/06/20 10:10:49 INFO ResourceUtils: ==============================================================\n21/06/20 10:10:50 INFO SparkContext: Submitted application: Spark Pi\n...\n21/06/20 10:10:57 INFO DAGScheduler: ResultStage 0 (reduce at SparkPi.scala:38) finished in 3.687 s\n21/06/20 10:10:57 INFO DAGScheduler: Job 0 is finished. Cancelling potential speculative or zombie tasks for this job\n21/06/20 10:10:57 INFO TaskSchedulerImpl: Killing all running tasks in stage 0: Stage finished\n21/06/20 10:10:57 INFO DAGScheduler: Job 0 finished: reduce at SparkPi.scala:38, took 3.807045 s\nPi is roughly 3.141715708578543\n21/06/20 10:10:57 INFO SparkUI: Stopped Spark web UI at http://192.168.1.71:4040\n21/06/20 10:10:57 INFO StandaloneSchedulerBackend: Shutting down all executors\n")),(0,r.kt)("p",null,'Once completed, the application name will show up in the "Completed Applications" section in the Spark UI:'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"Spark UI",src:(0,l.Z)("/img/setup_spark_cluster/pi_application.png")})),(0,r.kt)("h2",{id:"using-spark-history-server"},"Using Spark History Server"),(0,r.kt)("p",null,"To check applications logs, you can run Spark history server on master node :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"start-history-server.sh\n")),(0,r.kt)("p",null,"The UI will be available on ",(0,r.kt)("a",{parentName:"p",href:"http://10.11.13.10:18080"},"10.11.13.10:18080")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"Spark History Server UI",src:(0,l.Z)("/img/setup_spark_cluster/spark_history_server.png")})),(0,r.kt)("h2",{id:"one-playbook-to-unite-them-all"},'"One Playbook to unite them all"'),(0,r.kt)("p",null,"Finally, we don't want to repeat all these steps each time we add a new worker node.\nSo what we did is, we created an Ansible playbook that provisions the VMs automatically. The project is found here : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helkaroui/ansible-vagrant-stacks/tree/main/spark"},"ansible-vagrant-stacks"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we have learnt how to setup our own Spark Stand Alone Cluster and how to submit a simple application to it.\nThis setup will allow us to experiment with Spark's fundamental and deep dive into its internals."))}k.isMDXComponent=!0}}]);