(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{294:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return p}),n.d(a,"_frontmatter",function(){return u});n(42);var t=n(43),o=n.n(t),r=n(3),s=n.n(r),i=n(2),m=n.n(i),c=n(4),l=n(345),d={},p=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=l.a,n}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:a},m.a.createElement("h1",{id:"creating-custom-fields-and-widgets"},"Creating custom fields and widgets"),m.a.createElement(c.MDXTag,{name:"p",components:a},"You can customize the base library to satisfy the unique requirements of your particular form."),m.a.createElement("h2",{id:"in-this-guide"},"In this guide"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#how-vafs-uses-rjsf"}},"How the VAFS uses RJSF")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#customizing-fields-and-widgets-from-rjsf"}},"Customizing fields, widgets, and events from RJSF")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#supporting-multi-page-forms"}},"Supporting multi-page forms"))),m.a.createElement("h2",{id:"how-vafs-uses-rjsf"},"How VAFS uses RJSF"),m.a.createElement(c.MDXTag,{name:"p",components:a},"The VAFS code uses react-jsonschema-form, or RJSF, to render form fields, but it builds a scaffolding on top of it to support multi-page forms and common form patterns. Additionally, VAFS uses RJSF to create a form configuration spec that allows developers to specify the structure of a multi-page form."),m.a.createElement("h3",{id:"customizing-fields-widgets-and-events-from-rjsf"},"Customizing fields, widgets, and events from RJSF"),m.a.createElement(c.MDXTag,{name:"p",components:a},"RJSF passes all field and widget components to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"SchemaField")," (and most other components) as a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"registry")," property. To override fields and widgets in the registry, pass components of the same name into the library's main ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form")," component. The VAFS uses custom versions of these components:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ObjectField")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ArrayField")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"FieldTemplate")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#textwidget"}},"TextWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#selectwidget"}},"SelectWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#emailwidget"}},"EmailWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#checkboxwidget"}},"CheckboxWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#radiowidget"}},"RadioWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"TextareaWidget"))),m.a.createElement(c.MDXTag,{name:"p",components:a},"The VAFS uses these custom fields and widgets:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#yesnowidget"}},"YesNoWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#datewidget"}},"DateWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#ssnwidget"}},"SSNWidget")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#phonenumberwidget"}},"PhoneNumberWidget"))),m.a.createElement(c.MDXTag,{name:"p",components:a},"Writing custom widgets is similar to writing React components: A value is passed in, and an ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onChange")," hook is provided for changing data. Other properties like the schemas and field ID are also provided."),m.a.createElement(c.MDXTag,{name:"p",components:a},"Custom fields receive all properties listed previously for field components in RJSF."),m.a.createElement(c.MDXTag,{name:"p",components:a},"In addition to customizing fields and widgets, the VAFS code hooks into a number of events provided by ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form")," to support our form patterns, found in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"FormPage")," component. These events are:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"validate"),": This event is called when validation occurs. We call our custom validation, which reads uiSchema for custom validation hooks that have been included for form fields outside of what JSON Schema provides."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"transformErrors"),": This event is provided when the VAFS receives the list of JSON Schema validation errors and can return a transformed list. It replaces the messages with a set of default messages, as well as any messages provided for specific fields in uiSchema. It also moves the errors for required fields from the object level to the field level. Because JSON Schema specifies required fields with a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"required")," array on an object field schema, any errors about missing data are associated with that object and moved so they're associated with the missing field and rendered with that field on the form."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onError"),": This event is called if a user tries to submit a form with a validation error. The VAFS sets a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"submitted")," flag in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"formContext"),", which is an object passed to all fields and components in the RJSF form. The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"FieldTemplate")," component uses ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"formContext")," to display all error messages to the user."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onSubmit"),": This event is called when a user submits a form with no validation errors. When this happens, the VAFS code looks for the next page in the multi-page form and navigates to it."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onChange"),": This event is called when a user changes data in the form. The VAFS fires a Redux action and updates the store with the new data. The reducer code does several recalculations:",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Recalculate the required fields for the schema:")," You can specify functions in uiSchema that set fields as optional or required based on form data. This runs them and updates the schema."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Recalculate which schema fields are hidden and remove that data:")," In uiSchema, you can specify fields that are conditionally hidden based on user data. To avoid validation errors from data a user can't see, the VAFS updates the schema to add a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ui:hidden")," property and remove any user data for those fields."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Recalcuate general schema updates:")," Because you can make arbitrary changes to the schema based on form data, the VAFS must also make those changes, for example, removing options in an ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"enum")," array when a user has entered certain data.")))),m.a.createElement("h3",{id:"supporting-multi-page-forms"},"Supporting multi-page forms"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Large forms are organized into ",m.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"chapters")," and ",m.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"pages"),". A chapter is a collection of pages, each rendered as a single RJSF form with a schema and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," field component. The chapter and page organization is described in a form config file that the VAFS uses to generate a list of routes. A user can move through the list of pages until they reach the review page."),m.a.createElement(c.MDXTag,{name:"p",components:a},"The review page also takes the config file and renders each chapter in an accordion panel. Inside a panel, the VAFS uses RJSF to render each page in a read-only view. This view uses simplified widgets and a different ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"FieldTemplate")," component to render each form field in a definition list. The read-only view uses the RJSF ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form")," component with no input elements, rendering instead with text. When a user on the review page clicks Edit for a form page, the normal widgets are used and a normal form is rendered."),m.a.createElement(c.MDXTag,{name:"p",components:a},"Each array item on a review page is rendered as read-only, and individual items can be edited independently. To accomplish this, the review ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayField")," component renders each item in the array as its own RJSF ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form"),". In addition, array fields are taken from the page's read-only view and rendered separately."))},a}(m.a.Component),u={}},338:function(e,a,n){"use strict";n.d(a,"b",function(){return l});var t=n(2),o=n.n(t),r=n(13),s=n.n(r),i=n(68),m=n.n(i);n.d(a,"a",function(){return m.a});n(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,a,n){var t;e.exports=(t=n(342))&&t.default||t},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,a,n){"use strict";n.r(a);var t=n(18),o=n.n(t),r=n(2),s=n.n(r),i=n(13),m=n.n(i),c=n(94),l=n(9),d=function(e){var a=e.location,n=l.default.getResourcesForPathnameSync(a.pathname);return n?s.a.createElement(c.a,o()({location:a,pageResources:n},n.json)):null};d.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},a.default=d},343:function(e,a,n){"use strict";var t=n(3),o=n.n(t),r=n(341),s=n(2),i=n.n(s),m=n(13),c=n.n(m),l=n(346),d=n.n(l),p=n(338),u=(n(17),n(133),n(134),n(339)),h=n.n(u),g=n(18),f=n.n(g),v=n(347),E=n.n(v),b=function(e){function a(a){var n;return(n=e.call(this,a)||this).state=h.a.sections.reduce(function(e,a){var n;return f()(((n={})[a.id]=!1,n),e)},{}),n}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,n=a.open,t=a.onClose,o=a.location;return i.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(a){return i.a.createElement("div",{key:a.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[a.id]=!e.state[a.id],n))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),i.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(p.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(i.a.Component),w=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={navOpen:!1},n}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(b,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(i.a.Component),T=(n(348),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var n=a.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,a=e.children,n=e.location;return i.a.createElement(p.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:n}),a)},data:r})},a}(i.a.Component));T.propTypes={children:c.a.node.isRequired};a.a=T},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,a,n){"use strict";var t=n(2),o=n.n(t),r=n(13),s=n.n(r),i=n(343),m=(n(133),n(134),n(135),n(17),n(344)),c=n(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var a=e.items,n=e.isSublist,t=void 0!==n&&n;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=n(339),u=n.n(p);function h(e){var a=e.location,n=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function g(e){var a=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}n.d(a,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-creating-custom-fields-and-widgets-md-dd348449ff89e5cf9459.js.map