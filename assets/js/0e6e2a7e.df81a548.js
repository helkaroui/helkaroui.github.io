(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[7318],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(k,l(l({ref:t},p),{},{components:r})):o.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2668:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),l=["components"],s={slug:"Install docker compose on RPI",title:"Install docker compose on RPI",author:"Hamza EL KAROUI",author_title:"Data Engineer @ DataFab.io",author_url:"https://github.com/helkaroui",author_image_url:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",tags:["docker","RPI"]},c={permalink:"/blog/Install docker compose on RPI",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-04-07-install-docker-on-rpi.md",source:"@site/blog/2021-04-07-install-docker-on-rpi.md",title:"Install docker compose on RPI",description:"I like to use Docker containers on my Raspberry Pis as they come with a great layer of abstraction and portability.",date:"2021-04-07T00:00:00.000Z",formattedDate:"April 7, 2021",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"RPI",permalink:"/blog/tags/rpi"}],readingTime:.995,truncated:!1,prevItem:{title:"Update a running pod in k8s",permalink:"/blog/Update a running pod in k8s"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},i=[{value:"Setup docker compose",id:"setup-docker-compose",children:[]},{value:"Enable the Docker system service to start your containers on boot",id:"enable-the-docker-system-service-to-start-your-containers-on-boot",children:[]},{value:"Test Docker Compose",id:"test-docker-compose",children:[]}],p={toc:i};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I like to use Docker containers on my Raspberry Pis as they come with a great layer of abstraction and portability.\nHere is how to get your Raspberry Pi ready for Docker and Docker-Compose."),(0,a.kt)("h1",{id:"install-docker"},"Install Docker"),(0,a.kt)("p",null,"it's time to install Docker. Fortunately, Docker provides a handy install script for that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.docker.com | sh\n")),(0,a.kt)("p",null,"After the script has finished, add the permissions to the current user to run Docker commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo usermod -aG docker ${USER}\n")),(0,a.kt)("p",null,"Reboot the Raspberry Pi to let the changes take effect."),(0,a.kt)("h2",{id:"setup-docker-compose"},"Setup docker compose"),(0,a.kt)("p",null,"Docker-Compose usually gets installed using pip3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install libffi-dev libssl-dev\nsudo apt install python3-dev\nsudo apt-get install -y python3 python3-pip\n")),(0,a.kt)("p",null,"Once python3 and pip3 are installed, we can install Docker-Compose using the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pip3 install docker-compose\n")),(0,a.kt)("h2",{id:"enable-the-docker-system-service-to-start-your-containers-on-boot"},"Enable the Docker system service to start your containers on boot"),(0,a.kt)("p",null,"you can configure your Raspberry Pi to automatically run the Docker system service, whenever it boots up."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl enable docker\n")),(0,a.kt)("h2",{id:"test-docker-compose"},"Test Docker Compose"),(0,a.kt)("p",null,"That's it !\nNow you can start the containers using Docker-Compose, run the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f docker-compose.yaml up -d\n")))}u.isMDXComponent=!0}}]);