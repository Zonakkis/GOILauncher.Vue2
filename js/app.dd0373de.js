(function(){"use strict";var e={2056:function(e,n,t){var r=t(6848),o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("div",[n("el-menu",{attrs:{router:"","default-active":"/about",mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"/about"}},[e._v("关于")]),n("el-menu-item",{attrs:{index:"/mod"}},[e._v("Mod下载")]),n("el-menu-item",{attrs:{index:"/map"}},[e._v("地图下载")]),n("el-menu-item",{attrs:{index:"/submitrun"}},[e._v("提交速通")]),n("el-menu-item",{attrs:{index:"/leaderboard"}},[e._v("排行榜")]),n("el-menu-item",{attrs:{index:"/pendingrun"}},[e._v("待审核")]),n("el-menu-item",{attrs:{index:"/worldrecordhistory"}},[e._v("世界纪录史")])],1)],1),n("div",{staticClass:"view"},[n("router-view")],1)])},i=[],u={data(){return{}}},a=u,d=t(1656),c=(0,d.A)(a,o,i,!1,null,null,null),f=c.exports,l=t(6178);r["default"].use(l.Ay);const s=[{path:"/",redirect:"/about"},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,1467))},{path:"/map",name:"map",component:()=>t.e(594).then(t.bind(t,1085))},{path:"/mod",name:"mod",component:()=>t.e(857).then(t.bind(t,5857))},{path:"/leaderboard",name:"leaderboard",component:()=>t.e(7).then(t.bind(t,2007))},{path:"/submitrun",name:"submitrun",component:()=>t.e(573).then(t.bind(t,7573))},{path:"/pendingrun",name:"pendingrun",component:()=>t.e(163).then(t.bind(t,4163))},{path:"/worldrecordhistory",name:"worldrecordhistory",component:()=>t.e(672).then(t.bind(t,9291))}],m=new l.Ay({mode:"history",routes:s});var p=m,h=t(9143),v=t.n(h);r["default"].config.productionTip=!1,r["default"].use(v()),new r["default"]({router:p,render:e=>e(f)}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,d=0;d<r.length;d++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[d])}))?r.splice(d--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(594===e?"about":e)+"."+{7:"0139a965",163:"8a218609",573:"b57f233b",594:"ac264133",672:"c41948e8",857:"68a2b579"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{7:"f086228a",573:"22d71433",594:"e47ef995",672:"7c720f79",857:"0d89172d"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="goilauncher:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(d=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var s=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),d&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,a=t&&t.target&&t.target.href||n,d=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=r,d.request=a,u.parentNode&&u.parentNode.removeChild(u),i(d)}};return u.onerror=u.onload=a,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={7:1,573:1,594:1,672:1,857:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,d=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,d,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],d=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(d)var f=d(t)}for(n&&n(r);c<u.length;c++)i=u[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkgoilauncher"]=self["webpackChunkgoilauncher"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(2056)}));r=t.O(r)})();
//# sourceMappingURL=app.dd0373de.js.map