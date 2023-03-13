<template>
  <div class="software-page">
    <Rotate />
    <SoftwareNav />
    <Preloader :loading="loading" />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="software-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
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
            <GoBottom @goToSlide="changeSlide"/>
          </div>
        </section>
        <section class="software-page__steps">
          <div class="slide-section d_flex align-items_center">
            <div class="slide-section__decor">
              <div class="slide-section__decor-video position_relative">
                <div v-for="i in 4" :key="i" :class="`slide-section__decor-video-inside slide-section__decor-video-inside_${i}`">
                  <video autoplay playsinline muted class="software_video" :src="`/video/software-page-animation_${i}.mp4`"></video>
                </div>
              </div>
            </div>
            <div class="slide-section__text position_relative">
              <div class="slide-section__text-inside position_absolute slide-section__text_1">
                <div class="slide-section__text-head">
                  <h2> Your Online <br> Showroom</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32"> Present your products in one place, the use of filters make browsing easy.</p>
                </div>
              </div>
              <div class="slide-section__text-inside position_absolute slide-section__text_2">
                <div class="slide-section__text-head">
                  <h2>Any Layout</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32">Change laying patterns and angles. Do you have a laying pattern unique to your product? We can create that too!</p>
                </div>
              </div>
              <div class="slide-section__text-inside position_relative slide-section__text_3">
                <div class="slide-section__text-head">
                  <h2>Any Joint</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32">Change joint colour and size. Create limitless designs with the blender module.</p>
                </div>
                <div class="slider-section__text-cta">
                  <NuxtLink to="/software/blender-module/">Learn about the blender module</NuxtLink>
                </div>
              </div>
              <div class="slide-section__text-inside position_absolute slide-section__text_4">
                <div class="slide-section__text-head">
                  <h2>Inspiring <br> Visualisation</h2>
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
            <div class="slide-section">
              <div class="slide-section__text position_relative">
                <div class="slide-section__text-head text_center">
                  <h2 class="text_center">Any Device</h2>
                </div>
                <div class="slide-section__text-desc text_center">
                  <p class="fs_32">Fully Adaptable to screen sizes. If you want even more control we offer API for integrating straight into your website.</p>
                </div>
                <div class="slider-section__text-cta text_center">
                  <NuxtLink to="/software/api-module/">Learn about the API module</NuxtLink>
                </div>
              </div>
              <div class="slide-section__decor d_flex justify-content_center position_relative">
                <Img :img="'paver-3'" class="paver paver_1 position_absolute" :alt="'Software'"/>
                <Img :img="'paver-3'" class="paver paver_2 position_relative" :alt="'Software'"/>
                <Img :img="'paver-3mobile'" class="paver paver_3 position_absolute" :alt="'Software'"/>
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

  const pageTitle = 'Paver Picker | Base Software',
      baseUrl = 'https://paverpicker.pages.dev',
      pageDescription = 'How can our software benefit you? ',
      imageAlt = 'Alternative text for the image',
      imageName = 'software';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.png` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/software/' },
      { property: 'og:type', content: 'website' },

      // Twitter meta tags
      { property: 'twitter:title', content: pageTitle },
      { property: 'twitter:description', content: pageDescription },
      { property: 'twitter:image', content: baseUrl+`/images/meta/twitter/${imageName}.png` },
      { property: 'twitter:image:alt', content: imageAlt },
      { property: 'twitter:card', content: 'summary_large_image' },

      // LinkedIn meta tags
      { property: 'linkedin:title', content: pageTitle },
      { property: 'linkedin:description', content: pageDescription },
      { property: 'linkedin:image', content: baseUrl+`/images/meta/linkedin/${imageName}.png` },
      { property: 'linkedin:image:alt', content: imageAlt },
      { property: 'linkedin:url', content: baseUrl+'/software/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.png` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })


  let currentSlide = ref(0),
      pastSlide = ref(0),
      ticking = ref(false),
      currentTimeout,
      scrlTicking = ref(true),
      loading = ref(true);
  
  function changeSlide(){
    let scrl = document.querySelector('.software-page__device');
    currentSlide.value=5
    pastSlide.value=4
    scrl.classList.add('oh')
    setTimeout(() => {
      loading.value = false
    }, 100);
    setTimeout(() => {
      scrl.scrollTop = scrl.scrollHeight;
    }, 600);
    setTimeout(() => {
      loading.value = true
    }, 2200);
  }

  function nextPage(){
    slide(3000, 100)
  }
  function playVideo(currentSlide) {
    const videoPlayers = document.querySelectorAll('.software_video');
    const videoStartDelayMs = 3000;
    const playerIndex = currentSlide - 1;
    const player = videoPlayers[playerIndex];
    if (currentSlide === 0 || !player)
      return;
    player.currentTime = 0;
    switch (currentSlide) {
      case 1:
        if (pastSlide.value === 0) {
          setTimeout(() => {
            player.play();
          }, videoStartDelayMs);
        } else {
          player.play();
        }
        break;
      case 2:
      case 3:
      case 4:
        player.play();
        break;
      default:
        break;
    }
  }
  function slide(speed=3000, y=null, direction=null) {
    const scrl = document.querySelector('.software-page__device');
    const lngth = 5;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(scrl){
      if(currentSlide.value!==5)
        scrl.classList.remove('oh')
      setTimeout(() => {
        if(currentSlide.value===5)
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
      let video = document.querySelectorAll('.software_video');
      video.forEach(e=>{
        e.pause()
      })
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