webpackJsonp([23],{"5cPk":function(e,t){},HUwS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=a("mvHQ"),n=a.n(s),o={name:"device",data:function(){return{deviceId:"",IdFromFind:"",value:"",inpname:"",inpnum:"",selstatus:"",seltype:"",selxieyi:"",inpdate:"",inpcontact:"",options:[{id:"0",status:this.$t("message.dashboard-21")},{id:"1",status:this.$t("message.dashboard-22")}],optionstype:[],optionsxieyi:[],valuedate:"",valuecontact:"",tableData:[],dialogTableVisible:!1,isedit:!1,deviceName:"",deviceProtocol:"",currentPage:1,pagesize:100,total:0,id:"",deviceSymbolCode:"",deviceType:"",deviceTypeData:[{id:"MT61GP-2P",value:"MT61GP-2P"},{id:"MT61GP-4P",value:"MT61GP-4P"},{id:"AD/H1MGC63-2P",value:"AD/H1MGC63-2P"},{id:"AD/H1MGC80-4P",value:"AD/H1MGC80-4P"},{id:"AD/R2/NB-NP",value:"AD/R2/NB-NP"},{id:"AD/R2/GPRS-NP",value:"AD/R2/GPRS-NP"}],manufactureName:"",rate:"",rateData:[],onlineurl:"../../../static/img/3-4.png",offlineurl:"../../../static/img/none.png",estimateEnable:!1,standardQuantity:"",standardPower:"",correctionValue:"",groupname:"",groupId:"",group:[{id:$.cookie("groupId"),groupName:this.$t("message.user-13")}],grouparr:[]}},components:{check:a("0khC").a},methods:{btnselect:function(e){var t=this,a=this;-1!=e&&setTimeout(function(){t.loading.close()},2e3),e.forEach(function(e){e.xinhao=a.signals(e.band,e.csq)}),this.tableData=e},btnedit:function(e,t){this.dialogTableVisible=!0,this.isedit=!0,this.id=t.id,this.deviceName=t.deviceName,this.deviceProtocol=t.deviceProtocol,this.manufactureName=t.manufactureName,this.rate=t.rate,this.groupId=t.groupId,this.deviceSymbolCode=t.deviceSymbolCode,this.deviceId=t.deviceSymbolCode,this.deviceType=t.deviceType,this.getConfigData()},inpblur:function(){this.checknumber()},btnsure:function(){var e=this;return!!this.checknumber()&&(this.deviceSymbolCode&&this.deviceName&&this.rate?(e.isedit?e.ajax(e.HOST+"/v1/device/addOrUpdate",{deviceName:e.deviceName,userId:$.cookie("userId"),id:e.id,deviceSymbolCode:e.deviceSymbolCode,manufactureName:e.manufactureName,rate:e.rate,groupId:e.groupId?e.groupId:"",deviceType:e.deviceType},function(t){0==t.data.errCode?(e.$message({message:e.$t("message.devicemanage-6"),type:"success"}),e.dialogTableVisible=!1,e.$refs.check.getDevice()):e.$message.error(e.$t("message.devicemanage-7"))},function(e){}):e.ajax(e.HOST+"/v1/device/addOrUpdate",{deviceName:e.deviceName,userId:$.cookie("userId"),deviceSymbolCode:e.deviceSymbolCode,manufactureName:e.manufactureName,rate:e.rate,groupId:e.groupId?e.groupId:"",deviceType:e.deviceType},function(t){0==t.data.errCode?(e.$message({message:e.$t("message.devicetype-12"),type:"success"}),e.dialogTableVisible=!1,e.$refs.check.getDevice()):20006==t.data.errCode?e.$message.error(e.$t("message.devicemanage-13")):e.$message.error(e.$t("message.devicemanage-14"))},function(e){}),void e.ajax(e.HOST+"/v1/estimate/config/addOrUpdate",{correctionValue:e.correctionValue,deviceId:e.deviceId,estimateEnable:e.estimateEnable,id:e.isedit?e.IdFromFind:"",standardPower:e.standardPower,standardQuantity:e.standardQuantity},function(t){0==t.data.errCode&&(e.$message({message:e.$t("message.devicemanage-6"),type:"success"}),e.correctionValue="",e.estimateEnable=!1,e.standardQuantity="",e.standardPower="",e.dialogTableVisible=!1,e.$refs.check.getDevice())},function(e){})):(e.$message({showClose:!0,message:e.$t("message.devicemanage-5"),type:"warning"}),!1))},btndel:function(e,t,a){this.del(this.HOST+"/v1/device/delete",{id:t.id},e,a)},close:function(){this.deviceName="",this.deviceProtocol="",this.groupId="",this.deviceSymbolCode="",this.manufactureName="",this.rate="",this.deviceType=""},btndeploy:function(e){this.$router.push({path:"/devicedeploy",query:{id:e.id,deviceid:e.deviceSymbolCode,devicetype:e.deviceType}})},btnadd:function(){this.dialogTableVisible=!0,this.isedit=!1},btnRefresh:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",target:document.querySelector(".table"),background:"#ffffff"}),this.$refs.check.getDevice()},checknumber:function(){return!0},getlisttype:function(){var e=this;e.ajax(e.HOST+"/v1/device/deviceTypeAndProtocol",{},function(t){0==t.data.errCode&&(e.optionstype=t.data.data.deviceType,e.optionsxieyi=t.data.data.protocol)},function(e){})},getRateList:function(){var e=this;e.ajax(e.HOST+"/v1/device/rate/findAll",{},function(t){0==t.data.errCode&&(e.rateData=t.data.data)},function(e){})},getConfigData:function(){var e=this;e.ajax(e.HOST+"/v1/estimate/config/find",{deviceId:e.deviceId},function(t){0==t.data.errCode&&(e.estimateEnable=t.data.data.estimateEnable,e.standardQuantity=t.data.data.standardQuantity,e.standardPower=t.data.data.standardPower,e.correctionValue=t.data.data.correctionValue,e.IdFromFind=t.data.data.id)},function(e){})},getgrouplist:function(){var e=this;this.ajax(e.HOST+"/v1/sys/group/findAll",{currentPage:1,rows:100,id:$.cookie("groupId")},function(t){0==t.data.errCode&&(t.data.data.forEach(function(t){e.grouparr[t.id]=t.groupName}),e.grouparr[$.cookie("groupId")]=$.cookie("groupName"),e.group=e.group.concat(t.data.data))},function(e){})},websocket:function(){var e=this;(i=new WebSocket(e.wsocket)).onopen=function(){i.send(n()({userId:$.cookie("userId")}))},i.onmessage=function(t){var a,i=JSON.parse(JSON.parse(t.data).info);if("NETWORKSTATUS"==i.msgType){var s=JSON.parse(i.message);a=i.deviceId,e.tableData.forEach(function(t){t.deviceSymbolCode==a&&(t.xinhao=e.signals(s.band,s.csq))})}},i.onclose=function(){console.log("连接关闭")}}},mounted:function(){this.getgrouplist(),this.getlisttype(),this.getRateList(),this.websocket()},destroyed:function(){i.close()}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shebei"},[i("check",{ref:"check",attrs:{optionsxieyi:e.optionsxieyi,optionstype:e.optionstype},on:{select:e.btnselect}},[i("el-row",[i("el-col",[i("div",{staticClass:"icon",staticStyle:{"text-align":"right","margin-top":"10px","margin-right":"10px","margin-bottom":"10px"}},[i("i",{staticClass:"iconfont icon-daoru",on:{click:e.btnadd}},[e._v(e._s(e.$t("message.devicemanage-1")))]),e._v("  \n          "),i("i",{staticClass:"iconfont icon-daochu"},[e._v(e._s(e.$t("message.devicemanage-2")))]),e._v("  \n          "),i("i",{staticClass:"iconfont icon-shuaxin",on:{click:e.btnRefresh}},[e._v(e._s(e.$t("message.device-12")))]),e._v("  \n        ")])]),e._v(" "),i("el-col",[i("div",{staticStyle:{"margin-left":"10px"}},[i("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[i("el-table-column",{attrs:{label:e.$t("message.device-24"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("message.device-6"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return["online"==e.row.onLine?i("img",{attrs:{src:e.row.xinhao,height:"23",width:"22"}}):i("img",{attrs:{src:a("5ztV"),height:"23",width:"22"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"csq",label:"CSQ",width:"60",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceName",label:e.$t("message.device-1"),align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceSymbolCode",label:e.$t("message.device-4"),align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceType",label:e.$t("message.menu-12")}}),e._v(" "),i("el-table-column",{attrs:{prop:"rate",label:e.$t("message.devicemanage-9"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.rateData,function(a){return t.row.rate==a.id?i("span",[e._v(e._s(a.name))]):e._e()})}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceProtocol",label:e.$t("message.device-5"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.optionsxieyi,function(a){return t.row.deviceProtocol==a.id?i("span",[e._v(e._s(a.name))]):e._e()})}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("message.devicemanage-10"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.ratedVol)+"V")])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("message.devicemanage-11"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.ratedCur)+"A")])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"hVersion",label:e.$t("message.device-17"),width:"100",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"sVersion",label:e.$t("message.device-18"),width:"100",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("message.device-20"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.btnedit(t.index,t.row)}}},[e._v(e._s(e.$t("message.devicemanage-0")))]),e._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.btndeploy(t.row)}}},[e._v(e._s(e.$t("message.menu-30")))]),e._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.btndel(t.$index,t.row,e.tableData)}}},[e._v(e._s(e.$t("message.devicetype-3")))])]}}])})],1)],1)])],1),e._v(" "),i("el-dialog",{attrs:{title:e.$t("message.devicemanage-4"),visible:e.dialogTableVisible,width:"35%"},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[i("div",{staticClass:"info"},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n          "+e._s(e.$t("message.device-1"))+":\n        ")]),e._v(" "),i("el-input",{staticClass:"dialog",attrs:{placeholder:e.$t("message.device-11"),size:"mini"},model:{value:e.deviceName,callback:function(t){e.deviceName=t},expression:"deviceName"}})],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info",staticStyle:{position:"relative"}},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n          "+e._s(e.$t("message.device-4"))+":\n        ")]),e._v(" "),i("el-input",{staticClass:"dialog",attrs:{placeholder:e.$t("message.devicemanage-12"),size:"mini",required:!0,disabled:e.isedit,maxlength:15,minlength:1},on:{blur:e.inpblur},model:{value:e.deviceSymbolCode,callback:function(t){e.deviceSymbolCode=t},expression:"deviceSymbolCode"}})],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info",staticStyle:{position:"relative"}},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n          "+e._s(e.$t("message.device-31"))+":\n        ")]),e._v(" "),i("el-select",{staticClass:"dialog",attrs:{placeholder:e.$t("message.devicemanage-18"),size:"mini"},model:{value:e.deviceType,callback:function(t){e.deviceType=t},expression:"deviceType"}},e._l(e.deviceTypeData,function(e){return i("el-option",{key:e.id,attrs:{label:e.value,value:e.value}})}))],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info"},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n          "+e._s(e.$t("message.devicemanage-9"))+":\n        ")]),e._v(" "),i("el-select",{staticClass:"dialog",attrs:{placeholder:e.$t("message.device-10"),size:"mini"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}},e._l(e.rateData,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info"},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n          "+e._s(e.$t("message.user-7"))+":\n        ")]),e._v(" "),i("el-select",{staticClass:"dialog",attrs:{filterable:"",placeholder:e.$t("message.historyalarm-0"),size:"mini","value-key":"id"},model:{value:e.groupId,callback:function(t){e.groupId=t},expression:"groupId"}},e._l(e.group,function(e){return i("el-option",{key:e.id,attrs:{label:e.groupName,value:e.id}})}))],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info",staticStyle:{position:"relative"}},[i("p",[e._v("\n          "+e._s(e.$t("message.deviceinformation-75"))+":\n        ")]),e._v(" "),i("el-checkbox",{staticClass:"dialog",staticStyle:{"text-align":"left"},model:{value:e.estimateEnable,callback:function(t){e.estimateEnable=t},expression:"estimateEnable"}})],1),e._v(" "),i("br"),e._v(" "),1==e.estimateEnable?i("div",[i("div",{staticClass:"info",staticStyle:{position:"relative"}},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n            "+e._s(e.$t("message.deviceinformation-76"))+":\n          ")]),e._v(" "),i("el-input-number",{staticClass:"dialog",attrs:{placeholder:e.$t("message.devicemanage-12"),size:"mini",required:!0,precision:0,step:1,min:0,"controls-position":"right"},model:{value:e.standardQuantity,callback:function(t){e.standardQuantity=t},expression:"standardQuantity"}})],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info",staticStyle:{position:"relative"}},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n            "+e._s(e.$t("message.deviceinformation-77"))+":\n          ")]),e._v(" "),i("el-input-number",{staticClass:"dialog",attrs:{placeholder:e.$t("message.devicemanage-12"),size:"mini",required:!0,precision:2,step:.01,min:0,"controls-position":"right"},model:{value:e.standardPower,callback:function(t){e.standardPower=t},expression:"standardPower"}})],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"info",staticStyle:{position:"relative"}},[i("p",[i("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("\n            "+e._s(e.$t("message.deviceinformation-78"))+":\n          ")]),e._v(" "),i("el-input-number",{staticClass:"dialog",attrs:{placeholder:e.$t("message.devicemanage-12"),size:"mini",required:!0,precision:2,step:.01,"controls-position":"right"},model:{value:e.correctionValue,callback:function(t){e.correctionValue=t},expression:"correctionValue"}})],1),e._v(" "),i("br")]):e._e(),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v(e._s(e.$t("message.devicetype-4")))]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.btnsure}},[e._v(e._s(e.$t("message.devicetype-8")))])],1)])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(e){a("5cPk")},"data-v-4ab3547a",null);t.default=l.exports}});