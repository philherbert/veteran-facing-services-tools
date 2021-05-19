(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"170T":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("3dLD"),r={},o={_frontmatter:r},c=l.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"adding-a-collection-of-related-links-for-markdown-pages"},"Adding a collection of related links for Markdown pages"),Object(i.b)("p",null,"Our current publishing system, Metalsmith, provides a way to group related content using what it calls ",Object(i.b)("em",{parentName:"p"},"collections"),". Using collections requires the ",Object(i.b)("inlineCode",{parentName:"p"},"metalsmith-collections")," plugin (",Object(i.b)("a",{parentName:"p",href:"https://github.com/segmentio/metalsmith-collections"},"documentation"),")."),Object(i.b)("p",null,"Content grouped within a collection is displayed in the sidebar navigation, and the next/previous links. Next and previous links are set based on the sorting order (",Object(i.b)("inlineCode",{parentName:"p"},"sortBy")," property of the collection; see below)"),Object(i.b)("p",null,"Viewing ",Object(i.b)("inlineCode",{parentName:"p"},"src/site/components/navigation-sidebar.html")," and ",Object(i.b)("inlineCode",{parentName:"p"},"src/site/components/navigation-next-previous.html")," ",Object(i.b)("em",{parentName:"p"},"may")," clarify some of what's in this document."),Object(i.b)("h2",{id:"add-a-new-collection"},"Add a new collection"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"NOTE"),": Content team, you may wish to file a request with the DevOps team for this task.")),Object(i.b)("p",null,"To create a new collection, add a new collection object to ",Object(i.b)("inlineCode",{parentName:"p"},"vets-website/script/build.js"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  smith.use(collections({\n    collectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection 1'\n      }\n    },\n    secondCollectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection two'\n      }\n    }\n  }));\n")),Object(i.b)("h3",{id:"what-each-field-means"},"What each field means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"collectionName"),": should be a camel-cased or snake cased string that summarizes the name of the related documents.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"pattern"),": should be a directory a relative to the site root (without a leading slash), and end with ",Object(i.b)("inlineCode",{parentName:"p"},"*.md")," or ",Object(i.b)("inlineCode",{parentName:"p"},"*.html")," (",Object(i.b)("inlineCode",{parentName:"p"},"*")," is a ",Object(i.b)("em",{parentName:"p"},"wildcard")," character that will match every file with an ",Object(i.b)("inlineCode",{parentName:"p"},".md")," or ",Object(i.b)("inlineCode",{parentName:"p"},"*.html")," extension.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"sortBy"),": is any current YAML property used in the front matter metadata (front matter data is the stuff between the ",Object(i.b)("inlineCode",{parentName:"p"},"---")," at the beginning of each content file). This should be:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display_title")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"metadata"),": must be a JavaScript object that contains a ",Object(i.b)("inlineCode",{parentName:"p"},"name")," property. This field is optional. You may add additional properties as here."))),Object(i.b)("h3",{id:"adding-files-to-a-collection-even-when-it-is-not-in-the-collection-path"},"Adding files to a collection even when it is not in the collection path"),Object(i.b)("p",null,"Collections can also be defined or augmented by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"collection")," property to front matter fields. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\n---\n")),Object(i.b)("p",null,"In general you should:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Use a collection objects to configure collections.")," Items within a collection directory will be added to the collection automatically"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Add a collection property to include an index or other file")," in the collection. For example, ",Object(i.b)("inlineCode",{parentName:"li"},"exposure-to-hazardous-materials/agent-orange.md")," is also an index page for several Agent Orange-related disability pages and should have a ",Object(i.b)("inlineCode",{parentName:"li"},"disabilityExposureHazMat")," property.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," Adding a ",Object(i.b)("inlineCode",{parentName:"p"},"collection")," property in YAML will not override a path-based collection value. You'll actually need to move the file."),Object(i.b)("h2",{id:"ordering-pages-within-a-collection"},"Ordering pages within a collection"),Object(i.b)("p",null,"When defining a collection, you may choose to sort pages by date, or by title. In many cases, however, the desired page order may not use either of those fields."),Object(i.b)("p",null,"To control the order of display within a collection, add an ",Object(i.b)("inlineCode",{parentName:"p"},"order")," property to the front matter of each page."),Object(i.b)("p",null,"The value of ",Object(i.b)("inlineCode",{parentName:"p"},"order")," should be a number. Pages will be ordered in ascending order."),Object(i.b)("h2",{id:"adding-a-child-collection"},"Adding a child collection"),Object(i.b)("p",null,"Collections do not have a hierarchy by default. Create one by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"children")," property to the parent page or index page of a child collection."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\nchildren: disabilityAgentOrange\norder: 1\n---\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"children")," should be the identifier for the child collection."),Object(i.b)("h2",{id:"current-collections-and-hierarchy"},"Current collections and hierarchy"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"See vets-website/script/build.js"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Label"),Object(i.b)("th",{parentName:"tr",align:null},"Path"),Object(i.b)("th",{parentName:"tr",align:null},"Child collection(s)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disabilityExposureHazMat")),Object(i.b)("td",{parentName:"tr",align:null},"disability-benefits/conditions/exposure-to-hazardous-materials/*.md"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disabilityAgentOrange"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disabilityAgentOrange")),Object(i.b)("td",{parentName:"tr",align:null},"disability-benefits/conditions/exposure-to-hazardous-materials/agent-orange/*.md"),Object(i.b)("td",{parentName:"tr",align:null},"–")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"education")),Object(i.b)("td",{parentName:"tr",align:null},"education/*.md"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"educationGIBill"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"educationGIBill")),Object(i.b)("td",{parentName:"tr",align:null},"education/gi-bill/*.md"),Object(i.b)("td",{parentName:"tr",align:null},"–")))))}b.isMDXComponent=!0},"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),i=n.n(a),l=n("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(l.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(r,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(o,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var c=n("MEl4"),b=n.n(c);function d(e){var t=e.location,n=b.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(o,{items:n.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var s=n("8FPV");function m(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(s.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(d,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:a.sourceUrl}))))}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-collections-mdx-7643608e551d4e2da335.js.map