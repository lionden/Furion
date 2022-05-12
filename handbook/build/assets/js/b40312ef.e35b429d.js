"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5393],{9253:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={id:"sqlsugar",title:"10.1. SqlSugar \u96c6\u6210",sidebar_label:"10.1. SqlSugar \u96c6\u6210"},s=void 0,d={unversionedId:"sqlsugar",id:"sqlsugar",title:"10.1. SqlSugar \u96c6\u6210",description:"\u7531\u4e8e SqlSugar \u9ad8\u901f\u53d1\u5c55\uff0c\u65b0\u7248\u672c\u5e26\u6765\u4e86\u8bf8\u591a\u7279\u6027\uff0c\u800c Furion.Extras.DatabaseAccessor.SqlSugar \u62d3\u5c55\u5305\u66f4\u65b0\u4e0d\u53ca\u65f6\u5bfc\u81f4\u4e0d\u80fd\u7b2c\u4e00\u65f6\u95f4\u4f53\u9a8c\u65b0\u7279\u6027\u3002",source:"@site/docs/sqlsugar.mdx",sourceDirName:".",slug:"/sqlsugar",permalink:"/furion/docs/sqlsugar",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/sqlsugar.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"sqlsugar",title:"10.1. SqlSugar \u96c6\u6210",sidebar_label:"10.1. SqlSugar \u96c6\u6210"},sidebar:"docs",previous:{title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",permalink:"/furion/docs/efcore-recommend"},next:{title:"10.2. Dapper \u96c6\u6210",permalink:"/furion/docs/dapper"}},m={},p=[{value:"10.1.1 SqlSugar ORM",id:"1011-sqlsugar-orm",level:2},{value:"10.1.2 \u529f\u80fd\u4ecb\u7ecd",id:"1012-\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"10.1.3 \u5b98\u7f51\u6587\u6863",id:"1013-\u5b98\u7f51\u6587\u6863",level:2},{value:"10.1.4 Furion \u96c6\u6210",id:"1014-furion-\u96c6\u6210",level:2},{value:"10.1.5 \u7279\u8272\u529f\u80fd",id:"1015-\u7279\u8272\u529f\u80fd",level:2},{value:"10.1.5.1 \u8054\u8868\u67e5\u8be2",id:"10151-\u8054\u8868\u67e5\u8be2",level:3},{value:"10.1.5.2 \u5206\u9875\u67e5\u8be2",id:"10152-\u5206\u9875\u67e5\u8be2",level:3},{value:"10.1.5.3 \u52a8\u6001\u8868\u8fbe\u5f0f",id:"10153-\u52a8\u6001\u8868\u8fbe\u5f0f",level:3},{value:"10.1.5.4 \u4ed3\u50a8\u65b9\u6cd5",id:"10154-\u4ed3\u50a8\u65b9\u6cd5",level:3},{value:"10.1.5.5 \u591a\u5e93\u4e8b\u52a1",id:"10155-\u591a\u5e93\u4e8b\u52a1",level:3},{value:"10.1.5.6 \u5355\u4f8b\u6a21\u5f0f",id:"10156-\u5355\u4f8b\u6a21\u5f0f",level:3},{value:"10.1.5.7 \u5168\u5c40\u8fc7\u6ee4\u5668",id:"10157-\u5168\u5c40\u8fc7\u6ee4\u5668",level:3},{value:"10.1.5.8 \u6dfb\u52a0\u6216\u8005\u66f4\u65b0",id:"10158-\u6dfb\u52a0\u6216\u8005\u66f4\u65b0",level:3},{value:"10.1.5.9 \u81ea\u52a8\u5206\u8868",id:"10159-\u81ea\u52a8\u5206\u8868",level:3},{value:"10.1.5.10 \u5927\u6570\u636e\u63d2\u5165\uff0c\u66f4\u65b0\uff0c\u63d2\u5165\u6216\u8005\u66f4\u65b0",id:"101510-\u5927\u6570\u636e\u63d2\u5165\u66f4\u65b0\u63d2\u5165\u6216\u8005\u66f4\u65b0",level:3},{value:"10.1.5.11 \u66f4\u591a\u529f\u80fd",id:"101511-\u66f4\u591a\u529f\u80fd",level:3},{value:"10.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1016-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5173\u4e8e\u62d3\u5c55\u5305")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u9ad8\u901f\u53d1\u5c55\uff0c\u65b0\u7248\u672c\u5e26\u6765\u4e86\u8bf8\u591a\u7279\u6027\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Extras.DatabaseAccessor.SqlSugar")," \u62d3\u5c55\u5305\u66f4\u65b0\u4e0d\u53ca\u65f6\u5bfc\u81f4\u4e0d\u80fd\u7b2c\u4e00\u65f6\u95f4\u4f53\u9a8c\u65b0\u7279\u6027\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u6240\u4ee5\uff0c\u548c ",(0,i.kt)("inlineCode",{parentName:"strong"},"SqlSugar")," \u4f5c\u8005\u5546\u91cf\u540e\uff0c\u51b3\u5b9a\u5168\u9762\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"SqlSugar")," \u539f\u751f\u62d3\u5c55\u5305\u5373\u53ef\u3002\u4ee5\u4e0b\u6587\u6863\u5df2\u66f4\u65b0"),"\uff0c",(0,i.kt)("a",{parentName:"p",href:"./sqlsugar-old"},"\u67e5\u770b\u65e7\u6587\u6863")))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6e29\u99a8\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"EFCore"),"\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion.Pure")," \u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion")),"\u3002"))),(0,i.kt)("h2",{id:"1011-sqlsugar-orm"},"10.1.1 SqlSugar ORM"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},".NET/C#")," \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u6846\u67b6\uff0c\u76ee\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"Nuget")," \u603b\u4e0b\u8f7d\u7a81\u7834 ",(0,i.kt)("inlineCode",{parentName:"p"},"1000K"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Github")," \u5173\u6ce8\u91cf\u4e5f\u9ad8\u8fbe ",(0,i.kt)("inlineCode",{parentName:"p"},"3.7K"),"\uff0c\u662f\u76ee\u524d\u5f53\u4e4b\u65e0\u6127\u7684\u56fd\u4ea7\u4f18\u79c0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u6846\u67b6\u4e4b\u4e00\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u9ad8\u6027\u80fd\uff0c\u5177\u6709\u767e\u4e07\u7ea7\u63d2\u5165\u3001\u66f4\u65b0\u5927\u6570\u636e\u5206\u8868\u7b49\u7279\u8272\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"1012-\u529f\u80fd\u4ecb\u7ecd"},"10.1.2 \u529f\u80fd\u4ecb\u7ecd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"SqlServer\u3001MySql\u3001PgSql\u3001Oracle")," \u767e\u4e07\u7ea7\u63d2\u5165\u548c\u66f4\u65b0"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5168\u81ea\u52a8\u5206\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5e93\u4e8b\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"CodeFirst"),"  "),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u8054\u8868\u67e5\u8be2\u3001\u5d4c\u5957\u67e5\u8be2\u3001\u5bfc\u822a\u67e5\u8be2\u3001\u5b50\u67e5\u8be2\u548c\u52a8\u6001 ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," \u67e5\u8be2\u7b49\u67e5\u8be2\u64cd\u4f5c "),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5de5\u5177\u751f\u6210\u5b9e\u4f53\u548c\u4ee3\u7801\u751f\u6210\u5b9e\u4f53"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93 MySql\u3001SqlServer\u3001Sqlite\u3001Oracle\u3001postgresql\u3001\u8fbe\u68a6\u3001\u4eba\u5927\u91d1\u4ed3\u3001\u795e\u901a\u6570\u636e\u5e93")),(0,i.kt)("h2",{id:"1013-\u5b98\u7f51\u6587\u6863"},"10.1.3 \u5b98\u7f51\u6587\u6863"),(0,i.kt)("p",null,"\u70b9\u51fb\u4ee5\u4e0b\u94fe\u63a5\u53ef\u4ee5\u8df3\u8f6c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u5b98\u7f51\u67e5\u770b\u8be6\u7ec6 ",(0,i.kt)("inlineCode",{parentName:"p"},"API")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5165\u95e8"),(0,i.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63d2\u5165"),(0,i.kt)("th",{parentName:"tr",align:null},"\u66f4\u65b0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5220 \u9664"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.donet5.com/home/Doc?typeId=1226"},"\u5b89\u88c5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.donet5.com/Home/Doc?typeId=1187"},"\u7b80\u5355\u67e5\u8be2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.donet5.com/Home/Doc?typeId=1193"}," \u589e ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.donet5.com/Home/Doc?typeId=1191"},"\u6539")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.donet5.com/Home/Doc?typeId=1195"},"\u5220"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.donet5.com/home/Doc?typeId=1181"},"\u5165\u95e8")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_bank",href:"https://www.donet5.com/Home/Doc?typeId=1185"},"\u8054\u8868 ")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"1014-furion-\u96c6\u6210"},"10.1.4 Furion \u96c6\u6210"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u62d3\u5c55\u7c7b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,23}",showLineNumbers:!0,"":!0,"{3,23}":!0},'public static class SqlsugarSetup\n{\n    public static void AddSqlsugarSetup(this IServiceCollection services, IConfiguration configuration, string dbName = "db_master")\n    {\n        //\u5982\u679c\u591a\u4e2a\u6570\u6570\u636e\u5e93\u4f20 List<ConnectionConfig>\n        var configConnection=new ConnectionConfig()\n        {\n            DbType = SqlSugar.DbType.MySql,\n            ConnectionString = configuration.GetConnectionString(dbName),\n            IsAutoCloseConnection = true,\n        };\n        \n        SqlSugarScope sqlSugar = new SqlSugarScope(configConnection,\n            db =>\n            {\n                //\u5355\u4f8b\u53c2\u6570\u914d\u7f6e\uff0c\u6240\u6709\u4e0a\u4e0b\u6587\u751f\u6548\n                db.Aop.OnLogExecuting = (sql, pars) =>\n                {\n                    //Console.WriteLine(sql);//\u8f93\u51fasql\n                };\n            });\n\n        services.AddSingleton<ISqlSugarClient>(sqlSugar);//\u8fd9\u8fb9\u662fSqlSugarScope\u7528AddSingleton\n    }\n}\n')),(0,i.kt)("p",null,"\u4f7f\u7528\u6ce8\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"//1.\u6784\u9020\u51fd\u6570\u6ce8\u5165\nSqlSugar.ISqlSugarClient db;\npublic WeatherForecastController(ISqlSugarClient db) \n{\n\n    this.db = db;\n}\n\n//2.\u624b\u52a8\u83b7\u53d6\nApp.GetService<ISqlSugarClient>();\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddSqlsugarSetup(App.Configuration);\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u591a\u5e93\u914d\u7f6e\uff0c\u53ef\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://www.donet5.com/home/Doc?typeId=2246"},"https://www.donet5.com/home/Doc?typeId=2246")))),(0,i.kt)("h2",{id:"1015-\u7279\u8272\u529f\u80fd"},"10.1.5 \u7279\u8272\u529f\u80fd"),(0,i.kt)("h3",{id:"10151-\u8054\u8868\u67e5\u8be2"},"10.1.5.1 \u8054\u8868\u67e5\u8be2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Linq/Lambda"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var query5 = db.Queryable<Order>()\n            .LeftJoin<Custom>    ((o, cus) => o.CustomId == cus.Id)\n            .LeftJoin<OrderItem> ((o, cus, oritem ) => o.Id == oritem.OrderId)\n            .Where(o => o.Id == 1)  \n            .Select((o, cus) => new ViewOrder { Id = o.Id, CustomName = cus.Name })\n            .ToList();   \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"SQL"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"SELECT\n  [o].[Id] AS [Id],\n  [cus].[Name] AS [CustomName]\nFROM\n  [Order] o\n  Left JOIN [Custom] cus ON ([o].[CustomId] = [cus].[Id])\n  Left JOIN [OrderDetail] oritem ON ([o].[Id] = [oritem].[OrderId])\nWHERE\n  ([o].[Id] = @Id0)\n")),(0,i.kt)("h3",{id:"10152-\u5206\u9875\u67e5\u8be2"},"10.1.5.2 \u5206\u9875\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"int pageIndex = 1; \nint pageSize = 20;\nint totalCount=0;\nvar page = db.Queryable<Student>().ToPageList(pageIndex, pageSize, ref totalCount);\n")),(0,i.kt)("h3",{id:"10153-\u52a8\u6001\u8868\u8fbe\u5f0f"},"10.1.5.3 \u52a8\u6001\u8868\u8fbe\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Linq/Lambda"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var names= new string [] { "a","b"};\nExpressionable<Order> exp = new Expressionable<Order>();\n\nforeach (var item in names)\n{\n    exp.Or(it => it.Name.Contains(item.ToString()));\n}\n\nvar list= db.Queryable<Order>().Where(exp.ToExpression()).ToList();\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"SQL"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"SELECT [Id],[Name],[Price],[CreateTime],[CustomId]\n        FROM [Order]  WHERE (\n                      ([Name] like '%'+ CAST(@MethodConst0 AS NVARCHAR(MAX))+'%') OR \n                      ([Name] like '%'+ CAST(@MethodConst1 AS NVARCHAR(MAX))+'%')\n                     )\n")),(0,i.kt)("h3",{id:"10154-\u4ed3\u50a8\u65b9\u6cd5"},"10.1.5.4 \u4ed3\u50a8\u65b9\u6cd5"),(0,i.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u4ed3\u50a8\u7c7b\uff0c\u5982\u679c\u60f3\u6269\u5c55\u65b9\u6cd5\u5199\u5230\u4ed3\u50a8\u7c7b\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"public class Repository<T> : SimpleClient<T> where T : class, new()\n{\n    public Repository(ISqlSugarClient context = null) : base(context)//\u9ed8\u8ba4\u503c\u7b49\u4e8enull\u4e0d\u80fd\u5c11\n    {\n        base.Context = App.GetService<ISqlSugarClient>();//\u7528\u624b\u52a8\u83b7\u53d6\u65b9\u5f0f\u652f\u6301\u5207\u6362\u4ed3\u50a8\n    }\n}\n")),(0,i.kt)("p",null,"\u7ee7\u627f\u4ed3\u50a8\u7c7b\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ed3\u50a8API\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'//\u67e5\u8be2\nvar data1 = base.GetById(1);//\u6839\u636eid\u67e5\u8be2\nvar data4 = base.GetSingle(it => it.Id == 1);//\u67e5\u8be2\u5355\u6761\u8bb0\u5f55\uff0c\u7ed3\u679c\u96c6\u4e0d\u80fd\u8d85\u8fc71\uff0c\u4e0d\u7136\u4f1a\u63d0\u793a\u9519\u8bef\nvar data = base.GetFirst(it => it.Id == 1);//\u67e5\u8be2\u7b2c\u4e00\u6761\u8bb0\u5f55\n\nvar data2 = base.GetList();//\u67e5\u8be2\u6240\u6709\nvar data3 = base.GetList(it => it.Id == 1); //\u6839\u636e\u6761\u4ef6\u67e5\u8be2\n\nvar p = new PageModel() { PageIndex = 1, PageSize = 2 };\nvar data5 = base.GetPageList(it => it.Name == "xx", p);\nConsole.Write(p.PageCount);\n\nvar data6 = base.GetPageList(it => it.Name == "xx", p, it => it.Name, OrderByType.Asc);\nConsole.Write(p.PageCount);\n\nList<IConditionalModel> conModels = new List<IConditionalModel>();\nconModels.Add(new ConditionalModel(){FieldName="id",ConditionalType=ConditionalType.Equal,FieldValue="1"});//id=1\nvar data7 = base.GetPageList(conModels, p, it => it.Name, OrderByType.Asc);\nbase.AsQueryable().Where(x => x.Id == 1).ToList();\n \n//\u63d2\u5165\nbase.Insert(insertObj);\nbase.InsertRange(InsertObjs);\nvar id = base.InsertReturnIdentity(insertObj);\nbase.AsInsertable(insertObj).ExecuteCommand();\n \n//\u5220\u9664\nbase.Delete(insertObj);\nbase.DeleteById(1);\nbase.DeleteByIds(new object [] { 1, 2 }); //\u6570\u7ec4\u5e26\u662f ids\u65b9\u6cd5 \uff0c\u5c01\u88c5\u4f20 object [] \u7c7b\u578b\nbase.Delete(it => it.Id == 1);\nbase.AsDeleteable().Where(it => it.Id == 1).ExecuteCommand();\n \n//\u66f4\u65b0\nbase.Update(insertObj); \nbase.UpdateRange(InsertObjs); \nbase.Update(it => new Order() { Name = "a", }, it => it.Id == 1);\nbase.AsUpdateable(insertObj).UpdateColumns(it=>new { it.Name }).ExecuteCommand();\n \n//\u9ad8\u7ea7\u64cd\u4f5c\nbase.AsSugarClient // \u83b7\u53d6\u5b8c\u6574\u7684db\u5bf9\u8c61\nbase.AsTenant  // \u83b7\u53d6\u591a\u5e93\u76f8\u5173\u64cd\u4f5c\n \n//\u5207\u6362\u4ed3\u50a8\nbase.ChangeRepository<Repository<OrderItem>>() //\u652f\u6301\u591a\u79df\u6237\u548c\u6269\u5c55\u65b9\u6cd5\uff0c\u4f7f\u7528SqlSugarScope\u5355\u4f8b\uff08\u6216\u8005SqlSugarClient Scope\u6ce8\u5165\uff09\nbase.Change<OrderItem>()//\u53ea\u652f\u6301\u81ea\u5e26\u65b9\u6cd5\u548c\u5355\u5e93\n')),(0,i.kt)("h3",{id:"10155-\u591a\u5e93\u4e8b\u52a1"},"10.1.5.5 \u591a\u5e93\u4e8b\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'SqlSugarClient db = new SqlSugarClient(new List<ConnectionConfig>()\n{\n    new ConnectionConfig(){ ConfigId="0", DbType=DbType.SqlServer,  ConnectionString=Config.ConnectionString, IsAutoCloseConnection=true },\n    new ConnectionConfig(){ ConfigId="1", DbType=DbType.MySql, ConnectionString=Config.ConnectionString4 ,IsAutoCloseConnection=true}\n});\n\nvar mysqldb = db.GetConnection("1"); // mysql db\nvar sqlServerdb = db.GetConnection("0"); // sqlserver db\n \ndb.BeginTran();\n\nmysqldb.Insertable(new Order()\n{\n    CreateTime = DateTime.Now,\n    CustomId = 1,\n    Name = "a",\n    Price = 1\n}).ExecuteCommand();\nmysqldb.Queryable<Order>().ToList();\nsqlServerdb.Queryable<Order>().ToList();\n\ndb.CommitTran();\n')),(0,i.kt)("h3",{id:"10156-\u5355\u4f8b\u6a21\u5f0f"},"10.1.5.6 \u5355\u4f8b\u6a21\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"public static SqlSugarScope Db = new SqlSugarScope(new ConnectionConfig()\n    {\n        DbType = SqlSugar.DbType.SqlServer,\n        ConnectionString = Config.ConnectionString,\n        IsAutoCloseConnection = true \n    },\n    db=> {\n            db.Aop.OnLogExecuting = (s, p) =>\n            {\n                Console.WriteLine(s);\n            };\n    });\n \nusing (var tran = Db.UseTran())\n{\n    new Test2().Insert(XX);\n    new Test1().Insert(XX);\n    ..... \n                \n    tran.CommitTran(); \n}\n")),(0,i.kt)("h3",{id:"10157-\u5168\u5c40\u8fc7\u6ee4\u5668"},"10.1.5.7 \u5168\u5c40\u8fc7\u6ee4\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"db.QueryFilter.Add(new TableFilterItem<Order>(it => it.Name.Contains(\"a\")));  \n   \ndb.Queryable<Order>().ToList();\n// SELECT [Id],[Name],[Price],[CreateTime],[CustomId] FROM [Order]  WHERE  ([Name] like '%'+@MethodConst0+'%')  \n\ndb.Queryable<OrderItem, Order>((i, o) => i.OrderId == o.Id)\n        .Where(i => i.OrderId != 0)\n        .Select(\"i.*\").ToList();\n// SELECT i.* FROM [OrderDetail] i  ,[Order]  o  WHERE ( [i].[OrderId] = [o].[Id] )  AND \n// ( [i].[OrderId] <> @OrderId0 )  AND  ([o].[Name] like '%'+@MethodConst1+'%')\n")),(0,i.kt)("h3",{id:"10158-\u6dfb\u52a0\u6216\u8005\u66f4\u65b0"},"10.1.5.8 \u6dfb\u52a0\u6216\u8005\u66f4\u65b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var x = Db.Storageable(list2).ToStorage();  \nx.AsInsertable.ExecuteCommand();  \nx.AsUpdateable.ExecuteCommand();  \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var x = Db.Storageable(list).SplitInsert(it => !it.Any()).ToStorage()\nx.AsInsertable.ExecuteCommand(); \n")),(0,i.kt)("h3",{id:"10159-\u81ea\u52a8\u5206\u8868"},"10.1.5.9 \u81ea\u52a8\u5206\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'[SplitTable(SplitType.Year)] // Table by year (the table supports year, quarter, month, week and day)\n[SugarTable("SplitTestTable_{year}{month}{day}")] \npublic class SplitTestTable\n{\n    [SugarColumn(IsPrimaryKey =true)]\n    public long Id { get; set; }\n\n    public string Name { get; set; }\n    \n    //When the sub-table field is inserted, which table will be inserted according to this field. \n    //When it is updated and deleted, it can also be convenient to use this field to      \n    //find out the related table \n    [SplitField] \n    public DateTime CreateTime { get; set; }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var lis2t = db.Queryable<OrderSpliteTest>()\n.SplitTable(DateTime.Now.Date.AddYears(-1), DateTime.Now)\n.ToPageList(1,2);\u3000\n")),(0,i.kt)("h3",{id:"101510-\u5927\u6570\u636e\u63d2\u5165\u66f4\u65b0\u63d2\u5165\u6216\u8005\u66f4\u65b0"},"10.1.5.10 \u5927\u6570\u636e\u63d2\u5165\uff0c\u66f4\u65b0\uff0c\u63d2\u5165\u6216\u8005\u66f4\u65b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'//Insert A million only takes a few seconds\ndb.Fastest<RealmAuctionDatum>().BulkCopy(GetList());\n \n//update A million only takes a few seconds\ndb.Fastest<RealmAuctionDatum>().BulkUpdate(GetList());//A million only takes a few seconds\u5b8c\ndb.Fastest<RealmAuctionDatum>().BulkUpdate(GetList(),new string[]{"id"},new string[]{"name","time"})//no primary key\n \n//if exists update, else  insert\n var x= db.Storageable<Order>(data).ToStorage();\n     x.BulkCopy();\n     x.BulkUpdate(); \n     \n//set table name\ndb.Fastest<RealmAuctionDatum>().AS("tableName").BulkCopy(GetList())\n \n//set page \ndb.Fastest<Order>().PageSize(300000).BulkCopy(insertObjs);\n')),(0,i.kt)("h3",{id:"101511-\u66f4\u591a\u529f\u80fd"},"10.1.5.11 \u66f4\u591a\u529f\u80fd"),(0,i.kt)("p",null,"\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://www.donet5.com/Home/Doc"},"SqlSugar \u5b98\u7f51"),"\u3002"),(0,i.kt)("h2",{id:"1016-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://www.donet5.com/Home/Doc"},"SqlSugar \u5b98\u7f51"),"\u3002"))))}c.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=r,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return t?a.createElement(g,l(l({ref:n},m),{},{components:t})):a.createElement(g,l({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);