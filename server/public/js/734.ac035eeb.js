"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[734],{1734:function(r,s,n){n.r(s),n.d(s,{default:function(){return O}});var e=n(6252),t=n(3577),a=n(9963);const i={class:"navbar navbar-expand navbar-dark bg-dark"},l=(0,e.Uk)("TFG"),u={class:"navbar-nav mr-auto"},o={class:"nav-item"},c=(0,e.Uk)("Comunicaciones"),v={key:0,class:"navbar-nav ml-auto"},k={class:"nav-item"},d=(0,e.Uk)(" Registrarse "),m={class:"nav-item"},h=(0,e.Uk)(" Entrar "),U={key:1,class:"navbar-nav ml-auto"},f={class:"nav-item"},g={class:"nav-item"},w=(0,e.Uk)(" Salir ");function _(r,s,n,_,p,b){const W=(0,e.up)("router-link"),O=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("nav",i,[(0,e.Wm)(W,{to:"/",class:"navbar-brand"},{default:(0,e.w5)((()=>[l])),_:1}),(0,e._)("div",u,[(0,e._)("li",o,[b.currentUser?((0,e.wg)(),(0,e.j4)(W,{key:0,to:"/comms",class:"nav-link"},{default:(0,e.w5)((()=>[c])),_:1})):(0,e.kq)("",!0)])]),b.currentUser?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",v,[(0,e._)("li",k,[(0,e.Wm)(W,{to:"/register",class:"nav-link"},{default:(0,e.w5)((()=>[(0,e.Wm)(O,{icon:"user-plus"}),d])),_:1})]),(0,e._)("li",m,[(0,e.Wm)(W,{to:"/login",class:"nav-link"},{default:(0,e.w5)((()=>[(0,e.Wm)(O,{icon:"sign-in-alt"}),h])),_:1})])])),b.currentUser?((0,e.wg)(),(0,e.iD)("div",U,[(0,e._)("li",f,[(0,e.Wm)(W,{to:"/profile",class:"nav-link"},{default:(0,e.w5)((()=>[(0,e.Wm)(O,{icon:"user"}),(0,e.Uk)(" "+(0,t.zw)(b.currentUser.username),1)])),_:1})]),(0,e._)("li",g,[(0,e._)("a",{class:"nav-link",onClick:s[0]||(s[0]=(0,a.iM)(((...r)=>b.logOut&&b.logOut(...r)),["prevent"]))},[(0,e.Wm)(O,{icon:"sign-out-alt"}),w])])])):(0,e.kq)("",!0)])}n(6699);var p={computed:{currentUser(){return this.$store.state.auth.user},showAdminBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},b=n(3744);const W=(0,b.Z)(p,[["render",_]]);var O=W}}]);
//# sourceMappingURL=734.ac035eeb.js.map