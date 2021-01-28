(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(l.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(r,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var o=a("MEl4"),c=a.n(o);function b(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(s,{items:a.items}))):null}function m(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var p=a("8FPV");function u(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(p.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(b,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(m,{sourceUrl:n.sourceUrl}))))}},eJaJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("3dLD"),r={},s={_frontmatter:r},o=l.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"deploy"},"Deploy"),Object(i.b)("p",null,"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),Object(i.b)("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Application"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Branch"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Changes in by"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Deployment Start"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Release History"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"vets-website"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"master"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"2:00pm ET M-F"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"3:00pm ET M-F"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("a",Object.assign({parentName:"td"},{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}),"https://github.com/department-of-veterans-affairs/vets-website/releases"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"vets-api"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"master"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"2:00pm ET M-F"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"3:00pm ET M-F"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("a",Object.assign({parentName:"td"},{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}),"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Jenkins performs the following tasks after a pull request is merged into ",Object(i.b)("inlineCode",{parentName:"p"},"master")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Build")," ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Deploy")," to development and staging using deployment artifact"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://help.github.com/en/articles/creating-releases"}),"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"A big assumption in this process is that the ",Object(i.b)("inlineCode",{parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),Object(i.b)("h2",{id:"process-details"},"Process details"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://help.github.com/en/articles/creating-releases"}),"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),Object(i.b)("p",null,"Every work day at the configured time a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}),"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",Object(i.b)("inlineCode",{parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),Object(i.b)("p",null,"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Deploy")," to production using deployment artifacts")),Object(i.b)("p",null,"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),Object(i.b)("h2",{id:"rollbacks"},"Rollbacks"),Object(i.b)("p",null,"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",Object(i.b)("inlineCode",{parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),Object(i.b)("p",null,"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),Object(i.b)("h2",{id:"manual-deployment"},"Manual deployment"),Object(i.b)("p",null,"Two out-of-cycle deploys are supported in Jenkins:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"partial deploy including only static page changes (",Object(i.b)("inlineCode",{parentName:"li"},"vagov-content")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Drupal"),")"),Object(i.b)("li",{parentName:"ul"},"full deploy of VA.gov client app and static pages")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": If a full or partial manual deploy of vets-website is kicked off while a scheduled deploy\nis in progress (or vice versa), the builds will not conflict. Whichever begins first will deploy\nfirst, with the latter queued up behind it."),Object(i.b)("h3",{id:"before-deploying"},"Before deploying"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Wait for ",Object(i.b)("strong",{parentName:"li"},"Jenkins")," to ",Object(i.b)("strong",{parentName:"li"},"build the change")," in ",Object(i.b)("inlineCode",{parentName:"li"},"vets-website")),Object(i.b)("li",{parentName:"ul"},"Builds status can be viewed ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}),"here"),". ",Object(i.b)("em",{parentName:"li"},"Requires SOCKS proxy. See ",Object(i.b)("a",Object.assign({parentName:"em"},{href:"/veteran-facing-services-tools/getting-started/internal-tools"}),"Accessing internal tools"))),Object(i.b)("li",{parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),Object(i.b)("h3",{id:"partial-deploy--static-page-changes-only"},"Partial deploy- static page changes only"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start a deploy job"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Log into Jenkins ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}),"here")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build with Parameters")),Object(i.b)("li",{parentName:"ul"},"Set the ",Object(i.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(i.b)("strong",{parentName:"li"},"5")," minutes"),Object(i.b)("li",{parentName:"ul"},"Check ",Object(i.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(i.b)("em",{parentName:"li"},"important")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build")),Object(i.b)("li",{parentName:"ul"},"Verify commits in ",Object(i.b)("strong",{parentName:"li"},"deployment notification"))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"In Slack channel ",Object(i.b)("strong",{parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",Object(i.b)("strong",{parentName:"em"},"deploy notification"),"."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Verify")," changes in ",Object(i.b)("strong",{parentName:"p"},"production")," once the build finishes"))),Object(i.b)("h3",{id:"full-deploy-of-vagov-client-app"},"Full deploy of VA.gov client app"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Last deployment time"),": You can check the build ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}),"history")," for the time of the last deploy (usually daily at 2pm EST)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Commit history"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}),"Look")," for commits after the last deploy and verify they're production ready.")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You may need to contact the developers of those commits to verify.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start a deploy job"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Log into Jenkins ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}),"here")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build with Parameters")),Object(i.b)("li",{parentName:"ul"},"Set the ",Object(i.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(i.b)("strong",{parentName:"li"},"5")," minutes"),Object(i.b)("li",{parentName:"ul"},"Uncheck ",Object(i.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(i.b)("em",{parentName:"li"},"important")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build")),Object(i.b)("li",{parentName:"ul"},"Verify commits in ",Object(i.b)("strong",{parentName:"li"},"deployment notification"))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"In Slack channel ",Object(i.b)("strong",{parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",Object(i.b)("strong",{parentName:"em"},"deploy notification"),"."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Verify")," changes in ",Object(i.b)("strong",{parentName:"p"},"production")," once the build finishes"))))}c.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-2f804232cea69c41c263.js.map