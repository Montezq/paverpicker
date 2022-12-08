<template>
  <header class="header">
    <div class="container">
      <div class="row d_flex align-items_center justify-content_center">
        <div class="header__logo">
          <NuxtLink to="/">
            <div v-html="logo"></div>
          </NuxtLink>
        </div>
        <div class="header__menu">
          <ul class="header__menu-list d_flex">
            <li class="header__menu-list-item">
              <NuxtLink to="/" class="text_uppercase fw_semibold">Photography</NuxtLink>
            </li>
            <li class="header__menu-list-item">
              <NuxtLink to="/" class="text_uppercase fw_semibold">Visualisation</NuxtLink>
            </li>
            <li class="header__menu-list-item">
              <NuxtLink to="/" class="text_uppercase fw_semibold">Software</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="header__cta">
          <a href="Get started" class="text_uppercase btn btn_primary">Get started</a>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
  @import 'header';
</style>
<script setup>
  import logo  from '@/assets/svg/logo/logo.svg?raw';
</script>