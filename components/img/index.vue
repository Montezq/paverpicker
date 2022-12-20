<template>
  <div class="picture">
    <picture>
      <source media="(min-width: 1140px)" :src="imgx" :srcset="img+', '+imgx+' 2x'"/>
      <source media="(max-width: 1139px)" :src="imgmdx" :srcset="imgmd+', '+imgmdx+' 2x'"/>
      <img :src="imgx" :alt="alt" width="auto" height="auto"/>
    </picture>
  </div>
</template>
<script setup>
  defineProps({
    img:{
      type: String
    },
    imgx:{
      type: String
    },
    imgmd:{
      type: String
    },
    imgmdx:{
      type: String
    },
    alt:{
      type: String
    }
  })
</script>