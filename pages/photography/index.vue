<template>
  <div class="photography-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="photography-page__hero position_relative">
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
              <p>What makes our photography so true to life?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="photography-page__brick">
          <div>
            <div class="slide-section position_relative">
              <div class="slide-section__bg position_absolute">
                <Img :img="'light'" :alt="'Light'" class="light_bg"/>
                <Img :img="'butterfly'" :alt="'Butterfly'" class="butterfly_bg"/>
                <Img :img="'colour_calibration'" :alt="'Colour Calibration'" class="colour_calibration_bg"/>
              </div>
              <div class="container d_flex flex_column justify-content_center">
                <div class="slide-section__text">
                  <div class="slide-section__text-inside slide-section__text_1">
                    <div class="slide-section__text-head">
                      <h2>Realistic <br> Lighting</h2>
                    </div>
                    <div class="slide-section__text-desc">
                      <p class="fs_32">
                        We mimic sunlight in our lighting setup which enables us
                        <br> to capture texture. Shown here is the contrast between a
                        <br> scanned image and our method.
                      </p>
                    </div>
                  </div>
                  <div class="slide-section__text-inside slide-section__text_2 position_absolute">
                    <div class="slide-section__text-head">
                      <h2>Incredible <br> Detail</h2>
                    </div>
                    <div class="slide-section__text-desc">
                      <p class="fs_32">
                        We take it to the next level with our photography, our
                        <br> process involves techniques used in the macro world for
                        <br> insect photography. Simply put - details are captured.
                      </p>
                    </div>
                  </div>
                  <div class="slide-section__text-inside slide-section__text_3 position_absolute">
                    <div class="slide-section__text-head">
                      <h2>Accurate <br> Colour</h2>
                    </div>
                    <div class="slide-section__text-desc">
                      <p class="fs_32">
                        Colour accuracy checks are carried out on each image to
                        <br> ensure we capture the true nature of your products.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="slide-section__brick">
                  <div class="slide-section__brick-box position_relative">
                    <label class="background-slider position_absolute">
                      <input type="range" :class="{'animation_false' : slideInteract}" v-model="slideval" max="100" min="0" @input="slideInput"/>
                      <span class="background-slider__icon">
                        <span class="background-slider__icon-wrapper ">
                          <div class="background-slider__icon-wrapper-inside d_flex align-items_center">
                            <span v-html="arrowSlide"></span>
                            <span></span>
                            <span v-html="arrowSlide"></span>
                          </div>
                        </span>
                      </span>
                    </label>
                    <div class="background-img">
                      <Img :img="'brick_1'" :alt="'Door'"/>
                    </div>
                    <div class="foreground-img">
                      <Img :img="'brick_2'" :alt="'Door'" class="foreground-img-inside foreground-img_1"/>
                      <Img :img="'brick_1'" :alt="'Door'" class="foreground-img-inside foreground-img_2"/>
                      <Img :img="'brick_4'" :alt="'Door'" class="foreground-img-inside foreground-img_3"/>
                    </div>
                  </div>
                  <div class="slide-section__brick-text position_relative">
                    <div class="slide-section__brick-text-inside slide-section__brick-text_1 d_flex justify-content_between">
                      <p><strong>Scanned</strong></p>
                      <p><strong>Photograph</strong></p>
                    </div>
                    <div class="slide-section__brick-text-inside slide-section__brick-text_2 position_absolute d_flex justify-content_between">
                      <p><strong>Low Res</strong></p>
                      <p><strong>High Res</strong></p>
                    </div>
                    <div class="slide-section__brick-text-inside slide-section__brick-text_3 position_absolute d_flex justify-content_between">
                      <p><strong>Uncalibrated</strong></p>
                      <p><strong>Calibrated</strong></p>
                    </div>
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
  import arrowSlide from '~/assets/svg/icons/arrow-slide.svg?raw'
  import { useSlideStore  } from '@/store/slideStore'
  
  const pageTitle = 'Photography | BLOC-TEC',
        baseUrl = 'https://bloc-tec.com',
        pageDescription = 'Elevate your product imagery to new heights with Bloc Tec\'s photographic expertise. Our dedicated team specializes in capturing products with realistic lighting, incredible details, and accurate color representation. Showcase your products in the best possible light and leave a lasting impression on your customers. See the difference Bloc Tec can make for your brand today.">',
        pageKeywords = 'photography,product,brick,house,patio,accurate color,texture,detail,lighting,realistic lighting,professional equipment,experts,experience,knowledgable,showcase,studio,techniques,gear,manufacturing,tiles,garden',
        imageAlt = 'Alternative text for the image',
        imageName = 'photography';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: pageKeywords },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/photography/' },
      { property: 'og:type', content: 'website' },

      // Twitter meta tags
      { property: 'twitter:title', content: pageTitle },
      { property: 'twitter:description', content: pageDescription },
      { property: 'twitter:image', content: baseUrl+`/images/meta/twitter/${imageName}.jpg` },
      { property: 'twitter:image:alt', content: imageAlt },
      { property: 'twitter:card', content: 'summary_large_image' },

      // LinkedIn meta tags
      { property: 'linkedin:title', content: pageTitle },
      { property: 'linkedin:description', content: pageDescription },
      { property: 'linkedin:image', content: baseUrl+`/images/meta/linkedin/${imageName}.jpg` },
      { property: 'linkedin:image:alt', content: imageAlt },
      { property: 'linkedin:url', content: baseUrl+'/photography/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })

  const route = useRoute();  // Get the current route
  const pageIdentifier = route.path;
  let slideStore = useSlideStore(),
      slideState = slideStore.getSlideState(pageIdentifier),
      currentSlide = ref(slideState.current),
      nextSlide = ref(slideState.next),
      pastSlide = ref(slideState.past),
      isBackNavigation = ref(false),
      videoCount = ref(1),
      slideval = ref(50),
      slideInteract = ref(false),
      ticking = ref(false),
      scrlTicking = ref(true);
  
  function slideInput(){
    slideInteract.value = true
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
    const scrl = document.querySelector('.photography-page__brick');
    const lngth = 3;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(scrl){
      if(currentSlide.value!==3)
        scrl.classList.remove('oh')
      setTimeout(() => {
        slideval.value = 50
        document.querySelector('.foreground-img').style.width = slideval.value+'%'
        document.querySelector('.background-slider__icon').style.width = slideval.value+'%'
        console.log(slideval.value)
        if(currentSlide.value===3)
          scrl.classList.add('oh')
        ticking.value = false;
      }, speed);
    }
    slideStore.setSlideState(pageIdentifier, {
      current: currentSlide.value,
      next: nextSlide.value,
      past: pastSlide.value
    });
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
    window.addEventListener('popstate', () => {
      isBackNavigation.value = true;
    });

    // Check if the user navigated back
    if (isBackNavigation.value) {
      currentSlide.value = slideState.current;
      nextSlide.value = slideState.next;
      pastSlide.value = slideState.past;
      isBackNavigation.value = false;  // reset the flag
    }
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      const scrl = document.querySelector('.photography-page__brick');
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
      },{passive: true});
      touch();
    }, 610);
  })
</script>