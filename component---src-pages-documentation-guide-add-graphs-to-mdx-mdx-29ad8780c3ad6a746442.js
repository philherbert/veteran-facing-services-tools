(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0Aa0":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return m})),t.d(a,"default",(function(){return d}));var r=t("zLVn"),n=(t("q1tI"),t("7ljp")),s=t("3dLD"),m={},i={_frontmatter:m},c=s.a;function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.mdx)(c,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("h2",{id:"add-graphs-to-mdx"},"Add Graphs to MDX"),Object(n.mdx)("h3",{id:"mermaid-library"},"Mermaid Library"),Object(n.mdx)("p",null,"To generate graphs in MDX files, we need to use the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://mermaidjs.github.io/"}),"mermaid")," library.\nWe forked the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/konsumer/gatsby-remark-graph"}),"gatsby-remark-graph")," plugin and modified it to work with MDX files.\nYou can see the contents of the modified plugin in ",Object(n.mdx)("strong",{parentName:"p"},"/plugins/remarks/gatsby-remark-mdx-mermaid/")),Object(n.mdx)("p",null,"This current file (src/pages/getting-started/add-graphs-to-mdx.mdx) is an example of how to implement graphs in MDX."),Object(n.mdx)("h3",{id:"example-code"},"Example code"),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Markdown")),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{}),"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"HTML Output")),Object(n.mdx)("div",{className:"mermaid","data-processed":"true"},Object(n.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1604360051892",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"166",style:{maxWidth:"503.29998779296875px"},viewBox:"0 0 503.29998779296875 166"}),Object(n.mdx)("style",{parentName:"svg"},'#mermaid-1604360051892{font-family:"trebuchet ms",verdana,arial;font-size:16px;fill:#333;}#mermaid-1604360051892 .error-icon{fill:#552222;}#mermaid-1604360051892 .error-text{fill:#552222;stroke:#552222;}#mermaid-1604360051892 .edge-thickness-normal{stroke-width:2px;}#mermaid-1604360051892 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1604360051892 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1604360051892 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1604360051892 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1604360051892 .marker{fill:#333333;}#mermaid-1604360051892 .marker.cross{stroke:#333333;}#mermaid-1604360051892 svg{font-family:"trebuchet ms",verdana,arial;font-size:16px;}#mermaid-1604360051892 .label{font-family:"trebuchet ms",verdana,arial;color:#333;}#mermaid-1604360051892 .label text{fill:#333;}#mermaid-1604360051892 .node rect,#mermaid-1604360051892 .node circle,#mermaid-1604360051892 .node ellipse,#mermaid-1604360051892 .node polygon,#mermaid-1604360051892 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1604360051892 .node .label{text-align:center;}#mermaid-1604360051892 .node.clickable{cursor:pointer;}#mermaid-1604360051892 .arrowheadPath{fill:#333333;}#mermaid-1604360051892 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1604360051892 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1604360051892 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1604360051892 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1604360051892 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1604360051892 .cluster text{fill:#333;}#mermaid-1604360051892 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1604360051892:root{--mermaid-font-family:"trebuchet ms",verdana,arial;}#mermaid-1604360051892 flowchart{fill:apa;}'),Object(n.mdx)("g",{parentName:"svg"},Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}}),Object(n.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,70L171.5,39L247.5,39",markerEnd:"url(#arrowhead15)",style:{fill:"none"}})),Object(n.mdx)("defs",{parentName:"g"},Object(n.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead15",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(n.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-C",id:"L-A-C",style:{opacity:"1"}}),Object(n.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,108L171.5,139L226,139",markerEnd:"url(#arrowhead16)",style:{fill:"none"}})),Object(n.mdx)("defs",{parentName:"g"},Object(n.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead16",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(n.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-D",id:"L-B-D",style:{opacity:"1"}}),Object(n.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M309.5,39L356,39L403.1231548842124,67.87684358990862",markerEnd:"url(#arrowhead17)",style:{fill:"none"}})),Object(n.mdx)("defs",{parentName:"g"},Object(n.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead17",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(n.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}}),Object(n.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M331,139L356,139L403.12315678131347,111.12315525543461",markerEnd:"url(#arrowhead18)",style:{fill:"none"}})),Object(n.mdx)("defs",{parentName:"g"},Object(n.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead18",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(n.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(171.5,39)",style:{opacity:"1"}}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-29.5,-9)",className:"label"}),Object(n.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"59",height:"18"})),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"59",height:"18"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(n.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"}),"Link text"))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(n.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(n.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-C",className:"edgeLabel L-LS-A' L-LE-C"})))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(n.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(n.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-D",className:"edgeLabel L-LS-B' L-LE-D"})))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(n.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(n.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}))))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-A-8",transform:"translate(62.5,89)",style:{opacity:"1"}}),Object(n.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-54.5",y:"-19",width:"109",height:"38",className:"label-container"})),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-44.5,-9)"}),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"89",height:"18"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Square Rect"))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-B-9",transform:"translate(278.5,39)",style:{opacity:"1"}}),Object(n.mdx)("circle",Object.assign({parentName:"g"},{x:"-31",y:"-19",r:"31",className:"label-container"})),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-21,-9)"}),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"42",height:"18"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Circle"))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-C-11",transform:"translate(278.5,139)",style:{opacity:"1"}}),Object(n.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-52.5",y:"-19",width:"105",height:"38",className:"label-container"})),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-42.5,-9)"}),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"85",height:"18"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Round Rect"))))),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-D-13",transform:"translate(438.1500015258789,89)",style:{opacity:"1"}}),Object(n.mdx)("polygon",Object.assign({parentName:"g"},{points:"57.15,0 114.3,-57.15 57.15,-114.3 0,-57.15",transform:"translate(-57.15,57.15)",className:"label-container"})),Object(n.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(n.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-34.5,-9)"}),Object(n.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"69",height:"18"}),Object(n.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Rhombus")))))))))))}d.isMDXComponent=!0},"3dLD":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t("q1tI"),n=t.n(r),s=t("Wbzz");function m(){return n.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return n.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function i(e){var a=e.item;return a.href?n.a.createElement("li",{key:a.name},n.a.createElement(s.Link,{to:a.href},a.name)):n.a.createElement("li",{key:a.name},a.name," (future)")}function c(e){var a=e.items,t=e.isSublist,r=void 0!==t&&t;return a.length?n.a.createElement("ul",{className:"site-c-sidenav-list"},a.map((function(e){return e.items?n.a.createElement("li",{key:e.name},r&&n.a.createElement(i,{item:e}),!r&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?n.a.createElement("li",{key:e.name},r&&n.a.createElement(i,{item:e}),!r&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(m,null)):n.a.createElement(i,{item:e,key:e.name})}))):null}var d=t("MEl4"),l=t.n(d);function o(e){var a=e.location,t=l.a.sections.find((function(e){return a.pathname.includes(e.href)}));return t?n.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},n.a.createElement("div",{className:"site-c-sidenav"},n.a.createElement(c,{items:t.items}))):null}function g(e){var a=e.sourceUrl;return a?n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",n.a.createElement("a",{href:a},"Edit this page on GitHub")):null}var b=t("8FPV");function p(e){var a=e.children,t=e.location,r=e.pageContext;return n.a.createElement(b.a,{location:t},n.a.createElement("div",{className:"vads-l-row"},n.a.createElement(o,{location:t}),n.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a,n.a.createElement(g,{sourceUrl:r.sourceUrl}))))}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-add-graphs-to-mdx-mdx-29ad8780c3ad6a746442.js.map