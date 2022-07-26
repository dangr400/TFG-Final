/**
 * @file Documento para renderizar las vistas del frontend
 * @author Daniel Gomez Rodriguez
 * @since 02.10.2021
 */
 import { createApp } from "vue";
 import App from "./App.vue";
 import router from "./router";
 import store from "./store";
 import AppLayout from './layouts/AppLayout';
 import "bootstrap";
 import "bootstrap/dist/css/bootstrap.min.css";
 import { FontAwesomeIcon } from './plugins/font-awesome';
 //import { Mensaxes } from "./assets/texto-traducido.json";
 //import VueI18n from "VueI18n";
 // Libreria para escoller o idioma co que se mostra a páxina.
 /*
 const i18n = new VueI18n({
  locale: 'gl',
  Mensaxes,
 })
 */
 
 createApp(App)
   .use(router)
   .use(store)
   .component("font-awesome-icon", FontAwesomeIcon)
   .component("AppLayout", AppLayout)
   .mount("#app");
