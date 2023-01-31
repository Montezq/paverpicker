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
              <Img :img="'pc-2'" :alt="'Home hero visualisation'"/>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>How can our software help you?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="software-page__steps">
          <div>
            <div class="slide-section position_relative ">
              <div class="d_flex flex_column align-items_center h_100 position_relative">
                <div class="slide-section__text-wrapper">
                  <div class="slide-section__text position_relative">
                    <div class="slide-section__text-inside slide-section__text_1 position_absolute">
                      <div class="slide-section__text-head text_center">
                        <h2>Your Online Showroom</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          Present your products in one place, the
                          <br> use of filters make browsing easy.
                        </p>
                      </div>
                    </div>
                    <div class="slide-section__text-inside slide-section__text_2 position_absolute">
                      <div class="slide-section__text-head text_center">
                        <h2>Limitless Possibilities</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          Change laying patterns, joint colours and angles.
                          <br> Take it a step further with the blender module.
                        </p>
                      </div>
                      <div class="slider-section__text-cta text_center">
                        <NuxtLink to="blender-module/" >
                          <p class="fs_32 fw_regular">
                            Learn about the blender module
                          </p>
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="slide-section__text-inside slide-section__text_3 position_absolute">
                      <div class="slide-section__text-head text_center">
                        <h2>Inspiring Visualisation</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          Check to see how products look by viewing them in a
                          <br> scene.
                        </p>
                      </div>
                      <div class="slider-section__text-cta text_center">
                        <NuxtLink to="/visualisation/" >
                          <p class="fs_32 fw_regular">
                            Learn more about visualisation
                          </p>
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="slide-section__text-inside slide-section__text_4 position_relative">
                      <div class="slide-section__text-head text_center">
                        <h2>Any Device</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          Fully Adaptable to screen sizes. If you want even more control 
                          <br> we offer API for integrating straight into your website.
                        </p>
                      </div>
                      <div class="slider-section__text-cta text_center">
                        <NuxtLink to="/" >
                          <p class="fs_32 fw_regular">
                            Learn about the API module
                          </p>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slide-section__decor position_relative">
                  <div class="slide-section__decor-box slide-section__decor-box_video postion_relative">
                    <Img :img="'paver-3'" :alt="'Box'" class="software_paver"/>
                    <video class="section__video position_absolute section__video_1" autoplay="autoplay" 
                      muted="muted" loop playsinline="playsinline" 
                      :src="`/video/api-vid-1.mp4`" id="apiVideo">
                    </video>
                    <video class="section__video position_absolute section__video_2" autoplay="autoplay" 
                      muted="muted" loop playsinline="playsinline" 
                      :src="`/video/api-vid-2.mp4`" id="apiVideo">
                    </video>
                    <video class="section__video position_absolute section__video_3" autoplay="autoplay" 
                      muted="muted" loop playsinline="playsinline" 
                      :src="`/video/api-vid-3.mp4`" id="apiVideo">
                    </video>
                  </div>
                </div>
                <div class="slide-section__decor-box slide-section__decor-box_tablet position_absolute">
                  <Img :img="'paver-3'" :alt="'Box'" class="software_paver"/>
                </div>
                <div class="slide-section__decor-box slide-section__decor-box_mobile position_absolute">
                  <Img :img="'paver-3mobile'" :alt="'Box'" class="software_paver"/>
                </div>
              </div>
            </div>
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
      scrlTicking = ref(true);

  function nextPage(){
    slide(3000, 100)
  }
  function slide(speed=3000, y=null, direction=null) {
    const scrl = document.querySelector('.software-page__steps');
    const lngth = 4;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(currentSlide.value!==4)
      scrl.classList.remove('oh')
    setTimeout(() => {
      if(currentSlide.value===4)
        scrl.classList.add('oh')
      ticking.value = false;
    }, speed);
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
      const scrl = document.querySelector('.software-page__steps');
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
      });
      touch();
    }, 610);
  })
</script>