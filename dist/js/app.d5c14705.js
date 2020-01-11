(function(t){function e(e){for(var i,a,l=e[0],c=e[1],s=e[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=o[0]))}return t}var i={},r={app:0},n=[];function a(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f128b10d"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,i){o=r[t]=[e,i]}));e.push(o[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(t);var s=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(o,i,function(e){return t[e]}.bind(null,i));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=s;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"32a2":function(t,e,o){},4230:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Home")},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{staticStyle:{height:"48px !important"},attrs:{link:""}},[o("v-list-item-action",[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-brightness-4")]):o("v-icon",[t._v("mdi-brightness-6")])],1),o("v-list-item-content",[o("v-list-item-title",[o("v-switch",{staticStyle:{"margin-left":"20px"},attrs:{primary:""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1)],1),o("v-list-item",{on:{click:t.openCreateTodoDialog}},[o("v-list-item-action",[(t.$vuetify.theme.dark,o("v-icon",[t._v(" mdi-bell-plus-outline ")]))],1),o("v-list-item-title",[t._v("Create Todo")])],1),o("Filters")],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"navbar_primary",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Todo Application")])],1),o("v-content",[o("TodoGrid"),o("v-dialog",{model:{value:t.showCreateTodoDialog,callback:function(e){t.showCreateTodoDialog=e},expression:"showCreateTodoDialog"}},[o("CreateTodo",{on:{close:function(e){t.showCreateTodoDialog=!1}}})],1)],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2020")])])],1)},l=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(t._s(t.todo?"Todo Editor":"Todo Constructor"))]),o("v-card-text",[o("v-text-field",{staticStyle:{"margin-top":"10px"},attrs:{color:t.$vuetify.theme.dark?"white":"primary",label:"Name",rules:[t.nameLength],outlined:"",clearable:"",counter:10},model:{value:t.nameModel,callback:function(e){t.nameModel=e},expression:"nameModel"}}),o("v-spacer"),o("v-textarea",{staticStyle:{"margin-top":"10px"},attrs:{color:t.$vuetify.theme.dark?"white":"primary",outlined:"",clearable:""},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v(" Description "),o("small",[t._v("(optional)")])])]},proxy:!0}]),model:{value:t.descriptionModel,callback:function(e){t.descriptionModel=e},expression:"descriptionModel"}}),o("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between"}},[o("div",{staticStyle:{width:"20px"}}),o("v-menu",{staticStyle:{"margin-top":"500px"},attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"100px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[o("div",{staticStyle:{display:"flex","flex-direction":"row"}},[o("v-text-field",{model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}}),o("v-btn",t._g({attrs:{fab:"",small:"",color:t.$vuetify.theme.dark?"#FF3B82":"#33C1F3"}},i),[o("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(t.$vuetify.theme.dark?"mdi-clock-outline":"mdi-clock")+" ")])],1)],1)]}}]),model:{value:t.showTimeMenu,callback:function(e){t.showTimeMenu=e},expression:"showTimeMenu"}},[o("div",{staticStyle:{"text-align":"center"}},[o("v-card",[o("date-picker",{attrs:{type:"datetime",inline:!0},model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}})],1)],1)])],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"grey darken-1",dark:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),o("v-btn",{attrs:{color:"green darken-1",disabled:!t.isValidConstructor,dark:t.isValidConstructor},on:{click:t.createTodo}},[t._v(" "+t._s(t.todo?"Edit":"Create")+" ")])],1)],1)},s=[],d=o("ec45"),u=(o("32a2"),{name:"CreateTodo",props:{todo:{type:Object,required:!1,default:null}},components:{DatePicker:d["a"]},data:function(){return{showDateMenu:!1,showTimeMenu:!1,nameModel:"",descriptionModel:"",dateTime:null,isValidConstructor:!0}},methods:{createTodo:function(){if(this.$emit("close"),null!=this.dateTime){var t={name:this.nameModel,description:this.descriptionModel,completed:!1,expirationDate:this.dateTime.toLocaleString()};null==this.todo?this.$store.dispatch("addTodo",t):(t.key=this.todo.key,this.$store.dispatch("editTodo",t))}},nameLength:function(t){return null!=t&&t.length>0?t.length<=10?(this.isValidConstructor=!0,!0):(this.isValidConstructor=!1,"Max 10 characters"):(this.isValidConstructor=!0,!0)}}}),f=u,p=o("2877"),m=o("6544"),v=o.n(m),h=o("8336"),b=o("b0af"),y=o("99d9"),w=o("132d"),g=o("e449"),k=o("2fa4"),T=o("8654"),O=o("a844"),x=Object(p["a"])(f,c,s,!1,null,"27531efa",null),D=x.exports;v()(x,{VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VIcon:w["a"],VMenu:g["a"],VSpacer:k["a"],VTextField:T["a"],VTextarea:O["a"]});var C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list-group",{attrs:{"prepend-icon":t.$vuetify.theme.dark?"mdi-filter-outline":"mdi-filter"},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-title",[t._v("Filters")])]},proxy:!0}])},[o("v-list-item",{on:{click:function(e){return t.setFilter(t.filters.filterCompleted)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.hasOwnProperty("filterCompleted")}})],1),o("v-list-item-title",[t._v("Only Completed")])],1),o("v-list-item",{on:{click:function(e){return t.setFilter(t.filters.filterNotCompleted)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.hasOwnProperty("filterNotCompleted"),inset:""}})],1),o("v-list-item-title",[t._v("Only Not Completed")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterOnDate)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.hasOwnProperty("filterOnDate"),inset:""}})],1),o("v-list-item-title",[t._v("On Date")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterBeforeDate)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.hasOwnProperty("filterBeforeDate"),inset:""}})],1),o("v-list-item-title",[t._v("Before Date")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterAfterDate)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.hasOwnProperty("filterAfterDate"),inset:""}})],1),o("v-list-item-title",[t._v("After Date")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterInInterval)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.hasOwnProperty("filterInInterval"),inset:""}})],1),o("v-list-item-title",[t._v("In Interval")])],1),o("v-list-item",{on:{click:function(e){return t.setFilter(t.filters.filterAll)}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-restart")])],1),o("v-list-item-title",[t._v("All todos")])],1),o("v-dialog",{attrs:{persistent:""},model:{value:"filterSelected"!==t.filterSelected.name&&t.filterSelected.name.length>1,callback:function(e){t.$set("filterSelected"!==t.filterSelected.name&&t.filterSelected.name,"length>1",e)},expression:"filterSelected.name !== 'filterSelected' && filterSelected.name.length>1"}},[o("DateFilterPicker",{attrs:{type:t.filterSelected},on:{close:function(e){t.filterSelected=function(){}}}})],1)],1)},j=[],_=(o("a4d3"),o("4de4"),o("b0c0"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{"min-width":"wrapFilterInInterval"===t.type.name?580:320,"max-width":"wrapFilterInInterval"===t.type.name?580:320}},[o("div",{staticStyle:{"text-align":"center","padding-top":"20px"}},["wrapFilterInInterval"===t.type.name?o("date-picker",{attrs:{type:"datetime",inline:!0,range:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):o("date-picker",{attrs:{type:"datetime",inline:!0},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),o("v-card-actions",{staticStyle:{"margin-top":"20px!important"}},[o("v-spacer"),o("v-btn",{attrs:{color:"grey darken-1",dark:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),o("v-btn",{attrs:{color:"green darken-1",dark:""},on:{click:function(e){return t.setFilter()}}},[t._v(" Apply ")])],1)],1)},V=[],F=o("2f62"),P=(o("d3b7"),{filterCompleted:function(t){return null!=t?t.filter((function(t){return t.completed})):[]},filterNotCompleted:function(t){return null!=t?t.filter((function(t){return!t.completed})):[]},wrapFilterOnDate:function(t){return t.setHours(0,0,0,0),function(e){return null!=e?e.filter((function(e){var o=new Date(e.expirationDate);return o.setHours(0,0,0,0),o.getTime()===t.getTime()})):[]}},wrapFilterBeforeDate:function(t){return function(e){return null!=e?e.filter((function(e){var o=new Date(e.expirationDate);return o.getTime()<t.getTime()})):[]}},wrapFilterAfterDate:function(t){return function(e){return null!=e?e.filter((function(e){var o=new Date(e.expirationDate);return o.getTime()>t.getTime()})):[]}},wrapFilterInInterval:function(t,e){return function(o){return o.filter((function(o){var i=new Date(o.expirationDate);return i.getTime()<e.getTime()&&i.getTime()>t.getTime()}))}},filterAll:function(){}}),$=P,I=function(t,e){return"filterCompleted"===t?["filterNotCompleted"]:"filterNotCompleted"===t?["filterCompleted"]:"filterBeforeDate"===t||"afterDate"===t?["filterInInterval","filterOnDate"]:"filterInInterval"===t?["filterBeforeDate","filterAfterDate","filterOnDate"]:"filterOnDate"===t?["filterBeforeDate","filterAfterDate","filterInInterval"]:[]};function A(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function E(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?A(Object(o),!0).forEach((function(e){Object(_["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var M={name:"DateFilterPicker",props:{type:{type:Function,required:!0}},computed:E({},Object(F["b"])(["allFilters"])),data:function(){return{date:"",local:"en-US",time:[new Date,new Date],filters:E({},$)}},methods:{setFilter:function(){this.$emit("close"),this.allFilters.hasOwnProperty(this.type.name)||(null==this.time.length?this.$store.dispatch("addFilter",this.type(this.time)):this.$store.dispatch("addFilter",this.type(this.time[0],this.time[1])))}},components:{DatePicker:d["a"]}},L=M,B=Object(p["a"])(L,S,V,!1,null,null,null),N=B.exports;function H(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function Y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?H(Object(o),!0).forEach((function(e){Object(_["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):H(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}v()(B,{VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VSpacer:k["a"]});var q={name:"Filters",computed:Y({},Object(F["b"])(["allFilters"])),data:function(){return{onlyCompletedSwitch:!1,onlyNotCompletedSwitch:!1,beforeSwitch:!1,afterSwitch:!1,inIntervalSwitch:!1,allTodos:!0,filterSelected:function(){},filters:Y({},$)}},mounted:function(){},methods:{openDialog:function(t){this.allFilters.hasOwnProperty(t(new Date,new Date).name)?this.$store.dispatch("removeFilter",t(new Date,new Date).name):this.filterSelected=t},setFilter:function(t){this.allFilters.hasOwnProperty(t.name)?this.$store.dispatch("removeFilter",t.name):this.$store.dispatch("addFilter",t)}},components:{DateFilterPicker:N}},G=q,z=(o("c86a"),o("ac7c")),R=o("169a"),J=o("56b0"),U=o("da13"),X=o("1800"),K=o("5d23"),Q=Object(p["a"])(G,C,j,!1,null,null,null),W=Q.exports;v()(Q,{VCheckbox:z["a"],VDialog:R["a"],VIcon:w["a"],VListGroup:J["a"],VListItem:U["a"],VListItemAction:X["a"],VListItemTitle:K["b"]});var Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticStyle:{height:"300px","background-color":"transparent"},attrs:{align:t.alignment,justify:t.justify}},t._l(t.filteredTodos,(function(t){return o("TodoCard",{key:t.key,staticStyle:{"margin-left":"10px!important"},attrs:{todo:t}})})),1)],1)],1)],1)},tt=[],et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.$vuetify.theme.dark?"#424242":"white","max-width":"300","min-width":"300"}},[o("v-card-title",{staticStyle:{"justify-content":"space-between"}},[o("v-btn",{attrs:{icon:""},on:{click:t.toggleTodo}},[t.todo.completed?o("v-avatar",{attrs:{color:"green",size:"48"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-bell-off")])],1):o("v-avatar",{attrs:{color:"red",size:"48"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-bell-ring")])],1)],1),o("span",[t._v(t._s(t.todo.name))]),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"70%!important","white-space":"nowrap"}},[t._v(" "+t._s(new Date(t.todo.expirationDate).toLocaleDateString())+" ")]),o("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"70%!important"}},[t._v(" "+t._s(new Date(t.todo.expirationDate).toLocaleTimeString())+" ")])])],1),o("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center"}}),o("v-card-actions",[o("div",{staticStyle:{display:"flex","justify-content":"space-between!important",width:"100%"}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.removeTodo(t.todo.key)}}},[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-delete-outline")]):o("v-icon",[t._v("mdi-delete")])],1),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showYSlider=!t.showYSlider}}},[o("v-icon",[t._v(t._s(t.showYSlider?"mdi-chevron-up":"mdi-chevron-down"))])],1),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showCreateTodoDialog=!0}}},[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-pencil-outline")]):o("v-icon",[t._v("mdi-pencil")])],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.showCreateTodoDialog,callback:function(e){t.showCreateTodoDialog=e},expression:"showCreateTodoDialog"}},[o("CreateTodo",{attrs:{todo:t.todo},on:{close:function(e){t.showCreateTodoDialog=!1}}})],1)],1)]),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showYSlider,expression:"showYSlider"}]},[o("v-card-text",[t._v(" "+t._s(t.todo.description)+" ")])],1)])],1)},ot=[],it={name:"TodoCard",props:{todo:{type:Object,required:!0}},data:function(){return{showCreateTodoDialog:!1,showYSlider:!1}},methods:{removeTodo:function(){this.$store.dispatch("removeTodo",this.todo.key)},toggleTodo:function(){this.$store.dispatch("toggleTodo",this.todo.key)}},components:{CreateTodo:D}},rt=it,nt=o("8212"),at=o("0789"),lt=Object(p["a"])(rt,et,ot,!1,null,"55b3bb5c",null),ct=lt.exports;function st(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function dt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?st(Object(o),!0).forEach((function(e){Object(_["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):st(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}v()(lt,{VAvatar:nt["a"],VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:R["a"],VExpandTransition:at["a"],VIcon:w["a"]});var ut={name:"TodoGrid",components:{TodoCard:ct},computed:dt({},Object(F["b"])(["filteredTodos"])),data:function(){return{justify:"start",alignment:"start"}}},ft=ut,pt=o("62ad"),mt=o("a523"),vt=o("0fd9"),ht=Object(p["a"])(ft,Z,tt,!1,null,"7afaac22",null),bt=ht.exports;v()(ht,{VCol:pt["a"],VContainer:mt["a"],VRow:vt["a"]});var yt={name:"Home",props:{},data:function(){return{drawer:null,navbar:"#3949AB",showCreateTodoDialog:!1}},mounted:function(){this.$store.dispatch("fetchAllTodos")},watch:{"$vuetify.theme.dark":function(t){this.$store.dispatch("setIsThemeDark",t)}},methods:{openCreateTodoDialog:function(){setThemeToCalendar(this.$vuetify.theme.dark),this.showCreateTodoDialog=!0}},components:{Filters:W,CreateTodo:D,TodoGrid:bt}},wt=yt,gt=(o("cccb"),o("7496")),kt=o("40dc"),Tt=o("5bc1"),Ot=o("a75b"),xt=o("553a"),Dt=o("8860"),Ct=o("f774"),jt=o("b73d"),_t=o("2a7f"),St=Object(p["a"])(wt,a,l,!1,null,null,null),Vt=St.exports;v()(St,{VApp:gt["a"],VAppBar:kt["a"],VAppBarNavIcon:Tt["a"],VContent:Ot["a"],VDialog:R["a"],VFooter:xt["a"],VIcon:w["a"],VList:Dt["a"],VListItem:U["a"],VListItemAction:X["a"],VListItemContent:K["a"],VListItemTitle:K["b"],VNavigationDrawer:Ct["a"],VSwitch:jt["a"],VToolbarTitle:_t["a"]});var Ft={name:"App",components:{Home:Vt},data:function(){return{}}},Pt=Ft,$t=Object(p["a"])(Pt,r,n,!1,null,null,null),It=$t.exports,At=o("8c4f");i["a"].use(At["a"]);var Et=[{path:"/",name:"home",component:Vt},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Mt=new At["a"]({mode:"history",base:"/",routes:Et}),Lt=Mt,Bt=(o("99af"),o("4fad"),o("3835")),Nt=o("2909"),Ht=(o("96cf"),o("1da1")),Yt={actions:{fetchAllTodos:function(){var t=Object(Ht["a"])(regeneratorRuntime.mark((function t(e){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o="http://www.mocky.io/v2/5e0ffeea3500007a001e6871",i=new XMLHttpRequest,i.open("GET",o,!0),i.send(null),i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var t=i.responseText,o=JSON.parse(t).todos;e.commit("addTodos",o)}};case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addTodo:function(t,e){e.key||(e.key=(new Date).getTime()+""),t.commit("addTodos",e)},removeTodo:function(t,e){t.commit("removeTodo",e)},toggleTodo:function(t,e){t.commit("toggleTodo",e)},editTodo:function(t,e){t.commit("editTodo",e)},addFilter:function(t,e){t.commit("addFilter",e)},removeFilter:function(t,e){t.commit("removeFilter",e)}},mutations:{addTodos:function(t,e){t.todos=t.todos.concat(e)},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.key!==e})),console.log(t.todos)},toggleTodo:function(t,e){t.todos.forEach((function(t){t.key===e&&(t.completed=!t.completed)}))},editTodo:function(t,e){t.todos.forEach((function(o,r){o.key===e.key&&i["a"].set(t.todos,r,e)}))},addFilter:function(t,e){"filterAll"===e.name?t.filters=[]:(i["a"].set(t.filters,e.name,e),I(e.name,t.filters).forEach((function(e,o){return i["a"].delete(t.filters,e)})))},removeFilter:function(t,e){i["a"].delete(t.filters,e)}},state:{todos:[],filters:{}},getters:{allTodos:function(t){return t.todos},filteredTodos:function(t){var e=Object(Nt["a"])(t.todos);return Object.entries(t.filters).forEach((function(t){var o=Object(Bt["a"])(t,2),i=(o[0],o[1]);e=i(e)})),e},allFilters:function(t){return t.filters}}},qt={actions:{setIsThemeDark:function(t,e){t.commit("setIsThemeDark",e)}},mutations:{setIsThemeDark:function(t,e){t.isThemeDark=e}},store:{isThemeDark:!1},getters:{isThemeDark:function(t){return t.isThemeDark}}};i["a"].use(F["a"]);var Gt=new F["a"].Store({modules:{todos:Yt,theme:qt}}),zt=o("f309");o("5363");i["a"].use(zt["a"]);var Rt=new zt["a"]({icons:{iconfont:["mdi"]},theme:{themes:{light:{navbar_primary:"#00B181"}}}});i["a"].config.productionTip=!1,new i["a"]({router:Lt,store:Gt,vuetify:Rt,render:function(t){return t(It)}}).$mount("#app")},"5bc3":function(t,e,o){},c86a:function(t,e,o){"use strict";var i=o("5bc3"),r=o.n(i);r.a},cccb:function(t,e,o){"use strict";var i=o("4230"),r=o.n(i);r.a}});
//# sourceMappingURL=app.d5c14705.js.map