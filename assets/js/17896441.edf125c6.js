/*! For license information please see 17896441.edf125c6.js.LICENSE.txt */
"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[7918],{7337:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var n=a(7294),l=a(6010),r=a(1944),s=a(7524),o=a(5281),i=a(7462),c=a(5999),d=a(2244);function m(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,i.Z)({},t,{subLabel:n.createElement(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,i.Z)({},a,{subLabel:n.createElement(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(4806);function v(e){return n.createElement(n.Fragment,null,n.createElement(m,e),n.createElement("div",{style:{marginTop:"3em"}},n.createElement(u._,null)))}var p=a(2263),b=a(9960),g=a(143),h=a(373),E=a(4477);const f={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=f[e.versionMetadata.banner];return n.createElement(t,e)}function _(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function N(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,p.Z)(),{pluginId:s}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,h.J)(s),{latestDocSuggestion:c,latestVersionSuggestion:d}=(0,g.Jo)(s),m=null!=c?c:(u=d).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:(0,l.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(_,{versionLabel:d.label,to:m.path,onClick:()=>i(d.name)})))}function k(e){let{className:t}=e;const a=(0,E.E)();return a.banner?n.createElement(N,{className:t,versionMetadata:a}):null}function Z(e){let{className:t}=e;const a=(0,E.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function C(e){let{lastUpdatedBy:t}=e;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:o.k.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(C,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var x=a(6114),U=a(1526);const H="lastUpdated_vbeJ";function w(e){return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(U.Z,e)))}function A(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(x.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",H)},(a||r)&&n.createElement(T,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function I(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:i,lastUpdatedBy:c,tags:d}=a,m=d.length>0,u=!!(r||s||c);return m||u?n.createElement("footer",{className:(0,l.Z)(o.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(w,{tags:d}),u&&n.createElement(A,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}var M=a(9407),O=a(6043),B=a(3743);const S="tocCollapsibleButton_TO0P",P="tocCollapsibleButtonExpanded_MG3E";function R(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,i.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",S,!t&&P,a.className)}),n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const D="tocCollapsible_ETCw",V="tocCollapsibleContent_vkbj",z="tocCollapsibleExpanded_sAul";function F(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:o,toggleCollapsed:i}=(0,O.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(D,!o&&z,a)},n.createElement(R,{collapsed:o,onClick:i}),n.createElement(O.z,{lazy:!0,className:V,collapsed:o},n.createElement(B.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var j=a(7955),q=a(3438),G=a(8596),J=a(4996);function Y(e){return n.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const W={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function X(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(b.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function $(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,i.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Q(){const e=(0,J.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",W.breadcrumbsItemLink),href:e},n.createElement(Y,{className:W.breadcrumbHomeIcon})))}function K(){const e=(0,q.s1)(),t=(0,G.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(o.k.docs.docBreadcrumbs,W.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Q,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement($,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(X,{href:t.href,isLast:l},t.label))})))):null}var ee=a(3548);const te="docItemContainer_Adtb",ae="docItemCol_GujU",ne="tocMobile_aoJ5";function le(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:o}=a,{keywords:i}=s,{description:c,title:d}=l,m=null!=(t=o.image)?t:s.image;return n.createElement(r.d,{title:d,description:c,keywords:i,image:m})}function re(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:i,hide_table_of_contents:c,toc_min_heading_level:d,toc_max_heading_level:m}=r,{title:u}=a,p=!i&&void 0===t.contentTitle,b=(0,s.i)(),g=!c&&t.toc&&t.toc.length>0,h=g&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!c&&ae)},n.createElement(k,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement(K,null),n.createElement(Z,null),g&&n.createElement(F,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:(0,l.Z)(o.k.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,l.Z)(o.k.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},u)),n.createElement(ee.Z,null,n.createElement(t,null))),n.createElement(I,e)),n.createElement(v,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(M.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:o.k.docs.docTocDesktop})))}function se(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(le,e),n.createElement(re,e))}},6114:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),o=a(6010);const i="iconEdit_eYIM";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},9407:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(6010),s=a(3743);const o="tableOfContents_bqdL";function i(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),l=a(7294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var o=a(6668);function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e,t){var a;let{anchorTopOffset:n}=t;const l=e.find((e=>i(e).top>=n));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(a=e[e.length-1])?a:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),i=c(o,{anchorTopOffset:a.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const v=l.memo(u);function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...p}=e;const b=(0,o.L)(),g=null!=d?d:b.tableOfContents.minHeadingLevel,h=null!=u?u:b.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:g,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:h}}),[i,c,g,h])),l.createElement(v,(0,n.Z)({toc:E,className:a,linkClassName:i},p))}},3008:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(9960);const s="tag_zVej",o="tagRegular_sFm0",i="tagWithCount_h2kH";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,c?i:o)},a,c&&n.createElement("span",null,c))}},1526:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(5999),s=a(3008);const o="tags_jXut",i="tag_QGVx";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(s.Z,{label:t,permalink:a}))}))))}},4477:(e,t,a)=>{a.d(t,{E:()=>o,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},4806:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(7294),l=a(5893);function r({id:e,repo:t,repoId:r,category:s,categoryId:o,mapping:i,term:c,reactionsEnabled:d,emitMetadata:m,inputPosition:u,theme:v,lang:p,loading:b}){const[g,h]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{g||(a.e(904).then(a.bind(a,904)),h(!0))}),[]),g?(0,l.jsx)("giscus-widget",{id:e,repo:t,repoid:r,category:s,categoryid:o,mapping:i,term:c,reactionsenabled:d,emitmetadata:m,inputposition:u,theme:v,lang:p,loading:b}):null}function s(e){return n.createElement(n.Fragment,null,n.createElement(r,{id:"comments",repo:"helkaroui/helkaroui.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzNzUxMDI0MzY=",category:"Comments",categoryId:"DIC_kwDOFlub5M4CPa1g",mapping:"url",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"light",lang:"en",loading:"lazy"}))}},5251:(e,t,a)=>{a(7418);var n=a(7294),l=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;l=r("react.element"),r("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,r={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:l,type:e,key:c,ref:d,props:r,_owner:s.current}}t.jsx=c},5893:(e,t,a)=>{e.exports=a(5251)}}]);