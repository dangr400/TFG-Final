<template>
  <div>
      <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Buscar por nome"
          v-model="nombre"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchNombre"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>

    <div v-if="!enChat" class="container">
        <h3>
        <strong>Conversaciones</strong>
      </h3>
      <button class="btn btn-outline-secondary" type="button"
        @click="seleccionarGrupos"
        >
        Grupos
      </button>

      <button class="btn btn-outline-secondary" type="button"
            @click="seleccionarUsuarios"
        >
            Usuarios
      </button>
        
      <ul v-if="verUsuarios" class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(usuario, index) in usuarios"
          :key="index"
          @click="iniciarChatUsuario(usuario)"
        >
          {{ usuario.nome_usuario }}
        </li>
      </ul>
      <ul v-if="verGrupos" class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(grupo, index) in grupos"
          :key="index"
          @click="iniciarChatGrupo(grupo)"
        >
          {{ grupo.nombre }}
        </li>
      </ul>
    </div>
    <div v-else>
      <chat v-bind:grupo="currentGrupo" v-bind:usuario="currentContacto"></chat>
    </div>
    
  </div>
</template>

<script>

import GruposService from "../services/grupos.service";
import UserService from "../services/user.service";
import ChatService from "../services/chat.service";
import chat from "../views/Chat.vue";

export default {
    components: {
        chat,
    },
    props: {
      grupo: Object,
      usuario: Object,
    },
    name: "conversaciones-list",
    data() {
        return {
            // para grupos
            grupos: [],
            currentGrupo: null,
            nombre: "",
            integrantes: [],
            tienePermisos: false,
            // para usuarios
            usuarios: [],
            currentContacto: null,
            username: "",
            // compartidas
            currentIndex: -1,
            verUsuarios: false,
            verGrupos: false,
            enChat: false,
        };
    },

    methods: {

        seleccionarGrupos() {
            this.verGrupos = true;
            this.verUsuarios = false;
        },

        seleccionarUsuarios() {
            this.verGrupos = false;
            this.verUsuarios = true;
        },

        recuperarGrupos() {
            GruposService.getGrupos()
                .then(response => {
                this.grupos = response.data;
                })
                .catch(e => {
                console.log(e);
                });
        },

        recuperarContactos() {
            UserService.getContactos()
                .then(response => {
                this.usuarios = response.data.contactos;
                })
                .catch(e => {
                console.log(e);
                });
        },

        iniciarChatGrupo(grupo) {
          ChatService.iniciarChatGrupo(grupo)
          .then(response => {
            const idSala = response.data.chatRoom.chatRoomId;
            this.$router.push({path: `/chat/${idSala}`})
            })
          .catch(e => {
            console.log(e);
          });
        },

        iniciarChatUsuario(usuario) {
          console.log(usuario);
          ChatService.iniciarChatUsuarios(usuario)
          .then(response => {
            const idSala = response.data.chatRoom.chatRoomId;
            this.$router.push({path: `/chat/${idSala}`})
            })
          .catch(e => {
            console.log(e);
          });
        },
    },
    mounted() {
        this.recuperarGrupos();
        this.recuperarContactos();
    },
}
</script>

<style>

</style>