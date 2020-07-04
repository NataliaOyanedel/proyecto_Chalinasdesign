<template>
  

    <div id="FormularioLogin">
        <div class="form-group">
    <label for="email">Ingrese el correo electrónico: </label>
    <input type="email" v-model="correo" placeholder="Ingrese su correo">
    </div>
      <div class="form-group">
    <label for="clave">Ingrese la contraseña: </label>
    <input type="password" v-model="clave" placeholder="Ingrese su clave">
    </div>
    <button @click="loginUsuario" class="btn btn-primary">Entrar</button>
    
 
    <a @click="restablecer" href="#">Olvide la contraseña</a> | 
    <router-link to="/registro">Registrate</router-link>
 </div>

</template>
















<script>

import firebase from 'firebase';
export default {
  name: "login",
  data() {
    return {
      clave: null,
      correo: null,
    }
  },
  methods: { 
    loginUsuario(){
      if(this.clave && this.correo){
        firebase.auth().signInWithEmailAndPassword(this.correo,this.clave).then((datos)=>{
          console.log(datos.user.email);
          console.log(datos.user.uid);
          this.correo = null;
          this.clave = null;
          this.$router.push('/');
        }).catch(error=> {
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }else if(error.code == 'auth/wrong-password'){
            alert("La contraseña no es válida o el usuario no tiene una contraseña.");
          }else {
            alert(error.message);
          }
        })
      }else{
        alert("Ingrese datos");
      }
    },
    restablecer(){
      if (this.correo){
        firebase.auth().sendPasswordResetEmail(this.correo).then(function() {
          console.log("enviado")
        }).catch(function(error) {
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }
        });
      }else {
        alert("Para recuperar contraseña ingrese un correo valido");
      }
    } 
  }
}
</script>



<style>





#FormularioLogin {
  width: 40%;
  margin: auto;
  border: 1px solid;
  padding: 10px;
  border-radius: 15px;
  color: black;
}
</style>
