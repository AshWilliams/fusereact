(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[35],{1257:function(e,n,t){"use strict";t.d(n,"a",(function(){return T}));var r=t(19),a=t(138),s=t(1228),o=t(1236),c=t(1218),i=t(1244),l=t(1246),u=t(3),m=t(0),d=t(15),f=t(6),p=t(31),b=t(32),j=t(68),h=t(69),g=t(1158),v=t(624),x=t(1215),y=t(1227),O=t(11),N=t(160),P=t(423),S=t(1258),C=t.n(S),w=t(1),k=Object(g.a)({productionPrefix:"iframe-"}),L=function(e){Object(j.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(N.b)(Object(f.a)(Object(f.a)({},Object(v.a)()),{},{plugins:[].concat(Object(d.a)(Object(v.a)().plugins),[Object(P.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(w.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,r=e.theme;return Object(w.jsx)(C.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.a)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(w.jsx)(x.b,{jss:this.state.jss,generateClassName:k,sheetsManager:this.state.sheetsManager,children:Object(w.jsx)(y.a,{theme:r,children:Object(m.cloneElement)(n,{container:this.state.container})})}):null})}}]),t}(m.Component),R=Object(O.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(L);function I(e){var n=Object(m.useState)(e.currentTabIndex),t=Object(r.a)(n,2),d=t[0],f=t[1],p=e.component,b=e.raw,j=e.iframe,h=e.className;return Object(w.jsxs)(o.a,{className:Object(u.a)(h,"shadow"),children:[Object(w.jsx)(s.a,{position:"static",color:"default",className:"shadow-0",children:Object(w.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,n){f(n)},children:[p&&Object(w.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(c.a,{children:"remove_red_eye"})}),b&&Object(w.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(c.a,{children:"code"})})]})}),Object(w.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(w.jsx)("div",{className:0===d?"flex flex-1 max-w-full":"hidden",children:p&&(j?Object(w.jsx)(R,{children:Object(w.jsx)(p,{})}):Object(w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(w.jsx)(p,{})}))}),Object(w.jsx)("div",{className:1===d?"flex flex-1":"hidden",children:b&&Object(w.jsx)("div",{className:"flex flex-1",children:Object(w.jsx)(a.a,{component:"pre",className:"language-javascript w-full",children:b.default})})})]})]})}I.defaultProps={currentTabIndex:0};var T=I},2240:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t(0);var r=t(664),a=t(1401),s=t(1),o=Object(r.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function c(){var e=o();return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(a.a,{}),Object(s.jsx)(a.a,{color:"secondary"})]})}},2241:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport CircularProgress from '@material-ui/core/CircularProgress';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > * + *': {\n      marginLeft: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function CircularIndeterminate() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <CircularProgress />\n      <CircularProgress color=\"secondary\" />\n    </div>\n  );\n}\n"},2242:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t(19),a=t(0),s=t.n(a),o=t(664),c=t(1401),i=t(1),l=Object(o.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function u(){var e=l(),n=s.a.useState(0),t=Object(r.a)(n,2),a=t[0],o=t[1];return s.a.useEffect((function(){var e=setInterval((function(){o((function(e){return e>=100?0:e+10}))}),800);return function(){clearInterval(e)}}),[]),Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(c.a,{variant:"determinate",value:25}),Object(i.jsx)(c.a,{variant:"determinate",value:50}),Object(i.jsx)(c.a,{variant:"determinate",value:75}),Object(i.jsx)(c.a,{variant:"determinate",value:100}),Object(i.jsx)(c.a,{variant:"determinate",value:a})]})}},2243:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport CircularProgress from '@material-ui/core/CircularProgress';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > * + *': {\n      marginLeft: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function CircularDeterminate() {\n  const classes = useStyles();\n  const [progress, setProgress] = React.useState(0);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));\n    }, 800);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <div className={classes.root}>\n      <CircularProgress variant=\"determinate\" value={25} />\n      <CircularProgress variant=\"determinate\" value={50} />\n      <CircularProgress variant=\"determinate\" value={75} />\n      <CircularProgress variant=\"determinate\" value={100} />\n      <CircularProgress variant=\"determinate\" value={progress} />\n    </div>\n  );\n}\n"},2244:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var r=t(28),a=t(19),s=t(0),o=t.n(s),c=t(3),i=t(664),l=t(1401),u=t(172),m=t(1225),d=t(1230),f=t(1356),p=t.n(f),b=t(1471),j=t.n(b),h=t(1),g=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:u.a[500],"&:hover":{backgroundColor:u.a[700]}},fabProgress:{color:u.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:u.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function v(){var e=g(),n=o.a.useState(!1),t=Object(a.a)(n,2),s=t[0],i=t[1],u=o.a.useState(!1),f=Object(a.a)(u,2),b=f[0],v=f[1],x=o.a.useRef(),y=Object(c.a)(Object(r.a)({},e.buttonSuccess,b));o.a.useEffect((function(){return function(){clearTimeout(x.current)}}),[]);var O=function(){s||(v(!1),i(!0),x.current=window.setTimeout((function(){v(!0),i(!1)}),2e3))};return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsxs)("div",{className:e.wrapper,children:[Object(h.jsx)(d.a,{"aria-label":"save",color:"primary",className:y,onClick:O,children:b?Object(h.jsx)(p.a,{}):Object(h.jsx)(j.a,{})}),s&&Object(h.jsx)(l.a,{size:68,className:e.fabProgress})]}),Object(h.jsxs)("div",{className:e.wrapper,children:[Object(h.jsx)(m.a,{variant:"contained",color:"primary",className:y,disabled:s,onClick:O,children:"Accept terms"}),s&&Object(h.jsx)(l.a,{size:24,className:e.buttonProgress})]})]})}},2245:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport clsx from 'clsx';\nimport { makeStyles } from '@material-ui/core/styles';\nimport CircularProgress from '@material-ui/core/CircularProgress';\nimport { green } from '@material-ui/core/colors';\nimport Button from '@material-ui/core/Button';\nimport Fab from '@material-ui/core/Fab';\nimport CheckIcon from '@material-ui/icons/Check';\nimport SaveIcon from '@material-ui/icons/Save';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    alignItems: 'center',\n  },\n  wrapper: {\n    margin: theme.spacing(1),\n    position: 'relative',\n  },\n  buttonSuccess: {\n    backgroundColor: green[500],\n    '&:hover': {\n      backgroundColor: green[700],\n    },\n  },\n  fabProgress: {\n    color: green[500],\n    position: 'absolute',\n    top: -6,\n    left: -6,\n    zIndex: 1,\n  },\n  buttonProgress: {\n    color: green[500],\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    marginTop: -12,\n    marginLeft: -12,\n  },\n}));\n\nexport default function CircularIntegration() {\n  const classes = useStyles();\n  const [loading, setLoading] = React.useState(false);\n  const [success, setSuccess] = React.useState(false);\n  const timer = React.useRef();\n\n  const buttonClassname = clsx({\n    [classes.buttonSuccess]: success,\n  });\n\n  React.useEffect(() => {\n    return () => {\n      clearTimeout(timer.current);\n    };\n  }, []);\n\n  const handleButtonClick = () => {\n    if (!loading) {\n      setSuccess(false);\n      setLoading(true);\n      timer.current = window.setTimeout(() => {\n        setSuccess(true);\n        setLoading(false);\n      }, 2000);\n    }\n  };\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.wrapper}>\n        <Fab\n          aria-label=\"save\"\n          color=\"primary\"\n          className={buttonClassname}\n          onClick={handleButtonClick}\n        >\n          {success ? <CheckIcon /> : <SaveIcon />}\n        </Fab>\n        {loading && <CircularProgress size={68} className={classes.fabProgress} />}\n      </div>\n      <div className={classes.wrapper}>\n        <Button\n          variant=\"contained\"\n          color=\"primary\"\n          className={buttonClassname}\n          disabled={loading}\n          onClick={handleButtonClick}\n        >\n          Accept terms\n        </Button>\n        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}\n      </div>\n    </div>\n  );\n}\n"},2246:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t(19),a=t(6),s=t(0),o=t.n(s),c=t(1401),i=t(220),l=t(1426),u=t(1);function m(e){return Object(u.jsxs)(l.a,{position:"relative",display:"inline-flex",children:[Object(u.jsx)(c.a,Object(a.a)({variant:"determinate"},e)),Object(u.jsx)(l.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(u.jsx)(i.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}function d(){var e=o.a.useState(10),n=Object(r.a)(e,2),t=n[0],a=n[1];return o.a.useEffect((function(){var e=setInterval((function(){a((function(e){return e>=100?0:e+10}))}),800);return function(){clearInterval(e)}}),[]),Object(u.jsx)(m,{value:t})}},2247:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport CircularProgress from \'@material-ui/core/CircularProgress\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Box from \'@material-ui/core/Box\';\n\nfunction CircularProgressWithLabel(props) {\n  return (\n    <Box position="relative" display="inline-flex">\n      <CircularProgress variant="determinate" {...props} />\n      <Box\n        top={0}\n        left={0}\n        bottom={0}\n        right={0}\n        position="absolute"\n        display="flex"\n        alignItems="center"\n        justifyContent="center"\n      >\n        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(\n          props.value,\n        )}%`}</Typography>\n      </Box>\n    </Box>\n  );\n}\n\nCircularProgressWithLabel.propTypes = {\n  /**\n   * The value of the progress indicator for the determinate variant.\n   * Value between 0 and 100.\n   */\n  value: PropTypes.number.isRequired,\n};\n\nexport default function CircularStatic() {\n  const [progress, setProgress] = React.useState(10);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));\n    }, 800);\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return <CircularProgressWithLabel value={progress} />;\n}\n'},2248:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t(0);var r=t(664),a=t(1219),s=t(1),o=Object(r.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function c(){var e=o();return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(a.a,{}),Object(s.jsx)(a.a,{color:"secondary"})]})}},2249:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport LinearProgress from '@material-ui/core/LinearProgress';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function LinearIndeterminate() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <LinearProgress />\n      <LinearProgress color=\"secondary\" />\n    </div>\n  );\n}\n"},2250:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t(19),a=t(0),s=t.n(a),o=t(664),c=t(1219),i=t(1),l=Object(o.a)({root:{width:"100%"}});function u(){var e=l(),n=s.a.useState(0),t=Object(r.a)(n,2),a=t[0],o=t[1];return s.a.useEffect((function(){var e=setInterval((function(){o((function(e){if(100===e)return 0;var n=10*Math.random();return Math.min(e+n,100)}))}),500);return function(){clearInterval(e)}}),[]),Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(c.a,{variant:"determinate",value:a})})}},2251:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport LinearProgress from '@material-ui/core/LinearProgress';\n\nconst useStyles = makeStyles({\n  root: {\n    width: '100%',\n  },\n});\n\nexport default function LinearDeterminate() {\n  const classes = useStyles();\n  const [progress, setProgress] = React.useState(0);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((oldProgress) => {\n        if (oldProgress === 100) {\n          return 0;\n        }\n        const diff = Math.random() * 10;\n        return Math.min(oldProgress + diff, 100);\n      });\n    }, 500);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <div className={classes.root}>\n      <LinearProgress variant=\"determinate\" value={progress} />\n    </div>\n  );\n}\n"},2252:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t(19),a=t(0),s=t.n(a),o=t(664),c=t(1219),i=t(1),l=Object(o.a)({root:{width:"100%"}});function u(){var e=l(),n=s.a.useState(0),t=Object(r.a)(n,2),a=t[0],o=t[1],u=s.a.useState(10),m=Object(r.a)(u,2),d=m[0],f=m[1],p=s.a.useRef((function(){}));return s.a.useEffect((function(){p.current=function(){if(a>100)o(0),f(10);else{var e=10*Math.random(),n=10*Math.random();o(a+e),f(a+e+n)}}})),s.a.useEffect((function(){var e=setInterval((function(){p.current()}),500);return function(){clearInterval(e)}}),[]),Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(c.a,{variant:"buffer",value:a,valueBuffer:d})})}},2253:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport LinearProgress from '@material-ui/core/LinearProgress';\n\nconst useStyles = makeStyles({\n  root: {\n    width: '100%',\n  },\n});\n\nexport default function LinearBuffer() {\n  const classes = useStyles();\n  const [progress, setProgress] = React.useState(0);\n  const [buffer, setBuffer] = React.useState(10);\n\n  const progressRef = React.useRef(() => {});\n  React.useEffect(() => {\n    progressRef.current = () => {\n      if (progress > 100) {\n        setProgress(0);\n        setBuffer(10);\n      } else {\n        const diff = Math.random() * 10;\n        const diff2 = Math.random() * 10;\n        setProgress(progress + diff);\n        setBuffer(progress + diff + diff2);\n      }\n    };\n  });\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      progressRef.current();\n    }, 500);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <div className={classes.root}>\n      <LinearProgress variant=\"buffer\" value={progress} valueBuffer={buffer} />\n    </div>\n  );\n}\n"},2254:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var r=t(19),a=t(6),s=t(0),o=t.n(s),c=t(664),i=t(1219),l=t(220),u=t(1426),m=t(1);function d(e){return Object(m.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(m.jsx)(u.a,{width:"100%",mr:1,children:Object(m.jsx)(i.a,Object(a.a)({variant:"determinate"},e))}),Object(m.jsx)(u.a,{minWidth:35,children:Object(m.jsx)(l.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}var f=Object(c.a)({root:{width:"100%"}});function p(){var e=f(),n=o.a.useState(10),t=Object(r.a)(n,2),a=t[0],s=t[1];return o.a.useEffect((function(){var e=setInterval((function(){s((function(e){return e>=100?10:e+10}))}),800);return function(){clearInterval(e)}}),[]),Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)(d,{value:a})})}},2255:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport LinearProgress from '@material-ui/core/LinearProgress';\nimport Typography from '@material-ui/core/Typography';\nimport Box from '@material-ui/core/Box';\n\nfunction LinearProgressWithLabel(props) {\n  return (\n    <Box display=\"flex\" alignItems=\"center\">\n      <Box width=\"100%\" mr={1}>\n        <LinearProgress variant=\"determinate\" {...props} />\n      </Box>\n      <Box minWidth={35}>\n        <Typography variant=\"body2\" color=\"textSecondary\">{`${Math.round(\n          props.value,\n        )}%`}</Typography>\n      </Box>\n    </Box>\n  );\n}\n\nLinearProgressWithLabel.propTypes = {\n  /**\n   * The value of the progress indicator for the determinate and buffer variants.\n   * Value between 0 and 100.\n   */\n  value: PropTypes.number.isRequired,\n};\n\nconst useStyles = makeStyles({\n  root: {\n    width: '100%',\n  },\n});\n\nexport default function LinearWithValueLabel() {\n  const classes = useStyles();\n  const [progress, setProgress] = React.useState(10);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));\n    }, 800);\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <div className={classes.root}>\n      <LinearProgressWithLabel value={progress} />\n    </div>\n  );\n}\n"},2256:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t(6),a=(t(0),t(11)),s=t(664),o=t(1401),c=t(1219),i=t(1),l=Object(a.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(c.a),u=Object(s.a)((function(e){return{root:{position:"relative"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{color:"#1a90ff",animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}}));function m(e){var n=u();return Object(i.jsxs)("div",{className:n.root,children:[Object(i.jsx)(o.a,Object(r.a)(Object(r.a)({variant:"determinate",className:n.bottom,size:40,thickness:4},e),{},{value:100})),Object(i.jsx)(o.a,Object(r.a)({variant:"indeterminate",disableShrink:!0,className:n.top,classes:{circle:n.circle},size:40,thickness:4},e))]})}var d=Object(s.a)({root:{flexGrow:1}});function f(){var e=d();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(m,{}),Object(i.jsx)("br",{}),Object(i.jsx)(l,{variant:"determinate",value:50})]})}},2257:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\nimport CircularProgress from '@material-ui/core/CircularProgress';\nimport LinearProgress from '@material-ui/core/LinearProgress';\n\nconst BorderLinearProgress = withStyles((theme) => ({\n  root: {\n    height: 10,\n    borderRadius: 5,\n  },\n  colorPrimary: {\n    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],\n  },\n  bar: {\n    borderRadius: 5,\n    backgroundColor: '#1a90ff',\n  },\n}))(LinearProgress);\n\n// Inspired by the former Facebook spinners.\nconst useStylesFacebook = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  bottom: {\n    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],\n  },\n  top: {\n    color: '#1a90ff',\n    animationDuration: '550ms',\n    position: 'absolute',\n    left: 0,\n  },\n  circle: {\n    strokeLinecap: 'round',\n  },\n}));\n\nfunction FacebookCircularProgress(props) {\n  const classes = useStylesFacebook();\n\n  return (\n    <div className={classes.root}>\n      <CircularProgress\n        variant=\"determinate\"\n        className={classes.bottom}\n        size={40}\n        thickness={4}\n        {...props}\n        value={100}\n      />\n      <CircularProgress\n        variant=\"indeterminate\"\n        disableShrink\n        className={classes.top}\n        classes={{\n          circle: classes.circle,\n        }}\n        size={40}\n        thickness={4}\n        {...props}\n      />\n    </div>\n  );\n}\n\nconst useStyles = makeStyles({\n  root: {\n    flexGrow: 1,\n  },\n});\n\nexport default function CustomizedProgressBars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <FacebookCircularProgress />\n      <br />\n      <BorderLinearProgress variant=\"determinate\" value={50} />\n    </div>\n  );\n}\n"},2258:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t(19),a=t(0),s=t.n(a),o=t(664),c=t(618),i=t(1225),l=t(1401),u=t(220),m=t(1),d=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},button:{margin:e.spacing(2)},placeholder:{height:40}}}));function f(){var e=d(),n=s.a.useState(!1),t=Object(r.a)(n,2),a=t[0],o=t[1],f=s.a.useState("idle"),p=Object(r.a)(f,2),b=p[0],j=p[1],h=s.a.useRef();s.a.useEffect((function(){return function(){clearTimeout(h.current)}}),[]);return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)("div",{className:e.placeholder,children:Object(m.jsx)(c.a,{in:a,style:{transitionDelay:a?"800ms":"0ms"},unmountOnExit:!0,children:Object(m.jsx)(l.a,{})})}),Object(m.jsx)(i.a,{onClick:function(){o((function(e){return!e}))},className:e.button,children:a?"Stop loading":"Loading"}),Object(m.jsx)("div",{className:e.placeholder,children:"success"===b?Object(m.jsx)(u.a,{children:"Success!"}):Object(m.jsx)(c.a,{in:"progress"===b,style:{transitionDelay:"progress"===b?"800ms":"0ms"},unmountOnExit:!0,children:Object(m.jsx)(l.a,{})})}),Object(m.jsx)(i.a,{onClick:function(){clearTimeout(h.current),"idle"===b?(j("progress"),h.current=window.setTimeout((function(){j("success")}),2e3)):j("idle")},className:e.button,children:"idle"!==b?"Reset":"Simulate a load"})]})}},2259:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Fade from '@material-ui/core/Fade';\nimport Button from '@material-ui/core/Button';\nimport CircularProgress from '@material-ui/core/CircularProgress';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n  },\n  button: {\n    margin: theme.spacing(2),\n  },\n  placeholder: {\n    height: 40,\n  },\n}));\n\nexport default function DelayingAppearance() {\n  const classes = useStyles();\n  const [loading, setLoading] = React.useState(false);\n  const [query, setQuery] = React.useState('idle');\n  const timerRef = React.useRef();\n\n  React.useEffect(\n    () => () => {\n      clearTimeout(timerRef.current);\n    },\n    [],\n  );\n\n  const handleClickLoading = () => {\n    setLoading((prevLoading) => !prevLoading);\n  };\n\n  const handleClickQuery = () => {\n    clearTimeout(timerRef.current);\n\n    if (query !== 'idle') {\n      setQuery('idle');\n      return;\n    }\n\n    setQuery('progress');\n    timerRef.current = window.setTimeout(() => {\n      setQuery('success');\n    }, 2000);\n  };\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.placeholder}>\n        <Fade\n          in={loading}\n          style={{\n            transitionDelay: loading ? '800ms' : '0ms',\n          }}\n          unmountOnExit\n        >\n          <CircularProgress />\n        </Fade>\n      </div>\n      <Button onClick={handleClickLoading} className={classes.button}>\n        {loading ? 'Stop loading' : 'Loading'}\n      </Button>\n      <div className={classes.placeholder}>\n        {query === 'success' ? (\n          <Typography>Success!</Typography>\n        ) : (\n          <Fade\n            in={query === 'progress'}\n            style={{\n              transitionDelay: query === 'progress' ? '800ms' : '0ms',\n            }}\n            unmountOnExit\n          >\n            <CircularProgress />\n          </Fade>\n        )}\n      </div>\n      <Button onClick={handleClickQuery} className={classes.button}>\n        {query !== 'idle' ? 'Reset' : 'Simulate a load'}\n      </Button>\n    </div>\n  );\n}\n"},2260:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(0);var r=t(1401),a=t(1);function s(){return Object(a.jsx)(r.a,{disableShrink:!0})}},2261:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport CircularProgress from '@material-ui/core/CircularProgress';\n\nexport default function CircularUnderLoad() {\n  return <CircularProgress disableShrink />;\n}\n"},2681:function(e,n,t){"use strict";t.r(n);var r=t(1257),a=t(138),s=t(1225),o=t(1218),c=t(220),i=t(664),l=t(1),u=Object(i.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return u(),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(l.jsxs)(s.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/progress",target:"_blank",role:"button",children:[Object(l.jsx)(o.a,{children:"link"}),Object(l.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(l.jsx)(c.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Progress"}),Object(l.jsx)(c.a,{className:"description",children:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The animation works with CSS, not JavaScript."}),Object(l.jsxs)(c.a,{className:"mb-16",component:"div",children:[Object(l.jsx)("a",{href:"https://material.io/design/components/progress-indicators.html",children:"Progress indicators"})," ","inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen."]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Determinate"})," indicators display how long an operation will take."]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Indeterminate"})," indicators visualize an unspecified wait time."]})]}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:"When displaying progress for a sequence of processes, indicate overall progress rather than the progress of each activity."}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Circular"}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Circular indeterminate"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2240).default,raw:t(2241)})}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Circular determinate"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2242).default,raw:t(2243)})}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Interactive integration"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2244).default,raw:t(2245)})}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Circular with label"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2246).default,raw:t(2247)})}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Linear"}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Linear indeterminate"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2248).default,raw:t(2249)})}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Linear determinate"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2250).default,raw:t(2251)})}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Linear buffer"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2252).default,raw:t(2253)})}),Object(l.jsx)(c.a,{className:"text-24 mt-32 mb-8",component:"h3",children:"Linear with label"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2254).default,raw:t(2255)})}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Non-standard ranges"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:"The progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where these are the default min / max values. Sometimes, however, you might be working with a data source where the values fall outside this range. Here's how you can easily transform a value in any range to a scale of 0 - 100:"}),Object(l.jsx)(a.a,{component:"pre",className:"language-jsx",children:' \n// MIN = Minimum expected value\n// MAX = Maximium expected value\n// Function to normalise the values (MIN / MAX could be integrated)\nconst normalise = value => (value - MIN) * 100 / (MAX - MIN);\n\n// Example component that utilizes the `normalise` function at the point of render.\nfunction Progress(props) {\n  return (\n    <React.Fragment>\n      <CircularProgress variant="determinate" value={normalise(props.value)} />\n      <LinearProgress variant="determinate" value={normalise(props.value)} />\n    </React.Fragment>\n  )\n}\n'}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Customized progress"}),Object(l.jsxs)(c.a,{className:"mb-16",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the",Object(l.jsx)("a",{href:"/customization/components/",children:"overrides documentation page"}),"."]}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2256).default,raw:t(2257)})}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Delaying appearance"}),Object(l.jsxs)(c.a,{className:"mb-16",component:"div",children:["There are"," ",Object(l.jsx)("a",{href:"https://www.nngroup.com/articles/response-times-3-important-limits/",children:"3 important limits"})," ","to know around response time. The ripple effect of the ",Object(l.jsx)("code",{children:"ButtonBase"})," component ensures that the user feels that the system is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep user's flow of thought uninterrupted."]}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2258).default,raw:t(2259)})}),Object(l.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Limitations"}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:"Under heavy load, you might lose the stroke dash animation or see random CircularProgress ring widths. You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread."}),Object(l.jsxs)(c.a,{className:"mb-16",component:"div",children:[" ",'src="/material-ui-static/images/progress/heavy-load.gif" alt="heavy load/>']}),Object(l.jsxs)(c.a,{className:"mb-16",component:"div",children:["When it's not possible, you can leverage the ",Object(l.jsx)("code",{children:"disableShrink"})," property to mitigate the issue. See"," ",Object(l.jsx)("a",{href:"https://github.com/mui-org/material-ui/issues/10327",children:"this issue"}),"."]}),Object(l.jsx)(c.a,{className:"mb-16",component:"div",children:Object(l.jsx)(r.a,{className:"my-24",iframe:!1,component:t(2260).default,raw:t(2261)})})]})}}}]);