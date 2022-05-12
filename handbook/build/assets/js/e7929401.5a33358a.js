"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4888],{2209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"unifyresultsettings",title:"10. \u89c4\u8303\u5316\u914d\u7f6e",sidebar_label:"10. \u89c4\u8303\u5316\u914d\u7f6e"},s=void 0,u={unversionedId:"settings/unifyresultsettings",id:"settings/unifyresultsettings",title:"10. \u89c4\u8303\u5316\u914d\u7f6e",description:"10.1 \u5173\u4e8e\u914d\u7f6e",source:"@site/docs/settings/unifyresultsettings.mdx",sourceDirName:"settings",slug:"/settings/unifyresultsettings",permalink:"/furion/docs/settings/unifyresultsettings",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/settings/unifyresultsettings.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"unifyresultsettings",title:"10. \u89c4\u8303\u5316\u914d\u7f6e",sidebar_label:"10. \u89c4\u8303\u5316\u914d\u7f6e"},sidebar:"settings",previous:{title:"9. JWT \u914d\u7f6e",permalink:"/furion/docs/settings/jwtsettings"}},c={},p=[{value:"10.1 \u5173\u4e8e\u914d\u7f6e",id:"101-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"10.2 \u914d\u7f6e\u4fe1\u606f",id:"102-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"8.3 \u914d\u7f6e\u793a\u4f8b",id:"83-\u914d\u7f6e\u793a\u4f8b",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"101-\u5173\u4e8e\u914d\u7f6e"},"10.1 \u5173\u4e8e\u914d\u7f6e"),(0,o.kt)("p",null,"\u89c4\u8303\u5316\u914d\u7f6e\u6307\u7684\u662f\u914d\u7f6e\u54cd\u5e94\u7ed3\u679c\uff0c\u54cd\u5e94\u72b6\u6001\u7801\u7b49\u914d\u7f6e"),(0,o.kt)("h2",{id:"102-\u914d\u7f6e\u4fe1\u606f"},"10.2 \u914d\u7f6e\u4fe1\u606f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UnifyResultSettings")," \u89c4\u8303\u5316\u914d\u7f6e\u6839\u8282\u70b9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Return200StatusCodes"),"\uff1a\u914d\u7f6e\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"li"},"200")," \u72b6\u6001\u7801\u7684\u8bf7\u6c42\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"int[]")," \u7c7b\u578b\uff0c\u53ea\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"li"},"400+(404\u9664\u5916)")," \u72b6\u6001\u7801\u7be1\u6539"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AdaptStatusCodes"),"\uff1a\u914d\u7f6e\u7be1\u6539\u72b6\u6001\u7801\u89c4\u5219\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"int[][]")," \u7c7b\u578b\uff0c\u53ea\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"li"},"400+(404\u9664\u5916)")," \u72b6\u6001\u7801\u7be1\u6539"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SupportMvcController"),"\uff1a\u662f\u5426\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"li"},"MVC")," \u63a7\u5236\u53f0\u89c4\u8303\u5316\u5904\u7406\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))))),(0,o.kt)("h2",{id:"83-\u914d\u7f6e\u793a\u4f8b"},"8.3 \u914d\u7f6e\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},'{\n  "UnifyResultSettings": {\n    "Return200StatusCodes": [401, 403],\n    "AdaptStatusCodes": [\n      [401, 200],\n      [403, 401]\n    ],\n    "SupportMvcController": true\n  }\n}\n')))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);