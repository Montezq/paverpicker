<template>
  <header class="header">
    <div :class="['header__menu-close',{'active':menu.menu}]" @click="menuToggle()"></div>
    <div class="container">
      <div class="row d_flex align-items_center justify-content_center">
        <div class="header__menu-btn ff_icon" @click="menuToggle()">
        </div>
        <div class="header__logo">
          <NuxtLink @click="() => handleMenuNavigation('/')" to="/" aria-label="Header Logo">
            <div v-html="logo"></div>
          </NuxtLink>
        </div>
        <nav :class="['header__menu', {'active':menu.menu}]">
          <ul class="header__menu-list d_flex">
            <li class="header__menu-list-item">
              <NuxtLink @click="() => handleMenuNavigation('/photography/')" to="/photography/" class="text_uppercase fw_semibold">Photography</NuxtLink>
            </li>
            <li class="header__menu-list-item">
              <NuxtLink @click="() => handleMenuNavigation('/visualisation/')" to="/visualisation/" class="text_uppercase fw_semibold">Visualisation</NuxtLink>
            </li>
            <li class="header__menu-list-item">
              <NuxtLink @click="() => handleMenuNavigation('/software/')" to="/software/" :class="['text_uppercase fw_semibold',{'active':isSoftwarePage}]">Software</NuxtLink>
            </li>
          </ul>
          <div class="d_flex justify-content_center position_absolute header__menu-block">
            <div class="header__menu-block-item position_relative">
              <button class="fs_md-10 fs_r12 btn_transparent position_relative">
                <p class="text_uppercase letter-spacing_1">Support <span class="ff_icon d_ib"> </span></p>
              </button>
              <nav class="header__menu-block-item-nav position_absolute text_center">
                <ul>
                  <li>
                    <NuxtLink @click="() => handleMenuNavigation('/faq/')" to="/faq/" class="text_uppercase fs_r12 letter-spacing_1">FAQ</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink @click="() => handleMenuNavigation('/scenes/')" to="/scenes/" class="text_uppercase fs_r12 letter-spacing_1">Scenes</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/PDFs/API_Guide.pdf"  target="_blank" class="text_uppercase fs_r12 letter-spacing_1">API Doc</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/PDFs/Customisation_Guide.pdf"  target="_blank" class="text_uppercase fs_r12 letter-spacing_1">Customisation Guide</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/PDFs/Delivery_of_Samples.pdf"  target="_blank" class="text_uppercase fs_r12 letter-spacing_1">Delivery of Samples</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/PDFs/Preperation_of_Samples.pdf"  target="_blank" class="text_uppercase fs_r12 letter-spacing_1">Preparation of Samples</NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header__menu-block-item">
              <NuxtLink @click="() => handleMenuNavigation('/contacts/')" to="/contacts/" class="text_uppercase fs_md-10 fs_r12 letter-spacing_1">Contact</NuxtLink>
            </div>
          </div>
        </nav>
        <div class="header__cta">
          <NuxtLink to="https://app.bloc-tec.com/demo" target="_blank" class="text_uppercase btn btn_primary">Try Demo</NuxtLink>
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
  import { toggleMenu } from '@/store/menu';
  import { useSlideStore } from '@/store/slideStore';
  const menu = toggleMenu();
  const route = useRoute();
  function menuToggle(){
    menu.toggle()
  }
  let slideStore = useSlideStore();
  function handleMenuNavigation(destinationPath) {
    slideStore.resetSlideState(destinationPath);
  }
  const isSoftwarePage = computed(() => {
    return route.path.includes('software');
  });
</script>