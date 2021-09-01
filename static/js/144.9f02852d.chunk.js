(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[144],{1488:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t(19),c=t(220),n=t(3),l=t(647),i=t.n(l),r=t(0),o=t(1);function d(e){var a=e.onComplete,t=Object(r.useState)(i.a.isMoment(e.endDate)?e.endDate:i()(e.endDate)),l=Object(s.a)(t,1)[0],d=Object(r.useState)({days:0,hours:0,minutes:0,seconds:0}),u=Object(s.a)(d,2),m=u[0],j=u[1],b=Object(r.useRef)(),f=Object(r.useCallback)((function(){window.clearInterval(b.current),a&&a()}),[a]),x=Object(r.useCallback)((function(){var e=i()(),a=l.diff(e,"seconds");if(a<0)f();else{var t=i.a.duration(a,"seconds");j({days:t.asDays().toFixed(0),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()})}}),[f,l]);return Object(r.useEffect)((function(){return b.current=setInterval(x,1e3),function(){clearInterval(b.current)}}),[x]),Object(o.jsxs)("div",{className:Object(n.a)("flex items-center",e.className),children:[Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.days}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"days"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.hours}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"hours"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.minutes}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"minutes"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.seconds}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"seconds"})]})]})}d.defaultProps={endDate:i()().add(15,"days")};var u=Object(r.memo)(d)},2740:function(e,a,t){"use strict";t.r(a);var s=t(6),c=t(1488),n=t(1245),l=t(40),i=t(153),r=t(1225),o=t(1236),d=t(1243),u=t(1235),m=t(664),j=t(1224),b=t(220),f=t(3),x=t(70),h=t(12),O=t(1),y=Object(m.a)((function(e){return{root:{}}})),p=x.d().shape({email:x.f().email("You must enter a valid email").required("You must enter a email")}),v={email:""};a.default=function(){var e=y(),a=Object(l.f)({mode:"onChange",defaultValues:v,resolver:Object(i.a)(p)}),t=a.control,m=a.formState,x=a.handleSubmit,N=a.reset,w=m.isValid,S=m.dirtyFields,g=m.errors;return Object(O.jsx)("div",{className:Object(f.a)(e.root,"flex flex-col flex-auto items-center justify-center p-16 sm:p-32"),children:Object(O.jsx)("div",{className:"flex flex-col items-center justify-center w-full",children:Object(O.jsx)(n.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},children:Object(O.jsx)(o.a,{className:"w-full max-w-384",children:Object(O.jsxs)(d.a,{className:"flex flex-col items-center justify-center p-16 sm:p-32 text-center",children:[Object(O.jsx)("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(O.jsx)(b.a,{variant:"subtitle1",className:"mb-16 font-semibold",children:"Hey! Thank you for checking out our app."}),Object(O.jsx)(b.a,{color:"textSecondary",className:"max-w-288",children:"It\u2019s not quite ready yet, but we are working hard and it will be ready in approximately:"}),Object(O.jsx)(c.a,{endDate:"2023-07-28",className:"my-48"}),Object(O.jsx)(u.a,{className:"w-48"}),Object(O.jsx)(b.a,{className:"font-semibold my-32 w-full",children:"If you would like to be notified when the app is ready, you can subscribe to our e-mail list."}),Object(O.jsxs)("form",{name:"subscribeForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:x((function(){N(v)})),children:[Object(O.jsx)(l.a,{name:"email",control:t,render:function(e){var a,t=e.field;return Object(O.jsx)(j.a,Object(s.a)(Object(s.a)({},t),{},{className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!g.email,helperText:null===g||void 0===g||null===(a=g.email)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(O.jsx)(r.a,{variant:"contained",color:"secondary",className:"w-224 mx-auto my-16","aria-label":"Subscribe",disabled:h.a.isEmpty(S)||!w,type:"submit",children:"Subscribe"})]})]})})})})})}}}]);