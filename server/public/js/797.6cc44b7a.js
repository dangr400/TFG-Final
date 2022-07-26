"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[797,643],{4868:function(e,o,t){var r=t(3390),s=t(8);const n="/api/grupos/";class a{getPublicContent(){return r.Z.get(n+"gruposPublicos")}getGrupoPorId(e){return r.Z.get(n+e,{headers:(0,s.Z)()})}getGrupos(){return r.Z.get(n+"gruposPertenecientes",{headers:(0,s.Z)()})}permisosGrupo(e){return r.Z.get(n+"permisosGrupo/"+e,{headers:(0,s.Z)()})}nuevoGrupo(e){return r.Z.post(n+"nuevoGrupo",e,{headers:(0,s.Z)()})}"añadirModeradores"(e,o){return r.Z.put(n+e+"/addModeradores",o,{headers:(0,s.Z)()})}"añadirIntegrantes"(e,o){return r.Z.put(n+e+"/addIntegrantes",o,{headers:(0,s.Z)()})}borrarGrupo(e){return r.Z["delete"](n+"borrarGrupo",{headers:(0,s.Z)(),data:e})}}o["Z"]=new a},7270:function(e,o,t){var r=t(3390),s=t(8);const n="/usuarios/";class a{getContactos(){return r.Z.get(n+"contactos",{headers:(0,s.Z)()})}eliminarContacto(e){return r.Z["delete"](n+"contactos/eliminarContacto",{headers:(0,s.Z)(),data:{usuario:e}})}getContactoPorNombre(e){return r.Z.get(n+`contactos/${e}`,{headers:(0,s.Z)()})}getPeticionesEnviadas(){return r.Z.get(n+"verMisPeticiones",{headers:(0,s.Z)()})}getPeticionesPendientes(){return r.Z.get(n+"verPeticionesPendientes",{headers:(0,s.Z)()})}enviarPeticionContacto(e){return r.Z.post(n+"enviarPeticion",e,{headers:(0,s.Z)()})}aceptarPeticion(e){return r.Z.post(n+"aceptarPeticion",e,{headers:(0,s.Z)()})}cancelarPeticion(e){return r.Z["delete"](n+"cancelarPeticion",{headers:(0,s.Z)(),data:{peticion:e}})}getUsuarioPorId(e){return r.Z.get(n,{headers:(0,s.Z)(),data:e})}getUsuario(){return r.Z.get(n+"yo",{headers:(0,s.Z)()})}getModeratorBoard(){return r.Z.get(n+"mod",{headers:(0,s.Z)()})}getAdminBoard(){return r.Z.get(n+"admin",{headers:(0,s.Z)()})}}o["Z"]=new a},6939:function(e,o,t){t.r(o),t.d(o,{default:function(){return ao}});var r=t(6252);const s={class:"container"},n={class:"jumbotron"},a=(0,r._)("h3",null,[(0,r._)("strong",null,"Comunicacións")],-1);function i(e,o,t,i,c,l){const u=(0,r.up)("usuarioslist"),d=(0,r.up)("peticioneslist"),p=(0,r.up)("gruposlist"),m=(0,r.up)("conversacioneslist");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("header",n,[a,(0,r._)("button",{class:"btn btn-outline-secondary",onClick:o[0]||(o[0]=(...e)=>l.activarContactos&&l.activarContactos(...e))},"Contactos"),(0,r._)("button",{class:"btn btn-outline-secondary",onClick:o[1]||(o[1]=(...e)=>l.activarGrupos&&l.activarGrupos(...e))},"Grupos"),(0,r._)("button",{class:"btn btn-outline-secondary",onClick:o[2]||(o[2]=(...e)=>l.activarPeticiones&&l.activarPeticiones(...e))},"Peticións"),(0,r._)("button",{class:"btn btn-outline-secondary",onClick:o[3]||(o[3]=(...e)=>l.activarConversaciones&&l.activarConversaciones(...e))},"Acceder Conversas")]),c.mostrarContactos?((0,r.wg)(),(0,r.j4)(u,{key:0})):(0,r.kq)("",!0),c.mostrarPeticiones?((0,r.wg)(),(0,r.j4)(d,{key:1})):(0,r.kq)("",!0),c.mostrarGrupos?((0,r.wg)(),(0,r.j4)(p,{key:2})):(0,r.kq)("",!0),c.mostrarConversaciones?((0,r.wg)(),(0,r.j4)(m,{key:3})):(0,r.kq)("",!0)])}var c=t(9963),l=t(3577);const u={class:"col-md-8"},d={class:"input-group mb-3"},p={class:"input-group-append"},m={class:"container"},h=(0,r._)("h3",null,[(0,r._)("strong",null,"Contactos")],-1),g={class:"list-group"},b=["onClick"],v={class:"col-md-6"},_={key:0},C=(0,r._)("h4",null,"Contacto",-1),G=(0,r._)("label",null,[(0,r._)("strong",null,"Nombre:")],-1),P={key:1},k=(0,r._)("br",null,null,-1),Z=(0,r._)("p",null,"Seleccione un contacto...",-1),y=[k,Z];function w(e,o,t,s,n,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",u,[(0,r._)("div",d,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Buscar contacto por nome","onUpdate:modelValue":o[0]||(o[0]=e=>n.username=e)},null,512),[[c.nr,n.username]]),(0,r._)("div",p,[(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[1]||(o[1]=(...e)=>a.searchNombre&&a.searchNombre(...e))}," Buscar ")])])]),(0,r._)("div",m,[h,(0,r._)("ul",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.usuarios,((e,o)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,l.C_)(["list-group-item",{active:o==n.currentIndex}]),key:o,onClick:t=>a.setActiveContacto(e,o)},(0,l.zw)(e.nome_usuario),11,b)))),128))]),(0,r._)("div",v,[n.currentContacto?((0,r.wg)(),(0,r.iD)("div",_,[C,(0,r._)("div",null,[G,(0,r.Uk)(" "+(0,l.zw)(n.currentContacto.nome_usuario),1)]),(0,r._)("button",{class:"badge badge-danger",onClick:o[2]||(o[2]=e=>a.eliminarContacto(n.currentContacto))}," Eliminar Contacto ")])):((0,r.wg)(),(0,r.iD)("div",P,y))])])])}var f=t(7270),D={name:"usuarios-list",data(){return{usuarios:[],currentContacto:null,currentIndex:-1,username:""}},methods:{recuperarContactos(){f.Z.getContactos().then((e=>{this.usuarios=e.data.contactos,console.log(e.data)})).catch((e=>{console.log(e)}))},refreshList(){this.recuperarContactos(),this.currentContacto=null,this.currentIndex=-1},setActiveContacto(e,o){this.currentContacto=e,this.currentIndex=o},removeAllContactos(){f.Z.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))},eliminarContacto(e){f.Z.eliminarContacto(e).then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))},searchNombre(){f.Z.getContactoPorNombre(this.username).then((e=>{this.usuarios=e.data.contactos,console.log(e.data)})).catch((e=>{console.log(e)}))}},mounted(){this.recuperarContactos()}},U=t(3744);const I=(0,U.Z)(D,[["render",w]]);var x=I;const E={class:"col-md-8"},N={class:"input-group mb-3"},j={class:"input-group-append"},A={class:"container"},z=(0,r._)("h3",null,[(0,r._)("strong",null,"Peticións de Contacto")],-1),V={class:"list-group"},q=["onClick"],L={class:"col-md-6"},B={key:0},M=(0,r._)("h4",null,"Peticion",-1),R=(0,r._)("label",null,[(0,r._)("strong",null,"Nombre:")],-1),W=(0,r._)("label",null,[(0,r._)("strong",null,"Fecha:")],-1),H={key:1},K=(0,r._)("br",null,null,-1),Y={key:0},$={key:1},F=(0,r._)("p",null,"Seleccione Peticion...",-1),S=[F];function O(e,o,t,s,n,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",E,[(0,r._)("div",N,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Enviar peticion ao usuario...","onUpdate:modelValue":o[0]||(o[0]=e=>n.nombreUsrPeticion=e)},null,512),[[c.nr,n.nombreUsrPeticion]]),(0,r._)("div",j,[(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[1]||(o[1]=e=>a.enviarPeticion())}," Enviar "),n.message?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,l.C_)(["alert",n.successful?"alert-success":"alert-danger"])},(0,l.zw)(n.message),3)):(0,r.kq)("",!0)])])]),(0,r._)("div",A,[z,(0,r._)("ul",V,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.peticiones,((e,o)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,l.C_)(["list-group-item",{active:o==n.currentIndex}]),key:o,onClick:t=>a.setActivePeticion(e,o)},(0,l.zw)(e.idEmisor.nome_usuario),11,q)))),128))]),(0,r._)("div",L,[n.currentPeticion?((0,r.wg)(),(0,r.iD)("div",B,[M,(0,r._)("div",null,[R,(0,r.Uk)(" "+(0,l.zw)(n.currentPeticion.idEmisor.nome_usuario),1)]),(0,r._)("div",null,[W,(0,r.Uk)(" "+(0,l.zw)(n.currentPeticion.createdAt),1)]),(0,r._)("button",{class:"badge badge-success",onClick:o[2]||(o[2]=e=>a.aceptarPeticion(n.currentPeticion))}," Aceptar "),(0,r._)("button",{class:"badge badge-danger",onClick:o[3]||(o[3]=e=>a.cancelarPeticion(n.currentPeticion))}," Denegar ")])):((0,r.wg)(),(0,r.iD)("div",H,[K,n.mensajeGestionarPeticion?((0,r.wg)(),(0,r.iD)("div",Y,(0,l.zw)(n.message),1)):((0,r.wg)(),(0,r.iD)("div",$,S))]))])])])}var T={name:"peticiones-list",data(){return{peticiones:[],currentPeticion:null,currentIndex:-1,username:"",nombreUsrPeticion:"",message:"",successful:!1,mensajeEnviarPeticion:!1,mensajeGestionarPeticion:!1}},methods:{recuperarPeticiones(){f.Z.getPeticionesPendientes().then((e=>{this.peticiones=e.data.peticiones,console.log(e.data)})).catch((e=>{console.log(e)}))},enviarPeticion(){const e={nombre:this.nombreUsrPeticion};f.Z.enviarPeticionContacto(e).then((e=>{this.nombreUsrPeticion="",this.message=e.data.message,this.mensajeEnviarPeticion=!0,this.successful=e.data.success,setTimeout((()=>{this.message="",this.mensajeEnviarPeticion=!1,this.successful=!1}),2e3)})).catch((e=>{console.log(e)}))},aceptarPeticion(e){f.Z.aceptarPeticion(e).then((e=>{console.log(e.data),this.message=e.data.message,this.mensajeEnviarPeticion=!0,setTimeout((function(){this.message="",this.mensajeEnviarPeticion=!1}),2e3),this.refreshList()})).catch((e=>{console.log(e)}))},cancelarPeticion(e){f.Z.cancelarPeticion(e).then((e=>{console.log(e.data),this.message=e.data.message,this.mensajeEnviarPeticion=!0,setTimeout((function(){this.message="",this.mensajeEnviarPeticion=!1}),2e3),this.refreshList()})).catch((e=>{console.log(e)}))},refreshList(){this.recuperarPeticiones(),this.currentPeticion=null,this.currentIndex=-1},setActivePeticion(e,o){this.currentPeticion=e,this.currentIndex=o},removeAllPeticiones(){f.Z.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))},searchNombre(){f.Z.getPeticionPorNombre(this.username).then((e=>{this.peticiones=e.data.peticiones,console.log(e.data)})).catch((e=>{console.log(e)}))}},mounted(){this.recuperarPeticiones()}};const J=(0,U.Z)(T,[["render",O]]);var Q=J;const X={class:"col-md-8"},ee={class:"input-group mb-3"},oe={class:"input-group-append"},te={class:"container"},re=(0,r._)("h3",null,[(0,r._)("strong",null,"Grupos")],-1),se={class:"modal fade",id:"nuevoGrupo",tabindex:"-1",role:"dialog","aria-labelledby":"nuevoGrupoLabel","aria-hidden":"true"},ne={class:"modal-dialog",role:"document"},ae={class:"modal-content"},ie=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"nuevoGrupoLabel"},"Nuevo Grupo"),(0,r._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")])],-1),ce={class:"modal-body"},le={class:"form-group"},ue=(0,r._)("label",{for:"nombreGrupo",class:"col-form-label"},"Nombre:",-1),de={class:"form-group"},pe=(0,r._)("label",{for:"message-text",class:"col-form-label"},"Visibilidad:",-1),me=(0,r._)("br",null,null,-1),he={class:"form-check-label col-form-label",for:"radioPrivado"},ge=(0,r.Uk)(" Privado "),be=(0,r._)("br",null,null,-1),ve={class:"form-check-label col-form-label",for:"radioPublico"},_e=(0,r.Uk)(" Publico "),Ce=(0,r._)("div",{class:"form-group"},[(0,r._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Cerrar"),(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Crear Grupo")],-1),Ge={key:0,class:"form-group"},Pe={class:"danger"},ke={class:"list-group m-1"},Ze=["onClick"],ye={class:"col-md-6"},we={key:0},fe=(0,r._)("h4",null,"Grupo",-1),De=(0,r._)("label",null,[(0,r._)("strong",null,"Nombre:")],-1),Ue=(0,r._)("label",null,[(0,r._)("strong",null,"Integrantes:")],-1),Ie=(0,r.Uk)(" Editar "),xe=(0,r._)("br",null,null,-1),Ee={key:1},Ne=(0,r._)("br",null,null,-1),je=(0,r._)("p",null,"Seleccione Grupo...",-1),Ae=[Ne,je];function ze(e,o,t,s,n,a){const i=(0,r.up)("Field"),u=(0,r.up)("ErrorMessage"),d=(0,r.up)("Form"),p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",X,[(0,r._)("div",ee,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Buscar por nome","onUpdate:modelValue":o[0]||(o[0]=e=>n.nombre=e)},null,512),[[c.nr,n.nombre]]),(0,r._)("div",oe,[(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[1]||(o[1]=(...e)=>a.searchNombre&&a.searchNombre(...e))}," Buscar ")])])]),(0,r._)("div",te,[re,(0,r._)("button",{onClick:o[2]||(o[2]=(...o)=>e.activarModal&&e.activarModal(...o)),class:"btn btn-success","data-toggle":"modal","data-target":"#nuevoGrupo"}," Crear Grupo "),(0,r._)("div",se,[(0,r._)("div",ne,[(0,r._)("div",ae,[ie,(0,r._)("div",ce,[(0,r.Wm)(d,{onSubmit:a.crearGrupo,"validation-schema":n.schema},{default:(0,r.w5)((()=>[(0,r._)("div",le,[ue,(0,r.Wm)(i,{modelValue:n.nuevoGrupo.nombre,"onUpdate:modelValue":o[3]||(o[3]=e=>n.nuevoGrupo.nombre=e),type:"text",name:"nombre",class:"form-control",id:"nombreGrupo"},null,8,["modelValue"]),(0,r.Wm)(u,{name:"nombre",class:"error-feedback"})]),(0,r._)("div",de,[pe,me,(0,r._)("label",he,[(0,r.Wm)(i,{modelValue:n.nuevoGrupo.visibilidad,"onUpdate:modelValue":o[4]||(o[4]=e=>n.nuevoGrupo.visibilidad=e),class:"form-check-input",type:"radio",name:"visibilidad",id:"radioPrivado",value:"0",checked:""},null,8,["modelValue"]),ge]),be,(0,r._)("label",ve,[(0,r.Wm)(i,{modelValue:n.nuevoGrupo.visibilidad,"onUpdate:modelValue":o[5]||(o[5]=e=>n.nuevoGrupo.visibilidad=e),class:"form-check-input",type:"radio",name:"visibilidad",id:"radioPublico",value:"1"},null,8,["modelValue"]),_e]),(0,r.Wm)(u,{name:"visibilidad",class:"error-feedback"})]),Ce,n.mostrarError?((0,r.wg)(),(0,r.iD)("div",Ge,[(0,r._)("h3",Pe,(0,l.zw)(n.msgError),1)])):(0,r.kq)("",!0)])),_:1},8,["onSubmit","validation-schema"])])])])]),(0,r._)("ul",ke,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.grupos,((e,o)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,l.C_)(["list-group-item",{active:o==n.currentIndex}]),key:o,onClick:t=>a.setActiveGrupo(e,o)},(0,l.zw)(e.nombre),11,Ze)))),128))]),(0,r._)("div",ye,[n.currentGrupo?((0,r.wg)(),(0,r.iD)("div",we,[fe,(0,r._)("div",null,[De,(0,r.Uk)(" "+(0,l.zw)(n.currentGrupo.nombre),1)]),(0,r._)("div",null,[Ue,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.currentGrupo.integrantes,((e,o)=>((0,r.wg)(),(0,r.iD)("li",{class:"list-group",key:o},(0,l.zw)(e.username),1)))),128))]),n.tienePermisos?((0,r.wg)(),(0,r.j4)(p,{key:0,class:"badge badge-warning",to:"/grupos/"+n.currentGrupo._id},{default:(0,r.w5)((()=>[Ie])),_:1},8,["to"])):(0,r.kq)("",!0),xe,n.esCreador?((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:o[6]||(o[6]=(...e)=>a.borrarGrupo&&a.borrarGrupo(...e)),class:"badge badge-danger"}," BORRAR GRUPO ")):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("div",Ee,Ae))])])])}var Ve=t(4868),qe=t(2954),Le=t(4231),Be={name:"grupos-list",components:{Form:qe.l0,Field:qe.gN,ErrorMessage:qe.Bc},data(){const e=Le.Ry().shape({nombre:Le.Z_().required("Introduzca un nombre para el grupo"),visibilidad:Le.Z_().required("seleccione una de las opciones")});return{mostrarError:!1,msgError:null,grupos:[],currentGrupo:null,currentIndex:-1,nombre:"",integrantes:[],tienePermisos:!1,esCreador:!1,schema:e,nuevoGrupo:{nombre:"",visibilidad:""}}},methods:{crearGrupo(){Ve.Z.nuevoGrupo(this.nuevoGrupo).then((e=>{console.log(e),e.status<400||e.status>=400&&(this.msgError=e.data)})).catch((e=>{console.log(e)}))},recuperarGrupos(){Ve.Z.getGrupos().then((e=>{this.grupos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},refreshList(){this.recuperarGrupos(),this.currentGrupo=null,this.currentIndex=-1},setActiveGrupo(e,o){this.currentGrupo=e,this.currentIndex=o,this.integrantes=this.currentGrupo.integrantes,this.permisosGrupo()},permisosGrupo(){Ve.Z.permisosGrupo(this.currentGrupo._id).then((e=>{console.log(e),this.tienePermisos=e.data.esModerador,this.esCreador=e.data.esCreador})).catch((e=>{console.log(e)}))},borrarGrupo(){Ve.Z.borrarGrupo(this.currentGrupo).then((e=>{console.log(e),this.$router.go(0)})).catch((e=>{console.log(e)}))},removeAllGrupos(){Ve.Z.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))},searchNombre(){Ve.Z.getGrupoPorNombre(this.nombre).then((e=>{this.grupos=e.data.grupos,console.log(e.data)})).catch((e=>{console.log(e)}))}},mounted(){this.recuperarGrupos()}};const Me=(0,U.Z)(Be,[["render",ze]]);var Re=Me;const We={class:"col-md-8"},He={class:"input-group mb-3"},Ke={class:"input-group-append"},Ye={key:0,class:"container"},$e=(0,r._)("h3",null,[(0,r._)("strong",null,"Conversaciones")],-1),Fe={key:0,class:"list-group"},Se=["onClick"],Oe={key:1,class:"list-group"},Te=["onClick"],Je={key:1};function Qe(e,o,t,s,n,a){const i=(0,r.up)("chat");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",We,[(0,r._)("div",He,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Buscar por nome","onUpdate:modelValue":o[0]||(o[0]=e=>n.nombre=e)},null,512),[[c.nr,n.nombre]]),(0,r._)("div",Ke,[(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[1]||(o[1]=(...o)=>e.searchNombre&&e.searchNombre(...o))}," Buscar ")])])]),n.enChat?((0,r.wg)(),(0,r.iD)("div",Je,[(0,r.Wm)(i,{grupo:n.currentGrupo,usuario:n.currentContacto},null,8,["grupo","usuario"])])):((0,r.wg)(),(0,r.iD)("div",Ye,[$e,(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[2]||(o[2]=(...e)=>a.seleccionarGrupos&&a.seleccionarGrupos(...e))}," Grupos "),(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[3]||(o[3]=(...e)=>a.seleccionarUsuarios&&a.seleccionarUsuarios(...e))}," Usuarios "),n.verUsuarios?((0,r.wg)(),(0,r.iD)("ul",Fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.usuarios,((e,o)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,l.C_)(["list-group-item",{active:o==n.currentIndex}]),key:o,onClick:o=>a.iniciarChatUsuario(e)},(0,l.zw)(e.username),11,Se)))),128))])):(0,r.kq)("",!0),n.verGrupos?((0,r.wg)(),(0,r.iD)("ul",Oe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.grupos,((e,o)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,l.C_)(["list-group-item",{active:o==n.currentIndex}]),key:o,onClick:o=>a.iniciarChatGrupo(e)},(0,l.zw)(e.nombre),11,Te)))),128))])):(0,r.kq)("",!0)]))])}var Xe=t(367),eo=t(3279),oo={components:{chat:eo["default"]},props:{grupo:Object,usuario:Object},name:"conversaciones-list",data(){return{grupos:[],currentGrupo:null,nombre:"",integrantes:[],tienePermisos:!1,usuarios:[],currentContacto:null,username:"",currentIndex:-1,verUsuarios:!1,verGrupos:!1,enChat:!1}},methods:{seleccionarGrupos(){this.verGrupos=!0,this.verUsuarios=!1},seleccionarUsuarios(){this.verGrupos=!1,this.verUsuarios=!0},recuperarGrupos(){Ve.Z.getGrupos().then((e=>{this.grupos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},recuperarContactos(){f.Z.getContactos().then((e=>{this.usuarios=e.data.contactos,console.log(e.data)})).catch((e=>{console.log(e)}))},iniciarChatGrupo(e){console.log(e),Xe.Z.iniciarChatGrupo(e).then((e=>{console.log(e);const o=e.data.chatRoom.chatRoomId;this.$router.push({path:`/chat/${o}`})})).catch((e=>{console.log(e)}))},iniciarChatUsuario(e){console.log(e),Xe.Z.iniciarChatUsuarios(e).then((e=>{console.log(e);const o=e.data.chatRoom.chatRoomId;this.$router.push({path:`/chat/${o}`})})).catch((e=>{console.log(e)}))}},mounted(){this.recuperarGrupos(),this.recuperarContactos()}};const to=(0,U.Z)(oo,[["render",Qe]]);var ro=to,so={components:{usuarioslist:x,peticioneslist:Q,gruposlist:Re,conversacioneslist:ro},data(){return{mostrarContactos:!0,mostrarPeticiones:!1,mostrarGrupos:!1,mostrarConversaciones:!1}},methods:{activarContactos(){this.mostrarContactos=!0,this.mostrarPeticiones=!1,this.mostrarGrupos=!1,this.mostrarConversaciones=!1},activarPeticiones(){this.mostrarContactos=!1,this.mostrarPeticiones=!0,this.mostrarGrupos=!1,this.mostrarConversaciones=!1},activarGrupos(){this.mostrarContactos=!1,this.mostrarPeticiones=!1,this.mostrarGrupos=!0,this.mostrarConversaciones=!1},activarConversaciones(){this.mostrarContactos=!1,this.mostrarPeticiones=!1,this.mostrarGrupos=!1,this.mostrarConversaciones=!0}}};const no=(0,U.Z)(so,[["render",i]]);var ao=no}}]);
//# sourceMappingURL=797.6cc44b7a.js.map