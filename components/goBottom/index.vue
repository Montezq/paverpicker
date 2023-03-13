<template>
  <div @click="goToFooter" class="to-footer d_flex align-items_center justify-content_center cursor_pointer">
    <p class="ff_icon fs_32"></p>
  </div>
</template>
<style lang="scss">
  @import 'index';
</style>
<script setup>
  const emits = defineEmits(['goToSlide']);
  function goToFooter() {
    emits('goToSlide', 2);
  }
</script>