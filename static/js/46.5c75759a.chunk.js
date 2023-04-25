"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{46:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r=e(433),o=e(439),i=e(791),a=e(14),c=e(402),l=e(861),s=e(757),p=e.n(s),u=e(243),f="https://644598130431e885f000cfc6.mockapi.io";function x(){return(x=(0,l.Z)(p().mark((function n(t,e){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(f,"/users?page=").concat(t,"&limit=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return fetch("".concat(f,"/users/").concat(n),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({followers:t})}).then((function(n){if(n.ok)return n.json();throw console.log("error"),new Error(n.statusText)}))}var h,g,b,m,w,y,j,k,Z=e(689),v=e(168),S=e(444),C=e(87),P=(0,S.ZP)(C.rU)(h||(h=(0,v.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: #373737;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n"]))),L=e(185),z=e(184),A=function(n){var t=n.to,e=n.children;return(0,z.jsxs)(P,{to:t,children:[(0,z.jsx)(L.i1r,{}),e]})},U=S.ZP.li(g||(g=(0,v.Z)(["\n  width: 380px;\n  height: 460px;\n  background: linear-gradient(\n      114.99deg,\n      #471ca9 -0.99%,\n      #5736a3 54.28%,\n      #4b2a99 78.99%\n    ),\n    url(../../../img/Picture.jpg), url(../../../img/Logo.jpg);\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n  position: relative;\n  list-style: none;\n\n  &::after {\n    position: absolute;\n    top: 214px;\n    left: 0;\n    content: '';\n    display: inline-block;\n    width: 100%;\n    height: 8px;\n    background-color: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),E=S.ZP.div(b||(b=(0,v.Z)(["\n  width: 80px;\n  height: 80px;\n  background: linear-gradient(\n      114.99deg,\n      #471ca9 -0.99%,\n      #5736a3 54.28%,\n      #4b2a99 78.99%\n    ),\n    url(../../../img/Ellipse.jpg);\n  border-radius: 50%;\n  position: absolute;\n  left: 150px;\n  top: 178px;\n  z-index: 100;\n  overflow: hidden;\n"]))),M=S.ZP.div(m||(m=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 284px;\n  text-align: center;\n"]))),N=S.ZP.p(w||(w=(0,v.Z)(["\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ebd8ff;\n"]))),_=S.ZP.button(y||(y=(0,v.Z)(["\n  margin-left: 92px;\n  margin-right: 92px;\n  margin-top: 26px;\n  width: 196px;\n  // background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  justify-content: center;\n  align-items: center;\n  padding: 14px;\n  color: #373737;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n\n    background-color: ","\n  \n  }\n"])),(function(n){return n.isActive?"#5cd3a8":"#ebd8ff"})),T=function(n){var t=n.onClick,e=n.text;return(0,z.jsx)(_,{type:"button",onClick:t,children:e.toUpperCase()})},B=function(n){var t=n.item,e=t.id,r=t.user,c=t.avatar,l=t.followers,s=t.tweets,p=(0,i.useState)(!1),u=(0,o.Z)(p,2),f=u[0],x=u[1],h=(0,i.useState)(l),g=(0,o.Z)(h,2),b=g[0],m=g[1];return(0,z.jsxs)(U,{children:[(0,z.jsx)(E,{children:(0,z.jsx)("img",{src:c,alt:r})}),(0,z.jsxs)(M,{children:[(0,z.jsxs)(N,{children:[s.toLocaleString("en-IN")," ","tweets".toUpperCase()]}),(0,z.jsxs)(N,{children:[b.toLocaleString("en-IN")," ","followers".toUpperCase()]})]}),(0,z.jsx)(T,{text:f?"following":"follow",isActive:f,onClick:function(){return function(n){f?(x(!1),m((function(n){return n-1})),d(n,b-1).then((function(n){console.log(n)})).catch((function(n){a.Am.error("Sorry, error happened.")}))):(x(!0),m((function(n){return n+1})),d(n,b+1).then((function(n){console.log(n)})).catch((function(n){a.Am.error("Sorry, error happened.")})))}(e)}})]},e)},I=S.ZP.ul(j||(j=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: space-evenly;\n"]))),R=function(n){var t=n.tweets;return(0,z.jsx)(I,{children:0!==t.length&&t.map((function(n){return(0,z.jsx)(B,{item:n},n.id)}))})},F=S.ZP.button(k||(k=(0,v.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 26px;\n  display: block;\n  width: 196px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  text-align: center;\n  padding: 14px;\n  color: #373737;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n"]))),H=function(n){var t=n.onClick;return(0,z.jsx)(F,{type:"button",onClick:t,children:"Load more"})},J=function(){var n,t,e=(0,Z.TH)(),l=(0,i.useRef)(null!==(n=null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"),s=(0,i.useState)([]),p=(0,o.Z)(s,2),u=p[0],f=p[1],d=(0,i.useState)(!1),h=(0,o.Z)(d,2),g=h[0],b=h[1],m=(0,i.useState)(1),w=(0,o.Z)(m,2),y=w[0],j=w[1],k=(0,i.useState)(3),v=(0,o.Z)(k,1)[0];(0,i.useEffect)((function(){b(!0),function(n,t){return x.apply(this,arguments)}(y,v).then((function(n){if(0===n.length)return Promise.reject(new Error);f((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(n))}))})).catch((function(n){a.Am.error("Sorry, error happened.")})).finally((function(){b(!1)}))}),[y,v]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{to:l.current,children:"Back"}),0!==u.length&&(0,z.jsx)(R,{tweets:u}),g&&(0,z.jsx)(c.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),0!==u.length&&!g&&(0,z.jsx)(H,{onClick:function(){j((function(n){return n+1}))}}),(0,z.jsx)(a.x7,{})]})}}}]);
//# sourceMappingURL=46.5c75759a.chunk.js.map