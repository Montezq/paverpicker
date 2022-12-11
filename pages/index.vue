<template>
  <div>
    <Header />
    <client-only>
      <div class="docSlider">
        <section id="foo" class="docSlider-scroll">
          <div>
            <div>Hello1
              <div>Hello 6</div>
            </div>
            <div>Hello3
              <div>Hello 4</div>
            </div>
            <div>Hello2</div>
          </div>
        </section>
        <section id="bar">Hello {{currentSlide}} {{pastSlide}}</section>
        <section id="baz">Hello {{currentSlide}} {{pastSlide}}</section>
      </div>
    </client-only>
  </div>
</template>
<script setup>
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/docslider@3.0.1/docSlider.css'
      }
    ],
    script: [
      { 
        hid: 'docslider',
        src: 'https://cdn.jsdelivr.net/npm/docslider@3.0.1/docSlider.min.js',
        defer: true,
        async: true,
        body: true,
      },
    ],
  });
  let currentSlide = ref(null),
      pastSlide = ref(null);
  function initDocSlider(){
    docSlider.init({
      pager: false,
      speed: 1200,
      easing: 'ease-in-out',
      beforeChange : (index, page, toIndex, toPage, type) =>{
        pastSlide.value = index
        currentSlide.value = toIndex
      }
    })
  }
  onMounted(() => {
    setTimeout(() => {
      initDocSlider()
    }, 1);
  })
</script>