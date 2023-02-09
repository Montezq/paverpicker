<template>
  <div class="api-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="api-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
            <SoftwareNav />
            <div class="slide-section__text">
              <div class="slide-section__text-head text_center">
                <h1>API Website Integration</h1>
              </div>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>What can our API do for your website?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="api-page__steps">
          <div>
            <div class="slide-section position_relative ">
              <div class="d_flex flex_column align-items_center h_100 position_relative">
                <div class="slide-section__text-wrapper">
                  <div class="slide-section__text position_relative">
                    <div class="slide-section__text-inside slide-section__text_1 position_relative">
                      <div class="slide-section__text-head text_center">
                        <h2>Any Layout</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          Integrate key features of the Paver Picker software directly 
                           into your website with full control over the layout. 
                        </p>
                      </div>
                    </div>
                    <div class="slide-section__text-inside slide-section__text_2 position_absolute">
                      <div class="slide-section__text-head text_center">
                        <h2>Matched Styling</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          You have full control over every element which means your
                           fonts, your colours, your style.
                        </p>
                      </div>
                    </div>
                    <div class="slide-section__text-inside slide-section__text_3 position_absolute">
                      <div class="slide-section__text-head text_center">
                        <h2>Your Analytics</h2>
                      </div>
                      <div class="slide-section__text-desc text_center">
                        <p class="fs_32">
                          Since the software is embedded into your website, you can 
                           easily track your analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slide-section__decor position_absolute d_flex">
                  <div class="slide-section__decor-box">
                    <div class="picture api__bg">
                      <picture>
                        <source type="image/png" srcset="/images/decor/api-hero.png , /images/decor/api-hero.png 2x"/>
                        <source type="image/webp" srcset="/images/decor/api-hero.webp , /images/decor/api-hero.webp 2x"/>
                        <source type="image/webp" media="(max-width: 1139px)" srcset="/images/decor/api-hero-md.webp ,/images/decor/api-hero-md.webp 2x"/>
                        <source type="image/wepngbp" media="(max-width: 1139px)" srcset="/images/decor/api-hero-md.png ,/images/decor/api-hero-md.png 2x"/>
                        <img src="/images/decor/api-hero.png" alt="Bricks" width="2160" height="1215"/>
                      </picture>
                    </div>
                  </div>
                  <div class="slide-section__decor-box slide-section__decor-box-steps position_relative">
                    <Img :resp="false" :img="'api-steps'" :alt="'Hero'"/>
                    <div class="slide-section__decor-box-wall position_absolute">
                      <Img :resp="false" :img="'api-bricks'" :alt="'Brick'"/>
                    </div>
                    <div class="slide-section__decor-box-aside position_absolute">
                      <Img :resp="false" :img="'engels_fogo'" :alt="'Brick'"/>
                      <div class="slide-section__decor-box-aside-controls position_relative">
                        <Img :resp="false" :img="'controls_style-1'" :alt="'Brick'"/>
                        <Img class="position_absolute" :resp="false" :img="'controls_style-2'" :alt="'Brick'"/>
                      </div>
                    </div>
                    <div class="slide-section__decor-box-variants position_absolute d_flex">
                      <Img :resp="false" class="slide-section__decor-box-variants-item position_absolute"
                      v-for="i in 7" :key="i" :img="'api-bg-'+i" :alt="'Variants'"/>
                    </div>
                    <Img :resp="false" :img="'analitics'" :alt="'Dashboard image'" class="slide-section__decor-box-analitics position_absolute"/>
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
<style lang="scss">
  html{
    background-image: 
      url('/images/decor/api-hero-md.png'),
      url('/images/decor/api-hero-md.webp');
    background-size: 0;
  }
</style>
<script setup>
  let currentSlide = ref(0),
      pastSlide = ref(0),
      ticking = ref(false),
      scrlTicking = ref(true);

  function nextPage(){
    slide(2000, 100)
  }
  function slide(speed=2000, y=null, direction=null) {
    const scrl = document.querySelector('.api-page__steps');
    const lngth = 6;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      if(currentSlide.value === 2 || currentSlide.value === 4){
        setTimeout(() => {
          currentSlide.value+=1
        }, 2000);
      }
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 1){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
      if(currentSlide.value === 2 || currentSlide.value === 4){
        setTimeout(() => {
          currentSlide.value-=1
          pastSlide.value = currentSlide.value+1
        }, 2000);
      }
    }
    ticking.value = true;
    if(scrl){
      if(currentSlide.value!==6)
        scrl.classList.remove('oh')
      setTimeout(() => {
        if(currentSlide.value===6)
          scrl.classList.add('oh')
        ticking.value = false;
      }, speed);
    }
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
            slide(2000,null,'up')
          if( yDiff < 0 && ticking.value === false && scrlTicking.value)  
            slide(2000,null,'down')                                                              
        } 
        xDown = null;
        yDown = null;
      }
    }
  }
  onMounted(() => {
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      const scrl = document.querySelector('.api-page__steps');
      scrl.addEventListener('scroll', (e) =>{
        if(scrl.scrollTop>1)
          scrlTicking.value=false
        else
          scrlTicking.value=true
      })
      wrapper.addEventListener('wheel', (e) => {
        if (ticking.value === false && scrlTicking.value) {
          slide(2000, e.deltaY)
        }
      },{passive: true});
      touch();
      slide(2000, 100)
    }, 610);
  })
</script>