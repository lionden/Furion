"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1085],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4118:function(e,t,r){r.d(t,{Z:function(){return N}});var a=r(3366),n=r(7294),l=r(6010),i=r(692),o=r(9960),c=r(5999),m="sidebar_TMXw",s="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",p="sidebarItem_spIe",d="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function f(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:p},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))})))))}var v=r(3102);function h(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(v.Zo,{component:h,props:e})}var E=r(7524);function _(e){var t=e.sidebar,r=(0,E.i)();return null!=t&&t.items.length?"mobile"===r?n.createElement(b,{sidebar:t}):n.createElement(f,{sidebar:t}):null}var y=["sidebar","toc","children"];function N(e){var t=e.sidebar,r=e.toc,o=e.children,c=(0,a.Z)(e,y),m=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&n.createElement("div",{className:"col col--2"},r))))}},6244:function(e,t,r){r.d(t,{Z:function(){return N}});var a=r(7294),n=r(6010),l=r(5999),i=r(9960),o=r(4996),c=r(8824),m=r(8780),s=r(7823),u=r(6753),p="blogPostTitle_rzP5",d="blogPostData_Zg1s",g="blogPostDetailsFull_h6_j",f=r(62);function v(e){return e.href?a.createElement(i.Z,e):a.createElement(a.Fragment,null,e.children)}function h(e){var t=e.author,r=t.name,n=t.title,l=t.url,i=t.imageURL,o=t.email,c=l||o&&"mailto:"+o||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(v,{href:c,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(v,{href:c,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),n&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var b="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function y(e){var t=e.authors,r=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?E:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?_:b),key:t},a.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=r.authorsImageUrls[t])?i:e.imageURL})}))})))}function N(e){var t,r,v=(r=(0,c.c)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,o.C)().withBaseUrl,b=e.children,E=e.frontMatter,_=e.assets,N=e.metadata,Z=e.truncated,P=e.isBlogPostPage,k=void 0!==P&&P,O=N.date,w=N.formattedDate,T=N.permalink,x=N.tags,j=N.readingTime,F=N.title,I=N.editUrl,C=N.authors,D=null!=(t=_.image)?t:E.image,L=!k&&Z,R=x.length>0,M=k?"h1":"h2";return a.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(M,{className:p,itemProp:"headline"},k?F:a.createElement(i.Z,{itemProp:"url",to:T},F)),a.createElement("div",{className:(0,n.Z)(d,"margin-vert--md")},a.createElement("time",{dateTime:O,itemProp:"datePublished"},w),void 0!==j&&a.createElement(a.Fragment,null," \xb7 ",v(j))),a.createElement(y,{authors:C,assets:_})),D&&a.createElement("meta",{itemProp:"image",content:h(D,{absolute:!0})}),a.createElement("div",{id:k?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(s.Z,null,b)),(R||Z)&&a.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",k&&g)},R&&a.createElement("div",{className:(0,n.Z)("col",{"col--9":L})},a.createElement(f.Z,{tags:x})),k&&I&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:I})),L&&a.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":R})},a.createElement(i.Z,{to:N.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:F})},a.createElement("b",null,a.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(7294),n=r(5999),l=r(7462),i=r(3366),o=r(6010),c="iconEdit_dcUD",m=["className"];function s(e){var t=e.className,r=(0,i.Z)(e,m);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},r),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=r(5281);function p(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},a.createElement(s,null),a.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7823:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),n=r(3905),l=r(3859);function i(e){var t=e.children;return a.createElement(n.Zo,{components:l.Z},t)}},1750:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),n=r(6010),l=r(9960);function i(e){var t=e.permalink,r=e.title,i=e.subLabel,o=e.isNext;return a.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},r))}},7774:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(7294),n=r(6010),l=r(9960),i="tag_hD8n",o="tagRegular_D6E_",c="tagWithCount_i0QQ";function m(e){var t=e.permalink,r=e.label,m=e.count;return a.createElement(l.Z,{href:t,className:(0,n.Z)(i,m?c:o)},r,m&&a.createElement("span",null,m))}},62:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(7294),n=r(6010),l=r(5999),i=r(7774),o="tags_XVD_",c="tag_JSN8";function m(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return a.createElement("li",{key:r,className:c},a.createElement(i.Z,{label:t,permalink:r}))}))))}},8824:function(e,t,r){r.d(t,{c:function(){return m}});var a=r(7294),n=r(2263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,n.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:i(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var t,r}),[e])}function m(){var e=c();return{selectMessage:function(t,r){return function(e,t,r){var a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+a.length+": "+e);var n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}}}}]);