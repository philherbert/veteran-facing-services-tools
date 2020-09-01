(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function l(){return r.a.createElement(i.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,null)):r.a.createElement(m,{item:e,key:e.name})}))):null}var c=a("MEl4"),s=a.n(c);function o(e){var t=e.location,a=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(d,{items:a.items}))):null}function b(e){var t=e.sourceUrl;return r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub"))}var p=a("8FPV");function u(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(p.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(o,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(b,{sourceUrl:n.sourceUrl}))))}},bAeu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),l={},m={_frontmatter:l},d=i.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"run-and-build-vagov"},"Run and build VA.gov"),Object(r.mdx)("h2",{id:"prerequisite"},"Prerequisite"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Complete the ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/getting-started"}),"first")," step in ",Object(r.mdx)("em",{parentName:"li"},"Start up guide"),".")),Object(r.mdx)("h2",{id:"locally-run-vagov"},"Locally run VA.gov"),Object(r.mdx)("p",null,"Start the watch task:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn watch\n")),Object(r.mdx)("h3",{id:"build"},"Build"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Metalsmith")," manages this build pipeline. At a high level, this process:",Object(r.mdx)("ol",{parentName:"li"},Object(r.mdx)("li",{parentName:"ol"},"retrieves and ",Object(r.mdx)("strong",{parentName:"li"},"builds")," all of the ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," sourced from ",Object(r.mdx)("inlineCode",{parentName:"li"},"vagov-content")," or Drupal"),Object(r.mdx)("li",{parentName:"ol"},"starts ",Object(r.mdx)("strong",{parentName:"li"},"Webpack"),"'s devevelopment server which",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"builds")," the ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," bundles, and"),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"serves")," the ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," bundles and the ",Object(r.mdx)("strong",{parentName:"li"},"static content")," built by Metalsmith at ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"))))))),Object(r.mdx)("h3",{id:"output"},"Output"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Metalsmith")," outputs ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," to",Object(r.mdx)("inlineCode",{parentName:"li"},"build/localhost")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Webpack")," development server has ",Object(r.mdx)("strong",{parentName:"li"},"no output"),". ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," are kept in memory.")),Object(r.mdx)("h3",{id:"watch-and-rebuild"},"Watch and rebuild"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Metalsmith")," will rebuild ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," when changes are saved to ",Object(r.mdx)("strong",{parentName:"li"},"templates")," or content in ",Object(r.mdx)("inlineCode",{parentName:"li"},"vagov-content")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Webpack")," development server will rebuild when changes are saved to ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," or ",Object(r.mdx)("strong",{parentName:"li"},"SCSS")),Object(r.mdx)("li",{parentName:"ul"},"Both updates require a browser refresh to see changes."),Object(r.mdx)("li",{parentName:"ul"},"Changes to build process or configuration files are typically not picked up, and require a restart of the watch task to become active.")),Object(r.mdx)("h2",{id:"locally-build-and-run-for-specific-environment"},"Locally build and run for specific environment"),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Note: most of the time, it's better to use the ",Object(r.mdx)("inlineCode",{parentName:"em"},"watch")," task to build the site locally since it is the most developer-friendly experience.")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Environment"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Build Command"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Output directory"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Run Command"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"localhost"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"yarn build")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/localhost")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/localhost"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"dev.va.gov"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"yarn build --buildtype=vagovdev")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/vagovdev")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/vagovdev"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"staging.va.gov"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovstaging")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/vagovstaging")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/vagovstaging"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("a",Object.assign({parentName:"td"},{href:"http://www.va.gov"}),"www.va.gov")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovprod")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/vagovprod")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/vagovprod"))))),Object(r.mdx)("h3",{id:"build-commands"},"Build commands"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"create")," the ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," from the markdown content in the ",Object(r.mdx)("inlineCode",{parentName:"li"},"vagov-content")," repository and data queried from the Drupal API into their ",Object(r.mdx)("strong",{parentName:"li"},"output directory")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"create")," the ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," files with Webpack into ",Object(r.mdx)("inlineCode",{parentName:"li"},"/generated")," folder in their ",Object(r.mdx)("strong",{parentName:"li"},"output directory")," with Webpack")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Production like builds are required for staging and production environments. ",Object(r.mdx)("strong",{parentName:"em"},"NODE_ENV=production")," environment variable is required to be set when running these build commands")),Object(r.mdx)("h3",{id:"run-commands"},"Run commands"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"start")," an ",Object(r.mdx)("inlineCode",{parentName:"li"},"http-server")," that ",Object(r.mdx)("strong",{parentName:"li"},"serves")," the ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," from the ",Object(r.mdx)("strong",{parentName:"li"},"output directory")," at ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://localhost:3001"}),"http://localhost:3001"))),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect.")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},Object(r.mdx)("strong",{parentName:"em"},"Deep-linking")," to urls that are rendered by ",Object(r.mdx)("strong",{parentName:"em"},"React")," apps on VA.gov ",Object(r.mdx)("strong",{parentName:"em"},"will not work")," when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",Object(r.mdx)("inlineCode",{parentName:"em"},"watch")," task)")),Object(r.mdx)("h2",{id:"related-source"},"Related source"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops"}),"Metalsmith build script")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/webpack.dev.config.js"}),"Webpack development server config"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-run-build-mdx-c9762059f72ee71d9fac.js.map