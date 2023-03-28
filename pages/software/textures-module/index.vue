<template>
  <div class="seamless-page">
    <Rotate />
    <SoftwareNav class="black" />
    <div class="animation-steps__wrapper">
      <div :class="`animation-steps animation-steps_`+currentSlide+` animation-lstep_`+pastSlide+` ${(ios)?'ios-true':''}`">
        <section class="seamless-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
            <div class="slide-section__text position_absolute">
              <div class="slide-section__text-head text_center">
                <h1>Seamless Textures</h1>
              </div>
            </div>
            <div class="slide-section__decor">
              <Img :resp="false" v-for="i in 15" :key="i" class="position_absolute" :img="'seamless/seamless_wall-animated'" :alt="'Wall'"/>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>What makes our textures unique?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="seamless-page__layout">
          <div class="slide-section position_relative">
            <div class="slide-section__text slide-section__text_same text_center">
              <div class="slide-section__text-head">
                <h2>Any Layout</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32">
                  Our textures give you the freedom to select any layout - they are <br> ALL seamless!
                </p>
              </div>
            </div>
            <div class="slide-section__decor slide-section__decor_same position_absolute d_flex align-items_center">
              <Img :resp="false" v-for="i in 4" :key="i" class="slide-section__decor-item position_absolute" :img="'seamless/seamless_wall-layout-'+i"  :alt="'Wall'"/>
            </div>
          </div>
        </section>
        <section class="seamless-page__mortar">
          <div class="slide-section position_relative">
            <div class="slide-section__text slide-section__text_same text_center">
              <div class="slide-section__text-head">
                <h2>Any Mortar</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32">
                  Mortar colour completely changes the products appearance -  <br>  you choose.
                </p>
              </div>
            </div>
            <div class="slide-section__decor slide-section__decor_same position_absolute d_flex align-items_center">
              <Img :resp="false" v-for="i in 4" :key="i" class="slide-section__decor-item position_absolute" :img="'seamless/seamless_wall-mortar-'+i"  :alt="'Wall'"/>
            </div>
          </div>
        </section>
        <section class="seamless-page__blend">
          <div class="slide-section position_relative">
            <div class="slide-section__text slide-section__text_same text_center">
              <div class="slide-section__text-head">
                <h2>Any Blend</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32">
                  Enjoy unlimited design options when coupled with the blender module.
                </p>
              </div>
              <div class="slider-section__text-cta">
                <NuxtLink to="/software/blender-module/">Learn about blender module</NuxtLink>
              </div>
            </div>
            <div class="slide-section__decor-scale">
              <div class="slide-section__decor_alternative slide-section__decor_alternative-left position_absolute">
                <Img   class="slide-section__decor-item position_absolute" :img="'seamless/seamless_wall-big'" :alt="'Wall'"/>
              </div>
              <div class="slide-section__decor position_absolute">
                <Img :resp="false" :scenes="false" class="slide-section__decor-item position_absolute" :img="'seamless/seamless_bricks-black'"  :alt="'Wall'"/>
                <Img :resp="false" :scenes="false" class="slide-section__decor-item position_absolute" :img="'seamless/seamless_wall-animated'"  :alt="'Wall'"/>
                <Img :resp="false" :scenes="false" class="slide-section__decor-item position_absolute" :img="'seamless/seamless_bricks-white'" :alt="'Wall'"/>
                <Img :resp="false" :scenes="false" class="slide-section__decor-item position_absolute" :img="'seamless/seamless_wall-big'" :alt="'Wall'"/>
              </div>
              <div class="slide-section__decor_alternative position_absolute">
                <Img   class="slide-section__decor-item position_absolute" :img="'seamless/seamless_wall-big'" :alt="'Wall'"/>
              </div>
            </div>
          </div>
        </section>
        <section class="seamless-page__pxperfect position_relative">
          <div class="slide-section position_relative">
            <div class="slide-section__text slide-section__text_same text_center">
              <div class="slide-section__text-head">
                <h2>Pixel Perfect Textures</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32">
                  Achieve seamless joins with both brick and mortar in incredible detail.
                </p>
              </div>
            </div>
            <div class="slide-section__decor position_relative">
              
            </div>
          </div>
        </section>
        <section class="seamless-page__packaged">
          <div>
            <div class="slide-section position_relative">
              <div class="slide-section__text slide-section__text_same text_center">
                <div class="slide-section__text-head">
                  <h2>Packaged and Ready to Go</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32">
                    Download your design pack which includes various scales to suit your project.
                  </p>
                </div>
                <div class="slider-section__text-cta">
                  <a target="_blank" href="https://app.paverpicker.com/demo/Walling/Clay%20Bricks/viewer/blend?c=VA_LIV_HA&b=20&c=VA_QU_HA&b=20&c=VA_TR_HA&b=60&l=Stretcher&lv=Stretcher&jf=Med+Grey&js=10&scene=None&a=0">Try it</a>
                </div>
              </div>
              <div class="slide-section__decor position_relative">
                <div class="slide-section__decor-item position_absolute" v-html="folderBack"></div>
                <div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">
                  <Img :resp="false" :img="'seamless/seamless_packed-1'" :alt="'Seamless Packed'"/>
                  <p>FrogUp_BriceBlend_L.jpeg</p>
                </div>
                <div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">
                  <Img :resp="false" :img="'seamless/seamless_packed-2'" :alt="'Seamless Packed'"/>
                  <p>FrogUp_BriceBlend_M.jpeg</p>
                </div>
                <div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">
                  <Img :resp="false" :img="'seamless/seamless_packed-3'" :alt="'Seamless Packed'"/>
                  <p>FrogUp_BriceBlend_S.jpeg</p>
                </div>
                <div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">
                  <Img :resp="false" :img="'seamless/seamless_packed-4'" :alt="'Seamless Packed'"/>
                  <p>FrogUp_BriceBlend_TextureInfo.pdf</p>
                </div>
                <div class="slide-section__decor-item position_absolute" v-html="folderFront"></div>
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
  import folderBack  from '~/assets/svg/icons/folder_back.svg?raw';
  import folderFront  from '~/assets/svg/icons/folder_front.svg?raw';
  const pageTitle = 'Textures Add-on | Paver Picker',
        baseUrl = 'https://paverpicker.pages.dev',
        pageDescription = 'What makes our textures unique? ',
        imageAlt = 'Alternative text for the image',
        imageName = 'seamless-textures';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/software/textures-module/' },
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
      { property: 'linkedin:url', content: baseUrl+'/software/textures-module/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })


  let currentSlide = ref(0),
      pastSlide = ref(0),
      ticking = ref(false),
      ios = ref(false),
      scrlTicking = ref(true);

  function nextPage(){
    slide(2000, 100)
  }
  function slide(speed=2000, y=null, direction=null) {
    const scrl = document.querySelector('.seamless-page__packaged');
    const lngth = 10;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      setTimeout(() => {
        currentSlide.value+=1
      }, 2000);
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
      setTimeout(() => {
        currentSlide.value-=1
        pastSlide.value = currentSlide.value+1
      }, 2000);
    }
    ticking.value = true;
    if(scrl){
      if(currentSlide.value!==10)
        scrl.classList.remove('oh')
      setTimeout(() => {
        if(currentSlide.value===10)
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
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
      ios.value=true
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      const scrl = document.querySelector('.seamless-page__packaged');
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
    }, 610);
  })
</script>