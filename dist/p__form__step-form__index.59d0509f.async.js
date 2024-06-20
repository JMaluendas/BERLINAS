"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2736],{93696:function(se,A){var n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};A.Z=n},31199:function(se,A,n){var r=n(1413),S=n(91),$=n(67294),F=n(47560),Y=n(85893),z=["fieldProps","min","proFieldProps","max"],J=function(P,W){var q=P.fieldProps,j=P.min,w=P.proFieldProps,E=P.max,h=(0,S.Z)(P,z);return(0,Y.jsx)(F.Z,(0,r.Z)({valueType:"digit",fieldProps:(0,r.Z)({min:j,max:E},q),ref:W,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:w},h))},U=$.forwardRef(J);A.Z=U},64317:function(se,A,n){var r=n(1413),S=n(91),$=n(22270),F=n(67294),Y=n(66758),z=n(47560),J=n(85893),U=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Q=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],P=function(h,K){var k=h.fieldProps,v=h.children,u=h.params,M=h.proFieldProps,C=h.mode,H=h.valueEnum,l=h.request,Z=h.showSearch,R=h.options,V=(0,S.Z)(h,U),b=(0,F.useContext)(Y.Z);return(0,J.jsx)(z.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,$.h)(H),request:l,params:u,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:R,mode:C,showSearch:Z,getPopupContainer:b.getPopupContainer},k),ref:K,proFieldProps:M},V),{},{children:v}))},W=F.forwardRef(function(E,h){var K=E.fieldProps,k=E.children,v=E.params,u=E.proFieldProps,M=E.mode,C=E.valueEnum,H=E.request,l=E.options,Z=(0,S.Z)(E,Q),R=(0,r.Z)({options:l,mode:M||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},K),V=(0,F.useContext)(Y.Z);return(0,J.jsx)(z.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,$.h)(C),request:H,params:v,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:V.getPopupContainer},R),ref:h,proFieldProps:u},Z),{},{children:k}))}),q=F.forwardRef(P),j=W,w=q;w.SearchSelect=j,w.displayName="ProFormComponent",A.Z=w},5966:function(se,A,n){var r=n(97685),S=n(1413),$=n(91),F=n(21770),Y=n(8232),z=n(55241),J=n(97435),U=n(67294),Q=n(47560),P=n(85893),W=["fieldProps","proFieldProps"],q=["fieldProps","proFieldProps"],j="text",w=function(v){var u=v.fieldProps,M=v.proFieldProps,C=(0,$.Z)(v,W);return(0,P.jsx)(Q.Z,(0,S.Z)({valueType:j,fieldProps:u,filedConfig:{valueType:j},proFieldProps:M},C))},E=function(v){var u=(0,F.Z)(v.open||!1,{value:v.open,onChange:v.onOpenChange}),M=(0,r.Z)(u,2),C=M[0],H=M[1];return(0,P.jsx)(Y.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(Z){var R,V=Z.getFieldValue(v.name||[]);return(0,P.jsx)(z.Z,(0,S.Z)((0,S.Z)({getPopupContainer:function(s){return s&&s.parentNode?s.parentNode:s},onOpenChange:function(s){return H(s)},content:(0,P.jsxs)("div",{style:{padding:"4px 0"},children:[(R=v.statusRender)===null||R===void 0?void 0:R.call(v,V),v.strengthText?(0,P.jsx)("div",{style:{marginTop:10},children:(0,P.jsx)("span",{children:v.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},v.popoverProps),{},{open:C,children:v.children}))}})},h=function(v){var u=v.fieldProps,M=v.proFieldProps,C=(0,$.Z)(v,q),H=(0,U.useState)(!1),l=(0,r.Z)(H,2),Z=l[0],R=l[1];return u!=null&&u.statusRender&&C.name?(0,P.jsx)(E,{name:C.name,statusRender:u==null?void 0:u.statusRender,popoverProps:u==null?void 0:u.popoverProps,strengthText:u==null?void 0:u.strengthText,open:Z,onOpenChange:R,children:(0,P.jsx)("div",{children:(0,P.jsx)(Q.Z,(0,S.Z)({valueType:"password",fieldProps:(0,S.Z)((0,S.Z)({},(0,J.Z)(u,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(b){var s;u==null||(s=u.onBlur)===null||s===void 0||s.call(u,b),R(!1)},onClick:function(b){var s;u==null||(s=u.onClick)===null||s===void 0||s.call(u,b),R(!0)}}),proFieldProps:M,filedConfig:{valueType:j}},C))})}):(0,P.jsx)(Q.Z,(0,S.Z)({valueType:"password",fieldProps:u,proFieldProps:M,filedConfig:{valueType:j}},C))},K=w;K.Password=h,K.displayName="ProFormComponent",A.Z=K},14247:function(se,A,n){n.r(A),n.d(A,{default:function(){return b}});var r=n(15009),S=n.n(r),$=n(99289),F=n.n($),Y=n(5574),z=n.n(Y),J=n(45629),U=n(38020),Q=n(64317),P=n(34994),W=n(5966),q=n(31199),j=n(26412),w=n(55054),E=n(29905),h=n(14726),K=n(4393),k=n(38925),v=n(96074),u=n(67294),M=n(98257),C=(0,M.kc)(function(){return{card:{marginBottom:"24px"},result:{maxWidth:"560px",margin:"0 auto",padding:"24px 0 8px"}}}),H=C,l=n(85893),Z=function(d){var m=d.stepData,i=d.bordered,p=m.payAccount,O=m.receiverAccount,D=m.receiverName,x=m.amount;return(0,l.jsxs)(j.Z,{column:1,bordered:i,children:[(0,l.jsxs)(j.Z.Item,{label:"Cuenta de pago",children:[" ",p]}),(0,l.jsxs)(j.Z.Item,{label:"Cuentas por cobrar",children:[" ",O]}),(0,l.jsxs)(j.Z.Item,{label:"Nombre del beneficiario",children:[" ",D]}),(0,l.jsx)(j.Z.Item,{label:"Monto de la transferencia",children:(0,l.jsx)(w.Z,{value:x,suffix:(0,l.jsx)("span",{style:{fontSize:14},children:"Yuan"}),precision:2})})]})},R=function(d){var m=H(),i=m.styles;return(0,l.jsx)(E.ZP,{status:"success",title:"Operaci\xF3n exitosa",subTitle:"Se espera que llegue dentro de dos horas.",extra:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.ZP,{type:"primary",onClick:d.onFinish,children:"Transferir otra cantidad"}),(0,l.jsx)(h.ZP,{children:"Ver factura"})]}),className:i.result,children:d.children})},V=function(){var d=H(),m=d.styles,i=(0,u.useState)({payAccount:"jmaluendas@berlinasdelfonce.com",receiverAccount:"peti@berlinasdelfonce.com",receiverName:"Juan",amount:"500",receiverMode:"Efecty"}),p=z()(i,2),O=p[0],D=p[1],x=(0,u.useState)(0),y=z()(x,2),L=y[0],e=y[1],t=(0,u.useRef)();return(0,l.jsx)(J._z,{content:"Divida una tarea larga o desconocida en varios pasos y gu\xEDe a los usuarios a trav\xE9s de ella.",children:(0,l.jsxs)(K.Z,{bordered:!1,children:[(0,l.jsxs)(U.L0,{current:L,onCurrentChange:e,submitter:{render:function(a,c){return a.step===2?null:c}},children:[(0,l.jsxs)(U.L0.StepForm,{formRef:t,title:"Complete la informaci\xF3n de transferencia",initialValues:O,onFinish:function(){var o=F()(S()().mark(function a(c){return S()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return D(c),f.abrupt("return",!0);case 2:case"end":return f.stop()}},a)}));return function(a){return o.apply(this,arguments)}}(),children:[(0,l.jsx)(Q.Z,{label:"Cuenta de pago",width:"md",name:"payAccount",rules:[{required:!0,message:"Por favor seleccione cuenta de pago"}],valueEnum:{"jmaluendas@berlinasdelfonce.com":"peti@berlinasdelfonce.com"}}),(0,l.jsxs)(P.A.Group,{title:"Cuentas por cobrar",size:8,children:[(0,l.jsx)(Q.Z,{name:"receiverMode",rules:[{required:!0,message:"Por favor seleccione cuenta de pago"}],valueEnum:{alipay:"Efecty",bank:"Cuenta bancaria"}}),(0,l.jsx)(W.Z,{name:"receiverAccount",rules:[{required:!0,message:"Por favor ingrese la cuenta del beneficiario"},{type:"email",message:"El nombre de la cuenta debe estar en formato de correo electr\xF3nico."}],placeholder:"test@example.com"})]}),(0,l.jsx)(W.Z,{label:"Nombre del beneficiario",width:"md",name:"receiverName",rules:[{required:!0,message:"Por favor ingrese el nombre del beneficiario"}],placeholder:"Nombre del beneficiario"}),(0,l.jsx)(q.Z,{label:"Monto de la transferencia",name:"amount",width:"md",rules:[{required:!0,message:"Por favor ingrese el monto de la transferencia"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"Por favor ingrese un n\xFAmero de monto legal"}],placeholder:"Cantidad",fieldProps:{prefix:"$"}})]}),(0,l.jsx)(U.L0.StepForm,{title:"Confirmar informaci\xF3n de transferencia",children:(0,l.jsxs)("div",{className:m.result,children:[(0,l.jsx)(k.Z,{closable:!0,showIcon:!0,message:"Una vez confirmada la transferencia, los fondos se acreditar\xE1n directamente en la cuenta de la otra parte y no se podr\xE1n devolver.",style:{marginBottom:24}}),(0,l.jsx)(Z,{stepData:O,bordered:!0}),(0,l.jsx)(v.Z,{style:{margin:"24px 0"}}),(0,l.jsx)(W.Z.Password,{label:"Contrase\xF1a de pago",width:"md",name:"password",required:!1,rules:[{required:!0,message:"Se requiere una contrase\xF1a de pago para realizar el pago."}]})]})}),(0,l.jsx)(U.L0.StepForm,{title:"Finalizar",children:(0,l.jsx)(R,{onFinish:F()(S()().mark(function o(){var a;return S()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:e(0),(a=t.current)===null||a===void 0||a.resetFields();case 2:case"end":return g.stop()}},o)})),children:(0,l.jsx)(Z,{stepData:O})})})]}),(0,l.jsx)(v.Z,{style:{margin:"40px 0 24px"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Ilustrar"}),(0,l.jsx)("h4",{children:"Transferir a cuenta Alipay"}),(0,l.jsx)("p",{children:"Si es necesario, puede incluir aqu\xED algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aqu\xED algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aqu\xED algunas preguntas frecuentes sobre el producto."}),(0,l.jsx)("h4",{children:"Transferencia a tarjeta bancaria"}),(0,l.jsx)("p",{children:"Si es necesario, puede incluir aqu\xED algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aqu\xED algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aqu\xED algunas preguntas frecuentes sobre el producto."})]})]})})},b=V},26412:function(se,A,n){n.d(A,{Z:function(){return L}});var r=n(67294),S=n(93967),$=n.n(S),F=n(74443),Y=n(53124),z=n(98675),J=n(25378),Q={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},W=r.createContext({}),q=n(50344),j=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(o[a[c]]=e[a[c]]);return o};const w=e=>(0,q.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function E(e,t,o){const a=r.useMemo(()=>t||w(o),[t,o]);return r.useMemo(()=>a.map(g=>{var{span:f}=g,G=j(g,["span"]);return Object.assign(Object.assign({},G),{span:typeof f=="number"?f:(0,F.m9)(e,f)})}),[a,e])}function h(e,t,o){let a=e,c=!1;return(o===void 0||o>t)&&(a=Object.assign(Object.assign({},e),{span:t}),c=o!==void 0),[a,c]}function K(e,t){const o=[];let a=[],c=t,g=!1;return e.filter(f=>f).forEach((f,G)=>{const ee=f==null?void 0:f.span,B=ee||1;if(G===e.length-1){const[N,T]=h(f,c,ee);g=g||T,a.push(N),o.push(a);return}if(B<c)c-=B,a.push(f);else{const[N,T]=h(f,c,B);g=g||T,a.push(N),o.push(a),c=t,a=[]}}),[o,g]}var v=(e,t)=>{const[o,a]=(0,r.useMemo)(()=>K(t,e),[t,e]);return o},M=e=>{let{children:t}=e;return t};function C(e){return e!=null}var l=e=>{const{itemPrefixCls:t,component:o,span:a,className:c,style:g,labelStyle:f,contentStyle:G,bordered:ee,label:B,content:N,colon:T,type:I}=e,_=o;return ee?r.createElement(_,{className:$()({[`${t}-item-label`]:I==="label",[`${t}-item-content`]:I==="content"},c),style:g,colSpan:a},C(B)&&r.createElement("span",{style:f},B),C(N)&&r.createElement("span",{style:G},N)):r.createElement(_,{className:$()(`${t}-item`,c),style:g,colSpan:a},r.createElement("div",{className:`${t}-item-container`},(B||B===0)&&r.createElement("span",{className:$()(`${t}-item-label`,{[`${t}-item-no-colon`]:!T}),style:f},B),(N||N===0)&&r.createElement("span",{className:$()(`${t}-item-content`),style:G},N)))};function Z(e,t,o){let{colon:a,prefixCls:c,bordered:g}=t,{component:f,type:G,showLabel:ee,showContent:B,labelStyle:N,contentStyle:T}=o;return e.map((I,_)=>{let{label:re,children:le,prefixCls:ne=c,className:ae,style:oe,labelStyle:te,contentStyle:X,span:ie=1,key:ce}=I;return typeof f=="string"?r.createElement(l,{key:`${G}-${ce||_}`,className:ae,style:oe,labelStyle:Object.assign(Object.assign({},N),te),contentStyle:Object.assign(Object.assign({},T),X),span:ie,colon:a,component:f,itemPrefixCls:ne,bordered:g,label:ee?re:null,content:B?le:null,type:G}):[r.createElement(l,{key:`label-${ce||_}`,className:ae,style:Object.assign(Object.assign(Object.assign({},N),oe),te),span:1,colon:a,component:f[0],itemPrefixCls:ne,bordered:g,label:re,type:"label"}),r.createElement(l,{key:`content-${ce||_}`,className:ae,style:Object.assign(Object.assign(Object.assign({},T),oe),X),span:ie*2-1,component:f[1],itemPrefixCls:ne,bordered:g,content:le,type:"content"})]})}var V=e=>{const t=r.useContext(W),{prefixCls:o,vertical:a,row:c,index:g,bordered:f}=e;return a?r.createElement(r.Fragment,null,r.createElement("tr",{key:`label-${g}`,className:`${o}-row`},Z(c,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:`content-${g}`,className:`${o}-row`},Z(c,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:g,className:`${o}-row`},Z(c,e,Object.assign({component:f?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},b=n(54548),s=n(14747),d=n(56023),m=n(45503);const i=e=>{const{componentCls:t,labelBg:o}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,b.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,b.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,b.bf)(e.padding)} ${(0,b.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,b.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:o,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,b.bf)(e.paddingSM)} ${(0,b.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,b.bf)(e.paddingXS)} ${(0,b.bf)(e.padding)}`}}}}}},p=e=>{const{componentCls:t,extraColor:o,itemPaddingBottom:a,colonMarginRight:c,colonMarginLeft:g,titleMarginBottom:f}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,s.Wf)(e)),i(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:f},[`${t}-title`]:Object.assign(Object.assign({},s.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:o,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:a},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,b.bf)(g)} ${(0,b.bf)(c)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},O=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var D=(0,d.I$)("Descriptions",e=>{const t=(0,m.TS)(e,{});return p(t)},O),x=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(o[a[c]]=e[a[c]]);return o};const y=e=>{const{prefixCls:t,title:o,extra:a,column:c,colon:g=!0,bordered:f,layout:G,children:ee,className:B,rootClassName:N,style:T,size:I,labelStyle:_,contentStyle:re,items:le}=e,ne=x(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:ae,direction:oe,descriptions:te}=r.useContext(Y.E_),X=ae("descriptions",t),ie=(0,J.Z)(),ce=r.useMemo(()=>{var de;return typeof c=="number"?c:(de=(0,F.m9)(ie,Object.assign(Object.assign({},Q),c)))!==null&&de!==void 0?de:3},[ie,c]),pe=E(ie,le,ee),ue=(0,z.Z)(I),fe=v(ce,pe),[ve,ge,xe]=D(X),he=r.useMemo(()=>({labelStyle:_,contentStyle:re}),[_,re]);return ve(r.createElement(W.Provider,{value:he},r.createElement("div",Object.assign({className:$()(X,te==null?void 0:te.className,{[`${X}-${ue}`]:ue&&ue!=="default",[`${X}-bordered`]:!!f,[`${X}-rtl`]:oe==="rtl"},B,N,ge,xe),style:Object.assign(Object.assign({},te==null?void 0:te.style),T)},ne),(o||a)&&r.createElement("div",{className:`${X}-header`},o&&r.createElement("div",{className:`${X}-title`},o),a&&r.createElement("div",{className:`${X}-extra`},a)),r.createElement("div",{className:`${X}-view`},r.createElement("table",null,r.createElement("tbody",null,fe.map((de,me)=>r.createElement(V,{key:me,index:me,colon:g,prefixCls:X,vertical:G==="vertical",bordered:f,row:de}))))))))};y.Item=M;var L=y},55054:function(se,A,n){n.d(A,{Z:function(){return b}});var r=n(67294),S=n(57838),$=n(96159),F=n(93967),Y=n.n(F),z=n(64217),J=n(53124),U=n(99559),P=s=>{const{value:d,formatter:m,precision:i,decimalSeparator:p,groupSeparator:O="",prefixCls:D}=s;let x;if(typeof m=="function")x=m(d);else{const y=String(d),L=y.match(/^(-?)(\d*)(\.(\d+))?$/);if(!L||y==="-")x=y;else{const e=L[1];let t=L[2]||"0",o=L[4]||"";t=t.replace(/\B(?=(\d{3})+(?!\d))/g,O),typeof i=="number"&&(o=o.padEnd(i,"0").slice(0,i>0?i:0)),o&&(o=`${p}${o}`),x=[r.createElement("span",{key:"int",className:`${D}-content-value-int`},e,t),o&&r.createElement("span",{key:"decimal",className:`${D}-content-value-decimal`},o)]}}return r.createElement("span",{className:`${D}-content-value`},x)},W=n(14747),q=n(56023),j=n(45503);const w=s=>{const{componentCls:d,marginXXS:m,padding:i,colorTextDescription:p,titleFontSize:O,colorTextHeading:D,contentFontSize:x,fontFamily:y}=s;return{[`${d}`]:Object.assign(Object.assign({},(0,W.Wf)(s)),{[`${d}-title`]:{marginBottom:m,color:p,fontSize:O},[`${d}-skeleton`]:{paddingTop:i},[`${d}-content`]:{color:D,fontSize:x,fontFamily:y,[`${d}-content-value`]:{display:"inline-block",direction:"ltr"},[`${d}-content-prefix, ${d}-content-suffix`]:{display:"inline-block"},[`${d}-content-prefix`]:{marginInlineEnd:m},[`${d}-content-suffix`]:{marginInlineStart:m}}})}},E=s=>{const{fontSizeHeading3:d,fontSize:m}=s;return{titleFontSize:m,contentFontSize:d}};var h=(0,q.I$)("Statistic",s=>{const d=(0,j.TS)(s,{});return[w(d)]},E),K=function(s,d){var m={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&d.indexOf(i)<0&&(m[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,i=Object.getOwnPropertySymbols(s);p<i.length;p++)d.indexOf(i[p])<0&&Object.prototype.propertyIsEnumerable.call(s,i[p])&&(m[i[p]]=s[i[p]]);return m},v=s=>{const{prefixCls:d,className:m,rootClassName:i,style:p,valueStyle:O,value:D=0,title:x,valueRender:y,prefix:L,suffix:e,loading:t=!1,formatter:o,precision:a,decimalSeparator:c=".",groupSeparator:g=",",onMouseEnter:f,onMouseLeave:G}=s,ee=K(s,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:B,direction:N,statistic:T}=r.useContext(J.E_),I=B("statistic",d),[_,re,le]=h(I),ne=r.createElement(P,{decimalSeparator:c,groupSeparator:g,prefixCls:I,formatter:o,precision:a,value:D}),ae=Y()(I,{[`${I}-rtl`]:N==="rtl"},T==null?void 0:T.className,m,i,re,le),oe=(0,z.Z)(ee,{aria:!0,data:!0});return _(r.createElement("div",Object.assign({},oe,{className:ae,style:Object.assign(Object.assign({},T==null?void 0:T.style),p),onMouseEnter:f,onMouseLeave:G}),x&&r.createElement("div",{className:`${I}-title`},x),r.createElement(U.Z,{paragraph:!1,loading:t,className:`${I}-skeleton`},r.createElement("div",{style:O,className:`${I}-content`},L&&r.createElement("span",{className:`${I}-content-prefix`},L),y?y(ne):ne,e&&r.createElement("span",{className:`${I}-content-suffix`},e)))))};const u=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function M(s,d){let m=s;const i=/\[[^\]]*]/g,p=(d.match(i)||[]).map(y=>y.slice(1,-1)),O=d.replace(i,"[]"),D=u.reduce((y,L)=>{let[e,t]=L;if(y.includes(e)){const o=Math.floor(m/t);return m-=o*t,y.replace(new RegExp(`${e}+`,"g"),a=>{const c=a.length;return o.toString().padStart(c,"0")})}return y},O);let x=0;return D.replace(i,()=>{const y=p[x];return x+=1,y})}function C(s,d){const{format:m=""}=d,i=new Date(s).getTime(),p=Date.now(),O=Math.max(i-p,0);return M(O,m)}var H=function(s,d){var m={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&d.indexOf(i)<0&&(m[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,i=Object.getOwnPropertySymbols(s);p<i.length;p++)d.indexOf(i[p])<0&&Object.prototype.propertyIsEnumerable.call(s,i[p])&&(m[i[p]]=s[i[p]]);return m};const l=1e3/30;function Z(s){return new Date(s).getTime()}const R=s=>{const{value:d,format:m="HH:mm:ss",onChange:i,onFinish:p}=s,O=H(s,["value","format","onChange","onFinish"]),D=(0,S.Z)(),x=r.useRef(null),y=()=>{p==null||p(),x.current&&(clearInterval(x.current),x.current=null)},L=()=>{const o=Z(d);o>=Date.now()&&(x.current=setInterval(()=>{D(),i==null||i(o-Date.now()),o<Date.now()&&y()},l))};r.useEffect(()=>(L(),()=>{x.current&&(clearInterval(x.current),x.current=null)}),[d]);const e=(o,a)=>C(o,Object.assign(Object.assign({},a),{format:m})),t=o=>(0,$.Tm)(o,{title:void 0});return r.createElement(v,Object.assign({},O,{value:d,valueRender:t,formatter:e}))};var V=r.memo(R);v.Countdown=V;var b=v}}]);