(function(){var e={3390:function(e,t,n){"use strict";var r=n(9669),a=n.n(r);t["Z"]=a().create({baseURL:"http://localhost:8081",headers:{"Content-type":"application/json"}})},504:function(e,t,n){"use strict";var r=n(9963),a=n(6252),o=n(3577);const s={id:"app"},i={class:"navbar navbar-expand navbar-dark bg-dark"},u=(0,a.Uk)("TFG"),l={class:"navbar-nav mr-auto"},c={class:"nav-item"},d=(0,a.Uk)("Comunicacións"),m={key:0,class:"navbar-nav ml-auto"},p={class:"nav-item"},g=(0,a.Uk)(" Rexistrarse "),f={class:"nav-item"},h=(0,a.Uk)(" Acceder "),v={key:1,class:"navbar-nav ml-auto"},b={class:"nav-item"},y={class:"nav-item"},w=(0,a.Uk)(" Sair "),k={class:"container mt-3"};function _(e,t,n,_,O,E){const C=(0,a.up)("router-link"),A=(0,a.up)("font-awesome-icon"),S=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("nav",i,[(0,a.Wm)(C,{to:"/",class:"navbar-brand"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("div",l,[(0,a._)("li",c,[E.currentUser?((0,a.wg)(),(0,a.j4)(C,{key:0,to:"/comms",class:"nav-link"},{default:(0,a.w5)((()=>[d])),_:1})):(0,a.kq)("",!0)])]),E.currentUser?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("li",p,[(0,a.Wm)(C,{to:"/register",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{icon:"user-plus"}),g])),_:1})]),(0,a._)("li",f,[(0,a.Wm)(C,{to:"/login",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{icon:"sign-in-alt"}),h])),_:1})])])),E.currentUser?((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("li",b,[(0,a.Wm)(C,{to:"/profile",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{icon:"user"}),(0,a.Uk)(" "+(0,o.zw)(E.currentUser.username),1)])),_:1})]),(0,a._)("li",y,[(0,a._)("a",{class:"nav-link",onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>E.logOut&&E.logOut(...e)),["prevent"]))},[(0,a.Wm)(A,{icon:"sign-out-alt"}),w])])])):(0,a.kq)("",!0)]),(0,a._)("div",k,[(0,a.Wm)(S)])])}n(6699);var O={computed:{currentUser(){return this.$store.state.auth.user},showAdminBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},E=n(3744);const C=(0,E.Z)(O,[["render",_]]);var A=C,S=n(2119);const I={class:"container"},D={class:"jumbotron"},R={class:"botonera"},T=["onClick"],F={class:"jumbotron"},P=["innerHTML"];function j(e,t,n,r,s,i){return(0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("header",D,[(0,a._)("h3",null,(0,o.zw)(s.datos.cabecera),1)]),(0,a._)("div",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.datos.menus,((e,t)=>((0,a.wg)(),(0,a.iD)("button",{key:t,class:"btn-secondary",onClick:n=>i.mostrar(e,t)},(0,o.zw)(e),9,T)))),128))]),(0,a._)("body",F,[(0,a._)("div",{innerHTML:s.datos.content},null,8,P)])])}var M={name:"Home",data(){return{datos:{cabecera:"",menus:["Qué é isto?","Para quén está deseñado","Documentación"],saludos:["Hola","Ola","Bojour","Hello","Gütten","Ni Hao"],content:""}}},mounted(){this.nuevoSaludo()},methods:{nuevoSaludo(){var e=Math.floor(6*Math.random());this.datos.cabecera=this.datos.saludos[e]},mostrar(e,t){switch(this.nuevoSaludo(),t){case 0:this.datos.content='<h1 style="text-align:center; background-color:#CCD6A6">Qué é isto?</h1><div class="jumbotron" style="background-color:#F7EDDB;text-align:center"><p>Isto é unha aplicación que permite enviar e recibir mensaxes de forma instantánea.</p><p>Foi creada para o traballo de fin de grao do curso 2020-2021 por Daniel Gómez Rodríguez</p><p>Para comezar o seu uso, acceda ao punto de menú "Comunicacións" no menú superior da páxina</p><p>(Se non o vé, ten que iniciar sesión no sistema)</p></div>';break;case 2:this.datos.content='<a href="docs/TFG_DOCUMENTACION.pdf" target="_blank">ligazón da documentación do TFG</a>';break;default:this.datos.content='<h1 style="text-align:center; background-color:#CCD6A6">Para quén se fixo?</h1><div class="jumbotron" style="background-color:#F7EDDB;text-align:center"><p>Esta aplicación está pensada para alguén que teña interese en introducirse no mundo da informática, ofrecendo unha aplicación sinxela e persoalizable.</p></div>';break}}}};const N=(0,E.Z)(M,[["render",j]]);var L=N,U=n.p+"img/login.ea31521b.png";const x=e=>((0,a.dD)("data-v-3daa4e5b"),e=e(),(0,a.Cn)(),e),W={class:"col-md-12"},B={class:"card card-container"},q=x((()=>(0,a._)("img",{class:"imgPortada",id:"profile-img",src:U},null,-1))),$={class:"form-group"},Z=x((()=>(0,a._)("label",{for:"username"},"Nome de usuario",-1))),G={class:"form-group"},z=x((()=>(0,a._)("label",{for:"password"},"Contrasinal",-1))),H={class:"form-group"},J=["disabled"],K={class:"spinner-border spinner-border-sm"},Y=x((()=>(0,a._)("span",null,"Acceder",-1))),Q={class:"form-group"},X={key:0,class:"alert alert-danger",role:"alert"};function V(e,t,n,s,i,u){const l=(0,a.up)("Field"),c=(0,a.up)("ErrorMessage"),d=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",B,[q,(0,a.Wm)(d,{onSubmit:u.handleLogin,"validation-schema":i.schema},{default:(0,a.w5)((()=>[(0,a._)("div",$,[Z,(0,a.Wm)(l,{name:"username",type:"text",class:"form-control"}),(0,a.Wm)(c,{name:"username",class:"error-feedback alert-danger"})]),(0,a._)("div",G,[z,(0,a.Wm)(l,{name:"password",type:"password",class:"form-control"}),(0,a.Wm)(c,{name:"password",class:"error-feedback alert-danger"})]),(0,a._)("div",H,[(0,a._)("button",{class:"btn btn-primary btn-block",disabled:i.loading},[(0,a.wy)((0,a._)("span",K,null,512),[[r.F8,i.loading]]),Y],8,J)]),(0,a._)("div",Q,[i.message?((0,a.wg)(),(0,a.iD)("div",X,(0,o.zw)(i.message),1)):(0,a.kq)("",!0)])])),_:1},8,["onSubmit","validation-schema"])])])}var ee=n(2954),te=n(4231),ne={name:"Login",components:{Form:ee.l0,Field:ee.gN,ErrorMessage:ee.Bc},data(){const e=te.Ry().shape({username:te.Z_().required("CAMPO OBRIGATORIO"),password:te.Z_().required("CAMPO OBRIGATORIO")});return{loading:!1,message:"",schema:e}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin(e){this.loading=!0,this.$store.dispatch("auth/login",e).then((()=>{this.$router.push("/profile")}),(e=>{this.loading=!1,this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};const re=(0,E.Z)(ne,[["render",V],["__scopeId","data-v-3daa4e5b"]]);var ae=re,oe=n.p+"img/register.6f76fe50.png";const se={class:"col-md-12"},ie={class:"card card-container"},ue=(0,a._)("img",{id:"profile-img",src:oe,class:"profile-img-card",style:{height:"50%",width:"50%",display:"flex","align-self":"center",filter:"saturate(3)"}},null,-1),le={key:0},ce={class:"form-group"},de=(0,a._)("label",{for:"username"},"Nome de usuario",-1),me={class:"form-group"},pe=(0,a._)("label",{for:"password"},"Contrasinal",-1),ge={class:"form-group"},fe=["disabled"],he={class:"spinner-border spinner-border-sm"},ve=(0,a.Uk)(" Rexistrarse ");function be(e,t,n,s,i,u){const l=(0,a.up)("Field"),c=(0,a.up)("ErrorMessage"),d=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)("div",se,[(0,a._)("div",ie,[ue,(0,a.Wm)(d,{onSubmit:u.handleRegister,"validation-schema":i.schema},{default:(0,a.w5)((()=>[i.successful?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",le,[(0,a._)("div",ce,[de,(0,a.Wm)(l,{name:"username",type:"text",class:"form-control"}),(0,a.Wm)(c,{name:"username",class:"error-feedback alert-danger"})]),(0,a._)("div",me,[pe,(0,a.Wm)(l,{name:"password",type:"password",class:"form-control"}),(0,a.Wm)(c,{name:"password",class:"error-feedback alert-danger"})]),(0,a._)("div",ge,[(0,a._)("button",{class:"btn btn-primary btn-block",disabled:i.loading},[(0,a.wy)((0,a._)("span",he,null,512),[[r.F8,i.loading]]),ve],8,fe)])]))])),_:1},8,["onSubmit","validation-schema"]),i.message?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,o.C_)(["alert",i.successful?"alert-success":"alert-danger"])},(0,o.zw)(i.message),3)):(0,a.kq)("",!0)])])}var ye={name:"Register",components:{Form:ee.l0,Field:ee.gN,ErrorMessage:ee.Bc},data(){const e=te.Ry().shape({username:te.Z_().required("CAMPO OBRIGATORIO").min(3,"DEBE TER MÁIS DE 3 CARACTERES").max(20,"NON DEBE PASAR OS 30 CARACTERES"),password:te.Z_().required("CAMPO OBRIGATORIO").min(3,"DEBE TER MÁIS DE 3 CARACTERES").max(20,"NON DEBE PASAR OS 30 CARACTERES")});return{successful:!1,loading:!1,message:"",schema:e}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},mounted(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister(e){this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",e).then((e=>{this.message=e.message,this.successful=!0,this.loading=!1}),(e=>{this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.successful=!1,this.loading=!1}))}}};const we=(0,E.Z)(ye,[["render",be]]);var ke=we;const _e=()=>n.e(474).then(n.bind(n,3474)),Oe=()=>n.e(429).then(n.bind(n,3429)),Ee=()=>Promise.all([n.e(795),n.e(527)]).then(n.bind(n,5258)),Ce=[{path:"/",alias:"/home",name:"home",component:L},{path:"/home",component:L},{path:"/login",component:ae},{path:"/register",component:ke},{path:"/comms",name:"contactos-y-grupos",component:Ee},{path:"/chat/:salaId",name:"chat",component:()=>Promise.all([n.e(795),n.e(766)]).then(n.bind(n,795))},{path:"/grupos/:id",name:"grupo-detalles",component:()=>n.e(598).then(n.bind(n,1598))},{path:"/grupos/nuevo",component:()=>n.e(510).then(n.bind(n,7510))},{path:"/profile",name:"profile",component:_e},{path:"/assets/TFG_DOCUMENTACION.pdf",name:"documentacion"},{path:"/:pathMatch(.*)*",name:"404",component:Oe}],Ae=(0,S.p7)({history:(0,S.PO)(),routes:Ce});Ae.beforeEach(((e,t,n)=>{const r=["/login","/register","/home"],a=!r.includes(e.path),o=localStorage.getItem("user");a&&!o?n("/home"):n()}));var Se=Ae,Ie=n(3907),De=n(3390);const Re="/api/auth/";class Te{login(e){return De.Z.post(Re+"signin",{username:e.username,password:e.password}).then((e=>(e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data)))}logout(){localStorage.removeItem("user")}register(e){return De.Z.post(Re+"signup",{username:e.username,password:e.password})}}var Fe=new Te;const Pe=JSON.parse(localStorage.getItem("user")),je=Pe?{status:{loggedIn:!0},user:Pe}:{status:{loggedIn:!1},user:null},Me={namespaced:!0,state:je,actions:{login({commit:e},t){return Fe.login(t).then((t=>(e("loginSuccess",t),Promise.resolve(t))),(t=>(e("loginFailure"),Promise.reject(t))))},logout({commit:e}){Fe.logout(),e("logout")},register({commit:e},t){return Fe.register(t).then((t=>(e("registerSuccess"),Promise.resolve(t.data))),(t=>(e("registerFailure"),Promise.reject(t))))}},mutations:{loginSuccess(e,t){e.status.loggedIn=!0,e.user=t},loginFailure(e){e.status.loggedIn=!1,e.user=null},logout(e){e.status.loggedIn=!1,e.user=null},registerSuccess(e){e.status.loggedIn=!1},registerFailure(e){e.status.loggedIn=!1}}},Ne=(0,Ie.MT)({modules:{auth:Me}});var Le=Ne,Ue=n(4500),xe=(n(3734),n(8947)),We=n(7810),Be=n(1436);xe.vI.add(Be.J9Y,Be.ILF,Be.FKd,Be.$Wj,Be.jLD),(0,r.ri)(A).use(Se).use(Le).component("font-awesome-icon",We.GN).component("AppLayout",Ue["default"]).mount("#app")},4500:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(6252);function a(e,t,n,a,o,s){return(0,r.wg)(),(0,r.j4)((0,r.LL)(a.layout),null,{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3})}var o=n(8574),s=n(2262),i=n(2119),u={name:"AppLayout",setup(){const e=(0,s.Xl)(o["default"]),t=(0,i.yj)();return(0,r.YP)((()=>t.meta),(async t=>{try{const r=await n(2115)(`./${t.layout}.vue`);e.value=r?.default||o["default"]}catch(r){e.value=o["default"]}}),{immediate:!0}),{layout:e}}},l=n(3744);const c=(0,l.Z)(u,[["render",a]]);var d=c},8574:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(6252);function a(e,t){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.WI)(e.$slots,"default")])}var o=n(3744);const s={},i=(0,o.Z)(s,[["render",a]]);var u=i},2115:function(e,t,n){var r={"./AppLayout.vue":[4500],"./AppLayoutDefault.vue":[8574],"./AppLayoutLinks.vue":[1734,734]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=2115,e.exports=a}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{429:"96debaf7",474:"34bd3c0e",510:"bec1f2d8",527:"e6953b8a",598:"d83044e8",734:"e8f3e3cc",766:"b25850e1",795:"33f00f5f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{474:"031d19ea",527:"e3d6d50b",766:"69b05bdb"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front:";n.l=function(r,a,o,s){if(e[r])e[r].push(a);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[a];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){a=s[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return a();e(r,i,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={474:1,527:1,766:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(766!=t){var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var s=n.p+n.u(t),i=new Error,u=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};n.l(s,u,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],i=r[1],u=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var c=u(n)}for(t&&t(r);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(504)}));r=n.O(r)})();
//# sourceMappingURL=app.b00318e8.js.map