(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function o(){return r.a.createElement(i.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(s,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(o,null)):r.a.createElement(m,{item:e,key:e.name})}))):null}var c=a("MEl4"),l=a.n(c);function d(e){var t=e.location,a=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(s,{items:a.items}))):null}function u(e){var t=e.sourceUrl;return r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub"))}var h=a("8FPV");function f(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(h.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(d,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(u,{sourceUrl:n.sourceUrl}))))}},D4a6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),o={},m={_frontmatter:o},s=i.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(s,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"forms-in-production"},"Forms in production"),Object(r.mdx)("p",null,"Previous: ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"./forms/save-in-progress-menu"}),"Using the Save in Progress menu")),Object(r.mdx)("p",null,"Now that you have a form in production, making future changes requires some extra care."),Object(r.mdx)("h2",{id:"changing-your-form-schema"},"Changing your form schema"),Object(r.mdx)("p",null,"Once you're in production and you're also using the save in progress functionality, you have a dilemma when you want to change some fields or some validation on your form. Since there are forms that are saved, if you change the structure of the form, the saved data may no longer match and result in confusing validation errors for a user. Similarly, if validation changes, a user might have already gone past that field and won't know how to fix the new error."),Object(r.mdx)("p",null,'To address this issue, we have the ability to write "migrations" for form data. This way, you can update a user\'s data to match the new structure, as well as move their position in the form back, if they need to adjust something. Migrations are functions, run in a sequence, based on the "version" of the form, which is saved along with the form data.'),Object(r.mdx)("p",null,"Migrations go in the form config object:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const formConfig = {\n   ...\n   version: 1,\n   migrations: [\n     ({ formData, metadata, formId }) => {\n       // do something\n       return {\n         formData,\n         metadata\n       };\n     }\n   ]\n   ...\n};\n")),Object(r.mdx)("p",null,"We typically start at version 0 and increment each time we need to add a migration. Migrations are functions that get ",Object(r.mdx)("inlineCode",{parentName:"p"},"formData"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"metadata"),", and ",Object(r.mdx)("inlineCode",{parentName:"p"},"formId")," as arguments. And they must return the ",Object(r.mdx)("inlineCode",{parentName:"p"},"formData")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"metadata"),", with any changes that they have made. For example, here is a migration that the health care application uses to convert an old url:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"({ formData, metadata }) => {\n  const url = metadata.returnUrl || metadata.return_url;\n  let newMetadata = metadata;\n\n  if (url === '/household-information/child-information') {\n    newMetadata = _.set('returnUrl', '/household-information/dependent-information', metadata);\n  }\n\n  return { formData, metadata: newMetadata };\n}\n")),Object(r.mdx)("p",null,"If the current return URL (which is the URL a user will return to when the load a saved form) matches the outdated one, we update it. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"formData")," is not changed in this case."),Object(r.mdx)("p",null,"Another example from the health care application was to fix a bug in our form structure:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"(savedData) => {\n  const newData = savedData;\n  newData.formData = _.unset('isSpanishHispanicLatino', savedData.formData);\n\n  if (typeof _.get('view:demographicCategories.isSpanishHispanicLatino', newData.formData) === 'undefined') {\n    newData.formData = _.set('view:demographicCategories.isSpanishHispanicLatino', false, newData.formData);\n    return newData;\n  }\n\n  return newData;\n}\n")),Object(r.mdx)("p",null,"In this example, we're moving an incorrectly located ",Object(r.mdx)("inlineCode",{parentName:"p"},"isSpanishHispanicLatino")," flag and setting it in the right spot."),Object(r.mdx)("p",null,"Writing migrations is not very common, but you may need to do it if you end up modifying a form that's already in production."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-forms-forms-in-production-mdx-899628ee75383b7be12f.js.map