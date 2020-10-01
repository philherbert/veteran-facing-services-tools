(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"3dLD":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t("q1tI"),s=t.n(r),n=t("Wbzz");function i(){return s.a.createElement(n.StaticQuery,{query:"68798663",render:function(e){return s.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var a=e.item;return a.href?s.a.createElement("li",{key:a.name},s.a.createElement(n.Link,{to:a.href},a.name)):s.a.createElement("li",{key:a.name},a.name," (future)")}function c(e){var a=e.items,t=e.isSublist,r=void 0!==t&&t;return a.length?s.a.createElement("ul",{className:"site-c-sidenav-list"},a.map((function(e){return e.items?s.a.createElement("li",{key:e.name},r&&s.a.createElement(m,{item:e}),!r&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?s.a.createElement("li",{key:e.name},r&&s.a.createElement(m,{item:e}),!r&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(i,null)):s.a.createElement(m,{item:e,key:e.name})}))):null}var d=t("MEl4"),l=t.n(d);function g(e){var a=e.location,t=l.a.sections.find((function(e){return a.pathname.includes(e.href)}));return t?s.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},s.a.createElement("div",{className:"site-c-sidenav"},s.a.createElement(c,{items:t.items}))):null}function b(e){var a=e.sourceUrl;return a?s.a.createElement("div",null,s.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",s.a.createElement("a",{href:a},"Edit this page on GitHub")):null}var o=t("8FPV");function p(e){var a=e.children,t=e.location,r=e.pageContext;return s.a.createElement(o.a,{location:t},s.a.createElement("div",{className:"vads-l-row"},s.a.createElement(g,{location:t}),s.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a,s.a.createElement(b,{sourceUrl:r.sourceUrl}))))}},DqKh:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return d}));var r=t("zLVn"),s=(t("q1tI"),t("7ljp")),n=t("3dLD"),i={},m={_frontmatter:i},c=n.a;function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(s.mdx)(c,Object.assign({},m,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"site-build-process"},"Site build process"),Object(s.mdx)("p",null,"The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator. We take content from two sources, the vagov-content repo and the VA's Drupal CMS, create pages based on that data plus templates, run a series of other plugins, and then output the resulting html pages."),Object(s.mdx)("h2",{id:"metalsmith-build-flow"},"Metalsmith build flow"),Object(s.mdx)("div",{className:"mermaid","data-processed":"true"},Object(s.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1601563718398",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"1058",style:{maxWidth:"735.25px"},viewBox:"0 0 735.25 1058"}),Object(s.mdx)("style",{parentName:"svg"},'#mermaid-1601563718398{font-family:"trebuchet ms",verdana,arial;font-size:16px;fill:#333;}#mermaid-1601563718398 .error-icon{fill:#552222;}#mermaid-1601563718398 .error-text{fill:#552222;stroke:#552222;}#mermaid-1601563718398 .edge-thickness-normal{stroke-width:2px;}#mermaid-1601563718398 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1601563718398 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1601563718398 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1601563718398 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1601563718398 .marker{fill:#333333;}#mermaid-1601563718398 .marker.cross{stroke:#333333;}#mermaid-1601563718398 svg{font-family:"trebuchet ms",verdana,arial;font-size:16px;}#mermaid-1601563718398 .label{font-family:"trebuchet ms",verdana,arial;color:#333;}#mermaid-1601563718398 .label text{fill:#333;}#mermaid-1601563718398 .node rect,#mermaid-1601563718398 .node circle,#mermaid-1601563718398 .node ellipse,#mermaid-1601563718398 .node polygon,#mermaid-1601563718398 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1601563718398 .node .label{text-align:center;}#mermaid-1601563718398 .node.clickable{cursor:pointer;}#mermaid-1601563718398 .arrowheadPath{fill:#333333;}#mermaid-1601563718398 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1601563718398 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1601563718398 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1601563718398 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1601563718398 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1601563718398 .cluster text{fill:#333;}#mermaid-1601563718398 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1601563718398:root{--mermaid-font-family:"trebuchet ms",verdana,arial;}#mermaid-1601563718398 flowchart{fill:apa;}'),Object(s.mdx)("g",{parentName:"svg"},Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-1 LE-A",id:"L-1-A",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M290.2641509433962,46L178,80L178,114",markerEnd:"url(#arrowhead69)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead69",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-1 LE-K",id:"L-1-K",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M415.7358490566038,46L528,80L528,133L528,177L528,202",markerEnd:"url(#arrowhead70)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead70",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M178,152L178,177L178,202",markerEnd:"url(#arrowhead71)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead71",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-C",id:"L-B-C",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M178,240L178,265L178,290",markerEnd:"url(#arrowhead72)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead72",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M178,328L178,353L277.4318181818182,378",markerEnd:"url(#arrowhead73)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead73",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-D LE-E",id:"L-D-E",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M353,416L353,441L353,466",markerEnd:"url(#arrowhead74)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead74",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-E LE-F",id:"L-E-F",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M353,504L353,529L353,554",markerEnd:"url(#arrowhead75)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead75",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-F LE-G",id:"L-F-G",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M353,592L353,617L353,642",markerEnd:"url(#arrowhead76)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead76",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-G LE-H",id:"L-G-H",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M353,680L353,705L353,730",markerEnd:"url(#arrowhead77)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead77",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-H LE-N",id:"L-H-N",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M409.1933962264151,768L509.75,802L509.75,836",markerEnd:"url(#arrowhead78)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead78",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-H LE-I",id:"L-H-I",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M296.8066037735849,768L196.25,802L196.25,855L196.25,899L290,925.3157894736842",markerEnd:"url(#arrowhead79)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead79",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-N LE-I",id:"L-N-I",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M509.75,874L509.75,899L416,925.3157894736842",markerEnd:"url(#arrowhead80)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead80",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-I LE-J",id:"L-I-J",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M353,962L353,987L353,1012",markerEnd:"url(#arrowhead81)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead81",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-K LE-L",id:"L-K-L",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M528,240L528,265L528,290",markerEnd:"url(#arrowhead82)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead82",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-L LE-D",id:"L-L-D",style:{opacity:"1"}}),Object(s.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M528,328L528,353L428.5681818181818,378",markerEnd:"url(#arrowhead83)",style:{fill:"none"}})),Object(s.mdx)("defs",{parentName:"g"},Object(s.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead83",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(s.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(178,80)",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-106.5,-9)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"213",height:"18"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"213",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-1-A",className:"edgeLabel L-LS-1' L-LE-A"}),"Markdown from vagov-content"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(528,133)",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-52,-9)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"104",height:"18"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"104",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-1-K",className:"edgeLabel L-LS-1' L-LE-K"}),"Drupal content"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-C",className:"edgeLabel L-LS-B' L-LE-C"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-D-E",className:"edgeLabel L-LS-D' L-LE-E"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-E-F",className:"edgeLabel L-LS-E' L-LE-F"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-F-G",className:"edgeLabel L-LS-F' L-LE-G"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-G-H",className:"edgeLabel L-LS-G' L-LE-H"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(509.75,802)",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-48,-9)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"96",height:"18"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"96",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-H-N",className:"edgeLabel L-LS-H' L-LE-N"}),"Drupal pages"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(196.25,855)",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-61,-9)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"122",height:"18"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"122",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-H-I",className:"edgeLabel L-LS-H' L-LE-I"}),"Markdown pages"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-N-I",className:"edgeLabel L-LS-N' L-LE-I"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-I-J",className:"edgeLabel L-LS-I' L-LE-J"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-K-L",className:"edgeLabel L-LS-K' L-LE-L"})))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(s.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-L-D",className:"edgeLabel L-LS-L' L-LE-D"}))))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-1-30",transform:"translate(353,27)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-98.5",y:"-19",width:"197",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-88.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"177",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Metalsmith build pipeline"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-A-31",transform:"translate(178,133)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-170",y:"-19",width:"340",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-160,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"320",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Create page objects from each Markdown file"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-K-33",transform:"translate(528,221)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-192.5",y:"-19",width:"385",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-182.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"365",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Query Drupal via GraphQL or fetch from local cache"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-B-35",transform:"translate(178,221)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-102.5",y:"-19",width:"205",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-92.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"185",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Convert Markdown to html"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-C-37",transform:"translate(178,309)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-153.5",y:"-19",width:"307",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-143.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"287",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Generate sidebars for Markdown content"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-D-39",transform:"translate(353,397)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-128",y:"-19",width:"256",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-118,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"236",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Add local static assets to pipeline"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-E-41",transform:"translate(353,485)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-136.5",y:"-19",width:"273",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-126.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"253",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Apply layout templates to page data"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-F-43",transform:"translate(353,573)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-109.5",y:"-19",width:"219",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-99.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"199",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Generate header/footer data"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-G-45",transform:"translate(353,661)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-64",y:"-19",width:"128",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-54,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"108",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Create sitemap"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-H-47",transform:"translate(353,749)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-89",y:"-19",width:"178",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-79,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"158",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Check for broken links"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-N-49",transform:"translate(509.75,855)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-217.5",y:"-19",width:"435",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-207.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"415",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Download assets referenced in Drupal content from Drupal"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-I-51",transform:"translate(353,943)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-63",y:"-19",width:"126",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-53,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"106",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Webpack build"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-J-55",transform:"translate(353,1031)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-229.5",y:"-19",width:"459",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-219.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"439",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Write HTML/CSS/JS and other static files to build output folder"))))),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-L-57",transform:"translate(528,309)",style:{opacity:"1"}}),Object(s.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-146.5",y:"-19",width:"293",height:"38",className:"label-container"})),Object(s.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(s.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-136.5,-9)"}),Object(s.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"273",height:"18"}),Object(s.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Create page objects from query results")))))))))),Object(s.mdx)("p",null,"There are other plugins than the ones listed in this diagram, but these are the most important ones. The process is very similar for Markdown and Drupal content, mostly differing in how the content is initially converted into page objects for Metalsmith to process."),Object(s.mdx)("h2",{id:"metalsmith-code-organization"},"Metalsmith code organization"),Object(s.mdx)("p",null,"Metalsmith related code is located in ",Object(s.mdx)("inlineCode",{parentName:"p"},"src/site"),". Most of the code in that folder are temlates for Drupal content. The build process code is located in ",Object(s.mdx)("inlineCode",{parentName:"p"},"src/site/stages")," which contains Metalsmith plugins and GraphQL queries. "),Object(s.mdx)("h2",{id:"drupal-templates-vs-markdown-templates"},"Drupal templates vs Markdown templates"),Object(s.mdx)("p",null,"Due to the differences in the shape of data in vagov-content vs Drupal, we have two different sets of templates, one for each source. There are some shared templates, but these are largely restricted to the header and footer templates. Drupal related templates end with ",Object(s.mdx)("inlineCode",{parentName:"p"},".drupal.liquid")," and Markdown templates typically end with ",Object(s.mdx)("inlineCode",{parentName:"p"},".html")," or ",Object(s.mdx)("inlineCode",{parentName:"p"},".liquid"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-index-mdx-3edcf5822afcd2d87504.js.map