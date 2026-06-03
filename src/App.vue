<script setup>

import { ref } from 'vue';

const abierto = ref(false);

</script>




<template>
  <div>

    <header>

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
      

    <button 
      class="btn-sidebar-open"
      @click="abierto = true">
      &#9776; Menu
    </button>

    <aside
      class="sidebar"
      :class="{ abierto }"
    >
      <button
        class="btn-sidebar-close"
        @click="abierto = false"
      >
        &times; Close
      </button>
   
        <router-link @click="abierto = false" to="/">Home</router-link>
        <router-link @click="abierto = false" to="/about">About</router-link>
        <router-link @click="abierto = false" to="/contact">Contact</router-link>
        <router-link @click="abierto = false" class="anidacion" to="/dashboard/profile">Profile</router-link>
        <router-link @click="abierto = false" class="anidacion" to="/dashboard/configuration">Configuration</router-link>

    </aside>


    </header>



    <div class="router-container">
    <router-view v-slot="{ Component, route }">
      
 <!-- <transition name="fade"> -->
      <transition :name="route.meta.transition || 'fade'">
      
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





.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 3s ease;
  position: absolute;
  width: 100%;
}

.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}

.fade-slow-enter-to,
.fade-slow-leave-from {
  opacity: 1;
}



.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .3s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}





.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .3s ease;
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}



/* 

ACTIVE
.demo-enter-active{
  transition: all 3s ease;
}

.demo-leave-active{
  transition: all 1s ease;
}
  


ENTER     (el nuevo componente)

.demo-enter-from{
  opacity: 0;
  transform: translateY(100px);
}
.demo-enter-to{
  transform: translateY(0px);
}



LEAVE   (el actual componente)

.demo-leave-from{
  transform: translateY(0px);
}

.demo-leave-to{
  transform: translateY(300px);
  opacity: 0;
}
  
*/

header{
  border: 5px solid #d51afb;
}

.sidebar{
  position: fixed;
  z-index: 9999;
  top: 0;
  left: -200px;
  width: 200px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
  transition: 0.3s;
}
.sidebar > a{
  display: block;
  margin: 10px;
  text-decoration: none;
  color: #fff;
}

.sidebar.abierto{
  left: 0;
}

.btn-sidebar-open{
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
}

.btn-sidebar-close{
  top: 10px;
  left: 10px;
  background-color: #544f4f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
}
</style>
