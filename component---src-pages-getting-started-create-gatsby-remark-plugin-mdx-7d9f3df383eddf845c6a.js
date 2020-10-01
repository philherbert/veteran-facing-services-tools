(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"3dLD":function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t("q1tI"),r=t.n(n),s=t("Wbzz");function i(){return r.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var a=e.item;return a.href?r.a.createElement("li",{key:a.name},r.a.createElement(s.Link,{to:a.href},a.name)):r.a.createElement("li",{key:a.name},a.name," (future)")}function d(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},a.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(i,null)):r.a.createElement(m,{item:e,key:e.name})}))):null}var c=t("MEl4"),l=t.n(c);function o(e){var a=e.location,t=l.a.sections.find((function(e){return a.pathname.includes(e.href)}));return t?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(d,{items:t.items}))):null}function g(e){var a=e.sourceUrl;return a?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:a},"Edit this page on GitHub")):null}var p=t("8FPV");function b(e){var a=e.children,t=e.location,n=e.pageContext;return r.a.createElement(p.a,{location:t},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(o,{location:t}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a,r.a.createElement(g,{sourceUrl:n.sourceUrl}))))}},rC7D:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return c}));var n=t("zLVn"),r=(t("q1tI"),t("7ljp")),s=t("3dLD"),i={},m={_frontmatter:i},d=s.a;function c(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.mdx)(d,Object.assign({},m,t,{components:a,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"create-a-gatsby-remark-plugin"},"Create a Gatsby Remark plugin"),Object(r.mdx)("p",null,"Gatsby uses a plugin called ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-remark/"}),"gatsby-transformer-remark"),"\nto convert markdown to html. Our MDX plugin ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-mdx/"}),"gatsby-mdx")," uses this plugin\nto convert markdown to html. We needed to create a way to add graphs to our MDX files so we tried to implement another plugin that adds the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://mermaidjs.github.io/"}),"mermaid")," feature to markdown. The problem was that it had conflicts with MDX files. This article will detail how we added our own plugin locally to the ",Object(r.mdx)("inlineCode",{parentName:"p"},"gatsby-transformer-remark")," plugin to solve this issue."),Object(r.mdx)("h3",{id:"what-are-we-doing"},"What are we doing"),Object(r.mdx)("p",null,"We needed a way to generate graphs using markdown like the code below. Normally this is done using the mermaid library. That is what we are going to use, but we need it to work with MDX files. Below is an example of what we are trying to do."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Markdown")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"HTML Output")),Object(r.mdx)("div",{className:"mermaid","data-processed":"true"},Object(r.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1601563718003",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"166",style:{maxWidth:"503.29998779296875px"},viewBox:"0 0 503.29998779296875 166"}),Object(r.mdx)("style",{parentName:"svg"},'#mermaid-1601563718003{font-family:"trebuchet ms",verdana,arial;font-size:16px;fill:#333;}#mermaid-1601563718003 .error-icon{fill:#552222;}#mermaid-1601563718003 .error-text{fill:#552222;stroke:#552222;}#mermaid-1601563718003 .edge-thickness-normal{stroke-width:2px;}#mermaid-1601563718003 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1601563718003 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1601563718003 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1601563718003 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1601563718003 .marker{fill:#333333;}#mermaid-1601563718003 .marker.cross{stroke:#333333;}#mermaid-1601563718003 svg{font-family:"trebuchet ms",verdana,arial;font-size:16px;}#mermaid-1601563718003 .label{font-family:"trebuchet ms",verdana,arial;color:#333;}#mermaid-1601563718003 .label text{fill:#333;}#mermaid-1601563718003 .node rect,#mermaid-1601563718003 .node circle,#mermaid-1601563718003 .node ellipse,#mermaid-1601563718003 .node polygon,#mermaid-1601563718003 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1601563718003 .node .label{text-align:center;}#mermaid-1601563718003 .node.clickable{cursor:pointer;}#mermaid-1601563718003 .arrowheadPath{fill:#333333;}#mermaid-1601563718003 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1601563718003 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1601563718003 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1601563718003 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1601563718003 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1601563718003 .cluster text{fill:#333;}#mermaid-1601563718003 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1601563718003:root{--mermaid-font-family:"trebuchet ms",verdana,arial;}#mermaid-1601563718003 flowchart{fill:apa;}'),Object(r.mdx)("g",{parentName:"svg"},Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,70L171.5,39L247.5,39",markerEnd:"url(#arrowhead15)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead15",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-C",id:"L-A-C",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,108L171.5,139L226,139",markerEnd:"url(#arrowhead16)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead16",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-D",id:"L-B-D",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M309.5,39L356,39L403.1231548842124,67.87684358990862",markerEnd:"url(#arrowhead17)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead17",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M331,139L356,139L403.12315678131347,111.12315525543461",markerEnd:"url(#arrowhead18)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead18",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(171.5,39)",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-29.5,-9)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"59",height:"18"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"59",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"}),"Link text"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-C",className:"edgeLabel L-LS-A' L-LE-C"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-D",className:"edgeLabel L-LS-B' L-LE-D"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}))))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-A-8",transform:"translate(62.5,89)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-54.5",y:"-19",width:"109",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-44.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"89",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Square Rect"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-B-9",transform:"translate(278.5,39)",style:{opacity:"1"}}),Object(r.mdx)("circle",Object.assign({parentName:"g"},{x:"-31",y:"-19",r:"31",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-21,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"42",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Circle"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-C-11",transform:"translate(278.5,139)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-52.5",y:"-19",width:"105",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-42.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"85",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Round Rect"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-D-13",transform:"translate(438.1500015258789,89)",style:{opacity:"1"}}),Object(r.mdx)("polygon",Object.assign({parentName:"g"},{points:"57.15,0 114.3,-57.15 57.15,-114.3 0,-57.15",transform:"translate(-57.15,57.15)",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-34.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"69",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Rhombus")))))))))),Object(r.mdx)("p",null,"Remark uses a plugin system that enables you to do some customization when the markdown gets converted into html through Remark. That is what we are going to use to convert our markdown into a graph."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"First we need to create a plugin that we can add to the ",Object(r.mdx)("inlineCode",{parentName:"p"},"gatsby-transformer-remark")," plugin."),Object(r.mdx)("p",{parentName:"li"},"Below is the code we are using to generate the html to convert our code into graphs. When adding this to the plugin, this code will run during the transformation phase. In this code we are taking the ",Object(r.mdx)("inlineCode",{parentName:"p"},"mardownAST")," and finding mermaid specific code on the page. Then we change the code to html."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// plugins/remark/gatsby-remark-mdx-mermaid/index.js\n\nconst visit = require('unist-util-visit');\n\nmodule.exports = ({ markdownAST }, { language = 'mermaid', theme = 'default' } = {}) => {\n  visit(markdownAST, 'code', node => {\n    let lang = (node.lang || '').toLowerCase()\n    if (lang === language) {\n      node.type = 'html'\n      node.value = '<div class=\"mermaid\">{' + '`'+ node.value + '`'+ '}</div>'\n    }\n  })\n}\n")),Object(r.mdx)("p",{parentName:"li"},"This markdown code:"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),Object(r.mdx)("p",{parentName:"li"},"Will generate:"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),'<div class="mermaid">\n`\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n`\n</div>\n')),Object(r.mdx)("p",{parentName:"li"},"Notice the back ticks inside the innerText. This was done because of MDX. MDX was interpreting the ",Object(r.mdx)("inlineCode",{parentName:"p"},"{}")," as JSX templating which causes an error. So we need to wrap the code in back ticks to make it work with MDX files.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Add it to our MDX remarks plugin."),Object(r.mdx)("p",{parentName:"li"},"In our ",Object(r.mdx)("inlineCode",{parentName:"p"},"gatsby-config.js")," file we need to add our plugin to the ",Object(r.mdx)("inlineCode",{parentName:"p"},"gatsby-mdx plugin"),". Because this is a Remark plugin we need to add it to ",Object(r.mdx)("inlineCode",{parentName:"p"},"gatsbyRemarkPlugins"),". This is where you can add ",Object(r.mdx)("inlineCode",{parentName:"p"},"gatsby-transformer-remark")," specific plugins."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-configs.js\n\n{\n  resolve: `gatsby-mdx`,\n  options: {\n    extensions: ['.mdx'],\n    mediaTypes: ['text/x-markdown'],\n    defaultLayouts: {\n      default: require.resolve(\"./src/layouts/layout.js\"),\n    },\n    gatsbyRemarkPlugins: [\n      {\n        resolve: path.resolve(__dirname, './plugins/remark/gatsby-remark-mdx-mermaid'),\n        options: {\n          language: 'mermaid',\n          theme: 'default'\n        }\n      }\n    ],\n  }\n}\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Add the mermaid library so it can convert our code into SVG graphs"),Object(r.mdx)("p",{parentName:"li"},"Because mermaid is a client side library we need to include it when the build is rendered on the client-side.\nTo do this we add some code to our Layout Component that will inject the script in the ",Object(r.mdx)("strong",{parentName:"p"},"componentDidMount")," lifecycle hook."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"class Layout extends React.Component {\n  componentDidMount() {\n    window.mermaid_config = { theme: 'default', startOnLoad: true }\n    const s = document.createElement('script');\n    s.setAttribute('src', 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js');\n    document.head.appendChild(s);\n\n    if (window.mermaid) {\n      window.mermaid.init(undefined, document.getElementsByClassName('mermaid'));\n    }\n  }\n  .....\n}\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Once all this all setup we are good to go."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-create-gatsby-remark-plugin-mdx-7d9f3df383eddf845c6a.js.map