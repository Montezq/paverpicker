<template>
  <div>
    <Header />
    <client-only>
      <div class="docSlider">
        <section id="foo">Hello</section>
        <section id="bar">Hello 2</section>
        <section id="baz">Hello 3</section>
      </div>
    </client-only>
  </div>
</template>
<script setup>
  useHead({
    script: [
      { 
        hid: 'docslider',
        src: 'https://cdn.jsdelivr.net/npm/docslider@3.0.1/docSlider.min.js',
        defer: true,
        async: true,
        body: true,
        callback: () => { setTimeout(() => {initDocSlider()}, 1); } 
      },
    ],
  })
  function initDocSlider(){
    docSlider.init({
      pager: false,
      speed: 1200,
      easing: 'ease-in-out',
    })
  }
</script>