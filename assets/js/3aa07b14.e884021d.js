(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[6833],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),v=o,h=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4561:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={title:"OpenVPN"},s={unversionedId:"services/openvpn",id:"services/openvpn",isDocsHomePage:!1,title:"OpenVPN",description:"Overview",source:"@site/notes/home_cloud_notes/services/openvpn.md",sourceDirName:"services",slug:"/services/openvpn",permalink:"/home_cloud/services/openvpn",version:"current",frontMatter:{title:"OpenVPN"},sidebar:"docs",previous:{title:"PowerDNS",permalink:"/home_cloud/services/powerdns"},next:{title:"Keycloak",permalink:"/home_cloud/services/keycloak"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Manual installation",id:"manual-installation",children:[{value:"Setup OpenVPN",id:"setup-openvpn",children:[]},{value:"Configure the server",id:"configure-the-server",children:[]},{value:"Configure the client",id:"configure-the-client",children:[]},{value:"Enable routing",id:"enable-routing",children:[]},{value:"Enable local DNS",id:"enable-local-dns",children:[]}]},{value:"Dockerized version",id:"dockerized-version",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"OpenVPN allows peers to authenticate each other using pre-shared secret keys, certificates or username/password. It uses\nthe OpenSSL encryption library extensively, as well as the TLS protocol, and contains many security and control\nfeatures. It uses a custom security protocol that utilizes SSL/TLS for key exchange."),(0,i.kt)("p",null,"We've chosen OpenVPN because of its reliability and availability on several operating systems, especially under Android."),(0,i.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,i.kt)("h3",{id:"setup-openvpn"},"Setup OpenVPN"),(0,i.kt)("p",null,"To get started we need to install the openvpn server along with the tools needed to create and manage security keys.\nRun the following command to install it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install openvpn easy-rsa\n")),(0,i.kt)("h3",{id:"configure-the-server"},"Configure the server"),(0,i.kt)("p",null,"OpenVPN offers various internal security features. It has up to 256-bit encryption through the OpenSSL library"),(0,i.kt)("h3",{id:"configure-the-client"},"Configure the client"),(0,i.kt)("h3",{id:"enable-routing"},"Enable routing"),(0,i.kt)("p",null,"For the purpose of this example, we will assume that the server-side LAN uses a subnet of ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.0/24")," and the VPN IP\naddress pool uses ",(0,i.kt)("inlineCode",{parentName:"p"},"10.8.0.0/24")," as cited in the server directive in the OpenVPN server configuration file.\nFirst, you must advertise the ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.0/24")," subnet to VPN clients as being accessible through the VPN. This can easily be\ndone with the following server-side config file directive."),(0,i.kt)("p",null,"Add the following line :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Modify the file /etc/openvpn/server/server.conf"',title:'"Modify',the:!0,file:!0,'/etc/openvpn/server/server.conf"':!0},'push "route 192.168.1.0 255.255.255.0"\n')),(0,i.kt)("p",null,"Then restart OpenVPN server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart openvpn-server@server.service\n")),(0,i.kt)("h3",{id:"enable-local-dns"},"Enable local DNS"),(0,i.kt)("p",null,"In order to advertise our DNS to the clients, we can order OpenVPN to push the DNS server to the client. Modify the\nconf file and add the following line :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Modify the file /etc/openvpn/server/server.conf"',title:'"Modify',the:!0,file:!0,'/etc/openvpn/server/server.conf"':!0},'push "dhcp-option DNS 10.8.0.1"\n')),(0,i.kt)("p",null,"In this example our DNS server is running on the same machine where we are hosting the DNS ",(0,i.kt)("inlineCode",{parentName:"p"},"10.8.0.1"),"\nIf you're running the DNS on a different machine, you should first advertise the 192.168.1.0/24 subnet to VPN clients\nthen advertise the DNS address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Modify the file /etc/openvpn/server/server.conf"',title:'"Modify',the:!0,file:!0,'/etc/openvpn/server/server.conf"':!0},'push "route 192.168.1.0 255.255.255.0"\npush "dhcp-option DNS 10.8.0.23"\n')),(0,i.kt)("p",null,"Then restart OpenVPN server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart openvpn-server@server.service\n")),(0,i.kt)("h2",{id:"dockerized-version"},"Dockerized version"))}u.isMDXComponent=!0}}]);