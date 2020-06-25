<template>
  <div id="FormularioRegistro">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Foto de perfil</label>
          <div class="foto">
          </div>
        </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Nombre</label>
        <input
          type="text"
          class="form-control"
         
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Correo electrónico</label>
        <input
          type="email"
          class="form-control"
         
     
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control"  />
      </div>
      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  props:[ 'datos' ],
  computed: {
    name(){
      return `${this.datos.name.first} ${this.datos.name.last}`
    }
  },
}
</script>

<style  scoped>
  #FormularioRegistro{
    width: 40%;
    margin: auto;
    border: 1px solid;
    padding: 20px;
    border-radius: 15px;
  }

  .foto{
    background-image: url(https://mba.americaeconomia.com/sites/mba.americaeconomia.com/files/styles/article_full_width/public/field/image/man-1209494_1920.jpg?itok=zLJIltVr);
    background-position: center;
    background-size: cover;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
  }
</style>
