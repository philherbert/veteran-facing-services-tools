(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return p});n(42);var a=n(43),o=n.n(a),r=n(3),s=n.n(r),i=n(2),c=n.n(i),m=n(4),l=n(337),u={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,n),components:t},c.a.createElement(m.MDXTag,{name:"h1",components:t},"VA.gov workflow"),c.a.createElement(m.MDXTag,{name:"p",components:t},"VA.gov uses a ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.thoughtworks.com/continuous-integration"}},"Continuous Integration")," process, which consists of the following steps:"),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Determine which issue to work on"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Create feature branch"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Code new functionality"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Write tests for new functionality"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Submit pull request"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Run unit tests and compliance scans (kicked off when a pull request is created)"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Test and peer review code (read: code review)"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Merge code to stable code base")),c.a.createElement(m.MDXTag,{name:"p",components:t},"When the last step is performed, the developer begins this process anew with another feature."),c.a.createElement(m.MDXTag,{name:"p",components:t},"The workflow that we use closely resembles ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://guides.github.com/introduction/flow/"}},"GitHub Flow"),"."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Choose an issue to work on"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The VA handbook has more information about the broader process for delivering services to Veterans on VA.gov. Developers work in an agile framework, where issues are assigned to sprints and developers work on this items over the two-week sprint period. You'll need to work with your team to determine the right issue for you to work on."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Create feature branch"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Each project's code base has a branch called ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," by default. Anything in ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," is deemed to be stable and deployable. This means that anything you merge will need to be ready to immediately be live or hidden in some way behind a feature flag."),c.a.createElement(m.MDXTag,{name:"p",components:t},"When work on a new issue or feature is started, the developer should start by creating a new feature branch based on ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master"),". Since most new work derives from a GitHub Issue, it's recommended to suffix your branch name with the issue. For example, if you're working on a feature to collect a veteran's address as detailed in Issue #25, you might call your issue ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"address-i25"),". It's also helpful to add your initials as a suffix to the branch name, so you can find your branches later."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Code new functionality"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Write the code for the new feature! This is often the fun part. :-)"),c.a.createElement(m.MDXTag,{name:"p",components:t},"It's very helpful if you restrict the scope of changes to only the issue/feature that you're working on. For example, you might see some code you can cleanup along the way and decide to change it. However, this increases the scope of your changes and increases risk if your commits/feature need to be rolled back (and the rollback pulls other things with it). It also helps your code reviewer, because they aren't left wondering how a tangential change impacts the feature promised by the pull request."),c.a.createElement(m.MDXTag,{name:"p",components:t},"As you code your changes, commit changes to your feature branch. Commit early. Commit often."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Write tests for new functionality"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The only way to quickly know if your new change breaks the existing functionality of the application is to have a suite of automated tests that execute whenever new stuff is added. When you add new functionality, new tests are required so that future developers know if they have broken your contributions."),c.a.createElement(m.MDXTag,{name:"p",components:t},"There are two kinds of tests you might add:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Unit: Tests a specific method or very granular piece of the code base."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"End to end: Tests how your code works when clicked through in a real browser."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Accessibility: Tests that run automated checks to catch some basic accessibility mistakes. Typically these are incorporated into end-to-end tests.")),c.a.createElement(m.MDXTag,{name:"p",components:t},"These tests will get automatically executed in the next step, but you should run them locally before moving on."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Submit pull request"),c.a.createElement(m.MDXTag,{name:"p",components:t},"At this point all your code is committed to the feature branch. Additionally, you should sync your feature branch with changes from the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," branch to incorporate work that has been done concurrently."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Once that is done, you can submit a pull request indicating that your code is ready for review. You can use the GitHub request reviews feature to tag a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"Code Review Norms")," for more information on how we do code reviews."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Connecting pull requests's"),': In the PR, there is a "Connect this pull request with an existing issue" section at the bottom of the issue. Click the "Connect with an issue" button to link the PR to the original issue in Zenhub.'),c.a.createElement(m.MDXTag,{name:"p",components:t},"Once your pull request has been submitted, move the ticket and with the connected PR into the Validate column to indicate it's ready for review."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Run tests and compliance scans"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Tests for pre-existing functionality and your new tests will be executed by Jenkins when you push your branch to Github. You can see the results in your PR, which will tell you if you've broken any existing functionality and if your tests execute within a non-local environment. If things fail, the test run will give you context on what broke and what needs to get fixed. All tests, including accessibility and end to end tests are run for each branch."),c.a.createElement(m.MDXTag,{name:"p",components:t},"In addition to tests, other static checks are run:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Security: The current set of npm dependencies are checked for security vulnerabilities"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Linting: This checks your code for clean style or easy to catch syntactic errors. This helps make the code more maintainable by helping make the code itself idiomatic and consistent looking across modules.")),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Test and peer review code"),c.a.createElement(m.MDXTag,{name:"p",components:t},"While the PR is open, both code review and manual testing an occur. Depending on the ttype of change, you may need a product or UX person to do manual testing. And we always have developers do code review on PRs"),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Testing"),c.a.createElement(m.MDXTag,{name:"p",components:t},"This can involve some separate things:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Does it meet the requirements?")),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Code Review"),c.a.createElement(m.MDXTag,{name:"p",components:t},"See our team's ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"code review norms")," for details on how code review work and what needs to be checked."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Merge code to master"),c.a.createElement(m.MDXTag,{name:"p",components:t},"After all feedback from testing and code review is responded to and the developer and reviewer are in agreement that the code is satisfactory (including re-running automated tests and needing them to pass), it's time to merge the code from its feature branch into the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," branch."),c.a.createElement(m.MDXTag,{name:"p",components:t},"After all tests and peer review has been completed a member of the team will need to create a branch and manually merge in the proposed changes. They will then need to close the original PR and create a new PR from their branch. This will allow the testing infrastructure to trigger automated testing on the propsed work. Once that testing in complete a second internal team member will be required to approve the work and merge it into the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," branch"))},t}(c.a.Component),p={}},330:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(68),c=n.n(i);n.d(t,"a",function(){return c.a});n(332);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"/getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"/getting-started/environments"},{name:"Bundles and Code organization",href:"/getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"/getting-started/common-tasks/local"},{name:"Building VA.gov",href:"/getting-started/common-tasks/build"},{name:"Running tests",href:"/getting-started/common-tasks/tests"},{name:"Linting your code",href:"/getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"/getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Releases",href:"/getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"/getting-started/common-tasks/reviewing-feature-branches"},{name:"Documentation",items:[{name:"Adding new pages to this site",href:"/getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"/getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"/getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"/getting-started/common-tasks/creating-gatsby-plugins"}]}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,t,n){var a;e.exports=(a=n(334))&&a.default||a},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),s=n.n(r),i=n(13),c=n.n(i),m=n(94),l=n(9),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?s.a.createElement(m.a,o()({location:t,pageResources:n},n.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},335:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(333),s=n(2),i=n.n(s),c=n(13),m=n.n(c),l=n(338),u=n.n(l),d=n(330),p=(n(17),n(133),n(134),n(331)),h=n.n(p),g=n(18),f=n.n(g),b=n(339),v=n.n(b),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var n;return f()(((n={})[t.id]=!1,n),e)},{}),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.open,a=t.onClose,o=t.location;return i.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[t.id]=!e.state[t.id],n))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(y,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),E=(n(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:n}),t)},data:r})},t}(i.a.Component));E.propTypes={children:m.a.node.isRequired};t.a=E},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(335),c=(n(133),n(134),n(135),n(17),n(336)),m=n(330);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function u(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=n(331),p=n.n(d);function h(e){var t=e.location,n=p.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:n.items}))):null}function g(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-mdx-3bb6f57582df8eaabc18.js.map