<template>
  <div id="app">
    <div id="nav">

 <FormularioRegistro/>
 
  <Navegacion/>

    </div>
    <router-view/>
  </div>
</template>

<script>
import Navegacion from '../src/components/Navegacion.vue'



export default  { 
  components: {
    Navegacion
  }
}
</script>


<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";



</style>
