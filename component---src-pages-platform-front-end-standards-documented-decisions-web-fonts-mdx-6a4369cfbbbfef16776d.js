(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),o=n.n(a),l=n("Wbzz");function r(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(l.Link,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function i(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(r,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):o.a.createElement(r,{item:e,key:e.name})}))):null}var s=n("MEl4"),b=n.n(s);function c(e){var t=e.location,n=b.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:n.items}))):null}function d(e){var t=e.sourceUrl;return t?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=n("8FPV");function u(e){var t=e.children,n=e.location,a=e.pageContext;return o.a.createElement(m.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(c,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,o.a.createElement(d,{sourceUrl:a.sourceUrl}))))}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))},zdC0:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("3dLD"),r={},i={_frontmatter:r},s=l.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"web-fonts-improvements"},"WEB-FONTS IMPROVEMENTS"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Decision Made:")),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Decision Date:")),Object(o.b)("td",{parentName:"tr",align:null},"Winter 2019")))),Object(o.b)("h3",{id:"goals"},"GOALS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Improving First Contentful Paint"),Object(o.b)("li",{parentName:"ul"},"Improve loading time")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Decision Maker:")," @jhonnyoddball and @rianfowler"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"proposed-solutions"},"PROPOSED SOLUTIONS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Adding ",Object(o.b)("inlineCode",{parentName:"li"},"font-display: swap;")," to all webfonts to remove FOIT (Flash of Invisible Text)"),Object(o.b)("li",{parentName:"ul"},"Splitting the webfonts into their own css and adding them to the head before the main css"),Object(o.b)("li",{parentName:"ul"},"Inline the webfonts into the css"),Object(o.b)("li",{parentName:"ul"},"Encoding the fonts on base64"),Object(o.b)("li",{parentName:"ul"},"Remove hashing from the font names"),Object(o.b)("li",{parentName:"ul"},"Preloading the fonts (hard-coded the 4 needed on the header or dynamically, but can run into problems if they are more than 5 fonts per application)"),Object(o.b)("li",{parentName:"ul"},"Use of ",Object(o.b)("a",{parentName:"li",href:"https://github.com/bramstein/fontfaceobserver"},"Font Face Observer"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"case-studies-and-documentation"},"CASE STUDIES AND DOCUMENTATION"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/1676"},"https://github.com/department-of-veterans-affairs/va.gov-team/issues/1676")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"summary"},"SUMMARY"),Object(o.b)("h4",{id:"adding-font-display-swap"},"Adding font-display: swap;"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is a great feature to add. It will force the use of the system fonts until the webfonts are ready. If the browser doesn't not support it, it will act regularly."),Object(o.b)("li",{parentName:"ul"},"We can't really use it since we are only able to change 4 out of 37 fonts.")),Object(o.b)("h4",{id:"splitting-the-webfonts-into-their-own-css"},"Splitting the webfonts into their own css"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The separation of the webfonts into a separate css file did not make any difference nor impacted the webfonts in any way.")),Object(o.b)("h4",{id:"inline-the-webfonts-into-the-css-and-encoding-the-fonts-on-base64"},"Inline the webfonts into the css and Encoding the fonts on base64"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inline the webfonts into the css can easily be performed by encoding the webfonts as base64 and url-loader already transforms files into base64 URIs."),Object(o.b)("li",{parentName:"ul"},"Encode base64 and inline the webfonts made things worst.")),Object(o.b)("h4",{id:"preloading-the-fonts"},"Preloading the fonts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using pre-load in some of the fonts can improve the performance. Doing this helps the FCP since the webfonts will not be blocked by the CSS files."),Object(o.b)("li",{parentName:"ul"},"In order to do this I removed the hashing from the webfonts and hard-coded them in the header")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'  <link rel="preload" href="/generated/sourcesanspro-bold-webfont.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="/generated/sourcesanspro-regular-webfont.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="/generated/bitter-bold.woff2" as="font" type="font/woff2" crossorigin>\n  <link rel="preload" href="/generated/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If FCP is the priority over the loading time, then pre-loading could be a good option to improve the performance of the fonts."),Object(o.b)("li",{parentName:"ul"},"Keep in mind that we should only pre-load 3-4 fonts only because we might end up pre-loading fonts that will not be used in the page.")),Object(o.b)("h4",{id:"use-font-face-observer"},"Use Font Face Observer"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Since we could be calling any of our current fonts from multiple css locations, therefore this will be hard to implement."),Object(o.b)("li",{parentName:"ul"},"This will also apply to any webfont loader")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"decision"},"DECISION"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Remove hashing from webfonts"),Object(o.b)("li",{parentName:"ul"},"Pre-load the 4 main fonts in the header")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-web-fonts-mdx-6a4369cfbbbfef16776d.js.map