(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{327:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),i=t(2),c=t.n(i),m=t(4),l=t(347),d={},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,t),components:n},c.a.createElement("h1",{id:"guidelines-for-good-scss--css"},"Guidelines for good SCSS / CSS"),c.a.createElement(m.MDXTag,{name:"p",components:n},"Some guidelines for writing good CSS that scales well and doesn't make your colleagues ragey."),c.a.createElement("h2",{id:"use-low-specificity-selectors"},"Use low-specificity selectors"),c.a.createElement(m.MDXTag,{name:"p",components:n},"The more specific the selector is, the less reusable the accompanying CSS is and/or the longer a selector you need to override it. (Or you add ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"!important")," in places you shouldn't.)"),c.a.createElement(m.MDXTag,{name:"p",components:n},"The following should be used sparingly in CSS"),c.a.createElement(m.MDXTag,{name:"ul",components:n},c.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"id")," selectors."),c.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Complex element/type selectors with attributes such as ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button[type=button]")," and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"input[type=text]"),"."),c.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Descendant combinators such as ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"#main ol li ul")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".process p a"),"."),c.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Chaining class names. ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button")," and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button.lg"),")")),c.a.createElement(m.MDXTag,{name:"p",components:n},"High specificity selectors are more likely to create side effects, that have to be undone with more CSS rules or longer selectors."),c.a.createElement("h2",{id:"avoid-nesting-scss-selectors-prematurely"},"Avoid nesting SCSS selectors prematurely"),c.a.createElement(m.MDXTag,{name:"p",components:n},"SCSS compiles nested selectors into descendant combinators. For example:"),c.a.createElement(m.MDXTag,{name:"pre",components:n},c.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"#content {\n  ol {\n    p {}\n  }\n}\n")),c.a.createElement(m.MDXTag,{name:"p",components:n},"Compiles to:"),c.a.createElement(m.MDXTag,{name:"pre",components:n},c.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"#content ol p {}\n")),c.a.createElement(m.MDXTag,{name:"p",components:n},"There's a high likelihood, however that your selectors don't need to be that long; ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ol p")," would provide the same styling. If the worry is being overly broad, you can get the same results using a class name. This is related to the previous point. Specific selectors are often caused by SCSS nesting."),c.a.createElement(m.MDXTag,{name:"p",components:n},"Nesting selectors can be useful, however, when creating variants. For example:"),c.a.createElement(m.MDXTag,{name:"pre",components:n},c.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".button {\n  &-link {\n  }\n}\n")),c.a.createElement(m.MDXTag,{name:"p",components:n},"Compiles to ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"button-link"),"."),c.a.createElement("h2",{id:"restrict-class-names-to-a-single-pattern-or-component-type"},"Restrict class names to a single pattern or component type."),c.a.createElement(m.MDXTag,{name:"p",components:n},"For example, don't use ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".process")," for lists ",c.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"and")," as a ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"section")," type. Rules you introduce for ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div.process")," probably aren't related to those for ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ol.process"),". Instead use ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".list-process")," and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".section-process"),"."),c.a.createElement("h2",{id:"favor-descriptive-class-names-that-describe-what-the-class-does-or-the-kind-of-content-it-affects"},"Favor descriptive class names that describe what the class does or the kind of content it affects"),c.a.createElement(m.MDXTag,{name:"p",components:n},"Class names such as ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".primary"),", or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".section")," are confusing and more likely to be misused by a colleague than ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".intro-text")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".sidebar"),"."),c.a.createElement("h2",{id:"use-a-product-specific-prefix-to-avoid-class-name-collisions"},"Use a product-specific prefix to avoid class name collisions"),c.a.createElement(m.MDXTag,{name:"p",components:n},"This keeps selector specificity low, while also restricting the side-effects of any one selector."),c.a.createElement("h2",{id:"dont-use-extend"},"Don't use @extend"),c.a.createElement(m.MDXTag,{name:"p",components:n},"SCSS ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@extend")," repeats every instance of the extended selector for the extendee selector. (This will be flagged by our Sass-lint configuration.)"),c.a.createElement(m.MDXTag,{name:"pre",components:n},c.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"h4 {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\nlabel {\n  @extend h4;\n  cursor: pointer;\n}\n\n.footer h4 {\n  display: inline;\n}\n")),c.a.createElement(m.MDXTag,{name:"p",components:n},"Compiles to:"),c.a.createElement(m.MDXTag,{name:"pre",components:n},c.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"h4, label {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100; }\n\nlabel {\n  cursor: pointer; }\n\n.header h4, .header label {\n  font-weight: bold; }\n\n.footer h4, .footer label {\n  display: inline; }\n")),c.a.createElement(m.MDXTag,{name:"p",components:n},"Every instance of ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h4")," will also be applied to ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"label"),". This is usually not the behavior we want, particularly across an entire code base."),c.a.createElement("h1",{id:"check-your-output"},"CHECK. YOUR. OUTPUT."),c.a.createElement(m.MDXTag,{name:"p",components:n},"Periodially check your generated CSS files (JavaScript too!) to ensure that you didn't introduce bloat with your selectors or asset imports."),c.a.createElement(m.MDXTag,{name:"p",components:n},"True story: we reduced the size of our home page CSS by ~400K by removing SVG fonts. Our Webpack configuration included base64-encoded versions of SVG fonts which dramatically inflated our file size. This fact was discovered only after viewing the generated CSS files."))},n}(c.a.Component),u={}},340:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(2),o=t.n(a),r=t(13),s=t.n(r),i=t(68),c=t.n(i);t.d(n,"a",function(){return c.a});t(342);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,t){var a;e.exports=(a=t(344))&&a.default||a},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),s=t.n(r),i=t(13),c=t.n(i),m=t(94),l=t(9),d=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?s.a.createElement(m.a,o()({location:n,pageResources:t},t.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=d},345:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(343),s=t(2),i=t.n(s),c=t(13),m=t.n(c),l=t(348),d=t.n(l),p=t(340),u=(t(17),t(133),t(134),t(341)),h=t.n(u),g=t(18),f=t.n(g),v=t(349),b=t.n(v),E=function(e){function n(n){var t;return(t=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var t;return f()(((t={})[n.id]=!1,t),e)},{}),t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,t=n.open,a=n.onClose,o=n.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return i.a.createElement("div",{key:n.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[n.id]=!e.state[n.id],t))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),i.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(p.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(i.a.Component),y=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={navOpen:!1},t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(i.a.Component),w=(t(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return i.a.createElement(p.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:t}),n)},data:r})},n}(i.a.Component));w.propTypes={children:m.a.node.isRequired};n.a=w},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),i=t(345),c=(t(133),t(134),t(135),t(17),t(346)),m=t(340);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=t(341),u=t.n(p);function h(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-styles-mdx-a2f161c09f8a7a48cada.js.map