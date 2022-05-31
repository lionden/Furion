"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9706],{433:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5559:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),r=n(7294),o=n(6010),i=n(5730),l=n(636),s=n(6602),d=n(3735),p="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n,i=e.lazy,u=e.block,c=e.defaultValue,v=e.values,N=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),C=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),f=y.tabGroupChoices,S=y.setTabGroupChoices,D=(0,r.useState)(g),w=D[0],q=D[1],P=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var M=f[N];null!=M&&M!==w&&h.some((function(e){return e.value===M}))&&q(M)}var F=function(e){var t=e.currentTarget,n=P.indexOf(t),a=h[n].value;a!==w&&(x(t),q(a),null!=N&&S(N,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var o,i=P.indexOf(e.currentTarget)-1;n=null!=(o=P[i])?o:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},k)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:F,onClick:F},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},3539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(1402),n(5559),n(433),["components"]),l={id:"dbcontext-multi-database",title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728"},s=void 0,d={unversionedId:"dbcontext-multi-database",id:"dbcontext-multi-database",title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",description:"",source:"@site/docs/dbcontext-multi-database.mdx",sourceDirName:".",slug:"/dbcontext-multi-database",permalink:"/furion/docs/dbcontext-multi-database",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-multi-database.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"dbcontext-multi-database",title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728"},sidebar:"docs",previous:{title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/furion/docs/dbcontext-sql-proxy"},next:{title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b (Db First)",permalink:"/furion/docs/dbcontext-db-first"}},p={},m=[{value:"9.18.1 <code>Furion</code> \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",id:"9181-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",level:2},{value:"9.18.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",id:"91811-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",level:3},{value:"9.18.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",id:"9182-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",level:2},{value:"9.18.3 \u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",id:"9183-\u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",level:2},{value:"9.18.4 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",id:"9184-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"9.18.4.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",id:"91841-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.18.4.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",id:"91842-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.18.4.3 <code>Sql</code> \u4ed3\u50a8\u65b9\u5f0f",id:"91843-sql-\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.18.4.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",id:"91844-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",level:3},{value:"9.18.4.5 Linq \u51fd\u6570\u65b9\u5f0f",id:"91845-linq-\u51fd\u6570\u65b9\u5f0f",level:3},{value:"9.18.5 <code>SqlServer</code> \u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",id:"9185-sqlserver-\u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",level:2},{value:"9.18.6 <code>MySql</code> \u65f6\u533a\u95ee\u9898/\u5c11 8 \u5c0f\u65f6\u95ee\u9898",id:"9186-mysql-\u65f6\u533a\u95ee\u9898\u5c11-8-\u5c0f\u65f6\u95ee\u9898",level:2},{value:"9.18.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9187-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u6ce8\u610f\u4e8b\u9879")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"\u590d\u5236")," \u8f93\u51fa\u76ee\u5f55\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f83\u65b0\u5219\u590d\u5236"),"\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5185\u5bb9"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5426\u5219\u5c31\u4f1a\u63d0\u793a\u627e\u4e0d\u5230\u914d\u7f6e\u6216\u8fde\u63a5\u5b57\u7b26\u4e32\u7684\u9519\u8bef\u3002"))),(0,o.kt)("h2",{id:"9181-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"},"9.18.1 ",(0,o.kt)("inlineCode",{parentName:"h2"},"Furion")," \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SqlServer"),(0,o.kt)("th",{parentName:"tr",align:null},"Sqlite"),(0,o.kt)("th",{parentName:"tr",align:null},"Cosmos"),(0,o.kt)("th",{parentName:"tr",align:null},"InMemoryDatabase"),(0,o.kt)("th",{parentName:"tr",align:null},"MySql"),(0,o.kt)("th",{parentName:"tr",align:null},"PostgreSQL"),(0,o.kt)("th",{parentName:"tr",align:null},"Oracle"),(0,o.kt)("th",{parentName:"tr",align:null},"Firebird"),(0,o.kt)("th",{parentName:"tr",align:null},"Dm"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")))),(0,o.kt)("h3",{id:"91811-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"},"9.18.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer")," (\u652f\u6301 SqlServer 2005 +)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Sqlite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cosmos"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Cosmos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InMemoryDatabase"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.InMemory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySql"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pomelo.EntityFrameworkCore.MySql"),"\uff1a(\u652f\u6301 MySql 5.x +)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySql.EntityFrameworkCore"),"\uff1a\u652f\u6301 (MySql 8.x +)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Npgsql.EntityFrameworkCore.PostgreSQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Oracle.EntityFrameworkCore")," \uff08\u652f\u6301 Oracle 10 +\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Firebird"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"FirebirdSql.EntityFrameworkCore.Firebird")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dm"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Dm"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u4e9b\u6570\u636e\u5e93\u5305\u5e94\u8be5\u5b89\u88c5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u5c42\u3002\u7279\u6b8a\u60c5\u51b5\u9700\u5b89\u88c5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mysql")," ",(0,o.kt)("inlineCode",{parentName:"p"},"HasCharset()")," \u914d\u7f6e\u3002"))),(0,o.kt)("h2",{id:"9182-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"},"9.18.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6ce8\u518c SqlServer\noptions.AddDbPool<FurionDbContext>(DbProvider.SqlServer);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2005"); // \u652f\u6301 2005 \u6570\u636e\u5e93\noptions.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2008"); // \u652f\u6301 2008 \u6570\u636e\u5e93\n\n// \u6ce8\u518c Sqlite\noptions.AddDbPool<FurionDbContext>(DbProvider.Sqlite);\n\n// \u6ce8\u518c Cosmos\noptions.AddDbPool<FurionDbContext>(DbProvider.Cosmos);\n\n// \u6ce8\u518c InMemoryDatabase\noptions.AddDbPool<FurionDbContext>(DbProvider.InMemoryDatabase);\n\n// \u6ce8\u518c MySql\noptions.AddDbPool<FurionDbContext>(DbProvider.MySql);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");  // \u53ef\u4ee5\u6307\u5b9a\u7248\u672c\u53f7\noptions.AddDbPool<FurionDbContext>(DbProvider.MySqlOfficial);   // \u4f7f\u7528 MySql \u5b98\u65b9\u5305\uff08MySql.EntityFrameworkCore\uff09\n\n// \u6ce8\u518c PostgreSQL\noptions.AddDbPool<FurionDbContext>(DbProvider.Npgsql);\n\n// \u6ce8\u518c Oracle\noptions.AddDbPool<FurionDbContext>(DbProvider.Oracle);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11");  // \u652f\u6301 Oracle 11 \u7248\u672c\n\n// \u6ce8\u518c Firebird\noptions.AddDbPool<FurionDbContext>(DbProvider.Firebird);\n\n// \u6ce8\u518c Dm\noptions.AddDbPool<FurionDbContext>(DbProvider.Dm);\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u65b0\u7248 SqlServer/MySQL/Oracle \u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"SqlServer")," \u517c\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"p"},"2005-2008")," \u5199\u6cd5\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2005"); // \u652f\u6301 2005 \u6570\u636e\u5e93\n    options.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2008"); // \u652f\u6301 2008 \u6570\u636e\u5e93\n});\n')),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," \u517c\u5bb9\u65e7\u7248\u672c\uff08\u5e26\u7248\u672c\u53f7\uff09\u5199\u6cd5\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");\n});\n')),(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"MySql.EntityFrameworkCore")," \u5305\uff0c\u5219\u9700\u6539\u4e3a\u4ee5\u4e0b\u6ce8\u518c\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>(DbProvider.MySqlOfficial);\n});\n")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"Oracle")," \u517c\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"p"},"11")," \u7248\u672c"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11");\n});\n')))),(0,o.kt)("h2",{id:"9183-\u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b"},"9.18.3 \u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Data Source=./Furion.db")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Data Source=localhost;Database=Furion;User ID=root;Password=000000;pooling=true;port=3306;sslmode=none;CharSet=utf8;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"User Id=orcl;Password=orcl;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=orcl)))")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"PORT=5432;DATABASE=postgres;HOST=127.0.0.1;PASSWORD=postgres;USER ID=postgres;"))),(0,o.kt)("h2",{id:"9184-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"},"9.18.4 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u901a\u8fc7\u72ec\u521b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668")," \u5b9e\u73b0\u591a\u6570\u636e\u5e93\u7075\u6d3b\u64cd\u4f5c\u5207\u6362\u3002\u53ea\u9700\u8981\u4e3a\u6bcf\u4e00\u79cd\u6570\u636e\u5e93\u7ed1\u5b9a\u552f\u4e00\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5b9e\u4f8b\uff1a"),(0,o.kt)("h3",{id:"91841-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"},"9.18.4.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = personRepository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = personRepository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = personRepository.Change<Person, SqliteDbContextLocator>();\n\n")),(0,o.kt)("h3",{id:"91842-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"},"9.18.4.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n")),(0,o.kt)("h3",{id:"91843-sql-\u4ed3\u50a8\u65b9\u5f0f"},"9.18.4.3 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Sql")," \u4ed3\u50a8\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = sqlRepository.Change<MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = sqlRepository.Change<MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = sqlRepository.Change<SqliteDbContextLocator>();\n")),(0,o.kt)("h3",{id:"91844-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"},"9.18.4.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"\n// \u652f\u6301\u4e00\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator>\n{\n    // ....\n}\n\n// \u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator, SqliteDbContextLocator>\n{\n    // ....\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6240\u6709\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u4f9d\u8d56\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b")," \u90fd\u652f\u6301\u6cdb\u578b\u65b9\u5f0f \u6307\u5b9a \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u6700\u591a\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"8")," \u4e2a\u3002"))),(0,o.kt)("h3",{id:"91845-linq-\u51fd\u6570\u65b9\u5f0f"},"9.18.4.5 Linq \u51fd\u6570\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'public static class QueryFunctions\n{\n    [QueryableFunction("FN_GetId", "dbo", typeof(MySqlDbContextLocator), typeof(SqliteDbContextLocator))]\n    public static int GetId(int id) => throw new NotSupportedException();\n}\n')),(0,o.kt)("h2",{id:"9185-sqlserver-\u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e"},"9.18.5 ",(0,o.kt)("inlineCode",{parentName:"h2"},"SqlServer")," \u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e"),(0,o.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u5728\u6ce8\u518c\u7684\u65f6\u5019\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"@2008")," \u6570\u636e\u5e93\u5373\u53ef\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"OnConfigure")," \u4e2d\u914d\u7f6e\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n{\n    optionsBuilder.UseSqlServer(DbProvider.GetConnectionString<TDbContext>())\n                  .ReplaceService<IQueryTranslationPostprocessorFactory, SqlServer2008QueryTranslationPostprocessorFactory>();\n    base.OnConfiguring(optionsBuilder);\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5c0f\u77e5\u8bc6")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"DbProvider.GetConnectionString<TDbContext>()")," \u662f\u83b7\u53d6\u5bf9\u5e94\u4e0a\u4e0b\u6587\u914d\u7f6e\u7684\u6570\u636e\u5e93\u94fe\u63a5\u5b57\u7b26\u4e32\u3002"))),(0,o.kt)("h2",{id:"9186-mysql-\u65f6\u533a\u95ee\u9898\u5c11-8-\u5c0f\u65f6\u95ee\u9898"},"9.18.6 ",(0,o.kt)("inlineCode",{parentName:"h2"},"MySql")," \u65f6\u533a\u95ee\u9898/\u5c11 8 \u5c0f\u65f6\u95ee\u9898"),(0,o.kt)("p",null,"\u53ef\u67e5\u9605\u76f8\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"Issue"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/I3RSCO"},"https://gitee.com/dotnetchina/Furion/issues/I3RSCO")),(0,o.kt)("h2",{id:"9187-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.18.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,v=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);