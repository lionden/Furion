(window.webpackJsonp=window.webpackJsonp||[]).push([[51,11,82],{126:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(208),o=a(233),c=a(201),s=a(216);t.default=function(e){const{metadata:t,items:a,sidebar:r}=e,{allTagsPath:m,name:i,count:f}=t;return l.a.createElement(n.a,{title:`Posts tagged "${i}"`,description:`Blog | Tagged "${i}"`,wrapperClassName:"blog-wrapper"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(s.a,{sidebar:r})),l.a.createElement("main",{className:"col col--8"},l.a.createElement("h1",null,f," ",function(e,t){return e>1?t+"s":t}(f,"post"),' tagged with "',i,'"'),l.a.createElement(c.a,{href:m},"View All Tags"),l.a.createElement("div",{className:"margin-vert--xl"},a.map(({content:e})=>l.a.createElement(o.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null))))))))}},209:function(e,t,a){"use strict";var r=a(3),l=a(0),n=a.n(l),o=a(199),c=a(201),s=a(200),m=a(17),i=a(60),f=a.n(i);function d({to:e,href:t,label:a,prependBaseUrlToHref:l,...o}){const s=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return n.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?i:t}:{to:s},o),a)}const u=({url:e,alt:t})=>n.a.createElement("img",{className:"footer__logo",alt:t,src:e,style:{background:"#fff",padding:"5px 10px"}});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:r={}}=e||{},l=Object(m.a)(r.src);return e?n.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},a&&a.length>0&&n.a.createElement("div",{className:"row footer__links"},a.map((e,t)=>n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?n.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(d,e)))):null))),(r||t)&&n.a.createElement("div",{className:"footer__bottom text--center"},r&&r.src&&n.a.createElement("div",{className:"margin-bottom--sm"},r.href?n.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},n.a.createElement(u,{alt:r.alt,url:l})):n.a.createElement(u,{alt:r.alt,url:l})),t?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);