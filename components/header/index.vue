<template>
  <header class="header">
    <div :class="['header__menu-close',{'active':menu.menu}]" @click="menuToggle()"></div>
    <div class="container">
      <div class="row d_flex align-items_center justify-content_center">
        <div class="header__menu-btn" @click="menuToggle()">
        </div>
        <div class="header__logo">
          <NuxtLink to="/" aria-label="Header Logo">
            <div v-html="logo"></div>
          </NuxtLink>
        </div>
        <div :class="['header__menu', {'active':menu.menu}]">
          <ul class="header__menu-list d_flex">
            <li class="header__menu-list-item">
              <NuxtLink to="photography" class="text_uppercase fw_semibold">Photography</NuxtLink>
            </li>
            <li class="header__menu-list-item">
              <NuxtLink to="visualisation" class="text_uppercase fw_semibold">Visualisation</NuxtLink>
            </li>
            <li class="header__menu-list-item">
              <NuxtLink to="software" class="text_uppercase fw_semibold">Software</NuxtLink>
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
  import logo  from '~/assets/svg/logo/logo.svg?raw';
  import { toggleMenu } from '@/store/menu'
  const menu = toggleMenu();
  function menuToggle(){
    menu.toggle()
  }
</script>