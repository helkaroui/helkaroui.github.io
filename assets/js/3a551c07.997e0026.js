"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Quick Start Guide to SBT (Scala Build Tool)"},i=void 0,l={unversionedId:"compilers_build_tools/sbt/quick_start",id:"compilers_build_tools/sbt/quick_start",title:"Quick Start Guide to SBT (Scala Build Tool)",description:"SBT (Scala Build Tool) is a popular build tool for Scala projects. It automates various tasks related to building, testing, and packaging Scala projects, making the development process smoother and more efficient. This quick start guide will help you get up and running with SBT in no time.",source:"@site/sections/developer/compilers_build_tools/sbt/01-quick_start.md",sourceDirName:"compilers_build_tools/sbt",slug:"/compilers_build_tools/sbt/quick_start",permalink:"/developer/compilers_build_tools/sbt/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to SBT (Scala Build Tool)"},sidebar:"docs",previous:{title:"Quick Start Guide to Gradle",permalink:"/developer/compilers_build_tools/gradle/quick_start"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Creating a New SBT Project",id:"creating-a-new-sbt-project",level:2},{value:"Building and Running the Project",id:"building-and-running-the-project",level:2},{value:"Managing Dependencies",id:"managing-dependencies",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Packaging and Distribution",id:"packaging-and-distribution",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SBT (Scala Build Tool) is a popular build tool for Scala projects. It automates various tasks related to building, testing, and packaging Scala projects, making the development process smoother and more efficient. This quick start guide will help you get up and running with SBT in no time."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Before you start using SBT, you need to install it on your system. SBT requires Java to be installed, so make sure you have Java (JDK) installed as well."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install Java:")," If you don't have Java installed, download and install the latest Java Development Kit (JDK) for your platform from the official Oracle/OpenJDK website.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install SBT:")," You can install SBT using various methods, but one of the most common ways is by using a package manager like ",(0,r.kt)("inlineCode",{parentName:"p"},"brew")," (for macOS) or ",(0,r.kt)("inlineCode",{parentName:"p"},"scoop")," (for Windows), or by downloading the SBT launcher directly from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/download.html"},"official SBT website"),"."))),(0,r.kt)("h2",{id:"creating-a-new-sbt-project"},"Creating a New SBT Project"),(0,r.kt)("p",null,"Once SBT is installed, you can create a new Scala project easily:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open Terminal/Command Prompt:")," Navigate to the directory where you want to create your project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a New Project:")," Run the following command to create a new SBT project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt new scala/scala-seed.g8\n")),(0,r.kt)("p",{parentName:"li"},'This command will use the "scala-seed.g8" template to create a basic Scala project structure.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enter Project Details:")," SBT will prompt you to enter various details like the project name, organization, and package name. Follow the prompts to set up your project."))),(0,r.kt)("h2",{id:"building-and-running-the-project"},"Building and Running the Project"),(0,r.kt)("p",null,"Now that your project is set up, you can build and run it using SBT:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Navigate to Project Directory:")," Open a terminal/command prompt and navigate to the root directory of your SBT project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compile the Project:")," Run the following command to compile your project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt compile\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run the Project:")," If your project has a main class defined, you can run it using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt run\n")))),(0,r.kt)("h2",{id:"managing-dependencies"},"Managing Dependencies"),(0,r.kt)("p",null,"SBT makes it easy to manage project dependencies using a configuration file named ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," in your project directory:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Edit ",(0,r.kt)("inlineCode",{parentName:"strong"},"build.sbt"),":")," Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," file in a text editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add Dependencies:")," To add dependencies, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"libraryDependencies")," setting. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "org.apache.spark" %% "spark-core" % "3.2.0"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reload Changes:")," After editing ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt"),", go back to your terminal and run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt reload\n")),(0,r.kt)("p",{parentName:"li"},"This will load the changes you made to the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," file."))),(0,r.kt)("h2",{id:"running-tests"},"Running Tests"),(0,r.kt)("p",null,"SBT also supports running tests using various testing frameworks like ScalaTest or specs2:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write Tests:")," Create test files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/scala")," directory of your project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run Tests:")," To run tests, use the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt test\n")))),(0,r.kt)("h2",{id:"packaging-and-distribution"},"Packaging and Distribution"),(0,r.kt)("p",null,"To package your project into a JAR or other distribution formats:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Package Project:")," Run the following command to package your project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt package\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Distribute:")," The packaged artifacts will be located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory of your project."))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You've successfully set up an SBT project, managed dependencies, built and run your project, and even tested and packaged it. This quick start guide provides just a glimpse into the capabilities of SBT, but it should be enough to get you started on your Scala development journey. Remember to explore the official ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/documentation.html"},"SBT documentation")," for more advanced features and configurations. Happy coding!"))}d.isMDXComponent=!0}}]);