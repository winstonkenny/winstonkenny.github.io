webpackJsonp([26],{sKgY:function(t,e){},tALi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group"},[a("el-row",[a("el-col",[a("div",{staticClass:"icon",staticStyle:{"text-align":"right","margin-top":"20px","margin-right":"10px","margin-bottom":"10px"}},[a("i",{staticClass:"iconfont icon-zengjia"},[t._v("新增群组")]),t._v("  \n\t\t\t\t"),a("i",{staticClass:"iconfont icon-shuaxin"},[t._v("刷新")]),t._v("  \n\t\t\t")])])],1),t._v(" "),a("el-row",[a("el-col",[a("div",{staticStyle:{"margin-left":"10px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"groupname",label:"群组名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"groupid",label:"群组ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"number",label:"设备数"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.btncheck(e.row)}}},[t._v("查看")])]}}])})],1)],1)])],1)],1)},staticRenderFns:[]};var l=a("VU/8")({data:function(){return{tableData:[{groupname:"分担",groupid:"10001",number:5}]}},methods:{btncheck:function(t){this.$router.push({path:"/grouptab/"+t.id})}}},n,!1,function(t){a("sKgY")},"data-v-175e8992",null);e.default=l.exports}});