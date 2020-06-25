<template>
  <div>
  <!-- ======= Header/ Navbar ======= -->
  <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll" href="#Home">ChalinasDesign_</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Home"  class="nav-link js-scroll active" >Home</router-link>
          </li>

           <li class="nav-item">
            <router-link to="/Productos"       class="nav-link js-scroll active" >Productos</router-link>
          </li>
         
         
 <li class="nav-item">
            <router-link to="/"       class="nav-link js-scroll active" href="index.html">Contacto</router-link>
          </li>
         
          <li class="nav-item">
            <router-link to="/about"       class="nav-link js-scroll active" href="index.html">Login</router-link>
          </li>
         
          <li class="nav-item">
            <router-link to="/Registro"       class="nav-link js-scroll active" href="index.html">Registrarse</router-link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>

  


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >

.navbar-b {
  transition: all .5s ease-in-out;
  background-color: transparent;
  padding-top: 1.563rem;
  padding-bottom: 1.563rem;
}

.navbar-b.navbar-reduce {
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
}

.navbar-b.navbar-trans .nav-item, .navbar-b.navbar-reduce .nav-item {
  position: relative;
  padding-right: 10px;
  padding-left: 0;
}

@media (min-width: 768px) {
  .navbar-b.navbar-trans .nav-item, .navbar-b.navbar-reduce .nav-item {
    padding-left: 10px;
  }
}

.navbar-b.navbar-trans .nav-link, .navbar-b.navbar-reduce .nav-link {
  color: palevioletred;
  text-transform: uppercase;
  font-weight: 600;
}

.navbar-b.navbar-trans .nav-link:before, .navbar-b.navbar-reduce .nav-link:before {
  content: '';
  position: absolute;
  margin-left: 0px;
  width: 0%;
  bottom: 0;
  left: 0;
  height: 2px;
  transition: all 500ms ease;
}

@media (min-width: 768px) {
  .navbar-b.navbar-trans .nav-link:before, .navbar-b.navbar-reduce .nav-link:before {
    margin-left: 18px;
  }
}

.navbar-b.navbar-trans .nav-link:hover, .navbar-b.navbar-reduce .nav-link:hover {
  color: #1B1B1B;
}

.navbar-b.navbar-trans .nav-link:hover:before, .navbar-b.navbar-reduce .nav-link:hover:before {
  width: 35px;
}

.navbar-b.navbar-trans .show > .nav-link:before,
.navbar-b.navbar-trans .active > .nav-link:before,
.navbar-b.navbar-trans .nav-link.show:before,
.navbar-b.navbar-trans .nav-link.active:before, .navbar-b.navbar-reduce .show > .nav-link:before,
.navbar-b.navbar-reduce .active > .nav-link:before,
.navbar-b.navbar-reduce .nav-link.show:before,
.navbar-b.navbar-reduce .nav-link.active:before {
  width: 35px;
}

.navbar-b.navbar-trans .nav-link:before {
  background-color: paleturquoise;
}

.navbar-b.navbar-trans .nav-link:hover {
  color:black;
}

.navbar-b.navbar-trans .show > .nav-link,
.navbar-b.navbar-trans .active > .nav-link,
.navbar-b.navbar-trans .nav-link.show,
.navbar-b.navbar-trans .nav-link.active {
  color: palevioletred;
}

.navbar-b.navbar-reduce {
  transition: all .5s ease-in-out;
  background-color:black;
  padding-top: 15px;
  padding-bottom: 15px;
}

.navbar-b.navbar-reduce .nav-link {
  color: #0078ff;
}

.navbar-b.navbar-reduce .nav-link:before {
  background-color: #0078ff;
}

.navbar-b.navbar-reduce .nav-link:hover {
  color: #0078ff;
}

.navbar-b.navbar-reduce .show > .nav-link,
.navbar-b.navbar-reduce .active > .nav-link,
.navbar-b.navbar-reduce .nav-link.show,
.navbar-b.navbar-reduce .nav-link.active {
  color: #0078ff;
}

.navbar-b.navbar-reduce .navbar-brand {
  color: #0078ff;
}

.navbar-b.navbar-reduce .navbar-toggler span {
  background-color: #1B1B1B;
}

.navbar-b .navbar-brand {
  color: palevioletred;
  font-size: 1.6rem;
  font-weight: 600;
}

.navbar-b .navbar-nav .dropdown-item.show .dropdown-menu,
.navbar-b .dropdown.show .dropdown-menu,
.navbar-b .dropdown-btn.show .dropdown-menu {
  transform: translate3d(0px, 0px, 0px);
  visibility: visible !important;
}

.navbar-b .dropdown-menu {
  margin: 1.12rem 0 0;
  border-radius: 0;
}

.navbar-b .dropdown-menu .dropdown-item {
  padding: .7rem 1.7rem;
  transition: all 500ms ease;
}

.navbar-b .dropdown-menu .dropdown-item:hover {
  background-color: #0078ff;
  color: black;
  transition: all 500ms ease;
}

.navbar-b .dropdown-menu .dropdown-item.active {
  background-color: #0078ff;
}

/*--/ Hamburger Navbar /--*/
.navbar-toggler {
  position: relative;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: 0;
}

.navbar-toggler span {
  display: block;
  background-color:black;
  height: 3px;
  width: 25px;
  margin-top: 4px;
  margin-bottom: 4px;
  transform: rotate(0deg);
  left: 0;
  opacity: 1;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  transition: transform .35s ease-in-out;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
  position: absolute;
  left: 12px;
  top: 10px;
  transform: rotate(135deg);
  opacity: 0.9;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
  height: 12px;
  visibility: hidden;
  background-color: transparent;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
  position: absolute;
  left: 12px;
  top: 10px;
  transform: rotate(-135deg);
  opacity: 0.9;
}



</style>