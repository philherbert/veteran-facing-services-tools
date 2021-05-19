(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz");function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(l.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function i(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(i,{isSublist:!0,items:e.items})):r.a.createElement(c,{item:e,key:e.name})}))):null}var b=a("MEl4"),s=a.n(b);function o(e){var t=e.location,a=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(i,{items:a.items}))):null}function m(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var p=a("8FPV");function u(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(p.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(o,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(m,{sourceUrl:n.sourceUrl}))))}},"tt3+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("3dLD"),c={},i={_frontmatter:c},b=l.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(b,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"environments"},"Environments"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Environment"),Object(r.b)("th",{parentName:"tr",align:null},"site url"),Object(r.b)("th",{parentName:"tr",align:null},"api url"),Object(r.b)("th",{parentName:"tr",align:null},"buildtype"),Object(r.b)("th",{parentName:"tr",align:null},"NODE_ENV"),Object(r.b)("th",{parentName:"tr",align:null},"Deployments"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"localhost"),Object(r.b)("td",{parentName:"tr",align:null},"http://localhost:3001"),Object(r.b)("td",{parentName:"tr",align:null},"http://localhost:3000"),Object(r.b)("td",{parentName:"tr",align:null},"localhost"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"development"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://dev.va.gov"},"https://dev.va.gov")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://dev-api.va.gov"},"https://dev-api.va.gov")),Object(r.b)("td",{parentName:"tr",align:null},"vagovdev"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"After a merge to master")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"staging"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://staging.va.gov"},"https://staging.va.gov")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://staging-api.va.gov"},"https://staging-api.va.gov")),Object(r.b)("td",{parentName:"tr",align:null},"vagovstaging"),Object(r.b)("td",{parentName:"tr",align:null},"production"),Object(r.b)("td",{parentName:"tr",align:null},"After a merge to master")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"production"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.va.gov"},"https://www.va.gov")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://api.va.gov"},"https://api.va.gov")),Object(r.b)("td",{parentName:"tr",align:null},"vagovprod"),Object(r.b)("td",{parentName:"tr",align:null},"production"),Object(r.b)("td",{parentName:"tr",align:null},"Daily, Monday - Friday")))),Object(r.b)("p",null,"There are four environments for va.gov:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"localhost")," runs on a local developer's machine"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"development, staging,")," and ",Object(r.b)("strong",{parentName:"li"},"production")," are shared environments that are accessible publicly.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"production")," and ",Object(r.b)("strong",{parentName:"p"},"staging")," APIs are connected with services within the VA to facilitate testing; ",Object(r.b)("strong",{parentName:"p"},"development")," API largely uses mock data in lieu of connecting to internal VA services."),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"development, staging,")," and ",Object(r.b)("strong",{parentName:"li"},"production")," have changes to them deployed automatically after pull requests are merged into master."),Object(r.b)("li",{parentName:"ul"},"Review instances have changes deployed to them automatically when pull requests are created. Review instances are custom environments based on the shared dev environment.")),Object(r.b)("h2",{id:"access-and-test-users"},"Access and test users"),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md"},"Accessing Staging")," for"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP basic auth ",Object(r.b)("strong",{parentName:"li"},"passwords")," needed to access ",Object(r.b)("strong",{parentName:"li"},"development")," and ",Object(r.b)("strong",{parentName:"li"},"staging")," environments, and"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Test users")," that can be used to verify features in ",Object(r.b)("strong",{parentName:"li"},"localhost"),", ",Object(r.b)("strong",{parentName:"li"},"development"),", and ",Object(r.b)("strong",{parentName:"li"},"staging")," environments.")))}s.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-environments-mdx-f435d5dbba4c1d25be90.js.map