webpackJsonp([21],{GwaU:function(e,t){},V6E6:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=i("mvHQ"),o=i.n(a),s={name:"device",data:function(){return{optionstype:[],optionsxieyi:[],tableData:[],dialogTableVisible:!1,isedit:!1,deviceName:"",deviceType:"",deviceProtocol:"",currentPage:1,pagesize:2,total:0,id:"",deviceSymbolCode:"",manufactureName:"",hVersion:"",sVersion:"",customerId:"",ratedVol:"",ratedCur:"",accuracy:0,onlineurl:"../../../static/img/3-4.png",offlineurl:"../../../static/img/none.png"}},components:{check:i("0khC").a},methods:{btnselect:function(e){var t=this,i=this;-1!=e&&setTimeout(function(){t.loading.close()},2e3),e.forEach(function(e){e.xinhao=i.signals(e.band,e.csq)}),this.tableData=e},handleTime:function(e){var t=new Date(e),i=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),o=t.getHours(),s=t.getMinutes(),c=t.getSeconds();return n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o),s<10&&(s="0"+s),c<10&&(c="0"+c),i+"-"+n+"-"+a+" "+o+":"+s+":"+c},btnhistory:function(e){this.$router.push({path:"/deviceinformation",query:{id:e.id,deviceid:e.deviceSymbolCode,devicetype:e.deviceType}})},btnreal:function(e){this.$router.push({path:"/realData",query:{id:e.id,deviceid:e.deviceSymbolCode,deviceType:e.deviceType}})},btnRefresh:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",target:document.querySelector(".table"),background:"#ffffff"}),this.$refs.check.getDevice()},getlisttype:function(){var e=this;e.ajax(e.HOST+"/v1/device/deviceTypeAndProtocol",{},function(t){0==t.data.errCode&&(e.optionstype=t.data.data.deviceType,e.optionsxieyi=t.data.data.protocol)},function(e){})},websocket:function(){var e=this;(n=new WebSocket(e.wsocket)).onopen=function(){n.send(o()({userId:$.cookie("userId")}))},n.onmessage=function(t){var i,n=JSON.parse(JSON.parse(t.data).info);if("NETWORKSTATUS"==n.msgType){var a=JSON.parse(n.message);i=n.deviceId,e.tableData.forEach(function(t){t.deviceSymbolCode==i&&(t.xinhao=e.signals(a.band,a.csq))})}},n.onclose=function(){console.log("连接关闭")}}},mounted:function(){this.getlisttype(),this.websocket()},destroyed:function(){n.close()}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shebei"},[n("check",{ref:"check",attrs:{optionsxieyi:e.optionsxieyi,optionstype:e.optionstype},on:{select:e.btnselect}},[n("el-row",[n("el-col",[n("div",{staticClass:"icon",staticStyle:{"text-align":"right","margin-top":"10px","margin-right":"10px","margin-bottom":"10px"}},[n("i",{staticClass:"iconfont icon-shuaxin",on:{click:e.btnRefresh}},[e._v(e._s(e.$t("message.device-12")))]),e._v("  \n          ")])]),e._v(" "),n("el-col",[n("div",{staticStyle:{"margin-left":"10px"}},[n("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[n("el-table-column",{attrs:{label:e.$t("message.device-24"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("message.device-6"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return["online"==e.row.onLine?n("img",{attrs:{src:e.row.xinhao,height:"23",width:"22"}}):n("img",{attrs:{src:i("5ztV"),height:"23",width:"22"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"csq",label:"CSQ",width:"60",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"deviceName",label:e.$t("message.device-1"),align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"deviceSymbolCode",label:e.$t("message.device-4"),align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createTime",label:e.$t("message.device-25"),align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"deviceType",label:e.$t("message.device-2"),align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("message.device-5"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.optionsxieyi,function(i){return t.row.deviceProtocol==i.id?n("span",[e._v(e._s(i.name))]):e._e()})}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"hVersion",label:e.$t("message.device-17"),width:"100",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"sVersion",label:e.$t("message.device-18"),width:"100",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("message.device-20"),width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){e.btnhistory(t.row)}}},[e._v(e._s(e.$t("message.device-21")))]),e._v(" "),n("el-button",{attrs:{type:"text",size:"small",disabled:"online"!=t.row.onLine},on:{click:function(i){e.btnreal(t.row)}}},[e._v(e._s(e.$t("message.device-22")))])]}}])})],1)],1)])],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(s,c,!1,function(e){i("GwaU")},"data-v-5423fee2",null);t.default=l.exports}});