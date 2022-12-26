<template>
  <div class="visualisation-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="visualisation-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
            <div class="slide-section__text">
              <div class="slide-section__text-head text_center">
                <h1>True to Life Visualisations</h1>
              </div>
            </div>
            <div class="slide-section__hero-img">
              <Img :img="'visualisation_hero'" :alt="'Home hero visualisation'"/>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>What makes our visualisations realistic?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="visualisation-page__steps">
          <div>
            <div class="slide-section position_relative d_flex align-items_center">
              <div class="slide-section__text-wrapper">
                <div class="slide-section__text position_relative">
                  <div class="slide-section__text-inside slide-section__text_1 position_relative">
                    <div class="slide-section__text-head">
                      <h2>Precise Cut-Outs</h2>
                    </div>
                    <div class="slide-section__text-desc">
                      <p class="fs_32">
                        We take no shortcuts when it comes to
                        <br> preparing the areas to be visualised. We
                        <br> ensure each and every blade of grass is
                        <br> properly preserved. 
                      </p>
                    </div>
                  </div>
                  <div class="slide-section__text-inside  slide-section__text_2 position_absolute">
                    <div class="slide-section__text-head">
                      <h2>Realistic Shadows</h2>
                    </div>
                    <div class="slide-section__text-desc">
                      <p class="fs_32">
                        To add to the realism, we redraw every
                        <br> detail of shadows and highlights back
                        <br> into the image.
                      </p>
                    </div>
                  </div>
                  <div class="slide-section__text-inside  slide-section__text_3 position_absolute">
                    <div class="slide-section__text-head">
                      <h2>Perfect Integration</h2>
                    </div>
                    <div class="slide-section__text-desc">
                      <p class="fs_32">
                        Finally, our software displays your
                        <br> products with perfect perspective and
                        <br> scale to ensure the visualisation looks
                        <br> natural.
                      </p>
                    </div>
                    <div class="slider-section__text-cta">
                      <NuxtLink to="/" >
                        <span class="fs_32 fw_regular">
                          Learn about our software
                        </span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide-section__decor position_relative">
                <div class="slide-section__decor-box visualisation__bg-box position_absolute">
                  <div class="visualisation__img-insde"></div>
                </div>
                <div class="slide-section__decor-box visualisation__garden-box">
                  <Img :img="'visualisation_garden'" :alt="'Box'" class="visualisation__img-insde visualisation__garden"/>
                </div>
                <div class="slide-section__decor-box visualisation__paver-box position_absolute">
                  <Img :img="'visualisation_paver'" :alt="'Box'" class="visualisation__img-insde visualisation__paver"/>
                </div>
                <div class="slide-section__decor-box visualisation__shadows-box position_absolute">
                  <div class="visualisation__img-insde">
                    <Img :img="'shadows'" :alt="'Box'" class=" visualisation__shadows"/>
                  </div>
                </div>
                <div class="slide-section__decor-box visualisation__paver2-box position_absolute">
                  <div class="visualisation__img-insde">
                    <Img :img="'paver-2'" :alt="'Box'" class="visualisation__paver2"/>
                  </div>
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
    slide(1800, 100)
  }
  function slide(speed=1800, y=null, direction=null) {
    const scrl = document.querySelector('.visualisation-page__steps');
    const lngth = 6;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(currentSlide.value!==6)
      scrl.classList.remove('oh')
    setTimeout(() => {
      if(currentSlide.value===6)
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
            slide(1800,null,'up')
          if( yDiff < 0 && ticking.value === false && scrlTicking.value)  
            slide(1800,null,'down')                                                              
        } 
        xDown = null;
        yDown = null;
      }
    }
  }
  onMounted(() => {
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      const scrl = document.querySelector('.visualisation-page__steps');
      scrl.addEventListener('scroll', (e) =>{
        if(scrl.scrollTop>1)
          scrlTicking.value=false
        else
          scrlTicking.value=true
      })
      wrapper.addEventListener('wheel', (e) => {
        if (ticking.value === false && scrlTicking.value) {
          slide(1800, e.deltaY)
        }
      });
      touch();
    }, 510);
  })
</script>