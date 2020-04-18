(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{yi4r:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return u})),a.d(t,"default",(function(){return g}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),l=a("ZFoC"),i=a("AdhA"),o=a("5Jen"),b=a("fAuu"),c=a("atnT"),p=a("bAZo"),d=a("su9R");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/TableChart.mdx"}});var m={_frontmatter:u},h=r.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(h,s({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i.a,{trackingId:o.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",null,"TableChart"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"A table shows sortable rows of analytics data under labeled columns."),Object(n.b)("p",null,"You can use this to create a custom table by providing your own data query (see ",Object(n.b)("a",s({parentName:"p"},{href:"/DataChart"}),"DataChart")," for more info on queries) and,\noptionally, ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),"table options")," for the table."),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",s({parentName:"p"},{href:"/charts"}),"Charts Overview")," for a list of all charts available."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)(l.c,{__position:2,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <TableChart\n        gapi={gapi}\n        query={{\n          ids: viewId,\n          'start-date': '28daysAgo',\n          'end-date': 'today',\n          metrics: 'ga:pageviews',\n          dimensions: 'ga:pagePath',\n        }}\n        container=\"pageviews-per-path-chart\"\n        options={{\n          sortAscending: false,\n          sortColumn: 1,\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,GoogleAnalytics:i.a,TRACKING_ID:o.a,CreatedBy:b.a,clientId:c.a,AnalyticsDashboard:p.a,TableChart:d.a},mdxType:"Playground"},Object(n.b)(p.a,{authOptions:{clientId:c.a},renderCharts:function(e,t){return Object(n.b)(d.a,{gapi:e,query:{ids:t,"start-date":"28daysAgo","end-date":"today",metrics:"ga:pageviews",dimensions:"ga:pagePath"},container:"pageviews-per-path-chart",options:{sortAscending:!1,sortColumn:1},mdxType:"TableChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("br",null),Object(n.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Prop"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"gapi"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(n.b)("a",s({parentName:"td"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"container"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," Provide an ID for the ",Object(n.b)("inlineCode",{parentName:"td"},"div")," that will contain the chart.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"query"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("a",s({parentName:"td"},{href:"/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ",Object(n.b)("a",s({parentName:"td"},{href:"/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))," for the Analytics data. See the Query Prop section of ",Object(n.b)("a",s({parentName:"td"},{href:"/DataChart"}),"DataChart"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("a",s({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),Object(n.b)("inlineCode",{parentName:"a"},"TableChartOptions"))),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for ",Object(n.b)("a",s({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),"tables"),".")))),Object(n.b)("p",null,"This component also supports ",Object(n.b)("strong",{parentName:"p"},"all ",Object(n.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(n.b)("inlineCode",{parentName:"p"},"className"),", ",Object(n.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(n.b)("p",null,"If you have more than one of this chart on the page, be sure to specify a unique ",Object(n.b)("inlineCode",{parentName:"p"},"container")," ID."),Object(n.b)("h3",{id:"query"},"Query"),Object(n.b)("p",null,"Refer to ",Object(n.b)("a",s({parentName:"p"},{href:"/DataChart#query-prop"}),"DataChart Query Prop")," to build your own data ",Object(n.b)("inlineCode",{parentName:"p"},"query"),"."),Object(n.b)("h3",{id:"chart-options"},"Chart Options"),Object(n.b)("p",null,"There are numerous ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),"chart options")," available for\ntables, allowing you to customize the appearance. Provide these via the ",Object(n.b)("inlineCode",{parentName:"p"},"options")," prop."),Object(n.b)("p",null,"Below are a few of the notable ones:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Option"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Sets the width of the visualization's container element. You can use standard HTML units (for example, '100px', '80em', '60'). If no units are specified the number is assumed to be pixels. If not specified, the browser will adjust the width automatically to fit the table, shrinking as much as possible in the process; if set smaller than the width required, the table will add a horizontal scroll bar. If set to '100%', the table will expand as much as possible into the container element. Default: automatic")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Sets the height of the visualization's container element. You can use standard HTML units (for example, '100px', '80em', '60'). If no units are specified the number is assumed to be pixels. If not specified, the browser will adjust the height automatically to fit the table, shrinking as much as possible in the process; if set smaller than the height required, the table will add a vertical scroll bar (the header row is also frozen). If set to '100%', the table will expand as much as possible into the container element. Default: automatic")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"alternatingRowStyle"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Determines if alternating color style will be assigned to odd and even rows. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"true"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"sortAscending"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The order in which the initial sort column is sorted. ",Object(n.b)("inlineCode",{parentName:"td"},"true")," for ascending, ",Object(n.b)("inlineCode",{parentName:"td"},"false")," for descending. Ignored if ",Object(n.b)("inlineCode",{parentName:"td"},"sortColumn")," is not specified. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"true"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"sortColumn"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"An index of a column in the data table, by which the table is initially sorted. The column will be marked with a small arrow indicating the sort order. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"-1"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"page"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"If and how to enable paging through the data. Choose one of the following string values: ",Object(n.b)("inlineCode",{parentName:"td"},"'enable'")," - The table will include page-forward and page-back buttons. Clicking on these buttons will perform the paging operation and change the displayed page. You might want to also set the ",Object(n.b)("inlineCode",{parentName:"td"},"pageSize")," option. ",Object(n.b)("inlineCode",{parentName:"td"},"'event'")," - The table will include page-forward and page-back buttons, but clicking them will trigger a 'page' event and will not change the displayed page. This option should be used when the code implements its own page turning logic. See the TableQueryWrapper example for an example of how to handle paging events manually. ",Object(n.b)("inlineCode",{parentName:"td"},"'disable'")," - Paging is not supported. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"'disable'"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"pageSize"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The number of rows in each page, when paging is enabled with the ",Object(n.b)("inlineCode",{parentName:"td"},"page")," option. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"10"))))),Object(n.b)("p",null,"The containing element is rendered as a ",Object(n.b)("inlineCode",{parentName:"p"},"div")," and you can size and style it as you see fit using CSS."),Object(n.b)("p",null,"Tables do not support titles. You'll have to add your own above the table."),Object(n.b)("p",null,"See all ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),"table options"),"."),Object(n.b)(b.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/TableChart.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-table-chart-mdx-d36786755fc45d5411cc.js.map