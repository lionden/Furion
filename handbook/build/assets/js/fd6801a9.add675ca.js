"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6615],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3562:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),i=t(4996),s=["components"],u={id:"middleware",title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",sidebar_label:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)"},o=void 0,p={unversionedId:"middleware",id:"middleware",title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",description:"",source:"@site/docs/middleware.mdx",sourceDirName:".",slug:"/middleware",permalink:"/furion/docs/middleware",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/middleware.mdx",tags:[],version:"current",frontMatter:{id:"middleware",title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",sidebar_label:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)"},sidebar:"docs",previous:{title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7 (Audit)",permalink:"/furion/docs/audit"},next:{title:"6. \u89c4\u8303\u5316\u63a5\u53e3\u6587\u6863 (Swagger)",permalink:"/furion/docs/specification-document"}},c={},d=[{value:"5.5.1 \u5173\u4e8e\u4e2d\u95f4\u4ef6",id:"551-\u5173\u4e8e\u4e2d\u95f4\u4ef6",level:2},{value:"5.5.2 \u5e38\u89c1\u4e2d\u95f4\u4ef6",id:"552-\u5e38\u89c1\u4e2d\u95f4\u4ef6",level:2},{value:"5.5.2.1 \u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c",id:"5521-\u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c",level:3},{value:"5.5.2.2 \u62e6\u622a\u6240\u6709\u8bf7\u6c42\uff08\u53ef\u591a\u4e2a\uff09",id:"5522-\u62e6\u622a\u6240\u6709\u8bf7\u6c42\u53ef\u591a\u4e2a",level:3},{value:"5.5.2.3 \u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09",id:"5523-\u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a",level:3},{value:"5.5.2.4 \u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09",id:"5524-\u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a",level:3},{value:"5.5.3 \u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"553-\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",level:2},{value:"5.5.3.1 <code>app.Use</code> \u65b9\u5f0f (\u4e0d\u63a8\u8350)",id:"5531-appuse-\u65b9\u5f0f-\u4e0d\u63a8\u8350",level:3},{value:"5.5.3.2 <code>\u72ec\u7acb\u7c7b</code> \u65b9\u5f0f\uff08\u63a8\u8350\uff09",id:"5532-\u72ec\u7acb\u7c7b-\u65b9\u5f0f\u63a8\u8350",level:3},{value:"5.5.3.3 \u914d\u7f6e\u66f4\u591a\u53c2\u6570",id:"5533-\u914d\u7f6e\u66f4\u591a\u53c2\u6570",level:3},{value:"5.5.4 \u4e2d\u95f4\u4ef6\u987a\u5e8f",id:"554-\u4e2d\u95f4\u4ef6\u987a\u5e8f",level:2},{value:"5.5.5 \u4f9d\u8d56\u6ce8\u5165/\u89e3\u6790\u670d\u52a1",id:"555-\u4f9d\u8d56\u6ce8\u5165\u89e3\u6790\u670d\u52a1",level:2},{value:"5.5.5.1 \u6784\u9020\u51fd\u6570\u65b9\u5f0f",id:"5551-\u6784\u9020\u51fd\u6570\u65b9\u5f0f",level:3},{value:"5.5.5.2 <code>httpContext.RequestServices</code> \u65b9\u5f0f",id:"5552-httpcontextrequestservices-\u65b9\u5f0f",level:3},{value:"5.5.6 \u5e38\u89c1\u95ee\u9898",id:"556-\u5e38\u89c1\u95ee\u9898",level:2},{value:"5.5.7 \u4e86\u89e3\u66f4\u591a",id:"557-\u4e86\u89e3\u66f4\u591a",level:2},{value:"5.5.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"558-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:d};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"551-\u5173\u4e8e\u4e2d\u95f4\u4ef6"},"5.5.1 \u5173\u4e8e\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u4e2d\u95f4\u4ef6\u662f\u4e00\u79cd\u88c5\u914d\u5230\u5e94\u7528\u7ba1\u9053\u4ee5\u5904\u7406\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u8f6f\u4ef6\u3002 \u6bcf\u4e2a\u7ec4\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u662f\u5426\u5c06\u8bf7\u6c42\u4f20\u9012\u5230\u7ba1\u9053\u4e2d\u7684\u4e0b\u4e00\u4e2a\u7ec4\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u5728\u7ba1\u9053\u4e2d\u7684\u4e0b\u4e00\u4e2a\u7ec4\u4ef6\u524d\u540e\u6267\u884c\u5de5\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u59d4\u6258\u7528\u4e8e\u751f\u6210\u8bf7\u6c42\u7ba1\u9053\u3002 \u8bf7\u6c42\u59d4\u6258\u5904\u7406\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP")," \u8bf7\u6c42\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e00\u53e5\u8bdd\u603b\u7ed3\uff1a\u4e2d\u95f4\u4ef6\u662f\u6bd4\u7b5b\u9009\u5668\u66f4\u5e95\u5c42\uff0c\u66f4\u4e0a\u6e38\u7684\u9762\u5411\u5207\u9762\u6280\u672f\uff0c\u5176\u6027\u80fd\u6700\u9ad8\uff0c\u53ef\u5904\u7406\u7684\u5e94\u7528\u8303\u56f4\u8fdc\u6bd4\u8fc7\u6ee4\u5668\u5e7f\uff0c\u5982\u5b9e\u73b0\u7f51\u5173\uff0c",(0,l.kt)("inlineCode",{parentName:"strong"},"URL")," \u8f6c\u53d1\uff0c\u9650\u6d41\u7b49\u7b49\u3002")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4e2d\u95f4\u4ef6\u66f4\u591a\u5185\u5bb9")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u672c\u7ae0\u8282\u6682\u4e0d\u8003\u8651\u5c06\u4e2d\u95f4\u4ef6\u5c55\u5f00\u8bb2\uff0c\u60f3\u4e86\u89e3\u66f4\u591a\u77e5\u8bc6\u53ef\u9605\u8bfb\u5b98\u65b9\u6587\u6863 \u3010",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0"},"ASP.NET Core - \u4e2d\u95f4\u4ef6"),"\u3011"))),(0,l.kt)("h2",{id:"552-\u5e38\u89c1\u4e2d\u95f4\u4ef6"},"5.5.2 \u5e38\u89c1\u4e2d\u95f4\u4ef6"),(0,l.kt)("h3",{id:"5521-\u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c"},"5.5.2.1 \u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},'app.Run(async context =>\n{\n    await context.Response.WriteAsync("Hello world!");\n});\n')),(0,l.kt)("h3",{id:"5522-\u62e6\u622a\u6240\u6709\u8bf7\u6c42\u53ef\u591a\u4e2a"},"5.5.2.2 \u62e6\u622a\u6240\u6709\u8bf7\u6c42\uff08\u53ef\u591a\u4e2a\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,7}",showLineNumbers:!0,"{1,7}":!0},'app.Use(async (context, next) =>\n{\n    // \u6bd4\u5982\u8bbe\u7f6e\u7edf\u4e00\u5934\n    context.Response.Headers["framework"] = "Furion";\n\n    // \u6267\u884c\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n    await next.Invoke();\n});\n\n// \u591a\u4e2a\napp.Use(...);\n')),(0,l.kt)("h3",{id:"5523-\u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a"},"5.5.2.3 \u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,2,8}",showLineNumbers:!0,"{1,2,8}":!0},'app.Map("/hello", app => {\n    app.Run(async context =>\n    {\n        await context.Response.WriteAsync("Map Test 1");\n    });\n});\n\napp.Map("/hello/say", app => {\n    // ....\n});\n')),(0,l.kt)("h3",{id:"5524-\u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a"},"5.5.2.4 \u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,2,5}",showLineNumbers:!0,"{1,2,5}":!0},'app.Map("/level1", level1App => {\n    level1App.Map("/level2a", level2AApp => {\n        // "/level1/level2a" processing\n    });\n    level1App.Map("/level2b", level2BApp => {\n        // "/level1/level2b" processing\n    });\n});\n')),(0,l.kt)("p",null,"\u66f4\u591a\u4f8b\u5b50\u67e5\u770b\u5b98\u65b9\u6587\u6863 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0"},"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0")),(0,l.kt)("h2",{id:"553-\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"},"5.5.3 \u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u6709\u591a\u79cd\u65b9\u5f0f\uff0c\u6700\u7b80\u5355\u7684\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"app.Use")," \u65b9\u5f0f\uff0c\u53e6\u5916\u8fd8\u652f\u6301\u72ec\u7acb\u7c7b\u5b9a\u4e49\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"5531-appuse-\u65b9\u5f0f-\u4e0d\u63a8\u8350"},"5.5.3.1 ",(0,l.kt)("inlineCode",{parentName:"h3"},"app.Use")," \u65b9\u5f0f (\u4e0d\u63a8\u8350)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {1,12-13} title="Starup.cs"',showLineNumbers:!0,"{1,12-13}":!0,title:'"Starup.cs"'},'app.Use(async (context, next) =>\n{\n    var cultureQuery = context.Request.Query["culture"];\n    if (!string.IsNullOrWhiteSpace(cultureQuery))\n    {\n        var culture = new CultureInfo(cultureQuery);\n\n        CultureInfo.CurrentCulture = culture;\n        CultureInfo.CurrentUICulture = culture;\n    }\n\n    // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n    await next(context);\n});\n')),(0,l.kt)("h3",{id:"5532-\u72ec\u7acb\u7c7b-\u65b9\u5f0f\u63a8\u8350"},"5.5.3.2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"\u72ec\u7acb\u7c7b")," \u65b9\u5f0f\uff08\u63a8\u8350\uff09"),(0,l.kt)("p",null,"\u72ec\u7acb\u7c7b\u7684\u65b9\u5f0f\u662f\u76ee\u524d\u6700\u672a\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u62d3\u5c55\u6027\u5f3a\uff0c\u7ef4\u62a4\u6027\u9ad8\uff0c\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u5efa\u8bae\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"Middleware")," \u7ed3\u5c3e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {5,7,9-12,14,25-26}",showLineNumbers:!0,"{5,7,9-12,14,25-26}":!0},'using System.Globalization;\n\nnamespace Middleware.Example;\n\npublic class RequestCultureMiddleware\n{\n    private readonly RequestDelegate _next;\n\n    public RequestCultureMiddleware(RequestDelegate next)\n    {\n        _next = next;\n    }\n\n    public async Task InvokeAsync(HttpContext context)\n    {\n        var cultureQuery = context.Request.Query["culture"];\n        if (!string.IsNullOrWhiteSpace(cultureQuery))\n        {\n            var culture = new CultureInfo(cultureQuery);\n\n            CultureInfo.CurrentCulture = culture;\n            CultureInfo.CurrentUICulture = culture;\n        }\n\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n        await _next(context);\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u62d3\u5c55\u7c7b")),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e2d\u95f4\u4ef6\u4e4b\u540e\uff0c\u9700\u8981\u521b\u5efa\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u7684\u62d3\u5c55\u7c7b\uff0c\u4e2d\u95f4\u4ef6\u62d3\u5c55\u65b9\u6cd5\u5efa\u8bae\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Use")," \u5f00\u5934\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,3,5}",showLineNumbers:!0,"{1,3,5}":!0},"public static class RequestCultureMiddlewareExtensions\n{\n    public static IApplicationBuilder UseRequestCulture(this IApplicationBuilder builder)\n    {\n        return builder.UseMiddleware<RequestCultureMiddleware>();\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u4f7f\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,4}",showLineNumbers:!0,"{1,4}":!0},"public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n    // ... \u5176\u4ed6\u4e2d\u95f4\u4ef6\n    app.UseRequestCulture();\n    // ... \u5176\u4ed6\u4e2d\u95f4\u4ef6\n}\n")),(0,l.kt)("h3",{id:"5533-\u914d\u7f6e\u66f4\u591a\u53c2\u6570"},"5.5.3.3 \u914d\u7f6e\u66f4\u591a\u53c2\u6570"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81ea\u5b9a\u4e49\u72ec\u7acb\u7c7b\u4e2d\u95f4\u4ef6\u6784\u9020\u51fd\u6570\u53ea\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestDelegate")," \u53c2\u6570\uff0c\u9664\u6b64\u4e4b\u540e\uff0c\u8fd8\u53ef\u4ee5\u6ce8\u5165\u670d\u52a1\u63a5\u53e3/\u7c7b\uff08",(0,l.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u662f\u5355\u4f8b\u670d\u52a1"),"\uff09\uff0c\u53e6\u5916\u8fd8\u652f\u6301\u4f20\u5165\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1\u7c7b\u578b\u53c2\u6570"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {8,11}",showLineNumbers:!0,"{8,11}":!0},'using System.Globalization;\n\nnamespace Middleware.Example;\n\npublic class RequestCultureMiddleware\n{\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestCultureMiddleware> _logger;\n\n    public RequestCultureMiddleware(RequestDelegate next\n        , ILogger<RequestCultureMiddleware> logger)\n    {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context)\n    {\n        // \u5176\u4ed6\u4ee3\u7801\n\n        _logger.LogInformation("...");\n\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n        await _next(context);\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u975e\u670d\u52a1\u7c7b\u578b\u53c2\u6570"))),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u975e\u670d\u52a1\u53c2\u6570")," \u53c2\u6570\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4f46\u5fc5\u987b\u662f\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff01\uff01\uff01")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {12,13}",showLineNumbers:!0,"{12,13}":!0},'using System.Globalization;\n\nnamespace Middleware.Example;\n\npublic class RequestCultureMiddleware\n{\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestCultureMiddleware> _logger;\n\n    public RequestCultureMiddleware(RequestDelegate next\n        , ILogger<RequestCultureMiddleware> logger\n        , int age\n        , string name)\n    {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context)\n    {\n        // \u5176\u4ed6\u4ee3\u7801\n\n        _logger.LogInformation("...");\n\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n        await _next(context);\n    }\n}\n')),(0,l.kt)("p",null,"\u4e4b\u540e\u8fd8\u9700\u8981\u4fee\u6539\u4e2d\u95f4\u4ef6\u62d3\u5c55\u7c7b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {3,5}",showLineNumbers:!0,"{3,5}":!0},"public static class RequestCultureMiddlewareExtensions\n{\n    public static IApplicationBuilder UseRequestCulture(this IApplicationBuilder builder, int age, string name)\n    {\n        return builder.UseMiddleware<RequestCultureMiddleware>(new object[] {age, name });\n    }\n}\n")),(0,l.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'app.UseRequestCulture(30, "\u767e\u5c0f\u50e7");\n')),(0,l.kt)("h2",{id:"554-\u4e2d\u95f4\u4ef6\u987a\u5e8f"},"5.5.4 \u4e2d\u95f4\u4ef6\u987a\u5e8f"),(0,l.kt)("p",null,"\u4e2d\u95f4\u4ef6\u662f\u6709\u6267\u884c\u987a\u5e8f\u7684\uff0c\u800c\u4e14\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5148\u6ce8\u518c\u7684\u5148\u6267\u884c\uff0c\u65e0\u6cd5\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u66f4\u6539"),"\uff0c\u53c2\u8003\u4e0b\u56fe\uff1a"),(0,l.kt)("img",{src:(0,i.Z)("img/zjj1.png")}),(0,l.kt)("h2",{id:"555-\u4f9d\u8d56\u6ce8\u5165\u89e3\u6790\u670d\u52a1"},"5.5.5 \u4f9d\u8d56\u6ce8\u5165/\u89e3\u6790\u670d\u52a1"),(0,l.kt)("p",null,"\u4e2d\u95f4\u4ef6\u6709\u4e24\u79cd\u65b9\u5f0f\u6ce8\u5165\u670d\u52a1\uff0c\u4e00\u79cd\u662f\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\uff0c\u4e00\u79cd\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"httpContext.RequestServices")," \u65b9\u5f0f\u89e3\u6790\u3002"),(0,l.kt)("h3",{id:"5551-\u6784\u9020\u51fd\u6570\u65b9\u5f0f"},"5.5.5.1 \u6784\u9020\u51fd\u6570\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {8,11-12}",showLineNumbers:!0,"{8,11-12}":!0},"using System.Globalization;\n\nnamespace Middleware.Example;\n\npublic class RequestCultureMiddleware\n{\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestCultureMiddleware> _logger;\n\n    public RequestCultureMiddleware(RequestDelegate next\n        , ILogger<RequestCultureMiddleware> logger\n        , IHostEnvironment hostEnvironment)\n    {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context)\n    {\n        // \u5176\u4ed6\u4ee3\u7801\n\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n        await _next(context);\n    }\n}\n")),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u6784\u9020\u51fd\u6570\u7684\u65b9\u5f0f\u5efa\u8bae\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"strong"},"\u5355\u4f8b\u6a21\u5f0f")," \u7684\u670d\u52a1"),"\uff0c\u5426\u5219\u53ef\u80fd\u5b58\u5728\u670d\u52a1\u4e0d\u80fd\u91ca\u653e\u95ee\u9898\uff0c\u5982\u9700\u4f7f\u7528\u77ac\u65f6\u6216\u4f5c\u7528\u57df\u7684\u670d\u52a1\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"httpContext.RequestServices")," \u65b9\u5f0f"))),(0,l.kt)("h3",{id:"5552-httpcontextrequestservices-\u65b9\u5f0f"},"5.5.5.2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"httpContext.RequestServices")," \u65b9\u5f0f"),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u4f7f\u7528\u975e\u5355\u4f8b\u670d\u52a1\u89e3\u6790\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {10-13,21-23}",showLineNumbers:!0,"{10-13,21-23}":!0},"using System.Globalization;\n\nnamespace Middleware.Example;\n\npublic class RequestCultureMiddleware\n{\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestCultureMiddleware> _logger;\n\n    // \u6784\u9020\u51fd\u6570\u6ce8\u518c\u5355\u4f8b\n    public RequestCultureMiddleware(RequestDelegate next\n        , ILogger<RequestCultureMiddleware> logger\n        , IHostEnvironment hostEnvironment)\n    {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context)\n    {\n        // \u975e\u5355\u4f8b\u6a21\u5f0f\n        using var serviceProvider = context.RequestServices.CreateScope();\n        var repository = serviceProvider.ServiceProvider.GetService<IRepository>();\n\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\n        await _next(context);\n    }\n}\n")),(0,l.kt)("h2",{id:"556-\u5e38\u89c1\u95ee\u9898"},"5.5.6 \u5e38\u89c1\u95ee\u9898"),(0,l.kt)("p",null,"\u7531\u4e8e\u4e2d\u95f4\u4ef6\u662f\u6bd4\u8f83\u539f\u59cb\u7684\u5207\u9762\u65b9\u5f0f\uff0c\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u83b7\u53d6",(0,l.kt)("strong",{parentName:"p"},"\u7ec8\u70b9\u8def\u7531\u7684\u7279\u6027"),"\u6216\u8005\u5176\u4ed6\u4fe1\u606f\uff0c\u5219\u9700\u8981\u4e00\u70b9\u6280\u5de7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u83b7\u53d6\u7ec8\u70b9\u8def\u7531\u7279\u6027\nvar endpointFeature = context.Features.Get<IEndpointFeature>();\n\n// \u83b7\u53d6\u662f\u5426\u5b9a\u4e49\u4e86\u7279\u6027\nvar attribute = endpointFeature?.Endpoint?.Metadata?.GetMetadata<YourAttribute>()\n")),(0,l.kt)("h2",{id:"557-\u4e86\u89e3\u66f4\u591a"},"5.5.7 \u4e86\u89e3\u66f4\u591a"),(0,l.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u4e2d\u95f4\u4ef6\u77e5\u8bc6\u53ef\u9605\u8bfb\u5b98\u65b9\u6587\u6863 \u3010",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0"},"ASP.NET Core - \u4e2d\u95f4\u4ef6"),"\u3011"),(0,l.kt)("h2",{id:"558-\u53cd\u9988\u4e0e\u5efa\u8bae"},"5.5.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}g.isMDXComponent=!0}}]);