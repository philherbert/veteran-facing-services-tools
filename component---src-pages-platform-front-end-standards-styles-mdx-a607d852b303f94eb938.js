(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),i=n.n(a),o=n("Wbzz");function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function r(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,{isSublist:!0,items:e.items})):i.a.createElement(l,{item:e,key:e.name})}))):null}var s=n("MEl4"),c=n.n(s);function b(e){var t=e.location,n=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(r,{items:n.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var d=n("8FPV");function u(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(d.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(b,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:a.sourceUrl}))))}},Phrt:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("3dLD"),l={},r={_frontmatter:l},s=o.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"guidelines-for-good-scss--css"},"Guidelines for good SCSS / CSS"),Object(i.b)("p",null,"Some guidelines for writing good CSS that scales well and doesn't make your colleagues ragey."),Object(i.b)("h2",{id:"use-low-specificity-selectors"},"Use low-specificity selectors"),Object(i.b)("p",null,"The more specific the selector is, the less reusable the accompanying CSS is and/or the longer a selector you need to override it. (Or you add ",Object(i.b)("inlineCode",{parentName:"p"},"!important")," in places you shouldn't.)"),Object(i.b)("p",null,"The following should be used sparingly in CSS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id")," selectors."),Object(i.b)("li",{parentName:"ul"},"Complex element/type selectors with attributes such as ",Object(i.b)("inlineCode",{parentName:"li"},"button[type=button]")," and ",Object(i.b)("inlineCode",{parentName:"li"},"input[type=text]"),"."),Object(i.b)("li",{parentName:"ul"},"Descendant combinators such as ",Object(i.b)("inlineCode",{parentName:"li"},"#main ol li ul")," or ",Object(i.b)("inlineCode",{parentName:"li"},".process p a"),"."),Object(i.b)("li",{parentName:"ul"},"Chaining class names. ",Object(i.b)("inlineCode",{parentName:"li"},"button")," and ",Object(i.b)("inlineCode",{parentName:"li"},"button.lg"),")")),Object(i.b)("p",null,"High specificity selectors are more likely to create side effects, that have to be undone with more CSS rules or longer selectors."),Object(i.b)("h2",{id:"avoid-nesting-scss-selectors-prematurely"},"Avoid nesting SCSS selectors prematurely"),Object(i.b)("p",null,"SCSS compiles nested selectors into descendant combinators. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#content {\n  ol {\n    p {}\n  }\n}\n")),Object(i.b)("p",null,"Compiles to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#content ol p {}\n")),Object(i.b)("p",null,"There's a high likelihood, however that your selectors don't need to be that long; ",Object(i.b)("inlineCode",{parentName:"p"},"ol p")," would provide the same styling. If the worry is being overly broad, you can get the same results using a class name. This is related to the previous point. Specific selectors are often caused by SCSS nesting."),Object(i.b)("p",null,"Nesting selectors can be useful, however, when creating variants. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},".button {\n  &-link {\n  }\n}\n")),Object(i.b)("p",null,"Compiles to ",Object(i.b)("inlineCode",{parentName:"p"},"button-link"),"."),Object(i.b)("h2",{id:"restrict-class-names-to-a-single-pattern-or-component-type"},"Restrict class names to a single pattern or component type."),Object(i.b)("p",null,"For example, don't use ",Object(i.b)("inlineCode",{parentName:"p"},".process")," for lists ",Object(i.b)("em",{parentName:"p"},"and")," as a ",Object(i.b)("inlineCode",{parentName:"p"},"div")," or ",Object(i.b)("inlineCode",{parentName:"p"},"section")," type. Rules you introduce for ",Object(i.b)("inlineCode",{parentName:"p"},"div.process")," probably aren't related to those for ",Object(i.b)("inlineCode",{parentName:"p"},"ol.process"),". Instead use ",Object(i.b)("inlineCode",{parentName:"p"},".list-process")," and ",Object(i.b)("inlineCode",{parentName:"p"},".section-process"),"."),Object(i.b)("h2",{id:"favor-descriptive-class-names-that-describe-what-the-class-does-or-the-kind-of-content-it-affects"},"Favor descriptive class names that describe what the class does or the kind of content it affects"),Object(i.b)("p",null,"Class names such as ",Object(i.b)("inlineCode",{parentName:"p"},".primary"),", or ",Object(i.b)("inlineCode",{parentName:"p"},".section")," are confusing and more likely to be misused by a colleague than ",Object(i.b)("inlineCode",{parentName:"p"},".intro-text")," or ",Object(i.b)("inlineCode",{parentName:"p"},".sidebar"),"."),Object(i.b)("h2",{id:"use-a-product-specific-prefix-to-avoid-class-name-collisions"},"Use a product-specific prefix to avoid class name collisions"),Object(i.b)("p",null,"This keeps selector specificity low, while also restricting the side-effects of any one selector."),Object(i.b)("h2",{id:"dont-use-extend"},"Don't use @extend"),Object(i.b)("p",null,"SCSS ",Object(i.b)("inlineCode",{parentName:"p"},"@extend")," repeats every instance of the extended selector for the extendee selector. (This will be flagged by our Sass-lint configuration.)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"h4 {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\nlabel {\n  @extend h4;\n  cursor: pointer;\n}\n\n.footer h4 {\n  display: inline;\n}\n")),Object(i.b)("p",null,"Compiles to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"h4, label {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100; }\n\nlabel {\n  cursor: pointer; }\n\n.footer h4, .footer label {\n  display: inline; }\n")),Object(i.b)("p",null,"Every instance of ",Object(i.b)("inlineCode",{parentName:"p"},"h4")," will also be applied to ",Object(i.b)("inlineCode",{parentName:"p"},"label"),". This is usually not the behavior we want, particularly across an entire code base."),Object(i.b)("h1",{id:"check-your-output"},"CHECK. YOUR. OUTPUT."),Object(i.b)("p",null,"Periodially check your generated CSS files (JavaScript too!) to ensure that you didn't introduce bloat with your selectors or asset imports."),Object(i.b)("p",null,"True story: we reduced the size of our home page CSS by ~400K by removing SVG fonts. Our Webpack configuration included base64-encoded versions of SVG fonts which dramatically inflated our file size. This fact was discovered only after viewing the generated CSS files."))}c.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-styles-mdx-a607d852b303f94eb938.js.map