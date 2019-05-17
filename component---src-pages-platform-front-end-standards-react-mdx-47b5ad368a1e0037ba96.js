(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{331:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),s=n.n(r),m=n(2),c=n.n(m),p=n(4),i=n(348),l={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=i.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},c.a.createElement("h1",{id:"vetsgov-front-end-best-practices-wip"},"vets.gov Front End Best Practices (WIP)"),c.a.createElement(p.MDXTag,{name:"p",components:t},c.a.createElement(p.MDXTag,{name:"strong",components:t,parentName:"p"},"Last Updated:")," April 28, 2017"),c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement(p.MDXTag,{name:"p",components:t},"This is an initial pass at the best practices followed in vets.gov front-end development."),c.a.createElement("h3",{id:"objective"},"Objective"),c.a.createElement(p.MDXTag,{name:"p",components:t},"To promote a consistent approach to vets.gov front-end development by outlining an evolving set of best practices."),c.a.createElement("h3",{id:"background"},"Background"),c.a.createElement(p.MDXTag,{name:"p",components:t},"Over the last year, we have launched a number of different single-page React/Redux apps on vets.gov, in addition to building digital forms using a ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"form-builder library")," that reuses the same code to run multiple React apps for different forms. This document is an attempt to begin collecting best practices for React/Redux development that the team has and continues to lean toward when architecting and developing front-end applications."),c.a.createElement("h3",{id:"high-order-guidelines"},"High Order Guidelines"),c.a.createElement(p.MDXTag,{name:"p",components:t},"This is a placeholder for any high-level paradigms we settle on. For now, it's merely a laundry list of debatable topics:"),c.a.createElement(p.MDXTag,{name:"ul",components:t},c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"em",components:t,parentName:"li"},"PropTypes"),": we try to define PropTypes to make it easier for newcomers to understand what can be passed to a component."),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},"What to put into a selector vs. reducer vs. action"),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},"How we map backend data to the state?")),c.a.createElement("h3",{id:"reactredux-guidelines"},"React/Redux Guidelines"),c.a.createElement("h4",{id:"components-vs-containers"},"Components vs. containers"),c.a.createElement(p.MDXTag,{name:"p",components:t},"A common React/Redux application architecture is to divide your React components into two types: regular components and container components. These are also sometimes referred to as a dumb and smart components. Container components connect to the Redux store using the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-redux")," library's ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"connect")," function and map a specific part of the state object to the props of a React component. Regular components are just plain React components; they take in props and they can have internal state (though we generally avoid this; see below)."),c.a.createElement(p.MDXTag,{name:"p",components:t},"In general, we try to use regular components whenever possible and only a few container components. The reason for this is because tying a component to the Redux store couples it to a particular slice of the state of your application, as well as coupling it to a particular way of organizing your state. So refactoring a lot of container components can be difficult. Debugging can also be difficult with a lot of container components, because they interrupt the usual flow of data down through components. Instead of all data being passed down via props from a single component at the top of the component tree, intermediate components might pull in different parts of the Redux state and pass down that data as props to other components, creating a mix of data combined from different connections to the Redux state."),c.a.createElement(p.MDXTag,{name:"p",components:t},'There are benefits to using container components, though. It can be painful to pass lots of props all the way down to the leaf components in a component tree and container components allow you to "reset" and grab specific data from the store without all that wiring. They can also improve performance, because passing props down from the root of the component tree means that all intermediate components will re-render whenever data changes. Container components can send data down to their children without all the parents of the container component re-rendering.'),c.a.createElement(p.MDXTag,{name:"p",components:t},"On vets.gov, we normally use a single container component per page (or independent widget, like login), and only use other container components if there's a compelling reason for doing so. Our apps have a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"containers")," folder and a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"components")," folder that we divide components between."),c.a.createElement("h4",{id:"using-setstate-in-react-components"},"Using setState in React components"),c.a.createElement(p.MDXTag,{name:"p",components:t},"We also generally avoid ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," inside regular components. This isn't because ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," is bad, necessarily, but because it can be hard to track down data changes due to ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," when you're expecting all changes to go through the single Redux store. It can also be tricky to keep that state in sync with the data from the Redux store passed in as props. So, when we do use ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState"),", it's typically for ephemeral UI state, or state that would be more difficult to follow if it were put in the store and passed down through props."),c.a.createElement(p.MDXTag,{name:"p",components:t},"Keep in mind that these are general conventions, not iron-clad rules, and we should revist them as we gain more experience using React and Redux."),c.a.createElement("h3",{id:"existing-guides-and-tools"},"Existing Guides and Tools"),c.a.createElement(p.MDXTag,{name:"p",components:t},"We have a set of ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/.eslintrc"}},"ESLint rules")," that extend the ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/airbnb/javascript"}},"AirBnB style guide")," and also use the ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io"}},"Prettier")," ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io/docs/en/eslint.html"}},"ESLint rules"),". There is a pre-commit hook that prevents committing code that fails the ESLint rules. Developers should all be using ESLint plugins in their dev environments to catch lint-able things. In lieu of using an ESLint editor plugin, developers can run the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lint:js:fix")," or ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lint:js:changed:fix")," NPM scripts to fix all errors that ESLint can auto-fix."),c.a.createElement(p.MDXTag,{name:"p",components:t},c.a.createElement(p.MDXTag,{name:"em",components:t,parentName:"p"},"TODO: list any notable exceptions here.")),c.a.createElement("h3",{id:"project-structure-and-code-location"},"Project Structure and Code Location"),c.a.createElement(p.MDXTag,{name:"p",components:t},"The structure of our React app's is described in ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project")),c.a.createElement(p.MDXTag,{name:"p",components:t},"A number (and soon all) of our forms use the ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"react-json-schemaform"))," (or rjsf) library. To learn more about those, see ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"schemaform walkthrough")," and this ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"form config cookbook"),"."),c.a.createElement("h3",{id:"related-documents"},"Related Documents"),c.a.createElement(p.MDXTag,{name:"ul",components:t},c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/Work%20Practices/Engineering/DocumentedDecisions/Redux.md"}},"Using Redux"))),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project"))),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"Schemaform walkthrough"))),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"Form config cookbook")),c.a.createElement(p.MDXTag,{name:"p",components:t,parentName:"li"},"Existing posts/articles on best practices that we may or may not agree with but can pull topics from:"),c.a.createElement(p.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@nesbtesh/react-best-practices-a76fd0fbef21"}},"React best practices")),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e"}},"Redux best practices")),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md"}},"Long list of links about react architecture and best practices")),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactrocket.com/post/react-redux-optimization/"}},"Redux isn't slow, you're just doing it wrong - An optimization guide"))))),c.a.createElement("h3",{id:"revision-history"},"Revision History"),c.a.createElement(p.MDXTag,{name:"table",components:t},c.a.createElement(p.MDXTag,{name:"thead",components:t,parentName:"table"},c.a.createElement(p.MDXTag,{name:"tr",components:t,parentName:"thead"},c.a.createElement(p.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Date"),c.a.createElement(p.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Revisions Made"),c.a.createElement(p.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Author"),c.a.createElement(p.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Reviewed By"))),c.a.createElement(p.MDXTag,{name:"tbody",components:t,parentName:"table"},c.a.createElement(p.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"March 1, 2017"),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Skeleton document based on outline of ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"Javascript/Node.js.md"}},"Node.js Best Practices")),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),c.a.createElement(p.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"April 28, 2017"),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Pulled in content from discussion in ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/659"}},"#659")),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),c.a.createElement(p.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"May 17, 2017"),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Added information about React component types and ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"setState")," usage"),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})))))},t}(c.a.Component),u={}},347:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},348:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(13),s=n.n(r),m=n(351),c=(n(133),n(134),n(135),n(17),n(347)),p=n(349);function i(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(p.a,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var u=n(350),g=n.n(u);function h(e){var t=e.location,n=g.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function f(e){var t=e.children,n=e.location;return o.a.createElement(m.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-react-mdx-47b5ad368a1e0037ba96.js.map