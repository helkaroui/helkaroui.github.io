"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[4105],{5680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>d});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},g=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?t.createElement(d,o(o({ref:a},g),{},{components:n})):t.createElement(d,o({ref:a},g))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2350:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const i={title:"Quick Start Guide to Java Programming"},o=void 0,l={unversionedId:"languages/java/quick_start",id:"languages/java/quick_start",title:"Quick Start Guide to Java Programming",description:"Java, a versatile and widely-used programming language, is known for its portability, object-oriented features, and vast ecosystem of libraries and frameworks. Whether you're a beginner or an experienced developer, Java's simplicity and robustness make it an excellent choice for various application types. In this quick start guide, we'll introduce you to the essentials of getting started with Java programming.",source:"@site/sections/developer/languages/java/01-quick_start.md",sourceDirName:"languages/java",slug:"/languages/java/quick_start",permalink:"/developer/languages/java/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to Java Programming"},sidebar:"docs",previous:{title:"Quick Start Guide to Rust Programming",permalink:"/developer/languages/rust/quick_start"},next:{title:"Java Features",permalink:"/developer/languages/java/java-features-per-version"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Hello, Java!",id:"hello-java",level:2},{value:"Compiling and Running Java Code",id:"compiling-and-running-java-code",level:2},{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:p},u="wrapper";function c(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Java, a versatile and widely-used programming language, is known for its portability, object-oriented features, and vast ecosystem of libraries and frameworks. Whether you're a beginner or an experienced developer, Java's simplicity and robustness make it an excellent choice for various application types. In this quick start guide, we'll introduce you to the essentials of getting started with Java programming."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Before you start coding in Java, you need to set up your development environment. Follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Download Java:")," Visit the official Oracle Java website (",(0,r.yg)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"https://www.oracle.com/java/technologies/javase-downloads.html"),") and download the latest version of the Java Development Kit (JDK).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Install JDK:")," Run the installer you downloaded and follow the installation instructions. The JDK includes the Java compiler (",(0,r.yg)("inlineCode",{parentName:"p"},"javac"),") and other essential tools.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Set Environment Variables:")," After installing the JDK, you need to set up environment variables to enable your system to find the Java tools. Add the following lines to your shell profile file (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,r.yg)("inlineCode",{parentName:"p"},".zshrc"),"):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=/path/to/your/jdk\nexport PATH=$PATH:$JAVA_HOME/bin\n")))),(0,r.yg)("h2",{id:"hello-java"},"Hello, Java!"),(0,r.yg)("p",null,'Let\'s dive right into writing a simple "Hello, Java!" program.'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open a Text Editor:")," Open your favorite text editor or integrated development environment (IDE) to write your Java code.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Write the Code:")," Enter the following code:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Save the File:")," Save the file with a ",(0,r.yg)("inlineCode",{parentName:"p"},".java")," extension, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"HelloWorld.java"),"."))),(0,r.yg)("h2",{id:"compiling-and-running-java-code"},"Compiling and Running Java Code"),(0,r.yg)("p",null,"Now that you have your Java code ready, let's see how to compile and run it."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open a Terminal:")," Open a terminal and navigate to the directory where you saved the ",(0,r.yg)("inlineCode",{parentName:"p"},"HelloWorld.java")," file.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Compile:")," Compile the Java code using the ",(0,r.yg)("inlineCode",{parentName:"p"},"javac")," compiler:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"javac HelloWorld.java\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run:")," After compiling, you'll find a ",(0,r.yg)("inlineCode",{parentName:"p"},".class")," file in the same directory. Run your program using the ",(0,r.yg)("inlineCode",{parentName:"p"},"java")," command followed by the class name without the ",(0,r.yg)("inlineCode",{parentName:"p"},".class")," extension:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"java HelloWorld\n")))),(0,r.yg)("h2",{id:"basic-syntax"},"Basic Syntax"),(0,r.yg)("p",null,"Here are a few basic Java syntax elements to get you started:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Variable Declaration:")," Declare variables using data types like ",(0,r.yg)("inlineCode",{parentName:"p"},"int"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"String"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"double"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'int number = 42;\nString message = "Hello, Java!";\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Methods:")," Define methods using the ",(0,r.yg)("inlineCode",{parentName:"p"},"public static")," keywords."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public static void greet(String name) {\n    System.out.println("Hello, " + name + "!");\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"String Concatenation:")," Combine strings using the ",(0,r.yg)("inlineCode",{parentName:"p"},"+")," operator."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String name = "Alice";\nString greeting = "Hello, " + name + "!";\n')))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Congratulations! You've taken your first steps into the world of Java programming. This quick start guide covered installing Java, writing a simple program, compiling it, and running it. Java's versatility, rich libraries, and wide industry adoption make it an excellent language for building various applications, from desktop software to web applications and Android apps. As you continue your Java journey, you'll explore more advanced topics such as object-oriented programming, data structures, and multithreading, empowering you to create robust and powerful software solutions. Happy coding in Java!"))}c.isMDXComponent=!0}}]);