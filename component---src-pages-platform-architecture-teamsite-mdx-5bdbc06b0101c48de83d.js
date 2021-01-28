(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),s=a.n(n),i=a("Wbzz");function r(e){var t=e.item;return t.href?s.a.createElement("li",{key:t.name},s.a.createElement(i.Link,{to:t.href},t.name)):s.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?s.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?s.a.createElement("li",{key:e.name},n&&s.a.createElement(r,{item:e}),!n&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(o,{isSublist:!0,items:e.items})):s.a.createElement(r,{item:e,key:e.name})}))):null}var l=a("MEl4"),c=a.n(l);function b(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?s.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},s.a.createElement("div",{className:"site-c-sidenav"},s.a.createElement(o,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?s.a.createElement("div",null,s.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",s.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=a("8FPV");function d(e){var t=e.children,a=e.location,n=e.pageContext;return s.a.createElement(m.a,{location:a},s.a.createElement("div",{className:"vads-l-row"},s.a.createElement(b,{location:a}),s.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,s.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},MoNh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("3dLD"),r={},o={_frontmatter:r},l=i.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"teamsite-overview"},"Teamsite Overview"),Object(s.b)("p",null,"Updated from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12779#issue-356005850"}),"TeamSite Technical Solution and Implementation")),Object(s.b)("p",null,"EWIS serves much of the existing content on ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://www.va.gov"}),"www.va.gov")," (e.g. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://www.va.gov/health"}),"www.va.gov/health"),") and to accomodate this our systems serve that request from our version of the site on sites that exist on the same domain."),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://user-images.githubusercontent.com/215266/45632257-195abc80-ba5a-11e8-9f7c-76c63fb14ac4.png",alt:"ewis"}))),Object(s.b)("p",null,"Requests to subdomain hosts such as ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://www.benefits.va.gov"}),"www.benefits.va.gov")," are not proxied through our systems and are not under our control. Content for these sites exists on TeamSite: a content management system utilized by the VA to manage content across several properties at the VA. Each property in TeamSite consists of perl-based template files, which on publish rendered content to a file store. The rendered content contains server side includes, which reference content from a directory called ",Object(s.b)("inlineCode",{parentName:"p"},"va_files"),", which has shared header and footer functionality."),Object(s.b)("p",null,"There are no consistent staging/production environments for TeamSite properties, and there are multiple variants of header and footer functionality in ",Object(s.b)("inlineCode",{parentName:"p"},"va_files")," (attached to this issue). For properties that do have staging and production variants, they reference the same version of header and footer content. A change to the header or footer will affect both the staging and production versions of a property."),Object(s.b)("h2",{id:"scripts-and-teamsite-administration"},"Scripts and Teamsite Administration"),Object(s.b)("p",null,"The header injection markup is added to Teamsite templates by their administrator. Current point of contact for this is:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Josh Tuscher ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"mailto:Joshua.Tuscher@va.gov"}),"Joshua.Tuscher@va.gov"))),Object(s.b)("p",null,"Current markup added to Teamsite templates:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<style type="text/css">.brand-consolidation-deprecated { display: none !important; } </style>\n<link rel="stylesheet" href="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/styleConsolidated.css" />\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/settings.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/polyfills.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/vendor.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/proxy-rewrite.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/vendor/uswds.min.js"><\/script>\n')),Object(s.b)("h2",{id:"teamsite-behavior-and-whitelisting-pages"},"Teamsite Behavior and Whitelisting Pages"),Object(s.b)("p",null,"There are an unknown number of Teamsite templates that drive the ",Object(s.b)("inlineCode",{parentName:"p"},"<head>")," content on Teamsite pages and there are several pages that receive the above markup that ",Object(s.b)("strong",{parentName:"p"},"should not")," show the va.gov header. The proxy rewrite application uses a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/b770f380270722228563e56629af440c64342157/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json"}),"whitelist")," to drive the activation of the header content. Example whitelist entry:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),'{\n  "hostname": "www.benefits.va.gov",\n  "pathnameBeginning": "/",\n  "cookieOnly": false\n},\n')),Object(s.b)("p",null,"Pages can be whitelisted in two ways:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"cookieOnly: false")," - the header will always activate"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"cookieOnly: true")," - the header will activate when ",Object(s.b)("inlineCode",{parentName:"li"},"proxyRewrite")," cookie is set to true.")),Object(s.b)("p",null,"This cookie can be set in the console by running ",Object(s.b)("inlineCode",{parentName:"p"},'document.cookie = "proxyRewrite=true;"')),Object(s.b)("h3",{id:"considerations-when-editing-and-testing-the-whitelist"},"Considerations when editing and testing the whitelist"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Some Teamsites redirect to both ",Object(s.b)("inlineCode",{parentName:"li"},"subdomain.va.gov")," and ",Object(s.b)("inlineCode",{parentName:"li"},"www.subdomain.va.gov")," (sometimes alternating between the two). Always test the redirect behavior of the first level of links on the page and ensure that both hosts are whitelisted if necessary."),Object(s.b)("li",{parentName:"ul"},"New hostnames need to be added to our ",Object(s.b)("inlineCode",{parentName:"li"},"allowed_origins")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L277"}),"here")," and ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L290"}),"here"),". Subdomains are considered separate hostnames by CORS and the browser performs CORS checks on all of the webfonts injected by the Teamsite header scripts. Terraform updates are not automatically deployed- work with a Devops engineer to deploy these changes."),Object(s.b)("li",{parentName:"ul"},"There are at least two behaviors provided by the Teamsite system for adding the inline scripts to the page:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"as part of the initial document response, or"),Object(s.b)("li",{parentName:"ul"},"injected as part of a Teamsite sourced JavaScript.")))),Object(s.b)("h1",{id:"proxy-rewrite"},"Proxy Rewrite"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"proxy-rewrite")," application is used to inject site-wide VA.gov components into pages that are outside of the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://www.va.gov"}),"www.va.gov"),' build and publish process. The affected sites are generally referred to as "TeamSite", because TeamSite is the name of the CMS use for those pages.'),Object(s.b)("p",null,"This works by -"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"A request is sent to a VA.gov website"),Object(s.b)("li",{parentName:"ol"},"The content requested from the Teamsite servers and passed through the ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"http://www.va.gov"}),"www.va.gov")," proxy"),Object(s.b)("li",{parentName:"ol"},"A code snippet included in the Teamsite page downloads the ",Object(s.b)("inlineCode",{parentName:"li"},"proxy-rewrite")," app which overwrites the Teamsite header and footer with VA.gov content")),Object(s.b)("p",null,"Because the Teamsite template containing the ",Object(s.b)("inlineCode",{parentName:"p"},"proxy-rewrite")," snippet is used both on sites that should and shouldn't show the VA.gov header, the script is governed by an allow list contained in ",Object(s.b)("inlineCode",{parentName:"p"},"proxy-rewrite-whitelist.json"),"."),Object(s.b)("h2",{id:"local-dev"},"Local Dev"),Object(s.b)("p",null,"Since Teamsite content is not run through the ",Object(s.b)("inlineCode",{parentName:"p"},"vets-website")," build process, testing changes on Teamsite requires running local or staging changes against the production pages. The ",Object(s.b)("inlineCode",{parentName:"p"},"proxy-rewrite")," app supports targeting a specific environment for testing:"),Object(s.b)("p",null,"For example: ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://staging.va.gov/health/?targetEnvironment=vagovstaging"}),"https://staging.va.gov/health/?targetEnvironment=vagovstaging")),Object(s.b)("p",null,"The default behavior for ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://staging.va.gov/health"}),"https://staging.va.gov/health")," is to load the production assets. when the ",Object(s.b)("inlineCode",{parentName:"p"},"targetEnvironment")," is set, the loader well delete the production nodes from the DOM and add script and style nodes for the target environment."),Object(s.b)("p",null,"The injection script will support any of ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/constants/environments.js"}),"these")," environment names set as the ",Object(s.b)("inlineCode",{parentName:"p"},"targetEnvironment"),"."),Object(s.b)("p",null,"Caveats:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Style node deletions will prompt a rebuilding of the CSSOM but removing script nodes doesn't undo any JS that was run before the JS node was removed. For most cases this should not impact testing as the application specific code doesn't run but JS that is executed before the application (e.g. polyfills) will always run the production code first.")),Object(s.b)("h2",{id:"charles-proxy"},"Charles Proxy"),Object(s.b)("p",null,"You can also use an application called Charles Proxy to map the ",Object(s.b)("inlineCode",{parentName:"p"},"proxy-rewrite")," bundles of TeamSite pages to your local machine. This way you can navigate directly to ",Object(s.b)("inlineCode",{parentName:"p"},"https://www.va.gov/health/")," and when the request for the production bundle of ",Object(s.b)("inlineCode",{parentName:"p"},"proxy-rewrite")," is sent, Charles will have overridden that file to instead be served locally. Instructions to set this up are located here, ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"}),"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"),"."),Object(s.b)("h2",{id:"teamsite-visual-regression-testing"},"Teamsite Visual Regression Testing"),Object(s.b)("p",null,"Both scripts compare production Teamsite header and footer against images in ",Object(s.b)("inlineCode",{parentName:"p"},"vets-website")," repo"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"npm run vrt")," - test fails and generates diff images when images differ")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"npm run vrt:baseline")," - test always succeeds and replaces existing baseline images when images differ")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If no baseline images exist for a test, both scripts will"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"succeed on each test that has no baseline image and"),Object(s.b)("li",{parentName:"ul"},"generate a new baseline image for it."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Diff images are removed automatically when their associated test succeeds."))),Object(s.b)("h3",{id:"details"},"Details"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"compares snapsshots of ",Object(s.b)("inlineCode",{parentName:"li"},"<header>")," and ",Object(s.b)("inlineCode",{parentName:"li"},".footerNav")," on current subdomain Teamsite pages"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/americanexpress/jest-image-snapshot"}),"jest-image-snapshot")," uses ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/mapbox/pixelmatch"}),"pixelmatch")," to detect failure"),Object(s.b)("li",{parentName:"ul"},"Diff images show ",Object(s.b)("strong",{parentName:"li"},"left center right")," the ",Object(s.b)("strong",{parentName:"li"},"baseline diff new")," images\n",Object(s.b)("span",Object.assign({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"954px"}}),"\n      ",Object(s.b)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/e29b7d031ac4d672906b0209d4ef1b20/eb2af/diff-image-example.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(s.b)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.07335907335908%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbElEQVQozz1S3U9ScRj+AQGO0kC0WkbmRFZNAfmQDxE4fvA940PNIguipUICBw2BvGnNi7xpZUEXXTTbvGqrv6TL1lVbrnW+aHA42HUvUL579jvnt/M87/u873tQt7sgmc2jKRzZcIEjhwwp72bluFGnKIpuB0lSf7h6qfKZb8+JsC2gtZEVw3uPKy91F7rn8jL39unZx0i37tssN0FM0wwDYDriJ29BnJV5Cmdb/G0+iJ2bSDK91TOXl8xsnXLgImcO6ZOuzOuOmGaqJ5WL5U/ImoYCYmdOaMdBLAKbrcqQbyYntKUFdhzpofKbtphhfv2gKfKksmAqK/cWhQ6cZ8vwJtNdWA512dMSDJdY1/sn4gJbGulWPZlXHFsj6d/M0Tfm6CtBVUFc2P+IjGtnsCwyJ3mWFN+6IbZnkAqLa71rw9h9vSUyYFgUKn3+WIlrsC3P5M/q9y8ESUGu3f0Pg5MrOn9SYYleMkdl6jAAjThj+kBK5YwpTMvnDUsipdcfKzYbLFOtgmfomCBJjq3v7h8M2VYm5h8NmJYHTLdk6hAAKR33rk7H+8YXzukX+8YjHTHXXlUraIogCLg+e3lw2RK9MnkHOP26BelYCIDUnof6QHJ07sGw/e5F403xiC8QLzW5BtMOmDZUbrC15+VDaNA43/IIKXo1YZkmjDSeVTADJ4ivzyYUlts3EjvQM/M/YGdw3ascXptJmIMbKiwGZoE5aI0iYEMmgHQs2KsJCZVeX6zYYP/9YXCCbRjB0xfv5doIyC4YlqSjQSADUOcBgAHAZ7ANYrZea+23HSA+5tidvXeCIZdcG+4wO/gLgdVNwRhqrt4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Example Diff Image",title:"Example Diff Image",src:"/veteran-facing-services-tools/static/e29b7d031ac4d672906b0209d4ef1b20/eb2af/diff-image-example.png",srcSet:["/veteran-facing-services-tools/static/e29b7d031ac4d672906b0209d4ef1b20/a2ead/diff-image-example.png 259w","/veteran-facing-services-tools/static/e29b7d031ac4d672906b0209d4ef1b20/6b9fd/diff-image-example.png 518w","/veteran-facing-services-tools/static/e29b7d031ac4d672906b0209d4ef1b20/eb2af/diff-image-example.png 954w"],sizes:"(max-width: 954px) 100vw, 954px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "))),Object(s.b)("h2",{id:"what-to-do-when-the-test-fails"},"What To Do When The Test Fails"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If needed, run ",Object(s.b)("inlineCode",{parentName:"li"},"npm run vrt")," locally"),Object(s.b)("li",{parentName:"ul"},"The test log will show a",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Summary of successes and failures\n",Object(s.b)("span",Object.assign({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"632px"}}),"\n      ",Object(s.b)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/2f6dfa87d1242624eed4ea0b0b1284a2/084e2/vrt-test-summary-example.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(s.b)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.18146718146718%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTElEQVQoz4VSW26DMBDkaUySJnz2BCkP29jgB5DHBXqI3v8WHZtEalWVSCNrDTs7s+uNPsVomI46kz2RemgA8UnfjvpW2fvbeAX2atkPl5Ocv+a7GZeo7e3Z3qickZozCyAg3ObcJq2m/VSIqewnfCmEw19cC2Y6Ob1zG8W1Spku+xn/kEqFz0NwGC5xPURnGX2oXzj/iEkzlMyWcvYlhfPgbuUT7tJWRyjxB0k9+NIlt5W+VuaO1NU5uiXBPJjJP+QHUtjuRgiSVdbb9udOLb42vG2Q82agvdvLBW3DPEBD8xgs+k+3lSkz0IybMWnHpPFADE4cAly3yFmjCmEP6gLlnZx3QRABntczt21ntcqYpo9R+xPTQtvr4yUvbR/1lTC3rlSAzjvM3ID52jbhJuhMzyWB7HNJXthuVM50oLlSeHLhn8rbJmFDN8jfn91myihA6WoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Test Summary Example",title:"Test Summary Example",src:"/veteran-facing-services-tools/static/2f6dfa87d1242624eed4ea0b0b1284a2/084e2/vrt-test-summary-example.png",srcSet:["/veteran-facing-services-tools/static/2f6dfa87d1242624eed4ea0b0b1284a2/a2ead/vrt-test-summary-example.png 259w","/veteran-facing-services-tools/static/2f6dfa87d1242624eed4ea0b0b1284a2/6b9fd/vrt-test-summary-example.png 518w","/veteran-facing-services-tools/static/2f6dfa87d1242624eed4ea0b0b1284a2/084e2/vrt-test-summary-example.png 632w"],sizes:"(max-width: 632px) 100vw, 632px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(s.b)("li",{parentName:"ul"},"Failure details for each test with path to diff image for failure\n",Object(s.b)("span",Object.assign({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"733px"}}),"\n      ",Object(s.b)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/26804a1ddc9a185b4a0079b6ca5f60b9/00b70/cli-failure-example.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(s.b)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.471042471042466%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVQY032R3W6DMAyFQxkkaQtVq64UrdrVJBIaAnZCofzs/R9rLrvZpG7Sp+jE8Yljh0mNx8rJq0sNfrMzmBi3q1xU+tW1DUsfLOKFMG1IkasPtJP1nQnbp+3n/janfk78vMEpMl1UdbHt4qqjDGE7TsL2m+a+hUHUvXxEbhsc2cG4D4uZcReL79blxp9LvJSYL5w1ZvqxvpV40phryDTQ9qSavO7YUUGm4FWDLCAqmriAWAF/gCQihVyjWIg1Uo9CLVpBanu2oiQYQ3Nb+zlt562fDjAf6mFl2tj21B5T+IQCOJlDBaK5k1nimLgpwSFx444uctMWx+hvs1gqg8SZRhIUwAoMloMf4H+V6dkcRl7362YgOA3ZOPqJ557f5i/dskEdrzHKrwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Failure Detail Example",title:"Failure Detail Example",src:"/veteran-facing-services-tools/static/26804a1ddc9a185b4a0079b6ca5f60b9/00b70/cli-failure-example.png",srcSet:["/veteran-facing-services-tools/static/26804a1ddc9a185b4a0079b6ca5f60b9/a2ead/cli-failure-example.png 259w","/veteran-facing-services-tools/static/26804a1ddc9a185b4a0079b6ca5f60b9/6b9fd/cli-failure-example.png 518w","/veteran-facing-services-tools/static/26804a1ddc9a185b4a0079b6ca5f60b9/00b70/cli-failure-example.png 733w"],sizes:"(max-width: 733px) 100vw, 733px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"If failure is caused by production issue"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Repair issue and publish to production"),Object(s.b)("li",{parentName:"ul"},"Verify ",Object(s.b)("inlineCode",{parentName:"li"},"npm run test:vrt")," succeeds"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"If failure is caused by an update"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Run ",Object(s.b)("inlineCode",{parentName:"li"},"npm run test:vrt:baseline")),Object(s.b)("li",{parentName:"ul"},"Check in new baseline images to ",Object(s.b)("inlineCode",{parentName:"li"},"vets-website"))))))}c.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-teamsite-mdx-5bdbc06b0101c48de83d.js.map