(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1741a65f"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,o[1](c)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Wave/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"013a":function(e,t,o){e.exports=o.p+"img/logo.01e5b5fc.png"},"034f":function(e,t,o){"use strict";var n=o("85ec"),a=o.n(n);a.a},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Wave Logo",contain:"",src:o("013a"),transition:"scale-transition",width:"40",router:""}})],1),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",staticStyle:{"font-size":"4 rem"},attrs:{alt:"Wave Name",contain:"","min-width":"100",width:"400"}},[e._v(" HowdyWave ")])],1),n("v-spacer"),n("v-btn",{attrs:{href:"http://zoomutils.com",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("Check out Zoom Utils")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},r=[],s={name:"App",components:{},data:()=>({})},i=s,l=(o("034f"),o("2877")),c=o("6544"),u=o.n(c),m=o("7496"),d=o("40dc"),v=o("8336"),f=o("132d"),g=o("adda"),p=o("f6c4"),h=o("2fa4"),b=Object(l["a"])(i,a,r,!1,null,null,null),w=b.exports;u()(b,{VApp:m["a"],VAppBar:d["a"],VBtn:v["a"],VIcon:f["a"],VImg:g["a"],VMain:p["a"],VSpacer:h["a"]});var C=o("9483");Object(C["a"])("/Wave/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var k=o("8c4f"),_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{align:"center",justify:"center"}},[o("v-dialog",{attrs:{persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[o("v-btn",e._g(e._b({},"v-btn",a,!1),n),[e._v(" Host a Room ")])]}}]),model:{value:e.hostDialog,callback:function(t){e.hostDialog=t},expression:"hostDialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[e._v("Create Room")]),o("v-card-text",[e._v("Create a room to receive questions")]),o("v-text-field",{attrs:{label:"Room Name",placeholder:"Create Room Here",outlined:"","error-messages":this.textCreateRoom.error},model:{value:e.newRoomName,callback:function(t){e.newRoomName=t},expression:"newRoomName"}}),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"error ",text:""},on:{click:function(t){e.hostDialog=!1}}},[e._v("Cancel")]),o("v-btn",{attrs:{color:"success",text:"",disabled:e.cancj},on:{click:function(t){return e.createRoomHandler()}}},[e._v("Create")])],1)],1)],1)],1),o("v-col",{attrs:{align:"center",justify:"center"}},[o("v-dialog",{attrs:{persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[o("v-btn",e._g(e._b({},"v-btn",a,!1),n),[e._v(" Join a Room ")])]}}]),model:{value:e.joinDialog,callback:function(t){e.joinDialog=t},expression:"joinDialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[e._v("Join Room")]),o("v-card-text",[e._v("Ask questions and get your much needed attention.")]),o("v-text-field",{attrs:{label:"Room Name",placeholder:"Enter Room Name Here",outlined:"","error-messages":this.textCreateRoom.error},model:{value:e.newRoomName,callback:function(t){e.newRoomName=t},expression:"newRoomName"}}),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"error ",text:""},on:{click:function(t){e.joinDialog=!1}}},[e._v("Cancel")]),o("v-btn",{attrs:{color:"success",text:"",disabled:e.cancj},on:{click:function(t){return e.joinRoomHandler()}}},[e._v("Join")])],1)],1)],1)],1)],1),o("v-divider",{staticClass:"mt-6"}),o("v-container",e._l(e.rooms,(function(t){return o("v-row",{key:t+"",staticClass:"mt-4",attrs:{align:"center",justify:"center"}},[o("v-btn",{attrs:{text:"",to:"/join/"+t}},[e._v("Join "+e._s(t))])],1)})),1),o("v-snackbar",{attrs:{"multi-line":!0,timeout:"7500"},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[o("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.alert=!1}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertText)+" ")])],1)},x=[],y=o("bc3a"),R=o.n(y);const j="https://howave.herokuapp.com/";var N=o("7e3c").w3cwebsocket,V={name:"Landing",data:()=>({rooms:null,newRoomName:null,hostDialog:!1,joinDialog:!1,textCreateRoom:{},alert:!1,alertText:"No Message",client:null}),computed:{cancj(){return null==this.newRoomName||""==this.newRoomName}},methods:{createRoomHandler(){R.a.get(j+"createRoom?room="+this.newRoomName).then(e=>{console.log(e),e.data.creationStatus?(this.hostDialog=!1,se.push({name:"Host",params:{room:this.newRoomName}})):this.customAlert("Please try another room name!"),this.newRoomName=null}).catch(e=>{console.log(e)})},joinRoomHandler(){this.initRooms(),this.rooms.includes(this.newRoomName)?(this.joinDialog=!1,this.customAlert("Entering "+this.newRoomName),se.push({name:"Join",params:{room:this.newRoomName}})):this.customAlert(this.newRoomName+"is an invalid room name, Try again!"),this.newRoomName=null},customAlert(e){this.alertText=e,this.alert=!0},initRooms(){R.a.get(j).then(e=>{this.rooms=e.data.rooms}).catch(e=>{console.log(e)})}},mounted(){console.log(this);var e=this;this.initRooms(),e.client=new N("wss://howave.herokuapp.com/","echo-protocol"),e.client.onerror=function(){console.log("Connection Error")},e.client.onopen=function(){console.log("WebSocket Client Connected");var t={room:"General",message:"New User"};e.client.send(JSON.stringify(t))},e.client.onclose=function(){console.log("echo-protocol Client Closed")},e.client.onmessage=function(e){"string"===typeof e.data&&console.log("Received: '"+e.data+"'")}}},S=V,O=o("b0af"),A=o("99d9"),T=o("62ad"),D=o("a523"),H=o("169a"),E=o("ce7e"),J=o("0fd9"),W=o("2db4"),P=o("8654"),L=Object(l["a"])(S,_,x,!1,null,null,null),M=L.exports;u()(L,{VBtn:v["a"],VCard:O["a"],VCardActions:A["a"],VCardText:A["c"],VCardTitle:A["d"],VCol:T["a"],VContainer:D["a"],VDialog:H["a"],VDivider:E["a"],VRow:J["a"],VSnackbar:W["a"],VSpacer:h["a"],VTextField:P["a"]});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("h2",{staticClass:"ms-2"},[e._v("Room "+e._s(e.$route.params.room))]),n("v-switch",{staticClass:"ms-2",attrs:{label:"Wave: "+(e.wave?"on":"off"),disabled:e.messages.length<1},model:{value:e.wave,callback:function(t){e.wave=t},expression:"wave"}}),n("v-btn",{staticClass:"ms-2",on:{click:function(t){e.messages=[],e.wave=!1}}},[e._v("Clear all messages")]),n("v-btn",{staticClass:"ms-2",on:{click:function(t){return e.deleteRoomHandler()}}},[e._v("Delete Room")]),n("v-btn",{staticClass:"ms-2",on:{click:function(t){return e.joinLink()}}},[e._v("Copy join link to Clipboard")])],1),n("v-row",{attrs:{align:"center",justify:"center"}},[e.wave?n("v-col",{attrs:{align:"center",justify:"center",cols:"12",md:"6",lg:"6",xl:"6"}},[n("v-img",{attrs:{src:o("f853"),height:"65vh",contain:!0}})],1):e._e(),n("v-col",{staticClass:"overflow-y-auto",staticStyle:{height:"65vh"},attrs:{align:"center",justify:"center",cols:"12",md:"6",lg:"6",xl:"6"}},[n("v-container",{attrs:{height:"65vh"}},[n("v-row",{attrs:{dense:""}},[e.wave?n("v-col",{attrs:{cols:"12"}},e._l(e.messages,(function(t){return n("v-card",{key:t,staticClass:"mt-4"},[n("v-card-title",{staticClass:"headline"},[e._v(e._s(t.name))]),n("v-card-subtitle",[e._v(e._s(t.message))]),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(o){return e.dismissHandler(t)}}},[e._v("Dismiss")])],1)],1)})),1):e._e()],1)],1)],1)],1),n("v-snackbar",{attrs:{"multi-line":!0,timeout:"7500"},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.alert=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertText)+" ")])],1)},B=[];const F="https://howave.herokuapp.com/";var I=o("7e3c").w3cwebsocket,U={name:"Host",data:()=>({alert:!1,alertText:"No Message",client:null,wave:!1,waveImg:"../images/wave.gif",messages:[]}),methods:{customAlert(e){this.alertText=e,this.alert=!0},getImgUrl(e){return o("de6e")(e)},dismissHandler(e){this.messages=this.messages.filter(t=>t.message!=e.message),this.messages.length<1&&(this.wave=!1)},deleteRoomHandler(){R.a.get(F+"deleteRoom?room="+se.currentRoute.params.room).then(e=>{console.log(e),e.data.deletionStatus?se.push({name:"Landing"}):this.customAlert("Room Deletion Failed")})},joinLink(){navigator.clipboard.writeText(window.location.origin+"/Wave/join/"+se.currentRoute.params.room),this.customAlert("Link Copied")},playWoosh(){var e=new AudioContext;if("running"==e.state){var t=new Audio("woosh.mp3");t.volume=1,t.play()}}},mounted(){var e=this;console.log(this),R.a.get(F).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),e.client=new I("wss://howave.herokuapp.com/","echo-protocol"),e.client.onerror=function(){console.log("Connection Error")},e.client.onopen=function(){console.log("WebSocket Client Connected");var t={};t.room=se.currentRoute.params.room,t.message="Host Connected",e.client.send(JSON.stringify(t))},e.client.onclose=function(){console.log("echo-protocol Client Closed")},e.client.onmessage=function(t){if("string"===typeof t.data){console.log("Received: '"+t.data+"'");var o=JSON.parse(t.data);o.room==se.currentRoute.params.room&&(e.playWoosh(),console.log(o),o.wave?(e.wave=!0,e.customAlert(o.message),e.messages.unshift({name:o.name,message:o.messageText})):e.customAlert(o.message))}}}},q=U,z=o("b73d"),G=Object(l["a"])(q,$,B,!1,null,null,null),Z=G.exports;u()(G,{VBtn:v["a"],VCard:O["a"],VCardActions:A["a"],VCardSubtitle:A["b"],VCardTitle:A["d"],VCol:T["a"],VContainer:D["a"],VImg:g["a"],VRow:J["a"],VSnackbar:W["a"],VSwitch:z["a"]});var K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:""}},[o("h2",[e._v("Room "+e._s(e.$route.params.room))]),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",align:"center",justify:"center",md:"4",lg:"4",xl:"4"}},[o("v-text-field",{attrs:{label:"Name",placeholder:"Enter your name",outlined:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),o("v-col",{attrs:{cols:"12",align:"center",justify:"center",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{label:"Message",placeholder:"Enter your message",outlined:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),o("v-col",{attrs:{cols:"12",justify:"center",md:"2",lg:"2",xl:"6"}},[o("v-btn",{on:{click:function(t){return e.sendWaveHandler()}}},[e._v("Wave Message")])],1)],1),o("v-snackbar",{attrs:{"multi-line":!0,timeout:"7500"},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[o("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.alert=!1}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertText)+" ")])],1)},Q=[];const X="https://howave.herokuapp.com/";var Y=o("7e3c").w3cwebsocket,ee={name:"Join",data:()=>({alert:!1,alertText:"No Message",client:null,name:null,message:null}),methods:{customAlert(e){this.alertText=e,this.alert=!0},sendWaveHandler(){var e={};e.room=se.currentRoute.params.room,e.message=this.name+" said, "+this.message,e.wave=!0,e.name=this.name,e.messageText=this.message,this.client.send(JSON.stringify(e))}},mounted(){var e=this;console.log(this),R.a.get(X).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),e.client=new Y("wss://howave.herokuapp.com/","echo-protocol"),e.client.onerror=function(){console.log("Connection Error")},e.client.onopen=function(){console.log("WebSocket Client Connected");var t={};t.room=se.currentRoute.params.room,t.message="Client Connected",e.client.send(JSON.stringify(t))},e.client.onclose=function(){console.log("echo-protocol Client Closed")},e.client.onmessage=function(t){if("string"===typeof t.data){console.log("Received: '"+t.data+"'");var o=JSON.parse(t.data);o.room==se.currentRoute.params.room&&e.customAlert(o.message)}}}},te=ee,oe=Object(l["a"])(te,K,Q,!1,null,null,null),ne=oe.exports;u()(oe,{VBtn:v["a"],VCol:T["a"],VContainer:D["a"],VRow:J["a"],VSnackbar:W["a"],VTextField:P["a"]}),n["a"].use(k["a"]);const ae=[{path:"/",name:"Landing",component:M},{path:"/host/:room",name:"Host",component:Z,props:!0},{path:"/join/:room",name:"Join",component:ne,props:!0},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],re=new k["a"]({mode:"history",base:"/Wave/",routes:ae});var se=re,ie=o("2f62");n["a"].use(ie["a"]);var le=new ie["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ce=o("f309");n["a"].use(ce["a"]);var ue=new ce["a"]({theme:{themes:{light:{primary:"#500000",secondary:"#f6f6f6",accent:"#998542",error:"#3C0000",success:"#5B6236"}}}});R.a.defaults.baseURL="http://65d6f0cc736b.ngrok.io",R.a.defaults.headers.common["Accept-Language"]=JSON.parse(localStorage.getItem("locale"))||"en",Plugin.install=e=>{e.axios=R.a,window.axios=R.a,Object.defineProperties(e.prototype,{axios:{get(){return R.a}},$axios:{get(){return R.a}}})},n["a"].use(Plugin);Plugin;n["a"].config.productionTip=!1,new n["a"]({router:se,store:le,vuetify:ue,render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,o){},de6e:function(e,t){function o(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id="de6e"},f853:function(e,t,o){e.exports=o.p+"img/wave.72f5d83a.gif"}});
//# sourceMappingURL=app.8bc50e06.js.map