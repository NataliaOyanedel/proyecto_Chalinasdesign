<template>
  <div class="about">
    <h1>Login</h1>
    <FormularioLogin />
  </div>
</template>

<script>
import FormularioLogin from "../components/FormularioLogin.vue";
export default {
  name: 'Login',
  components: {
    FormularioLogin
  },
  
};
</script>
 <style lang="scss">
 
 .about { 
   background-color: wheat;
   padding-top: 100px;

 }

 h1 { 
   text-align: center;
 }
 </style>