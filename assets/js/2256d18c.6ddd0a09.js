(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=i,m=b["".concat(a,".").concat(p)]||b[p]||d[p]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},136:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(17),o=n(137);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,a=r.forcePrependBaseUrl,s=void 0!==a&&a,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},137:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(7),r=(n(0),n(131)),a=n(136),s={title:"02-Hardening Nginx Security"},l={unversionedId:"tutorials/02-nginx-security-best-practices",id:"tutorials/02-nginx-security-best-practices",isDocsHomePage:!1,title:"02-Hardening Nginx Security",description:"Nginx is a lightweight, high-performance web server/reverse proxy and e-mail (IMAP/POP3) proxy. According to Netcraft,",source:"@site/notes/home_cloud_notes/tutorials/02-nginx-security-best-practices.mdx",slug:"/tutorials/02-nginx-security-best-practices",permalink:"/home_cloud/tutorials/02-nginx-security-best-practices",version:"current",sidebar:"docs",previous:{title:"01-Setup Nginx",permalink:"/home_cloud/tutorials/01-setup-nginx"},next:{title:"03-Docker cheatsheet",permalink:"/home_cloud/tutorials/03-docker_cheatsheet"}},c=[{value:"#1 Use restrictive Iptables Based Firewall",id:"1-use-restrictive-iptables-based-firewall",children:[]},{value:"#2: Controlling Buffer Overflow Attacks",id:"2-controlling-buffer-overflow-attacks",children:[]},{value:"#3: Control Simultaneous Connections",id:"3-control-simultaneous-connections",children:[]},{value:"#4: Allow Access To Our Domain Only",id:"4-allow-access-to-our-domain-only",children:[]},{value:"#5: Deny Certain User-Agents",id:"5-deny-certain-user-agents",children:[]},{value:"#6: Only allow SSL requests",id:"6-only-allow-ssl-requests",children:[]},{value:"#7: Disable server banner",id:"7-disable-server-banner",children:[]},{value:"#8: Clickjacking attack",id:"8-clickjacking-attack",children:[]},{value:"#9: X-XSS Protection",id:"9-x-xss-protection",children:[]},{value:"#10: Disable older SSL protocols in the Nginx configuration.",id:"10-disable-older-ssl-protocols-in-the-nginx-configuration",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nginx is a lightweight, high-performance web server/reverse proxy and e-mail (IMAP/POP3) proxy. According to Netcraft,\n13.50% of all domains on the Internet use nginx web server. Nginx is one of a handful of servers written to address the\nC10K problem. Unlike traditional servers, Nginx doesn\u2019t rely on threads to handle requests. Instead, it uses a much more\nscalable event-driven (asynchronous) architecture. Nginx powers several high traffic web sites, such as WordPress, Hulu,\nGithub, and SourceForge."),Object(r.b)("p",null,"This page collects hints how to improve the security of nginx web servers running on Linux operating system."),Object(r.b)("h2",{id:"1-use-restrictive-iptables-based-firewall"},"#1 Use restrictive Iptables Based Firewall"),Object(r.b)("p",null,"The following firewall script blocks everything and only allows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Incoming HTTP (TCP port 80) requests"),Object(r.b)("li",{parentName:"ul"},"Incoming HTTPS (TCP port 443) requests"),Object(r.b)("li",{parentName:"ul"},"Incoming ICMP ping requests")),Object(r.b)("p",null,"In this tutorial we will use UFW to manage Iptables:"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"UFW is a simplified command line configuration tool from Netfilter, which provides an alternative to the iptables\ntool. UFW should eventually allow automatic configuration of the firewall when installing programs that need it."),Object(r.b)("p",{parentName:"div"},"check if UFW is enabled on your system :"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw status\n")),Object(r.b)("p",{parentName:"div"},"If UFW is down you can enable it by running this command:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw enable\n")))),Object(r.b)("p",null,"To see the firewall current status, we will run the following command with verbose enabled :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw status verbose\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"Status: active\nLogging: on (low)\nDefault: deny (incoming), allow (outgoing), deny (routed)\nNew profiles: skip\n\nTo                         Action      From\n--                         ------      ----\n80                         ALLOW IN    192.168.0.0/24\n")),Object(r.b)("p",null,"Here we have only one rule; and it's instructing our firewall to only accept incoming connection on port 53."),Object(r.b)("p",null,"So, now want to allow incoming connections on the following ports: ",Object(r.b)("inlineCode",{parentName:"p"},"80, 443")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Allowing important ports"',title:'"Allowing',important:!0,'ports"':!0},"sudo ufw allow 80\nsudo ufw allow 443\n")),Object(r.b)("p",null,"Then we need to instruct the firewall to deny anything else :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw default deny\n")),Object(r.b)("p",null,"Another recommended practice is to enable logging and send it to a monitoring tool like ELK or Promotheus"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Enable logging"',title:'"Enable','logging"':!0},"sudo ufw logging on\n")),Object(r.b)("p",null,"Logs will be written to ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/ufw.log")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you run out of disk space, think to install a log curator or just run the following commands :"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw logging off\nsudo ufw logging low\n")))),Object(r.b)("h4",{id:"debugging"},"Debugging:"),Object(r.b)("p",null,"You should be aware that if your application should make outgoing call, you need to allow outgoing DNS queries.\nThis is done by running this command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw allow out 53\n")),Object(r.b)("h2",{id:"2-controlling-buffer-overflow-attacks"},"#2: Controlling Buffer Overflow Attacks"),Object(r.b)("p",null,"Edit nginx.conf and set the buffer size limitations for all clients."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0}," ## Start: Size Limits & Buffer Overflows ##\n  client_body_buffer_size  1K;\n  client_header_buffer_size 1k;\n  client_max_body_size 1k;\n  large_client_header_buffers 2 1k;\n ## END: Size Limits & Buffer Overflows ##\n")),Object(r.b)("br",null),Object(r.b)("p",null,"Where,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client_body_buffer_size 1k")," \u2013 (default is 8k or 16k) The directive specifies the client request body buffer size."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client_header_buffer_size 1k")," \u2013 Directive sets the headerbuffer size for the request header from client. For the overwhelming majority of requests a buffer size of 1K is sufficient. Increase this if you have a custom header or a large cookie sent from the client (e.g., wap client)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client_max_body_size 1k"),"\u2013 Directive assigns the maximum accepted body size of client request, indicated by the line Content-Length in the header of request. If size is greater the given one, then the client gets the error \u201cRequest Entity Too Large\u201d (413). Increase this when you are getting file uploads via the POST method."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"large_client_header_buffers 2 1k")," \u2013 Directive assigns the maximum number and size of buffers for large headers to read from client request. By default the size of one buffer is equal to the size of page, depending on platform this either 4K or 8K, if at the end of working request connection converts to state keep-alive, then these buffers are freed. 2x1k will accept 2kB data URI. This will also help combat bad bots and DoS attacks.")),Object(r.b)("p",null,"You also need to control timeouts to improve server performance and cut clients. Edit it as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},"## Start: Timeouts ##\n  client_body_timeout   10;\n  client_header_timeout 10;\n  keepalive_timeout     5 5;\n  send_timeout          10;\n## End: Timeouts ##\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client_body_timeout 10;")," \u2013 Directive sets the read timeout for the request body from client. The timeout is set only if a body is not get in one readstep. If after this time the client send nothing, nginx returns error \u201cRequest time out\u201d (408). The default is 60."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client_header_timeout 10;")," \u2013 Directive assigns timeout with reading of the title of the request of client. The timeout is set only if a header is not get in one readstep. If after this time the client send nothing, nginx returns error \u201cRequest time out\u201d (408)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keepalive_timeout 5 5;")," \u2013 The first parameter assigns the timeout for keep-alive connections with the client. The server will close connections after this time. The optional second parameter assigns the time value in the header Keep-Alive: timeout=time of the response. This header can convince some browsers to close the connection, so that the server does not have to. Without this parameter, nginx does not send a Keep-Alive header (though this is not what makes a connection \u201ckeep-alive\u201d)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"send_timeout 10;")," \u2013 Directive assigns response timeout to client. Timeout is established not on entire transfer of answer, but only between two operations of reading, if after this time client will take nothing, then nginx is shutting down the connection.")),Object(r.b)("h2",{id:"3-control-simultaneous-connections"},"#3: Control Simultaneous Connections"),Object(r.b)("p",null,"You can use NginxHttpLimitZone module to limit the number of simultaneous connections for the assigned session or as a\nspecial case, from one IP address. Add the following lines:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},"### Directive describes the zone, in which the session states are stored i.e. store in slimits. ###\n### 1m can handle 32000 sessions with 32 bytes/session, set to 5m x 32000 session ###\n       limit_zone slimits $binary_remote_addr 5m;\n\n### Control maximum number of simultaneous connections for one session i.e. ###\n### restricts the amount of connections from a single ip address ###\n        limit_conn slimits 5;\n")),Object(r.b)("p",null,"The above will limits remote clients to no more than 5 concurrently \u201copen\u201d connections per remote ip address."),Object(r.b)("h2",{id:"4-allow-access-to-our-domain-only"},"#4: Allow Access To Our Domain Only"),Object(r.b)("p",null,"If bot is just making random server scan for all domains, just deny it. You must only allow configured virtual domain or\nreverse proxy requests. You don\u2019t want to display request using an IP address. Add the following lines at the end of the\nconfig file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},'## Only requests to our sites are allowed\nhttp {\n    ...\n    server {\n        listen      80 default_server;\n        server_name _;\n        return      444; # "Connection closed without response"\n    }\n}\n##\n')),Object(r.b)("h2",{id:"5-deny-certain-user-agents"},"#5: Deny Certain User-Agents"),Object(r.b)("p",null,"You can easily block user-agents i.e. scanners, bots, and spammers who may be abusing your server."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},"## Block download agents ##\n     if ($http_user_agent ~* LWP::Simple|BBBike|wget) {\n            return 444;\n     }\n##\n")),Object(r.b)("p",null,"For testing:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'curl --head -A "wget" https://www.sharek.dev/\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"What is http status 444 ?"),"\nA non-standard status code used to instruct nginx to close the connection without sending a response to the client, most\ncommonly used to deny malicious or malformed requests."))),Object(r.b)("h2",{id:"6-only-allow-ssl-requests"},"#6: Only allow SSL requests"),Object(r.b)("p",null,"The first step in web security is to implement SSL so that you can access web applications with https and add a layer of\nencryption in the communication."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"server {\n  listen 80;\n  server_name sharek.dev;\n  return 301 https://$host$request_uri;\n}\n\nserver {\n    listen  443 ssl;\n    server_name               sharek.dev;\n\n    ssl_certificate     /path/to/certs/cert.pem;\n    ssl_certificate_key /path/to/certs/privkey.pem;\n\n    index                     index.html index.htm index.php;\n    root                      /var/www/html;\n}\n")),Object(r.b)("p",null,"Having SSL does not mean it is fully secure and this is where as a web security expert you need to apply some\nconfiguration to secure the web server."),Object(r.b)("p",null,"To start with, we recommend running an SSL scan against the website to find the score and the critical vulnerability.\nHere is a well known online tool ",Object(r.b)("a",{parentName:"p",href:"https://www.ssllabs.com/ssltest/index.html"},"SSLLabs")),Object(r.b)("img",{alt:"Docusaurus with Keytar",src:Object(a.a)("/img/notes.home_cloud_notes.tutorials.01-ssllabs-report-01.png")}),Object(r.b)("p",null,"With our current setup, we've scored a B rating ! Nice, but if we want to push it further we need to apply some technics\nfound in this article: ",Object(r.b)("a",{parentName:"p",href:"https://geekflare.com/fr/nginx-webserver-security-hardening-guide/"},"https://geekflare.com/fr/nginx-webserver-security-hardening-guide/")),Object(r.b)("p",null,"TBC"),Object(r.b)("h2",{id:"7-disable-server-banner"},"#7: Disable server banner"),Object(r.b)("p",null,"In the default NGINX configuration, the server header banner is ON which exposes the version of Nginx you are using.\nThis is particularly considered as information leak, coz it helps the attacker to identify you server version and hence\ntarget it's known vulnerabilities.\nYou can disable server banner with the following line :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},"server_tokens off;\n")),Object(r.b)("p",null,"Now, check the response headers of a simple get request :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -I http://sharek.dev\n")),Object(r.b)("p",null,"If this configuration is not get you will see the following output:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:"{2}","{2}":!0},"HTTP/1.1 301 Moved Permanently\nServer: nginx/1.18.0 (Ubuntu)\nDate: Wed, 07 Apr 2021 13:52:15 GMT\nContent-Type: text/html\nContent-Length: 178\nConnection: keep-alive\nLocation: https://sharek.dev/\n")),Object(r.b)("h2",{id:"8-clickjacking-attack"},"#8: Clickjacking attack"),Object(r.b)("p",null,"You can inject X-FRAME-OPTIONS in the HTTP header to prevent a clickjacking attack.\n::::info"),Object(r.b)("p",null,"is a malicious technique of tricking a user into clicking on something different from what the user perceives, thus\npotentially revealing confidential information or allowing others to take control of their computer while clicking on\nseemingly innocuous objects, including web pages"),Object(r.b)("p",null,"::::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},'add_header X-Frame-Options "SAMEORIGIN";\n')),Object(r.b)("p",null,"The above header will instruct a browser to load resources ONLY from the same origin.\nNow, check the response headers of a simple get request :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -I http://sharek.dev\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:"{7}","{7}":!0},"HTTP/1.1 301 Moved Permanently\nDate: Wed, 07 Apr 2021 13:52:15 GMT\nContent-Type: text/html\nContent-Length: 178\nConnection: keep-alive\nLocation: https://sharek.dev/\nX-Frame-Options: SAMEORIGIN\n")),Object(r.b)("h2",{id:"9-x-xss-protection"},"#9: X-XSS Protection"),Object(r.b)("p",null,"Inject an HTTP header with X-XSS protection to mitigate cross-site scripting attacks."),Object(r.b)("p",null,"::::Info"),Object(r.b)("p",null,"Cross-site scripting (XSS) is a security exploit which allows an attacker to inject into a website malicious client-side\ncode. This code is executed by the victims and lets the attackers bypass access controls and impersonate users."),Object(r.b)("p",null,"::::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Edit /etc/nginx/nginx.conf"',title:'"Edit','/etc/nginx/nginx.conf"':!0},'add_header X-XSS-Protection "1; mode=block";\n')),Object(r.b)("h2",{id:"10-disable-older-ssl-protocols-in-the-nginx-configuration"},"#10: Disable older SSL protocols in the Nginx configuration."),Object(r.b)("p",null,"By default, Nginx installs with several older SSL protocols exposed, which could lead to a BEAST (Browser Exploit\nAgainst SSL/TLS) attack. Older protocols should therefore be disabled for a better security posture. This can be\naccomplished by defining the Nginx protocols/ciphers in your web server setting to only accept the newer, more secure\nprotocols."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'{5} title="Edit /etc/nginx/nginx.conf"',"{5}":!0,title:'"Edit','/etc/nginx/nginx.conf"':!0},"        ##\n        # SSL Settings\n        ##\n\n        ssl_protocols TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE\n")),Object(r.b)("p",null,"To disable the weak protocols, simply delete  TLSv1 and TLSv1.1 protocols and append TLSv1.2 &  TLSv1.3 at the end."))}b.isMDXComponent=!0}}]);