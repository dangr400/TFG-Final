(function(){var e={3390:function(e,n,t){"use strict";var r=t(9669),o=t.n(r);n["Z"]=o().create({baseURL:"http://localhost:8081",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}})},4858:function(e,n,t){"use strict";t(6992),t(8674),t(9601),t(7727);var r=t(9963),o=t(6252),a=t(3577),s={id:"app"},i={class:"navbar navbar-expand navbar-dark bg-dark"},u=(0,o.Uk)("TFG"),c={class:"navbar-nav mr-auto"},l={class:"nav-item"},d=(0,o.Uk)("Comunicacións"),f={key:0,class:"navbar-nav ml-auto"},m={class:"nav-item"},p=(0,o.Uk)(" Rexistrarse "),g={class:"nav-item"},h=(0,o.Uk)(" Acceder "),v={key:1,class:"navbar-nav ml-auto"},b={class:"nav-item"},w={class:"nav-item"},y=(0,o.Uk)(" Sair "),k={class:"container mt-3"};function _(e,n,t,_,O,E){var A=(0,o.up)("router-link"),C=(0,o.up)("font-awesome-icon"),S=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("nav",i,[(0,o.Wm)(A,{to:"/",class:"navbar-brand"},{default:(0,o.w5)((function(){return[u]})),_:1}),(0,o._)("div",c,[(0,o._)("li",l,[E.currentUser?((0,o.wg)(),(0,o.j4)(A,{key:0,to:"/comms",class:"nav-link"},{default:(0,o.w5)((function(){return[d]})),_:1})):(0,o.kq)("",!0)])]),E.currentUser?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("li",m,[(0,o.Wm)(A,{to:"/register",class:"nav-link"},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{icon:"user-plus"}),p]})),_:1})]),(0,o._)("li",g,[(0,o.Wm)(A,{to:"/login",class:"nav-link"},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{icon:"sign-in-alt"}),h]})),_:1})])])),E.currentUser?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("li",b,[(0,o.Wm)(A,{to:"/profile",class:"nav-link"},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{icon:"user"}),(0,o.Uk)(" "+(0,a.zw)(E.currentUser.username),1)]})),_:1})]),(0,o._)("li",w,[(0,o._)("a",{class:"nav-link",onClick:n[0]||(n[0]=(0,r.iM)((function(){return E.logOut&&E.logOut.apply(E,arguments)}),["prevent"]))},[(0,o.Wm)(C,{icon:"sign-out-alt"}),y])])])):(0,o.kq)("",!0)]),(0,o._)("div",k,[(0,o.Wm)(S)])])}t(6699),t(2023);var O={computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},E=t(3744);const A=(0,E.Z)(O,[["render",_]]);var C=A,S=(t(1539),t(8783),t(3948),t(2119)),R={class:"container"},I={class:"jumbotron"},D={class:"botonera"},T=["onClick"],N={class:"jumbotron"},P=["innerHTML"];function F(e,n,t,r,s,i){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("header",I,[(0,o._)("h3",null,(0,a.zw)(s.datos.cabecera),1)]),(0,o._)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.datos.menus,(function(e,n){return(0,o.wg)(),(0,o.iD)("button",{key:n,class:"btn-secondary",onClick:function(t){return i.mostrar(e,n)}},(0,a.zw)(e),9,T)})),128))]),(0,o._)("body",N,[(0,o._)("div",{innerHTML:s.datos.content},null,8,P)])])}var M={name:"Home",data:function(){return{datos:{cabecera:"",menus:["Qué é isto?","Para quén está deseñado","Documentación"],saludos:["Hola","Ola","Bojour","Hello","Gütten","Nǐ hǎo"],content:""}}},mounted:function(){this.nuevoSaludo()},methods:{nuevoSaludo:function(){var e=Math.floor(6*Math.random());this.datos.cabecera=this.datos.saludos[e]},mostrar:function(e,n){switch(this.nuevoSaludo(),n){case 0:this.datos.content='<h1 style="text-align:center; background-color:#CCD6A6">Qué é isto?</h1><div class="jumbotron" style="background-color:#F7EDDB;text-align:center"><p>Isto é unha aplicación que permite enviar e recibir mensaxes de forma instantánea.</p><p>Foi creada para o traballo de fin de grao do curso 2020-2021 por Daniel Gómez Rodríguez</p><p>Para comezar o seu uso, acceda ao punto de menú "Comunicacións" no menú superior da páxina</p><p>(Se non o vé, ten que iniciar sesión no sistema)</p></div>';break;case 2:this.datos.content='<a href="docs/TFG_DOCUMENTACION.pdf" target="_blank">ligazón da documentación do TFG</a>';break;default:this.datos.content='<h1 style="text-align:center; background-color:#CCD6A6">Para quén se fixo?</h1><div class="jumbotron" style="background-color:#F7EDDB;text-align:center"><p>Esta aplicación está pensada para alguén que teña interese en introducirse no mundo da informática, ofrecendo unha aplicación sinxela e persoalizable.</p></div>';break}}}};const x=(0,E.Z)(M,[["render",F]]);var j=x,L=t.p+"img/login.ea31521b.png",U=function(e){return(0,o.dD)("data-v-3daa4e5b"),e=e(),(0,o.Cn)(),e},W={class:"col-md-12"},B={class:"card card-container"},Z=U((function(){return(0,o._)("img",{class:"imgPortada",id:"profile-img",src:L},null,-1)})),q={class:"form-group"},$=U((function(){return(0,o._)("label",{for:"username"},"Nome de usuario",-1)})),G={class:"form-group"},z=U((function(){return(0,o._)("label",{for:"password"},"Contrasinal",-1)})),H={class:"form-group"},J=["disabled"],K={class:"spinner-border spinner-border-sm"},Y=U((function(){return(0,o._)("span",null,"Acceder",-1)})),Q={class:"form-group"},X={key:0,class:"alert alert-danger",role:"alert"};function V(e,n,t,s,i,u){var c=(0,o.up)("Field"),l=(0,o.up)("ErrorMessage"),d=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("div",B,[Z,(0,o.Wm)(d,{onSubmit:u.handleLogin,"validation-schema":i.schema},{default:(0,o.w5)((function(){return[(0,o._)("div",q,[$,(0,o.Wm)(c,{name:"username",type:"text",class:"form-control"}),(0,o.Wm)(l,{name:"username",class:"error-feedback alert-danger"})]),(0,o._)("div",G,[z,(0,o.Wm)(c,{name:"password",type:"password",class:"form-control"}),(0,o.Wm)(l,{name:"password",class:"error-feedback alert-danger"})]),(0,o._)("div",H,[(0,o._)("button",{class:"btn btn-primary btn-block",disabled:i.loading},[(0,o.wy)((0,o._)("span",K,null,512),[[r.F8,i.loading]]),Y],8,J)]),(0,o._)("div",Q,[i.message?((0,o.wg)(),(0,o.iD)("div",X,(0,a.zw)(i.message),1)):(0,o.kq)("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])])}t(9714);var ee=t(2954),ne=t(4231),te={name:"Login",components:{Form:ee.l0,Field:ee.gN,ErrorMessage:ee.Bc},data:function(){var e=ne.Ry().shape({username:ne.Z_().required("CAMPO OBRIGATORIO"),password:ne.Z_().required("CAMPO OBRIGATORIO")});return{loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(e){var n=this;this.loading=!0,this.$store.dispatch("auth/login",e).then((function(){n.$router.push("/profile")}),(function(e){n.loading=!1,n.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};const re=(0,E.Z)(te,[["render",V],["__scopeId","data-v-3daa4e5b"]]);var oe=re,ae=t.p+"img/register.6f76fe50.png",se={class:"col-md-12"},ie={class:"card card-container"},ue=(0,o._)("img",{id:"profile-img",src:ae,class:"profile-img-card",style:{height:"50%",width:"50%",display:"flex","align-self":"center",filter:"saturate(3)"}},null,-1),ce={key:0},le={class:"form-group"},de=(0,o._)("label",{for:"username"},"Nome de usuario",-1),fe={class:"form-group"},me=(0,o._)("label",{for:"password"},"Contrasinal",-1),pe=(0,o._)("label",{for:"password2"},"Repita o Contrasinal",-1),ge={class:"form-group"},he=["disabled"],ve={class:"spinner-border spinner-border-sm"},be=(0,o.Uk)(" Rexistrarse ");function we(e,n,t,s,i,u){var c=(0,o.up)("Field"),l=(0,o.up)("ErrorMessage"),d=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("div",ie,[ue,(0,o.Wm)(d,{onSubmit:u.handleRegister,"validation-schema":i.schema},{default:(0,o.w5)((function(){return[i.successful?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",le,[de,(0,o.Wm)(c,{name:"username",type:"text",class:"form-control"}),(0,o.Wm)(l,{name:"username",class:"error-feedback alert-danger"})]),(0,o._)("div",fe,[me,(0,o.Wm)(c,{name:"password",type:"password",class:"form-control"}),(0,o.Wm)(l,{name:"password",class:"error-feedback alert-danger"}),pe,(0,o.Wm)(c,{name:"password2",type:"password",class:"form-control"}),(0,o.Wm)(l,{name:"password2",class:"error-feedback alert-danger"})]),(0,o._)("div",ge,[(0,o._)("button",{class:"btn btn-primary btn-block",disabled:i.loading},[(0,o.wy)((0,o._)("span",ve,null,512),[[r.F8,i.loading]]),be],8,he)])]))]})),_:1},8,["onSubmit","validation-schema"]),i.message?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,a.C_)(["alert",i.successful?"alert-success":"alert-danger"])},(0,a.zw)(i.message),3)):(0,o.kq)("",!0)])])}var ye={name:"Register",components:{Form:ee.l0,Field:ee.gN,ErrorMessage:ee.Bc},data:function(){var e=ne.Ry().shape({username:ne.Z_().required("CAMPO OBRIGATORIO").min(3,"DEBE TER MÁIS DE 3 CARACTERES").max(20,"NON DEBE PASAR OS 30 CARACTERES"),password:ne.Z_().required("CAMPO OBRIGATORIO").min(3,"DEBE TER MÁIS DE 3 CARACTERES").max(20,"NON DEBE PASAR OS 30 CARACTERES"),password2:ne.Z_().required("CAMPO OBRIGATORIO").min(3,"DEBE TER MÁIS DE 3 CARACTERES").max(20,"NON DEBE PASAR OS 30 CARACTERES").oneOf([ne.iH("password"),null],"Non coincide co contrasinal introducido")});return{successful:!1,loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var n=this;this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",e).then((function(e){n.message=e.message,n.successful=!0,n.loading=!1}),(function(e){n.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n.successful=!1,n.loading=!1}))}}};const ke=(0,E.Z)(ye,[["render",we]]);var _e=ke,Oe=function(){return t.e(858).then(t.bind(t,1858))},Ee=function(){return t.e(429).then(t.bind(t,3429))},Ae=function(){return Promise.all([t.e(337),t.e(232)]).then(t.bind(t,4364))},Ce=[{path:"/",alias:"/home",name:"home",component:j},{path:"/home",component:j},{path:"/login",component:oe},{path:"/register",component:_e},{path:"/comms",name:"contactos-y-grupos",component:Ae},{path:"/chat/:salaId",name:"chat",component:function(){return Promise.all([t.e(337),t.e(405)]).then(t.bind(t,8337))}},{path:"/grupos/:id",name:"grupo-detalles",component:function(){return t.e(161).then(t.bind(t,6161))}},{path:"/grupos/nuevo",component:function(){return t.e(510).then(t.bind(t,7510))}},{path:"/profile",name:"profile",component:Oe},{path:"/assets/TFG_DOCUMENTACION.pdf",name:"documentacion"},{path:"/:pathMatch(.*)*",name:"404",component:Ee}],Se=(0,S.p7)({history:(0,S.PO)(),routes:Ce});Se.beforeEach((function(e,n,t){var r=["/login","/register","/home"],o=!r.includes(e.path),a=localStorage.getItem("user");o&&!a?t("/home"):t()}));var Re=Se,Ie=t(3907),De=t(3087),Te=t(2833),Ne=(t(8862),t(3390)),Pe="/api/auth/",Fe=function(){function e(){(0,De.Z)(this,e)}return(0,Te.Z)(e,[{key:"login",value:function(e){return Ne.Z.post(Pe+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return Ne.Z.post(Pe+"signup",{username:e.username,password:e.password})}}]),e}(),Me=new Fe,xe=JSON.parse(localStorage.getItem("user")),je=xe?{status:{loggedIn:!0},user:xe}:{status:{loggedIn:!1},user:null},Le={namespaced:!0,state:je,actions:{login:function(e,n){var t=e.commit;return Me.login(n).then((function(e){return t("loginSuccess",e),Promise.resolve(e)}),(function(e){return t("loginFailure"),Promise.reject(e)}))},logout:function(e){var n=e.commit;Me.logout(),n("logout")},register:function(e,n){var t=e.commit;return Me.register(n).then((function(e){return t("registerSuccess"),Promise.resolve(e.data)}),(function(e){return t("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,n){e.status.loggedIn=!0,e.user=n},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Ue=(0,Ie.MT)({modules:{auth:Le}}),We=Ue,Be=t(4500),Ze=(t(3734),t(8947)),qe=t(7810),$e=t(1436);Ze.vI.add($e.J9Y,$e.ILF,$e.FKd,$e.$Wj,$e.jLD),(0,r.ri)(C).use(Re).use(We).component("font-awesome-icon",qe.GN).component("AppLayout",Be["default"]).mount("#app")},4500:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(6252);function o(e,n,t,o,a,s){return(0,r.wg)(),(0,r.j4)((0,r.LL)(o.layout),null,{default:(0,r.w5)((function(){return[(0,r.WI)(e.$slots,"default")]})),_:3})}var a=t(6835),s=t(8534),i=(t(1539),t(8783),t(3948),t(8574)),u=t(2262),c=t(2119),l={name:"AppLayout",setup:function(){var e=(0,u.Xl)(i["default"]),n=(0,c.yj)();return(0,r.YP)((function(){return n.meta}),function(){var n=(0,s.Z)((0,a.Z)().mark((function n(r){var o;return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t(2115)("./".concat(r.layout,".vue"));case 3:o=n.sent,e.value=(null===o||void 0===o?void 0:o.default)||i["default"],n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),e.value=i["default"];case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),{immediate:!0}),{layout:e}}},d=t(3744);const f=(0,d.Z)(l,[["render",o]]);var m=f},8574:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(6252);function o(e,n){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.WI)(e.$slots,"default")])}var a=t(3744);const s={},i=(0,a.Z)(s,[["render",o]]);var u=i},2115:function(e,n,t){var r={"./AppLayout.vue":[4500],"./AppLayoutDefault.vue":[8574],"./AppLayoutLinks.vue":[1734,734]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=2115,e.exports=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{161:"6e7980e6",232:"644bc94f",337:"ec4a8e6f",405:"69b61ec9",429:"2801313b",510:"417a3b3c",734:"23885c4a",858:"de3922d4"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{232:"ab9aaddf",405:"935483ce",858:"22f47f50"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="front:";t.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var i,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var s=t.miniCssF(r),i=t.p+s;if(n(s,i))return o();e(r,i,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={232:1,405:1,858:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else if(405!=n){var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var s=t.p+t.u(n),i=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};t.l(s,u,"chunk-"+n,n)}else e[n]=0},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(u)var l=u(t)}for(n&&n(r);c<s.length;c++)a=s[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4858)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.76356eed.js.map