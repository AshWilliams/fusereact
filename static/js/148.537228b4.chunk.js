(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[148],{1448:function(e,t,n){"use strict";n.r(t),t.default="import '@fake-db';\nimport FuseAuthorization from '@fuse/core/FuseAuthorization';\nimport FuseLayout from '@fuse/core/FuseLayout';\nimport FuseTheme from '@fuse/core/FuseTheme';\nimport history from '@history';\nimport { Router } from 'react-router-dom';\nimport { SnackbarProvider } from 'notistack';\nimport { Auth } from './auth';\nimport withAppProviders from './withAppProviders';\n// import axios from 'axios';\n\n/**\n * Axios HTTP Request defaults\n */\n// axios.defaults.baseURL = \"\";\n// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';\n// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';\n\nconst App = () => {\n  return (\n    <Auth>\n      <Router history={history}>\n        <FuseAuthorization>\n          <FuseTheme>\n            <SnackbarProvider\n              maxSnack={5}\n              anchorOrigin={{\n                vertical: 'bottom',\n                horizontal: 'right',\n              }}\n              classes={{\n                containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',\n              }}\n            >\n              <FuseLayout />\n            </SnackbarProvider>\n          </FuseTheme>\n        </FuseAuthorization>\n      </Router>\n    </Auth>\n  );\n};\n\nexport default withAppProviders(App)();\n"},2622:function(e,t,n){"use strict";n.r(t);var o=n(138),r=n(220),s=n(35),a=n(1);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{variant:"h4",className:"mb-24",children:"FuseTheme"}),Object(a.jsxs)(r.a,{className:"mb-16",component:"p",children:[Object(a.jsx)("code",{children:"FuseTheme"})," is the theming component of the Fuse React. It allows us to change predefined Material UI themes. It should wrap the ",Object(a.jsx)("code",{children:"FuseLayout"})," component."]}),Object(a.jsx)(r.a,{className:"mb-16",component:"p",children:Object(a.jsx)("code",{children:"src/app/App.js"})}),Object(a.jsx)(o.a,{component:"pre",className:"language-jsx",children:n(1448)}),Object(a.jsx)(r.a,{className:"mt-32 mb-8",variant:"h5",children:"Configuration"}),Object(a.jsxs)(r.a,{className:"mb-16",component:"p",children:["Please checkout",Object(a.jsx)(s.a,{className:"font-normal mx-4",to:"/documentation/theming/theme-schemes",children:"theming"}),"at documentation."]})]})}}}]);