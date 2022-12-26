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
                </div>
              </div>
              <div class="slide-section__decor position_relative">
                
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
    slide(2400, 100)
  }
  function slide(speed=2400, y=null, direction=null) {
    const scrl = document.querySelector('.software-page__steps');
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
            slide(2400,null,'up')
          if( yDiff < 0 && ticking.value === false && scrlTicking.value)  
            slide(2400,null,'down')                                                              
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
          slide(2400, e.deltaY)
        }
      });
      touch();
    }, 510);
  })
</script>