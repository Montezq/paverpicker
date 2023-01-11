<template>
  <section class="partners">
    <div class="partners__head">
      <h2 class="fs_68 text_center">
        Discover how <br class="dt_block"> others have <br class="dt_block"> created <span class="color_green">innovative</span>  
        <br> websites using our <br class="dt_block"> <span  class="color_green">unique</span>  software
      </h2>
    </div>
    <div class="partners__body">
      <ul class="partners__body-list d_flex flex_wrap">
        <li class="partners__body-item d_flex align-items_center justify-content_center" v-for="(item, index) in partners" v-bind:key="index">
          <a :href="item.url" class="d_flex align-items_center justify-content_center" target="_blank" v-html="item.logo" :aria-label="'Partner logo '+item.alt">
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
  import wienerberge from '~/assets/svg/logo/wienerberge.svg?raw';
  import banas from '~/assets/svg/logo/banas-stones.svg?raw';
  import ethan from '~/assets/svg/logo/ethan-mason.svg?raw';
  import ag from '~/assets/svg/logo/ag.svg?raw';
  import stone from '~/assets/svg/logo/global-stone.svg?raw';
  import forticrete from '~/assets/svg/logo/forticrete.svg?raw';
  import roadstone from '~/assets/svg/logo/roadstone.svg?raw';
  import outhaus from '~/assets/svg/logo/outhaus.svg?raw';
  const partners = [
    {
      logo: tobermore,
      url: 'https://www.tobermore.co.uk/professional/paving-walling-creator/',
      alt: 'Tobermore'
    },
    {
      logo: marshalls,
      url: 'https://www.marshalls.co.uk/commercial/product/contemporary-facing-bricks-earlswood-grey',
      alt: 'Marshalls'
    },
    {
      logo: ibstock,
      url: 'https://www.ibstockbrick.co.uk/brick-selector/',
      alt: 'Ibstock'
    },
    {
      logo: kilsaran,
      url: 'https://www.kilsaran.ie/paver-planner/',
      alt: 'Kilsaran'
    },
    {
      logo: wienerberge,
      url: 'https://www.wienerberger.co.uk/products/facades/corium-brick-cladding-systems.htm',
      alt: 'Wienerberge'
    },
    {
      logo: banas,
      url: 'https://www.banasstones.com/sandstone/banas-slate-grey/',
      alt: 'Banas Stones'
    },
    {
      logo: ethan,
      url: 'https://virtualpaver.ethanmasonpaving.com/',
      alt: 'Ethan Mason'
    },
    {
      logo: ag,
      url: 'https://ag.uk.com/outside-rooms/design-inspiration/product-visualiser/',
      alt: 'AG'
    },
    {
      logo: stone,
      url: 'https://globalstonepaving.co.uk/',
      alt: 'Global Stone'
    },
    {
      logo: forticrete,
      url: 'https://www.forticrete.co.uk/products/walling-stone',
      alt: 'Forticrete'
    },
    {
      logo: roadstone,
      url: 'https://www.roadstone.ie/product/milan/',
      alt: 'Roadstone'
    },
    {
      logo: outhaus,
      url: 'https://www.outhaus.ie/brick-library/',
      alt: 'Outhaus'
    }
  ]
</script>