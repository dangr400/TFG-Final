"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[510],{7510:function(s,e,a){a.r(e),a.d(e,{default:function(){return M}});var r=a(6252),i=a(9963),o=a(3577);const t={class:"col-md-12"},c={class:"card card-container"},l=(0,r._)("img",{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"profile-img-card"},null,-1),m={key:0},n={class:"form-group"},d=(0,r._)("label",{for:"nombre"},"Nombre del grupo",-1),u={class:"form-group"},p=(0,r._)("label",{for:"visibilidad"},"Tipo de Visibilidad",-1),g={class:"form-group"},b=(0,r._)("label",{for:"password"},"Password",-1),f={class:"form-group"},h=["disabled"],v={class:"spinner-border spinner-border-sm"},_=(0,r.Uk)(" Sign Up ");function w(s,e,a,w,k,y){const q=(0,r.up)("Field"),x=(0,r.up)("ErrorMessage"),W=(0,r.up)("Form");return(0,r.wg)(),(0,r.iD)("div",t,[(0,r._)("div",c,[l,(0,r.Wm)(W,{onSubmit:y.comprobacionNuevo,"validation-schema":k.schema},{default:(0,r.w5)((()=>[k.successful?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",n,[d,(0,r.Wm)(q,{name:"nombre",type:"text",class:"form-control"}),(0,r.Wm)(x,{name:"nombre",class:"error-feedback"})]),(0,r._)("div",u,[p,(0,r.Wm)(q,{type:"radio",id:"visibilidad_publico",value:"Público",name:"nombre",class:"form-control"}),(0,r.Wm)(q,{type:"radio",id:"visibilidad_publico",value:"Privado",name:"nombre",class:"form-control"}),(0,r.Wm)(x,{name:"email",class:"error-feedback"})]),(0,r._)("div",g,[b,(0,r.Wm)(q,{name:"password",type:"password",class:"form-control"}),(0,r.Wm)(x,{name:"password",class:"error-feedback"})]),(0,r._)("div",f,[(0,r._)("button",{class:"btn btn-primary btn-block",disabled:k.loading},[(0,r.wy)((0,r._)("span",v,null,512),[[i.F8,k.loading]]),_],8,h)])]))])),_:1},8,["onSubmit","validation-schema"]),k.message?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,o.C_)(["alert",k.successful?"alert-success":"alert-danger"])},(0,o.zw)(k.message),3)):(0,r.kq)("",!0)])])}var k=a(2954),y=a(4231),q={name:"NuevoGrupo",components:{Form:k.l0,Field:k.gN,ErrorMessage:k.Bc},data(){const s=y.Ry().shape({nombre:y.Z_().required("Username is required!").min(3,"Must be at least 3 characters!").max(20,"Must be maximum 20 characters!"),email:y.Z_().required("Email is required!").email("Email is invalid!").max(50,"Must be maximum 50 characters!"),password:y.Z_().required("Password is required!").min(6,"Must be at least 6 characters!").max(40,"Must be maximum 40 characters!")});return{successful:!1,loading:!1,message:"",schema:s}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},mounted(){this.loggedIn&&this.$router.push("/profile")},methods:{comprobacionNuevo(s){this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",s).then((s=>{this.message=s.message,this.successful=!0,this.loading=!1}),(s=>{this.message=s.response&&s.response.data&&s.response.data.message||s.message||s.toString(),this.successful=!1,this.loading=!1}))}}},x=a(3744);const W=(0,x.Z)(q,[["render",w]]);var M=W}}]);
//# sourceMappingURL=510.0a7bc459.js.map