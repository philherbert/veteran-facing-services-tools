(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{Ed2V:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return l})),t.d(a,"_frontmatter",(function(){return p}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var n=t("q1tI"),o=t.n(n),r=t("6qfE"),m=t("3dLD");var s={},l=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=m.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,t),components:a},o.a.createElement("h1",{id:"front-end-feature-flags"},"Front end feature flags"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Agile and user centric workflows often use testing of partially complete features to refine or research experiences. This document provides recommendations on using feature flags to manage new unreleased features in our continuous integration environment."),o.a.createElement("h2",{id:"enhancements-to-existing-applications"},"Enhancements to Existing Applications"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased features should always be made available on ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),": Unreleased features can be made available on www.va.gov by checking ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the enhancement can be done by adding this name/value to the local storage",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present.")))),o.a.createElement("h2",{id:"new-applications"},"New Applications"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased applications should always be made available on ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),":"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on www.va.gov by checking ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the application can be done by adding this name/value to the local storage",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present."))))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on production behind a password by setting ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"protected: yes")," in ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/e1030d1a499e39eaeceb8f4bdcbd33baf7ee946d/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml"}},"react_routes.yml"),". External teams should work with their DSVA contact to request support for enabling this.")),o.a.createElement("h2",{id:"content-pages"},"Content pages"),o.a.createElement("h3",{id:"app-landing-pages-generated-by-manifestjson"},"App-landing pages generated by manifest.json"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Applications can control the HTML landing page associated with the application via a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"template")," property in the application's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"manifest.json"),". Properties defined inside the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"template")," property will pass through the Metalsmith templating process the same way as a vagov-content ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".md")," file. This means that via the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"template")," property, your ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"manifest.json")," can implement a feature flag the same way as a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".md")," file to prevent its HTML page from rendering in production environments. For example:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-json"}},'{\n   "appName": "Fantastic application",\n   "entryname": "fantastic-application",\n   "template": {\n       "layout": "page-react.html",\n       "title": "Fantastic application",\n       "vagovprod": false\n   }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vagovprod")," property explicitly set to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"false")," will exclude this application from production builds."),o.a.createElement("h3",{id:"vagov-content-md-files"},"vagov-content .md files"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Unreleased content pages should always be made available on ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," by adding an exclusion flag to the front matter of the content page. For example, because this front matter includes ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vagovprod: false"),", this content page would be excluded from the build for the production environment:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},'---\ntitle: Apply for disability benefits\nvagovprod: false\n---\n<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"\nid="va-breadcrumbs">\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"Content pages can be excluded from any or all of these environments:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},"vagovprod: false\nvagovstaging: false\nvagovdev: false\nlocalhost: false\n")),o.a.createElement("h2",{id:"writing-good-feature-flags"},"Writing good feature flags"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"New features or applications should be merged often so they can be included as part of the daily continuous integration deploy."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Feature flagged enhancements should be made with code that is ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to"}},"easy to delete"),"- ideally done simply and with as few checks as possible. Repeating yourself is okay in feature flagged code.",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Making code that's easy to delete ensures that deprecated code is quickly removed once a feature is released."))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Making features or applications available in production should done only as needed for testing with users.")),o.a.createElement("h2",{id:"cms-feature-flags"},"CMS feature flags"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Va.gov creates some pages based on content from the VA's Drupal CMS. The CMS has its own content model, which can sometimes change. When those changes modify the existing structure of the content model, the queries and templates in vets-website that expect a different model may break. And because the CMS and vets-website are separate systems with different deployment processes, we can't push up changes in both systems simultaneously. In order to keep the two systems in sync, we need to be able to turn features on and off in vets-website depending on what environment we're in, and update that feature state whenever a cms deployment happens."),o.a.createElement(r.MDXTag,{name:"p",components:a},"We've created some infrastructure to make this a little easier to do."),o.a.createElement("h3",{id:"creating-a-flag-and-turning-it-on-or-off"},"Creating a flag and turning it on or off"),o.a.createElement(r.MDXTag,{name:"p",components:a},"When running a new vets-website build, the script will fetch all CMS feature flags from Drupal. This allows the flags to be controlled from within Drupal."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Before writing any code to use a new feature flag, it must first be created from within Drupal for all three environments. The feature flags can be found at ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://dev.cms.va.gov/admin/config/system/feature_toggle"}},"https://dev.cms.va.gov/admin/config/system/feature_toggle")," for dev. Staging and production have similar pages."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Important:")," The new feature flag ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"must")," be in ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"every")," Drupal environment or vets-website builds will fail when we try to use it! This is intentional so we don't have \"accidentally\" false feature flags when Drupal doesn't have a flag that vets-website is trying to use."),o.a.createElement("h3",{id:"using-flags-in-graphql-queries"},"Using flags in GraphQL queries"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Because the flags are fetched dynamically, they aren't stored in a file that we can ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"require")," from a GraphQL query file. The build script puts the current flags are put into ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"global.cmsFeatureFlags")," after it either fetches the most recent flags or uses the cache."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Keep in mind the advice in the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#writing-good-feature-flags"}},"writing good feature flags")," section. You should write the logic in a way that is easy to remove later. It's often easier to change some logic and then add a conditional that modifies something with the flag is not enabled. That lets you simply remove the conditional later."),o.a.createElement("h3",{id:"using-feature-flags-in-liquid-templates"},"Using feature flags in Liquid templates"),o.a.createElement(r.MDXTag,{name:"p",components:a},"All liquid templates have access to the current feature flag state:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-liquid"}},"{% if enabledFeatureFlags.feature1 == true %}\n  <div>Fancy new feature</div>\n{% endif %}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Note:")," From within the JavaScript context, the feature flags are in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"global.cmsFeatureFlags"),", but within the Liquid template context, they can be found in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enabledFeatureFlags"),"."),o.a.createElement("h2",{id:"release-toggles"},"Release Toggles"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"This feature is in active development and will replace the current approaches to managing release toggles.")),o.a.createElement("h3",{id:"overview"},"Overview"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Allows for production toggle switching without redeploying ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Provides a UI for managing feature toggle behavior"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Provides code helpers for handling common UX scenarios")),o.a.createElement("h3",{id:"client-behavior"},"Client behavior"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"During the build process, feature toggle values are retrieved and included in each of the static html pages."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"When the page loads, the feature toggle client retrieves the bootstrapped values from the static html and renders the page using those values."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"After the page is rendered, the feature toggle client retrieves the latest toggle values from the feature toggle service."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"The page is updated using the latest feature toggle values.")),o.a.createElement("h3",{id:"user-experience-considerations"},"User experience considerations"),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are a couple ways to do release toggles that each have UX trade offs."),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Use the bootstrapped values on the initial render")),o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"The app will use the values from the static page first and ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"li"},"update")," the markup if the values retrieved from the service are different"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"This works well for content that is not visible on the initial render of the page. Ideally, the update is either not be visible to the user or animates into the view using a simple CSS transition"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Ignore the bootstrapped values and show a loading state for the feature")),o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"The app will show a loading state for the new feature while the toggle values are retrieved from the service"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"This works well for content that is visible on the initial render of the page. There's no standardized approach; the way this is updated is depdendent on the UX goals.")))),o.a.createElement("h3",{id:"flipper-ui"},"Flipper UI"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Overview of toggle management UI can be found ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/feature-toggles.md"}},"here"))),o.a.createElement("h3",{id:"adding-a-new-feature-toggle"},"Adding a new feature toggle"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Follow these steps to add and use a new feature toggle to use in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website")),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Determine your feature toggle name.")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"There are no naming conventions yet. Current examples namespace with the app name first e.g. facilityLocatorShowCommunityCares, profileShowDirectDeposit")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Add the feature toggle name to")),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website")," using camel case: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/feature-toggles/feature-toggle-query-list.json"}},"/src/platform/utilities/feature-toggles/feature-toggle-query-list.json")),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-json"}},'{\n   "featureToggleQueryList": ["appNameThenYourFeatureName"]\n}\n'))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-api")," using snake case: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml"}},"config/features.yml")),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-yml"}},"features:\n app_name_then_your_feature_name:\n   description: >\n     On https://www.va.gov/find-locations/ enables search box.\n     This toggle is owned by the search team.\n")))),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:3}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Submit a PR for each of these.")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Crosslinking the PRs in a comment will make it easier for the reviewers to check")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:4}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-api")," locally")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"This can be done on master after your PR is merged or off of your feature branch")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:5}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Navigate to the dev Flipper Admin: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://localhost:3000/flipper/features"}},"http://localhost:3000/flipper/features")," and verify that you see your new feature name.  If not, restart your rails server.")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"See the Flipper admin ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/feature-toggles.md#managing-feature-toggles"}},"documentation")," for the username / password")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:6}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Use the selector helper to build a selector for your feature toggle. For example:")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"// import the toggleValues helper\nimport { toggleValues } from 'platform/site-wide/feature-toggles/selectors';\n\n// use the toggleValues helper to select the toggle values list\nexport const appNameThenYourFeatureName = state =>\n  toggleValues(state).appNameThenYourFeatureName;\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"The toggleValues object is simply a flat list of toggleName -> boolean key value pairs.")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:7}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Use the feature toggle value to gate your new behavior. For example, you can use the select above in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"mapStateToProps")," to pass the toggle as a prop into your component.")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"function mapStateToProps(state) {\n  return {\n    showYourFeatureName:\n      appNameThenYourFeatureName(state),\n  };\n}\n\n...\n// inside your connected component\n\nrender() {\n   const { showYourFeatureName } = this.props;\n\n   return (\n     { showYourFeatureName && <NewFeature /> }\n   );\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Currently the feature toggles values are only available on the global redux state.")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:8}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Use the Flipper admin to test out the toggle locally."),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/853b7aaf488576712fb9d88f16b9f2a9/12470/change-feature-toggle-value.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"129.67200610221207%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"change feature toggle value",title:"change feature toggle value",src:"/static/853b7aaf488576712fb9d88f16b9f2a9/e3189/change-feature-toggle-value.png",srcSet:"/static/853b7aaf488576712fb9d88f16b9f2a9/a2ead/change-feature-toggle-value.png 259w,\n/static/853b7aaf488576712fb9d88f16b9f2a9/6b9fd/change-feature-toggle-value.png 518w,\n/static/853b7aaf488576712fb9d88f16b9f2a9/e3189/change-feature-toggle-value.png 1035w,\n/static/853b7aaf488576712fb9d88f16b9f2a9/12470/change-feature-toggle-value.png 1311w",sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))))),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Updating the feature toggle state on the website requires refreshing the page. This value can take up to a minute to update in staging and production.")),o.a.createElement("h4",{id:"other-considerations"},"Other considerations"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Each environment has its own set of feature toggle values."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Test your feature toggle in staging before using it in production."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Remove release toggles as soon as they are not needed."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Make toggles that are easy to delete by gating a behavior in as few places as possible. It's often better to have blocks of repeating code that can be quickly deleted later than it is to gate several small pieces of code")))},n}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-feature-flags-mdx-e24137866eacbec41181.js.map