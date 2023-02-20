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
              <NuxtLink to="/photography/">Photography</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/visualisation/">Visualisation</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/software/">Software</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>Software Modules</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/software/api-module/">API Module</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/software/blender-module/">Blender Module</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/software/textures-module/">Texture Module</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>Scenes</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/scenes/paving/">Paving</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/scenes/walling/">Walling</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/scenes/internal/">Internal</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/scenes/roofing/">Roofing</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>About Us</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/faq/">FAQ</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Our Clients</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/contacts/">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <Socials />
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
  @import 'index';
</style>