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
<style lang="scss" scoped>
  .preloader{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: $black;
    div{
      width: 200px;
      @include tabletPortrait{
        width: 180px;
      }
    }
  }
</style>
<script setup>
  import { Vue3Lottie } from 'vue3-lottie'
  import preloader from '~/assets/svg/loader.json';
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