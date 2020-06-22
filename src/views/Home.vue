<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3 @click="logout">Log out</h3>

    <h1>hola hola </h1>
  </div>
</template>



<script>
export default {
  name: "Home",
  beforeCreate() {
    let user = JSON.parse(localStorage.getItem("user"));
    user ? false : this.$router.push({ name: "Registro" });
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
