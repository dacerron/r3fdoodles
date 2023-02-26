(this["webpackJsonpr3f-tut"]=this["webpackJsonpr3f-tut"]||[]).push([[0],{47:function(t,e,n){},57:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(5),i=n.n(o),c=n(48),r=n.n(c),s=(n(57),n(11)),a=n(24),u=n(6),j=n(49),l=n(12),b=n(10);Object(l.h)({OrbitControls:j.a});for(var h=n(25),m=[],d=0;d<Math.floor(5);d++){var O=new u.Color(Math.random(),Math.random(),Math.random());m.push({color:O,position:[-1.5,.5,4+4*-d],key:d,start:!1})}var f=Object(h.animated)((function(t){t.start;var e,n=t.position,i=t.color,c=(t.index,t.menuFunction),r=t.shouldRise,a=Object(o.useState)(),j=Object(s.a)(a,2),m=j[0],d=j[1],O=(Object(h.useSpringRef)(),new u.Vector3),f=Object(h.useSpring)({yposition:m?1.5:n[1],color:i,config:{duration:200}}),p=Object(o.useRef)();return Object(l.a)((function(){"number"!=typeof e&&(e=0),p.current.position.z=n[2]+e,p.current.getWorldPosition(O),O.z>20&&(console.log("resettings"),e=-n[2]-20)})),Object(o.useEffect)((function(){d(r)}),[r]),Object(b.jsxs)(h.a.mesh,{ref:p,"position-x":n[0],"position-y":f.yposition,onPointerDown:function(){c()},children:[Object(b.jsx)("sphereBufferGeometry",{attach:"geometry"}),Object(b.jsx)(h.a.meshPhysicalMaterial,{attach:"material",color:f.color})]})})),p=function(t){var e=t.menuFunctions,n=i.a.useContext(M);return console.log(n),e?Object(b.jsx)(b.Fragment,{children:m.map((function(t,o){return o<e.length?Object(b.jsx)(f,{color:t.color,position:t.position,index:o,menuFunction:e[o],shouldRise:n.values[o]},t.key):null}))}):null},x=n(9),g=n(65),v=function(){return Object(b.jsx)("mesh",{position:[-1,-.5,2],children:Object(b.jsx)(g.a,{resolution:2048,args:[10,10],mirror:1,mixStrength:.8,rotation:[-Math.PI/2,0,Math.PI/2],children:function(t,e){return Object(b.jsx)(t,Object(x.a)({color:"#a0a0a0",metalness:.5,normalScale:[1,1]},e))}})})};var w=function(t){var e=t.menuFunctions,n=Object(o.useRef)(),i=new u.Euler(0,Math.PI/2,0),c=new u.Quaternion(0,0,0,0),r=Object(l.m)().viewport;return Object(l.a)((function(t){var e=t.mouse,o=e.x*r.width/100,s=e.y*r.height/100;i.set(s,o,0),c.setFromEuler(i),n.current.quaternion.slerp(c,.1)})),Object(b.jsxs)("group",{ref:n,position:[0,0,-3],children:[Object(b.jsx)("pointLight",{position:[15,15,15]}),Object(b.jsx)(p,{menuFunctions:e}),Object(b.jsx)(v,{})]})};n(62);var y=function(t){var e=t.menuFunc;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"aboutTab navTab",onPointerEnter:function(){console.log("about enter"),e()},children:"About"})})};n(63);var F=function(t){var e=t.menuFunc;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"projectsTab navTab",onPointerEnter:function(){console.log("projects enter"),e()},children:"Projects"})})};n(47);function P(t){var e=t.url,n=t.title,o=t.desc,i=t.wiki;return Object(b.jsxs)("p",{children:[n,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:e,class:"ProjectLink",target:"_blank",children:Object(b.jsx)("img",{src:"/github-mark-white.svg"})})," ",Object(b.jsx)("a",{href:i,style:{fontWeight:400},children:"Wiki"})," ",Object(b.jsx)("br",{})," ",Object(b.jsx)("p",{children:o}),Object(b.jsx)("br",{})]})}var M=i.a.createContext({values:null});function k(){var t=Object(o.useState)([0,0,0]),e=Object(s.a)(t,2),n=e[0],i=e[1],c=Object(o.useState)(!1),r=Object(s.a)(c,2),j=r[0],l=r[1],h=[function(){l(!0),i([1,0,0])},function(){l(!0),i([0,1,0])}];return Object(b.jsxs)("div",{style:{width:"100%",height:"100%"},children:[Object(b.jsxs)(a.a,{camera:{position:[5,5,-2]},onCreated:function(t){var e=t.gl;e.shadowMap.enabled=!0,e.shadowMap.type=u.VSMShadowMap},children:[Object(b.jsx)(M.Provider,{value:{values:n},children:Object(b.jsx)(w,{menuFunctions:h})}),Object(b.jsx)("ambientLight",{}),Object(b.jsx)("directionalLight",{})]}),Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(F,{menuFunc:h[0]}),Object(b.jsx)(y,{menuFunc:h[1]})]}),Object(b.jsxs)("div",{className:j?"infoPaneContainerExpanded":"infoPaneContainer",children:[n[0]?Object(b.jsxs)("div",{className:"projectsPane infoPane",children:[Object(b.jsx)(P,{url:"https://github.com/ubcemergingmedialab/3DMetabolism-Unity",title:"3D Metabolism",desc:"Unity project that visualizes metabolic networks for teaching biochemistry.",wiki:"https://wiki.ubc.ca/Documentation:Metabolism"}),Object(b.jsx)(P,{url:"https://github.com/ubcemergingmedialab/MootCourt",title:"Moot Court",desc:"React three fiber project for helping first year law students practice for moots.",wiki:"https://wiki.ubc.ca/Documentation:Moot_Court"}),Object(b.jsx)(P,{url:"https://github.com/ubcemergingmedialab/FossaFinder",title:"Fossa Finder",desc:"Unity Project that visuales the Pterygopalatine Fossa for teaching human anatomy.",wiki:"https://wiki.ubc.ca/Documentation:Pterygopalatine_Fossa_VR"})]}):null,n[1]?Object(b.jsx)("div",{className:"aboutPane infoPane",children:"some info about me"}):null]})]})}r.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.33f52de2.chunk.js.map