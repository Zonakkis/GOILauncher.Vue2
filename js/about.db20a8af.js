"use strict";(self["webpackChunkgoilauncher"]=self["webpackChunkgoilauncher"]||[]).push([[594],{1467:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("el-container",{attrs:{direction:"vertical"}},[t("el-main",[t("el-image",{staticClass:"image",attrs:{src:l(7009),fit:"scale-down",lazy:""}}),t("div",[t("h1",[e._v("GOILauncher")]),t("p",[e._v(" GOILauncher是一个基于Avalonia开发的Windows开源Getting Over It启动器。它可以帮助你查看游戏信息，并提供一键下载安装Mod、地图，启动游戏等功能。 ")]),t("div",[e._v(" 最新版本下载： "),t("el-link",{staticClass:"link",attrs:{type:"primary",href:e.url}},[e._v(e._s(e.version))])],1),t("p",[e._v(" 这里是GOILauncher的网页版本，你也可以在这里使用CGOILaucnher的绝大多数功能，如地图下载，查看排行榜并提交速通。 "),t("br"),t("strong",[e._v(" （但无法享受一键安装并启动游戏） ")])])])],1),t("el-footer",[t("div",{staticClass:"div"},[e._v(" 友情链接： "),t("el-link",{staticClass:"link",attrs:{type:"primary",href:"https://cloud.cgoi.cc"}},[e._v("CGOI云")]),e._v("      "),t("el-link",{staticClass:"link",attrs:{type:"primary",href:"https://space.bilibili.com/292855911"}},[e._v("哔哩哔哩")]),e._v("      "),t("el-link",{staticClass:"link",attrs:{type:"primary",href:"https://github.com/Zonakkis/GOILauncher"}},[e._v("Github")]),e._v("      "),t("el-link",{staticClass:"link",attrs:{type:"primary",href:"https://afdian.net/a/Zonakkis"}},[e._v("爱发电")])],1)])],1)],1)},s=[],i=(l(4603),l(7566),l(8721),{data(){return{update:[],version:"",url:""}},mounted(){this.getVersion()},methods:{async getVersion(){const e=new Headers({"X-LC-Id":"3Dec7Zyj4zLNDU0XukGcAYEk-gzGzoHsz","X-LC-Key":"uHF3AdKD4i3RqZB7w1APiFRF","Content-Type":"application/json"}),t={method:"GET",headers:e};let l={keys:"Version,URL,-createdAt,-updatedAt,-objectId"};const a=`https://3dec7zyj.lc-cn-n1-shared.com/1.1/classes/Update/674aa11c7f88791bd117bf88?${new URLSearchParams(l)}`,s=await fetch(a,t);this.update=await s.json(),this.version=this.update.Version,this.url=this.update.URL}}}),r=i,o=l(1656),n=(0,o.A)(r,a,s,!1,null,"0174efc0",null),u=n.exports},5527:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"leaderboard"},[t("div",{staticClass:"filter"},[t("div",{staticClass:"top-space"},[e._v(" 国家： "),t("el-select",{model:{value:e.countryCode,callback:function(t){e.countryCode=t},expression:"countryCode"}},e._l(e.countries,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 模式： "),t("el-select",{model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.categories,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 游戏平台： "),t("el-select",{model:{value:e.platform,callback:function(t){e.platform=t},expression:"platform"}},e._l(e.platforms,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 仅显示玩家不同平台最好成绩  "),t("el-switch",{model:{value:e.onlyShowBest,callback:function(t){e.onlyShowBest=t},expression:"onlyShowBest"}})],1),e._v("     ")]),t("el-divider"),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{stripe:"",data:e.filteredSpeedruns,width:"100%"}},[t("el-table-column",{attrs:{label:"排名","min-width":"50px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),t("el-table-column",{attrs:{label:"玩家","min-width":"200px"},scopedSlots:e._u([{key:"default",fn:function(l){return["无"!=l.row.Country?t("el-tooltip",{attrs:{content:l.row.Country,placement:"top"}},[t("el-image",{staticClass:"flags",attrs:{src:`https://www.speedrun.com/images/flags/${l.row.CountryCode}.png`,lazy:""}})],1):e._e(),t("el-link",{staticClass:"player",attrs:{href:l.row.PlayerURL,target:"_blank"}},[e._v(e._s(l.row.Player))])]}}])}),t("el-table-column",{attrs:{prop:"Platform",label:"游戏平台",align:"center","min-width":"80"}}),t("el-table-column",{attrs:{prop:"Time",label:"时间","min-width":"150px"}}),t("el-table-column",{attrs:{label:"视频地址","min-width":"80px"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-link",{attrs:{href:l.row.VideoURL,target:"_blank"}},[e._v(e._s(l.row.VideoPlatform))])]}}])})],1)],1)},s=[],i=(l(4114),l(4603),l(7566),l(8721),{data(){return{speedruns:[],countries:[{value:"不限",label:"不限"},{value:"cn",label:"中国"}],countryCode:"cn",platforms:[{value:"不限",label:"不限"},{value:"PC",label:"PC"},{value:"Android",label:"安卓"},{value:"iOS",label:"iOS"}],platform:"不限",categories:["Glitchless","Snake"],category:"Glitchless",onlyShowBest:!0,loading:!0}},computed:{filteredSpeedruns(){return this.speedruns.filter((e=>("不限"===this.countryCode||e.CountryCode===this.countryCode)&&("不限"===this.platform||e.Platform===this.platform)&&("不限"===this.category||e.Category===this.category)&&(!this.onlyShowBest||"不限"!=this.platform||e.Fastest)))}},mounted(){this.getSpeedruns()},methods:{async getSpeedruns(){const e=new Headers({"X-LC-Id":"3Dec7Zyj4zLNDU0XukGcAYEk-gzGzoHsz","X-LC-Key":"uHF3AdKD4i3RqZB7w1APiFRF","Content-Type":"application/json"}),t={method:"GET",headers:e};let l={order:"TotalTime",keys:"Player,Category,UID,TotalTime,Platform,Time,VideoPlatform,VID,Country,CountryCode,Fastest,-createdAt,-updatedAt,-objectId",limit:1e3};const a=`https://3dec7zyj.lc-cn-n1-shared.com/1.1/classes/Speedrun?${new URLSearchParams(l)}`,s=await fetch(a,t);this.speedruns=(await s.json()).results,this.speedruns.forEach((e=>{switch(e.VideoPlatform){case"哔哩哔哩":e.VideoURL=`https://www.bilibili.com/video/${e.VID}`,e.PlayerURL=`https://space.bilibili.com/${e.UID}`;break;case"YouTube":e.VideoURL=`https://www.youtube.com/watch?v=${e.VID}`,e.PlayerURL=`https://www.youtube.com/channel/${e.UID}`;break;case"Twitch":e.VideoURL=`https://www.twitch.tv/videos/${e.VID}`,e.PlayerURL=`https://www.twitch.tv/${e.UID}`;break;default:break}this.countries.some((t=>t.value===e.CountryCode))||"无"===e.CountryCode||this.countries.push({value:e.CountryCode,label:e.Country})})),this.loading=!1}}}),r=i,o=l(1656),n=(0,o.A)(r,a,s,!1,null,"d1aca170",null),u=n.exports},1258:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"map"},[t("div",{staticClass:"filter"},[t("div",{staticClass:"top-space"},[e._v(" 搜索： "),t("el-input",{staticClass:"input",attrs:{placeholder:"请输入地图名或作者名"},model:{value:e.searchMapName,callback:function(t){e.searchMapName=t},expression:"searchMapName"}})],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 平台： "),t("el-select",{model:{value:e.platform,callback:function(t){e.platform=t},expression:"platform"}},e._l(e.platforms,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 类型： "),t("el-select",{model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},e._l(e.forms,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 风格： "),t("el-select",{model:{value:e.style,callback:function(t){e.style=t},expression:"style"}},e._l(e.styles,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v("     "),t("div",{staticClass:"top-space"},[e._v(" 难度： "),t("el-select",{model:{value:e.difficulty,callback:function(t){e.difficulty=t},expression:"difficulty"}},e._l(e.difficulties,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v("     ")]),t("el-divider"),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{stripe:"",data:e.filteredMaps,"row-style":{height:"65px"}}},[t("el-table-column",{attrs:{width:"50px"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-link",{attrs:{type:"primary",href:l.row.Url}},[e._v("下载")])]}}])}),t("el-table-column",{attrs:{label:"名称","min-width":"205px"},scopedSlots:e._u([{key:"default",fn:function(l){return[""!=l.row.Preview?t("el-popover",{staticClass:"popover",attrs:{placement:"top-start",trigger:"hover",width:e.previewWidth},on:{show:function(t){return e.popoverShowed(l.$index,l.row.Preview)}}},[t("el-image",{ref:"image"+l.$index,staticClass:"image",attrs:{fit:"scale-down"}}),t("el-button",{staticClass:"link",attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v(" "+e._s(l.row.Name)+" ")])],1):t("a",[e._v(e._s(l.row.Name))])]}}])}),t("el-table-column",{attrs:{label:"作者","min-width":"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Author))]}}])}),t("el-table-column",{attrs:{label:"大小","min-width":"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Size))]}}])}),t("el-table-column",{attrs:{label:"类型","min-width":"60px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Form))]}}])}),t("el-table-column",{attrs:{label:"风格","min-width":"60px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Style))]}}])}),t("el-table-column",{attrs:{label:"难度","min-width":"60px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Difficulty))]}}])})],1),t("div",{staticClass:"center"},[t("p",[e._v("地图总数："+e._s(this.filteredMaps.length))]),t("p",[e._v("地图库最后更新日期："+e._s(this.lastUpdateTime))])])],1)},s=[],i=(l(4603),l(7566),l(8721),{data(){return{maps:[],searchMapName:"",form:"不限",forms:["不限","原创","移植"],style:"不限",styles:["不限","挑战","休闲"],difficulty:"不限",difficulties:["不限","简单","中等","困难","极难","地狱"],platform:"PC",platforms:["PC","安卓"],lastUpdateTime:"",loading:!0}},computed:{previewWidth(){return.6*window.innerWidth},filteredMaps(){return this.maps.filter((e=>(e.Name.toLowerCase().includes(this.searchMapName.toLowerCase())||e.Author.toLowerCase().includes(this.searchMapName.toLowerCase()))&&e.Platform===this.platform&&("不限"===this.form||e.Form===this.form.toLowerCase())&&("不限"===this.style||e.Style===this.style.toLowerCase())&&("不限"===this.difficulty||e.Difficulty===this.difficulty.toLowerCase())))}},mounted(){this.getSpeedruns()},methods:{async getSpeedruns(){const e=new Headers({"X-LC-Id":"3Dec7Zyj4zLNDU0XukGcAYEk-gzGzoHsz","X-LC-Key":"uHF3AdKD4i3RqZB7w1APiFRF","Content-Type":"application/json"}),t={method:"GET",headers:e};let l={order:"Name",keys:"Name,Author,Platform,Url,Size,Form,Style,Difficulty,Preview,-createdAt,-objectId"};const a=`https://3dec7zyj.lc-cn-n1-shared.com/1.1/classes/Map?${new URLSearchParams(l)}`,s=await fetch(a,t);this.maps=(await s.json()).results,this.lastUpdateTime=new Date(this.maps.reduce(((e,t)=>e.updatedAt>t.updatedAt?e:t)).updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}),this.loading=!1},popoverShowed(e,t){this.$refs["image"+e].src=t}}}),r=i,o=l(1656),n=(0,o.A)(r,a,s,!1,null,"5480605a",null),u=n.exports},4163:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pendingrun"},[t("el-container",[t("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.speedruns}},[t("el-table-column",{attrs:{label:"玩家","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-tooltip",{attrs:{content:l.row.Country,placement:"top"}},[t("el-image",{staticClass:"flags",staticStyle:{width:"18px",display:"inline-flex","justify-content":"center","text-align":"center",margin:"5px"},attrs:{src:`https://www.speedrun.com/images/flags/${l.row.CountryCode}.png`}})],1),e._v(e._s(l.row.Player)+" ")]}}])}),t("el-table-column",{attrs:{prop:"Category",label:"模式","min-width":"85"}}),t("el-table-column",{attrs:{prop:"Platform",label:"游戏平台"}}),t("el-table-column",{attrs:{prop:"Time",label:"时间","min-width":"100"}}),t("el-table-column",{attrs:{label:"视频地址"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-link",{attrs:{href:l.row.VideoURL,target:"_blank"}},[e._v(e._s(l.row.VideoPlatform))])]}}])})],1)],1)],1)},s=[],i=(l(4603),l(7566),l(8721),{data(){return{speedruns:[],countries:new Map([["cn","中国"],["us","美国"],["in","印度"]])}},created(){window.addEventListener("resize",this.freshTable)},mounted(){this.getSpeedruns()},methods:{async getSpeedruns(){const e=new Headers({"X-LC-Id":"3Dec7Zyj4zLNDU0XukGcAYEk-gzGzoHsz","X-LC-Key":"uHF3AdKD4i3RqZB7w1APiFRF","Content-Type":"application/json"}),t={method:"GET",headers:e};let l={keys:"Player,UID,Category,TotalTime,Platform,Time,VideoPlatform,VID,CountryCode,-createdAt,-updatedAt,-objectId"};const a="https://3dec7zyj.lc-cn-n1-shared.com/1.1/classes/PendingRun?"+new URLSearchParams(l),s=await fetch(a,t);this.speedruns=(await s.json()).results,this.speedruns.forEach((e=>{switch(e.Country=this.countries.get(e.CountryCode),e.VideoPlatform){case"哔哩哔哩":e.VideoURL=`https://www.bilibili.com/video/${e.VID}`,e.PlayerURL=`https://space.bilibili.com/${e.UID}`;break;case"YouTube":e.VideoURL=`https://www.youtube.com/watch?v=${e.VID}`,e.PlayerURL=`https://www.youtube.com/@${e.UID}`;break;default:break}}))},freshTable(){this.$nextTick((()=>{this.$refs.table.doLayout()}))}}}),r=i,o=l(1656),n=(0,o.A)(r,a,s,!1,null,null,null),u=n.exports},7573:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("el-dialog",{attrs:{title:e.dialogTitle,visible:e.showDialog}},[t("div",[e._v(" 在审核通过后，您的速通将会出现在排行榜中。 "),t("br"),e._v(" 您可以在待审核页面查看您的速通是否处于审核中。 ")]),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showDialog=!1}}},[e._v("确定")])],1)]),t("el-form",{ref:"speedrun",attrs:{"hide-required-asterisk":!0,model:e.speedrun,rules:e.rules,"label-position":"top"}},[t("el-form-item",{attrs:{label:"模式"}},[t("el-select",{staticStyle:{width:"100%"},model:{value:e.speedrun.Category,callback:function(t){e.$set(e.speedrun,"Category",t)},expression:"speedrun.Category"}},e._l(e.categories,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"游戏平台"}},[t("el-select",{staticStyle:{width:"100%"},model:{value:e.speedrun.Platform,callback:function(t){e.$set(e.speedrun,"Platform",t)},expression:"speedrun.Platform"}},e._l(e.platforms,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"国家"}},[t("el-select",{staticStyle:{width:"100%"},model:{value:e.speedrun.CountryCode,callback:function(t){e.$set(e.speedrun,"CountryCode",t)},expression:"speedrun.CountryCode"}},e._l(e.countryCodes,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"视频平台"}},[t("el-select",{staticStyle:{width:"100%"},on:{change:e.changeVideoPlatform},model:{value:e.speedrun.VideoPlatform,callback:function(t){e.$set(e.speedrun,"VideoPlatform",t)},expression:"speedrun.VideoPlatform"}},e._l(e.videoPlatforms,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:e.videoIDName,prop:"VID",rules:[{required:!0,message:`${this.videoIDName}不能为空`,trigger:"blur"}]}},[t("el-input",{attrs:{placeholder:`请输入${e.videoIDName}`},model:{value:e.speedrun.VID,callback:function(t){e.$set(e.speedrun,"VID",t)},expression:"speedrun.VID"}})],1),t("el-form-item",{attrs:{label:"玩家（可选）"}},[t("el-input",{attrs:{placeholder:"请输入玩家名字（仅供审核查看，通过后会改成视频平台用户名）"},model:{value:e.speedrun.Player,callback:function(t){e.$set(e.speedrun,"Player",t)},expression:"speedrun.Player"}})],1),t("el-form-item",{attrs:{label:"时间",prop:"Time"}},[t("div",{staticClass:"flex"},[t("el-input",{staticClass:"stretch",on:{input:e.limitMin},model:{value:e.speedrun.Minute,callback:function(t){e.$set(e.speedrun,"Minute",e._n(t))},expression:"speedrun.Minute"}}),t("a",{staticClass:"minWidth"},[e._v("分")]),t("el-input",{staticClass:"stretch",on:{input:e.limitSecond},model:{value:e.speedrun.Second,callback:function(t){e.$set(e.speedrun,"Second",e._n(t))},expression:"speedrun.Second"}}),t("a",{staticClass:"minWidth"},[e._v(".")]),t("el-input",{staticClass:"stretch",on:{input:e.limitMillionSecond},model:{value:e.speedrun.MillionSecond,callback:function(t){e.$set(e.speedrun,"MillionSecond",e._n(t))},expression:"speedrun.MillionSecond"}}),t("a",{staticClass:"minWidth"},[e._v("秒")])],1)]),t("el-form-item",[t("div",{staticClass:"flex"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitRun("speedrun")}}},[e._v("提交")])],1)])],1)],1)},s=[],i={data(){return{showDialog:!1,dialogTitle:"提交成功！",speedrun:{Category:"Glitchless",Platform:"PC",VideoPlatform:"哔哩哔哩",VID:"",Player:"",CountryCode:"cn",Minute:"",Second:"",MillionSecond:"",TotalTime:0},rules:{Time:{validator:this.checkTime,message:"时间不能为空",trigger:"blur",type:Boolean}},videoIDName:"哔哩哔哩视频链接（或BV号）",categories:[{value:"Glitchless",label:"Glitchless"},{value:"Snake",label:"Snake"}],platforms:[{value:"PC",label:"PC"},{value:"Android",label:"安卓"},{value:"IOS",label:"IOS"}],videoPlatforms:[{value:"哔哩哔哩",label:"哔哩哔哩"},{value:"YouTube",label:"YouTube"}],countryCodes:[{value:"cn",label:"中国"}]}},mounted(){},methods:{async createRun(e){const t=new Headers({"X-LC-Id":"3Dec7Zyj4zLNDU0XukGcAYEk-gzGzoHsz","X-LC-Key":"uHF3AdKD4i3RqZB7w1APiFRF","Content-Type":"application/json"}),l={method:"POST",headers:t,body:JSON.stringify(e)},a="https://3dec7zyj.lc-cn-n1-shared.com/1.1/classes/PendingRun",s=await fetch(a,l),i=await s.json();console.log(i)},submitRun(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;{let e=!1;switch(this.speedrun.VideoPlatform){case"哔哩哔哩":this.speedrun.VID.split("/").forEach((t=>{t.startsWith("BV")&&(e=!0,this.speedrun.VID=t)}));break;case"YouTube":this.speedrun.VID.includes("watch?v=")&&this.speedrun.VID.split("/").forEach((t=>{t.startsWith("watch?v=")&&(e=!0,this.speedrun.VID=t.substring(8,t.length))}));break}if(!e)return void alert(`输入的${this.videoIDName}有误，请重新检查。`);this.speedrun.TotalTime=60*this.speedrun.Minute+this.speedrun.Second+this.speedrun.MillionSecond/1e3,this.speedrun.Time=`${this.speedrun.Minute>0?`${this.speedrun.Minute}分`:""}${this.speedrun.Second.toString().padStart(2,"0")}.${this.speedrun.MillionSecond.toString().padStart(3,"0")}秒`,this.createRun(this.speedrun),this.showDialog=!0,this.dialogTitle="提交成功！"}}))},limitMin(e){this.speedrun.Minute=Number(e.replace(/[^\d]/g,"")),e>99?this.speedrun.Minute=99:e<0&&(this.speedrun.Minute=0)},limitSecond(e){this.speedrun.Second=Number(e.replace(/[^\d]/g,"")),e>59?this.speedrun.Second=59:e<0&&(this.speedrun.Second=0)},limitMillionSecond(e){this.speedrun.MillionSecond=Number(e.replace(/[^\d]/g,"")),e>999?this.speedrun.MillionSecond=999:e<0&&(this.speedrun.MillionSecond=0)},changeVideoPlatform(){switch(console.log(this.speedrun.VideoPlatform),this.speedrun.VideoPlatform){case"哔哩哔哩":this.videoIDName="哔哩哔哩视频链接（或BV号）";break;case"YouTube":this.videoIDName="YouTube视频链接";break}},checkTime(e,t,l){if(this.speedrun.Minute.length<=0||this.speedrun.Second.length<=0||this.speedrun.MillionSecond.length<=0)return l(new Error("时间不能为空"));l()}}},r=i,o=l(1656),n=(0,o.A)(r,a,s,!1,null,"7f87840f",null),u=n.exports},7009:function(e,t,l){e.exports=l.p+"img/GOILauncher.9035ad88.png"}}]);
//# sourceMappingURL=about.db20a8af.js.map