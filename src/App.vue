<script setup>

</script>

<template>
  <div>
    <img src="@/assets/img/logo.png" alt="" class="logo">

    <nav>
      <router-link to="/">Home</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />


  </div>
</template>

<style scoped>
.logo{
    width: 100px;
}

.page{
    background-color: #b5cfb0;
    padding: 20px;
    min-height: 80vh;
}
</style>
