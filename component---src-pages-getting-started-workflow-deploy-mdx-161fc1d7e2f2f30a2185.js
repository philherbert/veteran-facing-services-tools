(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz");function o(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(l.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function r(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(o,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,{isSublist:!0,items:e.items})):i.a.createElement(o,{item:e,key:e.name})}))):null}var s=a("MEl4"),b=a.n(s);function c(e){var t=e.location,a=b.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(r,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=a("8FPV");function d(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(m.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(c,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},eJaJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("3dLD"),o={},r={_frontmatter:o},s=l.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"deploy"},"Deploy"),Object(i.b)("p",null,"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#automated-deployment-schedule"},"Automated deployment schedule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#overview"},"Overview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#process-details"},"Process details")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rollbacks"},"Rollbacks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#creating-a-release"},"Creating a Release")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#hotfixes"},"Hotfixes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#manual-deployment"},"Manual deployment"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#before-deploying"},"Before deploying")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#content-only-production-deploy"},"Content-only production deploy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#full-production-deploy-of-vagov"},"Full production deploy of va.gov")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#manual-deployment-of-stagingvagov"},"Manual deployment of staging.va.gov")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#dealing-with-flaky-unit-tests"},"Dealing with Flaky Unit Tests"))),Object(i.b)("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Application"),Object(i.b)("th",{parentName:"tr",align:null},"Branch"),Object(i.b)("th",{parentName:"tr",align:null},"Changes in by"),Object(i.b)("th",{parentName:"tr",align:null},"Deployment Start"),Object(i.b)("th",{parentName:"tr",align:null},"Release History"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"vets-website"),Object(i.b)("td",{parentName:"tr",align:null},"master"),Object(i.b)("td",{parentName:"tr",align:null},"2:00pm ET M-F"),Object(i.b)("td",{parentName:"tr",align:null},"3:00pm ET M-F"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"https://github.com/department-of-veterans-affairs/vets-website/releases"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"vets-api"),Object(i.b)("td",{parentName:"tr",align:null},"master"),Object(i.b)("td",{parentName:"tr",align:null},"2:00pm ET M-F"),Object(i.b)("td",{parentName:"tr",align:null},"3:00pm ET M-F"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/vets-api/releases"},"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Jenkins performs the following tasks after a pull request is merged into ",Object(i.b)("inlineCode",{parentName:"p"},"master")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Build")," ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Deploy")," to development and staging using deployment artifact"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://help.github.com/en/articles/creating-releases"},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"A big assumption in this process is that the ",Object(i.b)("inlineCode",{parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),Object(i.b)("h2",{id:"process-details"},"Process details"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://help.github.com/en/articles/creating-releases"},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),Object(i.b)("p",null,"Every work day at the configured time a ",Object(i.b)("a",{parentName:"p",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"},"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",Object(i.b)("inlineCode",{parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),Object(i.b)("p",null,"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Deploy")," to production using deployment artifacts")),Object(i.b)("p",null,"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),Object(i.b)("h2",{id:"rollbacks"},"Rollbacks"),Object(i.b)("p",null,"If a production deployment introduces issues that affect Service Level Objectives (SLOs)\nestablished for the project, you may restore service to users by rolling back\nto a previous deployment. This is accomplished by triggering a new deploy job in Jenkins using a\nprevious release tag. Typical deployment times are under 5mins."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Identify the release you want to rollback to by visiting the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release log")),Object(i.b)("li",{parentName:"ol"},"Click on the commit ID in the left column of the release you want to reference"),Object(i.b)("li",{parentName:"ol"},"Copy the commit ref (it will be a long string like: ",Object(i.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(i.b)("li",{parentName:"ol"},"Visit the ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovprod/build?delay=0sec"},"vets-website prod deploy job")),Object(i.b)("li",{parentName:"ol"},"Enter the ref value into the ref field"),Object(i.b)("li",{parentName:"ol"},'Click "Build"')),Object(i.b)("p",null,"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should\nbe applied through the standard development workflow."),Object(i.b)("h2",{id:"creating-a-release"},"Creating a Release"),Object(i.b)("p",null,"If the commit you are trying to release to does not have an official release tag, you have to create one:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Update your local master branch"),Object(i.b)("li",{parentName:"ol"},"Check out the commit you want"),Object(i.b)("li",{parentName:"ol"},"Note the latest release from the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release log")),Object(i.b)("li",{parentName:"ol"},"Visit the ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/releases/job/vets-website/build?delay=0sec"},"release job in Jenkins")),Object(i.b)("li",{parentName:"ol"},"Make sure the commit you want to use has ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"},"passed through the build pipeline in master")),Object(i.b)("li",{parentName:"ol"},'Replace the "ref" value with the commit you want to use to create the release (it will be a long string like: ',Object(i.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(i.b)("li",{parentName:"ol"},'Click "Build"'),Object(i.b)("li",{parentName:"ol"},"You should now see it in the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release log")," and can follow the normal rollback steps.")),Object(i.b)("p",null,"This should create a new release, and deploy it to va.gov."),Object(i.b)("h2",{id:"hotfixes"},"Hotfixes"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",Object(i.b)("inlineCode",{parentName:"p"},"master"),'\nhas significantly deviated from the release and a fix to the failed production release is critical.\nTo create a hotfix, create a branch from the last stable release tag, make changes necessary (with review),\ncreate a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the\nrelease name as a parameter. This documentation is above, in the "Creating a Release" section.'),Object(i.b)("h2",{id:"manual-deployment"},"Manual deployment"),Object(i.b)("p",null,"Out-of-band deploys may be performed in accordance with Platform ",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/deployment-policy.md#requesting-out-of-band-deploys"},"deployment policy"),"."),Object(i.b)("p",null,"Two out-of-cycle deploys are supported in Jenkins:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"partial deploy including only static page changes (",Object(i.b)("inlineCode",{parentName:"li"},"vagov-content")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Drupal"),")"),Object(i.b)("li",{parentName:"ul"},"full deploy of VA.gov client app and static pages")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": If a full or partial manual deploy of vets-website is kicked off while a scheduled deploy\nis in progress (or vice versa), the builds will not conflict. Whichever begins first will deploy\nfirst, with the latter queued up behind it."),Object(i.b)("h3",{id:"before-deploying"},"Before deploying"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Wait for ",Object(i.b)("strong",{parentName:"li"},"Jenkins")," to ",Object(i.b)("strong",{parentName:"li"},"build the change")," in ",Object(i.b)("inlineCode",{parentName:"li"},"vets-website")),Object(i.b)("li",{parentName:"ul"},"Builds status can be viewed ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"},"here"),". ",Object(i.b)("em",{parentName:"li"},"Requires SOCKS proxy. See ",Object(i.b)("a",{parentName:"em",href:"/getting-started/internal-tools"},"Accessing internal tools"))),Object(i.b)("li",{parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),Object(i.b)("h3",{id:"content-only-production-deploy"},"Content-only production deploy"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start a deploy job"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Log into Jenkins ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"},"here")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build with Parameters")),Object(i.b)("li",{parentName:"ul"},"Set the ",Object(i.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(i.b)("strong",{parentName:"li"},"5")," minutes"),Object(i.b)("li",{parentName:"ul"},"Check ",Object(i.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(i.b)("em",{parentName:"li"},"important")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build")),Object(i.b)("li",{parentName:"ul"},"Verify commits in ",Object(i.b)("strong",{parentName:"li"},"deployment notification"))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"In the ",Object(i.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/C0MQ281DJ"},"#vfs-engineers")," Slack channel, Jenkins will include a link that shows the exact commits being released in the ",Object(i.b)("strong",{parentName:"em"},"deploy notification"),"."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Verify")," changes in ",Object(i.b)("strong",{parentName:"p"},"production")," once the build finishes"))),Object(i.b)("h3",{id:"full-production-deploy-of-vagov"},"Full production deploy of VA.gov"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Last deployment time"),": You can check the build ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"},"history")," for the time of the last deploy (usually daily at 2pm EST)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Commit history"),": ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"},"Look")," for commits after the last deploy and verify they're production ready.")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You may need to contact the developers of those commits to verify.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start a deploy job"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Log into Jenkins ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"},"here")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build with Parameters")," ",Object(i.b)("em",{parentName:"li"},"(contact ",Object(i.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/CJYRZK2HH"},"#vsp-operations")," if you don't see this option and think you should)")),Object(i.b)("li",{parentName:"ul"},"Set the ",Object(i.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(i.b)("strong",{parentName:"li"},"5")," minutes"),Object(i.b)("li",{parentName:"ul"},"Uncheck ",Object(i.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(i.b)("em",{parentName:"li"},"important")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build")),Object(i.b)("li",{parentName:"ul"},"Verify commits in ",Object(i.b)("strong",{parentName:"li"},"deployment notification"))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"In the ",Object(i.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/C0MQ281DJ"},"#vfs-engineers")," Slack channel, Jenkins will include a link that shows the exact commits being released in the ",Object(i.b)("strong",{parentName:"em"},"deploy notification"),"."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Verify")," changes in ",Object(i.b)("strong",{parentName:"p"},"production")," once the build finishes"))),Object(i.b)("h3",{id:"manual-deployment-of-stagingvagov"},"Manual deployment of staging.va.gov"),Object(i.b)("p",null,"When staging deployments get clogged up or staging as a whole falls behind production\n(for various reasons) you may need to execute a manual deployment for staging. To do this\nuse the following steps: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Visit the ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovstaging/"},"vets-website vagovstaging")," job in Jenkins"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build with Parameters")),Object(i.b)("li",{parentName:"ol"},"Make sure the commit you want to use has ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"},"passed through the build pipeline in master")),Object(i.b)("li",{parentName:"ol"},'Replace the "ref" value with the commit you want to use to create the release (it will be a long string like: ',Object(i.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Build")),Object(i.b)("li",{parentName:"ol"},"You can watch the deployment process from the ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovstaging/"},"vets-website vagovstaging")," status page in Jenkins "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://frontend-support-dashboard.now.sh/"},"Confirm that your deployed commit is on staging"))),Object(i.b)("h2",{id:"dealing-with-flaky-unit-tests"},"Dealing with Flaky Unit Tests"),Object(i.b)("p",null,"A test fixture is a fixed state so the results should be repeatable. A flaky test is a test\nwhich could fail or pass for the same configuration. In monitoring the deploy of vets-website\nwe often have to deal with flaky tests in a few specific situations:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A flaky test inside of a pull request"),Object(i.b)("li",{parentName:"ol"},"A flaky test in ",Object(i.b)("inlineCode",{parentName:"li"},"master")," when an autodeploy is ",Object(i.b)("em",{parentName:"li"},"not")," nearing"),Object(i.b)("li",{parentName:"ol"},"A flaky test in ",Object(i.b)("inlineCode",{parentName:"li"},"master")," when an auto-deploy is nearing")),Object(i.b)("p",null,"To tell if an auto-deploy is nearing you can refer to the table at the top of this document."),Object(i.b)("h4",{id:"a-flaky-test-inside-of-a-pull-request"},"A flaky test inside of a pull request"),Object(i.b)("p",null,"If a unit test fails in a pull request, no one is alerted so it’s more likely that it gets refreshed\nto unblock the work or skipped in the PR, then reviewed by the code owner. This action is the\nresponsibility of the pull request owner and has no effect on the daily deploy."),Object(i.b)("h4",{id:"a-flaky-test-in-master-when-an-autodeploy-is-not-nearing"},"A flaky test in master when an autodeploy is not nearing"),Object(i.b)("p",null,"If a unit test fails in master and a deploy is not nearing (or has already happened for the day),\nthe failure can be ignored as inconsequential. However, the pipeline should still be refreshed\nin order to tell if the test is flaky or legitamately failing. The relevant code owner should\nthen be alerted so they can either skip or fix the test before the next deploy (at the discretion\nof the test owner)."),Object(i.b)("h4",{id:"a-flaky-test-in-master-when-an-auto-deploy-is-nearing"},"A flaky test in master when an auto-deploy is nearing"),Object(i.b)("p",null,"If a unit test fails in ",Object(i.b)("inlineCode",{parentName:"p"},"master")," and a scheduled deploy is nearing, the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group"},"Front-end Tools support\nteam member")," should\nrefresh the pipeline immediately, open up a pull request to skip the test, and alert the code owner\nfor a fix and/or pull request approval to skip the test. Ideally the test gets fixed, but in reality,\nthe process to merge can often take longer than is allowed for by the timing of the deploy. This is\nwhy it is important to have a pull request opened immediately to skip the test if needed - no need\nto wait for the code owner, delays can fail the deploy. This is the most common reason for a failed\ndeploy so we should all be on high alert for it while on a support rotation."),Object(i.b)("p",null,"As the pull request is running through the pipeline, the support engineer should keep\nrefreshing the master pipeline just in case it catches and is successful to prevent a failed deploy.\nEven if the deploy is successful, the test should be either fixed or skipped as to not block future\ndeploys."))}b.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-161fc1d7e2f2f30a2185.js.map