<script setup>



</script>




<template>
  <div>
    <img src="@/assets/img/logo.png" alt="" class="logo">

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link class="anidacion" to="/dashboard/profile">Profile</router-link>
      <router-link class="anidacion" to="/dashboard/configuration">Configuration</router-link>
    </nav>

    <nav>
      <router-link to="/product/1">Product 1</router-link>
      <router-link to="/product/2">Product 2</router-link>
      <router-link to="/product/3">Product 3</router-link>
      <router-link to="/product/4">Product 4</router-link>
    </nav>

    <nav>
      <router-link v-for="i in 4" :key="i" :to="`/product/${i}`">Product {{ i }}</router-link>
    </nav>




    <div class="router-container">
    <router-view v-slot="{ Component, route }">
      
      <transition name="fade">
      
        <component
          :is="Component"
          :key="route.fullPath"
          class="route-page"
        />
  
      </transition>

    </router-view>
    </div>

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

nav{
    margin-bottom: 20px;
    border: 1px solid #333;
    width: fit-content;
    padding: 10px;
}

nav a{
    margin-right: 10px;
    text-decoration: none;
    background-color: rgb(168, 143, 46);
    color: #fff;

    padding: 5px 10px;
    border-radius: 5px;
}

nav a.anidacion{
    background-color: rgb(69, 137, 60);
}



.router-container{
    position: relative;
}
.route-page{
    width: 100%;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
  position: absolute;
  width: 100%;
}


.fade-enter-from{
  opacity: 0;
}

.fade-enter-to{
  opacity: 1;
}




.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

/* ACTIVE */
/* .pato-enter-active{
  transition: all 3s ease;
}
.pato-leave-active{
  transition: all 1s ease;
} */


/* ENTER     (el nuevo componente)*/
/* .pato-enter-from{
  opacity: 0;
  transform: translateY(100px);
}
.pato-enter-to{
  transform: translateY(0px);
}
 */



/* LEAVE   (el actual componente) */
/* .pato-leave-from{
  transform: translateY(0px);
}

.pato-leave-to{
  transform: translateY(300px);
  opacity: 0;
} */



</style>
