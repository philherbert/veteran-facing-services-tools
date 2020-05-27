(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("q1tI"),o=t.n(a),s=t("8FPV"),r=(t("gu/5"),t("eoYm"),t("v9g0"),t("pJf4"),t("Yk4M")),c=t("Wbzz");function i(){return o.a.createElement(c.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:r})}function m(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(m,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(m,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(m,{item:e,key:e.name})}))):null}var l=t("MEl4"),d=t.n(l);function u(e){var n=e.location,t=d.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},EO9e:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"_frontmatter",(function(){return m}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/");var a=t("q1tI"),o=t.n(a),s=t("6qfE"),r=t("3dLD");var c={},i=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=r.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h1",{id:"creating-a-new-react-widget"},"Creating a new React widget"),o.a.createElement(s.MDXTag,{name:"p",components:n},"Note: Check out the ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"}},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),o.a.createElement("h2",{id:"adding-a-new-widget"},"Adding a new widget"),o.a.createElement(s.MDXTag,{name:"p",components:n},"All the static pages use the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"static-pages")," entry bundle, so any JS code included from that file will be on all static pages. In order to add a widget, you'll want to create a function that loads your desired React components (or plain JS) asynchronously, and mounts to an element on the page with your widget id."),o.a.createElement(s.MDXTag,{name:"ol",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Add a mount point element in the static content page your widget will live on:")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<div data-widget-type="my-new-widget" id="someId"></div>\n')),o.a.createElement(s.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Add a start up function to: ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/static-pages/static-pages-entry.js"),":")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"...\ncreateMyWidget(store, widgetTypes.MY_NEW_WIDGET);\n...\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},"You should also add a constant for your widget type in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/static-pages/widgetTypes.js"),":"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"export default {\n  ...\n  MY_NEW_WIDGET: 'my-new-widget',\n  ...\n}\n")),o.a.createElement(s.MDXTag,{name:"ol",components:n,props:{start:3}},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Write your create widget function:")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'export default async function createMyWidget(store, widgetType) {\n  const widget = document.querySelector(`[data-widget-type="${widgetType}"]`);\n\n  if (widget) {\n    // Load widget if there\'s a mount point for it\n    const {\n      default: MyNewWidget,\n    } = await import(/* webpackChunkName: "my-new-widget" */ \'../../platform/site-wide/my-new-widget\');\n\n    // Do whatever you need to do to start up your widget\n    ReactDOM.render(<MyNewWidget>, widget);\n  }\n}\n')),o.a.createElement(s.MDXTag,{name:"p",components:n},"Note that we don't import the widget code unless there's a mount point in the DOM. This function will run on every page, so we want to make sure we only download the bulk of the widget code when we're actually going to use it."),o.a.createElement("h2",{id:"guidelines-for-using-react-on-a-static-page"},"Guidelines for using React on a static page"),o.a.createElement(s.MDXTag,{name:"p",components:n},"We should be careful to not create a bad user experience when using React on static pages. Here are some guidelines you should follow:"),o.a.createElement(s.MDXTag,{name:"ol",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"JS and React take time to download, parse, and render. Make sure you are providing the appropriate feedback to users while that is happening, with a spinner or another method from the UX team."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Make sure the page is still usable if your React code fails to work. This can mean it fails to download, an error occurs, or just handling the different login states a user can be in."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Be aware of how much weight you're adding to the static-pages bundle and code-split/lazy load when it makes sense.")),o.a.createElement("h2",{id:"common-widget-code"},"Common widget code"),o.a.createElement(s.MDXTag,{name:"p",components:n},"There's a simple static page widget feature that you can use to help with the first two points above. The code is in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/static-pages/static-page-widgets.js"),". Using this will inline some JS that can handle displaying a loading spinner and showing an error message if something goes wrong before the React code can take over rendering. Several pension pages use this functionality (",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pages/pension/index.md"),", ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pages/pension/apply.md")," in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vagov-content"),"). It's controlled by defining a widgets list in the front matter for the static content page you're on. The options are:"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- widgets\n  - root: someId \n    timeout: 20\n    showSpinnerUnauthed: false\n    slowLoadingThreshold: 6\n    loadingMessage: Loading\n    slowMessage: Sorry, this is taking longer than expected.\n    errorMessage: Sorry, something went wrong.\n")),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"root: The id of the div where the React component will mount."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"timeout: The amount of time in seconds before the error message is shown."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"showSpinnerUnauthed: By default, a spinner is shown only if a user has a session token. This will override that and show it always."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"slowLoadingThreshold: The amount of time in seconds before the slow loading message is shown. This is skipped if the threshold is greater than the overall timeout. Defaulted to 6 seconds."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"slowMessage: Message shown when the slowThreshold is passed. Defaulted to message above."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"loadingMessage: Message shown while the JS code is loading. This should probably match any loading message in your React code."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"errorMessage: Message shown when the JS code fails or times out.")))},a}(o.a.Component),m={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-widget-mdx-51c122941ae486fd8c78.js.map