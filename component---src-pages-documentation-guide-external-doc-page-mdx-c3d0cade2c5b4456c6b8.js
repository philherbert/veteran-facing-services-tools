(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{305:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),c=a.n(i),m=a(4),l=a(345),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},c.a.createElement("h2",{id:"adding-external-pages-from-github-api"},"Adding External Pages from Github API"),c.a.createElement(m.MDXTag,{name:"p",components:t},"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),c.a.createElement("h3",{id:"why"},"Why?"),c.a.createElement(m.MDXTag,{name:"p",components:t},"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),c.a.createElement("h3",{id:"how-to-add-external-pages"},"How to Add External pages"),c.a.createElement(m.MDXTag,{name:"p",components:t},"I have created a Gatsby plugin called ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"github-api-pages")," located at ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages"),".\nYou can learn more about creating your own plugin at ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/creating-gatsby-plugins"}},"creating-gatsby-plugins"),"\nAll code that is interfacing with the GitHubAPI is located at ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages/-github-api"),". We should try to\nkeep any code that is interfacing with the GitHubAPI in this file so we have one source of truth."),c.a.createElement("h5",{id:"limitations"},"Limitations"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),c.a.createElement("h5",{id:"data-you-will-need-to-make-the-api-request"},"Data you will need to make the API request"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Owner of the repo"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Repo name"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"File directory you want to add or file fileName")),c.a.createElement(m.MDXTag,{name:"p",components:t},"Example:"),c.a.createElement(m.MDXTag,{name:"pre",components:t},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"department-of-veterans-affairs/vets.gov-team/Work Practices/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},c.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),c.a.createElement("h2",{id:"github-file-directory"},"github file directory"),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"How to add files:"),"\nAfter you have gathered the information (owner, repo, file directory) from github, now you can add the files\ninto Gatsby."),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"Located in the ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages/")," you should see a ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"pages")," directory. To add github file locations\nyou need to either add it to a list or create your own list. Here are the steps of how to add your own list."),c.a.createElement(m.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"Add a JSON file named the main directory of your github directory. In this example we will be using ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"work-practices"),".\nYou can see how we are using the data we gathered earlier (owner, repo, file directory). All you need to do is add your\nfile directory to the ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"directoryPaths")," array. It can be a directory or just a file location."),c.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-JSON"}},'// /plugins/github-api-pages/pages/work-practices.json\n\n{\n  "owner": "department-of-veterans-affairs",\n  "repo": "vets.gov-team",\n  "directoryPaths": [\n    "Work Practices/Accessibility and 508",\n    "Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"\n  ]\n}\n'))),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"After you have set up the JSON file, now you have to add it to the list of pages. This is\ndone in the ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages/pages/index.js")," file."),c.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// /plugins/github-api-pages/pages/index.js\n\nexports.workPractices = require('./work-practices.json');\n")))))),c.a.createElement("h3",{id:"how-it-works"},"How it Works"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Use Gatsby's ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Create a Gatsby Node for the pages"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Use ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Create pages using the createPages lifecycle hook.")),c.a.createElement("h4",{id:"use-gatsbys-sourcenodes-lifecycle-hook-to-get-data"},"Use Gatsby's sourceNodes lifecycle hook to get data."),c.a.createElement(m.MDXTag,{name:"p",components:t},"First thing we have to do to get data from an API request into Gatsby is hook into the\n",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),c.a.createElement(m.MDXTag,{name:"pre",components:t},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// /plugins/github-api-pages/gatsby-node.js\n\nconst path  = require('path');\nconst githubApi = require('./github-api');\nconst githubPages = require('./pages');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPagesAndCreateNodes(githubPages, createNode);\n}\n")),c.a.createElement("h4",{id:"use-githubs-graphql-api-to-query-page-information-from-github"},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Now we have to do a API request using the Github GraphQL API. You can use the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}},"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),c.a.createElement(m.MDXTag,{name:"p",components:t},"Here is an example of what it looks like."),c.a.createElement(m.MDXTag,{name:"pre",components:t},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),c.a.createElement("h4",{id:"create-a-gatsby-node-for-the-pages"},"Create a Gatsby Node for the pages"),c.a.createElement(m.MDXTag,{name:"p",components:t},"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),c.a.createElement(m.MDXTag,{name:"pre",components:t},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),c.a.createElement("h4",{id:"use-gatsby-transformer-remark-to-convert-the-markdown-data-into-an-html-document"},"Use gatsby-transformer-remark to convert the markdown data into an html document"),c.a.createElement(m.MDXTag,{name:"p",components:t},"When we did a ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"createNode")," we set the ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"gatsby-transformer-remark"),"."),c.a.createElement("h3",{id:"create-pages-using-the-createpages-lifecycle-hook"},"Create pages using the createPages lifecycle hook"),c.a.createElement(m.MDXTag,{name:"p",components:t},"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),c.a.createElement(m.MDXTag,{name:"pre",components:t},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))},t}(c.a.Component),u={}},338:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(68),c=a.n(i);a.d(t,"a",function(){return c.a});a(340);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,t,a){var n;e.exports=(n=a(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),c=a.n(i),m=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(m.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},343:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(341),s=a(2),i=a.n(s),c=a(13),m=a.n(c),l=a(346),p=a.n(l),d=a(338),u=(a(17),a(133),a(134),a(339)),h=a.n(u),g=a(18),f=a.n(g),b=a(347),y=a.n(b),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:y()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:y()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),w=(a(348),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(v,{location:a}),t)},data:r})},t}(i.a.Component));w.propTypes={children:m.a.node.isRequired};t.a=w},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(343),c=(a(133),a(134),a(135),a(17),a(344)),m=a(338);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(339),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-external-doc-page-mdx-c3d0cade2c5b4456c6b8.js.map