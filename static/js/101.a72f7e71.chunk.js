(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[101],{1262:function(e,t,a){"use strict";var c=a(0),i=c.createContext();t.a=i},1271:function(e,t,a){"use strict";var c=a(0),i=c.createContext();t.a=i},1322:function(e,t,a){"use strict";var c=a(8),i=a(2),r=a(0),n=(a(9),a(3)),s=a(11),l=a(16),o=a(37),d=a(1271),j=a(1262),b=r.forwardRef((function(e,t){var a,s,o=e.align,b=void 0===o?"inherit":o,x=e.classes,h=e.className,m=e.component,p=e.padding,O=e.scope,u=e.size,g=e.sortDirection,f=e.variant,v=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=r.useContext(d.a),N=r.useContext(j.a),w=N&&"head"===N.variant;m?(s=m,a=w?"columnheader":"cell"):s=w?"th":"td";var S=O;!S&&w&&(S="col");var T=p||(y&&y.padding?y.padding:"normal"),k=u||(y&&y.size?y.size:"medium"),C=f||N&&N.variant,E=null;return g&&(E="asc"===g?"ascending":"descending"),r.createElement(s,Object(i.a)({ref:t,className:Object(n.a)(x.root,x[C],h,"inherit"!==b&&x["align".concat(Object(l.a)(b))],"normal"!==T&&x["padding".concat(Object(l.a)(T))],"medium"!==k&&x["size".concat(Object(l.a)(k))],"head"===C&&y&&y.stickyHeader&&x.stickyHeader),"aria-sort":E,role:a,scope:S},v))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.j)(Object(o.a)(e.palette.divider,1),.88):Object(o.b)(Object(o.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(b)},1343:function(e,t,a){"use strict";var c=a(8),i=a(2),r=a(0),n=(a(9),a(3)),s=a(11),l=a(1271),o="table",d=r.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.component,j=void 0===d?o:d,b=e.padding,x=void 0===b?"normal":b,h=e.size,m=void 0===h?"medium":h,p=e.stickyHeader,O=void 0!==p&&p,u=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=r.useMemo((function(){return{padding:x,size:m,stickyHeader:O}}),[x,m,O]);return r.createElement(l.a.Provider,{value:g},r.createElement(j,Object(i.a)({role:j===o?null:"table",ref:t,className:Object(n.a)(a.root,s,O&&a.stickyHeader)},u)))}));t.a=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1344:function(e,t,a){"use strict";var c=a(2),i=a(8),r=a(0),n=(a(9),a(3)),s=a(11),l=a(1262),o={variant:"head"},d="thead",j=r.forwardRef((function(e,t){var a=e.classes,s=e.className,j=e.component,b=void 0===j?d:j,x=Object(i.a)(e,["classes","className","component"]);return r.createElement(l.a.Provider,{value:o},r.createElement(b,Object(c.a)({className:Object(n.a)(a.root,s),ref:t,role:b===d?null:"rowgroup"},x)))}));t.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(j)},1345:function(e,t,a){"use strict";var c=a(2),i=a(8),r=a(0),n=(a(9),a(3)),s=a(11),l=a(1262),o=a(37),d=r.forwardRef((function(e,t){var a=e.classes,s=e.className,o=e.component,d=void 0===o?"tr":o,j=e.hover,b=void 0!==j&&j,x=e.selected,h=void 0!==x&&x,m=Object(i.a)(e,["classes","className","component","hover","selected"]),p=r.useContext(l.a);return r.createElement(d,Object(c.a)({ref:t,className:Object(n.a)(a.root,s,p&&{head:a.head,footer:a.footer}[p.variant],b&&a.hover,h&&a.selected),role:"tr"===d?null:"row"},m))}));t.a=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1346:function(e,t,a){"use strict";var c=a(2),i=a(8),r=a(0),n=(a(9),a(3)),s=a(11),l=a(1262),o={variant:"body"},d="tbody",j=r.forwardRef((function(e,t){var a=e.classes,s=e.className,j=e.component,b=void 0===j?d:j,x=Object(i.a)(e,["classes","className","component"]);return r.createElement(l.a.Provider,{value:o},r.createElement(b,Object(c.a)({className:Object(n.a)(a.root,s),ref:t,role:b===d?null:"rowgroup"},x)))}));t.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(j)},2745:function(e,t,a){"use strict";a.r(t);var c=a(19),i=a(1236),r=a(1243),n=a(664),s=a(78),l=a(1343),o=a(1346),d=a(1322),j=a(1344),b=a(1345),x=a(220),h=a(60),m=a.n(h),p=a(3),O=a(1245),u=a(0),g=a(1),f=Object(n.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(s.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)")},divider:{backgroundColor:e.palette.divider}}}));t.default=function(){var e=f(),t=Object(u.useState)(null),a=Object(c.a)(t,2),n=a[0],s=a[1],h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return Object(u.useEffect)((function(){m.a.get("/api/invoices/get-invoice",{params:{id:"5725a6802d"}}).then((function(e){s(e.data)}))}),[]),Object(g.jsx)("div",{className:Object(p.a)(e.root,"flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0 overflow-auto"),children:n&&Object(g.jsx)(O.a.div,{initial:{opacity:0,y:200},animate:{opacity:1,y:0},transition:{bounceDamping:0},children:Object(g.jsx)(i.a,{className:"mx-auto w-xl print:w-full print:shadow-none rounded-none sm:rounded-20",children:Object(g.jsxs)(r.a,{className:"p-88 print:p-0",children:[Object(g.jsxs)("div",{className:"flex flex-row justify-between items-start",children:[Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsxs)("div",{className:"flex items-center mb-80 print:mb-0",children:[Object(g.jsx)("img",{className:"w-160 print:w-60",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(g.jsx)("div",{className:Object(p.a)(e.divider,"mx-48 w-px h-128 print:mx-16")}),Object(g.jsxs)("div",{className:"max-w-160",children:[Object(g.jsx)(x.a,{color:"textSecondary",children:n.from.title}),n.from.address&&Object(g.jsx)(x.a,{color:"textSecondary",children:n.from.address}),n.from.phone&&Object(g.jsxs)(x.a,{color:"textSecondary",children:[Object(g.jsx)("span",{children:"Phone:"}),n.from.phone]}),n.from.email&&Object(g.jsxs)(x.a,{color:"textSecondary",children:[Object(g.jsx)("span",{children:"Email:"}),n.from.email]}),n.from.website&&Object(g.jsxs)(x.a,{color:"textSecondary",children:[Object(g.jsx)("span",{children:"Web:"}),n.from.website]})]})]}),Object(g.jsxs)("div",{className:"flex items-center",children:[Object(g.jsx)("div",{className:"flex justify-end items-center w-160 print:w-60",children:Object(g.jsx)(x.a,{variant:"h5",className:"font-light print:text-16",color:"textSecondary",children:"CLIENT"})}),Object(g.jsx)("div",{className:Object(p.a)(e.divider,"mx-48 w-px h-128 print:mx-16")}),Object(g.jsxs)("div",{className:"max-w-160",children:[Object(g.jsx)(x.a,{color:"textSecondary",children:n.client.title}),n.client.address&&Object(g.jsx)(x.a,{color:"textSecondary",children:n.client.address}),n.client.phone&&Object(g.jsxs)(x.a,{color:"textSecondary",children:[Object(g.jsx)("span",{children:"Phone:"}),n.client.phone]}),n.client.email&&Object(g.jsxs)(x.a,{color:"textSecondary",children:[Object(g.jsx)("span",{children:"Email:"}),n.client.email]}),n.client.website&&Object(g.jsxs)(x.a,{color:"textSecondary",children:[Object(g.jsx)("span",{children:"Web:"}),n.client.website]})]})]})]}),Object(g.jsx)("table",{children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"pb-32",children:Object(g.jsx)(x.a,{className:"font-light",variant:"h4",color:"textSecondary",children:"INVOICE"})}),Object(g.jsx)("td",{className:"pb-32 px-16",children:Object(g.jsx)(x.a,{className:"font-light",variant:"h4",children:n.number})})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"text-right",children:Object(g.jsx)(x.a,{color:"textSecondary",children:"INVOICE DATE"})}),Object(g.jsx)("td",{className:"px-16",children:Object(g.jsx)(x.a,{children:n.date})})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"text-right",children:Object(g.jsx)(x.a,{color:"textSecondary",children:"DUE DATE"})}),Object(g.jsx)("td",{className:"px-16",children:Object(g.jsx)(x.a,{children:n.dueDate})})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"text-right",children:Object(g.jsx)(x.a,{color:"textSecondary",children:"TOTAL DUE"})}),Object(g.jsx)("td",{className:"px-16",children:Object(g.jsx)(x.a,{children:h.format(n.total)})})]})]})})]}),Object(g.jsxs)("div",{className:"mt-96 print:mt-0",children:[Object(g.jsxs)(l.a,{className:"simple",children:[Object(g.jsx)(j.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(d.a,{children:"SERVICE"}),Object(g.jsx)(d.a,{children:"UNIT"}),Object(g.jsx)(d.a,{align:"right",children:"UNIT PRICE"}),Object(g.jsx)(d.a,{align:"right",children:"QUANTITY"}),Object(g.jsx)(d.a,{align:"right",children:"TOTAL"})]})}),Object(g.jsx)(o.a,{children:n.services.map((function(e){return Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(d.a,{children:[Object(g.jsx)(x.a,{className:"mb-8",variant:"subtitle1",children:e.title}),Object(g.jsx)(x.a,{variant:"caption",color:"textSecondary",children:e.detail})]}),Object(g.jsx)(d.a,{children:e.unit}),Object(g.jsx)(d.a,{align:"right",children:h.format(e.unitPrice)}),Object(g.jsx)(d.a,{align:"right",children:e.quantity}),Object(g.jsx)(d.a,{align:"right",children:h.format(e.total)})]},e.id)}))})]}),Object(g.jsx)(l.a,{className:"simple",children:Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(b.a,{children:[Object(g.jsx)(d.a,{children:Object(g.jsx)(x.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"SUBTOTAL"})}),Object(g.jsx)(d.a,{align:"right",children:Object(g.jsx)(x.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:h.format(n.subtotal)})})]}),Object(g.jsxs)(b.a,{children:[Object(g.jsx)(d.a,{children:Object(g.jsx)(x.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"TAX"})}),Object(g.jsx)(d.a,{align:"right",children:Object(g.jsx)(x.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:h.format(n.tax)})})]}),Object(g.jsxs)(b.a,{children:[Object(g.jsx)(d.a,{children:Object(g.jsx)(x.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"DISCOUNT"})}),Object(g.jsx)(d.a,{align:"right",children:Object(g.jsx)(x.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:h.format(n.discount)})})]}),Object(g.jsxs)(b.a,{children:[Object(g.jsx)(d.a,{children:Object(g.jsx)(x.a,{className:"font-light",variant:"h4",color:"textSecondary",children:"TOTAL"})}),Object(g.jsx)(d.a,{align:"right",children:Object(g.jsx)(x.a,{className:"font-light",variant:"h4",color:"textSecondary",children:h.format(n.total)})})]})]})})]}),Object(g.jsxs)("div",{className:"mt-96 print:mt-0 print:px-16",children:[Object(g.jsx)(x.a,{className:"mb-24 print:mb-12",variant:"body1",children:"Please pay within 15 days. Thank you for your business."}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("div",{className:"flex-shrink-0",children:Object(g.jsx)("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),Object(g.jsx)(x.a,{className:"font-normal mb-64 px-24",variant:"caption",color:"textSecondary",children:"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."})]})]})]})})})})}}}]);