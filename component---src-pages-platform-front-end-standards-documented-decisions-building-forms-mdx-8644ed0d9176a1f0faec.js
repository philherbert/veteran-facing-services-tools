(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function o(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(o,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,{isSublist:!0,items:e.items})):r.a.createElement(o,{item:e,key:e.name})}))):null}var c=a("MEl4"),s=a.n(c);function m(e){var t=e.location,a=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(l,{items:a.items}))):null}function b(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function d(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(u.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(m,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(b,{sourceUrl:n.sourceUrl}))))}},WZy6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),o={},l={_frontmatter:o},c=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"building-forms"},"Building forms"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Decision Made:")),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Decision Date:")),Object(r.b)("td",{parentName:"tr",align:null},"01/2017")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Revisit Decision:")),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Revisit Date:")),Object(r.b)("td",{parentName:"tr",align:null},"December 2017")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Revisit Criteria:")," As of 9/2017, all our forms are using RJSF. We should regroup and take a look at how it's going a few months after that."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Decision Makers:")," @annekainicUSDS @jbalboni @ayaleloehr @aub"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("p",null,"When bringing lengthy paper forms to Vets.gov, we use react-jsonschema-form and the common code we've built on top of it."),Object(r.b)("p",null,"A longer form ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db"},"article on this decision")," can be found on the USDS Medium. The information below is meant to be a distilled version."),Object(r.b)("h2",{id:"history"},"History"),Object(r.b)("p",null,"We built two forms (10-10EZ and 22-1990) with a basic React/Redux approach. The 10-10EZ (HCA) took 5 months and the 1990 took 2 months. We also had numerous production bugs to fix around validation and incorrectly formatted data. Based on those two forms, we thought we had a stable set of patterns for long forms and could make better use of shared code to make development faster and more reliable. We evaluated a few different form libraries for React and settled on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mozilla-services/react-jsonschema-form"},"react-json-schemaform")," (RJSF). We used that to build the 22-1995 form. We found that building the 1995 with RJSF was a big improvement and have been building forms with RJSF since then."),Object(r.b)("h2",{id:"pros"},"Pros"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Almost all form specific information is in a single configuration file, and has less boilerplate than building forms with React components"),Object(r.b)("li",{parentName:"ul"},"There's very little form-specific React code. Most form specific code are files that export configuration information, which is easy to modify and overwrite when necessary"),Object(r.b)("li",{parentName:"ul"},"Forms are built using a JSON Schema file as a base and the backend uses the same file to validate submissions. So we're less likely to have schema errors than previously"),Object(r.b)("li",{parentName:"ul"},"Building the config files is generally faster than building React components for each form")),Object(r.b)("h2",{id:"cons"},"Cons"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The application code for each form is very centralized, which makes it hard to use code splitting"),Object(r.b)("li",{parentName:"ul"},"Overall form bundle size is still a little big (but generally smaller than before)"),Object(r.b)("li",{parentName:"ul"},"Form-specific customizations that fall outside our expected patterns are more difficult to implement"),Object(r.b)("li",{parentName:"ul"},"Handling different variations on our patterns means adding options to the config file, which can add noise to the form config files"),Object(r.b)("li",{parentName:"ul"},"The shared code built on top of RJSF is complicated")),Object(r.b)("h2",{id:"example-of-an-alternative-approach"},"Example of an alternative approach"),Object(r.b)("p",null,"There are other React form libraries, most of which have you still building forms with React components (",Object(r.b)("a",{parentName:"p",href:"redux-form.com"},"redux-form"),", ",Object(r.b)("a",{parentName:"p",href:"https://react-form.js.org/#/story/readme-documentation"},"react-form"),"). We could have gone with one of those, and put more effort into building reusable components, but we didn't feel like we would make as big of an improvement as with config file based approaches."),Object(r.b)("h2",{id:"decision"},"Decision"),Object(r.b)("p",null,"Long paper forms on Vets.gov will use RJSF and the shared code built on top of it."))}s.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-building-forms-mdx-8644ed0d9176a1f0faec.js.map