(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{zdC0:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s})),t.d(n,"_frontmatter",(function(){return c}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var a=t("q1tI"),o=t.n(a),r=t("6qfE"),m=t("3dLD");var l={},s=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},o.a.createElement("h1",{id:"web-fonts-improvements"},"WEB-FONTS IMPROVEMENTS"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Made:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"No"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Date:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Winter 2019")))),o.a.createElement("h3",{id:"goals"},"GOALS"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Improving First Contentful Paint"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Improve loading time")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Decision Maker:")," @jhonnyoddball and @rianfowler"),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h3",{id:"proposed-solutions"},"PROPOSED SOLUTIONS"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Adding ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"font-display: swap;")," to all webfonts to remove FOIT (Flash of Invisible Text)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Splitting the webfonts into their own css and adding them to the head before the main css"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Inline the webfonts into the css"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Encoding the fonts on base64"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Remove hashing from the font names"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Preloading the fonts (hard-coded the 4 needed on the header or dynamically, but can run into problems if they are more than 5 fonts per application)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Use of ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/bramstein/fontfaceobserver"}},"Font Face Observer"))),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h3",{id:"case-studies-and-documentation"},"CASE STUDIES AND DOCUMENTATION"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/1676"}},"https://github.com/department-of-veterans-affairs/va.gov-team/issues/1676")),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h3",{id:"summary"},"SUMMARY"),o.a.createElement("h4",{id:"adding-font-display-swap"},"Adding font-display: swap;"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"This is a great feature to add. It will force the use of the system fonts until the webfonts are ready. If the browser doesn't not support it, it will act regularly."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"We can't really use it since we are only able to change 4 out of 37 fonts.")),o.a.createElement("h4",{id:"splitting-the-webfonts-into-their-own-css"},"Splitting the webfonts into their own css"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The separation of the webfonts into a separate css file did not make any difference nor impacted the webfonts in any way.")),o.a.createElement("h4",{id:"inline-the-webfonts-into-the-css-and-encoding-the-fonts-on-base64"},"Inline the webfonts into the css and Encoding the fonts on base64"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Inline the webfonts into the css can easily be performed by encoding the webfonts as base64 and url-loader already transforms files into base64 URIs."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Encode base64 and inline the webfonts made things worst.")),o.a.createElement("h4",{id:"preloading-the-fonts"},"Preloading the fonts"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Using pre-load in some of the fonts can improve the performance. Doing this helps the FCP since the webfonts will not be blocked by the CSS files."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"In order to do this I removed the hashing from the webfonts and hard-coded them in the header")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'  <link rel="preload" href="/generated/sourcesanspro-bold-webfont.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="/generated/sourcesanspro-regular-webfont.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="/generated/bitter-bold.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="/generated/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>\n')),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"If FCP is the priority over the loading time, then pre-loading could be a good option to improve the performance of the fonts."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Keep in mind that we should only pre-load 3-4 fonts only because we might end up pre-loading fonts that will not be used in the page.")),o.a.createElement("h4",{id:"use-font-face-observer"},"Use Font Face Observer"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Since we could be calling any of our current fonts from multiple css locations, therefore this will be hard to implement."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"This will also apply to any webfont loader")),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h3",{id:"decision"},"DECISION"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Remove hashing from webfonts"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Pre-load the 4 main fonts in the header")))},a}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-web-fonts-mdx-970f899ea97016e84a45.js.map