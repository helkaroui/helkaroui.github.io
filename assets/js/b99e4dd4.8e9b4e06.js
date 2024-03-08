"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[1496],{5788:(e,a,n)=>{n.d(a,{Iu:()=>p,yg:()=>y});var t=n(1504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,y=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return n?t.createElement(y,o(o({ref:a},p),{},{components:n})):t.createElement(y,o({ref:a},p))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7820:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(5072),r=(n(1504),n(5788));const l={title:"Quick Start Guide to Scala Programming"},o=void 0,i={unversionedId:"languages/scala/quick_start",id:"languages/scala/quick_start",title:"Quick Start Guide to Scala Programming",description:"Scala is a versatile programming language that combines object-oriented and functional programming paradigms. Known for its concise syntax and powerful features, Scala is an excellent choice for a wide range of software development tasks. In this quick start guide, we'll walk you through the essentials of getting started with Scala programming.",source:"@site/sections/developer/languages/scala/01-quick_start.md",sourceDirName:"languages/scala",slug:"/languages/scala/quick_start",permalink:"/developer/languages/scala/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to Scala Programming"},sidebar:"docs",next:{title:"Akka Cluster",permalink:"/developer/languages/scala/akka/akka_cluster"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Hello, Scala!",id:"hello-scala",level:2},{value:"Compiling and Running",id:"compiling-and-running",level:2},{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},g="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.c)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Scala is a versatile programming language that combines object-oriented and functional programming paradigms. Known for its concise syntax and powerful features, Scala is an excellent choice for a wide range of software development tasks. In this quick start guide, we'll walk you through the essentials of getting started with Scala programming."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Before you begin, you'll need to install Scala on your system. Follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Download Scala:")," Visit the official Scala website (",(0,r.yg)("a",{parentName:"li",href:"https://www.scala-lang.org/download/"},"https://www.scala-lang.org/download/"),") and follow the installation guide for your operating system.\nTo install Scala, it is recommended to use cs setup, the Scala installer powered by Coursier. It installs everything necessary to use the latest Scala release from a command line:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# For linux users\ncurl -fL https://github.com/coursier/coursier/releases/latest/download/cs-x86_64-pc-linux.gz | gzip -d > cs && chmod +x cs && ./cs setup\n")),(0,r.yg)("p",null,"The .profile file is updated but it will not be applied until next reboot of the os. To have the scala available either reboot your os or run the following command :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"source ~/.profile\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Verify Installation:")," Open a terminal and type ",(0,r.yg)("inlineCode",{parentName:"li"},"scala -version")," to verify that Scala is installed correctly. You should see the version information displayed.")),(0,r.yg)("h2",{id:"hello-scala"},"Hello, Scala!"),(0,r.yg)("p",null,'Let\'s dive right into writing a simple "Hello, World!" program in Scala.'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open a Text Editor:")," Open your favorite text editor or integrated development environment (IDE) to write your Scala code.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Write the Code:")," Enter the following code:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'object HelloWorld {\n    def main(args: Array[String]): Unit = {\n        println("Hello, Scala!")\n    }\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Save the File:")," Save the file with a ",(0,r.yg)("inlineCode",{parentName:"p"},".scala")," extension, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"HelloWorld.scala"),"."))),(0,r.yg)("h2",{id:"compiling-and-running"},"Compiling and Running"),(0,r.yg)("p",null,"Now that you have your Scala code ready, it's time to compile and run it."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open a Terminal:")," Open a terminal and navigate to the directory where you saved the ",(0,r.yg)("inlineCode",{parentName:"p"},"HelloWorld.scala")," file.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Compile:")," Compile the Scala code using the ",(0,r.yg)("inlineCode",{parentName:"p"},"scalac")," compiler:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"scalac HelloWorld.scala\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run:")," After compiling, you'll find a ",(0,r.yg)("inlineCode",{parentName:"p"},".class")," file in the same directory. Run your program using the ",(0,r.yg)("inlineCode",{parentName:"p"},"scala")," command followed by the name of the class without the ",(0,r.yg)("inlineCode",{parentName:"p"},".class")," extension:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"scala HelloWorld\n")))),(0,r.yg)("h2",{id:"basic-syntax"},"Basic Syntax"),(0,r.yg)("p",null,"Here are a few basic Scala syntax elements to get you started:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Variable Declaration:")," Declare variables using ",(0,r.yg)("inlineCode",{parentName:"p"},"val")," (immutable) or ",(0,r.yg)("inlineCode",{parentName:"p"},"var")," (mutable)."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val message = "Hello, Scala!"\nvar count = 10\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Functions:")," Define functions using the ",(0,r.yg)("inlineCode",{parentName:"p"},"def")," keyword."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'def greet(name: String): Unit = {\n    println(s"Hello, $name!")\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"String Interpolation:")," Embed variables directly in strings using the ",(0,r.yg)("inlineCode",{parentName:"p"},"s")," prefix."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val name = "Alice"\nval greeting = s"Hello, $name!"\n')))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Congratulations! You've taken your first steps into the world of Scala programming. This quick start guide introduced you to installing Scala, writing a simple program, and compiling and running it. As you continue your Scala journey, you'll explore its rich features, including pattern matching, functional programming constructs, and advanced libraries. Scala's versatility makes it an excellent choice for various application domains, from web development to data processing and beyond. Happy coding!"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Resources:")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/helkaroui/sharek.dev-playbooks/tree/main/developer/languages/scala/1-quick-start"},"https://github.com/helkaroui/sharek.dev-playbooks")))}u.isMDXComponent=!0}}]);