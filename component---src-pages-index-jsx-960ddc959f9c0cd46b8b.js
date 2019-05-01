(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{277:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a(2),r=a.n(n),i=a(335),s=a(330);function o(e){var t=e.location;return r.a.createElement(i.a,{location:t},r.a.createElement("div",{className:"site-l-wrapper"},r.a.createElement("p",null,"Welcome! This site will help you get set up to work on the front end of VA.gov."),r.a.createElement("ul",null,r.a.createElement("li",null,"If you're looking to get your environment set up, visit our"," ",r.a.createElement(s.a,{to:"/getting-started"},"Getting Started")," section."),r.a.createElement("li",null,"If you're interested in the architecture of VA.gov and how it works, see ",r.a.createElement(s.a,{to:"/architecture"},"Architecture"),"."),r.a.createElement("li",null,"For information about building forms on VA.gov, visit the"," ",r.a.createElement(s.a,{to:"/forms"},"Forms")," section."),r.a.createElement("li",null,"For all other information about the VFS platform (including Formation React components), visit the"," ",r.a.createElement(s.a,{to:"/platform"},"Platform")," section."))))}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(2),r=a.n(n),i=a(13),s=a.n(i),o=a(68),c=a.n(o);a.d(t,"a",function(){return c.a});a(332);var l=r.a.createContext({}),m=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),i=a(2),s=a.n(i),o=a(13),c=a.n(o),l=a(94),m=a(9),d=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},335:function(e,t,a){"use strict";var n=a(3),r=a.n(n),i=a(333),s=a(2),o=a.n(s),c=a(13),l=a.n(c),m=a(338),d=a.n(m),u=a(330),h=(a(17),a(133),a(134),a(331)),f=a.n(h),p=a(18),g=a.n(p),v=a(339),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=f.a.sections.reduce(function(e,t){var a;return g()(((a={})[t.id]=!1,a),e)},{}),a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,r=t.location;return o.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},o.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},o.a.createElement("i",{className:"fas fa-times"})),o.a.createElement("div",{className:"usa-accordion "},f.a.sections.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},o.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),o.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},o.a.createElement("ul",{className:"site-c-mobile-nav-list"},o.a.createElement("li",{className:"site-c-mobile-nav-list__item"},o.a.createElement(u.a,{className:b()("site-c-mobile-nav-list__link",{current:r.pathname===t.href}),to:t.href},"Overview")))))})))},t}(o.a.Component),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return o.a.createElement("div",null,o.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),o.a.createElement("header",{className:"site-c-header",role:"banner"},o.a.createElement("div",{className:"site-l-wrapper"},o.a.createElement("div",{className:"site-c-header__masthead"},o.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},o.a.createElement("em",{className:"site-c-header__logo-text"},o.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},o.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",o.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),o.a.createElement("div",{className:"site-c-header__utility-links"},o.a.createElement("div",{id:"search-container",className:"site-search-container"},o.a.createElement("i",{className:"fas fa-search search-icon"}),o.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),o.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),o.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},o.a.createElement("i",{className:"fas fa-search"})),o.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),o.a.createElement("nav",{className:"site-c-header__nav"},o.a.createElement("ul",{className:"site-c-header__nav-list"},f.a.sections.map(function(e){return o.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},o.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),o.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},o.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),o.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),o.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&o.a.createElement("div",{className:"site-c-overlay is-visible"}),o.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(o.a.Component),y=(a(340),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return o.a.createElement(u.b,{query:"1044757290",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(w,{location:a}),t)},data:i})},t}(o.a.Component));y.propTypes={children:l.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-index-jsx-960ddc959f9c0cd46b8b.js.map