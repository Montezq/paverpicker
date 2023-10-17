<template>
  <div class="wrapper">
    <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWVZJ2BT"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <Preloader :loading="loading" />
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
  const loading = ref(false);
  const checkLoading = () => {
    setTimeout(() => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          loading.value = true;
        }, 1200);
      } else {
        checkLoading();
      }
    }, 100);
  }

  onMounted(() => {
    checkLoading();
  });
</script>