<template>
  <div class="api-page">
    <Rotate />
    <SoftwareNav />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="api-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
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
                          Integrate key features of the BLOC-TEC software directly 
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
                      <Img :resp="false" :img="'api-hero'" :alt="'Brick'"/>
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
  import { useSlideStore  } from '@/store/slideStore'
  const pageTitle = 'API Add-on | BLOC-TEC',
        baseUrl = 'https://bloc-tec.com',
        pageDescription = 'Bloc Tech\'s API allows you to easily integrate our visualisation software to your website. Your branding will be on it and you have full control over the layout, fonts, colors, and style. You can also easily track your analytics for the software. Give it a try today!',
        pageKeywords = 'api,application programming interface,website integration,web,online,visualisation software,visualization software,embed,embedding,software,program,interactive,company brand,white label,control,analytics,track,Tobermore,Marshalls,Ibstock Brick,Kilsaran,Wienerberger,Banas Stones,Ethan Mason,AG,Global Stone,Forticrete,Roadstone,Outhaus',
        imageAlt = 'Alternative text for the image',
        imageName = 'software';
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
      { property: 'og:url', content: baseUrl+'/software/api-module/' },
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
      { property: 'linkedin:url', content: baseUrl+'/software/api-module/' },

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