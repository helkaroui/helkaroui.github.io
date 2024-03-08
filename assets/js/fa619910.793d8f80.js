"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[3414],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||y[d]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o={title:"Best Practices",keywords:["python","practice","langauge"],description:"Important python best practices every Python Developer should follow before,during & after writing the code. Also, remember what not to do.",tags:["python"],toc_max_heading_level:4},l=void 0,i={unversionedId:"languages/python/best_practices",id:"languages/python/best_practices",title:"Best Practices",description:"Important python best practices every Python Developer should follow before,during & after writing the code. Also, remember what not to do.",source:"@site/sections/developer/languages/python/best_practices.md",sourceDirName:"languages/python",slug:"/languages/python/best_practices",permalink:"/developer/languages/python/best_practices",draft:!1,tags:[{label:"python",permalink:"/developer/tags/python"}],version:"current",frontMatter:{title:"Best Practices",keywords:["python","practice","langauge"],description:"Important python best practices every Python Developer should follow before,during & after writing the code. Also, remember what not to do.",tags:["python"],toc_max_heading_level:4},sidebar:"docs",previous:{title:"Quick Start Guide to Python Programming",permalink:"/developer/languages/python/quick_start"},next:{title:"Cheat Sheet",permalink:"/developer/languages/python/cheat_sheet"}},s={},u=[{value:"Structure of the Python Project",id:"structure-of-the-python-project",level:2},{value:"Module",id:"module",level:3},{value:"Tests",id:"tests",level:3},{value:"Docs",id:"docs",level:3},{value:"requirements.txt",id:"requirementstxt",level:3},{value:"Setup.py",id:"setuppy",level:3},{value:"Virtual Environment",id:"virtual-environment",level:2},{value:"Coding style guidelines",id:"coding-style-guidelines",level:2},{value:"Use data classes",id:"use-data-classes",level:2}],c={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Learn what are the Python Coding Practices that you should follow to write a cleaner and more professional code."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"project structure"),(0,a.yg)("li",{parentName:"ul"},"using virtual envs"),(0,a.yg)("li",{parentName:"ul"},"writing unit & integration tests"),(0,a.yg)("li",{parentName:"ul"},"publishing to pypi"),(0,a.yg)("li",{parentName:"ul"},"using a CICD"),(0,a.yg)("li",{parentName:"ul"},"using OOP"),(0,a.yg)("li",{parentName:"ul"},"use data structures"),(0,a.yg)("li",{parentName:"ul"},"follow PEP8 style guidelines"),(0,a.yg)("li",{parentName:"ul"},"use click to create a cli tool")),(0,a.yg)("h2",{id:"structure-of-the-python-project"},"Structure of the Python Project"),(0,a.yg)("p",null,"If you have ever been on Github you must have noticed that most Python projects have a similar structure as follow :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 index.rst\n\u251c\u2500\u2500 module\n\u2502   \u251c\u2500\u2500 core.py\n\u2502   \u2514\u2500\u2500 __init__.py\n\u251c\u2500\u2500 tests\n\u2502   \u2514\u2500\u2500 core.py\n\u251c\u2500\u2500 venv\n\u2502   \u251c\u2500\u2500 bin/\n\u2502   \u2514\u2500\u2500 lib/\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 setup.py\n")),(0,a.yg)("h3",{id:"module"},"Module"),(0,a.yg)("p",null,"This holds your actual code that may be inside a subdirectory or inside root."),(0,a.yg)("h3",{id:"tests"},"Tests"),(0,a.yg)("p",null,"Most projects have tests- keep these in the tests directory."),(0,a.yg)("h3",{id:"docs"},"Docs"),(0,a.yg)("p",null,"So, next in python best practices is readable documentation. You may find it burdensome, but it creates clean code.\nFor this, you can use Markdown, reStructuredText, Sphinx, or docstrings."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Markdown")," and reStructuredText are markup languages with plain text formatting syntax to make it easier to mark up text and convert it to a format like HTML or PDF."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"reStructuredText")," lets you create in-line documentation."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Sphinx")," is a tool to easily create intelligent and beautiful documentation. It lets you generate Python documentation from existing reStructuredText and export documentation in formats like HTML."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Docstrings")," are documentation strings at the beginning of each module, class, or method.")),(0,a.yg)("h3",{id:"requirementstxt"},"requirements.txt"),(0,a.yg)("p",null,"This is not mandatory, but if you use this, you put it in the root directory."),(0,a.yg)("h3",{id:"setuppy"},"Setup.py"),(0,a.yg)("p",null,"This script in the root lets distutils build and distribute modules needed by the project."),(0,a.yg)("h2",{id:"virtual-environment"},"Virtual Environment"),(0,a.yg)("p",null,"A virtual environment is a tool that helps with managing dependencies in a Python project. A seperate environment is created for each project.\nSo the dependencies of every project are isolated from the system and each other."),(0,a.yg)("p",null,"To create & use a virtual environment :"),(0,a.yg)("p",null,"1- install virtualenv"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pip install virtualenv\n")),(0,a.yg)("p",null,"2- create the virtual environment"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"virtualenv venv     // created virtual Environment named 'venv'\n")),(0,a.yg)("p",null,"If you want to specify Python interpreter of your choice, for example, Python 3, it can be done using the following command :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"virtualenv -p /usr/bin/python3 venv\n")),(0,a.yg)("p",null,"3- After creating the virtual environment, you need to activate it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"source venv/bin/activate\n\nC:/> name\\Scripts\\Activate.ps1 # for Windows cmd.exe\n")),(0,a.yg)("p",null,"4- We can see the packages installed in this virtual environment using :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"pip list\n\n\nPackage    Version\n---------- -------\npip        21.2.4\nsetuptools 58.1.0\nwheel      0.37.0\n")),(0,a.yg)("h2",{id:"coding-style-guidelines"},"Coding style guidelines"),(0,a.yg)("h2",{id:"use-data-classes"},"Use data classes"),(0,a.yg)("p",null,"Since version 3.7, Python offers data classes. There are several advantages over regular classes or other alternatives like returning multiple values or dictionaries:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a data class requires a minimal amount of code"),(0,a.yg)("li",{parentName:"ul"},"you can compare data classes because ",(0,a.yg)("strong",{parentName:"li"},"eq")," is implemented for you"),(0,a.yg)("li",{parentName:"ul"},"you can easily print a data class for debugging because ",(0,a.yg)("strong",{parentName:"li"},"repr")," is implemented as well"),(0,a.yg)("li",{parentName:"ul"},"data classes require type hints, reduced the chances of bugs")),(0,a.yg)("p",null,"Here\u2019s an example of a data class at work:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\n\n@dataclass\nclass Car:\n    """Class representing car object"""\n    color: str\n    owner: str\n    \ncar = Car("red", "Jeff")\n')))}y.isMDXComponent=!0}}]);