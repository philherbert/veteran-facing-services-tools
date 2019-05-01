(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var o=t(43),a=t.n(o),s=t(3),c=t.n(s),r=t(2),m=t.n(r),p=t(4),i=t(341),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=i.a,t}return c()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},m.a.createElement("h2",{id:"about-mdx"},"About MDX"),m.a.createElement("h3",{id:"what-is-mdx"},"What is MDX?"),m.a.createElement(p.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),m.a.createElement("h3",{id:"examples"},"Examples"),m.a.createElement(p.MDXTag,{name:"p",components:n},"Here is a great page of examples of using MDX"),m.a.createElement(p.MDXTag,{name:"ul",components:n},m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://dump.jamesknelson.com/mdxc-playground.html"}},"http://dump.jamesknelson.com/mdxc-playground.html"))),m.a.createElement("h3",{id:"things-you-can-do-with-mdx-and-gotchas"},"Things you can do with MDX and gotchas"),m.a.createElement(p.MDXTag,{name:"p",components:n},"This is documentation of findings for using MDX in our projects. Please feel\nfree to add to this document if you find anything else."),m.a.createElement("h4",{id:"inline-components"},"Inline components"),m.a.createElement(p.MDXTag,{name:"p",components:n},"You can use components inline inside your MDX files. Below is an example\nof how to do it."),m.a.createElement(p.MDXTag,{name:"ul",components:n},m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"You will need to export it for it to work."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"You can write both Function components and Class components."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"The reason why you need to use this is when you need the parent state to change.")),m.a.createElement(p.MDXTag,{name:"p",components:n},"This example uses state to toggle the drop down."),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// Class Component\nexport class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      open: false\n    }\n  }\n  render() {\n    return (\n      <div className=\"site-c-reactcomp__rendered\">\n        <div style={{ backgroundColor: '#112e51' }}>\n          <DropDownPanel\n            buttonText='Helpdesk'\n            cssClass='va-dropdown'\n            isOpen={this.state.open}\n            contents='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n            clickHandler={() => this.setState({ open: !this.state.open }) }>\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n          </DropDownPanel>\n        </div>\n      </div>\n    )\n  }\n}\n\n<InlineClassComponent />\n\n// Function Component\nexport const InlinePresentationalComponent = () => (\n  <h1>Hello World</h1>\n)\n\n<InlinePresentationalComponent />\n")),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},m.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"strong"},"Gotchas"))),m.a.createElement(p.MDXTag,{name:"ul",components:n},m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"MDX doesn't like newlines in between methods in a class based component."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"Inline components need to begin with an uppercase letter. If it starts with a\nlowercase it will not render.")),m.a.createElement(p.MDXTag,{name:"p",components:n},"Bad:"),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'export class inlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')),m.a.createElement(p.MDXTag,{name:"p",components:n},"Good:"),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'export class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')))},n}(m.a.Component),d={}},340:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},341:function(e,n,t){"use strict";var o=t(2),a=t.n(o),s=t(13),c=t.n(s),r=t(343),m=(t(133),t(134),t(135),t(17),t(340)),p=t(342);function i(){return a.a.createElement(p.b,{query:"157057713",render:function(e){return a.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&e.name,!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&e.name,!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(i,null)):e.href?a.a.createElement("li",{key:e.name},a.a.createElement(p.a,{to:e.href},e.name)):a.a.createElement("li",{key:e.name},e.name," (future)")})):null}var u=t(344),d=t.n(u);function g(e){var n=e.location,t=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(g,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return h}),h.propTypes={children:c.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-about-mdx-mdx-1e49b296887389b6132a.js.map