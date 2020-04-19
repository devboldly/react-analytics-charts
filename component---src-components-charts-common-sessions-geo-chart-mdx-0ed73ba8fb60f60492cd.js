(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{gssJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return h})),a.d(t,"default",(function(){return O}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),i=a("ZFoC"),o=a("AdhA"),b=a("5Jen"),c=a("fAuu"),s=a("atnT"),l=a("bAZo"),p=a("ON82");a("aD51");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/common/SessionsGeoChart.mdx"}});var u={_frontmatter:h},m=r.a;function O(e){var t,a,O,j=e.components,y=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(m,d({},u,y,{components:j,mdxType:"MDXLayout"}),Object(n.b)(o.a,{trackingId:b.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",null,"SessionsGeoChart"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"This ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/GeoChart"}),"GeoChart")," shows on a map of the world the number of sessions, and optionally pageviews, for each country, in the date range specified (number of days ago, until today)."),Object(n.b)("p",null,"Useful for quickly visualizing where in the world your visitors are coming from."),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for a list of all charts available."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)(i.c,{__position:2,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <SessionsGeoChart gapi={gapi} viewId={viewId} days={28} showPageViews />\n    )\n  }}\n/>",__scope:(t={props:y,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:b.a,CreatedBy:c.a,clientId:s.a,AnalyticsDashboard:l.a,SessionsGeoChart:p.a},t.DefaultLayout=r.a,t._frontmatter=h,t),mdxType:"Playground"},Object(n.b)(l.a,{authOptions:{clientId:s.a},renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,viewId:t,days:28,showPageViews:!0,mdxType:"SessionsGeoChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",d({parentName:"tr"},{align:null}),"Prop"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"gapi"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(n.b)("a",d({parentName:"td"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"viewId"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," View ID for the view the chart pertains to. See ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/ViewSelector"}),"ViewSelector")," for more information.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"days"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. Number of days the chart shows data for. Defaults to ",Object(n.b)("inlineCode",{parentName:"td"},"28"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"container"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. HTML element ID for the container to which the ",Object(n.b)("a",d({parentName:"td"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API")," renders. One will be created if no value is provided.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"showPageViews"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. Set to ",Object(n.b)("inlineCode",{parentName:"td"},"true")," to show the page view count on the chart. Defaults to ",Object(n.b)("inlineCode",{parentName:"td"},"false"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/GeoChart#chart-options"}),"GeoChartOptions")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. The options for this chart have been preconfigured, but you can add or override any ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/GeoChart#chart-options"}),"GeoChartOptions")," you'd like here, such as the ",Object(n.b)("inlineCode",{parentName:"td"},"width"),", ",Object(n.b)("inlineCode",{parentName:"td"},"region"),", or ",Object(n.b)("inlineCode",{parentName:"td"},"resolution"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"query"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. The ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),"query")," for this chart has been preconfigured, but you can override any ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),"query properties")," you'd like here.")))),Object(n.b)("p",null,"This component also supports ",Object(n.b)("strong",{parentName:"p"},"all ",Object(n.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(n.b)("inlineCode",{parentName:"p"},"className"),", ",Object(n.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(n.b)("p",null,"If you have more than one of this chart on the page, be sure to specify a unique ",Object(n.b)("inlineCode",{parentName:"p"},"container")," ID."),Object(n.b)("h2",{id:"data-queried"},"Data Queried"),Object(n.b)("p",null,"This query's date range spans from a ",Object(n.b)("inlineCode",{parentName:"p"},"start-date")," of ",Object(n.b)("inlineCode",{parentName:"p"},"NdaysAgo"),", where ",Object(n.b)("inlineCode",{parentName:"p"},"N")," is the ",Object(n.b)("inlineCode",{parentName:"p"},"days")," prop provided, until an ",Object(n.b)("inlineCode",{parentName:"p"},"end-date")," of ",Object(n.b)("inlineCode",{parentName:"p"},"today"),". See ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/DataChart"}),"DataChart")," for more information on queries."),Object(n.b)("h3",{id:"metrics"},"Metrics"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ga:sessions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ga:pageviews")," (when ",Object(n.b)("inlineCode",{parentName:"li"},"showPageViews")," is enabled)")),Object(n.b)("h3",{id:"dimensions"},"Dimensions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ga:country"))),Object(n.b)("h2",{id:"customizing"},"Customizing"),Object(n.b)("p",null,"This chart has been preconfigured for ease of use, but you can customize it by providing a ",Object(n.b)("inlineCode",{parentName:"p"},"query")," or ",Object(n.b)("inlineCode",{parentName:"p"},"options")," prop."),Object(n.b)("p",null,"The properties you specify in either prop object will override the ones used by this chart."),Object(n.b)("p",null,"This means you can cherry-pick the properties you'd like to override, such as the ",Object(n.b)("inlineCode",{parentName:"p"},"metrics")," in the ",Object(n.b)("inlineCode",{parentName:"p"},"query"),", or the ",Object(n.b)("inlineCode",{parentName:"p"},"width")," in ",Object(n.b)("inlineCode",{parentName:"p"},"options"),", without having to create a completely ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts#custom-charts"}),"custom chart"),"."),Object(n.b)("h2",{id:"europe-example"},"Europe Example"),Object(n.b)("p",null,"The following uses the ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/GeoChart#region-aliases"}),Object(n.b)("inlineCode",{parentName:"a"},"europe")," region alias")," to show traffic from Europe:"),Object(n.b)(i.c,{__position:4,__code:'<AnalyticsDashboard\n  authOptions={{ clientId }}\n  dashId="europe"\n  renderCharts={(gapi, viewId) => {\n    return (\n      <SessionsGeoChart\n        gapi={gapi}\n        viewId={viewId}\n        container="europe-traffic-geo-chart"\n        days={28}\n        showPageViews\n        options={{\n          region: \'europe\',\n        }}\n      />\n    )\n  }}\n/>',__scope:(a={props:y,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:b.a,CreatedBy:c.a,clientId:s.a,AnalyticsDashboard:l.a,SessionsGeoChart:p.a},a.DefaultLayout=r.a,a._frontmatter=h,a),mdxType:"Playground"},Object(n.b)(l.a,{authOptions:{clientId:s.a},dashId:"europe",renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,viewId:t,container:"europe-traffic-geo-chart",days:28,showPageViews:!0,options:{region:"europe"},mdxType:"SessionsGeoChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("h2",{id:"united-states-example"},"United States Example"),Object(n.b)("p",null,"The following uses the ",Object(n.b)("inlineCode",{parentName:"p"},"ga:region")," ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/DataChart#query-prop"}),"dimension"),", the ",Object(n.b)("inlineCode",{parentName:"p"},"US")," ",Object(n.b)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}),"country code")," region, and the ",Object(n.b)("inlineCode",{parentName:"p"},"provinces")," resolution to show traffic from individual states in the United States:"),Object(n.b)(i.c,{__position:5,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  dashId=\"usa\"\n  renderCharts={(gapi, viewId) => {\n    return (\n      <SessionsGeoChart\n        gapi={gapi}\n        viewId={viewId}\n        container=\"usa-traffic-geo-chart\"\n        days={28}\n        showPageViews\n        query={{\n          dimensions: 'ga:region',\n        }}\n        options={{\n          region: 'US',\n          resolution: 'provinces',\n        }}\n      />\n    )\n  }}\n/>",__scope:(O={props:y,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:b.a,CreatedBy:c.a,clientId:s.a,AnalyticsDashboard:l.a,SessionsGeoChart:p.a},O.DefaultLayout=r.a,O._frontmatter=h,O),mdxType:"Playground"},Object(n.b)(l.a,{authOptions:{clientId:s.a},dashId:"usa",renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,viewId:t,container:"usa-traffic-geo-chart",days:28,showPageViews:!0,query:{dimensions:"ga:region"},options:{region:"US",resolution:"provinces"},mdxType:"SessionsGeoChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)(c.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/common/SessionsGeoChart.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-common-sessions-geo-chart-mdx-0ed73ba8fb60f60492cd.js.map