(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[95],{1256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var o,r=n(0),a=(o=r)&&o.__esModule?o:{default:o};var c=void 0,i=void 0;"undefined"!==typeof document&&(c=document),"undefined"!==typeof window&&(i=window);var l=t.FrameContext=a.default.createContext({document:c,window:i}),s=l.Provider,u=l.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1257:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n(19),r=n(138),a=n(1228),c=n(1236),i=n(1218),l=n(1244),s=n(1246),u=n(3),d=n(0),f=n(15),p=n(6),m=n(31),h=n(32),b=n(68),j=n(69),x=n(1158),y=n(624),O=n(1215),v=n(1227),g=n(11),w=n(160),C=n(423),_=n(1258),M=n.n(_),D=n(1),P=Object(x.a)({productionPrefix:"iframe-"}),T=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.b)(Object(p.a)(Object(p.a)({},Object(y.a)()),{},{plugins:[].concat(Object(f.a)(Object(y.a)().plugins),[Object(C.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(D.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,o=e.theme;return Object(D.jsx)(M.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.a)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(D.jsx)(O.b,{jss:this.state.jss,generateClassName:P,sheetsManager:this.state.sheetsManager,children:Object(D.jsx)(v.a,{theme:o,children:Object(d.cloneElement)(t,{container:this.state.container})})}):null})}}]),n}(d.Component),N=Object(g.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(T);function k(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(o.a)(t,2),f=n[0],p=n[1],m=e.component,h=e.raw,b=e.iframe,j=e.className;return Object(D.jsxs)(c.a,{className:Object(u.a)(j,"shadow"),children:[Object(D.jsx)(a.a,{position:"static",color:"default",className:"shadow-0",children:Object(D.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:f,onChange:function(e,t){p(t)},children:[m&&Object(D.jsx)(l.a,{classes:{root:"min-w-64"},icon:Object(D.jsx)(i.a,{children:"remove_red_eye"})}),h&&Object(D.jsx)(l.a,{classes:{root:"min-w-64"},icon:Object(D.jsx)(i.a,{children:"code"})})]})}),Object(D.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(D.jsx)("div",{className:0===f?"flex flex-1 max-w-full":"hidden",children:m&&(b?Object(D.jsx)(N,{children:Object(D.jsx)(m,{})}):Object(D.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(D.jsx)(m,{})}))}),Object(D.jsx)("div",{className:1===f?"flex flex-1":"hidden",children:h&&Object(D.jsx)("div",{className:"flex flex-1",children:Object(D.jsx)(r.a,{component:"pre",className:"language-javascript w-full",children:h.default})})})]})]})}k.defaultProps={currentTabIndex:0};var E=k},1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var o=n(1256);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return o.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return o.FrameContextConsumer}});var r,a=n(1259),c=(r=a)&&r.__esModule?r:{default:r};t.default=c.default},1259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),c=d(a),i=d(n(34)),l=d(n(9)),s=n(1256),u=d(n(1260));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,o=e.defaultView||e.parentView,r=c.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},c.default.createElement(s.FrameContextProvider,{value:{document:e,window:o}},c.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var a=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(r,a)]}},{key:"render",value:function(){var e=this,t=o({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,c.default.createElement("iframe",o({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(a.Component);f.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},f.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=f},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=(c(r),c(n(9)));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:a.default.element.isRequired,contentDidMount:a.default.func.isRequired,contentDidUpdate:a.default.func.isRequired},t.default=s},2540:function(e,t,n){"use strict";n.r(t);var o=n(1218),r=n(1226),a=n(220),c=n(1489),i=n(1);function l(e){var t=e.text;return Object(i.jsx)(r.a,{title:t,placement:"top",children:Object(i.jsx)(o.a,{className:"text-red",children:"place"})})}t.default=function(){return Object(i.jsxs)("div",{className:"w-full",children:[Object(i.jsx)(a.a,{className:"h2 mb-16",children:"Simple Map Example"}),Object(i.jsx)("div",{className:"w-full h-512",children:Object(i.jsx)(c.a,{bootstrapURLKeys:{key:""},defaultZoom:12,defaultCenter:[-34.397,150.64],children:Object(i.jsx)(l,{text:"Marker Text",lat:"-34.397",lng:"150.644"})})})]})}},2541:function(e,t,n){"use strict";n.r(t),t.default='import Icon from \'@material-ui/core/Icon\';\nimport Tooltip from \'@material-ui/core/Tooltip\';\nimport Typography from \'@material-ui/core/Typography\';\nimport GoogleMap from \'google-map-react\';\n\nfunction Marker({ text }) {\n\treturn (\n\t\t<Tooltip title={text} placement="top">\n\t\t\t<Icon className="text-red">place</Icon>\n\t\t</Tooltip>\n\t);\n}\n\nfunction SimpleExample() {\n\treturn (\n\t\t<div className="w-full">\n\t\t\t<Typography className="h2 mb-16">Simple Map Example</Typography>\n\t\t\t<div className="w-full h-512">\n\t\t\t\t<GoogleMap\n\t\t\t\t\tbootstrapURLKeys={{\n\t\t\t\t\t\tkey: process.env.REACT_APP_MAP_KEY\n\t\t\t\t\t}}\n\t\t\t\t\tdefaultZoom={12}\n\t\t\t\t\tdefaultCenter={[-34.397, 150.64]}\n\t\t\t\t>\n\t\t\t\t\t<Marker text="Marker Text" lat="-34.397" lng="150.644" />\n\t\t\t\t</GoogleMap>\n\t\t\t</div>\n\t\t</div>\n\t);\n}\n\nexport default SimpleExample;\n'},2720:function(e,t,n){"use strict";n.r(t);var o=n(1257),r=n(1225),a=n(1218),c=n(220),i=n(35),l=n(1);t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"flex w-full items-center justify-between mb-24",children:[Object(l.jsx)(c.a,{variant:"h4",className:"",children:"GoogleMapReact"}),Object(l.jsxs)(r.a,{variant:"outlined",component:"a",href:"https://github.com/google-map-react/google-map-react",target:"_blank",role:"button",children:[Object(l.jsx)(a.a,{children:"link"}),Object(l.jsx)("span",{className:"mx-4",children:"Reference"})]})]}),Object(l.jsxs)(c.a,{className:"mb-16",component:"p",children:[Object(l.jsx)("code",{children:"google-map-react"})," is a component written over a small set of the Google Maps API."]}),Object(l.jsx)("hr",{}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example Usages"}),Object(l.jsx)(o.a,{className:"mb-64",component:n(2540).default,raw:n(2541)}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Demos"}),Object(l.jsx)("ul",{children:Object(l.jsx)("li",{className:"mb-8",children:Object(l.jsx)(i.a,{to:"/apps/dashboards/analytics",children:"Analytics Dashboard"})})})]})}}}]);