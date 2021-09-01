(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[161],{2613:function(e,t,c){"use strict";c.r(t);var a=c(138),s=c(220),n=c(35),i=c(1);t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.a,{variant:"h4",className:"mb-24",children:"Auth0 Authentication Service Example"}),Object(i.jsx)(s.a,{className:"mb-16",component:"p",children:"With Auth0 Authentication in Fuse React."}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{className:"mb-12",children:["You can ",Object(i.jsx)(n.a,{to:"/register",children:"register"}),"."]}),Object(i.jsxs)("li",{className:"mb-12",children:["You can ",Object(i.jsx)(n.a,{to:"/login",children:"log in"}),"."]}),Object(i.jsx)("li",{className:"mb-12",children:"Also saves user data (user shortcuts, layout, and theme settings) as user_metadata to Auth0 Database."})]}),Object(i.jsxs)(s.a,{className:"mt-32 mb-16",component:"p",children:["Related Service folder is located at ",Object(i.jsx)("code",{children:"/src/auth0Service"})]}),Object(i.jsxs)(s.a,{className:"my-24 italic",component:"p",color:"textSecondary",children:["Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in",Object(i.jsx)("code",{children:"src/app/App.js"}),". The service initializes in the Auth component."]}),Object(i.jsx)(s.a,{className:"mt-32 mb-8",variant:"h5",children:"Configuration"}),Object(i.jsxs)(s.a,{className:"mb-16",component:"p",children:["You need to paste the configuration of your Auth0 Project into",Object(i.jsx)("code",{children:"src/app/services/auth0Service/auth0ServiceConfig.js"})]}),Object(i.jsx)(a.a,{component:"pre",className:"language-jsx my-16",children:'\n                               export const AUTH_CONFIG = {\n                                    domain     : "YOUR_DOMAIN",\n                                    clientId   : "YOUR_CLIENT_ID",\n                                    callbackUrl: "YOUR_DOMAIN/callback"\n                               };\n                            '})]})}}}]);