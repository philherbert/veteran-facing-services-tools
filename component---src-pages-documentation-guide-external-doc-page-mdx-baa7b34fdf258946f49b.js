(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz");function i(){return r.a.createElement(o.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(o.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(s,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(s,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(i,null)):r.a.createElement(s,{item:e,key:e.name})}))):null}var d=n("MEl4"),l=n.n(d);function m(e){var t=e.location,n=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(c,{items:n.items}))):null}function u(e){var t=e.sourceUrl;return r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub"))}var p=n("8FPV");function h(e){var t=e.children,n=e.location,a=e.pageContext;return r.a.createElement(p.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(m,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(u,{sourceUrl:a.sourceUrl}))))}},xAKv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("3dLD"),i={},s={_frontmatter:i},c=o.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"adding-external-pages-from-github-api"},"Adding External Pages from Github API"),Object(r.mdx)("p",null,"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),Object(r.mdx)("h3",{id:"why"},"Why?"),Object(r.mdx)("p",null,"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),Object(r.mdx)("h3",{id:"how-to-add-external-pages"},"How to Add External pages"),Object(r.mdx)("p",null,"I have created a Gatsby plugin called ",Object(r.mdx)("strong",{parentName:"p"},"github-api-pages")," located at ",Object(r.mdx)("strong",{parentName:"p"},"/plugins/github-api-pages"),".\nYou can learn more about creating your own plugin at ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/getting-started/common-tasks/creating-gatsby-plugins"}),"creating-gatsby-plugins"),"\nAll code that is interfacing with the GitHubAPI is located at ",Object(r.mdx)("strong",{parentName:"p"},"/plugins/github-api-pages/-github-api"),". We should try to\nkeep any code that is interfacing with the GitHubAPI in this file so we have one source of truth."),Object(r.mdx)("h5",{id:"limitations"},"Limitations"),Object(r.mdx)("p",null,"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),Object(r.mdx)("h5",{id:"data-you-will-need-to-make-the-api-request"},"Data you will need to make the API request"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Owner of the repo"),Object(r.mdx)("li",{parentName:"ul"},"Repo name"),Object(r.mdx)("li",{parentName:"ul"},"File directory you want to add or file fileName")),Object(r.mdx)("p",null,"Example:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"department-of-veterans-affairs/vets.gov-team/Administrative/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("em",{parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),Object(r.mdx)("h2",{id:"github-file-directory"},"github file directory"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"How to add files:"),"\nAfter you have gathered the information (owner, repo, file directory) from github, now you can add the files\ninto Gatsby."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Located in the ",Object(r.mdx)("strong",{parentName:"p"},"/plugins/github-api-pages/")," you should see a ",Object(r.mdx)("strong",{parentName:"p"},"pages")," directory. To add github file locations\nyou need to either add it to a list or create your own list. Here are the steps of how to add your own list."),Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Add a JSON file named the main directory of your github directory. In this example we will be using ",Object(r.mdx)("strong",{parentName:"p"},"work-practices"),".\nYou can see how we are using the data we gathered earlier (owner, repo, file directory). All you need to do is add your\nfile directory to the ",Object(r.mdx)("strong",{parentName:"p"},"directoryPaths")," array. It can be a directory or just a file location."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-JSON"}),'// /plugins/github-api-pages/pages/work-practices.json\n\n{\n  "owner": "department-of-veterans-affairs",\n  "repo": "vets.gov-team",\n  "directoryPaths": [\n    "Work Practices/Accessibility and 508",\n    "Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"\n  ]\n}\n'))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"After you have set up the JSON file, now you have to add it to the list of pages. This is\ndone in the ",Object(r.mdx)("strong",{parentName:"p"},"/plugins/github-api-pages/pages/index.js")," file."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"// /plugins/github-api-pages/pages/index.js\n\nexports.workPractices = require('./work-practices.json');\n")))))),Object(r.mdx)("h3",{id:"how-it-works"},"How it Works"),Object(r.mdx)("p",null,"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Use Gatsby's ",Object(r.mdx)("inlineCode",{parentName:"li"},"sourceNodes")," lifecycle hook to get data."),Object(r.mdx)("li",{parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),Object(r.mdx)("li",{parentName:"ul"},"Create a Gatsby Node for the pages"),Object(r.mdx)("li",{parentName:"ul"},"Use ",Object(r.mdx)("inlineCode",{parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),Object(r.mdx)("li",{parentName:"ul"},"Create pages using the createPages lifecycle hook.")),Object(r.mdx)("h4",{id:"use-gatsbys-sourcenodes-lifecycle-hook-to-get-data"},"Use Gatsby's sourceNodes lifecycle hook to get data."),Object(r.mdx)("p",null,"First thing we have to do to get data from an API request into Gatsby is hook into the\n",Object(r.mdx)("inlineCode",{parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// /plugins/github-api-pages/gatsby-node.js\n\nconst path  = require('path');\nconst githubApi = require('./github-api');\nconst githubPages = require('./pages');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPagesAndCreateNodes(githubPages, createNode);\n}\n")),Object(r.mdx)("h4",{id:"use-githubs-graphql-api-to-query-page-information-from-github"},"Use GitHub's GraphQL API to query page information from GitHub"),Object(r.mdx)("p",null,"Now we have to do a API request using the Github GraphQL API. You can use the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://developer.github.com/v4/explorer/"}),"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}),"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),Object(r.mdx)("p",null,"Here is an example of what it looks like."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),Object(r.mdx)("h4",{id:"create-a-gatsby-node-for-the-pages"},"Create a Gatsby Node for the pages"),Object(r.mdx)("p",null,"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),Object(r.mdx)("h4",{id:"use-gatsby-transformer-remark-to-convert-the-markdown-data-into-an-html-document"},"Use gatsby-transformer-remark to convert the markdown data into an html document"),Object(r.mdx)("p",null,"When we did a ",Object(r.mdx)("strong",{parentName:"p"},"createNode")," we set the ",Object(r.mdx)("strong",{parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",Object(r.mdx)("strong",{parentName:"p"},"gatsby-transformer-remark"),"."),Object(r.mdx)("h3",{id:"create-pages-using-the-createpages-lifecycle-hook"},"Create pages using the createPages lifecycle hook"),Object(r.mdx)("p",null,"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-external-doc-page-mdx-baa7b34fdf258946f49b.js.map