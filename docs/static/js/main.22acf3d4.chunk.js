(this["webpackJsonpr3f-tut"]=this["webpackJsonpr3f-tut"]||[]).push([[0],{55:function(t,e,o){},73:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),c=o(25),a=o.n(c),i=(o(55),o(6)),s=o(20),j=o(22),u=o(51),b=o(11),h=o(49),l=o(14);Object(s.d)({OrbitControls:h.a});for(var f=function(){var t=Object(n.useRef)(),e=Object(s.f)(),o=e.camera,r=e.gl;return Object(s.e)((function(e,o){t.current.update()})),Object(l.jsx)("orbitControls",{maxPolarAngle:Math.PI/1,minPolarAngle:Math.PI/5,ref:t,args:[o,r.domElement]})},O=function(){return Object(l.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],receiveShadow:!0,children:[Object(l.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(l.jsx)("meshPhysicalMaterial",{attach:"material",color:"white"})]})},p=o(50),d=[],g=0;g<Math.floor(10);g++){var m=new b.Color(Math.random(),Math.random(),Math.random());d.push({color:m,position:[-1.5,.5,-2*g],key:g,start:!1})}var x=Object(j.animated)((function(t){var e=t.start,o=t.position,r=t.color,c=t.index,a=Object(n.useState)(!1),u=Object(i.a)(a,2),b=u[0],h=u[1],f=(Object(j.useSpringRef)(),Object(j.useSpring)({yposition:b?2.5:o[1],color:r,config:{duration:200}})),O=0,d=Object(n.useRef)();return Object(s.e)((function(){Math.floor(e)===c&&h(!0),O+=.01,d.current.position.z=o[2]+O,d.current.position.z})),Object(p.useEffect)((function(){!0===b&&setTimeout((function(){h(!1)}),500)}),[b]),Object(l.jsxs)(j.a.mesh,{ref:d,"position-x":o[0],"position-y":f.yposition,"position-z":o[2],children:[Object(l.jsx)("sphereBufferGeometry",{attach:"geometry"}),Object(l.jsx)(j.a.meshPhysicalMaterial,{attach:"material",color:f.color})]})})),M=function(t){var e=t.rise,o=Object(j.useSpring)({sphereShouldRise:e?d.length:-1,config:{duration:1e3}}).sphereShouldRise;return Object(s.e)((function(){console.log(o)})),Object(l.jsx)(l.Fragment,{children:d.map((function(t,e){return Object(l.jsx)(x,{start:o,color:t.color,position:t.position,index:e},t.key)}))})};var y=function(){var t=Object(n.useState)(!1),e=Object(i.a)(t,2),o=e[0],r=e[1],c=Object(u.a)({fogMin:0,fogMax:30,num:1}),a=c.fogMin,j=c.fogMax;return c.num,Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",onClick:function(){return r(!o)},children:"toggle"}),Object(l.jsxs)(s.a,{camera:{position:[0,0,5]},onCreated:function(t){var e=t.gl;e.shadowMap.enabled=!0,e.shadowMap.type=b.PCFSoftShadowMap},children:[Object(l.jsx)("fog",{attach:"fog",args:["white",a,j]}),Object(l.jsx)(f,{}),Object(l.jsx)(M,{rise:o}),Object(l.jsx)(O,{}),Object(l.jsx)("ambientLight",{}),Object(l.jsx)("directionalLight",{})]})]})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.22acf3d4.chunk.js.map