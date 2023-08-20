"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[6192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,k=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={title:"FunkWhale",sidebar_position:2},l="Introduction",p={unversionedId:"media_center/funkwhale/index",id:"media_center/funkwhale/index",title:"FunkWhale",description:"First, ensure you have Docker and docker-compose installed.",source:"@site/sections/home_lab/media_center/funkwhale/index.md",sourceDirName:"media_center/funkwhale",slug:"/media_center/funkwhale/",permalink:"/home_lab/media_center/funkwhale/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"FunkWhale",sidebar_position:2},sidebar:"docs",previous:{title:"Home Lab",permalink:"/home_lab/"}},i={},u=[{value:"Configuring Email",id:"configuring-email",level:2},{value:"Setting cloud storage",id:"setting-cloud-storage",level:2}],c={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wiki.zatoufly.fr/wiki-assets/funkwhale-banner.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Capture_d%27%C3%A9cran_de_la_page_d%27accueil_de_Funkwhale.png/1200px-Capture_d%27%C3%A9cran_de_la_page_d%27accueil_de_Funkwhale.png",alt:null})),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"First, ensure you have Docker and docker-compose installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export FUNKWHALE_VERSION="1.2.9"\nmkdir -p funkwhale/nginx\ncurl -L -o funkwhale/nginx/funkwhale.template "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/docker.nginx.template"\ncurl -L -o funkwhale/nginx/funkwhale_proxy.conf "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/docker.funkwhale_proxy.conf"\ncurl -L -o funkwhale/docker-compose.yml "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/docker-compose.yml"\n')),(0,a.kt)("p",null,"At this point, the architecture of ",(0,a.kt)("inlineCode",{parentName:"p"},"funkwhale")," should look like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 docker-compose.yml\n\u2514\u2500\u2500 nginx\n    \u251c\u2500\u2500 funkwhale_proxy.conf\n    \u2514\u2500\u2500 funkwhale.template\n\n1 directory, 3 files\n")),(0,a.kt)("p",null,"Create your env file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -L -o .env "https://dev.funkwhale.audio/funkwhale/funkwhale/raw/${FUNKWHALE_VERSION}/deploy/env.prod.sample"\nsed -i "s/FUNKWHALE_VERSION=latest/FUNKWHALE_VERSION=$FUNKWHALE_VERSION/" .env\nsed -i "s/DJANGO_SECRET_KEY=/DJANGO_SECRET_KEY=1234/" .env\n\nchmod 600 .env\n')),(0,a.kt)("p",null,"You'll also need to set these variables :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FUNKWHALE_HOSTNAME=localhost\nFUNKWHALE_PROTOCOL=http\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Then, you should be able to pull the required images:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose pull\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run the database container and the initial migrations:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose up -d postgres\ndocker-compose run --rm api python manage.py migrate\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create your admin user:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose run --rm api python manage.py createsuperuser --username admin --email admin@admin.com\n")),(0,a.kt)("p",null,"You'll be prompted to enter the admin password"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a user:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose run --rm api python manage.py fw users create --username alice --email alice@email.host\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Then launch the whole thing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,a.kt)("h2",{id:"configuring-email"},"Configuring Email"),(0,a.kt)("h2",{id:"setting-cloud-storage"},"Setting cloud storage"))}d.isMDXComponent=!0}}]);