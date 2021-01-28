(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),i=n.n(a),l=n("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(l.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function b(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(r,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(b,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var c=n("MEl4"),o=n.n(c);function s(e){var t=e.location,n=o.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(b,{items:n.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=n("8FPV");function m(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(u.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(s,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:a.sourceUrl}))))}},HN4p:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return o}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("3dLD"),r={},b={_frontmatter:r},c=l.a;function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"http-headers-used-on-vagov"},"HTTP Headers used on VA.gov"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP headers control browser behavior"),Object(i.b)("li",{parentName:"ul"},"Browser behavior is a front end concern"),Object(i.b)("li",{parentName:"ul"},"Shared responsibility between devops and front end",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"configuration"),Object(i.b)("li",{parentName:"ul"},"management"),Object(i.b)("li",{parentName:"ul"},"user experience"))),Object(i.b)("li",{parentName:"ul"},"Typically",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"devops responsible for the how (e.g. Terraform)"),Object(i.b)("li",{parentName:"ul"},"front end responsible for the why (e.g. security, caching behavior)")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"http-example"},"HTTP Example"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"raw request and response")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-mermaidjs"}),"graph TB\n    subgraph HTTP\n      F[HTTP <br/>Headers]\nsubgraph HTTP Body\n       G[HTML<br />Head]\n       A[HTML Body]\n       end\n    end\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"http-request-example"},"HTTP Request Example"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET /health-care/ HTTP/1.1"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"action to perform, resource location, http version"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET"),", ",Object(i.b)("inlineCode",{parentName:"li"},"POST"),", ",Object(i.b)("inlineCode",{parentName:"li"},"PUT"),", ",Object(i.b)("inlineCode",{parentName:"li"},"DELETE")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Host: www.va.gov")," - derived from URI"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Connection: keep-alive"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HTTP persistent connection"),Object(i.b)("li",{parentName:"ul"},"reduces latency and traffic by reusing TCP connection"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Upgrade-Insecure-Requests: 1"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"supports ",Object(i.b)("inlineCode",{parentName:"li"},"Content-Security-Policy: upgrade-insecure-requests")),Object(i.b)("li",{parentName:"ul"},"basically tells server to redirect http requests to https"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"User-Agent: ...")," - identifying information about client software e.g. OS, version")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"http-request-example-continued"},"HTTP Request Example continued"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accepts: ..."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MIME types supported"),Object(i.b)("li",{parentName:"ul"},"Server chooses one as the ",Object(i.b)("inlineCode",{parentName:"li"},"Content-Type")," on the response"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept-Encoding: gzip, defat, br")," - supported compression algorithms"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept-Language: en-US,en;q=0.9"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"supported language and localization preference"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"q=0.9")," expresses order of preference")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"http-response-example"},"HTTP Response Example"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HTTP/1.1 200 OK")," - response version and status code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Date: ...")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x-amz-...: ...")," -  Amazon custom response headers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Referrer-Policy: no-referrer-when-downgrade"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"determines ",Object(i.b)("inlineCode",{parentName:"li"},"Referer")," header behavior i.e. previous page link"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-referrer-when-downgrade")," is default behavior- sends previous page link when security protocol is the same"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Strict-Transport-Security: ..."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"tells the browser to only connect to website via https"),Object(i.b)("li",{parentName:"ul"},"impacts all future connections to a site")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"http-response-example-continued"},"HTTP Response Example continued"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X-Content-Type-Options: no-sniff"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"follow the mime-types in the http content-type"),Object(i.b)("li",{parentName:"ul"},"only applies to scripts and styles right now"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X-Frame-Options: deny"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"determines if browser can render page in a frame"),Object(i.b)("li",{parentName:"ul"},"prevents clickjacking attacks"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X-XSS-Protection: 1; report=/csp-report"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Content-Encoding: gzip")," - encoding used on body"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Set-Cookie: ...")," - cookie from server")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"http-response-example-continued-2"},"HTTP Response Example continued 2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Transfer-Encoding: chunked"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"form of encoding used between nodes (hop-by-hop)"),Object(i.b)("li",{parentName:"ul"},"chunked: ",Object(i.b)("inlineCode",{parentName:"li"},"Content-Length")," is unknown"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Connection: Keep-alive")," - see request example")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"cache-control-response"},"Cache Control Response"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Cache-Control: public, max-age=86400"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"can be stored by any cache"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"private")," indicates response can be cached but contains user specific info"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"max-age=86400")," - number of minutes cache can be used before checking if updated (60 days)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Etag: [hash]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"file hash used when checking if file is updated"),Object(i.b)("li",{parentName:"ul"},"when matched, server will return status code ",Object(i.b)("inlineCode",{parentName:"li"},"304 Not Modified"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"cache-control-request"},"Cache Control Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Cache-Control: no-cache")," & ",Object(i.b)("inlineCode",{parentName:"li"},"Pragma: no-cache"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HTTP 1.1 and 1.0"),Object(i.b)("li",{parentName:"ul"},"check if resource has changed using ",Object(i.b)("inlineCode",{parentName:"li"},"ETag")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Last-Modified")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"If-None-Match: [hash]")," & ",Object(i.b)("inlineCode",{parentName:"li"},"If-Modified-Since: [date]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"when ",Object(i.b)("inlineCode",{parentName:"li"},"max-age")," is reached, browser includes in request"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[date]")," header is used only if ",Object(i.b)("inlineCode",{parentName:"li"},"[hash]")," is not supported")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Applies to all XHR requests not on the same origin"),Object(i.b)("li",{parentName:"ul"},"CORS headers are returned by the server allowing it to control a range of permissions",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin: https://www.va.gov")," - if allowed origin doesn't match the current origin, then the browser will not load the resource",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),Object(i.b)("li",{parentName:"ul"},"VA.gov is configured to only add this header when the request contains an origin that matches our whitelist"),Object(i.b)("li",{parentName:"ul"},"Server ",Object(i.b)("em",{parentName:"li"},"can")," block the request- ours do not opting to always return the resource")))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"cross-origin-resource-sharing-cors-options"},"Cross-Origin Resource Sharing (CORS) OPTIONS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE"),Object(i.b)("li",{parentName:"ul"},"OPTIONS request",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Request-Headers")," - list of headers client intends to send"))),Object(i.b)("li",{parentName:"ul"},"OPTIONS response",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers: x-key-inflection")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset")))),Object(i.b)("li",{parentName:"ul"},"If any of these permissions don't match the intended request, the browser will cancel it")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"cross-origin-resource-sharing-cors-other-directives"},"Cross-Origin Resource Sharing (CORS) Other directives"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"indicates that response will vary depending on the value of these headers"))),Object(i.b)("li",{parentName:"ul"},"Other controls: ",Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods: GET"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Access-Countrol-Max-Age: 0"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials: true"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"content-security-policy-csp"},"Content Security Policy (CSP)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"can be an HTTP header or an HTML meta tag"),Object(i.b)("li",{parentName:"ul"},"whitelist of valid sources of scripts",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"script-src: http://search.usa.gov")))),Object(i.b)("li",{parentName:"ul"},"can set set up to report CSP violations")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"configs"},"Configs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CSP",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}),"prod")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}),"staging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}),"dev")))),Object(i.b)("li",{parentName:"ul"},"CORS (requires manual deployment)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf"}),"prod")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf"}),"staging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf"}),"dev")))),Object(i.b)("li",{parentName:"ul"},"cache-control",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml"}),"prod"))))))}o.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-http-headers-mdx-927230d076fe8382a3c9.js.map