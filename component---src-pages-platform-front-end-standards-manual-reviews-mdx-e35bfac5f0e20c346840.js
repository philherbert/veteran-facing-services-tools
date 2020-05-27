(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var o=t("q1tI"),a=t.n(o),r=t("8FPV"),s=(t("gu/5"),t("eoYm"),t("v9g0"),t("pJf4"),t("Yk4M")),c=t("Wbzz");function m(){return a.a.createElement(c.StaticQuery,{query:"157057713",render:function(e){return a.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function i(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(c.Link,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(m,null)):a.a.createElement(i,{item:e,key:e.name})}))):null}var p=t("MEl4"),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(d,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},AyTq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m})),t.d(n,"_frontmatter",(function(){return i}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/");var o=t("q1tI"),a=t.n(o),r=t("6qfE"),s=t("3dLD");var c={},m=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,o.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},a.a.createElement("h1",{id:"automated-code-quality"},"Automated code quality"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Each pull request (PR) on ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," runs through an automated process that looks for code additions and modifications that don't meet code quality standards. If no issues are found, the code does not need to be reviewed by a VSP engineer. If a potential issue is found, a bot will leave an automated comment and request a manual review from the ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"frontend-review-group"),"."),a.a.createElement(r.MDXTag,{name:"p",components:n},"   ",a.a.createElement(r.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://images.zenhubusercontent.com/5e387fa505ac7e30c820a2da/a09c4c8c-ae32-4142-8fa5-0fc81b6a1892",alt:"Screen Shot"}})),a.a.createElement("h2",{id:"manual-reviews"},"Manual reviews"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The following items trigger a manual review:"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"A call to ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Sentry")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"ESLint being disabled"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"An icon is added with ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"<i ..."))),a.a.createElement("h3",{id:"sentry-calls"},"Sentry calls"),a.a.createElement(r.MDXTag,{name:"p",components:n},"VSP reviews logs to Sentry to ensure that any new logs are useful and do not contain personally identifiable information (PII)."),a.a.createElement(r.MDXTag,{name:"p",components:n},"Examples:"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Do not log an entire request response if all that's important is an error code."),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Do not log PII such as names, emails, or user IDs.")),a.a.createElement("h3",{id:"eslint"},"ESLint"),a.a.createElement(r.MDXTag,{name:"p",components:n},"VSP enforces ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/frontend/eslint"}},"ESLint rules")," through CircleCI to enforce code quality. ESLint rules are included in the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".eslintrc")," file, which is located in the root folder. Any rules that VSP is ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/adding-new-rules.md"}},"testing for inclusion")," are located in the ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/circle.eslint.json"}},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"circle.eslint.json"))," file."),a.a.createElement(r.MDXTag,{name:"p",components:n},"When ESLint rules are disabled, VSP will review each case individually. "),a.a.createElement("h3",{id:"icons"},"Icons"),a.a.createElement(r.MDXTag,{name:"p",components:n},"VSP uses Font Awesome as a dependency, which uses the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<i>")," tag for adding icons. Sometimes an icon is used as decoration, but other times it is used to convey meaning to the user. VSP reviews the code to ensure that whenever an icon is being used to convey meaning, the meaning is also conveyed to a screen reader."),a.a.createElement("h2",{id:"actions-to-take"},"Actions to take"),a.a.createElement(r.MDXTag,{name:"p",components:n},"If a manual review is triggered, you can use the error information provided in the comment to identify the problem and resolve any errors. A member of the VSP team will review the PR and confirm that all issues have been resolved or will follow up with more feedback. "))},o}(a.a.Component),i={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-manual-reviews-mdx-e35bfac5f0e20c346840.js.map