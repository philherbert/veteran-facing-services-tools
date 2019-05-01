(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{332:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),s=a(3),r=a.n(s),i=a(2),m=a.n(i),c=a(4),l=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},m.a.createElement("h1",{id:"css-general-info"},"CSS General Info"),m.a.createElement("h2",{id:"background"},"Background"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Written in ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://sass-lang.com/"}},"Sass")," using the ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html"}},"SCSS")," syntax",m.a.createElement(c.MDXTag,{name:"blockquote",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. In addition, SCSS understands most CSS hacks and vendor-specific syntax, such as IE's old filter syntax. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension."))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Files resides in ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/sass"}},"src/sass")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Frameworks and libraries include:",m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://designsystem.digital.gov/"}},"U.S. Web Design System (USWDS)"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/uswds/uswds"}},"GitHub Repo")))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://foundation.zurb.com/sites/docs/v/5.5.3/"}},"Foundation"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Included only partially, for grid and responsive utilities"),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Using Foundation classes should be avoided as we plan to remove it eventually."))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://fontawesome.io/"}},"Font Awesome")))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Compiled to CSS using Webpack")),m.a.createElement("h2",{id:"directory-structure"},"Directory structure"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"root/"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Site-wide style is defined in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Includes global imports, such as our frameworks and libraries"))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Temporary style lives in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_shame.scss")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Other files at the root-level are considered page-specific"),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"base/"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains site-wide styles and overrides that will be imported into ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_b-variables.scss")," - site-wide colors and units, many of which are from USWDS."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_va.scss")," - Site-wide style declarations for global components/elements"),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_b-breakpoints.scss")," - This is used to reconcile naming conflicts and differing responsive breakpoints between USWDS and Foundation."))))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"modules/"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains site-wide styles for individual components that are generally reusable across the website."))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Other folders",m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Generally used only for specific applications/pages of the website that are organized in a directory rather than a single file.")))))),m.a.createElement("h1",{id:"webpackcompilation"},"Webpack/Compilation"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Sass is configured and compiled into CSS via Webpack",m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Configuration at ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"config/webpack.config.js")))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Website is broken into a series of entry files, one of which is the site-wide file, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),", while the rest are entry points for applications defined as ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"JSX")," files."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Site-wide style is compiled into ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/generated/style.css"),", which is linked to in the header of the website and therefore available on all pages."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"An import statement within a JavaScript file is used to include style for a specific application. You should also define your application's entry point in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryPoint")," map of the Webpack configuration, so that your application's code and style are not included in every page. The key you use to define your application's entry point in that map will also be used as the file name for the generated JavaScript as well as CSS. Files in the content directory can then define an ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryname")," property to link to those files.")),m.a.createElement("h2",{id:"example-application"},"Example Application"),m.a.createElement("h5",{id:"configwebpackconfigjs"},"config/webpack.config.js"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const entryFiles = {\n  // ...\n  'my-application': './src/applications/my-application/entry.jsx'\n  // ...\n")),m.a.createElement("h5",{id:"contentsomewheresome-applicationmd"},"content/somewhere/some-application.md"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'---\ntitle: My Application\nlayout: page-react.html\nentryname: my-application\n---\n<p> Some content</p>\n<div id="react-entry"></div>\n')),m.a.createElement("h5",{id:"srcapplicationsmy-applicationentryjsx"},"src/applications/my-application/entry.jsx"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// Our Webpack configuration will use the file extension to determine how to handle that import, which in our case is to compile it into a CSS file.\nimport '../../sass/my-application.scss';\n")),m.a.createElement("h2",{id:"static-assets"},"Static Assets"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/assets/")," directory is used for storing images, fonts, and other files you may want to have reside outside of the Webpack build system. During build time, the contents of that directory will be moved as-is to the build output, so ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/assets/js/something.js")," will be moved to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/build/development/js/something.js"),", which means it can be linked to in the website with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/js/something.js"),"."),m.a.createElement("h1",{id:"roadmap-ahead"},"Roadmap Ahead"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Keep up-to-date with USWDS",m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://designsystem.digital.gov/whats-new/"}},"What's New")))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Foundation needs to go entirely. We should opt for the USWDS grid system or Flexbox instead."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Reduce the shame file")))},n}(m.a.Component),u={}},340:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),s=a(13),r=a.n(s),i=a(68),m=a.n(i);a.d(n,"a",function(){return m.a});a(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,a){var t;e.exports=(t=a(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),s=a(2),r=a.n(s),i=a(13),m=a.n(i),c=a(94),l=a(9),p=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?r.a.createElement(c.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},n.default=p},345:function(e,n,a){"use strict";var t=a(3),o=a.n(t),s=a(343),r=a(2),i=a.n(r),m=a(13),c=a.n(m),l=a(348),p=a.n(l),d=a(340),u=(a(17),a(133),a(134),a(341)),h=a.n(u),g=a(18),f=a.n(g),v=a(349),E=a.n(v),b=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var a;return f()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return i.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return i.a.createElement("div",{key:n.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),i.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(i.a.Component),y=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(b,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(i.a.Component),N=(a(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:a}),n)},data:s})},n}(i.a.Component));N.propTypes={children:c.a.node.isRequired};n.a=N},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),s=a(13),r=a.n(s),i=a(345),m=(a(133),a(134),a(135),a(17),a(346)),c=a(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),u=a.n(d);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var n=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return g}),g.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-styling-overview-mdx-724b98a53c4d20796aba.js.map