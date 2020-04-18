(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ccNt:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return h}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),o=n("TjRS"),i=n("ZFoC"),r=n("AdhA"),c=n("5Jen"),l=n("s4+M"),s=n("fAuu"),u=n("j5IZ");n("aD51");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/SignOutButton.mdx"}});var d={_frontmatter:b},m=o.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(m,p({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.a,{trackingId:c.a,mdxType:"GoogleAnalytics"}),Object(a.b)("h1",null,"SignOutButton"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"A button that signs the user out of Google Analytics via the ",Object(a.b)("a",p({parentName:"p"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API"),". Reloads the page after signing out."),Object(a.b)("p",null,"See related ",Object(a.b)("a",p({parentName:"p"},{href:"/react-analytics-charts/AuthorizeButton"}),"AuthorizeButton"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(a.b)(l.a,{mdxType:"AuthExample"})),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useAnalyticsApi } from '@devboldly/react-use-google-analytics-embed-api';\nimport { AuthorizeButton, SignOutButton } from '@devboldly/react-analytics-charts';\n\nexport function AuthExample() {\n  const { gapi, authorized } = useAnalyticsApi();\n  return (\n    <div>\n      {!authorized && (\n        <div>\n          Not authorized. Sign in here:{' '}\n          <AuthorizeButton\n            gapi={gapi}\n            authOptions={{ clientId: '123456789012-abc123def456ghi789jkl012mno345p.apps.googleusercontent.com' }}\n          />\n        </div>\n      )}\n      {authorized && (\n        <div>\n          We're authorized! <SignOutButton gapi={gapi} />\n        </div>\n      )}\n    </div>\n  );\n}\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(i.d,{of:u.a,mdxType:"Props"}),Object(a.b)("small",null,"Note: Expand each prop for more information."),Object(a.b)("h2",{id:"styling"},"Styling"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"button")," has the class name ",Object(a.b)("inlineCode",{parentName:"p"},"analytics-sign-out-button"),":"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-css"}),".analytics-sign-out-button {\n  /* Custom styles */\n}\n")),Object(a.b)(s.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/SignOutButton.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-sign-out-button-mdx-8dd3f6aecb515454dfba.js.map