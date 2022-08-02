<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="../assets/register.png"
        class="profile-img-card"
        style="
          height:50%;
          width:50%;
          display:flex;
          align-self:center;
          filter:saturate(3);
        "
      />
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Nome de usuario</label>
            <Field name="username" type="text" class="form-control" />
            <ErrorMessage name="username" class="error-feedback alert-danger" />
          </div>
          <div class="form-group">
            <label for="password">Contrasinal</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback alert-danger" />
            <label for="password2">Repita o Contrasinal</label>
            <Field name="password2" type="password" class="form-control" />
            <ErrorMessage name="password2" class="error-feedback alert-danger" />
          </div>


          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Rexistrarse
            </button>
          </div>
        </div>
      </Form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("CAMPO OBRIGATORIO")
        .min(3, "DEBE TER MÁIS DE 3 CARACTERES")
        .max(20, "NON DEBE PASAR OS 30 CARACTERES"),
      password: yup
        .string()
        .required("CAMPO OBRIGATORIO")
        .min(3, "DEBE TER MÁIS DE 3 CARACTERES")
        .max(20, "NON DEBE PASAR OS 30 CARACTERES"),
      password2: yup
        .string()
        .required("CAMPO OBRIGATORIO")
        .min(3, "DEBE TER MÁIS DE 3 CARACTERES")
        .max(20, "NON DEBE PASAR OS 30 CARACTERES")
        .oneOf([yup.ref('password'), null], 'Non coincide co contrasinal introducido'),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style scoped>
</style>