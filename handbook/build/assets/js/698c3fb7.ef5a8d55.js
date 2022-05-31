"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4249],{3634:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=a(1402),o=["components"],p={id:"template",title:"2.2 \u5b98\u65b9\u811a\u624b\u67b6",sidebar_label:"2.2 \u5b98\u65b9\u811a\u624b\u67b6"},m=void 0,s={unversionedId:"template",id:"template",title:"2.2 \u5b98\u65b9\u811a\u624b\u67b6",description:"",source:"@site/docs/template.mdx",sourceDirName:".",slug:"/template",permalink:"/furion/docs/template",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/template.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1653919418,formattedLastUpdatedAt:"5/30/2022",frontMatter:{id:"template",title:"2.2 \u5b98\u65b9\u811a\u624b\u67b6",sidebar_label:"2.2 \u5b98\u65b9\u811a\u624b\u67b6"},sidebar:"docs",previous:{title:"2.1 \u4e00\u5206\u949f\u4e0a\u624b (.NET6) \u2728",permalink:"/furion/docs/get-start-net6"},next:{title:"2.3 \u624b\u52a8\u642d\u5efa\u5206\u5c42",permalink:"/furion/docs/reference"}},d={},c=[{value:"2.2.1 \u811a\u624b\u67b6",id:"221-\u811a\u624b\u67b6",level:2},{value:"2.2.2 \u5b89\u88c5\u811a\u624b\u67b6",id:"222-\u5b89\u88c5\u811a\u624b\u67b6",level:2},{value:"2.2.3 \u4f7f\u7528\u811a\u624b\u67b6",id:"223-\u4f7f\u7528\u811a\u624b\u67b6",level:2},{value:"2.2.4 \u811a\u624b\u67b6\u66f4\u65b0",id:"224-\u811a\u624b\u67b6\u66f4\u65b0",level:2},{value:"2.2.5 <code>Visual Studio</code> \u96c6\u6210",id:"225-visual-studio-\u96c6\u6210",level:2},{value:"2.2.6 <code>\u5173\u4e8e MVC \u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898</code>",id:"226-\u5173\u4e8e-mvc-\u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898",level:2},{value:"2.2.7 \u642d\u5efa\u811a\u624b\u67b6",id:"227-\u642d\u5efa\u811a\u624b\u67b6",level:2},{value:"2.2.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"228-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u811a\u624b\u67b6\u4e0d\u662f\u5b89\u88c5\u5728\u9879\u76ee\u4e2d\u7684\uff01")," \u800c\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"PowerShell")," \u5b89\u88c5\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u3002"))),(0,i.kt)("h2",{id:"221-\u811a\u624b\u67b6"},"2.2.1 \u811a\u624b\u67b6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u591a\u79cd ",(0,i.kt)("inlineCode",{parentName:"p"},"Web")," \u5e94\u7528\u7c7b\u578b\u7684\u811a\u624b\u67b6\uff0c\u65b9\u4fbf\u5927\u5bb6\u5feb\u901f\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5e94\u7528\u811a\u624b\u67b6\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u6a21\u677f\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u8bcd"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Mvc/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.Mvc"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Mvc/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Mvc.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionmvc")),(0,i.kt)("td",{parentName:"tr",align:null},"Mvc \u6a21\u677f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Api/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.Api"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Api/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Api.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionapi")),(0,i.kt)("td",{parentName:"tr",align:null},"WebApi \u6a21\u677f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.App/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.App"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.App/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.App.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionapp")),(0,i.kt)("td",{parentName:"tr",align:null},"Mvc/WebApi \u6a21\u677f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Razor/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.Razor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Razor/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Razor.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionrazor")),(0,i.kt)("td",{parentName:"tr",align:null},"RazorPages \u6a21\u677f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.RazorWithWebApi/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.RazorWithWebApi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.RazorWithWebApi/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.RazorWithWebApi.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionrazorapi")),(0,i.kt)("td",{parentName:"tr",align:null},"RazorPages/WebApi \u6a21\u677f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Blazor/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.Blazor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Blazor/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Blazor.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionblazor")),(0,i.kt)("td",{parentName:"tr",align:null},"Blazor \u6a21\u677f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.BlazorWithWebApi/"},(0,i.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"Furion.Template.BlazorWithWebApi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.BlazorWithWebApi/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.BlazorWithWebApi.svg?cacheSeconds=10800",alt:"nuget"}))),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,i.kt)("strong",{parentName:"td"},"furionblazorapi")),(0,i.kt)("td",{parentName:"tr",align:null},"Blazor/WebApi \u6a21\u677f")))),(0,i.kt)("h2",{id:"222-\u5b89\u88c5\u811a\u624b\u67b6"},"2.2.2 \u5b89\u88c5\u811a\u624b\u67b6"),(0,i.kt)("p",null,"\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Powershell")," \u6267\u884c\u6a21\u677f\u5b89\u88c5\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"dotnet new --install Furion.Template.Mvc::2.20.3\n// .NET6\ndotnet new --install Furion.Template.Mvc::3.3.4\n")),(0,i.kt)("h2",{id:"223-\u4f7f\u7528\u811a\u624b\u67b6"},"2.2.3 \u4f7f\u7528\u811a\u624b\u67b6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"dotnet new furionmvc -n \u9879\u76ee\u540d\u79f0\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u751f\u6210\u9879\u76ee\u4ee3\u7801\u4e86\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u751f\u6210\u4e4b\u540e\u63a8\u8350\u5c06\u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"strong"},"nuget")," \u5305\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5173\u4e8e\u9879\u76ee\u540d\u79f0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u901a\u8fc7\u811a\u624b\u67b6\u751f\u6210\u7684\u9879\u76ee\u540d\u79f0\u4e0d\u80fd\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u77ed\u6a2a\u7ebf")," \u7b49\u7279\u6b8a\u5b57\u7b26\uff0c\u5982\u6709\u8be5\u9700\u6c42\uff0c\u53ef\u5728\u751f\u6210\u4e4b\u540e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u8fdb\u884c\u624b\u52a8\u4fee\u6539\u3002"))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"furionmvc")," \u5bf9\u5e94\u7684\u662f\u4e0a\u9762\u5217\u8868\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5173\u952e\u5b57"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet new --list")," \u67e5\u770b\u3002"),(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet new \u5173\u952e\u5b57 --help")," \u67e5\u770b\u66f4\u591a\u53c2\u6570\u3002"))),(0,i.kt)("h2",{id:"224-\u811a\u624b\u67b6\u66f4\u65b0"},"2.2.4 \u811a\u624b\u67b6\u66f4\u65b0"),(0,i.kt)("p",null,"\u53ea\u9700\u8981\u91cd\u65b0\u5b89\u88c5\u6700\u65b0\u7248\u66ff\u6362\u5373\u53ef\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"dotnet new --install Furion.Template.Mvc::2.x.x\n")),(0,i.kt)("p",null,"\u4e0d\u5e26\u7248\u672c\u53f7\u603b\u662f\u5b89\u88c5\u6700\u65b0\u7684\u7248\u672c\u3002"),(0,i.kt)("h2",{id:"225-visual-studio-\u96c6\u6210"},"2.2.5 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Visual Studio")," \u96c6\u6210"),(0,i.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u5b89\u88c5\u811a\u624b\u67b6\u540e\uff0c\u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u5230\u6700\u65b0\u7248\u53ef\u4f7f\u7528\u53ef\u89c6\u5316\u65b9\u5f0f\u521b\u5efa\u54e6\u3002"),(0,i.kt)("img",{src:(0,l.Z)("img/ksh.png")}),(0,i.kt)("h2",{id:"226-\u5173\u4e8e-mvc-\u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898"},"2.2.6 ",(0,i.kt)("inlineCode",{parentName:"h2"},"\u5173\u4e8e MVC \u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898")),(0,i.kt)("p",null,"\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5e95\u5c42\u4f9d\u8d56\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.CodeAnalysis.CSharp")," \u5305\uff0c\u6240\u4ee5\u53ef\u80fd\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Viusal Studio")," \u7684\u754c\u9762\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Area \u533a\u57df")," \u65f6\u4f1a\u51fa\u9519\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web.Entry")," \u5c42\u5b89\u88c5\u4e0b\u9762\u51e0\u4e2a\u5305\u5373\u53ef\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.CSharp.Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.CSharp.Scripting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.VisualBasic.Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.Workspaces.MSBuild")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.VisualStudio.Web.CodeGeneration.Design"))),(0,i.kt)("h2",{id:"227-\u642d\u5efa\u811a\u624b\u67b6"},"2.2.7 \u642d\u5efa\u811a\u624b\u67b6"),(0,i.kt)("p",null,"\u811a\u624b\u67b6\u53ef\u4ee5\u6781\u5927\u7684\u63d0\u9ad8\u6211\u4eec\u642d\u5efa\u65b0\u9879\u76ee\u7684\u901f\u5ea6\uff0c\u63a8\u8350\u4e24\u7bc7\u6587\u7ae0\u7ed9\u5927\u5bb6\u5b66\u4e60\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/laozhang-is-phi/p/10205495.html"},"https://www.cnblogs.com/laozhang-is-phi/p/10205495.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/catcher1994/p/10061470.html"},"https://www.cnblogs.com/catcher1994/p/10061470.html")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u63a8\u8350\u76f4\u63a5\u62f7\u8d1d ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion")," \u811a\u624b\u67b6\u6587\u4ef6\u5939\u8fdb\u884c\u4fee\u6539\uff0c\u53ef\u907f\u514d\u5f88\u591a\u95ee\u9898\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/tree/net6/templates"},"Furion \u811a\u624b\u67b6\u6e90\u7801")),(0,i.kt)("h2",{id:"228-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.2.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6a21\u677f\u77e5\u8bc6")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-new"},"dotnet-new \u6a21\u677f")," \u7ae0\u8282\u3002"))))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);