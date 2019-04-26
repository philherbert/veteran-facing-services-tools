(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),m=a.n(r),s=a(2),i=a.n(s),c=a(4),l=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},i.a.createElement("h1",{id:"run-and-build-vagov"},"Run and build VA.gov"),i.a.createElement("h2",{id:"prerequisite"},"Prerequisite"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Complete the ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/getting-started"}},"first")," step in ",i.a.createElement(c.MDXTag,{name:"em",components:n,parentName:"li"},"Start up guide"),".")),i.a.createElement("h2",{id:"locally-run-vagov"},"Locally run VA.gov"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Start the watch task:"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),i.a.createElement("h3",{id:"build"},"Build"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Metalsmith")," manages this build pipeline. At a high level, this process:",i.a.createElement(c.MDXTag,{name:"ol",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},"retrieves and ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"builds")," all of the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," sourced from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")," or Drupal"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},"starts ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Webpack"),"'s devevelopment server which",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"builds")," the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," bundles, and"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"serves")," the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," bundles and the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"static content")," built by Metalsmith at ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://localhost:3000"}},"http://localhost:3000"))))))),i.a.createElement("h3",{id:"output"},"Output"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Metalsmith")," outputs ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," to",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"build/localhost")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Webpack")," development server has ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"no output"),". ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," are kept in memory.")),i.a.createElement("h3",{id:"watch-and-rebuild"},"Watch and rebuild"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Metalsmith")," will rebuild ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," when changes are saved to ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"templates")," or content in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Webpack")," development server will rebuild when changes are saved to ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," or ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"SCSS")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Both updates require a browser refresh to see changes."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Changes to build process or configuration files are typically not picked up, and require a restart of the watch task to become active.")),i.a.createElement("h2",{id:"locally-build-and-run-for-specific-environment"},"Locally build and run for specific environment"),i.a.createElement(c.MDXTag,{name:"p",components:n},i.a.createElement(c.MDXTag,{name:"em",components:n,parentName:"p"},"Note: most of the time, it's better to use the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"watch")," task to build the site locally since it is the most developer-friendly experience.")),i.a.createElement(c.MDXTag,{name:"table",components:n},i.a.createElement(c.MDXTag,{name:"thead",components:n,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:n,parentName:"thead"},i.a.createElement(c.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Environment"),i.a.createElement(c.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Build Command"),i.a.createElement(c.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Output directory"),i.a.createElement(c.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Run Command"))),i.a.createElement(c.MDXTag,{name:"tbody",components:n,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:n,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"localhost"),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn build")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/localhost")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/localhost"))),i.a.createElement(c.MDXTag,{name:"tr",components:n,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"dev.va.gov"),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn build --buildtype=vagovdev")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/vagovdev")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/vagovdev"))),i.a.createElement(c.MDXTag,{name:"tr",components:n,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"staging.va.gov"),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovstaging")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/vagovstaging")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/vagovstaging"))),i.a.createElement(c.MDXTag,{name:"tr",components:n,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"www.va.gov"),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovprod")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/vagovprod")),i.a.createElement(c.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/vagovprod"))))),i.a.createElement("h3",{id:"build-commands"},"Build commands"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"create")," the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," from the markdown content in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")," repository and data queried from the Drupal API into their ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"output directory")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"create")," the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," files with Webpack into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/generated")," folder in their ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"output directory")," with Webpack")),i.a.createElement(c.MDXTag,{name:"p",components:n},i.a.createElement(c.MDXTag,{name:"em",components:n,parentName:"p"},"Production like builds are required for staging and production environments. ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"em"},"NODE_ENV=production")," environment variable is required to be set when running these build commands")),i.a.createElement("h3",{id:"run-commands"},"Run commands"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"start")," an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"http-server")," that ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"serves")," the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," from the ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"output directory")," at ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://localhost:3001"}},"http://localhost:3001"))),i.a.createElement(c.MDXTag,{name:"p",components:n},i.a.createElement(c.MDXTag,{name:"em",components:n,parentName:"p"},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect.")),i.a.createElement(c.MDXTag,{name:"p",components:n},i.a.createElement(c.MDXTag,{name:"em",components:n,parentName:"p"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"em"},"Deep-linking")," to urls that are rendered by ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"em"},"React")," apps on VA.gov ",i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"em"},"will not work")," when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"watch")," task)")),i.a.createElement("h2",{id:"related-source"},"Related source"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops"}},"Metalsmith build script")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/webpack.dev.config.js"}},"Webpack development server config"))))},n}(i.a.Component),u={}},340:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),r=a(13),m=a.n(r),s=a(68),i=a.n(s);a.d(n,"a",function(){return i.a});a(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,a){var t;e.exports=(t=a(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),r=a(2),m=a.n(r),s=a(13),i=a.n(s),c=a(94),l=a(9),p=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?m.a.createElement(c.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=p},345:function(e,n,a){"use strict";var t=a(3),o=a.n(t),r=a(343),m=a(2),s=a.n(m),i=a(13),c=a.n(i),l=a(348),p=a.n(l),d=a(340),u=(a(17),a(133),a(134),a(341)),g=a.n(u),h=a(18),v=a.n(h),f=a(349),E=a.n(f),b=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=g.a.sections.reduce(function(e,n){var a;return v()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return s.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),s.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(s.a.Component),N=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(b,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(s.a.Component),D=(a(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(N,{location:a}),n)},data:r})},n}(s.a.Component));D.propTypes={children:c.a.node.isRequired};n.a=D},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),m=a.n(r),s=a(345),i=(a(133),a(134),a(135),a(17),a(346)),c=a(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),u=a.n(d);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-run-build-mdx-b531f9ecfd69466ae403.js.map