(function(t){function e(e){for(var n,i,l=e[0],c=e[1],s=e[2],d=0,u=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(u.length)u.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},r={app:0},a=[];function l(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-89fe498e":"e06b6ae7"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"chunk-89fe498e":1};i[t]?e.push(i[t]):0!==i[t]&&o[t]&&e.push(i[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-89fe498e":"039462ec"}[t]+".css",r=c.p+n,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var s=a[l],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===r))return e()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){s=u[l],d=s.getAttribute("data-href");if(d===n||d===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete i[t],f.parentNode.removeChild(f),o(a)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=l(t);var u=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"32a2":function(t,e,o){},4230:function(t,e,o){},4361:function(t,e,o){"use strict";o.d(e,"b",(function(){return i}));o("4de4"),o("d3b7");var n={filterCompleted:{name:"filterCompleted",run:function(t){return null!=t?t.filter((function(t){return t.completed})):[]}},filterNotCompleted:{name:"filterNotCompleted",run:function(t){return null!=t?t.filter((function(t){return!t.completed})):[]}},wrapFilterOnDate:function(t){return t.setHours(0,0,0,0),{name:"filterOnDate",run:function(e){return null!=e?e.filter((function(e){var o=new Date(e.expirationDate);return o.setHours(0,0,0,0),o.getTime()===t.getTime()})):[]}}},wrapFilterBeforeDate:function(t){return{name:"filterBeforeDate",run:function(e){return null!=e?e.filter((function(e){var o=new Date(e.expirationDate);return o.getTime()<t.getTime()})):[]}}},wrapFilterAfterDate:function(t){return{name:"filterAfterDate",run:function(e){return null!=e?e.filter((function(e){var o=new Date(e.expirationDate);return o.getTime()>t.getTime()})):[]}}},wrapFilterInInterval:function(t,e){return{name:"filterInInterval",run:function(o){return o.filter((function(o){var n=new Date(o.expirationDate);return n.getTime()<e.getTime()&&n.getTime()>t.getTime()}))}}},filterAll:function(){}};e["a"]=n;var i=function(t){return"filterCompleted"===t?["filterNotCompleted"]:"filterNotCompleted"===t?["filterCompleted"]:"filterBeforeDate"===t||"afterDate"===t?["filterInInterval","filterOnDate"]:"filterInInterval"===t?["filterBeforeDate","filterAfterDate","filterOnDate"]:"filterOnDate"===t?["filterBeforeDate","filterAfterDate","filterInInterval"]:[]}},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("router-view")],1)},r=[],a=o("bb51"),l={name:"App",components:{Home:a["default"]},created:function(){this.$router.push("/authorization")},data:function(){return{}}},c=l,s=o("2877"),d=o("6544"),u=o.n(d),f=o("7496"),m=Object(s["a"])(c,i,r,!1,null,null,null),p=m.exports;u()(m,{VApp:f["a"]});o("d3b7");var v=o("8c4f");n["a"].use(v["a"]);var h=[{path:"/",name:"home",component:function(){return Promise.resolve().then(o.bind(null,"bb51"))}},{path:"/authorization",component:function(){return o.e("chunk-89fe498e").then(o.bind(null,"f1bd"))}}],b=new v["a"]({mode:"history",base:"/",routes:h}),g=b,y=o("2f62"),w=(o("99af"),o("4de4"),o("b0c0"),o("4fad"),o("b64b"),o("159b"),o("3835")),k=o("2909"),T=(o("96cf"),o("1da1")),O=o("4361"),S=o("db49"),x={actions:{fetchAllTodos:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,o){var n=S["a"]+"getAllTodos",i=new XMLHttpRequest;i.open("POST",n,!0),i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.send(JSON.stringify({jwt:e.rootGetters.jwt})),i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var t=i.responseText,n=JSON.parse(t);e.commit("addTodos",n)}else o()}})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getTodosFromLocalStorage:function(t){var e=JSON.parse(localStorage.getItem("todos"));null!=e&&t.commit("addTodos",e)},addTodo:function(t,e){e.key||(e.key=(new Date).getTime()+""),t.commit("addTodos",e)},removeTodo:function(t,e){t.commit("removeTodo",e)},toggleTodo:function(t,e){t.commit("toggleTodo",e)},editTodo:function(t,e){t.commit("editTodo",e)},saveTodosToServer:function(t){return new Promise((function(e,o){var n=S["a"]+"saveTodos",i=new XMLHttpRequest;i.open("POST",n,!0),i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.send(JSON.stringify({jwt:t.rootGetters.jwt,todos:t.getters.allTodos})),i.onreadystatechange=function(){4===i.readyState&&(200===i.status?e():o())}}))},saveTodosToLocalStorage:function(t){localStorage.setItem("todos",JSON.stringify(t.getters.allTodos))},addFilter:function(t,e){t.commit("addFilter",e)},removeFilter:function(t,e){t.commit("removeFilter",e)}},mutations:{setTodos:function(t,e){t.todos=e},addTodos:function(t,e){var o=t.todos;o=o.concat(e);var n=[],i={};for(var r in o){var a=o[r]["key"];i[a]=o[r]}for(var l in i)n.push(i[l]);t.todos=n},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.key!==e}))},toggleTodo:function(t,e){t.todos.forEach((function(t){t.key===e&&(t.completed=!t.completed)}))},editTodo:function(t,e){t.todos.forEach((function(o,i){o.key===e.key&&n["a"].set(t.todos,i,e)}))},addFilter:function(t,e){"filterAll"===e.name?t.filters=[]:(n["a"].set(t.filters,e.name,e.run),Object(O["b"])(e.name).forEach((function(e,o){return n["a"].delete(t.filters,e)})))},removeFilter:function(t,e){n["a"].delete(t.filters,e)}},state:{todos:[],filters:{}},getters:{allTodos:function(t){return t.todos},filteredTodos:function(t){var e=Object(k["a"])(t.todos);return Object.entries(t.filters).forEach((function(t){var o=Object(w["a"])(t,2),n=(o[0],o[1]);e=n(e)})),e},allFilters:function(t){return Object.keys(t.filters)}}},D={actions:{getJWT:function(t,e){return new Promise((function(o,n){var i=S["a"]+"authorize",r=new XMLHttpRequest;r.open("POST",i,!0),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.send(JSON.stringify({name:e.userName,password:e.password})),r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var e=JSON.parse(r.responseText);t.commit("setJWT",{jwt:e.jwt}),o()}else n()}}))}},mutations:{setJWT:function(t,e){t.jwt=e.jwt}},state:{jwt:""},getters:{jwt:function(t){return t.jwt}}};n["a"].use(y["a"]);var j=new y["a"].Store({modules:{jwt:D,todos:x}}),_=o("f309");o("5363");n["a"].use(_["a"]);var C=new _["a"]({icons:{iconfont:["mdi"]},theme:{themes:{light:{navbar_primary:"#00B181"}}}});n["a"].config.productionTip=!1,new n["a"]({router:g,store:j,vuetify:C,render:function(t){return t(p)}}).$mount("#app")},"5bc3":function(t,e,o){},bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{staticStyle:{height:"48px !important"},attrs:{link:""}},[o("v-list-item-action",[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-brightness-4")]):o("v-icon",[t._v("mdi-brightness-6")])],1),o("v-list-item-content",[o("v-list-item-title",[o("v-switch",{staticStyle:{"margin-left":"20px"},attrs:{primary:""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1)],1),o("v-list-item",{staticStyle:{height:"48px !important"},attrs:{link:""},on:{click:t.saveTodosToServer}},[o("v-list-item-action",[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-content-save-move-outline")]):o("v-icon",[t._v("mdi-content-save-move")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Save to server")])],1)],1),o("v-list-item",{staticStyle:{height:"48px !important"},attrs:{link:""},on:{click:t.saveTodosToLocalStorage}},[o("v-list-item-action",[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-content-save-all-outline")]):o("v-icon",[t._v("mdi-content-save-all")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Save to browser")])],1)],1),o("v-list-item",{staticStyle:{height:"48px !important"},attrs:{link:""},on:{click:function(e){return t.$router.push("/authorization")}}},[o("v-list-item-action",[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-account-key-outline")]):o("v-icon",[t._v("mdi-account-key")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Log In")])],1)],1),o("v-list-item",{on:{click:t.openCreateTodoDialog}},[o("v-list-item-action",[(t.$vuetify.theme.dark,o("v-icon",[t._v(" mdi-bell-plus-outline ")]))],1),o("v-list-item-title",[t._v("Create Todo")])],1),o("Filters")],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"navbar_primary",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Todo Application")])],1),o("v-content",[o("TodoGrid"),o("v-dialog",{model:{value:t.showCreateTodoDialog,callback:function(e){t.showCreateTodoDialog=e},expression:"showCreateTodoDialog"}},[o("CreateTodo",{on:{close:function(e){t.showCreateTodoDialog=!1}}})],1)],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2020")])])],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(t._s(t.todo?"Todo Editor":"Todo Constructor"))]),o("v-card-text",[o("v-text-field",{staticStyle:{"margin-top":"10px"},attrs:{color:t.$vuetify.theme.dark?"white":"primary",label:"Name",rules:[t.nameLength],outlined:"",clearable:"",counter:10},model:{value:t.nameModel,callback:function(e){t.nameModel=e},expression:"nameModel"}}),o("v-spacer"),o("v-textarea",{staticStyle:{"margin-top":"10px"},attrs:{color:t.$vuetify.theme.dark?"white":"primary",outlined:"",clearable:""},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v(" Description "),o("small",[t._v("(optional)")])])]},proxy:!0}]),model:{value:t.descriptionModel,callback:function(e){t.descriptionModel=e},expression:"descriptionModel"}}),o("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between"}},[o("div",{staticStyle:{width:"20px"}}),o("v-menu",{staticStyle:{"margin-top":"500px"},attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"100px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("div",{staticStyle:{display:"flex","flex-direction":"row"}},[o("v-text-field",{model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}}),o("v-btn",t._g({attrs:{fab:"",small:"",color:t.$vuetify.theme.dark?"#FF3B82":"#33C1F3"}},n),[o("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(t.$vuetify.theme.dark?"mdi-clock-outline":"mdi-clock")+" ")])],1)],1)]}}]),model:{value:t.showTimeMenu,callback:function(e){t.showTimeMenu=e},expression:"showTimeMenu"}},[o("div",{staticStyle:{"text-align":"center"}},[o("v-card",[o("date-picker",{attrs:{type:"datetime",inline:!0},model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}})],1)],1)])],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"grey darken-1",dark:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),o("v-btn",{attrs:{color:"green darken-1",disabled:!t.isValidConstructor,dark:t.isValidConstructor},on:{click:t.createTodo}},[t._v(" "+t._s(t.todo?"Edit":"Create")+" ")])],1)],1)},a=[],l=(o("a4d3"),o("e01a"),o("b0c0"),o("ec45")),c=(o("32a2"),{name:"CreateTodo",props:{todo:{type:Object,required:!1,default:null}},components:{DatePicker:l["a"]},data:function(){return{showDateMenu:!1,showTimeMenu:!1,nameModel:"",descriptionModel:"",dateTime:null,isValidConstructor:!0}},created:function(){null!=this.todo&&(this.dateTime=new Date(this.todo.expirationDate),this.nameModel=this.todo.name,this.descriptionModel=this.todo.description)},methods:{createTodo:function(){if(this.$emit("close"),null!=this.dateTime){var t={name:this.nameModel,description:this.descriptionModel,completed:!1,expirationDate:this.dateTime.toLocaleString()};null==this.todo?this.$store.dispatch("addTodo",t):(t.key=this.todo.key,this.$store.dispatch("editTodo",t))}},nameLength:function(t){return null!=t&&t.length>0?t.length<=10?(this.isValidConstructor=!0,!0):(this.isValidConstructor=!1,"Max 10 characters"):(this.isValidConstructor=!0,!0)}}}),s=c,d=o("2877"),u=o("6544"),f=o.n(u),m=o("8336"),p=o("b0af"),v=o("99d9"),h=o("132d"),b=o("e449"),g=o("2fa4"),y=o("8654"),w=o("a844"),k=Object(d["a"])(s,r,a,!1,null,"3640d63a",null),T=k.exports;f()(k,{VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VIcon:h["a"],VMenu:b["a"],VSpacer:g["a"],VTextField:y["a"],VTextarea:w["a"]});var O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list-group",{attrs:{"prepend-icon":t.$vuetify.theme.dark?"mdi-filter-outline":"mdi-filter"},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-title",[t._v("Filters")])]},proxy:!0}])},[o("v-list-item",{on:{click:function(e){return t.setFilter(t.filters.filterCompleted)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterCompleted")}})],1),o("v-list-item-title",[t._v("Only Completed")])],1),o("v-list-item",{on:{click:function(e){return t.setFilter(t.filters.filterNotCompleted)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterNotCompleted"),inset:""}})],1),o("v-list-item-title",[t._v("Only Not Completed")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterOnDate)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterOnDate"),inset:""}})],1),o("v-list-item-title",[t._v("On Date")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterBeforeDate)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterBeforeDate"),inset:""}})],1),o("v-list-item-title",[t._v("Before Date")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterAfterDate)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterAfterDate"),inset:""}})],1),o("v-list-item-title",[t._v("After Date")])],1),o("v-list-item",{on:{click:function(e){return t.openDialog(t.filters.wrapFilterInInterval)}}},[o("v-list-item-action",[o("v-checkbox",{attrs:{"off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle","input-value":this.allFilters.includes("filterInInterval"),inset:""}})],1),o("v-list-item-title",[t._v("In Interval")])],1),o("v-list-item",{on:{click:function(e){return t.setFilter(t.filters.filterAll)}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-restart")])],1),o("v-list-item-title",[t._v("All todos")])],1),o("v-dialog",{attrs:{persistent:""},model:{value:"filterSelected"!==t.filterSelected.name&&t.filterSelected.name.length>1,callback:function(e){t.$set("filterSelected"!==t.filterSelected.name&&t.filterSelected.name,"length>1",e)},expression:"filterSelected.name !== 'filterSelected' && filterSelected.name.length>1"}},[o("DateFilterPicker",{attrs:{filter:t.filterSelected},on:{close:function(e){t.filterSelected=function(){}}}})],1)],1)},S=[],x=(o("4de4"),o("caad"),o("e439"),o("dbb4"),o("b64b"),o("2532"),o("159b"),o("ade3")),D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{"min-width":"wrapFilterInInterval"===t.filter.name?580:320,"max-width":"wrapFilterInInterval"===t.filter.name?580:320}},[o("div",{staticStyle:{"text-align":"center","padding-top":"20px"}},["wrapFilterInInterval"===t.filter.name?o("date-picker",{attrs:{type:"datetime",inline:!0,range:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):o("date-picker",{attrs:{type:"datetime",inline:!0},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),o("v-card-actions",{staticStyle:{"margin-top":"20px!important"}},[o("v-spacer"),o("v-btn",{attrs:{color:"grey darken-1",dark:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),o("v-btn",{attrs:{color:"green darken-1",dark:""},on:{click:function(e){return t.setFilter()}}},[t._v(" Apply ")])],1)],1)},j=[],_=o("2f62"),C=o("4361");function F(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function V(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?F(Object(o),!0).forEach((function(e){Object(x["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var P={name:"DateFilterPicker",props:{filter:{type:Function,required:!0}},computed:V({},Object(_["b"])(["allFilters"])),data:function(){return{time:[new Date,new Date],filters:V({},C["a"])}},methods:{setFilter:function(){this.$emit("close"),null==this.time.length?this.$store.dispatch("addFilter",this.filter(this.time)):this.$store.dispatch("addFilter",this.filter(this.time[0],this.time[1]))}},components:{DatePicker:l["a"]}},$=P,I=Object(d["a"])($,D,j,!1,null,null,null),A=I.exports;function E(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function L(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?E(Object(o),!0).forEach((function(e){Object(x["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}f()(I,{VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VSpacer:g["a"]});var M={name:"Filters",computed:L({},Object(_["b"])(["allFilters"])),data:function(){return{onlyCompletedSwitch:!1,onlyNotCompletedSwitch:!1,beforeSwitch:!1,afterSwitch:!1,inIntervalSwitch:!1,allTodos:!0,filterSelected:function(){},filters:L({},C["a"])}},mounted:function(){var t=this;this.$store.subscribe((function(e,o){t.$forceUpdate()}))},methods:{openDialog:function(t){this.allFilters.includes(t(new Date,new Date).name)?this.$store.dispatch("removeFilter",t(new Date,new Date).name):this.filterSelected=t},setFilter:function(t){this.allFilters.includes(t.name)?this.$store.dispatch("removeFilter",t.name):this.$store.dispatch("addFilter",t)}},components:{DateFilterPicker:A}},N=M,B=(o("c86a"),o("ac7c")),J=o("169a"),q=o("56b0"),H=o("da13"),z=o("1800"),R=o("5d23"),G=Object(d["a"])(N,O,S,!1,null,null,null),Y=G.exports;f()(G,{VCheckbox:B["a"],VDialog:J["a"],VIcon:h["a"],VListGroup:q["a"],VListItem:H["a"],VListItemAction:z["a"],VListItemTitle:R["b"]});var U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticStyle:{height:"300px","background-color":"transparent"},attrs:{align:t.alignment,justify:t.justify}},t._l(t.filteredTodos,(function(t){return o("TodoCard",{key:t.key,staticStyle:{"margin-left":"10px!important"},attrs:{todo:t}})})),1)],1)],1)],1)},W=[],X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.$vuetify.theme.dark?"#424242":"white","max-width":"300","min-width":"300"}},[o("v-card-title",{staticStyle:{"justify-content":"space-between"}},[o("v-btn",{attrs:{icon:""},on:{click:t.toggleTodo}},[t.todo.completed?o("v-avatar",{attrs:{color:"green",size:"48"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-bell-off")])],1):o("v-avatar",{attrs:{color:"red",size:"48"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-bell-ring")])],1)],1),o("span",[t._v(t._s(t.todo.name))]),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"70%!important","white-space":"nowrap"}},[t._v(" "+t._s(new Date(t.todo.expirationDate).toLocaleDateString())+" ")]),o("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"70%!important"}},[t._v(" "+t._s(new Date(t.todo.expirationDate).toLocaleTimeString())+" ")])])],1),o("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center"}}),o("v-card-actions",[o("div",{staticStyle:{display:"flex","justify-content":"space-between!important",width:"100%"}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.removeTodo(t.todo.key)}}},[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-delete-outline")]):o("v-icon",[t._v("mdi-delete")])],1),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showYSlider=!t.showYSlider}}},[o("v-icon",[t._v(t._s(t.showYSlider?"mdi-chevron-up":"mdi-chevron-down"))])],1),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showCreateTodoDialog=!0}}},[t.$vuetify.theme.dark?o("v-icon",[t._v("mdi-pencil-outline")]):o("v-icon",[t._v("mdi-pencil")])],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.showCreateTodoDialog,callback:function(e){t.showCreateTodoDialog=e},expression:"showCreateTodoDialog"}},[o("CreateTodo",{attrs:{todo:t.todo},on:{close:function(e){t.showCreateTodoDialog=!1}}})],1)],1)]),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showYSlider,expression:"showYSlider"}]},[o("v-card-text",[t._v(" "+t._s(t.todo.description)+" ")])],1)])],1)},K=[],Q={name:"TodoCard",props:{todo:{type:Object,required:!0}},data:function(){return{showCreateTodoDialog:!1,showYSlider:!1}},methods:{removeTodo:function(){this.$store.dispatch("removeTodo",this.todo.key)},toggleTodo:function(){this.$store.dispatch("toggleTodo",this.todo.key)}},components:{CreateTodo:T}},Z=Q,tt=o("8212"),et=o("0789"),ot=Object(d["a"])(Z,X,K,!1,null,"55b3bb5c",null),nt=ot.exports;function it(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function rt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?it(Object(o),!0).forEach((function(e){Object(x["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):it(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}f()(ot,{VAvatar:tt["a"],VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:J["a"],VExpandTransition:et["a"],VIcon:h["a"]});var at={name:"TodoGrid",components:{TodoCard:nt},computed:rt({},Object(_["b"])(["filteredTodos"])),data:function(){return{justify:"start",alignment:"start"}}},lt=at,ct=o("62ad"),st=o("a523"),dt=o("0fd9"),ut=Object(d["a"])(lt,U,W,!1,null,"7afaac22",null),ft=ut.exports;f()(ut,{VCol:ct["a"],VContainer:st["a"],VRow:dt["a"]});var mt={name:"Home",props:{},data:function(){return{drawer:null,navbar:"#3949AB",showCreateTodoDialog:!1}},created:function(){this.$store.dispatch("getTodosFromLocalStorage")},methods:{openCreateTodoDialog:function(){this.showCreateTodoDialog=!0},saveTodosToServer:function(){var t=this;this.$store.dispatch("saveTodosToServer").then((function(){return alert("Successfully saved")})).catch((function(){var e=confirm("Error saving. Do you want to authorize?");e&&t.$router.push("/authorization")}))},saveTodosToLocalStorage:function(){this.$store.dispatch("saveTodosToLocalStorage").then((function(){return alert("Successfully saved")})).catch((function(){alert("Error saving")}))}},components:{Filters:Y,CreateTodo:T,TodoGrid:ft}},pt=mt,vt=(o("cccb"),o("40dc")),ht=o("5bc1"),bt=o("a75b"),gt=o("553a"),yt=o("8860"),wt=o("f774"),kt=o("b73d"),Tt=o("2a7f"),Ot=Object(d["a"])(pt,n,i,!1,null,null,null);e["default"]=Ot.exports;f()(Ot,{VAppBar:vt["a"],VAppBarNavIcon:ht["a"],VContent:bt["a"],VDialog:J["a"],VFooter:gt["a"],VIcon:h["a"],VList:yt["a"],VListItem:H["a"],VListItemAction:z["a"],VListItemContent:R["a"],VListItemTitle:R["b"],VNavigationDrawer:wt["a"],VSwitch:kt["a"],VToolbarTitle:Tt["a"]})},c86a:function(t,e,o){"use strict";var n=o("5bc3"),i=o.n(n);i.a},cccb:function(t,e,o){"use strict";var n=o("4230"),i=o.n(n);i.a},db49:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n="https://todos-vue-nodejs.herokuapp.com/"}});
//# sourceMappingURL=app.5ce1623e.js.map