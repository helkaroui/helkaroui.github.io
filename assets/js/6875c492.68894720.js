"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[2392],{2687:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(1504),r=a(4357),n=a(308);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.c,{permalink:a,title:l.createElement(r.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.c,{permalink:s,title:l.createElement(r.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},992:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(1504),r=a(3152),n=a(2024);function s(e){let{items:t,component:a=n.c}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(r.E,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},2948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(1504),r=a(4971),n=a(4357),s=a(5944),c=a(5756),i=a(5864),o=a(6016),m=a(9496),g=a(2687),p=a(8712),u=a(992);function d(e){const t=function(){const{selectMessage:e}=(0,s.A)();return t=>e(t,(0,n.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(c.U7,{title:a}),l.createElement(p.c,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:r,listMetadata:s}=e;const c=d(t);return l.createElement(m.c,{sidebar:r},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,c),l.createElement(o.c,{href:t.allTagsPath},l.createElement(n.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(u.c,{items:a}),l.createElement(g.c,{metadata:s}))}function b(e){return l.createElement(c.cr,{className:(0,r.c)(i.W.wrapper.blogPages,i.W.page.blogTagPostListPage)},l.createElement(h,e),l.createElement(E,e))}},1316:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(1504),r=a(4971),n=a(6016);function s(e){return e.href?l.createElement(n.c,e):l.createElement(l.Fragment,null,e.children)}function c(e){let{author:t,className:a}=e;const{name:n,title:c,url:i,imageURL:o,email:m}=t,g=i||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,r.c)("avatar margin-bottom--sm",a)},o&&l.createElement(s,{href:g,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s,{href:g,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),c&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},c)))}},5032:(e,t,a)=>{a.d(t,{c:()=>o});var l=a(5072),r=a(1504),n=a(4971),s=a(5948);const c={details:"details_r1OI"},i="alert alert--info";function o(e){let{...t}=e;return r.createElement(s.S,(0,l.c)({},t,{className:(0,n.c)(i,c.details,t.className)}))}}}]);