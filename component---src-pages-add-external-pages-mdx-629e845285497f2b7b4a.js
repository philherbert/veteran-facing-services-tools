(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return g});a(63);var n=a(93),o=a.n(n),r=a(6),s=a.n(r),i=a(0),c=a.n(i),l=a(13),m=a(203),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=m.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},c.a.createElement(l.MDXTag,{name:"h2",components:t},"Adding External Pages from Github API"),c.a.createElement(l.MDXTag,{name:"p",components:t},"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),c.a.createElement(l.MDXTag,{name:"h3",components:t},"Why?"),c.a.createElement(l.MDXTag,{name:"p",components:t},"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),c.a.createElement(l.MDXTag,{name:"h3",components:t},"How to Add External pages"),c.a.createElement(l.MDXTag,{name:"p",components:t},"I have created helper functions for the GitHub Api located in ",c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"services/github-api.js"),".\nWe should store all our utility function for the GitHub Api here. That way we have one source of truth. We can add to this file as needed."),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"getPageAndCreatePage"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"getDirectoryAndCreatePages")),c.a.createElement(l.MDXTag,{name:"p",components:t},"You will need to run these functions in the ",c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"exports.sourceNodes")," lifecycle hook.\nThis can be found in the ",c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"gatsby-node.js")," file."),c.a.createElement(l.MDXTag,{name:"h5",components:t},"Limitations"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),c.a.createElement(l.MDXTag,{name:"h5",components:t},"Data you will need to make the API request"),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Owner of the repo"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Repo name"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"File directory you want to add or file fileName")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Example:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"department-of-veterans-affairs/vets.gov-team/Work Practices/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},c.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),c.a.createElement(l.MDXTag,{name:"h2",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/9dbc3/github-file-directory.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:"665px",marginLeft:"auto",marginRight:"auto"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.323308270676693%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"github file directory",title:"",src:"/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/522b6/github-file-directory.png",srcSet:"/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/a2e17/github-file-directory.png 259w,\n/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/f5ca9/github-file-directory.png 518w,\n/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/522b6/github-file-directory.png 1035w,\n/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/9dbc3/github-file-directory.png 1330w",sizes:"(max-width: 665px) 100vw, 665px"})))),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"Here is how to use the utility functions:"),"\nThese functions will do an API request then create a Gatsby nodes so you can create pages within the system."),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"getPageAndCreatePage")," - This will add only 1 page in Gatsby"),c.a.createElement(l.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst githubApi = require('./services/github-api');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPageAndCreatePage({\n    owner: 'department-of-veterans-affairs',\n    repo: 'vets.gov-team',\n    dir: 'Work Practices/Accessing-Staging.md',\n  }, createNode);\n}\n"))),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"getDirectoryAndCreatePages")," - This will add all markdown pages in a directory"),c.a.createElement(l.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst githubApi = require('./services/github-api');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getDirectoryAndCreatePages({\n    owner: 'department-of-veterans-affairs',\n    repo: 'vets.gov-team',\n    dir: 'Work Practices',\n  }, createNode);\n}\n")))),c.a.createElement(l.MDXTag,{name:"h3",components:t},"How it Works"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Use Gatsby's ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Create a Gatsby Node for the pages"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Use ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Create pages using the createPages lifecycle hook.")),c.a.createElement(l.MDXTag,{name:"h4",components:t},"Use Gatsby's ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(l.MDXTag,{name:"p",components:t},"First thing we have to do to get data from an API request into Gatsby is hook into the\n",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript{numberLines:",metastring:"true}","true}":!0}},"  // gatsby-node.js\n\n  exports.sourceNodes = async ({\n    boundActionCreators,\n    getNode,\n    hasNodeChanged,\n  }) => {\n    const { createNode } = boundActionCreators\n\n  }\n")),c.a.createElement(l.MDXTag,{name:"h4",components:t},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Now we have to do a API request using the Github GraphQL API. You can use the ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}},"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Here is an example of what it looks like."),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),c.a.createElement(l.MDXTag,{name:"h4",components:t},"Create a Gatsby Node for the pages"),c.a.createElement(l.MDXTag,{name:"p",components:t},"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),c.a.createElement(l.MDXTag,{name:"h4",components:t},"Use gatsby-transformer-remark to convert the markdown data into an html document"),c.a.createElement(l.MDXTag,{name:"p",components:t},"When we did a ",c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"createNode")," we set the ",c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",c.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"gatsby-transformer-remark"),"."),c.a.createElement(l.MDXTag,{name:"h3",components:t},"Create pages using the createPages lifecycle hook"),c.a.createElement(l.MDXTag,{name:"p",components:t},"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))},t}(c.a.Component),g={}},202:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}},allMarkDown:{edges:[{node:{fields:{slug:"Work Practices/Accessibility and 508/2016-12-21_508_Audit_Report",fileName:"2016-12-21_508_Audit_Report",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md/2017-06-05-meeting-508-office",fileName:"2017-06-05-meeting-508-office",path:"Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/508-testing-plan",fileName:"508-testing-plan",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/508officeReviewList",fileName:"508officeReviewList",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessing-Staging",fileName:"Accessing-Staging",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/DEFINITION-severity-rubric",fileName:"DEFINITION-severity-rubric",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Github Requests",fileName:"Github Requests",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/How to File Bugs Tasks and Questions",fileName:"How to File Bugs Tasks and Questions",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/Mac_VoiceOver_guide",fileName:"Mac_VoiceOver_guide",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Product_Development_Roles",fileName:"Product_Development_Roles",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Product_Team_Process",fileName:"Product_Team_Process",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/README",fileName:"README",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/README",fileName:"README",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/RESEARCH-screenreader-fieldset-legend-label",fileName:"RESEARCH-screenreader-fieldset-legend-label",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Slack Requests",fileName:"Slack Requests",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Team Norms",fileName:"Team Norms",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Using GitHub and Contributing Code",fileName:"Using GitHub and Contributing Code",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/a11y-508-launch-guidelines",fileName:"a11y-508-launch-guidelines",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/listserv-management",fileName:"listserv-management",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/mailing-lists",fileName:"mailing-lists",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/norms",fileName:"norms",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/org-chart",fileName:"org-chart",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/team descriptions",fileName:"team descriptions",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/zenhub description",fileName:"zenhub description",path:"Work Practices"}}}]},pages:{edges:[{node:{id:"39491ae5-0df7-5ad1-b428-c63ca953c561",frontmatter:{title:"Gatsby Configurations"},fields:{slug:"/gatsby-configurations/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"gatsby-configurations"},code:{scope:""}}},{node:{id:"83f3e572-fabe-56a7-b5b2-da60e86103a5",frontmatter:{title:"How to Add Documents"},fields:{slug:"/how-to/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"how-to"},code:{scope:""}}},{node:{id:"3a935487-d052-58b7-93c5-7b53e4cfb9f2",frontmatter:{title:"How to Add Pages from GitHub"},fields:{slug:"/add-external-pages/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"add-external-pages"},code:{scope:""}}},{node:{id:"261faece-e189-5d58-b092-abe4658658f7",frontmatter:{title:"Internal Tools"},fields:{slug:"/internal-tools/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"internal-tools"},code:{scope:""}}},{node:{id:"1c8c8f98-32bf-5329-acea-257a2d0bbdad",frontmatter:{title:"This is the index"},fields:{slug:"/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"index"},code:{scope:""}}}]},components:{edges:[{node:{id:"d8caa36e-fc3f-5666-b21c-c1cc4f816f9b",frontmatter:{title:"AcceptTermsPrompt"},fields:{slug:"/accepttermsprompt/",sourceInstanceName:"components"},parent:{__typename:"File",name:"AcceptTermsPrompt"},code:{scope:""}}},{node:{id:"52d72b16-783b-5d24-a5c4-0c5a3c9b82b6",frontmatter:{title:"AdditionalInfo"},fields:{slug:"/additionalinfo/",sourceInstanceName:"components"},parent:{__typename:"File",name:"AdditionalInfo"},code:{scope:""}}}]}}}},203:function(e,t,a){"use strict";var n=a(6),o=a.n(n),r=a(202),s=a(0),i=a.n(s),c=a(2),l=a.n(c),m=a(64),p=a.n(m),d=a(62),g=(a(42),function(e){var t=e.pages,a=e.siteTitle,n=e.components,o=e.allMarkDown;return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),i.a.createElement("h1",null,a),i.a.createElement("h4",null,"Components"),i.a.createElement("ul",{className:"menu-list"},n.map(function(e){return i.a.createElement("li",{key:e.node.id},i.a.createElement(d.a,{to:"/"+e.node.fields.slug.toLowerCase()+"/"},e.node.frontmatter.title))})),i.a.createElement("h4",null,"Documents"),i.a.createElement("ul",{className:"menu-list"},t.map(function(e){return i.a.createElement("li",{key:e.node.id},i.a.createElement(d.a,{to:"/"+e.node.fields.slug.toLowerCase()+"/"},e.node.frontmatter.title))})),i.a.createElement("h4",null,"External Documents"),i.a.createElement("ul",{className:"menu-list"},o.map(function(e){return i.a.createElement("li",{key:e.node.id},i.a.createElement(d.a,{to:"/"+e.node.fields.slug.toLowerCase().replace(/ /g,"-")+"/"},function(e){return"README"===e.node.fields.fileName?e.node.fields.slug:e.node.fields.fileName}(e)))})))}),u=(a(204),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this,t=this.props.children;return i.a.createElement(d.b,{query:"1278266300",render:function(a){return i.a.createElement(i.a.Fragment,null,"' '",i.a.createElement(p.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossOrigin:"anonymous"})),"' '",i.a.createElement(g,{pages:e.getSitePages(a.pages.edges),components:a.components.edges,siteTitle:a.site.siteMetadata.title,allMarkDown:a.allMarkDown.edges}),"' '",i.a.createElement("div",{className:"ContentArea"},t),"' '")},data:r})},t}(i.a.Component));u.propTypes={children:l.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-add-external-pages-mdx-629e845285497f2b7b4a.js.map