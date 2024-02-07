"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[408],{5788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var a=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),c=r,y=g["".concat(s,".").concat(c)]||g[c]||m[c]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(5072),r=(n(1504),n(5788));const o={title:"Quick Start Guide to Rust Programming"},i=void 0,l={unversionedId:"languages/rust/quick_start",id:"languages/rust/quick_start",title:"Quick Start Guide to Rust Programming",description:"Rust is a modern systems programming language that emphasizes safety, performance, and concurrency. Known for its memory safety features and expressive syntax, Rust is becoming increasingly popular for a wide range of software development tasks. In this quick start guide, we'll guide you through the basics of getting started with Rust programming.",source:"@site/sections/developer/languages/rust/01-quick_start.md",sourceDirName:"languages/rust",slug:"/languages/rust/quick_start",permalink:"/developer/languages/rust/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to Rust Programming"},sidebar:"docs",previous:{title:"Quick Start Guide to Go Programming",permalink:"/developer/languages/go/quick_start"},next:{title:"Quick Start Guide to Java Programming",permalink:"/developer/languages/java/quick_start"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Hello, Rust!",id:"hello-rust",level:2},{value:"Compiling and Running Rust Code",id:"compiling-and-running-rust-code",level:2},{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Rust is a modern systems programming language that emphasizes safety, performance, and concurrency. Known for its memory safety features and expressive syntax, Rust is becoming increasingly popular for a wide range of software development tasks. In this quick start guide, we'll guide you through the basics of getting started with Rust programming."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Before you begin Rust programming, you need to install the Rust programming language on your system. Follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Download Rust:")," Visit the official Rust website (",(0,r.yg)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install"),") and follow the instructions to download and install Rust using the official Rust installer called ",(0,r.yg)("inlineCode",{parentName:"p"},"rustup"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Install Rust:")," Follow the prompts in the terminal to complete the installation. Rust's package manager, Cargo, will also be installed automatically.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Verify Installation:")," Open a terminal and type ",(0,r.yg)("inlineCode",{parentName:"p"},"rustc --version")," to verify that Rust is installed correctly. You should see the version number displayed."))),(0,r.yg)("h2",{id:"hello-rust"},"Hello, Rust!"),(0,r.yg)("p",null,'Let\'s start by writing a simple "Hello, World!" program in Rust.'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open a Text Editor:")," Open your favorite text editor or integrated development environment (IDE) to write your Rust code.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Write the Code:")," Enter the following code:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("Hello, Rust!");\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Save the File:")," Save the file with a ",(0,r.yg)("inlineCode",{parentName:"p"},".rs")," extension, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"hello.rs"),"."))),(0,r.yg)("h2",{id:"compiling-and-running-rust-code"},"Compiling and Running Rust Code"),(0,r.yg)("p",null,"Now that you have your Rust code ready, let's see how to compile and run it."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open a Terminal:")," Open a terminal and navigate to the directory where you saved the ",(0,r.yg)("inlineCode",{parentName:"p"},"hello.rs")," file.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Compile:")," To compile the Rust program, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"rustc")," compiler:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rustc hello.rs\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Run:")," After compiling, you'll find an executable file in the same directory. Run your program using the following command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./hello\n")))),(0,r.yg)("h2",{id:"basic-syntax"},"Basic Syntax"),(0,r.yg)("p",null,"Here are a few basic Rust syntax elements to get you started:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Variable Declaration:")," Declare variables using the ",(0,r.yg)("inlineCode",{parentName:"p"},"let")," keyword."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let message = "Hello, Rust!";\nlet number = 42;\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Functions:")," Define functions using the ",(0,r.yg)("inlineCode",{parentName:"p"},"fn")," keyword."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'fn greet(name: &str) {\n    println!("Hello, {}!", name);\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"String Formatting:")," Use string formatting with the ",(0,r.yg)("inlineCode",{parentName:"p"},"println!")," macro."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let name = "Alice";\nprintln!("Hello, {}!", name);\n')))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Congratulations! You've taken your first steps into the world of Rust programming. This quick start guide covered installing Rust, writing a simple program, compiling it, and running it. Rust's focus on memory safety, zero-cost abstractions, and concurrency make it a powerful language for systems programming, web development, and beyond. As you continue your Rust journey, you'll explore more advanced features like ownership, borrowing, and lifetimes, which are fundamental to Rust's unique safety guarantees. Happy coding!"))}m.isMDXComponent=!0}}]);