(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz");function i(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(o.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(i,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(s,{isSublist:!0,items:e.items})):r.a.createElement(i,{item:e,key:e.name})}))):null}var c=n("MEl4"),l=n.n(c);function u(e){var t=e.location,n=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(s,{items:n.items}))):null}function m(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=n("8FPV");function d(e){var t=e.children,n=e.location,a=e.pageContext;return r.a.createElement(b.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(m,{sourceUrl:a.sourceUrl}))))}},Dr0r:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("3dLD"),i={},s={_frontmatter:i},c=o.a;function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"write"},"Write"),Object(r.b)("h2",{id:"choose-an-issue-to-work-on"},"Choose an issue to work on"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Work with your team to determine the right issue to work on")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The VA handbook has more information about the broader process for delivering services to Veterans on VA.gov. Developers work in an agile framework, where issues are assigned to sprints and developers work on this items over the two-week sprint period.")),Object(r.b)("h2",{id:"create-feature-branch"},"Create feature branch"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Checkout ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch and pull the latest")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git checkout master && git pull origin master\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new feature branch from master")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git checkout -b 12345-issue-title\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since most new work derives from a GitHub Issue, it's recommended to prefix your branch name with the issue. For example, if you're working on a feature to collect a veteran's address as detailed in Issue #25, you might call your issue ",Object(r.b)("inlineCode",{parentName:"em"},"25-address"),".")),Object(r.b)("h2",{id:"code-new-functionality"},"Code new functionality"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Write the code for the new feature! This is often the fun part. :-)")),Object(r.b)("p",null,"It's very helpful if you restrict the scope of changes to only the issue/feature that you're working on. For example, you might see some code you can cleanup along the way and decide to change it. However, this increases the scope of your changes and increases risk if your commits/feature need to be rolled back (and the rollback pulls other things with it). It also helps your code reviewer, because they aren't left wondering how a tangential change impacts the feature promised by the pull request."),Object(r.b)("p",null,"As you code your changes, commit changes to your feature branch. ",Object(r.b)("strong",{parentName:"p"},"Commit early. Commit often"),"."),Object(r.b)("h2",{id:"write-tests-for-new-functionality"},"Write tests for new functionality"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Unit: Tests a specific method or very granular piece of the code base."),Object(r.b)("li",{parentName:"ul"},"End to end: Tests how your code works when clicked through in a real browser."),Object(r.b)("li",{parentName:"ul"},"Accessibility: Tests that run automated checks to catch some basic accessibility mistakes. Typically these are incorporated into end-to-end tests.")),Object(r.b)("p",null,"These tests are automatically executed during ",Object(r.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/getting-started/common-tasks/workflow/review"},"review"),", but you should ",Object(r.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/getting-started/common-tasks/test"},"run them locally")," before moving on."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The only way to quickly know if your new change breaks the existing functionality of the application is to have a suite of automated tests that execute whenever new stuff is added. When you add new functionality, new tests are required so that future developers know if they have broken your contributions.")),Object(r.b)("h2",{id:"manual-testing"},"Manual Testing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Test new functionality on supported ",Object(r.b)("a",{parentName:"li",href:"/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/browser-support/"},"browsers"))))}l.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-write-mdx-97198d18503815b23bf6.js.map