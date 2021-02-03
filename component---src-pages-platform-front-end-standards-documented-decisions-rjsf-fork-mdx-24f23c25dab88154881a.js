(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function o(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(o,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,{isSublist:!0,items:e.items})):r.a.createElement(o,{item:e,key:e.name})}))):null}var s=a("MEl4"),c=a.n(s);function u(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(l,{items:a.items}))):null}function b(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=a("8FPV");function d(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(m.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(b,{sourceUrl:n.sourceUrl}))))}},bNqC:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),o={},l={_frontmatter:o},s=i.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(s,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"moving-to-a-fork-of-rjsf"},"Moving to a fork of RJSF"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Decision Made:")),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Decision Date:")),Object(r.b)("td",{parentName:"tr",align:null},"03/2018")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Revisit Decision:")),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Revisit Date:")),Object(r.b)("td",{parentName:"tr",align:null},"July 2018")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Revisit Criteria:")," As of 3/2018, we're just starting our fork. After using it for a couple months, we should revist and make sure it's still the best path."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Decision Makers:")," @annekainicUSDS @jbalboni"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("p",null,"We've diverged from the react-jsonschema-form functionality enough that forking the library is the best way to continue improving our form building process."),Object(r.b)("h2",{id:"history"},"History"),Object(r.b)("p",null,"We've been using a set of components built on top of RJSF for all of our longer forms. This has been working pretty well, but in the process of upgrading RJSF to work with a newer version of React, we've run into several issues. These issues, coupled with the fact that we use very little of the RJSF code currently, suggest that forking is the better option"),Object(r.b)("h2",{id:"breaking-or-suboptimal-changes-in-the-latest-rjsf-version"},"Breaking or suboptimal changes in the latest RJSF version"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Switched JSON Schema validators from jsonschema to ajv. The ajv validator is faster and has more detailed error output, but is also much larger. It nearly doubles the size of RJSF. We have not run into any major issues with jsonschema and one of our goals is to reduce the bundle size of our forms."),Object(r.b)("li",{parentName:"ul"},"Moved defaulting logic out of widgets. This means that all of our widgets now get form data that has empty records, which is contrary to how they were written. It makes it harder to determine when a field is actually empty vs. just defaulted."),Object(r.b)("li",{parentName:"ul"},"Maintains internal state for form data. This is not new, but it causes bugs in our application with autofill, because rapid onChange events can cause stale data to overwrite the current form info. This is a design choice, so it's not really a bug to fix in the library."),Object(r.b)("li",{parentName:"ul"},"There's a bug in how the default logic for arrays with minItems works. This is fixable in the library and we've submitted a PR, but since we can't update to the latest version due to the above issues, we can't pull it in."),Object(r.b)("li",{parentName:"ul"},"Similarly, we need the changes that have been made to support React 16, but those are post some of the above changes.")),Object(r.b)("h2",{id:"pros"},"Pros"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We have more control over the code for our forms, making it easier to fix bugs"),Object(r.b)("li",{parentName:"ul"},"Forking addresses all of the above issues"),Object(r.b)("li",{parentName:"ul"},"We can remove widget and field code that we don't use, making it easier for us to maintain. Eventually that may mean getting away from a separate library entirely.")),Object(r.b)("h2",{id:"cons"},"Cons"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We take on extra maintenance burden, since this is not code we initially developed. This could include things like security issues.")),Object(r.b)("h2",{id:"example-of-an-alternative-approach"},"Example of an alternative approach"),Object(r.b)("p",null,"We could attempt to move to the latest version and push for the above changes in the main repo, but it's not guaranteed that we could be successful, or even that all of our changes make sense for the main library."),Object(r.b)("h2",{id:"decision"},"Decision"),Object(r.b)("p",null,"We're going to fork RJSF."))}c.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-rjsf-fork-mdx-24f23c25dab88154881a.js.map