(function(e){function t(t){for(var o,a,l=t[0],c=t[1],s=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],o=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var o={},n={app:0},r=[];function a(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f128b10d"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var t=[],i=n[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,o){i=n[e]=[t,o]}));t.push(i[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(e);var s=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(d);var i=n[e];if(0!==i){if(i){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}n[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(i,o,function(t){return e[t]}.bind(null,o));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"32a2":function(e,t,i){},4230:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Home")},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"inspire"}},[i("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{staticStyle:{height:"48px !important"},attrs:{link:""}},[i("v-list-item-action",[e.$vuetify.theme.dark?i("v-icon",[e._v("mdi-brightness-4")]):i("v-icon",[e._v("mdi-brightness-6")])],1),i("v-list-item-content",[i("v-list-item-title",[i("v-switch",{staticStyle:{"margin-left":"20px"},attrs:{primary:""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1)],1),i("v-list-item",{on:{click:e.openCreateTodoDialog}},[i("v-list-item-action",[(e.$vuetify.theme.dark,i("v-icon",[e._v(" mdi-bell-plus-outline ")]))],1),i("v-list-item-title",[e._v("Create Todo")])],1),i("Filters")],1)],1),i("v-app-bar",{attrs:{app:"","clipped-left":"",color:"navbar_primary",dark:""}},[i("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),i("v-toolbar-title",[e._v("Todo Application")])],1),i("v-content",[i("TodoGrid"),i("v-dialog",{model:{value:e.showCreateTodoDialog,callback:function(t){e.showCreateTodoDialog=t},expression:"showCreateTodoDialog"}},[i("CreateTodo",{on:{close:function(t){e.showCreateTodoDialog=!1}}})],1)],1),i("v-footer",{attrs:{app:""}},[i("span",[e._v("© 2020")])])],1)},l=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v(e._s(e.todo?"Todo Editor":"Todo Constructor"))]),i("v-card-text",[i("v-text-field",{staticStyle:{"margin-top":"10px"},attrs:{color:e.$vuetify.theme.dark?"white":"primary",label:"Name",rules:[e.nameLength],outlined:"",clearable:"",counter:10},model:{value:e.nameModel,callback:function(t){e.nameModel=t},expression:"nameModel"}}),i("v-spacer"),i("v-textarea",{staticStyle:{"margin-top":"10px"},attrs:{color:e.$vuetify.theme.dark?"white":"primary",outlined:"",clearable:""},scopedSlots:e._u([{key:"label",fn:function(){return[i("div",[e._v(" Description "),i("small",[e._v("(optional)")])])]},proxy:!0}]),model:{value:e.descriptionModel,callback:function(t){e.descriptionModel=t},expression:"descriptionModel"}}),i("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between"}},[i("div",{staticStyle:{width:"20px"}}),i("v-menu",{staticStyle:{"margin-top":"500px"},attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"100px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[i("div",{staticStyle:{display:"flex","flex-direction":"row"}},[i("v-text-field",{model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}}),i("v-btn",e._g({attrs:{fab:"",small:"",color:e.$vuetify.theme.dark?"#FF3B82":"#33C1F3"}},o),[i("v-icon",{attrs:{color:"white"}},[e._v(" "+e._s(e.$vuetify.theme.dark?"mdi-clock-outline":"mdi-clock")+" ")])],1)],1)]}}]),model:{value:e.showTimeMenu,callback:function(t){e.showTimeMenu=t},expression:"showTimeMenu"}},[i("div",{staticStyle:{"text-align":"center"}},[i("v-card",[i("date-picker",{attrs:{type:"datetime",inline:!0},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1)],1)])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"grey darken-1",dark:""},on:{click:function(t){return e.$emit("close")}}},[e._v(" Cancel ")]),i("v-btn",{attrs:{color:"green darken-1",disabled:!e.isValidConstructor,dark:e.isValidConstructor},on:{click:e.createTodo}},[e._v(" "+e._s(e.todo?"Edit":"Create")+" ")])],1)],1)},s=[],d=i("ec45"),u=(i("32a2"),{name:"CreateTodo",props:{todo:{type:Object,required:!1,default:null}},components:{DatePicker:d["a"]},data:function(){return{showDateMenu:!1,showTimeMenu:!1,nameModel:"",descriptionModel:"",dateTime:null,isValidConstructor:!0}},created:function(){null!=this.todo&&(this.dateTime=new Date(this.todo.expirationDate))},methods:{createTodo:function(){if(this.$emit("close"),null!=this.dateTime){var e={name:this.nameModel,description:this.descriptionModel,completed:!1,expirationDate:this.dateTime.toLocaleString()};null==this.todo?this.$store.dispatch("addTodo",e):(e.key=this.todo.key,this.$store.dispatch("editTodo",e))}},nameLength:function(e){return null!=e&&e.length>0?e.length<=10?(this.isValidConstructor=!0,!0):(this.isValidConstructor=!1,"Max 10 characters"):(this.isValidConstructor=!0,!0)}}}),f=u,m=i("2877"),p=i("6544"),v=i.n(p),h=i("8336"),b=i("b0af"),y=i("99d9"),g=i("132d"),w=i("e449"),k=i("2fa4"),T=i("8654"),D=i("a844"),x=Object(m["a"])(f,c,s,!1,null,"398817d4",null),O=x.exports;v()(x,{VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VIcon:g["a"],VMenu:w["a"],VSpacer:k["a"],VTextField:T["a"],VTextarea:D["a"]});var C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-list-group",{attrs:{"prepend-icon":e.$vuetify.theme.dark?"mdi-filter-outline":"mdi-filter"},scopedSlots:e._u([{key:"activator",fn:function(){return[i("v-list-item-title",[e._v("Filters")])]},proxy:!0}])},[i("v-list-item",{on:{click:function(t){return e.setFilter(e.filters.filterCompleted)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterCompleted")}})],1),i("v-list-item-title",[e._v("Only Completed")])],1),i("v-list-item",{on:{click:function(t){return e.setFilter(e.filters.filterNotCompleted)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterNotCompleted"),inset:""}})],1),i("v-list-item-title",[e._v("Only Not Completed")])],1),i("v-list-item",{on:{click:function(t){return e.openDialog(e.filters.wrapFilterOnDate)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterOnDate"),inset:""}})],1),i("v-list-item-title",[e._v("On Date")])],1),i("v-list-item",{on:{click:function(t){return e.openDialog(e.filters.wrapFilterBeforeDate)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterBeforeDate"),inset:""}})],1),i("v-list-item-title",[e._v("Before Date")])],1),i("v-list-item",{on:{click:function(t){return e.openDialog(e.filters.wrapFilterAfterDate)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterAfterDate"),inset:""}})],1),i("v-list-item-title",[e._v("After Date")])],1),i("v-list-item",{on:{click:function(t){return e.openDialog(e.filters.wrapFilterInInterval)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterInInterval"),inset:""}})],1),i("v-list-item-title",[e._v("In Interval")])],1),i("v-list-item",{on:{click:function(t){return e.setFilter(e.filters.filterAll)}}},[i("v-list-item-action",[i("v-icon",[e._v("mdi-restart")])],1),i("v-list-item-title",[e._v("All todos")])],1),i("v-dialog",{attrs:{persistent:""},model:{value:"filterSelected"!==e.filterSelected.name&&e.filterSelected.name.length>1,callback:function(t){e.$set("filterSelected"!==e.filterSelected.name&&e.filterSelected.name,"length>1",t)},expression:"filterSelected.name !== 'filterSelected' && filterSelected.name.length>1"}},[i("DateFilterPicker",{attrs:{filter:e.filterSelected},on:{close:function(t){e.filterSelected=function(){}}}})],1)],1)},j=[],_=(i("a4d3"),i("4de4"),i("caad"),i("b0c0"),i("e439"),i("dbb4"),i("b64b"),i("2532"),i("159b"),i("ade3")),S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{"min-width":"wrapFilterInInterval"===e.filter.name?580:320,"max-width":"wrapFilterInInterval"===e.filter.name?580:320}},[i("div",{staticStyle:{"text-align":"center","padding-top":"20px"}},["wrapFilterInInterval"===e.filter.name?i("date-picker",{attrs:{type:"datetime",inline:!0,range:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}):i("date-picker",{attrs:{type:"datetime",inline:!0},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),i("v-card-actions",{staticStyle:{"margin-top":"20px!important"}},[i("v-spacer"),i("v-btn",{attrs:{color:"grey darken-1",dark:""},on:{click:function(t){return e.$emit("close")}}},[e._v(" Cancel ")]),i("v-btn",{attrs:{color:"green darken-1",dark:""},on:{click:function(t){return e.setFilter()}}},[e._v(" Apply ")])],1)],1)},V=[],F=i("2f62"),$=(i("d3b7"),{filterCompleted:{name:"filterCompleted",run:function(e){return null!=e?e.filter((function(e){return e.completed})):[]}},filterNotCompleted:{name:"filterNotCompleted",run:function(e){return null!=e?e.filter((function(e){return!e.completed})):[]}},wrapFilterOnDate:function(e){return e.setHours(0,0,0,0),{name:"filterOnDate",run:function(t){return null!=t?t.filter((function(t){var i=new Date(t.expirationDate);return i.setHours(0,0,0,0),i.getTime()===e.getTime()})):[]}}},wrapFilterBeforeDate:function(e){return{name:"filterBeforeDate",run:function(t){return null!=t?t.filter((function(t){var i=new Date(t.expirationDate);return i.getTime()<e.getTime()})):[]}}},wrapFilterAfterDate:function(e){return{name:"filterAfterDate",run:function(t){return null!=t?t.filter((function(t){var i=new Date(t.expirationDate);return i.getTime()>e.getTime()})):[]}}},wrapFilterInInterval:function(e,t){return{name:"filterInInterval",run:function(i){return i.filter((function(i){var o=new Date(i.expirationDate);return o.getTime()<t.getTime()&&o.getTime()>e.getTime()}))}}},filterAll:function(){}}),I=$,P=function(e){return"filterCompleted"===e?["filterNotCompleted"]:"filterNotCompleted"===e?["filterCompleted"]:"filterBeforeDate"===e||"afterDate"===e?["filterInInterval","filterOnDate"]:"filterInInterval"===e?["filterBeforeDate","filterAfterDate","filterOnDate"]:"filterOnDate"===e?["filterBeforeDate","filterAfterDate","filterInInterval"]:[]};function A(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function E(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?A(Object(i),!0).forEach((function(t){Object(_["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var M={name:"DateFilterPicker",props:{filter:{type:Function,required:!0}},computed:E({},Object(F["b"])(["allFilters"])),data:function(){return{time:[new Date,new Date],filters:E({},I)}},methods:{setFilter:function(){this.$emit("close"),null==this.time.length?this.$store.dispatch("addFilter",this.filter(this.time)):this.$store.dispatch("addFilter",this.filter(this.time[0],this.time[1]))}},components:{DatePicker:d["a"]}},L=M,B=Object(m["a"])(L,S,V,!1,null,null,null),N=B.exports;function H(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?H(Object(i),!0).forEach((function(t){Object(_["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}v()(B,{VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VSpacer:k["a"]});var q={name:"Filters",computed:Y({},Object(F["b"])(["allFilters"])),data:function(){return{onlyCompletedSwitch:!1,onlyNotCompletedSwitch:!1,beforeSwitch:!1,afterSwitch:!1,inIntervalSwitch:!1,allTodos:!0,filterSelected:function(){},filters:Y({},I)}},mounted:function(){var e=this;this.$store.subscribe((function(t,i){e.$forceUpdate()}))},methods:{openDialog:function(e){this.allFilters.includes(e(new Date,new Date).name)?this.$store.dispatch("removeFilter",e(new Date,new Date).name):this.filterSelected=e},setFilter:function(e){this.allFilters.includes(e.name)?this.$store.dispatch("removeFilter",e.name):this.$store.dispatch("addFilter",e)}},components:{DateFilterPicker:N}},G=q,z=(i("c86a"),i("ac7c")),R=i("169a"),J=i("56b0"),U=i("da13"),X=i("1800"),K=i("5d23"),Q=Object(m["a"])(G,C,j,!1,null,null,null),W=Q.exports;v()(Q,{VCheckbox:z["a"],VDialog:R["a"],VIcon:g["a"],VListGroup:J["a"],VListItem:U["a"],VListItemAction:X["a"],VListItemTitle:K["b"]});var Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-row",{staticStyle:{height:"300px","background-color":"transparent"},attrs:{align:e.alignment,justify:e.justify}},e._l(e.filteredTodos,(function(e){return i("TodoCard",{key:e.key,staticStyle:{"margin-left":"10px!important"},attrs:{todo:e}})})),1)],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{color:e.$vuetify.theme.dark?"#424242":"white","max-width":"300","min-width":"300"}},[i("v-card-title",{staticStyle:{"justify-content":"space-between"}},[i("v-btn",{attrs:{icon:""},on:{click:e.toggleTodo}},[e.todo.completed?i("v-avatar",{attrs:{color:"green",size:"48"}},[i("v-icon",{attrs:{color:"white"}},[e._v("mdi-bell-off")])],1):i("v-avatar",{attrs:{color:"red",size:"48"}},[i("v-icon",{attrs:{color:"white"}},[e._v("mdi-bell-ring")])],1)],1),i("span",[e._v(e._s(e.todo.name))]),i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"70%!important","white-space":"nowrap"}},[e._v(" "+e._s(new Date(e.todo.expirationDate).toLocaleDateString())+" ")]),i("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"70%!important"}},[e._v(" "+e._s(new Date(e.todo.expirationDate).toLocaleTimeString())+" ")])])],1),i("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center"}}),i("v-card-actions",[i("div",{staticStyle:{display:"flex","justify-content":"space-between!important",width:"100%"}},[i("v-btn",{attrs:{icon:""},on:{click:function(t){return e.removeTodo(e.todo.key)}}},[e.$vuetify.theme.dark?i("v-icon",[e._v("mdi-delete-outline")]):i("v-icon",[e._v("mdi-delete")])],1),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.showYSlider=!e.showYSlider}}},[i("v-icon",[e._v(e._s(e.showYSlider?"mdi-chevron-up":"mdi-chevron-down"))])],1),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.showCreateTodoDialog=!0}}},[e.$vuetify.theme.dark?i("v-icon",[e._v("mdi-pencil-outline")]):i("v-icon",[e._v("mdi-pencil")])],1),i("v-dialog",{attrs:{"max-width":"600"},model:{value:e.showCreateTodoDialog,callback:function(t){e.showCreateTodoDialog=t},expression:"showCreateTodoDialog"}},[i("CreateTodo",{attrs:{todo:e.todo},on:{close:function(t){e.showCreateTodoDialog=!1}}})],1)],1)]),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showYSlider,expression:"showYSlider"}]},[i("v-card-text",[e._v(" "+e._s(e.todo.description)+" ")])],1)])],1)},ie=[],oe={name:"TodoCard",props:{todo:{type:Object,required:!0}},data:function(){return{showCreateTodoDialog:!1,showYSlider:!1}},methods:{removeTodo:function(){this.$store.dispatch("removeTodo",this.todo.key)},toggleTodo:function(){this.$store.dispatch("toggleTodo",this.todo.key)}},components:{CreateTodo:O}},ne=oe,re=i("8212"),ae=i("0789"),le=Object(m["a"])(ne,te,ie,!1,null,"55b3bb5c",null),ce=le.exports;function se(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function de(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?se(Object(i),!0).forEach((function(t){Object(_["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):se(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}v()(le,{VAvatar:re["a"],VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:R["a"],VExpandTransition:ae["a"],VIcon:g["a"]});var ue={name:"TodoGrid",components:{TodoCard:ce},computed:de({},Object(F["b"])(["filteredTodos"])),data:function(){return{justify:"start",alignment:"start"}}},fe=ue,me=i("62ad"),pe=i("a523"),ve=i("0fd9"),he=Object(m["a"])(fe,Z,ee,!1,null,"7afaac22",null),be=he.exports;v()(he,{VCol:me["a"],VContainer:pe["a"],VRow:ve["a"]});var ye={name:"Home",props:{},data:function(){return{drawer:null,navbar:"#3949AB",showCreateTodoDialog:!1}},mounted:function(){this.$store.dispatch("fetchAllTodos")},watch:{"$vuetify.theme.dark":function(e){this.$store.dispatch("setIsThemeDark",e)}},methods:{openCreateTodoDialog:function(){this.showCreateTodoDialog=!0}},components:{Filters:W,CreateTodo:O,TodoGrid:be}},ge=ye,we=(i("cccb"),i("7496")),ke=i("40dc"),Te=i("5bc1"),De=i("a75b"),xe=i("553a"),Oe=i("8860"),Ce=i("f774"),je=i("b73d"),_e=i("2a7f"),Se=Object(m["a"])(ge,a,l,!1,null,null,null),Ve=Se.exports;v()(Se,{VApp:we["a"],VAppBar:ke["a"],VAppBarNavIcon:Te["a"],VContent:De["a"],VDialog:R["a"],VFooter:xe["a"],VIcon:g["a"],VList:Oe["a"],VListItem:U["a"],VListItemAction:X["a"],VListItemContent:K["a"],VListItemTitle:K["b"],VNavigationDrawer:Ce["a"],VSwitch:je["a"],VToolbarTitle:_e["a"]});var Fe={name:"App",components:{Home:Ve},data:function(){return{}}},$e=Fe,Ie=Object(m["a"])($e,n,r,!1,null,null,null),Pe=Ie.exports,Ae=i("8c4f");o["a"].use(Ae["a"]);var Ee=[{path:"/",name:"home",component:Ve},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],Me=new Ae["a"]({mode:"history",base:"/",routes:Ee}),Le=Me,Be=(i("99af"),i("4fad"),i("3835")),Ne=i("2909"),He=(i("96cf"),i("1da1")),Ye={actions:{fetchAllTodos:function(){var e=Object(He["a"])(regeneratorRuntime.mark((function e(t){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i="http://www.mocky.io/v2/5e0ffeea3500007a001e6871",o=new XMLHttpRequest,o.open("GET",i,!0),o.send(null),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var e=o.responseText,i=JSON.parse(e).todos;t.commit("addTodos",i)}};case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),addTodo:function(e,t){t.key||(t.key=(new Date).getTime()+""),e.commit("addTodos",t)},removeTodo:function(e,t){e.commit("removeTodo",t)},toggleTodo:function(e,t){e.commit("toggleTodo",t)},editTodo:function(e,t){e.commit("editTodo",t)},addFilter:function(e,t){e.commit("addFilter",t)},removeFilter:function(e,t){e.commit("removeFilter",t)}},mutations:{addTodos:function(e,t){e.todos=e.todos.concat(t)},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.key!==t}))},toggleTodo:function(e,t){e.todos.forEach((function(e){e.key===t&&(e.completed=!e.completed)}))},editTodo:function(e,t){e.todos.forEach((function(i,n){i.key===t.key&&o["a"].set(e.todos,n,t)}))},addFilter:function(e,t){"filterAll"===t.name?e.filters=[]:(o["a"].set(e.filters,t.name,t.run),P(t.name).forEach((function(t,i){return o["a"].delete(e.filters,t)})))},removeFilter:function(e,t){o["a"].delete(e.filters,t)}},state:{todos:[],filters:{}},getters:{allTodos:function(e){return e.todos},filteredTodos:function(e){var t=Object(Ne["a"])(e.todos);return Object.entries(e.filters).forEach((function(e){var i=Object(Be["a"])(e,2),o=(i[0],i[1]);t=o(t)})),t},allFilters:function(e){return Object.keys(e.filters)}}},qe={actions:{setIsThemeDark:function(e,t){e.commit("setIsThemeDark",t)}},mutations:{setIsThemeDark:function(e,t){e.isThemeDark=t}},store:{isThemeDark:!1},getters:{isThemeDark:function(e){return e.isThemeDark}}};o["a"].use(F["a"]);var Ge=new F["a"].Store({modules:{todos:Ye,theme:qe}}),ze=i("f309");i("5363");o["a"].use(ze["a"]);var Re=new ze["a"]({icons:{iconfont:["mdi"]},theme:{themes:{light:{navbar_primary:"#00B181"}}}});o["a"].config.productionTip=!1,new o["a"]({router:Le,store:Ge,vuetify:Re,render:function(e){return e(Pe)}}).$mount("#app")},"5bc3":function(e,t,i){},c86a:function(e,t,i){"use strict";var o=i("5bc3"),n=i.n(o);n.a},cccb:function(e,t,i){"use strict";var o=i("4230"),n=i.n(o);n.a}});
//# sourceMappingURL=app.d97aff19.js.map