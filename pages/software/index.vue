<template>
  <div class="software-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="software-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
            <SoftwareNav />
            <div class="slide-section__text">
              <div class="slide-section__text-head">
                <h1>Custom Built <br> Software</h1>
              </div>
            </div>
            <div class="slide-section__hero-img">
              <Img :scenes="false" :resp="false" :img="'pc-2'" :alt="'Home hero visualisation'"/>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>How can our software benefit you?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="software-page__steps">
          <div class="slide-section d_flex align-items_center">
            <div class="slide-section__decor">
              <div class="slide-section__decor-video">
                <video playsinline loop muted id="softwareVideo" src="/video/software.mp4"></video>
              </div>
            </div>
            <div class="slide-section__text position_relative">
              <div class="slide-section__text-inside position_absolute slide-section__text_1">
                <div class="slide-section__text-head">
                  <h2> Your Online Showroom</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32"> Present your products in one place, the use of filters make browsing easy.</p>
                </div>
              </div>
              <div class="slide-section__text-inside position_relative slide-section__text_2">
                <div class="slide-section__text-head">
                  <h2>Limitless Possibilities</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32">Change laying patterns, joint colours and angles. <br> Take it a step further with the blender module.</p>
                </div>
                <div class="slider-section__text-cta">
                  <NuxtLink to="/software/blender-module/">Learn about the blender module</NuxtLink>
                </div>
              </div>
              <div class="slide-section__text-inside position_absolute slide-section__text_3">
                <div class="slide-section__text-head">
                  <h2>Inspiring Visualisation</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32">Check to see how products look by viewing them in a scene.</p>
                </div>
                <div class="slider-section__text-cta">
                  <NuxtLink to="/visualisation/">Learn more about visualisation</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="software-page__device">
          <div>
            <div class="slide-section"></div>
            <div class="scrollable-section">
              <Cta />
              <Footer />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss" >
  @import 'main.scss';
</style>
<script setup>

  let currentSlide = ref(0),
      pastSlide = ref(0),
      ticking = ref(false),
      currentTimeout,
      scrlTicking = ref(true);

  function nextPage(){
    slide(3000, 100)
  }
  function playVideo(currentSlide) {
    var videoElement = document.getElementById('softwareVideo')
    clearTimeout(currentTimeout);

    if (currentSlide === 1 && videoElement.currentTime < 4) {
      currentTimeout = setTimeout(() => {
        if (currentSlide >= 1) {
          videoElement.play();
          currentTimeout = setTimeout(() => {
            if (currentSlide === 1) {
              videoElement.pause();
            }
          }, 4000);
        }
      }, 3000);
    }
    else if (currentSlide === 2 && videoElement.currentTime < 18) {
      currentTimeout = setTimeout(() => {
        if (currentSlide >= 2) {
          videoElement.play();
          currentTimeout = setTimeout(() => {
            if (currentSlide === 2) {
              videoElement.pause();
            }
          }, 14000);
        }
      }, 0);
    }
    else if (currentSlide === 3) {
      videoElement.play();
    }
  }
  function slide(speed=3000, y=null, direction=null) {
    const scrl = document.querySelector('.software-page__device');
    const lngth = 4;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(scrl){
      if(currentSlide.value!==4)
        scrl.classList.remove('oh')
      setTimeout(() => {
        if(currentSlide.value===4)
          scrl.classList.add('oh')
        ticking.value = false;
      }, speed);
    }
    playVideo(currentSlide.value);
  }
  function touch(){
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;                                                        
    var yDown = null;                                                        
    function handleTouchStart(evt) {                                         
      xDown = evt.touches[0].clientX;                                      
      yDown = evt.touches[0].clientY;                                      
    };                                                
    function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
        return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
      if(Math.abs( xDiff )+Math.abs( yDiff )>1){
        if( Math.abs( yDiff  ) > Math.abs( xDiff ) ) {
          if( yDiff > 0 && ticking.value === false && scrlTicking.value) 
            slide(3000,null,'up')
          if( yDiff < 0 && ticking.value === false && scrlTicking.value)  
            slide(3000,null,'down')                                                              
        } 
        xDown = null;
        yDown = null;
      }
    }
  }
  onMounted(() => {
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      const scrl = document.querySelector('.software-page__device');
      scrl.addEventListener('scroll', (e) =>{
        if(scrl.scrollTop>1)
          scrlTicking.value=false
        else
          scrlTicking.value=true
      })
      wrapper.addEventListener('wheel', (e) => {
        if (ticking.value === false && scrlTicking.value) {
          slide(3000, e.deltaY)
        }
      },{passive: true});
      touch();
    }, 610);
  })
</script>