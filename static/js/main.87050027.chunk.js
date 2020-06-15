(this.webpackJsonpterrene=this.webpackJsonpterrene||[]).push([[0],{100:function(e,t,n){e.exports=n(133)},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(23);n(107);var o=n(15),c=n.n(o),s=n(81),l=n.n(s),u=n(73),m=n(158),p=n(157),f=n(8),g=n(75),v=n(12),h=n(0),O=n(82),d=n(26);Object(f.c)({PointerLockControlsImpl:O.a});var b=function(e){var t=e.movementSpeed,n=Object(a.useRef)(),i=Object(f.f)(),o=i.camera,c=i.gl.domElement,s=Object(a.useMemo)((function(){return new h.Clock}),[]),l=Object(a.useState)(!1),u=Object(v.a)(l,2),m=u[0],p=u[1],g=Object(a.useState)(!1),O=Object(v.a)(g,2),b=O[0],y=O[1],E=Object(a.useState)(!1),j=Object(v.a)(E,2),x=j[0],S=j[1],M=Object(a.useState)(!1),T=Object(v.a)(M,2),N=T[0],w=T[1],k=Object(a.useState)(!1),P=Object(v.a)(k,2),z=P[0],I=P[1],_=Object(a.useState)(!1),R=Object(v.a)(_,2),L=R[0],C=R[1];Object(f.d)((function(){if(n.current.isLocked){var e=s.getDelta();if(m||b){var a=(Number(m)-Number(b))*e*t;n.current.moveForward(a)}if(x||N){var r=(Number(N)-Number(x))*e*t;n.current.moveRight(r)}if(z||L){var i=(Number(z)-Number(L))*e*t;o.position.y+=i}}}));var A=function(){n.current.lock()},D=function(e){switch(e.keyCode){case d.f:p(!0);break;case d.c:y(!0);break;case d.a:S(!0);break;case d.b:w(!0);break;case d.e:I(!0);break;case d.d:C(!0)}},W=function(e){switch(e.keyCode){case d.f:p(!1);break;case d.c:y(!1);break;case d.a:S(!1);break;case d.b:w(!1);break;case d.e:I(!1);break;case d.d:C(!1)}};return Object(a.useEffect)((function(){return c.addEventListener("mousedown",A,!1),document.addEventListener("keydown",D,!1),document.addEventListener("keyup",W,!1),function(){c.removeEventListener("mousedown",A,!1),document.removeEventListener("keydown",D,!1),document.removeEventListener("keyup",W,!1)}}),[c]),r.a.createElement("pointerLockControlsImpl",{ref:n,args:[o,c]})};b.defaultProps={movementSpeed:5};var y=b,E=n(159),j=n(156),x=n(160),S=n(155),M=n(153),T=n(161),N=n(152),w=Object(N.a)((function(e){return{listItemText:{width:e.spacing(25)}}})),k=Object(a.memo)((function(e){var t=e.sectionName,n=e.optionsEnum,a=e.options,i=e.setOptions,o=w();return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,t),n.map((function(e){var t=e.displayName,n=e.name,c=e.min,s=e.max,l=e.step;return r.a.createElement(x.a,{dense:!0,key:n},r.a.createElement(S.a,{className:o.listItemText},t),r.a.createElement(T.a,{component:"div",color:"secondary",min:c,max:s,step:l,valueLabelDisplay:"auto",value:a[n],onChange:function(e,t){return i(n,t)}}))})))})),P=Object.freeze({OPTIONS:"TerrainAction_OPTIONS",RESET_OPTIONS:"TerrainAction_RESET_OPTIONS"}),z=Object.freeze({OPTIONS:"FogAction_OPTIONS",RESET_OPTIONS:"FogAction_RESET_OPTIONS"}),I=Object.freeze({OPTIONS:"WaterAction_OPTIONS",RESET_OPTIONS:"WaterAction_RESET_OPTIONS"}),_=function(e){return e.fog.options},R=function(e){return e.terrain.options},L=function(e){return e.water.options},C=[{displayName:"Density",name:"density",min:0,max:.5,step:.001}],A=[{displayName:"Height Major",name:"heightMajor",min:0,max:10,step:.1},{displayName:"Spacing Major",name:"spacingMajor",min:0,max:1,step:.01},{displayName:"Height Minor",name:"heightMinor",min:0,max:1,step:.01},{displayName:"Spacing Minor",name:"spacingMinor",min:0,max:5,step:.05}],D=[{displayName:"Height",name:"height",min:-5,max:5,step:.1}],W=Object(N.a)((function(e){return{sideDrawer:{width:"20%",overflowX:"hidden"},list:{display:"flex",flexDirection:"column",height:"100%"},options:{flexGrow:1},resetButton:{color:e.palette.secondary.light}}})),F=Object(a.memo)((function(){var e=W(),t=Object(i.b)(),n=Object(i.c)(R),o=Object(i.c)(_),c=Object(i.c)(L),s=Object(a.useCallback)((function(e,n){return t(function(e,t){return{type:z.OPTIONS,name:e,value:t}}(e,n))}),[t]),l=Object(a.useCallback)((function(e,n){return t(function(e,t){return{type:P.OPTIONS,name:e,value:t}}(e,n))}),[t]),u=Object(a.useCallback)((function(e,n){return t(function(e,t){return{type:I.OPTIONS,name:e,value:t}}(e,n))}),[t]);return r.a.createElement(E.a,{className:e.sideDrawer,variant:"permanent",classes:{paper:e.sideDrawer}},r.a.createElement(j.a,{className:e.list},r.a.createElement(m.a,{className:e.options},r.a.createElement(k,{sectionName:"Fog",optionsEnum:C,options:o,setOptions:s}),r.a.createElement(k,{sectionName:"Terrain",optionsEnum:A,options:n,setOptions:l}),r.a.createElement(k,{sectionName:"Water",optionsEnum:D,options:c,setOptions:u})),r.a.createElement(x.a,{button:!0,dense:!0,onClick:function(){t({type:z.RESET_OPTIONS}),t({type:P.RESET_OPTIONS}),t({type:I.RESET_OPTIONS})}},r.a.createElement(S.a,{primary:"Reset all",classes:{primary:e.resetButton}}))))})),G=n(162),B=n(67),K=Object(N.a)((function(e){return{backdrop:{width:"calc(100% - ".concat("20%",")"),left:"20%",zIndex:e.zIndex.drawer}}})),U=function(){var e=K(),t=Object(a.useState)(!0),n=Object(v.a)(t,2),i=n[0],o=n[1];return r.a.createElement(G.a,{className:e.backdrop,open:i,onClick:function(){return o(!1)}},r.a.createElement("div",null,r.a.createElement(B.a,{variant:"h3",color:"textPrimary",align:"center",paragraph:!0},"Terrene"),r.a.createElement(B.a,{variant:"body1",color:"textPrimary",align:"center"},"Move: WASD"),r.a.createElement(B.a,{variant:"body1",color:"textPrimary",align:"center"},"Ascend/Descend: Space/Shift"),r.a.createElement(B.a,{variant:"body1",color:"textPrimary",align:"center"},"Enable/Disable Controls: Click/Esc")))},H=function(e){return"".concat("https://wchang22.github.io/terrene","/assets/aerial_grass_rock/aerial_grass_rock_").concat(e,"_2k.jpg")},X=Object.freeze({camera:{position:[0,1,2.5],movementSpeed:5},lights:{directional:[{direction:[0,1,0],intensity:.75}],hemisphere:{skyColor:"lightblue",groundColor:"brown",intensity:.2}},fog:{color:"lightgrey",density:.05},terrain:{size:25,divisions:80,position:[0,0,0],rotation:[-Math.PI/2,0,0],colorMap:H("diff"),colorMapScale:[10,10],normalMap:H("nor"),displacementMap:H("disp"),roughnessMap:H("rough"),metalness:.5,uniforms:{heightMajor:3,spacingMajor:.25,heightMinor:.3,spacingMinor:1.25}},water:{uniforms:{height:-.3}},tileSideLength:3,epsilon:1e-7}),$=n(18),q=n(3),J=n(4),Z=n(90),Y=function(){function e(){Object(q.a)(this,e),this.gpu=new Z.GPU,this.elevationKernel=this.gpu.createKernel("function (\n      vertices, position, heightMajor, spacingMajor, heightMinor, spacingMinor,\n    ) {\n      const vertex = vertices[this.thread.x];\n      const x = vertex[0] + position[0];\n      const z = vertex[1] + position[1];\n\n      let elevation = 0.0;\n      /* eslint-disable no-undef */\n      elevation += heightMajor * perlinNoise([x * spacingMajor, z * spacingMajor]);\n      elevation += heightMinor * perlinNoise([x * spacingMinor, z * spacingMinor]);\n      /* eslint-enable no-undef */\n      return elevation;\n    }").setDynamicOutput(!0).setArgumentTypes({vertices:"Array1D(2)",position:"Array(2)",heightMajor:"Float",spacingMajor:"Float",heightMinor:"Float",spacingMinor:"Float"}).addNativeFunction("perlinNoise","#define GLSLIFY 1\n//\tClassic Perlin 2D Noise \n//\tby Stefan Gustavson\n//  https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\n\n// Make sure perlin noise is the first function, so we can use it GPU.js\nfloat perlinNoise(vec2 P);\n\nvec4 permute(vec4 x) {\n  return mod((x * 34.0 + 1.0) * x, 289.0);\n}\n\nvec2 fade(vec2 t) {\n  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n\nfloat perlinNoise(vec2 P) {\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n  vec4 i = permute(permute(ix) + iy);\n  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n  vec4 gy = abs(gx) - 0.5;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n  vec2 g00 = vec2(gx.x,gy.x);\n  vec2 g10 = vec2(gx.y,gy.y);\n  vec2 g01 = vec2(gx.z,gy.z);\n  vec2 g11 = vec2(gx.w,gy.w);\n  vec4 norm = 1.79284291400159 - 0.85373472095314 * \n    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}\n\n")}return Object(J.a)(e,[{key:"generateElevation",value:function(e,t,n,a,r,i,o){return this.elevationKernel.setOutput([t]),this.elevationKernel(e,n,a,r,i,o)}}]),e}(),Q=n(29),V=n(5),ee=n(6),te=function(e){Object(V.a)(n,e);var t=Object(ee.a)(n);function n(e){var a,r;Object(q.a)(this,n),r=t.call(this,Object(Q.a)(Object(Q.a)({},e),{},{side:h.DoubleSide}));var i=X.terrain,o=new h.TextureLoader,c=o.load(i.colorMap);c.wrapS=h.RepeatWrapping,c.wrapT=h.RepeatWrapping,(a=c.repeat).set.apply(a,Object($.a)(i.colorMapScale)),c.updateMatrix();var s=o.load(i.normalMap);s.wrapS=h.RepeatWrapping,s.wrapT=h.RepeatWrapping;var l=o.load(i.displacementMap);l.wrapS=h.RepeatWrapping,l.wrapT=h.RepeatWrapping;var u=o.load(i.roughnessMap);return u.wrapS=h.RepeatWrapping,u.wrapT=h.RepeatWrapping,r.map=c,r.normalMap=s,r.normalMapType=h.TangentSpaceNormalMap,r.displacementMap=l,r.roughnessMap=u,r.metalness=i.metalness,r}return n}(h.MeshStandardMaterial);Object(f.c)({TerrainShaderMaterial:te});var ne=Object(a.memo)((function(e){var t=e.tileOffsets,n=e.numTiles,o=Object(a.useMemo)((function(){return Object($.a)(new Array(n).keys())}),[n]),c=Object(a.useRef)(o.map((function(){return Object(a.createRef)()}))),s=Object(f.f)().gl,l=X.terrain,u=Object(a.useMemo)((function(){return new Y}),[]),m=Object(i.c)(R);return Object(a.useEffect)((function(){var e=s.getContext(),n=e.getParameter(e.MAX_TEXTURE_SIZE);t.forEach((function(e,t){var a=c.current[t].current,r=a.position,i=a.geometry,o=a.geometry.vertices;r.set.apply(r,Object($.a)(e).concat([0]));for(var s=Math.min(n,o.length),l=function(t){var n=o.slice(t,t+s),a=u.generateElevation(n.map((function(e){return[e.x,e.y]})),n.length,e,m.heightMajor,m.spacingMajor,m.heightMinor,m.spacingMinor);n.forEach((function(e,t){return e.setZ(a[t])}))},p=0;p<o.length;p+=s)l(p);i.verticesNeedUpdate=!0}))}),[s,u,m,t]),r.a.createElement("group",{rotation:l.rotation},o.map((function(e,t){return r.a.createElement("mesh",{ref:c.current[t],key:String(e)},r.a.createElement("planeGeometry",{attach:"geometry",args:[l.size,l.size,l.divisions,l.divisions]}),r.a.createElement("terrainShaderMaterial",{attach:"material"}))})))})),ae=Object(a.memo)((function(e){var t=e.tileOffsets,n=e.numTiles,o=Object(a.useMemo)((function(){return Object($.a)(new Array(n).keys())}),[n]),c=Object(a.useRef)(o.map((function(){return Object(a.createRef)()}))),s=X.terrain,l=Object(i.c)(L);return Object(a.useEffect)((function(){t.forEach((function(e,t){var n=c.current[t].current.position;n.set.apply(n,Object($.a)(e).concat([l.height]))}))}),[t,l.height]),r.a.createElement("group",{rotation:s.rotation},o.map((function(e,t){return r.a.createElement("mesh",{ref:c.current[t],key:String(e)},r.a.createElement("planeGeometry",{attach:"geometry",args:[s.size,s.size,1,1]}),r.a.createElement("meshPhysicalMaterial",{attach:"material",color:"lightblue",side:h.DoubleSide,transparent:!0,transparency:.5,metalness:0}))})))})),re=function(){function e(t,n){Object(q.a)(this,e),this.sideLength=t,this.tileSize=n,this.numTiles=Math.pow(t,2)}return Object(J.a)(e,[{key:"getOffsets",value:function(e,t){for(var n=Math.floor(e/this.tileSize)*this.tileSize,a=Math.floor(t/this.tileSize)*this.tileSize,r=[],i=-this.sideLength/2;i<this.sideLength/2;i+=1)for(var o=-this.sideLength/2;o<this.sideLength/2;o+=1)r.push([n+o*this.tileSize,a+i*this.tileSize]);return r}}],[{key:"offsetsAreEqual",value:function(e,t){for(var n=0;n<9;n+=1)for(var a=0;a<2;a+=1)if(e[n][a]!==t[n][a])return!1;return!0}}]),e}(),ie=Object(a.memo)((function(){var e=Object(f.f)().camera,t=X.terrain,n=X.lights,o=n.hemisphere,c=n.directional,s=X.tileSideLength,l=Object(i.c)(_),u=Object(a.useMemo)((function(){return new re(s,t.size)}),[s,t.size]),m=Object(a.useState)(u.getOffsets(0,0)),p=Object(v.a)(m,2),g=p[0],h=p[1];return Object(f.d)((function(){var n=e.position,a=n.x+t.size/2,r=-n.z+t.size/2,i=u.getOffsets(a,r);re.offsetsAreEqual(i,g)||h(i)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("hemisphereLight",{args:[o.skyColor,o.groundColor,o.intensity]}),c.map((function(e){var t=e.direction,n=e.intensity;return r.a.createElement("directionalLight",{direction:t,intensity:n,key:"".concat(t,"-").concat(n)})})),r.a.createElement("fogExp2",{attach:"fog",args:[l.color,l.density]}),r.a.createElement(ne,{tileOffsets:g,numTiles:u.numTiles}),r.a.createElement(ae,{tileOffsets:g,numTiles:u.numTiles}))})),oe=n(42),ce=(n(128),n(9)),se=n(45),le=n.n(se),ue={options:{}};A.forEach((function(e){var t=e.name;ue.options[t]=X.terrain.uniforms[t]}));var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.OPTIONS:return le()(e,{options:Object(ce.a)({},t.name,{$set:t.value})});case P.RESET_OPTIONS:return Object(Q.a)(Object(Q.a)({},e),{},{options:ue.options});default:return e}},pe={options:{}};C.forEach((function(e){var t=e.name;pe.options[t]=X.fog[t]}));var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.OPTIONS:return le()(e,{options:Object(ce.a)({},t.name,{$set:t.value})});case z.RESET_OPTIONS:return Object(Q.a)(Object(Q.a)({},e),{},{options:pe.options});default:return e}},ge={options:{}};D.forEach((function(e){var t=e.name;ge.options[t]=X.water.uniforms[t]}));var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.OPTIONS:return le()(e,{options:Object(ce.a)({},t.name,{$set:t.value})});case I.RESET_OPTIONS:return Object(Q.a)(Object(Q.a)({},e),{},{options:ge.options});default:return e}},he=Object(oe.d)(oe.a.apply(void 0,[]))(oe.e)(Object(oe.c)({terrain:me,fog:fe,water:ve})),Oe=n(95),de=Object(Oe.a)({palette:{type:"dark"}}),be=Object(N.a)((function(e){return{app:{display:"flex",height:"100%"},canvas:{background:"lightgrey"},stats:{left:"auto !important",top:"auto !important",right:"0px !important",bottom:"0px !important",marginRight:e.spacing(1),marginBottom:e.spacing(1)}}})),ye=function(){var e=be();return r.a.createElement(m.a,{className:e.app},r.a.createElement(p.a,{theme:de},r.a.createElement(F,null),r.a.createElement(U,null),r.a.createElement(f.a,{className:e.canvas,gl2:!0},r.a.createElement(g.b,{className:e.stats}),r.a.createElement(i.a,{store:he},r.a.createElement(y,{movementSpeed:X.camera.movementSpeed}),r.a.createElement(g.a,{position:X.camera.position,makeDefault:!0}),r.a.createElement(ie,null)))))};n(132);l.a.useDefaults({formatter:function(e,t){e.unshift("".concat(t.level.name))}});var Ee=function(){return u.a.isWebGL2Available()?r.a.createElement(i.a,{store:he},r.a.createElement(ye,null)):r.a.createElement(r.a.Fragment,null,u.a.getWebGL2ErrorMessage().textContent)};c.a.render(r.a.createElement(Ee,null),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.87050027.chunk.js.map