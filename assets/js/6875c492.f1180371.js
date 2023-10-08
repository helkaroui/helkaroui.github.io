"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(9460),r=a(1217);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),n=a(6010),r=a(5999),s=a(8824),i=a(1944),o=a(5281),m=a(9960),c=a(9058),g=a(9703),p=a(197),u=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(i.d,{title:a}),l.createElement(p.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const i=d(t);return l.createElement(c.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(m.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(u.Z,{items:a}),l.createElement(g.Z,{metadata:s}))}function b(e){return l.createElement(i.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},l.createElement(h,e),l.createElement(E,e))}},7651:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010),r=a(9960);function s(e){return e.href?l.createElement(r.Z,e):l.createElement(l.Fragment,null,e.children)}function i(e){let{author:t,className:a}=e;const{name:r,title:i,url:o,imageURL:m,email:c}=t,g=o||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},m&&l.createElement(s,{href:g,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:m,alt:r,itemProp:"image"})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s,{href:g,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}},3143:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),n=a(7294),r=a(6010),s=a(1173);const i={details:"details_r1OI"},o="alert alert--info";function m(e){let{...t}=e;return n.createElement(s.P,(0,l.Z)({},t,{className:(0,r.Z)(o,i.details,t.className)}))}}}]);