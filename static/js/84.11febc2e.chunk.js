(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[84],{1257:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var n=a(19),i=a(138),s=a(1228),r=a(1236),o=a(1218),c=a(1244),l=a(1246),m=a(3),d=a(0),u=a(15),g=a(6),h=a(31),p=a(32),j=a(68),f=a(69),b=a(1158),x=a(624),I=a(1215),O=a(1227),y=a(11),L=a(160),v=a(423),w=a(1258),N=a.n(w),k=a(1),B=Object(b.a)({productionPrefix:"iframe-"}),S=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(L.b)(Object(g.a)(Object(g.a)({},Object(x.a)()),{},{plugins:[].concat(Object(u.a)(Object(x.a)().plugins),[Object(v.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(k.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.classes,n=e.theme;return Object(k.jsx)(N.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.a)(a.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(k.jsx)(I.b,{jss:this.state.jss,generateClassName:B,sheetsManager:this.state.sheetsManager,children:Object(k.jsx)(O.a,{theme:n,children:Object(d.cloneElement)(t,{container:this.state.container})})}):null})}}]),a}(d.Component),D=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(S);function C(e){var t=Object(d.useState)(e.currentTabIndex),a=Object(n.a)(t,2),u=a[0],g=a[1],h=e.component,p=e.raw,j=e.iframe,f=e.className;return Object(k.jsxs)(r.a,{className:Object(m.a)(f,"shadow"),children:[Object(k.jsx)(s.a,{position:"static",color:"default",className:"shadow-0",children:Object(k.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,t){g(t)},children:[h&&Object(k.jsx)(c.a,{classes:{root:"min-w-64"},icon:Object(k.jsx)(o.a,{children:"remove_red_eye"})}),p&&Object(k.jsx)(c.a,{classes:{root:"min-w-64"},icon:Object(k.jsx)(o.a,{children:"code"})})]})}),Object(k.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(k.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:h&&(j?Object(k.jsx)(D,{children:Object(k.jsx)(h,{})}):Object(k.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(k.jsx)(h,{})}))}),Object(k.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:p&&Object(k.jsx)("div",{className:"flex flex-1",children:Object(k.jsx)(i.a,{component:"pre",className:"language-javascript w-full",children:p.default})})})]})]})}C.defaultProps={currentTabIndex:0};var T=C},1419:function(e,t,a){"use strict";t.a=[{img:"/material-ui-static/images/image-list/breakfast.jpg",title:"Breakfast",author:"jill111",cols:2,featured:!0},{img:"/material-ui-static/images/image-list/burgers.jpg",title:"Tasty burger",author:"director90"},{img:"/material-ui-static/images/image-list/camera.jpg",title:"Camera",author:"Danson67"},{img:"/material-ui-static/images/image-list/morning.jpg",title:"Morning",author:"fancycrave1",featured:!0},{img:"/material-ui-static/images/image-list/hats.jpg",title:"Hats",author:"Hans"},{img:"/material-ui-static/images/image-list/honey.jpg",title:"Honey",author:"fancycravel"},{img:"/material-ui-static/images/image-list/vegetables.jpg",title:"Vegetables",author:"jill111",cols:2},{img:"/material-ui-static/images/image-list/plant.jpg",title:"Water plant",author:"BkrmadtyaKarki"},{img:"/material-ui-static/images/image-list/mushroom.jpg",title:"Mushrooms",author:"PublicDomainPictures"},{img:"/material-ui-static/images/image-list/olive.jpg",title:"Olive oil",author:"congerdesign"},{img:"/material-ui-static/images/image-list/star.jpg",title:"Sea star",cols:2,author:"821292"},{img:"/material-ui-static/images/image-list/bike.jpg",title:"Bike",author:"danfador"}]},2108:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));a(0);var n=a(664),i=a(2109),s=a(2110),r=a(1419),o=a(1),c=Object(n.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{width:500,height:450}}}));function l(){var e=c();return Object(o.jsx)("div",{className:e.root,children:Object(o.jsx)(i.a,{rowHeight:160,className:e.imageList,cols:3,children:r.a.map((function(e){return Object(o.jsx)(s.a,{cols:e.cols||1,children:Object(o.jsx)("img",{src:e.img,alt:e.title})},e.img)}))})})}},2111:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ImageList from '@material-ui/core/ImageList';\nimport ImageListItem from '@material-ui/core/ImageListItem';\nimport itemData from './itemData';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  imageList: {\n    width: 500,\n    height: 450,\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const itemData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     cols: 2,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nexport default function BasicImageList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ImageList rowHeight={160} className={classes.imageList} cols={3}>\n        {itemData.map((item) => (\n          <ImageListItem key={item.img} cols={item.cols || 1}>\n            <img src={item.img} alt={item.title} />\n          </ImageListItem>\n        ))}\n      </ImageList>\n    </div>\n  );\n}\n"},2112:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));a(0);var n=a(664),i=a(2109),s=a(2110),r=a(2113),o=a(1234),c=a(1161),l=a(2114),m=a.n(l),d=a(1419),u=a(1),g=Object(n.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));function h(){var e=g();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsxs)(i.a,{rowHeight:180,className:e.imageList,children:[Object(u.jsx)(s.a,{cols:2,style:{height:"auto"},children:Object(u.jsx)(o.a,{component:"div",children:"December"})},"Subheader"),d.a.map((function(t){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)("img",{src:t.img,alt:t.title}),Object(u.jsx)(r.a,{title:t.title,subtitle:Object(u.jsxs)("span",{children:["by: ",t.author]}),actionIcon:Object(u.jsx)(c.a,{"aria-label":"info about ".concat(t.title),className:e.icon,children:Object(u.jsx)(m.a,{})})})]},t.img)}))]})})}},2115:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ImageList from '@material-ui/core/ImageList';\nimport ImageListItem from '@material-ui/core/ImageListItem';\nimport ImageListItemBar from '@material-ui/core/ImageListItemBar';\nimport ListSubheader from '@material-ui/core/ListSubheader';\nimport IconButton from '@material-ui/core/IconButton';\nimport InfoIcon from '@material-ui/icons/Info';\nimport itemData from './itemData';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  imageList: {\n    width: 500,\n    height: 450,\n  },\n  icon: {\n    color: 'rgba(255, 255, 255, 0.54)',\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const itemData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nexport default function TitlebarImageList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ImageList rowHeight={180} className={classes.imageList}>\n        <ImageListItem key=\"Subheader\" cols={2} style={{ height: 'auto' }}>\n          <ListSubheader component=\"div\">December</ListSubheader>\n        </ImageListItem>\n        {itemData.map((item) => (\n          <ImageListItem key={item.img}>\n            <img src={item.img} alt={item.title} />\n            <ImageListItemBar\n              title={item.title}\n              subtitle={<span>by: {item.author}</span>}\n              actionIcon={\n                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>\n                  <InfoIcon />\n                </IconButton>\n              }\n            />\n          </ImageListItem>\n        ))}\n      </ImageList>\n    </div>\n  );\n}\n"},2116:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));a(0);var n=a(664),i=a(2109),s=a(2110),r=a(2113),o=a(1161),c=a(1420),l=a.n(c),m=a(1419),d=a(1),u=Object(n.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));function g(){var e=u();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(i.a,{className:e.imageList,cols:2.5,children:m.a.map((function(t){return Object(d.jsxs)(s.a,{children:[Object(d.jsx)("img",{src:t.img,alt:t.title}),Object(d.jsx)(r.a,{title:t.title,classes:{root:e.titleBar,title:e.title},actionIcon:Object(d.jsx)(o.a,{"aria-label":"star ".concat(t.title),children:Object(d.jsx)(l.a,{className:e.title})})})]},t.img)}))})})}},2117:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ImageList from '@material-ui/core/ImageList';\nimport ImageListItem from '@material-ui/core/ImageListItem';\nimport ImageListItemBar from '@material-ui/core/ImageListItemBar';\nimport IconButton from '@material-ui/core/IconButton';\nimport StarBorderIcon from '@material-ui/icons/StarBorder';\nimport itemData from './itemData';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  imageList: {\n    flexWrap: 'nowrap',\n    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.\n    transform: 'translateZ(0)',\n  },\n  title: {\n    color: theme.palette.primary.light,\n  },\n  titleBar: {\n    background:\n      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const itemData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nexport default function SingleLineImageList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ImageList className={classes.imageList} cols={2.5}>\n        {itemData.map((item) => (\n          <ImageListItem key={item.img}>\n            <img src={item.img} alt={item.title} />\n            <ImageListItemBar\n              title={item.title}\n              classes={{\n                root: classes.titleBar,\n                title: classes.title,\n              }}\n              actionIcon={\n                <IconButton aria-label={`star ${item.title}`}>\n                  <StarBorderIcon className={classes.title} />\n                </IconButton>\n              }\n            />\n          </ImageListItem>\n        ))}\n      </ImageList>\n    </div>\n  );\n}\n"},2118:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));a(0);var n=a(664),i=a(2109),s=a(2110),r=a(2113),o=a(1161),c=a(1420),l=a.n(c),m=a(1419),d=a(1),u=Object(n.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{width:500,height:450,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}}));function g(){var e=u();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(i.a,{rowHeight:200,gap:1,className:e.imageList,children:m.a.map((function(t){return Object(d.jsxs)(s.a,{cols:t.featured?2:1,rows:t.featured?2:1,children:[Object(d.jsx)("img",{src:t.img,alt:t.title}),Object(d.jsx)(r.a,{title:t.title,position:"top",actionIcon:Object(d.jsx)(o.a,{"aria-label":"star ".concat(t.title),className:e.icon,children:Object(d.jsx)(l.a,{})}),actionPosition:"left",className:e.titleBar})]},t.img)}))})})}},2119:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ImageList from '@material-ui/core/ImageList';\nimport ImageListItem from '@material-ui/core/ImageListItem';\nimport ImageListItemBar from '@material-ui/core/ImageListItemBar';\nimport IconButton from '@material-ui/core/IconButton';\nimport StarBorderIcon from '@material-ui/icons/StarBorder';\nimport itemData from './itemData';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  imageList: {\n    width: 500,\n    height: 450,\n    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.\n    transform: 'translateZ(0)',\n  },\n  titleBar: {\n    background:\n      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +\n      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',\n  },\n  icon: {\n    color: 'white',\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const itemData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     featured: true,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nexport default function AdvancedImageList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ImageList rowHeight={200} gap={1} className={classes.imageList}>\n        {itemData.map((item) => (\n          <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>\n            <img src={item.img} alt={item.title} />\n            <ImageListItemBar\n              title={item.title}\n              position=\"top\"\n              actionIcon={\n                <IconButton aria-label={`star ${item.title}`} className={classes.icon}>\n                  <StarBorderIcon />\n                </IconButton>\n              }\n              actionPosition=\"left\"\n              className={classes.titleBar}\n            />\n          </ImageListItem>\n        ))}\n      </ImageList>\n    </div>\n  );\n}\n"},2668:function(e,t,a){"use strict";a.r(t);var n=a(1257),i=a(1225),s=a(1218),r=a(220),o=a(664),c=a(1),l=Object(o.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return l(),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(c.jsxs)(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/image-list",target:"_blank",role:"button",children:[Object(c.jsx)(s.a,{children:"link"}),Object(c.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(c.jsx)(r.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Image list"}),Object(c.jsx)(r.a,{className:"description",children:"Image lists display a collection of images in an organized image."}),Object(c.jsx)(r.a,{className:"mb-16",component:"div",children:"Image lists represent a collection of items in a repeated pattern. They help improve the visual comprehension of the content they hold."}),Object(c.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Basic image list"}),Object(c.jsxs)(r.a,{className:"mb-16",component:"div",children:["A simple example of a scrollable image ",Object(c.jsx)("code",{children:"ImageList"}),"."]}),Object(c.jsx)(r.a,{className:"mb-16",component:"div",children:Object(c.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2108).default,raw:a(2111)})}),Object(c.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Image list with titlebars"}),Object(c.jsxs)(r.a,{className:"mb-16",component:"div",children:["This example demonstrates the use of the ",Object(c.jsx)("code",{children:"ImageListItemBar"})," to add an overlay to each ",Object(c.jsx)("code",{children:"ImageListItem"}),". The overlay can accommodate a ",Object(c.jsx)("code",{children:"title"}),","," ",Object(c.jsx)("code",{children:"subtitle"})," and secondary action - in this example an ",Object(c.jsx)("code",{children:"IconButton"}),"."]}),Object(c.jsx)(r.a,{className:"mb-16",component:"div",children:Object(c.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2112).default,raw:a(2115)})}),Object(c.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Single line image list"}),Object(c.jsx)(r.a,{className:"mb-16",component:"div",children:"This example demonstrates a horizontal scrollable single-line image list of images. Horizontally scrolling image lists are discouraged because the scrolling interferes with typical reading patterns, affecting comprehension. One notable exception is a horizontally-scrolling, single-line image list of images, such as a gallery."}),Object(c.jsx)(r.a,{className:"mb-16",component:"div",children:Object(c.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2116).default,raw:a(2117)})}),Object(c.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Advanced image list"}),Object(c.jsxs)(r.a,{className:"mb-16",component:"div",children:['This example demonstrates "featured" items, using the ',Object(c.jsx)("code",{children:"rows"})," and"," ",Object(c.jsx)("code",{children:"cols"})," props to adjust the size of the item, and the ",Object(c.jsx)("code",{children:"gap"})," prop to adjust the spacing. The items have a customized titlebar, positioned at the top, and with a custom gradient ",Object(c.jsx)("code",{children:"titleBackground"}),". The secondary action ",Object(c.jsx)("code",{children:"IconButton"})," ","is positioned on the left."]}),Object(c.jsx)(r.a,{className:"mb-16",component:"div",children:Object(c.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2118).default,raw:a(2119)})})]})}}}]);