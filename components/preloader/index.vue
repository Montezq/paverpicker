<template>
  <Transition  >
    <div v-if="!loading" class="preloader d_flex align-items_center justify-content_center">
      <img src="/preloader.gif" alt="Preloader"  width="200" height="200" />
    </div>
  </Transition>
</template>
<script setup>
  defineProps({
    loading:{
      default: false,
      type: Boolean
    }
  })
</script>