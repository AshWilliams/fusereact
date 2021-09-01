(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[167],{2618:function(e,t,a){"use strict";a.r(t);var s=a(220),o=a(138),n=a(1);t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s.a,{variant:"h4",className:"mb-24",children:"API Calls"}),Object(n.jsxs)(s.a,{className:"mb-24",component:"p",children:["We are using HTTP request library"," ",Object(n.jsx)("a",{href:"https://github.com/axios",target:"_blank",rel:"noreferrer noopener",children:"Axios"})," ","for to make API calls."]}),Object(n.jsx)(s.a,{className:"mb-8",variant:"h6",children:"Global Axios defaults"}),Object(n.jsxs)(s.a,{className:"mb-16",component:"p",children:["You can config global axios defaults as below. For example you can define baseUrl for the api connection. Check out for more detils at:"," ",Object(n.jsx)("a",{href:"https://github.com/axios/axios#config-defaults",target:"_blank",rel:"noreferrer noopener",children:"Global axios defaults"})]}),Object(n.jsx)(o.a,{component:"pre",className:"language-js",children:"\n\t\t\t\t\taxios.defaults.baseURL = 'https://api.example.com';\n\t\t\t\t\taxios.defaults.headers.common['Authorization'] = AUTH_TOKEN;\n\t\t\t\t\taxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';\n\t\t\t\t"}),Object(n.jsx)(s.a,{className:"mt-32 mb-8",variant:"h5",children:"@fake-db"}),Object(n.jsxs)(s.a,{className:"mb-16",component:"p",children:["We are using"," ",Object(n.jsx)("a",{href:"https://github.com/ctimmerm/axios-mock-adapter",target:"_blank",rel:"noreferrer noopener",children:"axios-mock-adapter"})," ","to demonstrate http requests, all of the example backend data is located at src/@fake-db."]}),Object(n.jsxs)(s.a,{className:"mb-16",component:"p",children:["You can adjust ",Object(n.jsx)("code",{children:"delayResponse"})," value to test slow networks in the file:"," ",Object(n.jsx)("code",{children:"src/@fake-db/mock.js"}),"."]}),Object(n.jsx)(o.a,{component:"pre",className:"language-js",children:"\n\t\t\t\t\tconst MockAdapter = require('axios-mock-adapter');\n\t\t\t\t\tconst axios = require('axios');\n\t\t\t\t\t\n\t\t\t\t\tconst mock = new MockAdapter(axios, { delayResponse: 500 });\n\t\t\t\t\t\n\t\t\t\t\texport default mock;\n\t\t\t\t"})]})}}}]);