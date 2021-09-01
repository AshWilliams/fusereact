(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[146],{2591:function(e,t,a){"use strict";var r=a(2),n=a(124),c=a(8),l=a(0),s=(a(161),a(9),a(3)),o=a(11),i=a(220),u=a(37),d=a(102),m=Object(d.a)(l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=a(252);var p=Object(o.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(c.a)(e,["classes"]);return l.createElement(f.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),l.createElement(m,{className:t.icon}))}));var b=l.forwardRef((function(e,t){var a=e.children,o=e.classes,u=e.className,d=e.component,m=void 0===d?"nav":d,f=e.expandText,b=void 0===f?"Show path":f,h=e.itemsAfterCollapse,j=void 0===h?1:h,x=e.itemsBeforeCollapse,O=void 0===x?1:x,v=e.maxItems,g=void 0===v?8:v,y=e.separator,N=void 0===y?"/":y,w=Object(c.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=l.useState(!1),S=C[0],k=C[1],E=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return l.createElement("li",{className:o.li,key:"child-".concat(t)},e)}));return l.createElement(i.a,Object(r.a)({ref:t,component:m,color:"textSecondary",className:Object(s.a)(o.root,u)},w),l.createElement("ol",{className:o.ol},function(e,t,a){return e.reduce((function(r,n,c){return c<e.length-1?r=r.concat(n,l.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:t},a)):r.push(n),r}),[])}(S||g&&E.length<=g?E:function(e){return O+j>=e.length?e:[].concat(Object(n.a)(e.slice(0,O)),[l.createElement(p,{"aria-label":b,key:"ellipsis",onClick:function(e){k(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-j,e.length)))}(E),o.separator,N)))}));t.a=Object(o.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},2797:function(e,t,a){"use strict";a.r(t);var r=a(1248),n=a(1218),c=a(1161),l=a(3),s=a(0),o=a(242),i=a(457),u=a(203),d=a(131),m=a(35),f=a(456),p=a(79),b=a(2591),h=a(220),j=a(58),x=a(1);var O=function(e){var t=e.className,a=Object(j.i)().pathname,r=function e(t,a){if(t.url===a)return[];if(t.children){var r,n=Object(p.a)(t.children);try{for(n.s();!(r=n.n()).done;){var c=r.value,l=e(c,a);if(Array.isArray(l))return l.unshift(c),l}}catch(s){n.e(s)}finally{n.f()}}return!1}(f.a,a)||[];return Object(x.jsx)("div",{className:Object(l.a)("",t),children:Object(x.jsxs)(b.a,{"aria-label":"breadcrumb",children:[Object(x.jsx)(m.a,{className:"font-semibold hover:underline",color:"secondary",to:"/documentation",role:"button",children:"Documentation"}),r.map((function(e){return Object(x.jsx)(h.a,{className:"cursor-default",children:e.title},e.id)}))]})})};t.default=function(e){e.content;var t=e.route,a=Object(s.useRef)(null);return Object(x.jsx)(i.a,{classes:{root:"h-full",contentWrapper:"",content:"p-16 md:p-24 flex flex-col h-full",leftSidebar:"w-288 pt-8",header:"h-64 min-h-64",wrapper:"min-h-0"},header:Object(x.jsxs)("div",{className:"flex items-center justify-center px-4 md:px-12 h-full w-full",children:[Object(x.jsx)(r.a,{lgUp:!0,children:Object(x.jsx)(c.a,{onClick:function(e){return a.current.toggleLeftSidebar()},"aria-label":"open left sidebar",children:Object(x.jsx)(n.a,{children:"menu"})})}),Object(x.jsx)("div",{className:"flex flex-1 items-center sm:justify-center px-8 lg:px-12",children:Object(x.jsxs)(m.a,{color:"inherit",to:"/documentation",className:"text-14 md:text-18 font-medium flex items-center",role:"button",children:[Object(x.jsx)(n.a,{className:"mr-8",children:"import_contacts"})," ",Object(x.jsx)("span",{children:"Fuse React - Documentation"})]})})]}),content:Object(x.jsxs)("div",{className:"max-w-2xl min-h-full flex flex-auto flex-col",children:[Object(x.jsx)(O,{}),Object(x.jsx)("div",{className:"flex flex-col flex-1 relative py-32",children:Object(x.jsx)(u.a,{children:Object(d.b)(t.routes)})})]}),leftSidebarContent:Object(x.jsx)(o.a,{className:Object(l.a)("navigation"),navigation:f.a.children}),innerScroll:!0,ref:a})}}}]);