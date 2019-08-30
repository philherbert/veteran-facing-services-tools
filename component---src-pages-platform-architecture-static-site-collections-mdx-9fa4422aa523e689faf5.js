(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{372:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return i}),a.d(n,"_frontmatter",function(){return c});a(8),a(7),a(4),a(9),a(10);var t=a(1),o=a.n(t),m=a(2),r=a(333);var l={},i=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:n},o.a.createElement("h1",{id:"adding-a-collection-of-related-links-for-markdown-pages"},"Adding a collection of related links for Markdown pages"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Our current publishing system, Metalsmith, provides a way to group related content using what it calls ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"collections"),". Using collections requires the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metalsmith-collections")," plugin (",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/segmentio/metalsmith-collections"}},"documentation"),")."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Content grouped within a collection is displayed in the sidebar navigation, and the next/previous links. Next and previous links are set based on the sorting order (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sortBy")," property of the collection; see below)"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Viewing ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/components/navigation-sidebar.html")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/components/navigation-next-previous.html")," ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"may")," clarify some of what's in this document."),o.a.createElement("h2",{id:"add-a-new-collection"},"Add a new collection"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"em"},"NOTE"),": Content team, you may wish to file a request with the DevOps team for this task.")),o.a.createElement(m.MDXTag,{name:"p",components:n},"To create a new collection, add a new collection object to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website/script/build.js"),"."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  smith.use(collections({\n    collectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection 1'\n      }\n    },\n    secondCollectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection two'\n      }\n    }\n  }));\n")),o.a.createElement("h3",{id:"what-each-field-means"},"What each field means:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collectionName"),": should be a camel-cased or snake cased string that summarizes the name of the related documents.")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pattern"),": should be a directory a relative to the site root (without a leading slash), and end with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.md")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.html")," (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*")," is a ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"wildcard")," character that will match every file with an ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.html")," extension.)")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sortBy"),": is any current YAML property used in the front matter metadata (front matter data is the stuff between the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"---")," at the beginning of each content file). This should be:"),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"order")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"title")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"display_title")))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metadata"),": must be a JavaScript object that contains a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," property. This field is optional. You may add additional properties as here."))),o.a.createElement("h3",{id:"adding-files-to-a-collection-even-when-it-is-not-in-the-collection-path"},"Adding files to a collection even when it is not in the collection path"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Collections can also be defined or augmented by adding a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collection")," property to front matter fields. For example:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\n---\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"In general you should:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Use a collection objects to configure collections.")," Items within a collection directory will be added to the collection automatically"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Add a collection property to include an index or other file")," in the collection. For example, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"exposure-to-hazardous-materials/agent-orange.md")," is also an index page for several Agent Orange-related disability pages and should have a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"disabilityExposureHazMat")," property.")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"NOTE:")," Adding a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collection")," property in YAML will not override a path-based collection value. You'll actually need to move the file."),o.a.createElement("h2",{id:"ordering-pages-within-a-collection"},"Ordering pages within a collection"),o.a.createElement(m.MDXTag,{name:"p",components:n},"When defining a collection, you may choose to sort pages by date, or by title. In many cases, however, the desired page order may not use either of those fields."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To control the order of display within a collection, add an ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"order")," property to the front matter of each page."),o.a.createElement(m.MDXTag,{name:"p",components:n},"The value of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"order")," should be a number. Pages will be ordered in ascending order."),o.a.createElement("h2",{id:"adding-a-child-collection"},"Adding a child collection"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Collections do not have a hierarchy by default. Create one by adding a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," property to the parent page or index page of a child collection."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\nchildren: disabilityAgentOrange\norder: 1\n---\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," should be the identifier for the child collection."),o.a.createElement("h2",{id:"current-collections-and-hierarchy"},"Current collections and hierarchy"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"See vets-website/script/build.js"),"."),o.a.createElement(m.MDXTag,{name:"table",components:n},o.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Label"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Path"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Child collection(s)"))),o.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityExposureHazMat")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"disability-benefits/conditions/exposure-to-hazardous-materials/*.md"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityAgentOrange"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityAgentOrange")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"disability-benefits/conditions/exposure-to-hazardous-materials/agent-orange/*.md"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"–")),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"education")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"education/*.md"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"educationGIBill"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"educationGIBill")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"education/gi-bill/*.md"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"–")))))},t}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-collections-mdx-9fa4422aa523e689faf5.js.map