<template>
  <section class="partners">
    <div class="partners__head">
      <h2 class="fs_68 text_center">
        Discover how others have created <span class="color_green">innovative</span>  
        <br> websites using our <span  class="color_green">unique</span>  software
      </h2>
    </div>
    <div class="partners__body">
      <ul class="partners__body-list">
        <li class="partners__body-item" v-for="(item, index) in partners" v-bind:key="index">
          <a :href="item.url" target="_blank" v-html="item.logo" :aria-label="'Partner logo '+item.alt">
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss">
  @import 'index';
</style>
<script setup>
  import tobermore from '~/assets/svg/logo/tobermore.svg?raw';
  import marshalls from '~/assets/svg/logo/marshalls.svg?raw';
  import ibstock from '~/assets/svg/logo/ibstock.svg?raw';
  import kilsaran from '~/assets/svg/logo/kilsaran.svg?raw';
  import breedon from '~/assets/svg/logo/breedon.svg?raw';
  import banas from '~/assets/svg/logo/banas-stones.svg?raw';
  import ethan from '~/assets/svg/logo/ethan-mason.svg?raw';
  import ag from '~/assets/svg/logo/ag.svg?raw';
  import stone from '~/assets/svg/logo/global-stone.svg?raw';
  import kingscourt from '~/assets/svg/logo/kingscourt.svg?raw';
  import roadstone from '~/assets/svg/logo/roadstone.svg?raw';
  import outhaus from '~/assets/svg/logo/outhaus.svg?raw';
  const partners = [
    {
      logo: tobermore,
      url: '#',
      alt: 'Tobermore'
    },
    {
      logo: marshalls,
      url: '#',
      alt: 'Marshalls'
    },
    {
      logo: ibstock,
      url: '#',
      alt: 'Ibstock'
    },
    {
      logo: kilsaran,
      url: '#',
      alt: 'Kilsaran'
    },
    {
      logo: breedon,
      url: '#',
      alt: 'Breedon'
    },
    {
      logo: banas,
      url: '#',
      alt: 'Banas Stones'
    },
    {
      logo: ethan,
      url: '#',
      alt: 'Ethan Mason'
    },
    {
      logo: ag,
      url: '#',
      alt: 'AG'
    },
    {
      logo: stone,
      url: '#',
      alt: 'Global Stone'
    },
    {
      logo: kingscourt,
      url: '#',
      alt: 'Kingscourt'
    },
    {
      logo: roadstone,
      url: '#',
      alt: 'Roadstone'
    },
    {
      logo: outhaus,
      url: '#',
      alt: 'Outhaus'
    }
  ]
</script>