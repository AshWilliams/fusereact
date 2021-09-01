(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[154],{1289:function(e,a,t){"use strict";var n=t(2),o=t(8),r=t(0),c=(t(9),t(3)),i=t(260),s=t(102),l=Object(s.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=t(37),u=Object(s.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(16),b=t(11),j=r.createElement(d,null),f=r.createElement(l,null),h=r.createElement(u,null),x=r.forwardRef((function(e,a){var t=e.checkedIcon,s=void 0===t?j:t,l=e.classes,d=e.color,m=void 0===d?"secondary":d,u=e.icon,b=void 0===u?f:u,x=e.indeterminate,v=void 0!==x&&x,O=e.indeterminateIcon,y=void 0===O?h:O,w=e.inputProps,g=e.size,C=void 0===g?"medium":g,k=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=v?y:b,z=v?y:s;return r.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(c.a)(l.root,l["color".concat(Object(p.a)(m))],v&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":v},w),icon:r.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===C?C:N.props.fontSize}),checkedIcon:r.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===C?C:z.props.fontSize}),ref:a},k))}));a.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(x)},2735:function(e,a,t){"use strict";t.r(a);var n=t(6),o=t(1245),r=t(40),c=t(153),i=t(1225),s=t(1236),l=t(1243),d=t(1289),m=t(1168),u=t(1222),p=t(1172),b=t(664),j=t(1224),f=t(220),h=t(3),x=t(35),v=t(70),O=t(12),y=t(1),w=Object(b.a)((function(e){return{root:{}}})),g=v.d().shape({name:v.f().required("You must enter your name"),email:v.f().email("You must enter a valid email").required("You must enter a email"),password:v.f().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:v.f().oneOf([v.e("password"),null],"Passwords must match"),acceptTermsConditions:v.c().oneOf([!0],"The terms and conditions must be accepted.")}),C={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};a.default=function(){var e=w(),a=Object(r.f)({mode:"onChange",defaultValues:C,resolver:Object(c.a)(g)}),t=a.control,b=a.formState,v=a.handleSubmit,k=a.reset,N=b.isValid,z=b.dirtyFields,E=b.errors;return Object(y.jsxs)("div",{className:Object(h.a)(e.root,"flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden"),children:[Object(y.jsxs)("div",{className:"flex flex-col flex-grow-0 items-center  p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left",children:[Object(y.jsx)(o.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1,transition:{delay:.1}},children:Object(y.jsx)("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),Object(y.jsx)(o.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:Object(y.jsxs)(f.a,{className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",Object(y.jsx)("br",{}),"to the ",Object(y.jsx)("br",{})," FUSE React!"]})}),Object(y.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(y.jsx)(f.a,{variant:"subtitle1",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]}),Object(y.jsx)(s.a,{component:o.a.div,initial:{x:200},animate:{x:0},transition:{bounceDamping:0},className:"w-full max-w-400 mx-auto m-16 md:m-0 rounded-20 md:rounded-none",square:!0,layout:!0,children:Object(y.jsxs)(l.a,{className:"flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 ",children:[Object(y.jsx)(f.a,{variant:"h6",className:"mb-24 font-semibold text-18 sm:text-24",children:"Create an account"}),Object(y.jsxs)("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:v((function(){k(C)})),children:[Object(y.jsx)(r.a,{name:"name",control:t,render:function(e){var a,t=e.field;return Object(y.jsx)(j.a,Object(n.a)(Object(n.a)({},t),{},{className:"mb-16",label:"Name",autoFocus:!0,type:"name",error:!!E.name,helperText:null===E||void 0===E||null===(a=E.name)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(y.jsx)(r.a,{name:"email",control:t,render:function(e){var a,t=e.field;return Object(y.jsx)(j.a,Object(n.a)(Object(n.a)({},t),{},{className:"mb-16",label:"Email",type:"email",error:!!E.email,helperText:null===E||void 0===E||null===(a=E.email)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(y.jsx)(r.a,{name:"password",control:t,render:function(e){var a,t=e.field;return Object(y.jsx)(j.a,Object(n.a)(Object(n.a)({},t),{},{className:"mb-16",label:"Password",type:"password",error:!!E.password,helperText:null===E||void 0===E||null===(a=E.password)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(y.jsx)(r.a,{name:"passwordConfirm",control:t,render:function(e){var a,t=e.field;return Object(y.jsx)(j.a,Object(n.a)(Object(n.a)({},t),{},{className:"mb-16",label:"Password (Confirm)",type:"password",error:!!E.passwordConfirm,helperText:null===E||void 0===E||null===(a=E.passwordConfirm)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(y.jsx)(r.a,{name:"acceptTermsConditions",control:t,render:function(e){var a,t=e.field;return Object(y.jsxs)(m.a,{className:"items-center",error:!!E.acceptTermsConditions,children:[Object(y.jsx)(u.a,{label:"I read and accept terms and conditions",control:Object(y.jsx)(d.a,Object(n.a)({},t))}),Object(y.jsx)(p.a,{children:null===E||void 0===E||null===(a=E.acceptTermsConditions)||void 0===a?void 0:a.message})]})}}),Object(y.jsx)(i.a,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"Register",disabled:O.a.isEmpty(z)||!N,type:"submit",children:"Create an account"})]}),Object(y.jsxs)("div",{className:"flex flex-col items-center justify-center pt-32 pb-24",children:[Object(y.jsx)("span",{className:"font-normal",children:"Already have an account?"}),Object(y.jsx)(x.a,{className:"font-normal",to:"/pages/auth/login-2",children:"Login"})]})]})})]})}}}]);