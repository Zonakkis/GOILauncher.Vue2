"use strict";(self["webpackChunkgoilauncher"]=self["webpackChunkgoilauncher"]||[]).push([[672],{9291:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"worldrecordhistory"},[t("div",{staticClass:"filter"},[t("div",{staticClass:"top-space"},[e._v(" 平台： "),t("el-select",{model:{value:e.platform,callback:function(t){e.platform=t},expression:"platform"}},e._l(e.platforms,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)]),t("el-divider"),t("el-timeline"),t("div",[t("el-timeline",e._l(e.filteredWorldRecords,(function(r,l){return t("el-timeline-item",{key:l,attrs:{timestamp:r.Date}},[t("el-card",[t("div",[e._v(" "+e._s(r.Player)+" "),t("el-link",{attrs:{type:"primary",href:r.VideoUrl}},[e._v(e._s(r.Time))])],1)])],1)})),1)],1)],1)},o=[],a=(r(4603),r(7566),r(8721),{data(){return{platform:"PC",platforms:["PC","安卓","iOS"],worldRecords:[]}},computed:{filteredWorldRecords(){return this.worldRecords.filter((e=>e.Platform===this.platform))}},mounted(){this.getWorldRecords()},methods:{async getWorldRecords(){const e=new Headers({"X-LC-Id":"3Dec7Zyj4zLNDU0XukGcAYEk-gzGzoHsz","X-LC-Key":"uHF3AdKD4i3RqZB7w1APiFRF","Content-Type":"application/json"}),t={method:"GET",headers:e};let r={order:"TotalTime",keys:"Player,Time,VideoUrl,Date,Platform,-TotalTime,-createdAt,-objectId"};const l=`https://3dec7zyj.lc-cn-n1-shared.com/1.1/classes/WorldRecord?${new URLSearchParams(r)}`,o=await fetch(l,t);this.worldRecords=(await o.json()).results.map((e=>(e.Date=new Date(e.Date.iso).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}),e))),console.log(this.worldRecords)}}}),s=a,i=r(1656),c=(0,i.A)(s,l,o,!1,null,"8816abb0",null),d=c.exports}}]);
//# sourceMappingURL=672.c41948e8.js.map