(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),r=a("Wbzz");function i(){return s.a.createElement(r.StaticQuery,{query:"68798663",render:function(e){return s.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function o(e){var t=e.item;return t.href?s.a.createElement("li",{key:t.name},s.a.createElement(r.Link,{to:t.href},t.name)):s.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?s.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?s.a.createElement("li",{key:e.name},n&&s.a.createElement(o,{item:e}),!n&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?s.a.createElement("li",{key:e.name},n&&s.a.createElement(o,{item:e}),!n&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(i,null)):s.a.createElement(o,{item:e,key:e.name})}))):null}var c=a("MEl4"),m=a.n(c);function d(e){var t=e.location,a=m.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?s.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},s.a.createElement("div",{className:"site-c-sidenav"},s.a.createElement(l,{items:a.items}))):null}function u(e){var t=e.sourceUrl;return s.a.createElement("div",null,s.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",s.a.createElement("a",{href:t},"Edit this page on GitHub"))}var b=a("8FPV");function p(e){var t=e.children,a=e.location,n=e.pageContext;return s.a.createElement(b.a,{location:a},s.a.createElement("div",{className:"vads-l-row"},s.a.createElement(d,{location:a}),s.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,s.a.createElement(u,{sourceUrl:n.sourceUrl}))))}},JCEx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),r=a("3dLD"),i={},o={_frontmatter:i},l=r.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.mdx)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"switching-to-jest"},"Switching to Jest"),Object(s.mdx)("table",null,Object(s.mdx)("thead",{parentName:"table"},Object(s.mdx)("tr",{parentName:"thead"},Object(s.mdx)("th",Object.assign({parentName:"tr"},{align:null})),Object(s.mdx)("th",Object.assign({parentName:"tr"},{align:null})),Object(s.mdx)("th",Object.assign({parentName:"tr"},{align:null})),Object(s.mdx)("th",Object.assign({parentName:"tr"},{align:null})))),Object(s.mdx)("tbody",{parentName:"table"},Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.mdx)("strong",{parentName:"td"},"Decision Made:")),Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"No, but open to revisiting"),Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.mdx)("strong",{parentName:"td"},"Decision Date:")),Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"12/2018")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.mdx)("strong",{parentName:"td"},"Revisit Decision:")),Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Yes"),Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.mdx)("strong",{parentName:"td"},"Revisit Date:")),Object(s.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"July 2019")))),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Revisit Criteria:")," If a developer is interested in Jest and has time or suggestions for fixing the speed issues, we should revisit this."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Decision Makers:")," @rianfowler @jbalboni"),Object(s.mdx)("hr",null),Object(s.mdx)("h2",{id:"tldr"},"tl;dr"),Object(s.mdx)("p",null,"Jest is probably the most common testing framework in the React ecosystem and has some nice benefits, so we evaluated switching to it from our Mocha-based stack. However, we found that it made our tests twice as slow and were unable to address this in a reasonable amount of time."),Object(s.mdx)("h2",{id:"history"},"History"),Object(s.mdx)("p",null,"See ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874"}),"#12874")," for the full history. A Jest RFC was started by Ryan McAuliffe and some exploratory work was done by him and Claire Hsu. The overall consensus of developers here was that Jest has some nice features and is typically faster than Mocha based tests, so it seemed like a good improvement for us. However, during our evaluation we found that our tests were significantly slower than our current approach. Rian Fowler did some further testing around this issue and was unable to resolve it."),Object(s.mdx)("h2",{id:"pros"},"Pros"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Jest is widely supported in the React community"),Object(s.mdx)("li",{parentName:"ul"},"It has easy to use extensions for aXe and snapshot testing that we could use"),Object(s.mdx)("li",{parentName:"ul"},"It supports parallelization, and makes better use of all resources available to it")),Object(s.mdx)("h2",{id:"cons"},"Cons"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"It's approximately ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874#issuecomment-448280502"}),"2x slower than our current tests")),Object(s.mdx)("li",{parentName:"ul"},"Some of the useful features (snapshots) could be adopted without switching to Jest")),Object(s.mdx)("h2",{id:"decision"},"Decision"),Object(s.mdx)("p",null,"We're putting the switch to Jest on hold for the time being. The slowdown is the primary reason for this, since the consensus otherwise was that Jest was an improvement. Any developer with time or ideas should feel free to attempt to address the performance issue and we will re-evaluate."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-jest-mdx-3945d8ddb4cbac04d791.js.map