(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),o=a.n(n),r=a("Wbzz");function i(){return o.a.createElement(r.StaticQuery,{query:"68798663",render:function(e){return o.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(r.Link,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?o.a.createElement("li",{key:e.name},n&&o.a.createElement(s,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&o.a.createElement(s,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(s,{item:e,key:e.name})}))):null}var l=a("MEl4"),m=a.n(l);function p(e){var t=e.location,a=m.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(c,{items:a.items}))):null}function d(e){var t=e.sourceUrl;return t?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function g(e){var t=e.children,a=e.location,n=e.pageContext;return o.a.createElement(u.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(p,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,o.a.createElement(d,{sourceUrl:n.sourceUrl}))))}},"Pt+v":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("3dLD"),i={},s={_frontmatter:i},c=r.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.mdx)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"setting-up-save-in-progress"},"Setting up Save in Progress"),Object(o.mdx)("p",null,"Previous: ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/forms/form-tutorial-advanced"}),"Advanced tutorial")),Object(o.mdx)("p",null,"Forms on VA.gov support the ability to save them while in progress to a user's account and resume them later. Enabling Save in Progress requires"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Configuring naming and messaging options in the ",Object(o.mdx)("strong",{parentName:"li"},"form config"),"."),Object(o.mdx)("li",{parentName:"ul"},"Making the Save In Progress form retrievable on the ",Object(o.mdx)("strong",{parentName:"li"},"user profile")," page."),Object(o.mdx)("li",{parentName:"ul"},"Adding links to the Save In Progress on ",Object(o.mdx)("strong",{parentName:"li"},"static pages"),".")),Object(o.mdx)("h2",{id:"form-config"},"Form config"),Object(o.mdx)("p",null,"There are several configuration options related to Save in Progress (SiP)."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const formConfig = {\n  formId: '1010ez',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for health care.',\n    noAuth: 'Please sign in again to resume your application for health care.'\n  },\n  ...\n}\n")),Object(o.mdx)("p",null,"This is from our health care application. The most important piece of information is ",Object(o.mdx)("inlineCode",{parentName:"p"},"formId"),", which is the key that will be used to save the form data on the backend. Once you choose this, you can't change it in production. We also set a version, typically to 0, which can be incremented if you need to migrate form data in production."),Object(o.mdx)("p",null,"There are also a couple of messages you can set, which show up in various places on the form (primarily on the intro page)."),Object(o.mdx)("h2",{id:"user-profile"},"User profile"),Object(o.mdx)("p",null,"You will also need to make a couple changes in the user profile code, so that your form can show up in the list of saved forms on the account page. In ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/applications/personalization/dashboard/helpers.jsx"),", you should add your form to the four configuration objects: ",Object(o.mdx)("inlineCode",{parentName:"p"},"formBenefits"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"formLinks"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"trackingPrefixes"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"sipEnabledForms"),". The information for each of these should be in your form config file."),Object(o.mdx)("h2",{id:"static-pages"},"Static pages"),Object(o.mdx)("p",null,'Your form will likely be linked somewhere in the static content for VA.gov. In those places, we have the ability to replace something like an "Apply now" button with a widget to resume or start over an in progress form.'),Object(o.mdx)("p",null,"In your content page, you can add front matter to set up a widget:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"widgets:\n  - root: react-applicationStatus\n    timeout: 20\n    loadingMessage: Checking your application status.\n    errorMessage: <strong>We’re sorry. Something went wrong when we tried to load your saved application.</strong<br/>Please try refreshing your browser in a few minutes.\n")),Object(o.mdx)("p",null,"And somewhere in the file, where you want the widget to show up:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div id="react-applicationStatus" class="static-page-widget" data-widget-type="health-care-app-status">\n  <a class="usa-button-primary va-button-primary" href="/health-care/apply/application/">Apply for Health Care Benefits</a>\n</div>\n')),Object(o.mdx)("p",null,"Note that the id matches the ",Object(o.mdx)("inlineCode",{parentName:"p"},"root")," property in the front matter. This is the link that will show up will the Javascript code is loading or if it fails to load."),Object(o.mdx)("p",null,"Also note the ",Object(o.mdx)("inlineCode",{parentName:"p"},"data-widget-type")," property. You'll need make that custom for your form and add it to the list in ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/applications/static-pages/widgetTypes.js"),"."),Object(o.mdx)("p",null,"Once that's done, you can open up the static pages entry file at ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/applications/static-pages/static-pages-entry.js")," and make your changes. Here's an example for the healh care application:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"createApplicationStatus(store, {\n  formId: '1010ez',\n  additionalText: 'You can start your online application right now.',\n  applyLink: '/health-care/apply/',\n  applyText: 'Apply for Health Care Benefits',\n  widgetType: widgetTypes.HEALTH_CARE_APP_STATUS,\n});\n")),Object(o.mdx)("p",null,"The main things to note are that the ",Object(o.mdx)("inlineCode",{parentName:"p"},"widgetType")," should match the one you added to the widget types list. The code block also has some configuration options for your form that should be easy to get from the form config object."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note:")," An analytics event is added to the form introduction page by default. To finish setting it up, add an analytics event name to ",Object(o.mdx)("inlineCode",{parentName:"p"},"gaStartEventName")," property of the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/forms/save-in-progress/SaveInProgressIntro.jsx"}),Object(o.mdx)("inlineCode",{parentName:"a"},"SaveInProgressIntro"))," component, which is used on ",Object(o.mdx)("inlineCode",{parentName:"p"},"IntroductionPage"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<SaveInProgressIntro\n  gaStartEventName="my-start-form-event-name"\n  ...\n/>\n')),Object(o.mdx)("p",null,"Once you've got all that set up, your form should appear on the profile page:"),Object(o.mdx)("p",null,Object(o.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"742px"}}),"\n      ",Object(o.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(o.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.123552123552116%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVQoz42SX0/bMBTF+3Un8YD2tq+wlyExaV9hm5jEMw8MTZq0aSvQP4G0aZIS0aZtmhLbIW0hyQ+nDV0Q3caVju+1fX18ZJ8aOoZDn9+n57QvTAyN+lmDRqvNz191LNstWsjz/L8oopaVxT/jJT3lpbWiECrGHwcE4Q2zSOg8Q8a33KUZ9wWynGWa6/l2FHtpVioshmt/wvczk9NLh/POFT+aHS7cIaMowQsko5uYmUqYyS3Q61NxS7K8+0OYzBfUuwNajo/h+jTsIc3egIblYfTHjKYRSayQUqC2QEQRy8WiQqib/b7FwO1ybZt4vUvcjoFjtnAdG7PTpX/loZRCCE0gZAlNqOQKiyqhO5G8+thk96DNzqcmr78Y7Hxu8ebQYByEBEFAGIZaoSwJxYbMn4RY+nnm83nlDUPF2yOL/ROHd8c273Xe+2rz4ZtDpJXEcbxSVxBWURBO9Ud6g4kmLBWuHfF3W2RZSpo+x+N6nmer8xsfrif6oB6yJ3ldv8h/FR8+APXd+Vw9VR85AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"saved form",title:"saved form",src:"/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png",srcSet:["/static/c4cfadd1397d5ae008a696654cfc4997/a2ead/saved_form.png 259w","/static/c4cfadd1397d5ae008a696654cfc4997/6b9fd/saved_form.png 518w","/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png 742w"],sizes:"(max-width: 742px) 100vw, 742px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(o.mdx)("p",null,"Next: ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/forms/save-in-progress-menu"}),"Using the Save in Progress menu")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-forms-save-in-progress-mdx-0debb26156814236bcf1.js.map