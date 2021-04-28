(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"368K":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a("zLVn"),n=(a("q1tI"),a("7ljp")),i=a("3dLD"),s={},o={_frontmatter:s},c=i.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"page-and-application-javascript-structure"},"Page and application Javascript structure"),Object(n.b)("p",null,"In this doc we'll go over how a page on VA.gov is related to the application code located in vets-website."),Object(n.b)("h2",{id:"javascript-bundles-and-static-pages"},"Javascript bundles and static pages"),Object(n.b)("p",null,"If you look at the source for the ",Object(n.b)("inlineCode",{parentName:"p"},"/my-va")," page when running locally you'll see a group of three script tags:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<script defer nomodule="" src="/generated/polyfills.entry.js"><\/script>\n<script defer src="/generated/vendor.entry.js"><\/script>\n<script defer src="/generated/dashboard.entry.js"><\/script>\n')),Object(n.b)("p",null,"The vendor and polyfills bundles are on every page, but the dashboard bundle is specific to this particular React app. In the source for the ",Object(n.b)("inlineCode",{parentName:"p"},"/my-va")," page, you'll see this frontmatter:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-md"},"---\ntitle: My VA\nlayout: page-react.html\nentryname: dashboard\n---\n")),Object(n.b)("p",null,"When this page is built, the ",Object(n.b)("inlineCode",{parentName:"p"},"entryname")," property tells our build process how to construct the path for the third script tag in the above group. For pages that don't have an ",Object(n.b)("inlineCode",{parentName:"p"},"entryname"),", the ",Object(n.b)("inlineCode",{parentName:"p"},"static-pages")," bundle will be used."),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"vets-website"),", there will be a manifest.json (or manifest.js) file with a matching entry name. In this case we can search for ",Object(n.b)("inlineCode",{parentName:"p"},"entryName: 'dashboard'")," and find ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/manifest.js"},"src/applications/personalization/dashboard/manifest.js"),". The ",Object(n.b)("inlineCode",{parentName:"p"},"entryFile")," property in the manifest will tell you the entry point for this application, the file that Webpack uses as its entry for creating the ",Object(n.b)("inlineCode",{parentName:"p"},"dashboard")," bundle."),Object(n.b)("h2",{id:"structure-of-a-page"},"Structure of a page"),Object(n.b)("p",null,"A typical application page has several independent React components. Here's an abbreviated screenshot of the ",Object(n.b)("inlineCode",{parentName:"p"},"/my-va")," page:"),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}},"\n      ",Object(n.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/b89ec7483fb9918cb0868e6ad9a341a1/94829/react-mount-points.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(n.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.1891891891892%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpklEQVQ4y2WP/U8adxzHL0uX7AdSH2YntQjFdSoHx+MNOGQiUGdEKaAgGEmNbnZRnmyz6dwSm3TSH8Q9pGu6ZV3MqDqt3W9Lmsb9EY211qpk6dPQTh6EO0BPjtv3aJu57pNX3ve+z/fzvs99If/F7z1j3w2NTQ59ERoYCQ2Mhj4a/cY98u25L6/4L171jV/xXfohMDh6SSYNoYopjWZSpQyJhZ/2+T//OgxBVU1VaBei65FjbWxpxwm0682TzUe4hjeq9RBHf4RrhLjGKq5OLDGL5DaRxFInMiNSK7sSK5d0QHyZTYWYtNpundaJYQ65wqpW22UyiwbrwtQOWGgSCE1CuFUkaIHrmmXidhVq02IOtL5ZYeiFHj96FlleW7+39ueDDUDk/vor3QRmY+Xh5spDoBv3i7q6sfkgElldjyyvPn0ShWi6kNnajm1GstEojafpdOoQuy81VSSZoMl9+lBBBYJ4srxy9+69tdW1vUw2m8az+CsYT5C5HEWSFEWR8Ti5EwOZQp4qUAVQTDj9V3QnmYrFElvbfyeSu+ALRIYBJzJAD/L5F3vyOJ5PJhlXKPy7Of7o8dOt59HoNvPcfk7/v4rTTDiR+E+YIgg8uhXfTcfiidhOPJHYzeZy4JfoF7wWfm0zlU6lnkWjcTyWTB+QJLm/v7e3B25YOFzglaYPUqmDGHNnmqLoYhuiSZJOJelchs4QDNkiBM6QwV8aAGgm48zA4c39Fya9/gmP/yvfcNAXCALvC0z4h4PeQNDD+CDoFwcmQMc7fNk7HAycv3zON+EZvwqxqvVSuRVudNeg9hNiS0VdK1/RWaPorITbWfzTXKmtXu0C/i2uHpzWqV21KidPaj12vKESdUIcxILqe+VWP7fBfRSxcTQ9KlvgPUN/qaSjQuFAz3gBbKWrVGKrNfbLzR4wUC7trIFN9YZ+iA23ozr3+1b/SU0PS2DmaXoM3Z8p2gbZqKMMsX5gP8/XuktFFuCBEX84UKV0liNWXm3LKV0vVCk0q1s+FrYNHUOdZXJHtfYs5rjQ2D2CmAbfRp0i01CJ1H5U0slCrMLWQb177B2lq0TSwRW0vtvUB5Vy9ZjK3tj2ieZ0n7ihu0ZqU+jOilQuscbFgU2wsqta2F5xqpnFaRIonQjmKuEZy3jG42yMr3RCv82Elxbnlm7O/rE4d2f+xtLC7O35X6amxm9c++nXH3++NR1enA4vXJ++Mz8DTm/PhYFZWpj5/ebc9enZfwBu1IJoEadOegAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with red boxes drawn around React mount points",title:"Abbreviated dashboard with red boxes drawn around React mount points",src:"/static/b89ec7483fb9918cb0868e6ad9a341a1/94829/react-mount-points.png",srcSet:["/static/b89ec7483fb9918cb0868e6ad9a341a1/a2ead/react-mount-points.png 259w","/static/b89ec7483fb9918cb0868e6ad9a341a1/6b9fd/react-mount-points.png 518w","/static/b89ec7483fb9918cb0868e6ad9a341a1/94829/react-mount-points.png 878w"],sizes:"(max-width: 878px) 100vw, 878px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(n.b)("p",null,"Each of the areas marked with a red box is a separately mounted React component. These React components shared a common Redux store:"),Object(n.b)("div",{className:"mermaid","data-processed":"true"},Object(n.b)("svg",{parentName:"div",id:"mermaid-1619623755386",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"142",style:{maxWidth:"813px"},viewBox:"0 0 813 142"},Object(n.b)("style",{parentName:"svg"},'#mermaid-1619623755386{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-1619623755386 .error-icon{fill:#552222;}#mermaid-1619623755386 .error-text{fill:#552222;stroke:#552222;}#mermaid-1619623755386 .edge-thickness-normal{stroke-width:2px;}#mermaid-1619623755386 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1619623755386 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1619623755386 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1619623755386 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1619623755386 .marker{fill:#333333;stroke:#333333;}#mermaid-1619623755386 .marker.cross{stroke:#333333;}#mermaid-1619623755386 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1619623755386 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-1619623755386 .cluster-label text{fill:#333;}#mermaid-1619623755386 .cluster-label span{color:#333;}#mermaid-1619623755386 .label text,#mermaid-1619623755386 span{fill:#333;color:#333;}#mermaid-1619623755386 .node rect,#mermaid-1619623755386 .node circle,#mermaid-1619623755386 .node ellipse,#mermaid-1619623755386 .node polygon,#mermaid-1619623755386 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1619623755386 .node .label{text-align:center;}#mermaid-1619623755386 .node.clickable{cursor:pointer;}#mermaid-1619623755386 .arrowheadPath{fill:#333333;}#mermaid-1619623755386 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1619623755386 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1619623755386 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1619623755386 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1619623755386 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1619623755386 .cluster text{fill:#333;}#mermaid-1619623755386 .cluster span{color:#333;}#mermaid-1619623755386 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1619623755386:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-1619623755386 flowchart{fill:apa;}'),Object(n.b)("g",{parentName:"svg"},Object(n.b)("g",{parentName:"g",className:"output"},Object(n.b)("g",{parentName:"g",className:"clusters"}),Object(n.b)("g",{parentName:"g",className:"edgePaths"},Object(n.b)("g",{parentName:"g",className:"edgePath LS-B LE-A",id:"L-B-A",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M74,46L74,50.166666666666664C74,54.333333333333336,74,62.666666666666664,110.125,72.7258263824529C146.25,82.78498609823912,218.5,94.56997219647822,254.625,100.46246524559778L290.75,106.35495829471733",markerEnd:"url(#arrowhead10)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead10",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-C LE-A",id:"L-C-A",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M253,46L253,50.166666666666664C253,54.333333333333336,253,62.666666666666664,261.59375,71C270.1875,79.33333333333333,287.375,87.66666666666667,295.96875,91.83333333333333L304.5625,96",markerEnd:"url(#arrowhead11)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead11",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-D LE-A",id:"L-D-A",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M434.5,46L434.5,50.166666666666664C434.5,54.333333333333336,434.5,62.666666666666664,425.90625,71C417.3125,79.33333333333333,400.125,87.66666666666667,391.53125,91.83333333333333L382.9375,96",markerEnd:"url(#arrowhead12)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead12",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-F LE-A",id:"L-F-A",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M737,46L737,50.166666666666664C737,54.333333333333336,737,62.666666666666664,680.2916666666666,73.17832167832168C623.5833333333334,83.68997668997669,510.1666666666667,96.37995337995339,453.4583333333333,102.72494172494173L396.75,109.06993006993007",markerEnd:"url(#arrowhead13)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead13",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabels"},Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-B-A",className:"edgeLabel L-LS-B' L-LE-A"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-C-A",className:"edgeLabel L-LS-C' L-LE-A"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-D-A",className:"edgeLabel L-LS-D' L-LE-A"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-F-A",className:"edgeLabel L-LS-F' L-LE-A"})))))),Object(n.b)("g",{parentName:"g",className:"nodes"},Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-A-10",transform:"translate(343.75,115)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-53",y:"-19",width:"106",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-43,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"86",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Redux store"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-B-11",transform:"translate(74,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-66",y:"-19",width:"132",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-56,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"112",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"User navigation"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-C-13",transform:"translate(253,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-63",y:"-19",width:"126",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-53,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"106",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Site navigation"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-D-15",transform:"translate(434.5,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-68.5",y:"-19",width:"137",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-58.5,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"117",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Main application"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-E-17",transform:"translate(586,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-33",y:"-19",width:"66",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-23,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"46",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Footer"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-F-18",transform:"translate(737,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-68",y:"-19",width:"136",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-58,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"116",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Announcements")))))))))),Object(n.b)("p",null,"Static content pages work similarly, except the main content area is not a React component (though it may have one or more React widgets mounted within it)."),Object(n.b)("p",null,"As we covered in the last section, ",Object(n.b)("inlineCode",{parentName:"p"},"/my-va")," uses the ",Object(n.b)("inlineCode",{parentName:"p"},"dashboard")," bundle, the entry file for which is located ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/dashboard-entry.jsx"},"here"),". There's not a lot of code in that file; most of the functionality is abstracted in ",Object(n.b)("inlineCode",{parentName:"p"},"startApp"),". The dashboard passes in a reducer and routes, which is the primary application. In the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L31"},"startApp")," function, we create the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L44"},"common Redux store"),", ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L64"},"start the site-wide components"),", and ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L73"},"mount the primary React application"),":"),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"884px"}},"\n      ",Object(n.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/2c29e5510f94cd872365c26ab28edce3/136a2/sitewide_primary.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(n.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.57528957528957%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpElEQVQ4y41Q629aZRw+XqIxW1wdtWlnR9G40XJpuUNpabmUSy/AgfbQCxQoMOg61y2rOvTTtB1bNxPjH+AH3a3dJ7844wd1VRM/GF1kXTO/jHJbx+2A5RwuB8rxpcSkiTHxyZMnz+99f8/7y++F3gt86g8EPgisfBj46N2VlaXl5XMfL5++dPn85YB/dfXilSsXr3/if//Cslayquu9bpRf08uuqviXls4sXf0M6pAOt/KMnQMOjmS0lTPeLph6+S3dC9Sh56lDz7WrXqSqIaqmhapgsvX0Hrirx3iCbaAzxo7T+tskOkiFOBUSo0Ll0qjnlEqnRDoNtLdvRqlyAgrEFr4IEQgnhDyTgAtLe6dk/VbloG1YCstgG4RhCTTyIPHkQS4axHa2stHgbnyzoYBo+I9Mg5Eg0GxsMxd/lItvZUK/53d3IJIkd56VtiNoJJbLYzUMJ/MY2dA8vm8OEqv9tVsrlmrkPqC9PfLx41zw4Z+PtkK5XLGAV3G8WsArhbrWWSrWiDLZYIUgsTyZSdeTtRoJVSpkIlFG0XQmk00mU+l0BsdxDADH8vuogI4DIAgym/0nXK2SsRgei0cj0XhoOxKOxGq1GvnfAGEUPTD5WaKcyqSTqQwAiqJg8h5Y5n+Gnz6tJtFCMl0sl+rrNZYE6/2b1QpZwA+EiyUilSXQXCWTraRQIp0lgCYzZUBgUmjDNHy9TKTL+WJ5D3wfQUDWs+ftdrfD7ZvzzDs987NzpxwuLzDgxOb02Pc9UKvTDa4apcvlRWwe8+lFqEum62SZuFrfm+KZYxyEwoRZCtfJPvvrbNOht0dO9ju4al8bB3mJpukQTnM1XvqA83iPubVj6DUODDHlY1zpjMru7xpyH2LqW4WTnNF5unLuSDd8lGNma70MtYfCHQclTTbL0p5q5k1Q2AYac7RFMAmxFGNs0WT3yHy7aPJVhr5NYBEbz3KGfceEliNMA39soUNqbWLBTSzjCblTalp8QzzdzDLQGCMtAgvUNTjayUPoOm8zHznKRdokMyLzOaXVz9OfofARls7X1GM+zIJfYRhoAw6e/p3DbBN4tJ2uo/AQSKwzqRX2KeuFCcuiHl4YHHIYTAsS+bRC4+JLp5Qat1Q+2y2cYPJNSq1rRO/rFo3zhSaewEzrs0GhX25tb6xHf1qP/Xw3/ONaeGMtdP/2d3ev/frV58Gvvwzeu/Hw3o3Nb25u318L/XD7yfe3wht36j0b6799+8XfWzqNUCHXv6AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with yellow boxes drawn around site wide components",title:"Abbreviated dashboard with yellow boxes drawn around site wide components",src:"/static/2c29e5510f94cd872365c26ab28edce3/136a2/sitewide_primary.png",srcSet:["/static/2c29e5510f94cd872365c26ab28edce3/a2ead/sitewide_primary.png 259w","/static/2c29e5510f94cd872365c26ab28edce3/6b9fd/sitewide_primary.png 518w","/static/2c29e5510f94cd872365c26ab28edce3/136a2/sitewide_primary.png 884w"],sizes:"(max-width: 884px) 100vw, 884px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(n.b)("p",null,"The components in the yellow boxes are the common site-wide components started by ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/index.js#L26"},"startSitewideComponents")," and the blue box is the primary React application."),Object(n.b)("h2",{id:"structure-of-a-react-application"},"Structure of a React application"),Object(n.b)("p",null,"Our React applications can vary in structure depending on what their purpose is, but typically they have a reducer and actions for Redux related logic and routes and components for the rest of the application. Routes are typically the best place to start looking at an application. Again using ",Object(n.b)("inlineCode",{parentName:"p"},"/my-va")," as an example, you can see the React components to start looking at in the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/routes.jsx"},"routes.jsx")," file:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-jsx"},"import DashboardApp from './containers/DashboardApp';\nimport DashboardAppNew from './containers/DashboardAppNew';\nimport DashboardAppWrapper from './containers/DashboardAppWrapper';\nimport SetPreferences from '../preferences/containers/SetPreferences';\n\nimport environment from 'platform/utilities/environment';\n\nconst component = environment.isProduction() ? DashboardApp : DashboardAppNew;\n\nexport const findBenefitsRoute = {\n  path: 'find-benefits',\n  component: SetPreferences,\n  key: 'find-benefits',\n  name: 'Find VA benefits',\n};\n\nconst routes = {\n  path: '/',\n  component: DashboardAppWrapper,\n  indexRoute: { component },\n  childRoutes: [findBenefitsRoute],\n};\n\nexport default routes;\n")),Object(n.b)("p",null,"There are only two routes in here, but you can see that there's a main ",Object(n.b)("inlineCode",{parentName:"p"},"DashboardAppWrapper")," component and then a ",Object(n.b)("inlineCode",{parentName:"p"},"DashboardApp")," component for the main index route."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx"},"DashboardAppWrapper")," has some important functionality that's common to a lot of our applications. Here's the render method from that component:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-jsx"},'render() {\n  return (\n    <RequiredLoginView\n      serviceRequired={[backendServices.USER_PROFILE]}\n      user={this.props.user}\n    >\n      <DowntimeNotification\n        appTitle="user dashboard"\n        dependencies={[\n          externalServices.mvi,\n          externalServices.mhv,\n          externalServices.appeals,\n        ]}\n        render={this.renderDowntimeNotification}\n      >\n        <Breadcrumbs>\n          {this.renderBreadcrumbs(this.props.location)}\n        </Breadcrumbs>\n\n        {this.props.children}\n      </DowntimeNotification>\n    </RequiredLoginView>\n  );\n}\n')),Object(n.b)("p",null,"Because ",Object(n.b)("inlineCode",{parentName:"p"},"/my-va")," requires a user to be signed in, we wrap all the child content with ",Object(n.b)("inlineCode",{parentName:"p"},"RequiredLoginView"),", which makes sure there's a signed in user and directs the user to sign in if not. Also, since the dashboard uses some internal VA services that may be down at times, it also wraps content in a ",Object(n.b)("inlineCode",{parentName:"p"},"DowntimeNotifications")," component, which will display a message to a user if one of the specified services is down. See the ",Object(n.b)("a",{parentName:"p",href:"/platform/tools/downtime-notifications"},"downtime notifications documentation")," for more information."))}l.isMDXComponent=!0},"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz");function s(e){var t=e.item;return t.href?n.a.createElement("li",{key:t.name},n.a.createElement(i.Link,{to:t.href},t.name)):n.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,a=e.isSublist,r=void 0!==a&&a;return t.length?n.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?n.a.createElement("li",{key:e.name},r&&n.a.createElement(s,{item:e}),!r&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(o,{isSublist:!0,items:e.items})):n.a.createElement(s,{item:e,key:e.name})}))):null}var c=a("MEl4"),l=a.n(c);function m(e){var t=e.location,a=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?n.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},n.a.createElement("div",{className:"site-c-sidenav"},n.a.createElement(o,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",n.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=a("8FPV");function d(e){var t=e.children,a=e.location,r=e.pageContext;return n.a.createElement(b.a,{location:a},n.a.createElement("div",{className:"vads-l-row"},n.a.createElement(m,{location:a}),n.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,n.a.createElement(p,{sourceUrl:r.sourceUrl}))))}},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-application-structure-mdx-6e2b5f49bb177e5711d4.js.map