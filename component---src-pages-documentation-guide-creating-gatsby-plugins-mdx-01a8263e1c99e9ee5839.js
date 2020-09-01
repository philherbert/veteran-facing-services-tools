(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz");function l(){return r.a.createElement(i.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(s,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,null)):r.a.createElement(c,{item:e,key:e.name})}))):null}var m=n("MEl4"),o=n.n(m);function u(e){var t=e.location,n=o.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(s,{items:n.items}))):null}function p(e){var t=e.sourceUrl;return r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub"))}var d=n("8FPV");function g(e){var t=e.children,n=e.location,a=e.pageContext;return r.a.createElement(d.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(p,{sourceUrl:a.sourceUrl}))))}},WrJp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),l={},c={_frontmatter:l},s=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"how-to-create-a-gatsby-plugin"},"How to Create a Gatsby Plugin"),Object(r.mdx)("h3",{id:"creating-a-local-gatsby-plugin"},"Creating a Local Gatsby Plugin"),Object(r.mdx)("p",null,"Here we are going to show you how to create a local plugin for Gatsby."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Create a plugin folder in ",Object(r.mdx)("strong",{parentName:"p"},"/plugins")),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ mkdir gatsby-example-plugin\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"CD into the folder"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ cd gatsby-example-plugin\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Initialize Node.js using npm. Plugins need to be a Node project."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ npm init --yes\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Now you can add the Gatsby specific files like gatsby-node.js, gatsby-browser, etc. in your plugin folder."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"gatsby-example-plugin\n  - gatsby-node.js\n  - gatsby-browser.js\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"To use the plugin you need to add it to the ",Object(r.mdx)("strong",{parentName:"p"},"gatsby-config.js")," file."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-config.js\n\nmodule.exports = {\n  siteMetadata: {\n    description: `Resources and documention for the Development within the VA.gov project`,\n    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,\n    title: `VA.gov Developer's Documentations`,\n    sidebar: require('./src/sidebar.js')\n  },\n  pathPrefix: '/veteran-facing-services-tools',\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `images`,\n        path: `${__dirname}/src/images`,\n      },\n    },\n    `gatsby-transformer-sharp`,\n    `gatsby-plugin-sharp`,\n    {\n      resolve: `gatsby-plugin-manifest`,\n      options: {\n        name: `vagov-documentation`,\n        short_name: `vagov-documentation`,\n        start_url: `/`,\n      },\n    },\n    `gatsby-example-plugin`,\n  ],\n}\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"If you would like to debug your build process code, you can run"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ yarn develop:inspect\n")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-creating-gatsby-plugins-mdx-01a8263e1c99e9ee5839.js.map