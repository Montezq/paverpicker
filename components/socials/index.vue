<template>
  <ul class="socials__list d_flex align-items_center justify-content_center">
    <li :class="'socials__item socials_'+item.alt" v-for="(item, index) in socials" v-bind:key="index">
      <a :href="item.url" target="_blank" v-html="item.icon" :aria-label="'Social link to '+item.alt"></a>
    </li>
  </ul>
</template>
<style lang="scss">
  @import 'index';
</style>
<script setup>
  import facebook from '~/assets/svg/icons/facebook.svg?raw';
  import x from '~/assets/svg/icons/x.svg?raw';
  import linkedin from '~/assets/svg/icons/linkedin.svg?raw';
  import youtube from '~/assets/svg/icons/youtube.svg?raw';
  const socials = [
    {
      icon: facebook,
      url: 'https://www.facebook.com/paverpicker',
      alt: 'facebook'
    },
    {
      icon: x,
      url: 'https://twitter.com/Paverpicker',
      alt: 'twitter'
    },
    {
      icon: linkedin,
      url: 'https://www.linkedin.com/company/bloc-tec/',
      alt: 'linkedin'
    },
    {
      icon: youtube,
      url: 'https://www.youtube.com/watch?v=6l6ty-bxAGk&ab_channel=BLOC-TEC',
      alt: 'youtube'
    },
  ]
</script>