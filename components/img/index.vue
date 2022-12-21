<template>
  <div class="picture">
    <picture>
      <source type="image/png" media="(min-width: 1140px)" :srcset="'/images/decor/'+img+'.png , /images/decor/'+img+'@x2.png 2x'"/>
      <source type="image/png" media="(max-width: 1139px)" :srcset="'/images/decor/'+img+'-md@x2.png , /images/decor/'+img+'.png 2x'"/>
      <source type="image/webp" media="(min-width: 1140px)" :srcset="'/images/decor/'+img+'.webp , /images/decor/'+img+'@x2.webp 2x'"/>
      <source type="image/webp" media="(max-width: 1139px)" :srcset="'/images/decor/'+img+'-md@x2.webp , /images/decor/'+img+'.webp 2x'"/>
      <img :src="'/images/decor/'+img+'@x2.webp'" :alt="alt" width="100%" height="100%"/>
    </picture>
  </div>
</template>
<script setup>
  defineProps({
    img:{
      type: String
    },
    alt:{
      type: String
    }
  })
</script>