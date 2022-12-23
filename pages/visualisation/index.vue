<template>
  <div class="visualisation-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="visualisation-page__hero position_relative">
          <div class="slide-section position_relative">
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
      videoCount = ref(1),
      slideval = ref(50),
      ticking = ref(false),
      scrlTicking = ref(true);

  function slideInput(){
    document.querySelector('.foreground-img').style.width = slideval.value+'%'
    document.querySelector('.background-slider__icon').style.width = slideval.value+'%'
  }
  function nextPage(){
    slide(2200, 100)
  }
  function videoLoop(){
    let video = document.getElementById("brickVideo")
    videoCount.value++
    if (videoCount.value === 4) 
      videoCount.value = 1;
  }
  function slide(speed=2200, y=null, direction=null) {
    const scrl = document.querySelector('.visualisation-page__steps');
    const lngth = 3;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(currentSlide.value!==3)
      scrl.classList.remove('oh')
    setTimeout(() => {
      if(currentSlide.value===3)
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
            slide(2200,null,'up')
          if( yDiff < 0 && ticking.value === false && scrlTicking.value)  
            slide(2200,null,'down')                                                              
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
          slide(2200, e.deltaY)
        }
      });
      touch();
    }, 510);
  })
</script>