"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[7514],{5680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>m});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?n.createElement(m,o(o({ref:a},g),{},{components:t})):n.createElement(m,o({ref:a},g))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9153:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(8168),r=(t(6540),t(5680));const i={title:"Quick Start Guide to Gradle"},o=void 0,l={unversionedId:"compilers_build_tools/gradle/quick_start",id:"compilers_build_tools/gradle/quick_start",title:"Quick Start Guide to Gradle",description:"Gradle is a powerful build automation tool used for building, testing, and deploying projects. It supports various programming languages and offers a flexible and efficient way to manage project dependencies, tasks, and configurations. In this quick start guide, we'll walk you through the basics of getting started with Gradle.",source:"@site/sections/developer/compilers_build_tools/gradle/01-quick_start.md",sourceDirName:"compilers_build_tools/gradle",slug:"/compilers_build_tools/gradle/quick_start",permalink:"/developer/compilers_build_tools/gradle/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to Gradle"},sidebar:"docs",previous:{title:"Java Features",permalink:"/developer/languages/java/java-features-per-version"},next:{title:"Quick Start Guide to SBT (Scala Build Tool)",permalink:"/developer/compilers_build_tools/sbt/quick_start"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Creating a New Gradle Project",id:"creating-a-new-gradle-project",level:2},{value:"Building and Running the Project",id:"building-and-running-the-project",level:2},{value:"Managing Dependencies",id:"managing-dependencies",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Packaging and Distribution",id:"packaging-and-distribution",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:s},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Gradle is a powerful build automation tool used for building, testing, and deploying projects. It supports various programming languages and offers a flexible and efficient way to manage project dependencies, tasks, and configurations. In this quick start guide, we'll walk you through the basics of getting started with Gradle."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Before you can use Gradle, you need to install it on your system. Here's how to do it:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Download Gradle:")," Visit the official Gradle website (",(0,r.yg)("a",{parentName:"p",href:"https://gradle.org/"},"https://gradle.org/"),") and download the latest version of Gradle.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Extract the Archive:")," Once the download is complete, extract the downloaded archive to a location on your system.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Environment Variables (Optional):")," For easy command-line access, you can add the Gradle ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory to your system's ",(0,r.yg)("inlineCode",{parentName:"p"},"PATH")," environment variable.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Verify Installation:")," Open a terminal or command prompt and run the following command to verify the installation:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle --version\n")),(0,r.yg)("p",{parentName:"li"},"You should see information about the installed Gradle version."))),(0,r.yg)("h2",{id:"creating-a-new-gradle-project"},"Creating a New Gradle Project"),(0,r.yg)("p",null,"Let's create a simple Java project using Gradle:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Navigate to Project Directory:")," Open a terminal/command prompt and navigate to the directory where you want to create your project.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Initialize a New Project:")," Run the following command to initialize a new Gradle project:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle init --type java-application\n")),(0,r.yg)("p",{parentName:"li"},"This will create a basic Java project structure."))),(0,r.yg)("h2",{id:"building-and-running-the-project"},"Building and Running the Project"),(0,r.yg)("p",null,"Now that your project is set up, you can build and run it using Gradle:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Navigate to Project Directory:")," Open a terminal/command prompt and navigate to the root directory of your Gradle project.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Build the Project:")," Run the following command to build your project:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle build\n")),(0,r.yg)("p",{parentName:"li"},"This command compiles your code, runs tests, and generates any necessary artifacts.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run the Project:")," If your project has an application class with a ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," method, you can run it using the following command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle run\n")),(0,r.yg)("p",{parentName:"li"},"This will execute the main class of your application."))),(0,r.yg)("h2",{id:"managing-dependencies"},"Managing Dependencies"),(0,r.yg)("p",null,"Gradle makes it easy to manage project dependencies using a configuration file named ",(0,r.yg)("inlineCode",{parentName:"p"},"build.gradle")," in your project directory:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Edit ",(0,r.yg)("inlineCode",{parentName:"strong"},"build.gradle"),":")," Open the ",(0,r.yg)("inlineCode",{parentName:"p"},"build.gradle")," file in a text editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add Dependencies:")," To add dependencies, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"dependencies")," block. For example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'org.apache.commons:commons-lang3:3.12.0'\n}\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Sync Gradle:")," After editing ",(0,r.yg)("inlineCode",{parentName:"p"},"build.gradle"),", you need to sync Gradle to apply the changes. Run:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle sync\n")))),(0,r.yg)("h2",{id:"running-tests"},"Running Tests"),(0,r.yg)("p",null,"Gradle supports running tests using various testing frameworks like JUnit or TestNG:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Write Tests:")," Create test classes in the appropriate test source directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run Tests:")," To run tests, use the following command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle test\n")))),(0,r.yg)("h2",{id:"packaging-and-distribution"},"Packaging and Distribution"),(0,r.yg)("p",null,"To package your project into a JAR or other distribution formats:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Package Project:")," Run the following command to package your project:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gradle assemble\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Distribute:")," The packaged artifacts will be located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"build/libs")," directory."))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"You've successfully set up a Gradle project, managed dependencies, built and run your project, and even tested and packaged it. This quick start guide covers the essentials to get you started with Gradle, but remember that Gradle offers a wide range of advanced features and customizations. Explore the official ",(0,r.yg)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/userguide.html"},"Gradle documentation")," to dive deeper into its capabilities. Happy building!"))}c.isMDXComponent=!0}}]);