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
              <NuxtLink to="/">Photography</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Visualisation</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Software</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>Software Modules</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">API Module</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Blender Module</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>Scenes</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Paving</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Walling</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Internal</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Roofing</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer__list">
            <li class="footer__item">
              <p>About Us</p>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">FAQ</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Clients</NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink to="/">Contact</NuxtLink>
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