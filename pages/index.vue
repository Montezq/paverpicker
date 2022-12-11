<template>
  <div class="home">
    <Header />
    <client-only>
      <div class="docSlider">
        <section class="home__hero">
          <div class="slide-section d_flex align-items_center flex_wrap position_relative">
            <div class="home__hero-img position_absolute">
              <Img :img="'/images/decor/home-hero.png'" :alt="'Home hero laptop'" />
            </div>
            <div class="slide-section__text position_relative">
              <div class="slide-section__text-head mb_32">
                <h1>
                  Visualise Bricks <br> and Pavers in <br> Their Best Light
                </h1>
              </div>
              <div class="slide-section__text-cta">
                <p class="color_green fs_32">Watch Video</p>
              </div>
            </div>
            <div class="scrl-down position_absolute fs_32">
              <p>So, how does it work?</p>
            </div>
          </div>
        </section>
        <section class="home__send">
          <div class="slide-section d_flex align-items_center flex_wrap position_relative">
            <div class="home__hero-img position_absolute">
              <Img :img="'/images/decor/home-hero.png'" :alt="'Home hero laptop'" />
            </div>
            <div class="slide-section__text position_relative">
              <div class="slide-section__text-head mb_32">
                <h1>
                  Visualise Bricks <br> and Pavers in <br> Their Best Light
                </h1>
              </div>
              <div class="slide-section__text-cta">
                <p class="color_green fs_32">Watch Video</p>
              </div>
            </div>
            <div class="scrl-down position_absolute fs_32">
              <p>So, how does it work?</p>
            </div>
          </div>
        </section>
      </div>
    </client-only>
  </div>
</template>
<style lang="scss">
  @import 'index.scss';
</style>
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