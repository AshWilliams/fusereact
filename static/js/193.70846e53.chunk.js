(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[193],{2729:function(e,a,t){"use strict";t.r(a);var l=t(6),s=t(220),c=t(1245),i=t(40),r=t(153),n=t(1225),o=t(1236),m=t(1243),u=t(664),d=t(1224),f=t(3),j=t(35),b=t(70),x=t(12),p=t(1),h=Object(u.a)((function(e){return{root:{}}})),O=b.d().shape({email:b.f().email("You must enter a valid email").required("You must enter a email")}),v={email:""};a.default=function(){var e=h(),a=Object(i.f)({mode:"onChange",defaultValues:v,resolver:Object(r.a)(O)}),t=a.control,u=a.formState,b=a.handleSubmit,y=a.reset,N=u.isValid,g=u.dirtyFields,w=u.errors;return Object(p.jsx)("div",{className:Object(f.a)(e.root,"flex flex-col flex-auto items-center justify-center p-16 sm:p-32"),children:Object(p.jsx)("div",{className:"flex flex-col items-center justify-center w-full",children:Object(p.jsx)(c.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},children:Object(p.jsx)(o.a,{className:"w-full max-w-384",children:Object(p.jsxs)(m.a,{className:"flex flex-col items-center justify-center p-16 sm:p-24 md:p-32",children:[Object(p.jsx)("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(p.jsx)(s.a,{variant:"h6",className:"mt-16 mb-24 font-semibold text-18 sm:text-24",children:"Recover your password"}),Object(p.jsxs)("form",{name:"recoverForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:b((function(){y(v)})),children:[Object(p.jsx)(i.a,{name:"email",control:t,render:function(e){var a,t=e.field;return Object(p.jsx)(d.a,Object(l.a)(Object(l.a)({},t),{},{className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!w.email,helperText:null===w||void 0===w||null===(a=w.email)||void 0===a?void 0:a.message,variant:"outlined",fullWidth:!0}))}}),Object(p.jsx)(n.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:x.a.isEmpty(g)||!N,type:"submit",children:"Send reset link"})]}),Object(p.jsx)("div",{className:"flex flex-col items-center justify-center pt-32 pb-24",children:Object(p.jsx)(j.a,{className:"font-normal",to:"/pages/auth/login",children:"Go back to login"})})]})})})})})}}}]);