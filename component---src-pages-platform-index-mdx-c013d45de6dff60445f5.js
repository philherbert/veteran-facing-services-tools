(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"0ai4":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),l={},s={_frontmatter:l},c=r.a;function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about-the-platform"},"About the platform"),Object(i.b)("p",null,"In this documentation we will discuss our platform and how it is setup, This Platform section will detail\nspecifics on how things work, site structure, architecture, tools, technologies, and any relavent\ninformation regarding the platform."),Object(i.b)("p",null,"The platform is made up of 4 major components."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MetalSmith"),Object(i.b)("li",{parentName:"ul"},"React/Redux"),Object(i.b)("li",{parentName:"ul"},"Drupal CMS"),Object(i.b)("li",{parentName:"ul"},"TeamSite")),Object(i.b)("h3",{id:"metalsmith"},"MetalSmith"),Object(i.b)("p",null,"MetalSmith is a static site generator made from Node.js. It is based off a plugin architecture which\nmakes it very flexible when needing to customize the build process or integrating other systems into it."),Object(i.b)("h3",{id:"reactredux"},"React/Redux"),Object(i.b)("p",null,"React is a front-end single page application library that helps you create painless interactive UIs.\nWe use React in our platform to create web components and also individual applications within the website.\nThe React applications are injected into specific pages. All applications can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"src/applications"),".\nWe use Redux to manage our data and the state of that data."),Object(i.b)("h3",{id:"drupal-cms"},"Drupal CMS"),Object(i.b)("p",null,"Drupal content is retrieved via GraphQL and pushed into the Metalsmith pipeline with a custom plugin,\nwhere it is then transformed into static html pages using Liquid templates."),Object(i.b)("h3",{id:"teamsite"},"TeamSite"),Object(i.b)("p",null,"TeamSite is a content management system built with PERL. This is the original system VA.gov was built on. Vets.gov and VA.gov were merged and needed to be integrated to use both systems without feeling like different systems. Some webpages still live under TeamSite and will eventually get ported over into the new Platform. Some components are shared such as the the MegaMenu adn the Footer. These components are injected using a script to render on TeamSite pages."))}o.isMDXComponent=!0},"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),i=n.n(a),r=n("Wbzz");function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,{isSublist:!0,items:e.items})):i.a.createElement(l,{item:e,key:e.name})}))):null}var c=n("MEl4"),o=n.n(c);function u(e){var t=e.location,n=o.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(s,{items:n.items}))):null}function m(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var d=n("8FPV");function p(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(d.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(m,{sourceUrl:a.sourceUrl}))))}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-platform-index-mdx-c013d45de6dff60445f5.js.map