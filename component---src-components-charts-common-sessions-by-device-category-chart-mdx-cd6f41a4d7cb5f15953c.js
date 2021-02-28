(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{z2su:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a("Fcif"),r=a("+I+c"),i=(a("mXGw"),a("/FXl")),o=a("TjRS"),b=a("ZFoC"),c=a("atnT"),l=a("bAZo"),s=a("/sY/"),p=(a("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/common/SessionsByDeviceCategoryChart.mdx"}});var d={_frontmatter:p},h=o.a;function m(e){var t,a=e.components,m=Object(r.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},d,m,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"SessionsByDeviceCategoryChart"),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This ",Object(i.b)("a",{parentName:"p",href:"/react-analytics-charts/PieChart"},"PieChart")," charts the number of sessions for each device category (such as ",Object(i.b)("inlineCode",{parentName:"p"},"desktop"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mobile"),"), in the date range specified (number of days ago, until today)."),Object(i.b)("p",null,"This chart is useful for seeing, proportionately by device, how your users are consuming your site's content."),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",{parentName:"p",href:"/react-analytics-charts/charts"},"Charts Overview")," for a list of all charts available."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import {\n  AnalyticsDashboard,\n  SessionsByDeviceCategoryChart,\n} from "react-analytics-charts";\n')),Object(i.b)(b.c,{__position:1,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <SessionsByDeviceCategoryChart gapi={gapi} viewId={viewId} days={28} />\n    )\n  }}\n/>",__scope:(t={props:m,DefaultLayout:o.a,Playground:b.c,Props:b.d,clientId:c.a,AnalyticsDashboard:l.a,SessionsByDeviceCategoryChart:s.a},t.DefaultLayout=o.a,t._frontmatter=p,t),mdxType:"Playground"},Object(i.b)(l.a,{authOptions:{clientId:c.a},renderCharts:function(e,t){return Object(i.b)(s.a,{gapi:e,viewId:t,days:28,mdxType:"SessionsByDeviceCategoryChart"})},mdxType:"AnalyticsDashboard"})),Object(i.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Prop"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"gapi"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(i.b)("a",{parentName:"td",href:"https://justinmahar.github.io/react-use-analytics-api/"},"Google Analytics Embed API"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"viewId"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Required.")," View ID for the view the chart pertains to. See ",Object(i.b)("a",{parentName:"td",href:"/react-analytics-charts/ViewSelector"},"ViewSelector")," for more information.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"days"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",{parentName:"tr",align:null},"Optional. Number of days the chart shows data for. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"28"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"container"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",{parentName:"tr",align:null},"Optional. HTML element ID for the container to which the ",Object(i.b)("a",{parentName:"td",href:"https://justinmahar.github.io/react-use-analytics-api/"},"Google Analytics Embed API")," renders. One will be created if no value is provided.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/react-analytics-charts/PieChart#chart-options"},"PieChartOptions")),Object(i.b)("td",{parentName:"tr",align:null},"Optional. The options for this chart have been preconfigured, but you can add or override any ",Object(i.b)("a",{parentName:"td",href:"/react-analytics-charts/PieChart#chart-options"},"PieChartOptions")," you'd like here, such as the ",Object(i.b)("inlineCode",{parentName:"td"},"width")," or ",Object(i.b)("inlineCode",{parentName:"td"},"title"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/react-analytics-charts/DataChart#query-prop"},Object(i.b)("inlineCode",{parentName:"a"},"Query"))),Object(i.b)("td",{parentName:"tr",align:null},"Optional. The ",Object(i.b)("a",{parentName:"td",href:"/react-analytics-charts/DataChart#query-prop"},"query")," for this chart has been preconfigured, but you can override any ",Object(i.b)("a",{parentName:"td",href:"/react-analytics-charts/DataChart#query-prop"},"query properties")," you'd like here.")))),Object(i.b)("p",null,"This component also supports ",Object(i.b)("strong",{parentName:"p"},"all ",Object(i.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(i.b)("inlineCode",{parentName:"p"},"className"),", ",Object(i.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(i.b)("p",null,"If you have more than one of this chart on the page, be sure to specify a unique ",Object(i.b)("inlineCode",{parentName:"p"},"container")," ID."),Object(i.b)("h2",{id:"data-queried"},"Data Queried"),Object(i.b)("p",null,"This query's date range spans from a ",Object(i.b)("inlineCode",{parentName:"p"},"start-date")," of ",Object(i.b)("inlineCode",{parentName:"p"},"NdaysAgo"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"N")," is the ",Object(i.b)("inlineCode",{parentName:"p"},"days")," prop provided, until an ",Object(i.b)("inlineCode",{parentName:"p"},"end-date")," of ",Object(i.b)("inlineCode",{parentName:"p"},"today"),". See ",Object(i.b)("a",{parentName:"p",href:"/react-analytics-charts/DataChart"},"DataChart")," for more information on queries."),Object(i.b)("h3",{id:"metrics"},"Metrics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ga:sessions"))),Object(i.b)("h3",{id:"dimensions"},"Dimensions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ga:deviceCategory"))),Object(i.b)("h2",{id:"customizing"},"Customizing"),Object(i.b)("p",null,"This chart has been preconfigured for ease of use, but you can customize it by providing a ",Object(i.b)("inlineCode",{parentName:"p"},"query")," or ",Object(i.b)("inlineCode",{parentName:"p"},"options")," prop."),Object(i.b)("p",null,"The properties you specify in either prop object will override the ones used by this chart."),Object(i.b)("p",null,"This means you can cherry-pick the properties you'd like to override, such as the ",Object(i.b)("inlineCode",{parentName:"p"},"metrics")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"query"),", or the ",Object(i.b)("inlineCode",{parentName:"p"},"width")," in ",Object(i.b)("inlineCode",{parentName:"p"},"options"),", without having to create a completely ",Object(i.b)("a",{parentName:"p",href:"/react-analytics-charts/charts#custom-charts"},"custom chart"),"."))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/common/SessionsByDeviceCategoryChart.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-common-sessions-by-device-category-chart-mdx-cd6f41a4d7cb5f15953c.js.map