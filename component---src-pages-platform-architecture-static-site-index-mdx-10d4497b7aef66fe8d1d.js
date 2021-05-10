(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"3dLD":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t("q1tI"),n=t.n(r),s=t("Wbzz");function l(e){var a=e.item;return a.href?n.a.createElement("li",{key:a.name},n.a.createElement(s.Link,{to:a.href},a.name)):n.a.createElement("li",{key:a.name},a.name," (future)")}function i(e){var a=e.items,t=e.isSublist,r=void 0!==t&&t;return a.length?n.a.createElement("ul",{className:"site-c-sidenav-list"},a.map((function(e){return e.items?n.a.createElement("li",{key:e.name},r&&n.a.createElement(l,{item:e}),!r&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(i,{isSublist:!0,items:e.items})):n.a.createElement(l,{item:e,key:e.name})}))):null}var m=t("MEl4"),c=t.n(m);function b(e){var a=e.location,t=c.a.sections.find((function(e){return a.pathname.includes(e.href)}));return t?n.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},n.a.createElement("div",{className:"site-c-sidenav"},n.a.createElement(i,{items:t.items}))):null}function o(e){var a=e.sourceUrl;return a?n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",n.a.createElement("a",{href:a},"Edit this page on GitHub")):null}var d=t("8FPV");function p(e){var a=e.children,t=e.location,r=e.pageContext;return n.a.createElement(d.a,{location:t},n.a.createElement("div",{className:"vads-l-row"},n.a.createElement(b,{location:t}),n.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a,n.a.createElement(o,{sourceUrl:r.sourceUrl}))))}},DqKh:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return c}));var r=t("zLVn"),n=(t("q1tI"),t("7ljp")),s=t("3dLD"),l={},i={_frontmatter:l},m=s.a;function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)(m,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"site-build-process"},"Site build process"),Object(n.b)("p",null,"The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator. We take content from two sources, the vagov-content repo and the VA's Drupal CMS, create pages based on that data plus templates, run a series of other plugins, and then output the resulting html pages."),Object(n.b)("h2",{id:"metalsmith-build-flow"},"Metalsmith build flow"),Object(n.b)("div",{className:"mermaid","data-processed":"true"},Object(n.b)("svg",{parentName:"div",id:"mermaid-1620671428760",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"1058",style:{maxWidth:"735.25px"},viewBox:"0 0 735.25 1058"},Object(n.b)("style",{parentName:"svg"},'#mermaid-1620671428760{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-1620671428760 .error-icon{fill:#552222;}#mermaid-1620671428760 .error-text{fill:#552222;stroke:#552222;}#mermaid-1620671428760 .edge-thickness-normal{stroke-width:2px;}#mermaid-1620671428760 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1620671428760 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1620671428760 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1620671428760 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1620671428760 .marker{fill:#333333;stroke:#333333;}#mermaid-1620671428760 .marker.cross{stroke:#333333;}#mermaid-1620671428760 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1620671428760 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-1620671428760 .cluster-label text{fill:#333;}#mermaid-1620671428760 .cluster-label span{color:#333;}#mermaid-1620671428760 .label text,#mermaid-1620671428760 span{fill:#333;color:#333;}#mermaid-1620671428760 .node rect,#mermaid-1620671428760 .node circle,#mermaid-1620671428760 .node ellipse,#mermaid-1620671428760 .node polygon,#mermaid-1620671428760 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1620671428760 .node .label{text-align:center;}#mermaid-1620671428760 .node.clickable{cursor:pointer;}#mermaid-1620671428760 .arrowheadPath{fill:#333333;}#mermaid-1620671428760 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1620671428760 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1620671428760 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1620671428760 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1620671428760 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1620671428760 .cluster text{fill:#333;}#mermaid-1620671428760 .cluster span{color:#333;}#mermaid-1620671428760 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1620671428760:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}'),Object(n.b)("g",{parentName:"svg"},Object(n.b)("g",{parentName:"g",className:"output"},Object(n.b)("g",{parentName:"g",className:"clusters"}),Object(n.b)("g",{parentName:"g",className:"edgePaths"},Object(n.b)("g",{parentName:"g",className:"edgePath LS-1 LE-A",id:"L-1-A",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M290.2641509433962,46L271.55345911949684,51.666666666666664C252.84276729559747,57.333333333333336,215.42138364779873,68.66666666666667,196.71069182389934,80C178,91.33333333333333,178,102.66666666666667,178,108.33333333333333L178,114",markerEnd:"url(#arrowhead69)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead69",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-1 LE-K",id:"L-1-K",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M415.7358490566038,46L434.44654088050316,51.666666666666664C453.15723270440253,57.333333333333336,490.5786163522013,68.66666666666667,509.28930817610063,83.16666666666667C528,97.66666666666667,528,115.33333333333333,528,131.5C528,147.66666666666666,528,162.33333333333334,528,173.83333333333334C528,185.33333333333334,528,193.66666666666666,528,197.83333333333334L528,202",markerEnd:"url(#arrowhead70)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead70",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M178,152L178,156.16666666666666C178,160.33333333333334,178,168.66666666666666,178,177C178,185.33333333333334,178,193.66666666666666,178,197.83333333333334L178,202",markerEnd:"url(#arrowhead71)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead71",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-B LE-C",id:"L-B-C",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M178,240L178,244.16666666666666C178,248.33333333333334,178,256.6666666666667,178,265C178,273.3333333333333,178,281.6666666666667,178,285.8333333333333L178,290",markerEnd:"url(#arrowhead72)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead72",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M178,328L178,332.1666666666667C178,336.3333333333333,178,344.6666666666667,194.57196969696972,353C211.1439393939394,361.3333333333333,244.28787878787878,369.6666666666667,260.8598484848485,373.8333333333333L277.4318181818182,378",markerEnd:"url(#arrowhead73)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead73",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-D LE-E",id:"L-D-E",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M353,416L353,420.1666666666667C353,424.3333333333333,353,432.6666666666667,353,441C353,449.3333333333333,353,457.6666666666667,353,461.8333333333333L353,466",markerEnd:"url(#arrowhead74)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead74",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-E LE-F",id:"L-E-F",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M353,504L353,508.1666666666667C353,512.3333333333334,353,520.6666666666666,353,529C353,537.3333333333334,353,545.6666666666666,353,549.8333333333334L353,554",markerEnd:"url(#arrowhead75)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead75",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-F LE-G",id:"L-F-G",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M353,592L353,596.1666666666666C353,600.3333333333334,353,608.6666666666666,353,617C353,625.3333333333334,353,633.6666666666666,353,637.8333333333334L353,642",markerEnd:"url(#arrowhead76)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead76",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-G LE-H",id:"L-G-H",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M353,680L353,684.1666666666666C353,688.3333333333334,353,696.6666666666666,353,705C353,713.3333333333334,353,721.6666666666666,353,725.8333333333334L353,730",markerEnd:"url(#arrowhead77)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead77",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-H LE-N",id:"L-H-N",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M409.1933962264151,768L425.95283018867923,773.6666666666666C442.7122641509434,779.3333333333334,476.23113207547175,790.6666666666666,492.99056603773585,802C509.75,813.3333333333334,509.75,824.6666666666666,509.75,830.3333333333334L509.75,836",markerEnd:"url(#arrowhead78)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead78",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-H LE-I",id:"L-H-I",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M296.8066037735849,768L280.04716981132077,773.6666666666666C263.2877358490566,779.3333333333334,229.7688679245283,790.6666666666666,213.00943396226413,805.1666666666666C196.25,819.6666666666666,196.25,837.3333333333334,196.25,853.5C196.25,869.6666666666666,196.25,884.3333333333334,211.875,896.0526315789474C227.5,907.7719298245614,258.75,916.5438596491227,274.375,920.9298245614035L290,925.3157894736842",markerEnd:"url(#arrowhead79)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead79",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-N LE-I",id:"L-N-I",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M509.75,874L509.75,878.1666666666666C509.75,882.3333333333334,509.75,890.6666666666666,494.125,899.219298245614C478.5,907.7719298245614,447.25,916.5438596491227,431.625,920.9298245614035L416,925.3157894736842",markerEnd:"url(#arrowhead80)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead80",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-I LE-J",id:"L-I-J",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M353,962L353,966.1666666666666C353,970.3333333333334,353,978.6666666666666,353,987C353,995.3333333333334,353,1003.6666666666666,353,1007.8333333333334L353,1012",markerEnd:"url(#arrowhead81)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead81",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-K LE-L",id:"L-K-L",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M528,240L528,244.16666666666666C528,248.33333333333334,528,256.6666666666667,528,265C528,273.3333333333333,528,281.6666666666667,528,285.8333333333333L528,290",markerEnd:"url(#arrowhead82)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead82",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-L LE-D",id:"L-L-D",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M528,328L528,332.1666666666667C528,336.3333333333333,528,344.6666666666667,511.4280303030303,353C494.85606060606057,361.3333333333333,461.7121212121212,369.6666666666667,445.1401515151515,373.8333333333333L428.5681818181818,378",markerEnd:"url(#arrowhead83)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead83",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabels"},Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(178,80)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-106.5,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"213",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"213",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-1-A",className:"edgeLabel L-LS-1' L-LE-A"},"Markdown from vagov-content"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(528,133)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-52,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"104",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"104",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-1-K",className:"edgeLabel L-LS-1' L-LE-K"},"Drupal content"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-B-C",className:"edgeLabel L-LS-B' L-LE-C"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-D-E",className:"edgeLabel L-LS-D' L-LE-E"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-E-F",className:"edgeLabel L-LS-E' L-LE-F"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-F-G",className:"edgeLabel L-LS-F' L-LE-G"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-G-H",className:"edgeLabel L-LS-G' L-LE-H"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(509.75,802)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-48,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"96",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"96",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-H-N",className:"edgeLabel L-LS-H' L-LE-N"},"Drupal pages"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(196.25,855)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-61,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"122",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"122",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-H-I",className:"edgeLabel L-LS-H' L-LE-I"},"Markdown pages"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-N-I",className:"edgeLabel L-LS-N' L-LE-I"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-I-J",className:"edgeLabel L-LS-I' L-LE-J"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-K-L",className:"edgeLabel L-LS-K' L-LE-L"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-L-D",className:"edgeLabel L-LS-L' L-LE-D"})))))),Object(n.b)("g",{parentName:"g",className:"nodes"},Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-1-30",transform:"translate(353,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-98.5",y:"-19",width:"197",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-88.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"177",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Metalsmith build pipeline"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-A-31",transform:"translate(178,133)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-170",y:"-19",width:"340",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-160,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"320",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Create page objects from each Markdown file"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-K-33",transform:"translate(528,221)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-192.5",y:"-19",width:"385",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-182.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"365",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Query Drupal via GraphQL or fetch from local cache"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-B-35",transform:"translate(178,221)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-102.5",y:"-19",width:"205",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-92.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"185",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Convert Markdown to html"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-C-37",transform:"translate(178,309)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-153.5",y:"-19",width:"307",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-143.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"287",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Generate sidebars for Markdown content"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-D-39",transform:"translate(353,397)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-128",y:"-19",width:"256",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-118,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"236",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Add local static assets to pipeline"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-E-41",transform:"translate(353,485)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-136.5",y:"-19",width:"273",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-126.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"253",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Apply layout templates to page data"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-F-43",transform:"translate(353,573)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-109.5",y:"-19",width:"219",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-99.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"199",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Generate header/footer data"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-G-45",transform:"translate(353,661)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-64",y:"-19",width:"128",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-54,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"108",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Create sitemap"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-H-47",transform:"translate(353,749)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-89",y:"-19",width:"178",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-79,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"158",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Check for broken links"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-N-49",transform:"translate(509.75,855)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-217.5",y:"-19",width:"435",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-207.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"415",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Download assets referenced in Drupal content from Drupal"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-I-51",transform:"translate(353,943)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-63",y:"-19",width:"126",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-53,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"106",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Webpack build"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-J-55",transform:"translate(353,1031)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-229.5",y:"-19",width:"459",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-219.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"439",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Write HTML/CSS/JS and other static files to build output folder"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-L-57",transform:"translate(528,309)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-146.5",y:"-19",width:"293",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-136.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"273",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Create page objects from query results")))))))))),Object(n.b)("p",null,"There are other plugins than the ones listed in this diagram, but these are the most important ones. The process is very similar for Markdown and Drupal content, mostly differing in how the content is initially converted into page objects for Metalsmith to process."),Object(n.b)("h2",{id:"metalsmith-code-organization"},"Metalsmith code organization"),Object(n.b)("p",null,"Metalsmith related code is located in ",Object(n.b)("inlineCode",{parentName:"p"},"src/site"),". Most of the code in that folder are temlates for Drupal content. The build process code is located in ",Object(n.b)("inlineCode",{parentName:"p"},"src/site/stages")," which contains Metalsmith plugins and GraphQL queries. "),Object(n.b)("h2",{id:"drupal-templates-vs-markdown-templates"},"Drupal templates vs Markdown templates"),Object(n.b)("p",null,"Due to the differences in the shape of data in vagov-content vs Drupal, we have two different sets of templates, one for each source. There are some shared templates, but these are largely restricted to the header and footer templates. Drupal related templates end with ",Object(n.b)("inlineCode",{parentName:"p"},".drupal.liquid")," and Markdown templates typically end with ",Object(n.b)("inlineCode",{parentName:"p"},".html")," or ",Object(n.b)("inlineCode",{parentName:"p"},".liquid"),"."))}c.isMDXComponent=!0},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-index-mdx-10d4497b7aef66fe8d1d.js.map