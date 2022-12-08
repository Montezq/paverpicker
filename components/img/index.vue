<template>
  <picture>
    <img :src="img" :alt="alt"/>
  </picture>
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