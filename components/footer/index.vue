<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer__top">
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>What we do</p>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => handleMenuNavigation('/photography/')" to="/photography/">Photography</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => handleMenuNavigation('/visualisation/')" to="/visualisation/">Visualisation</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => handleMenuNavigation('/software/')" to="/software/">Software</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>Software Add-on's</p>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => handleMenuNavigation('/software/blender-module/')" to="/software/blender-module/">Blender</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => handleMenuNavigation('/software/textures-module/')" to="/software/textures-module/">Texture</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => handleMenuNavigation('/software/api-module/')" to="/software/api-module/"> API</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>Scenes</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/scenes/">All scenes</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink  to="/scenes/paving/">Paving</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink  to="/scenes/walling/">Walling</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink  to="/scenes/flooring/">Flooring</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink  to="/scenes/roofing/">Roofing</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>About Us</p>
            </li>
            <li class="footer__item">
              <NuxtLink  to="/faq/">FAQ</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink @click="() => navigateToSpecialSlide('/')" to="/">Our Clients</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/contacts/">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <Socials />
        <div class="footer__bottom-text"><p>BLOC-TEC is a trading name of Paver Picker Ltd.</p></div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
  @import 'index';
</style>
<script setup>
  import { useSlideStore } from '@/store/slideStore';
  const route = useRoute();
  let slideStore = useSlideStore();
  function handleMenuNavigation(destinationPath) {
    slideStore.resetSlideState(destinationPath);
  }
  function navigateToSpecialSlide(destinationPath) {
    slideStore.setSlideState(destinationPath, {
        current: 6,
        next: 7,
        past: 5
    });
}
</script>