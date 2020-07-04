<template>
  <div class="about">
    <h1>Login</h1>
    <FormularioLogin />
  </div>
</template>

<script>
import FormularioLogin from "../components/FormularioLogin.vue";

export default {
  name: 'about',
  components: {
    FormularioLogin
  },
  
};
</script>
 <style lang="scss">
 
 .about { 
  background-image: url('../assets/img/foto333.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100vh;
  text-align: center;
  padding-top: 100px;
  color: yellow;
 }


 </style>