<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ datos.cabecera }}</h3>
    </header>
    <div class="botonera">
        <button v-for="(item,index) in datos.menus" :key="index" class="btn-secondary" v-on:click="mostrar(item,index)">{{item}}</button>
    </div>
    <body class="jumbotron">
       <div v-html="datos.content"></div>
    </body>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      
      datos:{
        "cabecera": "",
        "menus": ["Qué é isto?","Para quén está deseñado","Documentación"],
        "saludos": ["Hola","Ola","Bojour","Hello","Gütten","Nǐ hǎo"],
        "content": "",
      },
      
    };
  },
  mounted() {
        this.nuevoSaludo();
  },
  methods: {
    nuevoSaludo() {
      var dado = Math.floor(Math.random() * 6);
      this.datos.cabecera = this.datos.saludos[dado];
    },
    mostrar(item,index){
      this.nuevoSaludo();
      switch (index) {
        case 0:
          this.datos.content = '<h1 style="text-align:center; background-color:#CCD6A6">Qué é isto?</h1>' +
                                '<div class="jumbotron" style="background-color:#F7EDDB;text-align:center">' +
                                '<p>Isto é unha aplicación que permite enviar e recibir mensaxes de forma instantánea.</p>' +
                                '<p>Foi creada para o traballo de fin de grao do curso 2020-2021 por Daniel Gómez Rodríguez</p>' +
                                '<p>Para comezar o seu uso, acceda ao punto de menú "Comunicacións" no menú superior da páxina</p>' +
                                '<p>(Se non o vé, ten que iniciar sesión no sistema)</p>' +
                                '</div>' +
                                '';
          break;
        case 2:
          this.datos.content = '<a href="docs/TFG_DOCUMENTACION.pdf" target="_blank">ligazón da documentación do TFG</a>';
          break;
        default:
          this.datos.content = '<h1 style="text-align:center; background-color:#CCD6A6">Para quén se fixo?</h1>' +
                                '<div class="jumbotron" style="background-color:#F7EDDB;text-align:center">' +
                                '<p>Esta aplicación está pensada para alguén que teña interese en introducirse no mundo da informática, ofrecendo unha aplicación sinxela e persoalizable.</p>' +
                                '</div>' +
                                '';
          break;
      }
    }
  },
};
</script>