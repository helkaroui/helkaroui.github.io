(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[5087],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1341:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],a={title:"Static Web Hosting"},c={unversionedId:"services/staticwebhosting/overview",id:"services/staticwebhosting/overview",isDocsHomePage:!1,title:"Static Web Hosting",description:"There are a lot of static site generators out there and users have a lot of possibilities to automate and continuously",source:"@site/notes/home_cloud_notes/services/staticwebhosting/overview.mdx",sourceDirName:"services/staticwebhosting",slug:"/services/staticwebhosting/overview",permalink:"/home_cloud/services/staticwebhosting/overview",version:"current",frontMatter:{title:"Static Web Hosting"}},l=[],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are a lot of static site generators out there and users have a lot of possibilities to automate and continuously\ndeploy static sites these days. Solutions like GitHub pages or Netlify are free to use and easy to set up, even a cheap\nwebspace could work. If one of these services is sufficient for your use case you could stop reading at this point."),(0,i.kt)("p",null,"As I wanted to have more control over such a setup and because it might be fun I decided to create our own service.\nBefore we look into the setup details, lets talk about some requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"easy CI workflow"),(0,i.kt)("li",{parentName:"ul"},"deploy multiple static sites easily"),(0,i.kt)("li",{parentName:"ul"},"use git repository name as subdomain")),(0,i.kt)("p",null,"The fist solutions we've put in place was to serve static sites using only Ngnix. Thus the CD workflow was a little\ndifficult to put in place : we used Ansible to deploy the static site from Gitlab's CI/CD workflow.\nThis design decision has its fallback :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We expose an SSH inbound connection publicly."),(0,i.kt)("li",{parentName:"ul"},"Versioning is not supported in case of rollback.")),(0,i.kt)("p",null,"Minio is object storage compatibile with s3 and it's 100% open source, s3www is opensouce software that can serve pages\nfrom compatibile s3 storage"),(0,i.kt)("p",null,"Of course, Minio could be removed from the stack but after a few tests, my personal impression was that Minio is a way\nbetter to handle file sync and uploads instead over SSH/SCP, at least in a CI driven workflow. The whole workflow is\nnearly the same as for GitHub pages."))}p.isMDXComponent=!0}}]);