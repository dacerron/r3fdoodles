(this["webpackJsonpr3f-tut"]=this["webpackJsonpr3f-tut"]||[]).push([[0],{55:function(t,e,o){},73:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(25),a=o.n(n),c=(o(55),o(6)),i=o(21),s=o(22),j=o(51),u=o(11),b=o(49),h=o(14);Object(i.d)({OrbitControls:b.a});for(var l=function(){var t=Object(r.useRef)(),e=Object(i.f)(),o=e.camera,n=e.gl;return Object(i.e)((function(e,o){t.current.update()})),Object(h.jsx)("orbitControls",{maxPolarAngle:Math.PI/1,minPolarAngle:Math.PI/5,ref:t,args:[o,n.domElement]})},f=function(){return Object(h.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],receiveShadow:!0,children:[Object(h.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(h.jsx)("meshPhysicalMaterial",{attach:"material",color:"white"})]})},O=o(50),p=[],d=0;d<Math.floor(10);d++){var m=new u.Color(Math.random(),Math.random(),Math.random());p.push({color:m,position:[-1.5,.5,-2*d],key:d,start:!1})}var g=Object(s.animated)((function(t){var e=t.start,o=t.position,n=t.color,a=t.index,j=Object(r.useState)(!1),u=Object(c.a)(j,2),b=u[0],l=u[1],f=(Object(s.useSpringRef)(),Object(s.useSpring)({yposition:b?2.5:o[1],color:n,config:{duration:200}})),p=0,d=Object(r.useRef)();return Object(i.e)((function(){Math.floor(e)===a&&l(!0),p+=.01,d.current.position.z=o[2]+p})),Object(O.useEffect)((function(){!0===b&&setTimeout((function(){l(!1)}),500)}),[b]),Object(h.jsxs)(s.a.mesh,{ref:d,"position-x":o[0],"position-y":f.yposition,"position-z":o[2],children:[Object(h.jsx)("sphereBufferGeometry",{attach:"geometry"}),Object(h.jsx)(s.a.meshPhysicalMaterial,{attach:"material",color:f.color})]})})),x=function(t){var e=t.rise,o=Object(s.useSpring)({sphereShouldRise:e?p.length:-1,config:{duration:1e3}}).sphereShouldRise;return Object(h.jsx)(h.Fragment,{children:p.map((function(t,e){return Object(h.jsx)(g,{start:o,color:t.color,position:t.position,index:e},t.key)}))})};var M=function(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),o=e[0],n=e[1],a=Object(j.a)({fogMin:0,fogMax:30,num:1}),s=a.fogMin,b=a.fogMax;return a.num,Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:function(){return n(!o)},children:"toggle"}),Object(h.jsxs)(i.a,{camera:{position:[0,0,5]},onCreated:function(t){var e=t.gl;e.shadowMap.enabled=!0,e.shadowMap.type=u.PCFSoftShadowMap},children:[Object(h.jsx)("fog",{attach:"fog",args:["white",s,b]}),Object(h.jsx)(l,{}),Object(h.jsx)(x,{rise:o}),Object(h.jsx)(f,{}),Object(h.jsx)("ambientLight",{}),Object(h.jsx)("directionalLight",{})]})]})};a.a.render(Object(h.jsx)(M,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.196b5d15.chunk.js.map