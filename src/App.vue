<template>
  <div>
    <Navegacion/>
    <router-view/>
      <Footer/>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue'
import Footer from './components/Footer.vue'

export default  { 
  components: {
    Navegacion,Footer
  }
}
</script>


<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";



</style>
