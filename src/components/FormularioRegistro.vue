<template>
  <div id="FormularioRegistro">
    <div class="form-group">
      <label for="exampleInputEmail1">Foto de perfil</label>
      <div class="foto" :style="{ backgroundImage: 'url(' + datos.picture.large +')' }"></div>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Nombre</label>
      <input type="text" class="form-control" v-model="nombreUser" />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Correo electrónico</label>
      <input type="email" class="form-control" v-model="datos.email" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Contraseña</label>
      <input v-model="password" type="password" class="form-control" />
    </div>
    <button @click="registrarUsuario" class="btn btn-primary">Registrar</button>
 
 </div>


</template>



<script>
import firebase from 'firebase'; 

export default {
  props: ["datos"],
   data() {
        return {
            email:'',
            password: '',
            nombreUser: ''
          
        }
    },
    methods: {
        registrarUsuario(){
            if (this.nombreUser && this.email && this.password){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(response=>{
                    console.log(response.user)
                    return response.user.updateProfile({
                        displayName: this.nombreUser
                    }).then(()=>{
                        this.nombreUser = '';
                        this.email = '';
                        this.password = '';
                        this.$router.push('/');
                    })
                }).catch(error => console.error(error))
            }else{
                alert("Ingrese un correo y una contraseña");
            }
        }
    },
}
</script>
  


<style lang="scss">

  #FormularioRegistro{
    width: 40%;
    margin: auto;
    border: 1px solid;
    padding: 20px;
    border-radius: 15px;
  
  }
.FormularioRegistro { 
  background-color: black;
}
  .foto{
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
  }

</style>
