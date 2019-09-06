(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{372:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return c}),n.d(a,"_frontmatter",function(){return p});n(8),n(7),n(4),n(9),n(10);var t=n(1),m=n.n(t),o=n(2),r=n(334);var l={},c=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=r.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:a},m.a.createElement("h1",{id:"http-headers-used-on-vagov"},"HTTP Headers used on VA.gov"),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"overview"},"Overview"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"HTTP headers control browser behavior"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Browser behavior is a front end concern"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Shared responsibility between devops and front end",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"configuration"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"management"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"user experience"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Typically",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"devops responsible for the how (e.g. Terraform)"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"front end responsible for the why (e.g. security, caching behavior)")))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"http-example"},"HTTP Example"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"raw request and response")),m.a.createElement(o.MDXTag,{name:"pre",components:a},m.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-mermaidjs"}},"graph TB\n    subgraph HTTP\n      F[HTTP <br/>Headers]\nsubgraph HTTP Body\n       G[HTML<br />Head]\n       A[HTML Body]\n       end\n    end\n")),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"http-request-example"},"HTTP Request Example"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"GET /health-care/ HTTP/1.1"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"action to perform, resource location, http version"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"GET"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"POST"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"PUT"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"DELETE")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Host: www.va.gov")," - derived from URI"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Connection: keep-alive"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"HTTP persistent connection"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"reduces latency and traffic by reusing TCP connection"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Upgrade-Insecure-Requests: 1"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"supports ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Security-Policy: upgrade-insecure-requests")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"basically tells server to redirect http requests to https"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"User-Agent: ...")," - identifying information about client software e.g. OS, version")),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"http-request-example-continued"},"HTTP Request Example continued"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Accepts: ..."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"MIME types supported"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Server chooses one as the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Type")," on the response"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Accept-Encoding: gzip, defat, br")," - supported compression algorithms"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Accept-Language: en-US,en;q=0.9"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"supported language and localization preference"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"q=0.9")," expresses order of preference")))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"http-response-example"},"HTTP Response Example"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"HTTP/1.1 200 OK")," - response version and status code"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Date: ...")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"x-amz-...: ...")," -  Amazon custom response headers"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Referrer-Policy: no-referrer-when-downgrade"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"determines ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Referer")," header behavior i.e. previous page link"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"no-referrer-when-downgrade")," is default behavior- sends previous page link when security protocol is the same"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Strict-Transport-Security: ..."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"tells the browser to only connect to website via https"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"impacts all future connections to a site")))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"http-response-example-continued"},"HTTP Response Example continued"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"X-Content-Type-Options: no-sniff"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"follow the mime-types in the http content-type"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"only applies to scripts and styles right now"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"X-Frame-Options: deny"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"determines if browser can render page in a frame"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"prevents clickjacking attacks"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"X-XSS-Protection: 1; report=/csp-report"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Encoding: gzip")," - encoding used on body"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Set-Cookie: ...")," - cookie from server")),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"http-response-example-continued-2"},"HTTP Response Example continued 2"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Transfer-Encoding: chunked"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"form of encoding used between nodes (hop-by-hop)"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"chunked: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Length")," is unknown"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Connection: Keep-alive")," - see request example")),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"cache-control-response"},"Cache Control Response"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Cache-Control: public, max-age=86400"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"can be stored by any cache"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"private")," indicates response can be cached but contains user specific info"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"max-age=86400")," - number of minutes cache can be used before checking if updated (60 days)"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Etag: [hash]"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"file hash used when checking if file is updated"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"when matched, server will return status code ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"304 Not Modified"))))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"cache-control-request"},"Cache Control Request"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Cache-Control: no-cache")," & ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Pragma: no-cache"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"HTTP 1.1 and 1.0"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"check if resource has changed using ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ETag")," or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Last-Modified")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"If-None-Match: [hash]")," & ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"If-Modified-Since: [date]"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"when ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"max-age")," is reached, browser includes in request"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"[date]")," header is used only if ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"[hash]")," is not supported")))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Applies to all XHR requests not on the same origin"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"CORS headers are returned by the server allowing it to control a range of permissions",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Origin: https://www.va.gov")," - if allowed origin doesn't match the current origin, then the browser will not load the resource",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"VA.gov is configured to only add this header when the request contains an origin that matches our whitelist"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Server ",m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"li"},"can")," block the request- ours do not opting to always return the resource")))))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"cross-origin-resource-sharing-cors-options"},"Cross-Origin Resource Sharing (CORS) OPTIONS"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"OPTIONS request",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Request-Headers")," - list of headers client intends to send"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"OPTIONS response",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Headers: x-key-inflection")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"If any of these permissions don't match the intended request, the browser will cancel it")),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"cross-origin-resource-sharing-cors-other-directives"},"Cross-Origin Resource Sharing (CORS) Other directives"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"indicates that response will vary depending on the value of these headers"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Other controls: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Methods: GET"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Countrol-Max-Age: 0"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Credentials: true"))),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"content-security-policy-csp"},"Content Security Policy (CSP)"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"can be an HTTP header or an HTML meta tag"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"whitelist of valid sources of scripts",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"script-src: http://search.usa.gov")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"can set set up to report CSP violations")),m.a.createElement(o.MDXTag,{name:"hr",components:a}),m.a.createElement("h2",{id:"configs"},"Configs"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"CSP",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}},"prod")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}},"staging")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}},"dev")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"CORS (requires manual deployment)",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf"}},"prod")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf"}},"staging")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf"}},"dev")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"cache-control",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml"}},"prod"))))))},t}(m.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-http-headers-mdx-40714a8a1cc5ed39097c.js.map