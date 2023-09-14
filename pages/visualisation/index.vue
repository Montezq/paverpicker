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
              <Img :img="'visualisation_hero'" :resp="false" :alt="'Home hero visualisation'"/>
            </div>
            <div  class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <div class="hero__link">
                <NuxtLink class="text_uppercase btn btn_primary" to="/scenes/" >
                  View our scenes
                </NuxtLink>
              </div>
              <div @click="nextPage">
                <p>What makes our visualisations so realistic?</p>
                <p class="ff_icon fs_48"></p>
              </div>
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
                        preparing the areas to be visualised. We
                        ensure each and every blade of grass is
                        properly preserved. 
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
                        detail of shadows and highlights back
                        into the image.
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
                        products with perfect perspective and
                        scale to ensure the visualisation looks
                        natural.
                      </p>
                    </div>
                    <div class="slider-section__text-cta">
                      <NuxtLink to="/scenes/" >
                        <span class="fs_32 fw_regular">
                          View our selection of scenes
                        </span>
                      </NuxtLink>
                    </div>
                    <div class="slider-section__text-cta">
                      <NuxtLink to="/software/" >
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
  const pageTitle = 'Visualisation | BLOC-TEC',
        baseUrl = 'https://paverpicker.com/',
        pageDescription = 'What makes our visualisations so realistic?',
        imageAlt = 'Alternative text for the image',
        imageName = 'visualisation';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/visualisation/' },
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
      { property: 'linkedin:url', content: baseUrl+'/visualisation/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })

  let currentSlide = ref(0),
  pastSlide = ref(0),
  disableScroll = ref(false), // Flag to disable scrolling
  scrlTicking = ref(true);

  function nextPage() {
    slide(1800, 100);
  }

  function slide(speed = 1800, y = null, direction = null) {
    if (disableScroll.value) {
      console.log('Scroll is disabled');
      return;
    }

    disableScroll.value = true; // Disable scrolling
    setTimeout(() => {
      disableScroll.value = false; // Re-enable scrolling after 3.2 seconds
    }, 3200);

    const scrl = document.querySelector('.visualisation-page__steps');
    const lngth = 6;

    if ((y > 0 || direction === 'up') && currentSlide.value < lngth) {
      currentSlide.value += 1;
      setTimeout(() => {
        currentSlide.value += 1;
      }, 1600);
      pastSlide.value = currentSlide.value - 1;
    } else if ((y < 0 || direction === 'down') && currentSlide.value > 0) {
      currentSlide.value -= 1;
      pastSlide.value = currentSlide.value + 1;
      setTimeout(() => {
        currentSlide.value -= 1;
        pastSlide.value = currentSlide.value + 1;
      }, 1600);
    }

    if (scrl) {
      if (currentSlide.value !== 6) scrl.classList.remove('oh');
      setTimeout(() => {
        if (currentSlide.value === 6) scrl.classList.add('oh');
      }, speed);
    }
  }

  function touch() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
      if (Math.abs(xDiff) + Math.abs(yDiff) > 1) {
        if (Math.abs(yDiff) > Math.abs(xDiff)) {
          if (
            yDiff > 0 &&
            !disableScroll.value &&
            scrlTicking.value
          ) {
            slide(1800, null, 'up');
          }
          if (
            yDiff < 0 &&
            !disableScroll.value &&
            scrlTicking.value
          ) {
            slide(1800, null, 'down');
          }
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
      scrl.addEventListener('scroll', (e) => {
        if (scrl.scrollTop > 1) scrlTicking.value = false;
        else scrlTicking.value = true;
      });
      wrapper.addEventListener('wheel', (e) => {
        if (!disableScroll.value && scrlTicking.value) {
          slide(1800, e.deltaY);
        }
      }, { passive: true });
      touch();
    }, 610);
  });


</script>