"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[732],{9243:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),l=["components"],o={id:"view-engine",title:"17. \u89c6\u56fe\u5f15\u64ce",sidebar_label:"17. \u89c6\u56fe\u5f15\u64ce"},s=void 0,m={unversionedId:"view-engine",id:"view-engine",title:"17. \u89c6\u56fe\u5f15\u64ce",description:"17.1 \u5173\u4e8e\u89c6\u56fe\u5f15\u64ce",source:"@site/docs/view-engine.mdx",sourceDirName:".",slug:"/view-engine",permalink:"/furion/docs/view-engine",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/view-engine.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"view-engine",title:"17. \u89c6\u56fe\u5f15\u64ce",sidebar_label:"17. \u89c6\u56fe\u5f15\u64ce"},sidebar:"docs",previous:{title:"16. CORS \u8de8\u57df",permalink:"/furion/docs/cors"},next:{title:"18. \u65e5\u5fd7\u8bb0\u5f55",permalink:"/furion/docs/logging"}},u={},p=[{value:"17.1 \u5173\u4e8e\u89c6\u56fe\u5f15\u64ce",id:"171-\u5173\u4e8e\u89c6\u56fe\u5f15\u64ce",level:2},{value:"17.2 \u89c6\u56fe\u5f15\u64ce\u4f5c\u7528",id:"172-\u89c6\u56fe\u5f15\u64ce\u4f5c\u7528",level:2},{value:"17.3 \u57fa\u7840\u4f7f\u7528",id:"173-\u57fa\u7840\u4f7f\u7528",level:2},{value:"17.3.1 \u6ce8\u518c\u670d\u52a1",id:"1731-\u6ce8\u518c\u670d\u52a1",level:3},{value:"17.3.2 \u4f7f\u7528\u65b9\u5f0f",id:"1732-\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"17.3.3 \u5f31\u7c7b\u578b\u6a21\u677f",id:"1733-\u5f31\u7c7b\u578b\u6a21\u677f",level:3},{value:"17.3.4 \u5f3a\u7c7b\u578b\u6a21\u677f",id:"1734-\u5f3a\u7c7b\u578b\u6a21\u677f",level:3},{value:"17.3.5 \u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58 \ud83e\udd47",id:"1735-\u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58-",level:3},{value:"17.4 \u9ad8\u7ea7\u7528\u6cd5",id:"174-\u9ad8\u7ea7\u7528\u6cd5",level:2},{value:"17.4.1 \u6dfb\u52a0\u7a0b\u5e8f\u96c6",id:"1741-\u6dfb\u52a0\u7a0b\u5e8f\u96c6",level:3},{value:"17.4.2 \u6dfb\u52a0\u547d\u540d\u7a7a\u95f4",id:"1742-\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4",level:3},{value:"17.4.3 \u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5",id:"1743-\u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5",level:3},{value:"17.4.4 \u8c03\u7528\u7c7b\u65b9\u6cd5",id:"1744-\u8c03\u7528\u7c7b\u65b9\u6cd5",level:3},{value:"17.5 <code>IViewEngine</code> \u63a5\u53e3",id:"175-iviewengine-\u63a5\u53e3",level:2},{value:"17.6 \u5b57\u7b26\u4e32\u6a21\u677f\u66ff\u6362\u5f15\u64ce",id:"176-\u5b57\u7b26\u4e32\u6a21\u677f\u66ff\u6362\u5f15\u64ce",level:2},{value:"17.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"177-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"171-\u5173\u4e8e\u89c6\u56fe\u5f15\u64ce"},"17.1 \u5173\u4e8e\u89c6\u56fe\u5f15\u64ce"),(0,a.kt)("p",null,"\u89c6\u56fe\u5f15\u64ce\u8d1f\u8d23\u6839\u636e\u89c6\u56fe\u6a21\u677f\u521b\u5efa HTML\u3002\u89c6\u56fe\u901a\u5e38\u662f HTML \u548c\u7f16\u7a0b\u8bed\u8a00\u7684\u67d0\u79cd\u6df7\u5408\u3002\u652f\u6301\u53d8\u91cf\u5b9a\u4e49\u3001\u65b9\u6cd5\u8c03\u7528\u53ca\u903b\u8f91\u7f16\u5199\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5e95\u5c42\u96c6\u6210\u4e86\u5fae\u8f6f\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Razor")," \u89c6\u56fe\u5f15\u64ce\u7ec4\u4ef6\u5e76\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u65b9\u4fbf\u7684\u8bed\u6cd5\u7cd6\u3002"),(0,a.kt)("h2",{id:"172-\u89c6\u56fe\u5f15\u64ce\u4f5c\u7528"},"17.2 \u89c6\u56fe\u5f15\u64ce\u4f5c\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"strong"},"ASP.NET Core")," \u5b8c\u6574\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Razor")," \u8bed\u6cd5")),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u7f16\u8bd1\u6a21\u677f\u4ea7\u751f\u4e0d\u540c\u7684\u8f93\u51fa"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u5f3a\u5927\u7684\u63d2\u4ef6\u5316\u673a\u5236"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u5168\u7ad9\u9875\u9762\u9759\u6001\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4f5c\u90ae\u4ef6\u6a21\u677f\u3001\u77ed\u4fe1\u6a21\u677f\u3001\u4f18\u60e0\u5238\u4fe1\u606f\u6a21\u677f\u7b49")),(0,a.kt)("h2",{id:"173-\u57fa\u7840\u4f7f\u7528"},"17.3 \u57fa\u7840\u4f7f\u7528"),(0,a.kt)("h3",{id:"1731-\u6ce8\u518c\u670d\u52a1"},"17.3.1 \u6ce8\u518c\u670d\u52a1"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e4b\u524d\u9700\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6ce8\u518c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe\u5f15\u64ce\u670d\u52a1"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddViewEngine();\n}\n")),(0,a.kt)("h3",{id:"1732-\u4f7f\u7528\u65b9\u5f0f"},"17.3.2 \u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"IViewEngine"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2,9,12}",showLineNumbers:!0,"":!0,"{2,9,12}":!0},'using Furion.DynamicApiController;\nusing Furion.ViewEngine;\n\nnamespace Furion.Application\n{\n    public class ViewEngineService : IDynamicApiController\n    {\n        private readonly IViewEngine _viewEngine;\n        public ViewEngineService(IViewEngine viewEngine)\n        {\n            _viewEngine = viewEngine;\n            var result = _viewEngine.RunCompile("Hello @Model.Name", new { Name = "Furion" });\n        }\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u65b9\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = "Hello @Model.Name".RunCompile(new { Name = "Furion" });\n')),(0,a.kt)("h3",{id:"1733-\u5f31\u7c7b\u578b\u6a21\u677f"},"17.3.3 \u5f31\u7c7b\u578b\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = _viewEngine.RunCompile("Hello @Model.Name", new { Name = "Furion" });\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"Hello Furion\n")),(0,a.kt)("p",null,"\u652f\u6301\u5f02\u6b65 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunCompileAsync")),(0,a.kt)("h3",{id:"1734-\u5f3a\u7c7b\u578b\u6a21\u677f"},"17.3.4 \u5f3a\u7c7b\u578b\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = _viewEngine.RunCompile(@"\nHello @Model.Name\n@foreach(var item in Model.Items)\n{\n    <p>@item</p>\n}\n", new TestModel\n{\n    Name = "Furion",\n    Items = new[] { 3, 1, 2 }\n});\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"Hello Furion\n<p>3</p>\n<p>1</p>\n<p>2</p>\n")),(0,a.kt)("p",null,"\u652f\u6301\u5f02\u6b65 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunCompileAsync")),(0,a.kt)("h3",{id:"1735-\u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58-"},"17.3.5 \u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58 \ud83e\udd47"),(0,a.kt)("p",null,"\u7531\u4e8e\u6a21\u677f\u7f16\u8bd1\u9700\u8981\u6d88\u8017\u5927\u91cf\u7684\u6027\u80fd\uff0c\u6240\u4ee5\u5efa\u8bae\u4f7f\u7528\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"FromCached")," \u7ed3\u5c3e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunCompileFromCached")," \u66ff\u4ee3\u3002\u8c03\u7528\u8be5\u65b9\u6cd5\u540e\u4f1a\u81ea\u52a8\u5c06\u6a21\u677f\u7f16\u8bd1\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},".dll")," \u4ee5\u4fbf\u4e0b\u6b21\u4f7f\u7528\u3002\u51cf\u5c11\u7b2c\u4e8c\u6b21\u4e4b\u540e\u4f7f\u7528\u6a21\u677f\u7684\u6027\u80fd\u635f\u8017\u3002"),(0,a.kt)("p",null,"\u5982\uff0c\u5f3a\u7c7b\u578b\u6a21\u677f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = _viewEngine.RunCompileFromCached(@"\nHello @Model.Name\n@foreach(var item in Model.Items)\n{\n    <p>@item</p>\n}\n", new TestModel\n{\n    Name = "Furion",\n    Items = new[] { 3, 1, 2 }\n});\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"Hello Furion\n<p>3</p>\n<p>1</p>\n<p>2</p>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"RunCompileFromCached")," \u65b9\u6cd5\u4e4b\u540e\u5c06\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"MD5")," \u52a0\u5bc6\u6a21\u677f\u5e76\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"strong"},"MD5"),"\u5b57\u7b26\u4e32\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},".dll")," \u5b58\u653e\u5728\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"templates")," \u76ee\u5f55\u4e2d\u3002\u53ea\u8981\u6a21\u677f\u5185\u5bb9\u4e0d\u53d8\uff0c\u6570\u636e\u53d1\u751f\u6539\u53d8\u4e5f\u4e0d\u4f1a\u91cd\u65b0\u7f16\u8bd1\u6a21\u677f\u3002\u8fd9\u6837\u5927\u5927\u7684\u63d0\u9ad8\u4e86\u9996\u6b21\u4e4b\u540e\u7684\u6027\u80fd\u3002")),(0,a.kt)("p",null,"\u5982\uff0c\u4f20\u5165\u65b0\u7684\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {10}",showLineNumbers:!0,"":!0,"{10}":!0},'var result = _viewEngine.RunCompileFromCached(@"\nHello @Model.Name\n@foreach(var item in Model.Items)\n{\n    <p>@item</p>\n}\n", new TestModel\n{\n    Name = "Furion",\n    Items = new[] { 5,6,7,8 }\n});\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"Hello Furion\n<p>5</p>\n<p>6</p>\n<p>7</p>\n<p>8</p>\n")),(0,a.kt)("p",null,"\u6a21\u677f\u4e0d\u518d\u91cd\u65b0\u7f16\u8bd1\uff0c\u53ea\u662f\u91cd\u65b0\u66ff\u6362\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"174-\u9ad8\u7ea7\u7528\u6cd5"},"17.4 \u9ad8\u7ea7\u7528\u6cd5"),(0,a.kt)("p",null,"\u9ad8\u7ea7\u7528\u6cd5\u652f\u6301\u5c06\u7279\u5b9a\u7a0b\u5e8f\u96c6\u3001\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u3001\u7279\u5b9a\u7c7b\u578b\u5f15\u5165\u5230\u6a21\u677f\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"1741-\u6dfb\u52a0\u7a0b\u5e8f\u96c6"},"17.4.1 \u6dfb\u52a0\u7a0b\u5e8f\u96c6"),(0,a.kt)("p",null,"\u6bd4\u5982\u8fd9\u91cc\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"System.IO")," \u7a0b\u5e8f\u96c6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = _viewEngine.RunCompileFromCached(@"<div>@System.IO.Path.Combine(""Furion"", ""ViewEngine"")</div>", builderAction: builder =>\n            {\n                builder.AddAssemblyReferenceByName("System.IO");\n            });\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<div>Furion\\\\ViewEngine</div>\n")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u591a\u79cd\u65b9\u5f0f\u52a0\u8f7d\u7a0b\u5e8f\u96c6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'builder.AddAssemblyReferenceByName("System.Security"); // \u901a\u8fc7\u540d\u79f0\nbuilder.AddAssemblyReference(typeof(System.IO.File)); // \u901a\u8fc7\u7c7b\u578b\nbuilder.AddAssemblyReference(Assembly.Load("source")); // \u901a\u8fc7\u5143\u6570\u636e\u5f15\u7528\n')),(0,a.kt)("h3",{id:"1742-\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4"},"17.4.2 \u6dfb\u52a0\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = _viewEngine.RunCompileFromCached(@"<div>@Path.Combine(""Furion"", ""ViewEngine"")</div>", builderAction: builder =>\n            {\n                builder.AddUsing("System.IO");\n                builder.AddAssemblyReferenceByName("System.IO");\n            });\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<div>Furion\\\\ViewEngine</div>\n")),(0,a.kt)("p",null,"\u4e5f\u652f\u6301\u52a0\u5165\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"using"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'builder.AddUsing("System.IO");\nbuilder.AddUsing("Furion");\n')),(0,a.kt)("h3",{id:"1743-\u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5"},"17.4.3 \u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = _viewEngine.RunCompileFromCached(@"\n<area>\n    @{ RecursionTest(3); }\n</area>\n\n@{\n  void RecursionTest(int level)\n  {\n    if (level <= 0)\n    {\n        return;\n    }\n\n    <div>LEVEL: @level</div>\n    @{ RecursionTest(level - 1); }\n  }\n}\n");\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<area>\n<div>LEVEL: 3</div>\n<div>LEVEL: 2</div>\n<div>LEVEL: 1</div>\n</area>\n")),(0,a.kt)("h3",{id:"1744-\u8c03\u7528\u7c7b\u65b9\u6cd5"},"17.4.4 \u8c03\u7528\u7c7b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomModel")," \u7c7b\u5e76\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewEngineModel")," \u57fa\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1}",showLineNumbers:!0,"":!0,"{1}":!0},'public class CustomModel : ViewEngineModel\n{\n    public int A { get; set; }\n    public string B { get; set; }\n    public string Decorator(object value)\n    {\n        return "-=" + value + "=-";\n    }\n}\n')),(0,a.kt)("p",null,"\u5728\u6a21\u677f\u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Decorator(value)")," \u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var content = @"Hello @A, @B, @Decorator(123)";\n\nvar template = _viewEngine.Compile<CustomModel>(content);\n\nvar result = template.Run(instance =>\n{\n    instance.A = 10;\n    instance.B = "Alex";\n});\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"Hello 10, Alex, -=123=-\n")),(0,a.kt)("h2",{id:"175-iviewengine-\u63a5\u53e3"},"17.5 ",(0,a.kt)("inlineCode",{parentName:"h2"},"IViewEngine")," \u63a5\u53e3"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IViewEngine")," \u63d0\u4f9b\u4e86\u7b80\u5355\u65b9\u4fbf\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunCompile")," \u65b9\u6cd5\uff0c\u4e5f\u63d0\u4f9b\u4e86\u6700\u539f\u59cb\u5316\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Compile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u539f\u59cb\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Compile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," \u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u5f88\u591a\u590d\u6742\u7684\u903b\u8f91\u548c\u81ea\u5b9a\u4e49\u6307\u4ee4\u96c6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nIViewEngineTemplate Compile(string content, Action<IViewEngineOptionsBuilder> builderAction = null);\n/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nTask<IViewEngineTemplate> CompileAsync(string content, Action<IViewEngineOptionsBuilder> builderAction = null);\n/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <typeparam name="T"></typeparam>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nIViewEngineTemplate<T> Compile<T>(string content, Action<IViewEngineOptionsBuilder> builderAction = null)\n    where T : IViewEngineModel;\n/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <typeparam name="T"></typeparam>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nTask<IViewEngineTemplate<T>> CompileAsync<T>(string content, Action<IViewEngineOptionsBuilder> builderAction = null)\n    where T : IViewEngineModel;\n')),(0,a.kt)("h2",{id:"176-\u5b57\u7b26\u4e32\u6a21\u677f\u66ff\u6362\u5f15\u64ce"},"17.6 \u5b57\u7b26\u4e32\u6a21\u677f\u66ff\u6362\u5f15\u64ce"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u9664\u4e86\u5185\u7f6e\u89c6\u56fe\u5f15\u64ce\u4e4b\u5916\uff0c\u8fd8\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u6a21\u677f\u66ff\u6362\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u63d0\u4f9b\u6570\u636e\u6a21\u677f\u65b9\u5f0f\nvar str = "\u6211\u53eb{name}".Render(new Dictionary{ {"name", "Furion"} });\nvar str = "\u6211\u53eb{Name}".Render(new { Name = "Furion" });\nvar str = "\u6211\u53eb{Detail.Name}".Render(new { Detail = new { Name = "Furoin" } });\n\n// \u4ece\u914d\u7f6e\u8bfb\u53d6\u65b9\u5f0f\nvar str = "\u6211\u53eb#(Furion:Address)".Render();\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "Furion": {\n    "Address": "https://www.furion.icu"\n  }\n}\n')),(0,a.kt)("h2",{id:"177-\u53cd\u9988\u4e0e\u5efa\u8bae"},"17.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}c.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=i,g=d["".concat(s,".").concat(c)]||d[c]||p[c]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);