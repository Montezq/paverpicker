<template>
  <Transition  >
    <div v-if="!loading" class="preloader d_flex align-items_center justify-content_center">
      <client-only>
        <Vue3Lottie
          :animationData="preloader"
        />
      </client-only>
    </div>
  </Transition>
</template>
<style lang="scss" >
  @import 'main.scss';
</style>
<script setup>
  import preloader from '~/assets/loader.json';
  const nuxtApp = useNuxtApp();
  const loading = ref(false);

  onMounted(() => {
    if(document.readyState === 'complete'){
      setTimeout(() => {
        loading.value = true;
      }, 1600);
    }
  })

  const checkLoading = () => {
    setTimeout(() => {
      if (!loading.value) 
        loading.value = true;
    }, 2000);
  }
</script>