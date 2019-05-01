(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),s=n.n(r),i=n(2),m=n.n(i),c=n(4),l=n(345),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},m.a.createElement("h1",{id:"vetsgov-front-end-best-practices-wip"},"vets.gov Front End Best Practices (WIP)"),m.a.createElement(c.MDXTag,{name:"p",components:t},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Last Updated:")," April 28, 2017"),m.a.createElement("h2",{id:"overview"},"Overview"),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is an initial pass at the best practices followed in vets.gov front-end development."),m.a.createElement("h3",{id:"objective"},"Objective"),m.a.createElement(c.MDXTag,{name:"p",components:t},"To promote a consistent approach to vets.gov front-end development by outlining an evolving set of best practices."),m.a.createElement("h3",{id:"background"},"Background"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Over the last year, we have launched a number of different single-page React/Redux apps on vets.gov, in addition to building digital forms using a ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"form-builder library")," that reuses the same code to run multiple React apps for different forms. This document is an attempt to begin collecting best practices for React/Redux development that the team has and continues to lean toward when architecting and developing front-end applications."),m.a.createElement("h3",{id:"high-order-guidelines"},"High Order Guidelines"),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is a placeholder for any high-level paradigms we settle on. For now, it's merely a laundry list of debatable topics:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"PropTypes"),": we try to define PropTypes to make it easier for newcomers to understand what can be passed to a component."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What to put into a selector vs. reducer vs. action"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"How we map backend data to the state?")),m.a.createElement("h3",{id:"reactredux-guidelines"},"React/Redux Guidelines"),m.a.createElement("h4",{id:"components-vs-containers"},"Components vs. containers"),m.a.createElement(c.MDXTag,{name:"p",components:t},"A common React/Redux application architecture is to divide your React components into two types: regular components and container components. These are also sometimes referred to as a dumb and smart components. Container components connect to the Redux store using the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-redux")," library's ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"connect")," function and map a specific part of the state object to the props of a React component. Regular components are just plain React components; they take in props and they can have internal state (though we generally avoid this; see below)."),m.a.createElement(c.MDXTag,{name:"p",components:t},"In general, we try to use regular components whenever possible and only a few container components. The reason for this is because tying a component to the Redux store couples it to a particular slice of the state of your application, as well as coupling it to a particular way of organizing your state. So refactoring a lot of container components can be difficult. Debugging can also be difficult with a lot of container components, because they interrupt the usual flow of data down through components. Instead of all data being passed down via props from a single component at the top of the component tree, intermediate components might pull in different parts of the Redux state and pass down that data as props to other components, creating a mix of data combined from different connections to the Redux state."),m.a.createElement(c.MDXTag,{name:"p",components:t},'There are benefits to using container components, though. It can be painful to pass lots of props all the way down to the leaf components in a component tree and container components allow you to "reset" and grab specific data from the store without all that wiring. They can also improve performance, because passing props down from the root of the component tree means that all intermediate components will re-render whenever data changes. Container components can send data down to their children without all the parents of the container component re-rendering.'),m.a.createElement(c.MDXTag,{name:"p",components:t},"On vets.gov, we normally use a single container component per page (or independent widget, like login), and only use other container components if there's a compelling reason for doing so. Our apps have a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"containers")," folder and a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"components")," folder that we divide components between."),m.a.createElement("h4",{id:"using-setstate-in-react-components"},"Using setState in React components"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We also generally avoid ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," inside regular components. This isn't because ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," is bad, necessarily, but because it can be hard to track down data changes due to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," when you're expecting all changes to go through the single Redux store. It can also be tricky to keep that state in sync with the data from the Redux store passed in as props. So, when we do use ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState"),", it's typically for ephemeral UI state, or state that would be more difficult to follow if it were put in the store and passed down through props."),m.a.createElement(c.MDXTag,{name:"p",components:t},"Keep in mind that these are general conventions, not iron-clad rules, and we should revist them as we gain more experience using React and Redux."),m.a.createElement("h3",{id:"existing-guides-and-tools"},"Existing Guides and Tools"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We have a set of ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/.eslintrc"}},"ESLint rules")," that extend the ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/airbnb/javascript"}},"AirBnB style guide")," and also use the ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io"}},"Prettier")," ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io/docs/en/eslint.html"}},"ESLint rules"),". There is a pre-commit hook that prevents committing code that fails the ESLint rules. Developers should all be using ESLint plugins in their dev environments to catch lint-able things. In lieu of using an ESLint editor plugin, developers can run the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lint:js:fix")," or ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lint:js:changed:fix")," NPM scripts to fix all errors that ESLint can auto-fix."),m.a.createElement(c.MDXTag,{name:"p",components:t},m.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"TODO: list any notable exceptions here.")),m.a.createElement("h3",{id:"project-structure-and-code-location"},"Project Structure and Code Location"),m.a.createElement(c.MDXTag,{name:"p",components:t},"The structure of our React app's is described in ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project")),m.a.createElement(c.MDXTag,{name:"p",components:t},"A number (and soon all) of our forms use the ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"react-json-schemaform"))," (or rjsf) library. To learn more about those, see ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"schemaform walkthrough")," and this ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"form config cookbook"),"."),m.a.createElement("h3",{id:"related-documents"},"Related Documents"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/veteran-facing-services-tools/Work%20Practices/Engineering/DocumentedDecisions/Redux.md"}},"Using Redux"))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project"))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"Schemaform walkthrough"))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"Form config cookbook")),m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Existing posts/articles on best practices that we may or may not agree with but can pull topics from:"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@nesbtesh/react-best-practices-a76fd0fbef21"}},"React best practices")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e"}},"Redux best practices")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md"}},"Long list of links about react architecture and best practices")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactrocket.com/post/react-redux-optimization/"}},"Redux isn't slow, you're just doing it wrong - An optimization guide"))))),m.a.createElement("h3",{id:"revision-history"},"Revision History"),m.a.createElement(c.MDXTag,{name:"table",components:t},m.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Date"),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Revisions Made"),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Author"),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Reviewed By"))),m.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"March 1, 2017"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Skeleton document based on outline of ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"Javascript/Node.js.md"}},"Node.js Best Practices")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"April 28, 2017"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Pulled in content from discussion in ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/659"}},"#659")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"May 17, 2017"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Added information about React component types and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"setState")," usage"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})))))},t}(m.a.Component),u={}},338:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(68),m=n.n(i);n.d(t,"a",function(){return m.a});n(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,t,n){var a;e.exports=(a=n(342))&&a.default||a},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),s=n.n(r),i=n(13),m=n.n(i),c=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?s.a.createElement(c.a,o()({location:t,pageResources:n},n.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=p},343:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(341),s=n(2),i=n.n(s),m=n(13),c=n.n(m),l=n(346),p=n.n(l),d=n(338),u=(n(17),n(133),n(134),n(339)),h=n.n(u),g=n(18),f=n.n(g),v=n(347),b=n.n(v),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var n;return f()(((n={})[t.id]=!1,n),e)},{}),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.open,a=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[t.id]=!e.state[t.id],n))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),N=(n(348),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:n}),t)},data:r})},t}(i.a.Component));N.propTypes={children:c.a.node.isRequired};t.a=N},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(343),m=(n(133),n(134),n(135),n(17),n(344)),c=n(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=n(339),u=n.n(d);function h(e){var t=e.location,n=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:n.items}))):null}function g(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-react-mdx-f11b7d048cb1aab9d051.js.map