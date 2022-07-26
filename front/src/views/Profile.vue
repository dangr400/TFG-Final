<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Información de <strong>{{currentUser.username}}</strong> 
      </h3>
    </header>
    <div class="jumbotron">
      <h3>Datos da sesión</h3>
      <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
      </p>
      <p>
        <strong>Tempo de validez da sesión actual:</strong>
        {{currentUser.caducidad / 3600}} horas
      </p>
    </div>
    <div class="jumbotron">
      <h3>Datos do usuario</h3>
      <p>
        <strong>ID Usuario:</strong>
        {{currentUser.id}}
      </p>
      <p>
        <strong>Visibilidade:</strong>
        {{currentUser.configuracion.publico}}
      </p>
      <p>
        <strong>Persistenza de mensaxes:</strong>
        {{currentUser.configuracion.persistencia_msgs}}
      </p>
      <button @click="activarModal" class="btn btn-success" data-toggle="modal" data-target="#modUsuario">
            Modificar configuración
      </button>
    </div>
  <div class="modal fade" id="modUsuario" tabindex="-1" role="dialog" aria-labelledby="modUsuarioLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modUsuarioLabel">Modificar datos usuario</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="modificarDatosUsuario">
            <div class="form-group">
              <label for="message-text" class="col-form-label">Visibilidad:</label>
              <br>
              <Field v-model="datosUsuario.configuracion.publico" class="form-check-input" type="radio" name="visibilidad" id="visibilidadNo" value="false" checked />
              <label class="form-check-label col-form-label" for="visibilidadNo">
                Privado
              </label>
              <br>
              <Field v-model="datosUsuario.configuracion.publico" class="form-check-input " type="radio" name="visibilidad" id="visibilidadSi" value="true" />
              <label class="form-check-label col-form-label" for="visibilidadSi">
                Publico
              </label>
              <ErrorMessage name="visibilidad" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="visibilidad2No" class="col-form-label">Persistenza Mensaxes:</label>
              <br>

              <Field v-model="datosUsuario.configuracion.persistencia_msgs" class="form-check-input" type="radio" name="visibilidad2" id="visibilidad2No" value="false" checked />
              <label class="form-radio-label" for="visibilidad2">
                NON gardar mensaxes
              </label>
              <br>

              <Field v-model="datosUsuario.configuracion.persistencia_msgs" class="form-check-input " type="radio" name="visibilidad2" id="visibilidad2Si" value="true" />
              <label class="form-check-label col-form-label" for="visibilidad2Si">
                Gardar mensaxes
              </label>
              <ErrorMessage name="visibilidad2" class="error-feedback" />
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-success">Modificar Usuario</button>
            </div>
            <div v-if="mostrarError" class="form-group">
              <p class="alert-danger">{{msgAviso}}</p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import UserService from "../services/user.service";

export default {
  name: 'Profile',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {

    modificarDatosUsuario() {
      console.log(this.datosUsuario);
      UserService.updateUsuario(this.datosUsuario)
        .then(response =>{
          if (response.status < 400) {
            this.msgAviso = "Grupo Creado";
            this.$router.go('/profile');

          } else if (response.status >= 400){
            this.msgAviso = "Ok";
            this.mostrarError = true;
          }
          
        })
        .catch(e => {
          this.msgAviso = "Algo foi mal no servidor..." + e;
          this.mostrarError = true;
        });
        setTimeout(this.ocultaMensaxe,3000);
    },

    ocultaMensaxe() {
      this.msgAviso = null;
      this.mostrarError = false;
    },
  },

  data() {
    return {
      mostrarError: false,
      msgAviso: null,
      grupos: [],
      currentUsuario: null,
      currentIndex: -1,
      nombre: "",
      integrantes: [],
      tienePermisos: false,
      esCreador: false,
      datosUsuario: {
        id: this.$store.state.auth.user.id,
        configuracion: {
          publico: false,
          persistencia_msgs: false
        },
      },
    };
  },

  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
  .btn {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>