(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),i=n.n(a),r=n("Wbzz");function c(){return i.a.createElement(r.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function o(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(c,null)):i.a.createElement(o,{item:e,key:e.name})}))):null}var m=n("MEl4"),d=n.n(m);function s(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:n.items}))):null}function u(e){var t=e.sourceUrl;return i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub"))}var b=n("8FPV");function p(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(b.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(s,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(u,{sourceUrl:a.sourceUrl}))))}},AncR:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),c={},o={_frontmatter:c},l=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"dependabot-in-vets-website-repo"},"Dependabot in vets-website repo"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Author:")," Jhonny Gonzalez"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Last Updated:")," June 25, 2020"),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"This is a decision making process to choose the most efficient automated dependency upgrade product."),Object(i.mdx)("p",null,"Based on this ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/9537"}),"evaluation of automated dependency upgrade products"),". The final decision is to go with ",Object(i.mdx)("inlineCode",{parentName:"p"},"Dependabot")),Object(i.mdx)("h2",{id:"objective"},"Objective"),Object(i.mdx)("p",null,"To be able to rely on a automated dependency upgrade manager"),Object(i.mdx)("h2",{id:"background"},"Background"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"Dependabot")," was initially installed in ",Object(i.mdx)("inlineCode",{parentName:"p"},"vets-website")," but it wasn't doing anything. There was no action by ",Object(i.mdx)("inlineCode",{parentName:"p"},"Dependabot"),", therefore, we started looking at alternatives."),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/9537"}),"This ticket")," has an evaluation of Depfu, Renovate and Dependabot."),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"dependabot")," has good settings and also ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://dependabot.com/blog/hello-github/"}),"it's been integrated into GitHub"),"."),Object(i.mdx)("h2",{id:"revision-history"},"Revision History"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft.")),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Date"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Revisions Made"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Author"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Reviewed By"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"June 25, 2020"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Initial Draft"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Jhonny Gonzalez"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Rian Fowler")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-using-dependabot-for-automated-dependency-upgrades-mdx-f1f2879808bb3ea66ee2.js.map