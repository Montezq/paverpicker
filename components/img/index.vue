<template>
  <div class="picture">
    <img
      :srcset="
       '/images/decor/' + img + '.webp 1x, /images/decor/' + img + '@x2.webp 2x'
      "
      :sizes="
        scenes
          ? '(max-width: 1139px) 100vw, 50vw'
          : '(min-width: 1140px) 500px, 100vw'
      "
      :src="'/images/decor/' + img + '@x2.webp'"
      :alt="alt"
      width="500"
      height="500"
    />

    <!--<picture>
      <source v-if="resp" type="image/png" media="(min-width: 1140px)" :srcset="'/images/decor/'+img+'.png , /images/decor/'+img+'@x2.png 2x'"/>
      <source v-else type="image/png" media="(min-width: 1140px)" :srcset="'/images/decor/'+img+'@x2.png , /images/decor/'+img+'@x2.png 2x'"/>
      <source v-if="scenes" type="image/png" media="(max-width: 1139px)" :srcset="'/images/decor/'+img+'-md@x2.png , /images/decor/'+img+'.png 2x'"/>
      <source v-else type="image/png" media="(max-width: 1139px)" :srcset="'/images/decor/'+img+'-md@x2.png , /images/decor/'+img+'@x2.png 2x'"/>
      <source v-if="resp" type="image/webp" media="(min-width: 1140px)" :srcset="'/images/decor/'+img+'.webp , /images/decor/'+img+'@x2.webp 2x'"/>
      <source v-else type="image/webp" media="(min-width: 1140px)" :srcset="'/images/decor/'+img+'@x2.webp , /images/decor/'+img+'@x2.webp 2x'"/>
      <source v-if="scenes" type="image/webp" media="(max-width: 1139px)" :srcset="'/images/decor/'+img+'-md@x2.webp , /images/decor/'+img+'.webp 2x'"/>
      <source v-else type="image/webp" media="(max-width: 1139px)" :srcset="'/images/decor/'+img+'-md@x2.webp , /images/decor/'+img+'@x2.webp 2x'"/>
      <img :src="'/images/decor/'+img+'@x2.webp'" :alt="alt" width="500" height="500"/>
    </picture>-->
  </div>
</template>
<script setup>
  defineProps({
    img:{
      type: String
    },
    alt:{
      type: String
    },
    resp:{
      type: Boolean,
      default: true,
    },
    scenes:{
      type: Boolean,
      default: true,
    }
  })
</script>