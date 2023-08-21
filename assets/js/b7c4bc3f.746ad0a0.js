"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[4538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Quick Start Guide to Java Programming"},o=void 0,l={unversionedId:"languages/java/quick_start",id:"languages/java/quick_start",title:"Quick Start Guide to Java Programming",description:"Java, a versatile and widely-used programming language, is known for its portability, object-oriented features, and vast ecosystem of libraries and frameworks. Whether you're a beginner or an experienced developer, Java's simplicity and robustness make it an excellent choice for various application types. In this quick start guide, we'll introduce you to the essentials of getting started with Java programming.",source:"@site/sections/developer/languages/java/01-quick_start.md",sourceDirName:"languages/java",slug:"/languages/java/quick_start",permalink:"/developer/languages/java/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to Java Programming"},sidebar:"docs",previous:{title:"Quick Start Guide to Rust Programming",permalink:"/developer/languages/rust/quick_start"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Hello, Java!",id:"hello-java",level:2},{value:"Compiling and Running Java Code",id:"compiling-and-running-java-code",level:2},{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Java, a versatile and widely-used programming language, is known for its portability, object-oriented features, and vast ecosystem of libraries and frameworks. Whether you're a beginner or an experienced developer, Java's simplicity and robustness make it an excellent choice for various application types. In this quick start guide, we'll introduce you to the essentials of getting started with Java programming."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Before you start coding in Java, you need to set up your development environment. Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Download Java:")," Visit the official Oracle Java website (",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"https://www.oracle.com/java/technologies/javase-downloads.html"),") and download the latest version of the Java Development Kit (JDK).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install JDK:")," Run the installer you downloaded and follow the installation instructions. The JDK includes the Java compiler (",(0,r.kt)("inlineCode",{parentName:"p"},"javac"),") and other essential tools.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set Environment Variables:")," After installing the JDK, you need to set up environment variables to enable your system to find the Java tools. Add the following lines to your shell profile file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=/path/to/your/jdk\nexport PATH=$PATH:$JAVA_HOME/bin\n")))),(0,r.kt)("h2",{id:"hello-java"},"Hello, Java!"),(0,r.kt)("p",null,'Let\'s dive right into writing a simple "Hello, Java!" program.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a Text Editor:")," Open your favorite text editor or integrated development environment (IDE) to write your Java code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write the Code:")," Enter the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Save the File:")," Save the file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".java")," extension, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld.java"),"."))),(0,r.kt)("h2",{id:"compiling-and-running-java-code"},"Compiling and Running Java Code"),(0,r.kt)("p",null,"Now that you have your Java code ready, let's see how to compile and run it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a Terminal:")," Open a terminal and navigate to the directory where you saved the ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld.java")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compile:")," Compile the Java code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"javac")," compiler:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"javac HelloWorld.java\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run:")," After compiling, you'll find a ",(0,r.kt)("inlineCode",{parentName:"p"},".class")," file in the same directory. Run your program using the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," command followed by the class name without the ",(0,r.kt)("inlineCode",{parentName:"p"},".class")," extension:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java HelloWorld\n")))),(0,r.kt)("h2",{id:"basic-syntax"},"Basic Syntax"),(0,r.kt)("p",null,"Here are a few basic Java syntax elements to get you started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Variable Declaration:")," Declare variables using data types like ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'int number = 42;\nString message = "Hello, Java!";\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Methods:")," Define methods using the ",(0,r.kt)("inlineCode",{parentName:"p"},"public static")," keywords."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static void greet(String name) {\n    System.out.println("Hello, " + name + "!");\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"String Concatenation:")," Combine strings using the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String name = "Alice";\nString greeting = "Hello, " + name + "!";\n')))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You've taken your first steps into the world of Java programming. This quick start guide covered installing Java, writing a simple program, compiling it, and running it. Java's versatility, rich libraries, and wide industry adoption make it an excellent language for building various applications, from desktop software to web applications and Android apps. As you continue your Java journey, you'll explore more advanced topics such as object-oriented programming, data structures, and multithreading, empowering you to create robust and powerful software solutions. Happy coding in Java!"))}m.isMDXComponent=!0}}]);