<template>
  <div>
    <div class="wrapper">
      <ul v-if="mensajes" class="messages">
        <li
          v-for="(message, index) in mensajes"
          :key="index"
          class="message"
        >
          <div v-if="message.emisor === usuarioLogueado" class="message propio">
            <strong  class="message">Eu</strong>
            <br>
            <span class="message">{{ message.mensaje }}</span>
          </div>
          <div v-else class="message integrante">
            <strong class="message">{{ message.emisor }}</strong>
            <br>
            <span class="message">{{ message.mensaje }}</span>
          </div>
        </li>
      </ul>
    </div>
    <form @submit.prevent="onSubmit" class="form">
      <textarea v-model="input" placeholder="Escribir mensaxe..." class="input" />
      <br>
      <button :disabled="!isValid" class="send-button">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MessagePanel",

  props: {
    mensajes: Array,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("input", this.input);
      this.input = "";
    },
  },
  computed: {
    isValid() {
      return this.input.length > 0;
    },
    usuarioLogueado() {
      return this.$store.state.auth.user.nome_usuario ;
    },
  },
};

</script>

<style scoped>
.header {
  line-height: 40px;
  padding: 10px 20px;
  border-bottom: 1px solid #dddddd;
}
.messages {
  margin: 0;
  padding: 20px;
  background-color: #eff7ff;

}
.wrapper {
  position: absolute;
  height: inherit;
  width: 40%;
  overflow: auto;
}
.message {
  list-style: none;
  margin-bottom: 10px;
}
.propio {
  margin-left: 30%;
  background-color: #cde3f8;
}
.integrante {
  margin-right: 30%;
  background-color: #9badbd;
}
.sender {
  font-weight: bold;
  margin-top: 5px;
}
.form {
    bottom: 0%;
    left: 50%;
  padding: 10px;
}
.input {
  margin-top: 50%;
  width: 80%;
  resize: none;
  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #000;
}
@media (max-width: 600px) {
  .input {
    margin-top: 150%;
  }
}
@media (max-width: 980px) {
  .input {
    margin-top: 100%;
  }
}
.send-button {
  vertical-align: top;
  width: 20%;
}
</style>