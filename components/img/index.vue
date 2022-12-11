<template>
  <div class="picture">
    <picture>
      <img :src="img" :alt="alt"/>
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