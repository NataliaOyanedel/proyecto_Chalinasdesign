<template>
  <div class="registro">
    <h1>Registrar</h1>
    <FormularioRegistro  :datos="datos" />
    
  </div>
</template>

<script>
import FormularioRegistro from "../components/FormularioRegistro";
export default {
  name: "Registro",
  components: {
    FormularioRegistro
  },


  data() {
    return {
      datos: {
        picture: {
          large: ''
        },
        email: '',
        name: {
          first: '',
          last: ''
        }
      }
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(datos => (this.datos = datos.results[0]));
  },
};
</script>

<style lang="scss">
.registro { 
  text-align: center;
  padding-top: 100px;
 color: yellow;
   background-image: url('../assets/img/foto55.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100vh;
 

}

</style>