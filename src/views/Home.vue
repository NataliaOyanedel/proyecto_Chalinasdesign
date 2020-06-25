<template>
  <div class="home">


  <Navegacion/>
 <Productos/>
  </div>
</template>

<script>

import Navegacion from '../components/Navegacion.vue'
import Productos from '../components/Productos.vue'


export default {
  name: 'Home',
  components:{
    Navegacion, Productos
  }
}
</script>
