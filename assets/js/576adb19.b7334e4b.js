"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Quick Start Guide to Go Programming"},i=void 0,l={unversionedId:"languages/go/quick_start",id:"languages/go/quick_start",title:"Quick Start Guide to Go Programming",description:"Go, often referred to as Golang, is a modern programming language designed for simplicity, efficiency, and speed. Known for its clean syntax and strong focus on concurrency, Go is a versatile language suitable for various types of applications. In this quick start guide, we'll take you through the basics of getting started with Go programming.",source:"@site/sections/developer/languages/go/01-quick_start.md",sourceDirName:"languages/go",slug:"/languages/go/quick_start",permalink:"/developer/languages/go/quick_start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start Guide to Go Programming"},sidebar:"docs",previous:{title:"Cheat Sheet",permalink:"/developer/languages/python/cheat_sheet"},next:{title:"Quick Start Guide to Rust Programming",permalink:"/developer/languages/rust/quick_start"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Hello, Go!",id:"hello-go",level:2},{value:"Running Go Code",id:"running-go-code",level:2},{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Go, often referred to as Golang, is a modern programming language designed for simplicity, efficiency, and speed. Known for its clean syntax and strong focus on concurrency, Go is a versatile language suitable for various types of applications. In this quick start guide, we'll take you through the basics of getting started with Go programming."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Before you dive into Go programming, you'll need to install the Go programming language on your system. Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Download Go:")," Visit the official Go website (",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"https://golang.org/dl/"),") and download the latest version of Go for your operating system.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install Go:")," Run the installer you downloaded and follow the installation instructions. Make sure to set up your Go workspace properly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify Installation:")," Open a terminal or command prompt and type ",(0,r.kt)("inlineCode",{parentName:"p"},"go version")," to verify that Go is installed correctly. You should see the version number displayed."))),(0,r.kt)("h2",{id:"hello-go"},"Hello, Go!"),(0,r.kt)("p",null,'Let\'s start by writing a simple "Hello, World!" program in Go.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a Text Editor:")," Open your favorite text editor or integrated development environment (IDE) to write your Go code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write the Code:")," Enter the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, Go!")\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Save the File:")," Save the file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".go")," extension, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.go"),"."))),(0,r.kt)("h2",{id:"running-go-code"},"Running Go Code"),(0,r.kt)("p",null,"Now that you have your Go code ready, let's see how to run it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a Terminal or Command Prompt:")," Open a terminal or command prompt and navigate to the directory where you saved the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.go")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run the Code:")," To run the Go program, simply type:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run hello.go\n")))),(0,r.kt)("h2",{id:"basic-syntax"},"Basic Syntax"),(0,r.kt)("p",null,"Here are a few basic Go syntax elements to get you started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Variable Declaration:")," Declare variables using the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," keyword."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'message := "Hello, Go!"\nnumber := 42\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Functions:")," Define functions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"func")," keyword."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func greet(name string) {\n    fmt.Println("Hello, " + name + "!")\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"String Formatting:")," Use string formatting to combine variables with strings."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'name := "Alice"\ngreeting := fmt.Sprintf("Hello, %s!", name)\n')))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You've just embarked on your Go programming journey. This quick start guide covered installing Go, writing a simple program, and running it. Go's simplicity, efficiency, and strong concurrency support make it an excellent choice for building high-performance applications and systems programming tasks. As you continue your Go adventure, you'll explore advanced features like goroutines, channels, and interfaces, which are key to mastering Go's powerful concurrency model. Happy coding!"))}g.isMDXComponent=!0}}]);