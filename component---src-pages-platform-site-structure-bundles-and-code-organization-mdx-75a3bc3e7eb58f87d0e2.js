(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{329:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),m=a.n(r),i=a(2),s=a.n(i),l=a(4),c=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=c.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},s.a.createElement("h1",{id:"bundles-and-code-organization"},"Bundles and Code Organization"),s.a.createElement("h2",{id:"application-bundling-with-webpack"},"Application Bundling with Webpack"),s.a.createElement(l.MDXTag,{name:"p",components:n},"Webpack is a modular asset bundler used to build the VA.gov client application. Its responsibilities include:"),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"dependency resolution in JavaScript and CSS files,"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"splitting the project into application specific and shared resources during the build process,"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"enabling support for legacy browsers,"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"performance optimization, and"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"providing the application launch behavior that ties all of this together.")),s.a.createElement(l.MDXTag,{name:"p",components:n},"Most applications leverage the ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://webpack.js.org/plugins/commons-chunk-plugin/"}},"CommonsChunkPlugin")," to code split their source into\n- entries files that are application specific e.g. facilities-locator.entry.js, and\n- a vendor.js file containing common modules shared between entry points"),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Webpage loads application specific files on demand. More information on this can be found in ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://webpack.js.org/guides/code-splitting/"}},"Webpack code splitting"))),s.a.createElement("h3",{id:"common-bundles"},"Common bundles"),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"settings.js"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"adds ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"window.settings"),"- a globally available object containing build and application settings"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by metasmith plugin src/site/stages/build/plugins/create-build-settings.js"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"consumed by webpack loader config/manifest-loader primarily for application routes"))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"common entry files included on every page",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vendor.entry.js"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by Webpack's SplitChunksPlugin"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"includes shared dependencies including react, redux, and node_modules"))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uswds.entry.js"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"U.S. Web Design System's JavaScript npm module: ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/uswds/uswds"}},"https://github.com/uswds/uswds")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by Webpack code splitting with an dynamic import in src/platform/site-wide/index.js"))))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"examples of application entry files",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"static-pages.entry.js"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"included on all non-react pages"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"e.g. ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov"}},"https://www.va.gov")))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gi.entry.js"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"stand alone react app"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov/gi-bill-comparison-tool"}},"https://www.va.gov/gi-bill-comparison-tool")))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pre-need.entry.js"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"react app that uses the forms system"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction"}},"https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction"))))))),s.a.createElement("h2",{id:"files-overview"},"Files Overview"),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/config"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"jest configs - proof of concepts- not used in CI",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jest-integration.config.js")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jest-vrt.config.js")))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Nightwatch e2e test runner and configurations",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch-globals-sauce.js")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch-sauce.js")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch.docker-compose.js")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch.js")))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"sass config: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sass-lint.yml")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"webpack production and dev configs",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"webpack.config.js")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"webpack.dev.config.js")))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"build setup script",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"manifest-loader.js")," - passes front matter of content files to app entry files\n- ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"parse-app-settings.js")," - reads settings.js - a file containing app information generated during Metalsmith build"))))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/docs")," - best practices and troubleshooting docs"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/jenkins")," - jenkins setup, build, deploy script for ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-websites")," repo"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/script"),s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/custom-eslint")," - project specific linting plugin"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/hooks")," - -git -precommit hook"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"app-list.sh")," - bash script that outputs a list of the applications in vets-website"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"build.js")," - imports and runs build script in src/site/stages/build"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"csv-path-builder.js")," - TODO"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"heroku-postbuild.sh")," - static content builder used by Heroku when a new branch is pushed"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mocha.js")," - unit test runner and watch task"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"prearchive.js")," - updates paths to js, css, and image assets to point to S3 asset bucket"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"prebuild.js")," - npm prebuild script that checks node version and install precommit hooks"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"preview.js")," - metalsmith build script for drupal preview"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"reset-environment.js")," - installs yarn and cleans up node_modules- used by build process"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-coverage.sh")," - runs mocha unit test coverage report"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-docker-nightwatch.sh")," - runs mock vets-api with docker"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-mockapi.sh")," - runs js mock vets-app"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-nightwatch.sh")," - test harness for running end to end tests"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-puppeteer-tests.sh")," - test harness for puppeteer tests (proof of concept)"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-unit-test.sh")," - runs unit tests"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"security-check.js")," - checks for security advisories in dependencies"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"update-json-schema.js")," - helper for updating dependency version of vets-jason-schema"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"watch.js")," - watch task for unit tests (proof of concept)"))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/src")," - source files for vets-website web applications",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/applications")," - application specific code that's into -entry.js files"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/platform")," - shared code that's includes polyfilles, code thats injected directly into the site, or used for testing"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/site")," - Metalsmith pipeline code and templates used to generate static content pages from Drupal api or Markdown files"))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"runtime configs used locally and in CI for builders, dependency managers, linters, transcoders, and source control",s.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"babel: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".bablerc")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"docker: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".dockerignore"),", ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Dockerfile"),", ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"docker-compose.yml")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"eslint: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".eslintrc"),", ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".eslintignore")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"git: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".gitignore")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"nvm: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".nvmrc")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"prettier (linting runtime used with eslint): ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".prettierrc")),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"yarn: ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".yarnrc"),", ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn.lock"),", ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"package.json")))),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Procfile, app.json - TODO some heroku thing"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"json-config-example.json")," - intellisense config for supporting babel module-resolver plugin")))},n}(s.a.Component),u={}},340:function(e,n,a){"use strict";a.d(n,"b",function(){return c});var t=a(2),o=a.n(t),r=a(13),m=a.n(r),i=a(68),s=a.n(i);a.d(n,"a",function(){return s.a});a(342);var l=o.a.createContext({}),c=function(e){return o.a.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,a){var t;e.exports=(t=a(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),r=a(2),m=a.n(r),i=a(13),s=a.n(i),l=a(94),c=a(9),p=function(e){var n=e.location,a=c.default.getResourcesForPathnameSync(n.pathname);return a?m.a.createElement(l.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=p},345:function(e,n,a){"use strict";var t=a(3),o=a.n(t),r=a(343),m=a(2),i=a.n(m),s=a(13),l=a.n(s),c=a(348),p=a.n(c),d=a(340),u=(a(17),a(133),a(134),a(341)),g=a.n(u),h=a(18),f=a.n(h),E=a(349),N=a.n(E),v=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=g.a.sections.reduce(function(e,n){var a;return f()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return i.a.createElement("div",{className:N()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(n){return i.a.createElement("div",{key:n.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),i.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:N()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(i.a.Component),b=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(v,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(i.a.Component),D=(a(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(b,{location:a}),n)},data:r})},n}(i.a.Component));D.propTypes={children:l.a.node.isRequired};n.a=D},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),m=a.n(r),i=a(345),s=(a(133),a(134),a(135),a(17),a(346)),l=a(340);function c(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(l.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),u=a.n(d);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-bundles-and-code-organization-mdx-75a3bc3e7eb58f87d0e2.js.map