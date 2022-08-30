"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[161],{8:function(e,t,n){function o(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}n.d(t,{Z:function(){return o}})},4868:function(e,t,n){var o=n(3087),a=n(2833),r=n(3390),s=n(8),u="/api/grupos/",i=function(){function e(){(0,o.Z)(this,e)}return(0,a.Z)(e,[{key:"getPublicContent",value:function(){return r.Z.get(u+"gruposPublicos")}},{key:"getGrupoPorId",value:function(e){return r.Z.get(u+e,{headers:(0,s.Z)()})}},{key:"getGruposPorNombre",value:function(e){return r.Z.get(u,{headers:(0,s.Z)(),data:e})}},{key:"getGrupos",value:function(){return r.Z.get(u+"gruposPertenecientes",{headers:(0,s.Z)()})}},{key:"permisosGrupo",value:function(e){return r.Z.get(u+"permisosGrupo/"+e,{headers:(0,s.Z)()})}},{key:"nuevoGrupo",value:function(e){return r.Z.post(u+"nuevoGrupo",e,{headers:(0,s.Z)()})}},{key:"añadirModeradores",value:function(e,t){return r.Z.put(u+e+"/addModeradores",t,{headers:(0,s.Z)()})}},{key:"añadirIntegrantes",value:function(e,t){return r.Z.put(u+e+"/addIntegrantes",t,{headers:(0,s.Z)()})}},{key:"borrarGrupo",value:function(e){return r.Z["delete"](u+"borrarGrupo",{headers:(0,s.Z)(),data:e})}}]),e}();t["Z"]=new i},7270:function(e,t,n){var o=n(3087),a=n(2833),r=n(3390),s=n(8),u="/usuarios/",i=function(){function e(){(0,o.Z)(this,e)}return(0,a.Z)(e,[{key:"getContactos",value:function(){return r.Z.get(u+"contactos",{headers:(0,s.Z)()})}},{key:"eliminarContacto",value:function(e){return r.Z["delete"](u+"contactos/eliminarContacto",{headers:(0,s.Z)(),data:{usuario:e}})}},{key:"getContactoPorNombre",value:function(e){return r.Z.get(u+"contactos/".concat(e),{headers:(0,s.Z)()})}},{key:"getPeticionesEnviadas",value:function(){return r.Z.get(u+"verMisPeticiones",{headers:(0,s.Z)()})}},{key:"getPeticionesPendientes",value:function(){return r.Z.get(u+"verPeticionesPendientes",{headers:(0,s.Z)()})}},{key:"enviarPeticionContacto",value:function(e){return r.Z.post(u+"enviarPeticion",e,{headers:(0,s.Z)()})}},{key:"aceptarPeticion",value:function(e){return r.Z.post(u+"aceptarPeticion",e,{headers:(0,s.Z)()})}},{key:"cancelarPeticion",value:function(e){return r.Z["delete"](u+"cancelarPeticion",{headers:(0,s.Z)(),data:{peticion:e}})}},{key:"getUsuarioPorId",value:function(e){return r.Z.get(u,{headers:(0,s.Z)(),data:e})}},{key:"getUsuario",value:function(){return r.Z.get(u+"yo",{headers:(0,s.Z)()})}},{key:"getModeratorBoard",value:function(){return r.Z.get(u+"mod",{headers:(0,s.Z)()})}},{key:"getAdminBoard",value:function(){return r.Z.get(u+"admin",{headers:(0,s.Z)()})}},{key:"updateUsuario",value:function(e){return r.Z.put(u+"actualizarUsuario",e,{headers:(0,s.Z)()})}}]),e}();t["Z"]=new i},6161:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var o=n(6252),a=n(3577),r=n(9963),s={class:"container"},u={class:"jumbotron"},i={class:"container"},l={class:"jumbotron"},d=(0,o._)("h3",null,[(0,o._)("strong",null,"Creador")],-1),c={class:"jumbotron"},g=(0,o._)("h3",null,[(0,o._)("strong",null,"Moderadores")],-1),m=(0,o._)("span",null,[(0,o._)("button",{class:"btn btn-success","data-toggle":"modal","data-target":"#nuevosModeradores"}," Añadir Moderadores ")],-1),v={class:"list-group"},p=["onClick"],f={class:"jumbotron"},b=(0,o._)("h3",null,[(0,o._)("strong",null,"Integrantes")],-1),_=(0,o._)("span",null,[(0,o._)("button",{class:"btn btn-success","data-toggle":"modal","data-target":"#nuevosIntegrantes"}," Añadir Usuarios ")],-1),h={class:"list-group"},Z=["onClick"],y={class:"modal fade",id:"nuevosModeradores",tabindex:"-1",role:"dialog","aria-labelledby":"nuevosModeradoresLabel","aria-hidden":"true"},k={class:"modal-dialog",role:"document"},C={class:"modal-content"},w=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"nuevosModeradoresLabel"},"Agregar Moderadores"),(0,o._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,o._)("span",{"aria-hidden":"true"},"×")])],-1),I={class:"modal-body"},M={class:"form-group"},P=["value"],U=(0,o._)("br",null,null,-1),G=(0,o._)("label",{class:"form-label select-label"},"Seleccione usuarios",-1),D=(0,o._)("div",{class:"form-group"},[(0,o._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Cerrar"),(0,o._)("button",{type:"submit",class:"btn btn-primary"},"Añadir Usuarios")],-1),x={class:"modal fade",id:"nuevosIntegrantes",tabindex:"-1",role:"dialog","aria-labelledby":"nuevosIntegrantesLabel","aria-hidden":"true"},z={class:"modal-dialog",role:"document"},A={class:"modal-content"},S=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"nuevosIntegrantesLabel"},"Añadir integrantes"),(0,o._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,o._)("span",{"aria-hidden":"true"},"×")])],-1),N={class:"modal-body"},j={class:"form-group"},H=["value"],K=(0,o._)("br",null,null,-1),L=(0,o._)("label",{class:"form-label select-label"},"Seleccione usuarios",-1),W=(0,o._)("div",{class:"form-group"},[(0,o._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Cerrar"),(0,o._)("button",{type:"submit",class:"btn btn-primary"},"Añadir Usuarios")],-1);function Y(e,t,n,Y,$,B){var E=(0,o.up)("ErrorMessage"),F=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("header",u,[(0,o._)("h3",null,[(0,o._)("strong",null,"Detalles del grupo con ID "+(0,a.zw)(this.$route.params.id),1)])]),(0,o._)("div",i,[(0,o._)("header",l,[d,(0,o._)("h4",null,[(0,o._)("p",null,(0,a.zw)($.creador),1)])]),(0,o._)("header",c,[g,m,(0,o._)("ul",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)($.moderadores,(function(t,n){return(0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["list-group-item",{active:n==$.currentIndex}]),key:n,onClick:function(o){return e.setActiveModerador(t,n)}},(0,a.zw)(t.nome_usuario),11,p)})),128))])]),(0,o._)("header",f,[b,_,(0,o._)("ul",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)($.integrantes,(function(t,n){return(0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["list-group-item",{active:n==$.currentIndex}]),key:n,onClick:function(t){return e.setActiveIntegrante(e.moderador,n)}},(0,a.zw)(t.nome_usuario),11,Z)})),128))])])]),(0,o._)("div",y,[(0,o._)("div",k,[(0,o._)("div",C,[w,(0,o._)("div",I,[(0,o.Wm)(F,{onSubmit:B.addModeradores},{default:(0,o.w5)((function(){return[(0,o._)("div",M,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return $.listaMods=e}),class:"select",multiple:""},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)($.integrantes,(function(e,t){return(0,o.wg)(),(0,o.iD)("option",{class:(0,a.C_)(["list-group-item",{active:t==$.indexUsuarios}]),key:t,value:e._id},(0,a.zw)(e.nome_usuario),11,P)})),128))],512),[[r.bM,$.listaMods]]),U,G,(0,o._)("p",null,(0,a.zw)($.listaMods),1),(0,o.Wm)(E,{name:"visibilidad",class:"error-feedback"})]),D]})),_:1},8,["onSubmit"])])])])]),(0,o._)("div",x,[(0,o._)("div",z,[(0,o._)("div",A,[S,(0,o._)("div",N,[(0,o.Wm)(F,{onSubmit:B.addIntegrantes},{default:(0,o.w5)((function(){return[(0,o._)("div",j,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return $.nuevosIntegrantes=e}),class:"select",multiple:""},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)($.contactosUsr,(function(e,t){return(0,o.wg)(),(0,o.iD)("option",{class:(0,a.C_)(["list-group-item",{active:t==$.indexContactos}]),key:t,value:e._id},(0,a.zw)(e.nome_usuario),11,H)})),128))],512),[[r.bM,$.nuevosIntegrantes]]),K,L,(0,o._)("p",null,(0,a.zw)($.nuevosIntegrantes),1),(0,o.Wm)(E,{name:"visibilidad",class:"error-feedback"})]),W]})),_:1},8,["onSubmit"])])])])])])}var $=n(2954),B=n(4868),E=n(7270),F={components:{Form:$.l0,ErrorMessage:$.Bc},data:function(){return{grupo:null,integrantes:[],moderadores:[],creador:null,username:null,contactos:null,currentIndex:-1,indexUsuarios:-1,verNuevoModerador:!1,verNuevoIntegrante:!1,listaMods:[],options:[],contactosUsr:[],indexContactos:-1,nuevosIntegrantes:[]}},methods:{getContactosUsr:function(){var e=this;E.Z.getContactos().then((function(t){console.log("Contactos:"),console.log(t),e.contactosUsr=t.data.contactos})).catch((function(e){console.log(e)}))},getGrupo:function(){var e=this,t=this.$route.params.id;console.log(t),B.Z.getGrupoPorId(t).then((function(t){console.log(t),e.grupo=t.data.grupo,e.integrantes=t.data.grupo.integrantes,e.moderadores=t.data.grupo.moderadores,e.creador=t.data.grupo.creador.nome_usuario,e.username=t.data.grupo.nome_usuario})).catch((function(e){console.log(e)}))},addModeradores:function(){var e=this;B.Z["añadirModeradores"](this.grupo._id,this.listaMods).then((function(t){console.log(t),e.$router.go(0)})).catch((function(e){console.log(e)}))},addIntegrantes:function(){var e=this;B.Z["añadirIntegrantes"](this.grupo._id,this.nuevosIntegrantes).then((function(t){console.log(t),e.$router.go(0)})).catch((function(e){console.log(e)}))}},mounted:function(){this.getGrupo(),this.getContactosUsr()}},T=n(3744);const V=(0,T.Z)(F,[["render",Y]]);var J=V}}]);
//# sourceMappingURL=161-legacy.6e7980e6.js.map