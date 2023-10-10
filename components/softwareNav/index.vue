<template>
  <nav class="software-nav position_fixed d_flex align-items_center justify-content_center">
    <div class="software-nav__item">
      <NuxtLink @click="() => handleMenuNavigation('/software/')" to="/software/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon" v-html="logo"></div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">Base Software</p>
        </div>
      </NuxtLink>
    </div>
    <div class="software-nav__item">
      <NuxtLink @click="() => handleMenuNavigation('/software/blender-module/')" to="/software/blender-module/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon">
          <p class="ff_icon"></p>
        </div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">Blender Add-on</p>
        </div>
      </NuxtLink>
    </div>
    <div class="software-nav__item">
      <NuxtLink @click="() => handleMenuNavigation('/software/textures-module/')" to="/software/textures-module/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon">
          <p class="ff_icon"></p>
        </div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">Textures Add-on</p>
        </div>
      </NuxtLink>
    </div>
    <div class="software-nav__item">
      <NuxtLink @click="() => handleMenuNavigation('/software/api-module/')" to="/software/api-module/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon">
          <p class="ff_icon"></p>
        </div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">API Add-on</p>
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>
<style lang="scss" >
  @import 'main.scss';
</style>
<script setup>
  import logo  from '~/assets/svg/logo/logo_icon.svg?raw';
  import { useSlideStore } from '@/store/slideStore';
  const route = useRoute();
  let slideStore = useSlideStore();
  function handleMenuNavigation(destinationPath) {
    slideStore.resetSlideState(destinationPath);
  }
</script>