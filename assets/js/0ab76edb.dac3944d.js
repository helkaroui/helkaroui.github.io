(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[9503],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8013:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"Keycloak"},l={unversionedId:"services/keycloak",id:"services/keycloak",isDocsHomePage:!1,title:"Keycloak",description:"Keycloak is an open source Identity and Access Management solution aimed at modern applications and services.  It makes",source:"@site/notes/home_cloud_notes/services/keycloak.md",sourceDirName:"services",slug:"/services/keycloak",permalink:"/home_cloud/services/keycloak",version:"current",frontMatter:{title:"Keycloak"},sidebar:"docs",previous:{title:"OpenVPN",permalink:"/home_cloud/services/openvpn"},next:{title:"Nginx",permalink:"/home_cloud/services/nginx"}},s=[{value:"Getting started",id:"getting-started",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Keycloak is an open source Identity and Access Management solution aimed at modern applications and services.  It makes\nit easy to secure applications and services with little to no code. "),(0,a.kt)("p",null,"Keycloak implements the following features :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single-Sign On: users authenticate with keycloak rather than individual applications auth systems. Once logged-in to\nKeycloak, users don't have to login again. "),(0,a.kt)("li",{parentName:"ul"},"LDAP Bridge: if your users authenticate to workstations using LDAP or Active Directory, they can also be authenticated\nto keycloak automatically without providing username and password."),(0,a.kt)("li",{parentName:"ul"},"Social login: Enabling login with social networks is easy to add through the admin console. This means, you only need\nto configure keycloak once per social network."),(0,a.kt)("li",{parentName:"ul"},"Standard Protocols: Keycloak is based on standard protocols and provides support for OpenID Connect, OAuth 2.0, and SAML.")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:12.0.4\n")))}p.isMDXComponent=!0}}]);