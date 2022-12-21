<template>
  <div class="photography-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="photography-page__hero">
          <div class="slide-section position_relative">
            <div class="photography-page__hero-video position_absolute">
              <video class="section__video" autoplay="autoplay" muted="muted" playsinline="playsinline" @ended="videoLoop" :src="`/video/brick${videoCount}.mp4`" id="brickVideo"></video>
            </div>
            <div class="slide-section__text">
              <div class="slide-section__text-head text_center">
                <h1>Your Products, <br> Professionally Captured</h1>
              </div>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>What makes our photography so life-like?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="photography-page__brick">
          <div class="slide-section d_flex flex_column">
            <div class="slide-section__text">
              <div class="slide-section__text-head">
                <h2>Realistic Lighting</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32">
                  We mimic sunlight in our lighting setup which enables us
                  <br> to capture texture. Shown here is the contrast between a
                  <br> scanned image and our method.
                </p>
              </div>
            </div>
            <div class="slide-section__brick">
              <div class="slide-section__brick-box">
                <label class="background-slider">
                  <input type="range" v-model="slideval" max="100" min="0" @input="slideInput"/>
                  <span class="background-slider__icon">
                    <span v-html="arrowSlide"></span>
                    <span></span>
                    <span v-html="arrowSlide"></span>
                  </span>
                </label>
                <div class="background-img"></div>
                <div class="foreground-img"></div>
              </div>
              <div class="slide-section__brick-text">
                <div class="slide-section__brick-text-1 d_flex justify-content_between">
                  <p><strong>Scanned</strong></p>
                  <p><strong>Photograph</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import 'main.scss';
</style>
<script setup>
  import arrowSlide from '~/assets/svg/icons/arrow-slide.svg?raw'

  let currentSlide = ref(0),
      pastSlide = ref(0),
      videoCount = ref(1),
      slideval = ref(50),
      ticking = ref(false),
      scrlTicking = ref(true);

  function slideInput(){
    document.querySelector('.foreground-img').style.width = slideval.value+'%'
    document.querySelector('.background-slider__icon').style.left = slideval.value+'%'
  }
  function nextPage(){
    slide(3000, 100)
  }
  function videoLoop(){
    let video = document.getElementById("brickVideo")
    videoCount.value++
    if (videoCount.value === 4) 
      videoCount.value = 1;
  }
  function slide(speed=3000, y=null, direction=null) {
    // const scrl = document.querySelector('.home__software');
    const lngth = 3;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    // if(currentSlide.value!==5)
    //   scrl.classList.remove('oh')
    setTimeout(() => {
      // if(currentSlide.value===5)
      //   scrl.classList.add('oh')
      ticking.value = false;
    }, speed);
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
      // const scrl = document.querySelector('.home__software');
      // scrl.addEventListener('scroll', (e) =>{
      //   if(scrl.scrollTop>1)
      //     scrlTicking.value=false
      //   else
      //     scrlTicking.value=true
      // })
      wrapper.addEventListener('wheel', (e) => {
        if (ticking.value === false && scrlTicking.value) {
          slide(3000, e.deltaY)
        }
      });
      touch();
    }, 510);
  })
</script>