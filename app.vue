<template>
  <div class="wrapper">
    <Preloader />
    <Header />
    <NuxtPage />
  </div>
</template>
<script setup>
  import { toggleMenu } from '@/store/menu';
  const menu = toggleMenu();
  function menuToggle(){
    menu.toggle()
  }
  const route = useRoute();
  watch(route,(e)=>{
    if(menu.menu)
      menuToggle()
  })
</script>