(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[85],{1256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var o,r=n(0),i=(o=r)&&o.__esModule?o:{default:o};var a=void 0,c=void 0;"undefined"!==typeof document&&(a=document),"undefined"!==typeof window&&(c=window);var s=t.FrameContext=i.default.createContext({document:a,window:c}),l=s.Provider,u=s.Consumer;t.FrameContextProvider=l,t.FrameContextConsumer=u},1257:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o=n(19),r=n(138),i=n(1228),a=n(1236),c=n(1218),s=n(1244),l=n(1246),u=n(3),d=n(0),h=n(15),f=n(6),p=n(31),m=n(32),b=n(68),j=n(69),y=n(1158),v=n(624),x=n(1215),O=n(1227),g=n(11),w=n(160),k=n(423),C=n(1258),D=n.n(C),_=n(1),N=Object(y.a)({productionPrefix:"iframe-"}),T=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.b)(Object(f.a)(Object(f.a)({},Object(v.a)()),{},{plugins:[].concat(Object(h.a)(Object(v.a)().plugins),[Object(k.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(_.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,o=e.theme;return Object(_.jsx)(D.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.a)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(_.jsx)(x.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager,children:Object(_.jsx)(O.a,{theme:o,children:Object(d.cloneElement)(t,{container:this.state.container})})}):null})}}]),n}(d.Component),L=Object(g.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(T);function M(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(o.a)(t,2),h=n[0],f=n[1],p=e.component,m=e.raw,b=e.iframe,j=e.className;return Object(_.jsxs)(a.a,{className:Object(u.a)(j,"shadow"),children:[Object(_.jsx)(i.a,{position:"static",color:"default",className:"shadow-0",children:Object(_.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:h,onChange:function(e,t){f(t)},children:[p&&Object(_.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(_.jsx)(c.a,{children:"remove_red_eye"})}),m&&Object(_.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(_.jsx)(c.a,{children:"code"})})]})}),Object(_.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(_.jsx)("div",{className:0===h?"flex flex-1 max-w-full":"hidden",children:p&&(b?Object(_.jsx)(L,{children:Object(_.jsx)(p,{})}):Object(_.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(_.jsx)(p,{})}))}),Object(_.jsx)("div",{className:1===h?"flex flex-1":"hidden",children:m&&Object(_.jsx)("div",{className:"flex flex-1",children:Object(_.jsx)(r.a,{component:"pre",className:"language-javascript w-full",children:m.default})})})]})]})}M.defaultProps={currentTabIndex:0};var P=M},1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var o=n(1256);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return o.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return o.FrameContextConsumer}});var r,i=n(1259),a=(r=i)&&r.__esModule?r:{default:r};t.default=a.default},1259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=d(i),c=d(n(34)),s=d(n(9)),l=n(1256),u=d(n(1260));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,o=e.defaultView||e.parentView,r=a.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},a.default.createElement(l.FrameContextProvider,{value:{document:e,window:o}},a.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var i=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(r,i)]}},{key:"render",value:function(){var e=this,t=o({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,a.default.createElement("iframe",o({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(i.Component);h.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},h.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=h},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=(a(r),a(n(9)));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);l.propTypes={children:i.default.element.isRequired,contentDidMount:i.default.func.isRequired,contentDidUpdate:i.default.func.isRequired},t.default=l},1910:function(e,t,n){"use strict";var o=n(2),r=n(8),i=n(0),a=(n(9),n(3)),c=n(16),s=n(11),l=n(181),u=n(27),d=n(220),h=i.forwardRef((function(e,t){var n=e.classes,s=e.className,h=e.color,f=void 0===h?"primary":h,p=e.component,m=void 0===p?"a":p,b=e.onBlur,j=e.onFocus,y=e.TypographyClasses,v=e.underline,x=void 0===v?"hover":v,O=e.variant,g=void 0===O?"inherit":O,w=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),k=Object(l.a)(),C=k.isFocusVisible,D=k.onBlurVisible,_=k.ref,N=i.useState(!1),T=N[0],L=N[1],M=Object(u.a)(t,_);return i.createElement(d.a,Object(o.a)({className:Object(a.a)(n.root,n["underline".concat(Object(c.a)(x))],s,T&&n.focusVisible,"button"===m&&n.button),classes:y,color:f,component:m,onBlur:function(e){T&&(D(),L(!1)),b&&b(e)},onFocus:function(e){C(e)&&L(!0),j&&j(e)},ref:M,variant:g},w))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h)},2120:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(0);var o=n(664),r=n(1910),i=n(220),a=n(1),c=Object(o.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(2)}}}}));function s(){var e=c(),t=function(e){return e.preventDefault()};return Object(a.jsxs)(i.a,{className:e.root,children:[Object(a.jsx)(r.a,{href:"#",onClick:t,children:"Link"}),Object(a.jsx)(r.a,{href:"#",onClick:t,color:"inherit",children:'color="inherit"'}),Object(a.jsx)(r.a,{href:"#",onClick:t,variant:"body2",children:'variant="body2"'})]})}},2121:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Link from '@material-ui/core/Link';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > * + *': {\n      marginLeft: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function Links() {\n  const classes = useStyles();\n  const preventDefault = (event) => event.preventDefault();\n\n  return (\n    <Typography className={classes.root}>\n      <Link href=\"#\" onClick={preventDefault}>\n        Link\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} color=\"inherit\">\n        {'color=\"inherit\"'}\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} variant=\"body2\">\n        {'variant=\"body2\"'}\n      </Link>\n    </Typography>\n  );\n}\n"},2122:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(0);var o=n(1910),r=n(1);function i(){return Object(r.jsx)(o.a,{component:"button",variant:"body2",onClick:function(){console.info("I'm a button.")},children:"Button Link"})}},2123:function(e,t,n){"use strict";n.r(t),t.default='/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from \'react\';\nimport Link from \'@material-ui/core/Link\';\n\nexport default function ButtonLink() {\n  return (\n    <Link\n      component="button"\n      variant="body2"\n      onClick={() => {\n        console.info("I\'m a button.");\n      }}\n    >\n      Button Link\n    </Link>\n  );\n}\n'},2669:function(e,t,n){"use strict";n.r(t);var o=n(1257),r=n(1225),i=n(1218),a=n(220),c=n(664),s=n(1),l=Object(c.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return l(),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(r.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/links",target:"_blank",role:"button",children:[Object(s.jsx)(i.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(a.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Links"}),Object(s.jsx)(a.a,{className:"description",children:"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."}),Object(s.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Simple links"}),Object(s.jsxs)(a.a,{className:"mb-16",component:"div",children:["The Link component is built on top of the ",Object(s.jsx)("a",{href:"/api/typography/",children:"Typography"})," ","component. You can leverage its properties."]}),Object(s.jsx)(a.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2120).default,raw:n(2121)})}),Object(s.jsx)(a.a,{className:"mb-16",component:"div",children:"However, the Link component has different default properties than the Typography component:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("code",{children:'color="primary"'})," as the link needs to stand out."]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("code",{children:'variant="inherit"'})," as the link will, most of the time, be used as a child of a Typography component."]})]}),Object(s.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Security"}),Object(s.jsxs)(a.a,{className:"mb-16",component:"div",children:["When you use ",Object(s.jsx)("code",{children:'target="_blank"'})," with Links, it is"," ",Object(s.jsx)("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/noopener",children:"recommended"})," ","to always set ",Object(s.jsx)("code",{children:'rel="noopener"'})," or ",Object(s.jsx)("code",{children:'rel="noreferrer"'})," when linking to third party content."]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("code",{children:'rel="noopener"'})," prevents the new page from being able to access the"," ",Object(s.jsx)("code",{children:"window.opener"})," property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL."]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("code",{children:'rel="noreferrer"'})," has the same effect, but also prevents the ",Object(s.jsx)("em",{children:"Referer"})," ","header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics."]})]}),Object(s.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Third-party routing library"}),Object(s.jsxs)(a.a,{className:"mb-16",component:"div",children:["One common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",Object(s.jsx)("code",{children:"Link"})," component provides a property to handle this use case:"," ",Object(s.jsx)("code",{children:"component"}),"."]}),Object(s.jsxs)(a.a,{className:"mb-16",component:"div",children:["Here is an ",Object(s.jsx)("a",{href:"/guides/composition/#link",children:"integration example with react-router"}),"."]}),Object(s.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Accessibility"}),Object(s.jsxs)(a.a,{className:"mb-16",component:"div",children:["(WAI-ARIA:"," ",Object(s.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#link",children:"https://www.w3.org/TR/wai-aria-practices/#link"}),")"]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:['When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use'," ",Object(s.jsx)("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text",children:"specific descriptions"}),"."]}),Object(s.jsx)("li",{children:"For the best user experience, links should stand out from the text on the page."}),Object(s.jsxs)("li",{children:["If a link doesn't have a meaningful href,"," ",Object(s.jsxs)("a",{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md",children:["it should be rendered using a ",Object(s.jsx)("code",{children:"<button>"})," element"]}),"."]})]}),Object(s.jsx)(a.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2122).default,raw:n(2123)})})]})}}}]);