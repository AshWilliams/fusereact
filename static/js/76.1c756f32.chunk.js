(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[76],{1257:function(e,n,a){"use strict";a.d(n,"a",(function(){return E}));var o=a(19),t=a(138),c=a(1228),i=a(1236),r=a(1218),s=a(1244),l=a(1246),d=a(3),p=a(0),m=a(15),h=a(6),u=a(31),b=a(32),j=a(68),x=a(69),g=a(1158),y=a(624),f=a(1215),O=a(1227),A=a(11),v=a(160),S=a(423),N=a(1258),T=a.n(N),w=a(1),I=Object(g.a)({productionPrefix:"iframe-"}),D=function(e){Object(j.a)(a,e);var n=Object(x.a)(a);function a(){var e;Object(u.a)(this,a);for(var o=arguments.length,t=new Array(o),c=0;c<o;c++)t[c]=arguments[c];return(e=n.call.apply(n,[this].concat(t))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(v.b)(Object(h.a)(Object(h.a)({},Object(y.a)()),{},{plugins:[].concat(Object(m.a)(Object(y.a)().plugins),[Object(S.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(w.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,n=e.children,a=e.classes,o=e.theme;return Object(w.jsx)(T.a,{head:this.renderHead(),ref:this.handleRef,className:Object(d.a)(a.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(w.jsx)(f.b,{jss:this.state.jss,generateClassName:I,sheetsManager:this.state.sheetsManager,children:Object(w.jsx)(O.a,{theme:o,children:Object(p.cloneElement)(n,{container:this.state.container})})}):null})}}]),a}(p.Component),C=Object(A.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(D);function k(e){var n=Object(p.useState)(e.currentTabIndex),a=Object(o.a)(n,2),m=a[0],h=a[1],u=e.component,b=e.raw,j=e.iframe,x=e.className;return Object(w.jsxs)(i.a,{className:Object(d.a)(x,"shadow"),children:[Object(w.jsx)(c.a,{position:"static",color:"default",className:"shadow-0",children:Object(w.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,n){h(n)},children:[u&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(r.a,{children:"remove_red_eye"})}),b&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(r.a,{children:"code"})})]})}),Object(w.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(w.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:u&&(j?Object(w.jsx)(C,{children:Object(w.jsx)(u,{})}):Object(w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(w.jsx)(u,{})}))}),Object(w.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:b&&Object(w.jsx)("div",{className:"flex flex-1",children:Object(w.jsx)(t.a,{component:"pre",className:"language-javascript w-full",children:b.default})})})]})]})}k.defaultProps={currentTabIndex:0};var E=k},1763:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return m}));a(0);var o=a(664),t=a(1573),c=a(1503),i=a(1504),r=a(220),s=a(1296),l=a.n(s),d=a(1),p=Object(o.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function m(){var e=p();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsxs)(t.a,{children:[Object(d.jsx)(c.a,{expandIcon:Object(d.jsx)(l.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(d.jsx)(r.a,{className:e.heading,children:"Accordion 1"})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(r.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(d.jsxs)(t.a,{children:[Object(d.jsx)(c.a,{expandIcon:Object(d.jsx)(l.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(d.jsx)(r.a,{className:e.heading,children:"Accordion 2"})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(r.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(d.jsx)(t.a,{disabled:!0,children:Object(d.jsx)(c.a,{expandIcon:Object(d.jsx)(l.a,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:Object(d.jsx)(r.a,{className:e.heading,children:"Disabled Accordion"})})})]})}},1764:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Accordion from '@material-ui/core/Accordion';\nimport AccordionSummary from '@material-ui/core/AccordionSummary';\nimport AccordionDetails from '@material-ui/core/AccordionDetails';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n    fontWeight: theme.typography.fontWeightRegular,\n  },\n}));\n\nexport default function SimpleAccordion() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1a-content\"\n          id=\"panel1a-header\"\n        >\n          <Typography className={classes.heading}>Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2a-content\"\n          id=\"panel2a-header\"\n        >\n          <Typography className={classes.heading}>Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion disabled>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3a-content\"\n          id=\"panel3a-header\"\n        >\n          <Typography className={classes.heading}>Disabled Accordion</Typography>\n        </AccordionSummary>\n      </Accordion>\n    </div>\n  );\n}\n"},1765:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return b}));var o=a(19),t=a(0),c=a.n(t),i=a(664),r=a(1573),s=a(1504),l=a(1503),d=a(220),p=a(1296),m=a.n(p),h=a(1),u=Object(i.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function b(){var e=u(),n=c.a.useState(!1),a=Object(o.a)(n,2),t=a[0],i=a[1],p=function(e){return function(n,a){i(!!a&&e)}};return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsxs)(r.a,{expanded:"panel1"===t,onChange:p("panel1"),children:[Object(h.jsxs)(l.a,{expandIcon:Object(h.jsx)(m.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(h.jsx)(d.a,{className:e.heading,children:"General settings"}),Object(h.jsx)(d.a,{className:e.secondaryHeading,children:"I am an accordion"})]}),Object(h.jsx)(s.a,{children:Object(h.jsx)(d.a,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),Object(h.jsxs)(r.a,{expanded:"panel2"===t,onChange:p("panel2"),children:[Object(h.jsxs)(l.a,{expandIcon:Object(h.jsx)(m.a,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[Object(h.jsx)(d.a,{className:e.heading,children:"Users"}),Object(h.jsx)(d.a,{className:e.secondaryHeading,children:"You are currently not an owner"})]}),Object(h.jsx)(s.a,{children:Object(h.jsx)(d.a,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),Object(h.jsxs)(r.a,{expanded:"panel3"===t,onChange:p("panel3"),children:[Object(h.jsxs)(l.a,{expandIcon:Object(h.jsx)(m.a,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[Object(h.jsx)(d.a,{className:e.heading,children:"Advanced settings"}),Object(h.jsx)(d.a,{className:e.secondaryHeading,children:"Filtering has been entirely disabled for whole web server"})]}),Object(h.jsx)(s.a,{children:Object(h.jsx)(d.a,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),Object(h.jsxs)(r.a,{expanded:"panel4"===t,onChange:p("panel4"),children:[Object(h.jsx)(l.a,{expandIcon:Object(h.jsx)(m.a,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:Object(h.jsx)(d.a,{className:e.heading,children:"Personal data"})}),Object(h.jsx)(s.a,{children:Object(h.jsx)(d.a,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}},1766:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Accordion from '@material-ui/core/Accordion';\nimport AccordionDetails from '@material-ui/core/AccordionDetails';\nimport AccordionSummary from '@material-ui/core/AccordionSummary';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n    flexBasis: '33.33%',\n    flexShrink: 0,\n  },\n  secondaryHeading: {\n    fontSize: theme.typography.pxToRem(15),\n    color: theme.palette.text.secondary,\n  },\n}));\n\nexport default function ControlledAccordions() {\n  const classes = useStyles();\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleChange = (panel) => (event, isExpanded) => {\n    setExpanded(isExpanded ? panel : false);\n  };\n\n  return (\n    <div className={classes.root}>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1bh-content\"\n          id=\"panel1bh-header\"\n        >\n          <Typography className={classes.heading}>General settings</Typography>\n          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n            maximus est, id dignissim quam.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2bh-content\"\n          id=\"panel2bh-header\"\n        >\n          <Typography className={classes.heading}>Users</Typography>\n          <Typography className={classes.secondaryHeading}>\n            You are currently not an owner\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar\n            diam eros in elit. Pellentesque convallis laoreet laoreet.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3bh-content\"\n          id=\"panel3bh-header\"\n        >\n          <Typography className={classes.heading}>Advanced settings</Typography>\n          <Typography className={classes.secondaryHeading}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,\n            vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel4bh-content\"\n          id=\"panel4bh-header\"\n        >\n          <Typography className={classes.heading}>Personal data</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,\n            vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"},1767:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return b}));var o=a(19),t=a(0),c=a.n(t),i=a(11),r=a(1573),s=a(1503),l=a(1504),d=a(220),p=a(1),m=Object(i.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(r.a),h=Object(i.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(s.a),u=Object(i.a)((function(e){return{root:{padding:e.spacing(2)}}}))(l.a);function b(){var e=c.a.useState("panel1"),n=Object(o.a)(e,2),a=n[0],t=n[1],i=function(e){return function(n,a){t(!!a&&e)}};return Object(p.jsxs)("div",{children:[Object(p.jsxs)(m,{square:!0,expanded:"panel1"===a,onChange:i("panel1"),children:[Object(p.jsx)(h,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(p.jsx)(d.a,{children:"Collapsible Group Item #1"})}),Object(p.jsx)(u,{children:Object(p.jsx)(d.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(p.jsxs)(m,{square:!0,expanded:"panel2"===a,onChange:i("panel2"),children:[Object(p.jsx)(h,{"aria-controls":"panel2d-content",id:"panel2d-header",children:Object(p.jsx)(d.a,{children:"Collapsible Group Item #2"})}),Object(p.jsx)(u,{children:Object(p.jsx)(d.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(p.jsxs)(m,{square:!0,expanded:"panel3"===a,onChange:i("panel3"),children:[Object(p.jsx)(h,{"aria-controls":"panel3d-content",id:"panel3d-header",children:Object(p.jsx)(d.a,{children:"Collapsible Group Item #3"})}),Object(p.jsx)(u,{children:Object(p.jsx)(d.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}},1768:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport MuiAccordion from '@material-ui/core/Accordion';\nimport MuiAccordionSummary from '@material-ui/core/AccordionSummary';\nimport MuiAccordionDetails from '@material-ui/core/AccordionDetails';\nimport Typography from '@material-ui/core/Typography';\n\nconst Accordion = withStyles({\n  root: {\n    border: '1px solid rgba(0, 0, 0, .125)',\n    boxShadow: 'none',\n    '&:not(:last-child)': {\n      borderBottom: 0,\n    },\n    '&:before': {\n      display: 'none',\n    },\n    '&$expanded': {\n      margin: 'auto',\n    },\n  },\n  expanded: {},\n})(MuiAccordion);\n\nconst AccordionSummary = withStyles({\n  root: {\n    backgroundColor: 'rgba(0, 0, 0, .03)',\n    borderBottom: '1px solid rgba(0, 0, 0, .125)',\n    marginBottom: -1,\n    minHeight: 56,\n    '&$expanded': {\n      minHeight: 56,\n    },\n  },\n  content: {\n    '&$expanded': {\n      margin: '12px 0',\n    },\n  },\n  expanded: {},\n})(MuiAccordionSummary);\n\nconst AccordionDetails = withStyles((theme) => ({\n  root: {\n    padding: theme.spacing(2),\n  },\n}))(MuiAccordionDetails);\n\nexport default function CustomizedAccordions() {\n  const [expanded, setExpanded] = React.useState('panel1');\n\n  const handleChange = (panel) => (event, newExpanded) => {\n    setExpanded(newExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography>Collapsible Group Item #1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography>Collapsible Group Item #2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography>Collapsible Group Item #3</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"},1769:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return u}));a(0);var o=a(664),t=a(1573),c=a(1503),i=a(1504),r=a(1289),s=a(1222),l=a(220),d=a(1296),p=a.n(d),m=a(1),h=Object(o.a)({root:{width:"100%"}});function u(){var e=h();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsxs)(t.a,{children:[Object(m.jsx)(c.a,{expandIcon:Object(m.jsx)(p.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:Object(m.jsx)(s.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(m.jsx)(r.a,{}),label:"I acknowledge that I should stop the click event propagation"})}),Object(m.jsx)(i.a,{children:Object(m.jsx)(l.a,{color:"textSecondary",children:"The click event of the nested action will propagate up and expand the accordion unless you explicitly stop it."})})]}),Object(m.jsxs)(t.a,{children:[Object(m.jsx)(c.a,{expandIcon:Object(m.jsx)(p.a,{}),"aria-label":"Expand","aria-controls":"additional-actions2-content",id:"additional-actions2-header",children:Object(m.jsx)(s.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(m.jsx)(r.a,{}),label:"I acknowledge that I should stop the focus event propagation"})}),Object(m.jsx)(i.a,{children:Object(m.jsx)(l.a,{color:"textSecondary",children:"The focus event of the nested action will propagate up and also focus the accordion unless you explicitly stop it."})})]}),Object(m.jsxs)(t.a,{children:[Object(m.jsx)(c.a,{expandIcon:Object(m.jsx)(p.a,{}),"aria-label":"Expand","aria-controls":"additional-actions3-content",id:"additional-actions3-header",children:Object(m.jsx)(s.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(m.jsx)(r.a,{}),label:"I acknowledge that I should provide an aria-label on each action that I add"})}),Object(m.jsx)(i.a,{children:Object(m.jsx)(l.a,{color:"textSecondary",children:"If you forget to put an aria-label on the nested action, the label of the action will also be included in the label of the parent button that controls the accordion expansion."})})]})]})}},1770:function(e,n,a){"use strict";a.r(n),n.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Accordion from \'@material-ui/core/Accordion\';\nimport AccordionSummary from \'@material-ui/core/AccordionSummary\';\nimport AccordionDetails from \'@material-ui/core/AccordionDetails\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Typography from \'@material-ui/core/Typography\';\nimport ExpandMoreIcon from \'@material-ui/icons/ExpandMore\';\n\nconst useStyles = makeStyles({\n  root: {\n    width: \'100%\',\n  },\n});\n\nexport default function ActionsInAccordionSummary() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-label="Expand"\n          aria-controls="additional-actions1-content"\n          id="additional-actions1-header"\n        >\n          <FormControlLabel\n            aria-label="Acknowledge"\n            onClick={(event) => event.stopPropagation()}\n            onFocus={(event) => event.stopPropagation()}\n            control={<Checkbox />}\n            label="I acknowledge that I should stop the click event propagation"\n          />\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography color="textSecondary">\n            The click event of the nested action will propagate up and expand the accordion unless\n            you explicitly stop it.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-label="Expand"\n          aria-controls="additional-actions2-content"\n          id="additional-actions2-header"\n        >\n          <FormControlLabel\n            aria-label="Acknowledge"\n            onClick={(event) => event.stopPropagation()}\n            onFocus={(event) => event.stopPropagation()}\n            control={<Checkbox />}\n            label="I acknowledge that I should stop the focus event propagation"\n          />\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography color="textSecondary">\n            The focus event of the nested action will propagate up and also focus the accordion\n            unless you explicitly stop it.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-label="Expand"\n          aria-controls="additional-actions3-content"\n          id="additional-actions3-header"\n        >\n          <FormControlLabel\n            aria-label="Acknowledge"\n            onClick={(event) => event.stopPropagation()}\n            onFocus={(event) => event.stopPropagation()}\n            control={<Checkbox />}\n            label="I acknowledge that I should provide an aria-label on each action that I add"\n          />\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography color="textSecondary">\n            If you forget to put an aria-label on the nested action, the label of the action will\n            also be included in the label of the parent button that controls the accordion\n            expansion.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n'},1771:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return x}));a(0);var o=a(664),t=a(3),c=a(1573),i=a(1504),r=a(1503),s=a(2638),l=a(220),d=a(1296),p=a.n(d),m=a(1315),h=a(1225),u=a(1235),b=a(1),j=Object(o.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));function x(){var e=j();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(c.a,{defaultExpanded:!0,children:[Object(b.jsxs)(r.a,{expandIcon:Object(b.jsx)(p.a,{}),"aria-controls":"panel1c-content",id:"panel1c-header",children:[Object(b.jsx)("div",{className:e.column,children:Object(b.jsx)(l.a,{className:e.heading,children:"Location"})}),Object(b.jsx)("div",{className:e.column,children:Object(b.jsx)(l.a,{className:e.secondaryHeading,children:"Select trip destination"})})]}),Object(b.jsxs)(i.a,{className:e.details,children:[Object(b.jsx)("div",{className:e.column}),Object(b.jsx)("div",{className:e.column,children:Object(b.jsx)(m.a,{label:"Barbados",onDelete:function(){}})}),Object(b.jsx)("div",{className:Object(t.a)(e.column,e.helper),children:Object(b.jsxs)(l.a,{variant:"caption",children:["Select your destination of choice",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"#secondary-heading-and-columns",className:e.link,children:"Learn more"})]})})]}),Object(b.jsx)(u.a,{}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(h.a,{size:"small",children:"Cancel"}),Object(b.jsx)(h.a,{size:"small",color:"primary",children:"Save"})]})]})})}},1772:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport clsx from 'clsx';\nimport Accordion from '@material-ui/core/Accordion';\nimport AccordionDetails from '@material-ui/core/AccordionDetails';\nimport AccordionSummary from '@material-ui/core/AccordionSummary';\nimport AccordionActions from '@material-ui/core/AccordionActions';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\nimport Chip from '@material-ui/core/Chip';\nimport Button from '@material-ui/core/Button';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n  },\n  secondaryHeading: {\n    fontSize: theme.typography.pxToRem(15),\n    color: theme.palette.text.secondary,\n  },\n  icon: {\n    verticalAlign: 'bottom',\n    height: 20,\n    width: 20,\n  },\n  details: {\n    alignItems: 'center',\n  },\n  column: {\n    flexBasis: '33.33%',\n  },\n  helper: {\n    borderLeft: `2px solid ${theme.palette.divider}`,\n    padding: theme.spacing(1, 2),\n  },\n  link: {\n    color: theme.palette.primary.main,\n    textDecoration: 'none',\n    '&:hover': {\n      textDecoration: 'underline',\n    },\n  },\n}));\n\nexport default function DetailedAccordion() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Accordion defaultExpanded>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1c-content\"\n          id=\"panel1c-header\"\n        >\n          <div className={classes.column}>\n            <Typography className={classes.heading}>Location</Typography>\n          </div>\n          <div className={classes.column}>\n            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>\n          </div>\n        </AccordionSummary>\n        <AccordionDetails className={classes.details}>\n          <div className={classes.column} />\n          <div className={classes.column}>\n            <Chip label=\"Barbados\" onDelete={() => {}} />\n          </div>\n          <div className={clsx(classes.column, classes.helper)}>\n            <Typography variant=\"caption\">\n              Select your destination of choice\n              <br />\n              <a href=\"#secondary-heading-and-columns\" className={classes.link}>\n                Learn more\n              </a>\n            </Typography>\n          </div>\n        </AccordionDetails>\n        <Divider />\n        <AccordionActions>\n          <Button size=\"small\">Cancel</Button>\n          <Button size=\"small\" color=\"primary\">\n            Save\n          </Button>\n        </AccordionActions>\n      </Accordion>\n    </div>\n  );\n}\n"},2637:function(e,n,a){"use strict";a.r(n);var o=a(1257),t=a(138),c=a(1225),i=a(1218),r=a(220),s=a(664),l=a(1),d=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return d(),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(l.jsxs)(c.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/accordion",target:"_blank",role:"button",children:[Object(l.jsx)(i.a,{children:"link"}),Object(l.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(l.jsx)(r.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Accordion"}),Object(l.jsx)(r.a,{className:"description",children:"Accordions contain creation flows and allow lightweight editing of an element."}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:[Object(l.jsx)("a",{href:"https://material.io/archive/guidelines/components/expansion-panels.html",children:"An accordion"})," ","is a lightweight container that may either stand alone or be connected to a larger surface, such as a card."]}),Object(l.jsx)("blockquote",{children:Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:[Object(l.jsx)("strong",{children:"Note:"})," Accordions are no longer documented in the"," ",Object(l.jsx)("a",{href:"https://material.io/",children:"Material Design guidelines"}),', but Material-UI will continue to support them. It was formerly known as the "expansion panel".']})}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Simple accordion"}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:Object(l.jsx)(o.a,{className:"my-24",iframe:!1,component:a(1763).default,raw:a(1764)})}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Controlled accordion"}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:["Extend the default behavior to create an accordion with the ",Object(l.jsx)("code",{children:"Accordion"})," ","component."]}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:Object(l.jsx)(o.a,{className:"my-24",iframe:!1,component:a(1765).default,raw:a(1766)})}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Customized accordions"}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the",Object(l.jsx)("a",{href:"/customization/components/",children:"overrides documentation page"}),"."]}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:Object(l.jsx)(o.a,{className:"my-24",iframe:!1,component:a(1767).default,raw:a(1768)})}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Additional actions"}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:["In order to put an action such as a ",Object(l.jsx)("code",{children:"Checkbox"})," or a button inside of the"," ",Object(l.jsx)("code",{children:"AccordionSummary"}),", you need to stop the propagation of the focus and click events to prevent the accordion from expanding/collapsing when using the action. You should also provide an ",Object(l.jsx)("code",{children:"aria-label"})," for the action, otherwise the label of the nested action will be included in the label of the parent button that controls the accordion expansion."]}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:Object(l.jsx)(o.a,{className:"my-24",iframe:!1,component:a(1769).default,raw:a(1770)})}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Performance"}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:["The content of Accordions is mounted by default even if the accordion is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your accordion details or simply render many accordions it might be a good idea to change this default behavior by enabling the",Object(l.jsx)("code",{children:"unmountOnExit"})," in ",Object(l.jsx)("code",{children:"TransitionProps"}),":"]}),Object(l.jsx)(t.a,{component:"pre",className:"language-jsx",children:" \n<Accordion TransitionProps={{ unmountOnExit: true }} />\n"}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:"As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Secondary heading and columns"}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:"Multiple columns can be used to structure the content, and a helper text may be added to the accordion to assist the user."}),Object(l.jsx)(r.a,{className:"mb-16",component:"div",children:Object(l.jsx)(o.a,{className:"my-24",iframe:!1,component:a(1771).default,raw:a(1772)})}),Object(l.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Accessibility"}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:["(WAI-ARIA:"," ",Object(l.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#accordion",children:"https://www.w3.org/TR/wai-aria-practices/#accordion"}),")"]}),Object(l.jsxs)(r.a,{className:"mb-16",component:"div",children:["For optimal accessibility we recommend setting ",Object(l.jsx)("code",{children:"id"})," and"," ",Object(l.jsx)("code",{children:"aria-controls"})," on the",Object(l.jsx)("code",{children:"AccordionSummary"}),". The ",Object(l.jsx)("code",{children:"Accordion"})," will derive the necessary"," ",Object(l.jsx)("code",{children:"aria-labelledby"}),"and ",Object(l.jsx)("code",{children:"id"})," for the content region of the accordion."]})]})}}}]);