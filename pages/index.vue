<template>
  <div class="home">
    <Header />
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="home__hero">
          <div class="slide-section d_flex align-items_center flex_wrap position_relative">
            <div class="home__hero-img position_absolute">
              <Img :imgx="'/images/decor/home-hero@x2.png'" :alt="'Home hero laptop'"
                :img="'/images/decor/home-hero.png'" :imgmd="'/images/decor/home-hero.png'"
                :imgmdx="'/images/decor/home-hero-md@x2.png'" />
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
            <div class="slide-section__decor box position_relative">
              <Img :imgx="'/images/decor/box_back@x2.png'" :alt="'Box'" class="box__back"
                :img="'/images/decor/box_back.png'" :imgmd="'/images/decor/box_back.png'"
                :imgmdx="'/images/decor/box_back-md@x2.png'" />
              <Img :imgx="'/images/decor/box_front@x2.png'" :alt="'Box'" class="box__front"
                :img="'/images/decor/box_front.png'" :imgmd="'/images/decor/box_front.png'"
                :imgmdx="'/images/decor/box_front-md@x2.png'" />
              <Img :imgx="'/images/decor/brick@x2.png'" :alt="'Box'" class="box_brick"
                :img="'/images/decor/brick.png'" :imgmd="'/images/decor/brick.png'"
                :imgmdx="'/images/decor/brick-md@x2.png'" />
            </div>
          </div>
        </section>
        <section class="home__photograph">
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
              <Img :imgx="'/images/decor/rig@x2.png'" :alt="'Photography'" class="photography__rig"
                :img="'/images/decor/rig.png'" :imgmd="'/images/decor/rig.png'"
                :imgmdx="'/images/decor/rig-md@x2.png'" />
              <div class="photography__blitz"></div>
              <div class="photography__camera">
                <Img :imgx="'/images/decor/camera@x2.png'" :alt="'Photography'" class="photography__camera-inside"
                  :img="'/images/decor/camera.png'" :imgmd="'/images/decor/camera.png'"
                  :imgmdx="'/images/decor/camera-md@x2.png'" />
                <div class="photography__camera-ins">
                  <Img :imgx="'/images/decor/rig@x2.png'" :alt="'Photography'" class="photography__rig-inside"
                    :img="'/images/decor/rig.png'" :imgmd="'/images/decor/rig.png'"
                    :imgmdx="'/images/decor/rig-md@x2.png'" />
                  <Img :imgx="'/images/decor/brick@x2.png'" :alt="'Photography'" class="photography_brick"
                    :img="'/images/decor/brick.png'" :imgmd="'/images/decor/brick.png'"
                    :imgmdx="'/images/decor/brick-md@x2.png'" />
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
            <div class="slide-section__decor visualisation">
              <Img :imgx="'/images/decor/photoshop@x2.png'" :alt="'Photoshop Window'" class="visualisation__photoshop"
                  :img="'/images/decor/photoshop.png'" :imgmd="'/images/decor/photoshop.png'"
                  :imgmdx="'/images/decor/photoshop@x2.png'" />
            </div>
          </div>
        </section>
        <section class="home__software">
          <div>
            <div class="slide-section position_relative d_flex">
              <div class="d_flex slide-section__content">
                <div class="slide-section__step position_relative">
                  <div class="slide-section__step-counter d_flex align-items_center justify-content_center">
                    <p>4</p>
                  </div>
                  <div class="slide-section__step-line"></div>
                </div>
                <div class="slide-section__text">
                  <div class="slide-section__text-head">
                    <h2>We Send You  <br> Your Software </h2>
                  </div>
                  <div class="slider-section__text-desc">
                    <p class="fs_32">
                      We send you a link to your
                      <br> software, and advise on the
                      <br> best way to integrate it into your
                      <br> website.
                    </p>
                  </div>
                  <div class="slider-section__text-cta">
                    <NuxtLink to="/">Learn more </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="slide-section__decor software">
                <Img :imgx="'/images/decor/send@x2.png'" :alt="'Send Laptop'" class="software__send"
                  :img="'/images/decor/send.png'" :imgmd="'/images/decor/send@x2.png'"
                  :imgmdx="'/images/decor/send@x2.png'" />
                <div class="visualisation__brick-wrapper">
                  <Img :imgx="'/images/decor/photoshop-window@x2.png'" :alt="'Send Laptop'" class="visualisation__window"
                    :img="'/images/decor/photoshop-window.png'" :imgmd="'/images/decor/photoshop-window.png'"
                    :imgmdx="'/images/decor/photoshop-window-md@x2.png'" />
                  <Img :imgx="'/images/decor/brick@x2.png'" :alt="'Brick'" class="visualisation_brick-single"
                    :img="'/images/decor/brick.png'" :imgmd="'/images/decor/brick.png'"
                    :imgmdx="'/images/decor/brick-md@x2.png'" />
                  <div class="visualisation__brick">
                    <Img :imgx="'/images/decor/zoomed_bricks@x2.png'" :alt="'Send Laptop'" class="visualisation__wall"
                      :img="'/images/decor/zoomed_bricks.png'" :imgmd="'/images/decor/zoomed_bricks.png'"
                      :imgmdx="'/images/decor/zoomed_bricks-md@x2.png'" />
                    <Img :imgx="'/images/decor/bricks@x2.png'" :alt="'Send Laptop'" class="visualisation__wall-big"
                      :img="'/images/decor/bricks.png'" :imgmd="'/images/decor/bricks.png'"
                      :imgmdx="'/images/decor/bricks-md@x2.png'" />
                    <div class="visualisation__door-wrapper">
                      <Img :imgx="'/images/decor/door@x2.png'" :alt="'Send Laptop'" class="visualisation__door"
                        :img="'/images/decor/door.png'" :imgmd="'/images/decor/door.png'"
                        :imgmdx="'/images/decor/door-md@x2.png'" />
                      <Img :imgx="'/images/decor/dotted@x2.png'" :alt="'Send Laptop'" class="visualisation__dotted"
                        :img="'/images/decor/dotted.png'" :imgmd="'/images/decor/dotted.png'"
                        :imgmdx="'/images/decor/dotted-md@x2.png'" />
                    </div>
                  </div>
                </div>
                <Img :imgx="'/images/decor/monitor@x2.png'" :alt="'Send Laptop'" class="software__monitor"
                  :img="'/images/decor/monitor.png'" :imgmd="'/images/decor/monitor.png'"
                  :imgmdx="'/images/decor/monitor-md@x2.png'" />
              </div>
            </div>
            <div class="scrollable-section">
              <Partners />
              <Cta />
              <Footer />
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
  let currentSlide = ref(0),
      pastSlide = ref(0),
      ticking = ref(false),
      scrlTicking = ref(true);
  

  function slide(speed=3000, y=null, direction=null) {
    const scrl = document.querySelector('.home__software');
    const lngth = document.querySelectorAll('.animation-steps>section').length
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(currentSlide.value!==5)
      scrl.classList.remove('oh')
    setTimeout(() => {
      if(currentSlide.value===5)
        scrl.classList.add('oh')
      ticking.value = false;
    }, speed);
  }
  function nextPage(){
    docSlider.nextPage()
  }
  function touch(){
    let touchstartY = 0
    let touchendY = 0
    function checkDirection() {
      if (touchendY < touchstartY && ticking.value === false && scrlTicking.value)
        slide(3000,null,'up')
      if (touchendY > touchstartY && ticking.value === false && scrlTicking.value)
        slide(3000,null,'down')
    }
    document.addEventListener('touchstart', e => {
      touchstartY = e.changedTouches[0].screenY
    })
    document.addEventListener('touchend', e => {
      touchendY = e.changedTouches[0].screenY
      checkDirection()
    })
  }
  onMounted(() => {
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      const scrl = document.querySelector('.home__software');
      scrl.addEventListener('scroll', (e) =>{
        if(scrl.scrollTop>1)
          scrlTicking.value=false
        else
          scrlTicking.value=true
      })
      wrapper.addEventListener('wheel', (e) => {
        if (ticking.value === false && scrlTicking.value) {
          if((currentSlide.value === 3 && pastSlide.value === 2) || (currentSlide.value === 3 && pastSlide.value === 4)){
            slide(6000, e.deltaY)
          }
          else
            slide(3000, e.deltaY)
        }
      });
      touch();
    }, 1);
  })
</script>