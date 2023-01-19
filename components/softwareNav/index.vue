<template>
  <nav class="software-nav position_absolute d_flex align-items_center justify-content_center">
    <div class="software-nav__item">
      <NuxtLink to="/software/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon" v-html="logo"></div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">Paver Picker</p>
        </div>
      </NuxtLink>
    </div>
    <div class="software-nav__item">
      <NuxtLink to="/software/blender-module/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon">
          <p class="ff_icon"></p>
        </div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">Blender Module</p>
        </div>
      </NuxtLink>
    </div>
    <div class="software-nav__item">
      <NuxtLink to="/software/api-module/" class="software-nav__item-link position_relative d_flex flex_column align-items_center">
        <div class="software-nav__item-link-icon software-nav__item-link-icon_custom d_flex flex_wrap">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="software-nav__item-link-text">
          <p class="fw_semibold">API Module</p>
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
</script>