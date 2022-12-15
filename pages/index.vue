<template>
  <div class="home">
    <Header />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps'">
        <div id="bric_trigger"></div>
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
                <p class="color_green fs_32 d_flex align-items_center"><span class="ff_icon fs_64 mr_20"></span> Watch Video</p>
              </div>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>So, how does it work?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="home__send">
          <div class="slide-section position_relative d_flex">
            <div class="d_flex slide-section__content">
              <div class="slide-section__step position_relative">
                <div class="slide-section__step-counter d_flex align-items_center justify-content_center">
                  <p>1</p>
                </div>
                <div class="slide-section__step-line"></div>
              </div>
              <div class="slide-section__text">
                <div class="slide-section__text-head">
                  <h2>Send Your <br> Products to Us</h2>
                </div>
                <div class="slider-section__text-desc">
                  <p class="fs_32">
                    Package your products and
                    <br> send them to us, if your 
                    <br> collection is large, we will 
                    <br> come to you.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <div id="photograph_trigger"></div>
        <section class="home__photograph">
          <div class="slide-section__decor box position_relative">
            <Img :img="'/images/decor/box_back.png'" :alt="'Box'" class="box__back" />
            <Img :img="'/images/decor/box_front.png'" :alt="'Box'" class="box__front" />
            <Img :img="'/images/decor/brick.png'" :alt="'Brick'" class="box_brick" />
          </div>
          <div class="slide-section position_relative d_flex">
            <div class="d_flex slide-section__content">
              <div class="slide-section__step position_relative">
                <div class="slide-section__step-counter d_flex align-items_center justify-content_center">
                  <p>2</p>
                </div>
                <div class="slide-section__step-line"></div>
              </div>
              <div class="slide-section__text">
                <div class="slide-section__text-head">
                  <h2>We Photograph  <br> Your Products </h2>
                </div>
                <div class="slider-section__text-desc">
                  <p class="fs_32">
                    We photograph each product
                    <br> sample individually, this allows
                    <br> us to assemble any layout
                    <br> pattern at the click of a button. 
                  </p>
                </div>
                <div class="slider-section__text-cta">
                  <NuxtLink to="/">Learn more </NuxtLink>
                </div>
              </div>
            </div>
            <div class="slide-section__decor photography position_relative">
              <div class="photography__rig-wrapper">
                <Img :img="'/images/decor/rig.png'" :alt="'Box'" class="photography__rig" />
              </div>
              <div class="photography__blitz"></div>
              <div class="photography__camera">
                <Img :img="'/images/decor/camera.png'" :alt="'Box'" class="photography__camera-inside" />
                <div class="photography__camera-ins">
                  <Img :img="'/images/decor/rig.png'" :alt="'Box'" class="photography__rig-inside" />
                  <Img :img="'/images/decor/brick.png'" :alt="'Brick'" class="photography_brick" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="home__visualisation">
          <div class="slide-section position_relative d_flex">
            <div class="d_flex slide-section__content">
              <div class="slide-section__step position_relative">
                <div class="slide-section__step-counter d_flex align-items_center justify-content_center">
                  <p>3</p>
                </div>
                <div class="slide-section__step-line"></div>
              </div>
              <div class="slide-section__text">
                <div class="slide-section__text-head">
                  <h2>We Set Up Your  <br> Visualisations </h2>
                </div>
                <div class="slider-section__text-desc">
                  <p class="fs_32">
                    The data infrastructure is built 
                    <br> unique to your products, and
                    <br> configured to your requirements.
                  </p>
                </div>
                <div class="slider-section__text-cta">
                  <NuxtLink to="/">Learn more </NuxtLink>
                </div>
              </div>
            </div>
            <div class="slide-section__decor visualisation position_relative">
              <Img :img="'/images/decor/photoshop-window.png'" class="visualisation__window" :alt="'Photoshop Window'" />
              <Img :img="'/images/decor/brick.png'" :alt="'Brick'" class="visualisation_brick-single" />
              <div class="visualisation__brick">
                <Img :img="'/images/decor/zoomed_bricks.png'" class="visualisation__wall" :alt="'Photoshop Window'" />
                <Img :img="'/images/decor/Bricks.png'" class="visualisation__wall-big" :alt="'Photoshop Window'" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import 'index.scss';
</style>
<script setup>
  import gsap from 'gsap'
  useHead({
    script: [
      { 
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js',
        defer: true,
        body: true,
      },
      { 
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js',
        defer: true,
        body: true,
      },
    ],
  })
  onMounted(() => {
    if (process.client && window) {
      let controller = new ScrollMagic.Controller();
      let blockBrick = gsap.timeline()
        .fromTo(".box_brick", 
          {rotate: -90, x: '-50%', y: '-200vh',}, 
          {rotate: -180, x: '-50%', y: 0,})
        .fromTo(".slide-section__decor.box", 
          {rotate: 0, y: 0}, 
          {rotate: 180, y: '12%'})
        .fromTo(".box_brick", 
          {y: 0}, 
          {y: '-80vh'});
      let blockPhoto = gsap.timeline()
        .fromTo(".box_brick", 
          { }, 
          {y: '-110vh', filter: 'blur(8px)'}, 'first')
        .fromTo(".photography__rig", 
          {x: '8%', y: '-12%', filter: 'blur(0px)'}, 
          {x: '4%', y: 0, filter: 'blur(8px)'}, 'first')
        .fromTo(".photography__camera", 
          {x: '100%'}, 
          {x: 0}, 'first')
        .fromTo(".photography_brick", 
          {y: '-30vw'}, 
          {y: 0}, 'first')
        .fromTo(".photography__camera-ins", 
          {opacity: 0}, 
          {opacity: 1}, 'first')
        .fromTo(".photography__blitz", 
          {opacity: 0 }, 
          {opacity: 1 },  'second')
        .fromTo(".photography__blitz", 
          {}, 
          {opacity: 0 }, 'third')
        .fromTo(".photography_brick", 
          {x: 0, y: 0, opacity: 1}, 
          {x: '-1vw', y: '10vw', opacity: 0}, 'fourth');

      new ScrollMagic.Scene({
        triggerElement: '#bric_trigger',
        triggerHook: "onLeave",
        duration: '200%',
      })
        .setTween(blockBrick)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: '#photograph_trigger',
        triggerHook: "onLeave",
        offset: -50,
        duration: '200%',
      })
        .setTween(blockPhoto)
        .setPin(".home__photograph")
        .addTo(controller);

      // new ScrollMagic.Scene({
      //   triggerElement: '#photograph_trigger',
      //   triggerHook: "onLeave",
      //   offset: -50,
      //   duration: '200%',
      // })
      //   .setPin(".box_brick")
      //   .addTo(controller);
    }
  })
</script>