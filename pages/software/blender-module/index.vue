<template>
  <div class="blender-page position_relative">
    <Rotate />
    <SoftwareNav />
    <div class="animation-steps__wrapper position_relative">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <div class="blender-page__bg position_absolute">
          <Img :img="'blender/black'" :alt="'Background'"/>
        </div>
        <section class="blender-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
            <div class="slide-section__text position_relative">
              <div class="slide-section__text-head text_center">
                <h1>Introducing Paver Picker Blender</h1>
              </div>
            </div>
            <div :class="`blender__bricks d_flex flex_wrap position_absolute option-${optionBrick}`">
              <div class="blender__brick-item position_relative" v-for="(item, idx) in bricks" v-bind:key="idx">
                <div :class="`picture position_absolute opacity opacity_${item.opacity}`">
                  <picture>
                    <source type="image/png" :srcset="'/images/decor/'+item.href+'.png , /images/decor/'+item.href+'@x2.png 2x'"/>
                    <source type="image/webp" :srcset="'/images/decor/'+item.href+'.webp , /images/decor/'+item.href+'@x2.webp 2x'"/>
                    <img :src="'/images/decor/'+item.href+'@x2.png'" alt="Bricks" width="500" height="500"/>
                  </picture>
                </div>
                <div class="picture">
                  <picture>
                    <source type="image/png" :srcset="'/images/decor/'+item.bw+'.png , /images/decor/'+item.bw+'@x2.png 2x'"/>
                    <source type="image/webp" :srcset="'/images/decor/'+item.bw+'.webp , /images/decor/'+item.bw+'@x2.webp 2x'"/>
                    <img :src="'/images/decor/'+item.bw+'@x2.png'" alt="Bricks" width="500" height="500"/>
                  </picture>
                </div>
                <div class="picture position_absolute" v-if="item.nestedr">
                  <picture>
                    <source type="image/png" :srcset="'/images/decor/'+item.nestedr+'.png , /images/decor/'+item.nestedr+'@x2.png 2x'"/>
                    <source type="image/webp" :srcset="'/images/decor/'+item.nestedr+'.webp , /images/decor/'+item.nestedr+'@x2.webp 2x'"/>
                    <img :src="'/images/decor/'+item.nestedr+'@x2.png'" alt="Bricks" width="500" height="500"/>
                  </picture>
                </div>
                <div class="picture position_absolute" v-if="item.nestedb">
                  <picture>
                    <source type="image/png" :srcset="'/images/decor/'+item.nestedb+'.png , /images/decor/'+item.nestedb+'@x2.png 2x'"/>
                    <source type="image/webp" :srcset="'/images/decor/'+item.nestedb+'.webp , /images/decor/'+item.nestedb+'@x2.webp 2x'"/>
                    <img :src="'/images/decor/'+item.nestedb+'@x2.png'" alt="Bricks" width="500" height="500"/>
                  </picture>
                </div>
                <div class="picture position_absolute" v-if="item.nestedc">
                  <picture>
                    <source type="image/png" :srcset="'/images/decor/'+item.nestedc+'.png , /images/decor/'+item.nestedc+'@x2.png 2x'"/>
                    <source type="image/webp" :srcset="'/images/decor/'+item.nestedc+'.webp , /images/decor/'+item.nestedc+'@x2.webp 2x'"/>
                    <img :src="'/images/decor/'+item.nestedc+'@x2.png'" alt="Bricks" width="500" height="500"/>
                  </picture>
                </div>
              </div>
              <Img class="blender__bricks-decor position_absolute" :img="'blender/bricks-white/brick-0'" :resp="false" :alt="'Brick'"/>
              <Img class="blender__bricks-decor position_absolute" :img="'blender/bricks-white/brick-2'" :resp="false" :alt="'Brick'"/>
              <Img class="blender__bricks-decor position_absolute" :img="'blender/bricks-brown/brick-7'" :resp="false" :alt="'Brick'"/>
              <Img class="blender__bricks-decor position_absolute" :img="'blender/bricks-brown/brick-9'" :resp="false" :alt="'Brick'"/>
              <Img class="blender__bricks-decor position_absolute" :img="'blender/bricks-brown/brick-12'" :resp="false" :alt="'Brick'"/>
              <Img class="blender__bricks-decor position_absolute" :img="'blender/bricks-white/brick-12'" :resp="false" :alt="'Brick'"/>
            </div>
            <div class="blender-page__shadow position_abosolute"></div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>How does our blender work?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <section class="blender-page__create position_relative">
          <div class="slide-section d_flex ">
            <div class="slide-section__decor position_absolute">
              <div class="range d_flex align-items_center position_absolute">
                <div class="range__text position_relative">
                  <strong class="opacity_0">100%</strong>
                  <strong class="position_absolute">{{slidevalStart}}%</strong>
                </div>
                <div class="range__input position_relative">
                  <input type="range" v-model="slideval" max="100" min="0" @input="updateRangeValues">
                  <div class="range__track"></div>
                </div>
                <div class="range__text position_relative">
                  <strong class="opacity_0">100%</strong>
                  <strong class="position_absolute text_right">{{slideval}}%</strong>
                </div>
              </div>
            </div>
            <div class="slide-section__text">
              <div class="slide-section__text-head">
                <h2>Create Bespoke Blends</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32">
                  Blend multiple products together and change the blend percentages to suit your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="blender-page__unlimited position_relative">
          <div class="slide-section">
            <div class="slide-section__decor d_flex justify-content_center position_absolute">
              <div class="slider-section__decor-brick position_relative cursor_pointer" @click="option(i)" v-for="i in 3" v-bind:key="i">
                <div class="slider-section__decor-brick-icon"></div>
                <picture>
                  <source type="image/png" :srcset="`/images/decor/blender/brick-option-${i}.png`"/>
                  <source type="image/webp" :srcset="`/images/decor/blender/brick-option-${i}.webp`"/>
                  <img :src="`/images/decor/blender/brick-option-${i}.png`" alt="Brick option" width="430" height="130"/>
                </picture>
              </div>
            </div>
            <div class="slide-section__text">
              <div class="slide-section__text-head text_center">
                <h2>Unlimited Possibilities</h2>
              </div>
              <div class="slide-section__text-desc">
                <p class="fs_32 text_center">
                  Add more products to create the look you want.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="blender-page__try position_relative">
          <div>
            <div class="slide-section">
              <div class="slide-section__text">
                <div class="slide-section__text-head text_center">
                  <h2>Try it for yourself</h2>
                </div>
                <div class="slide-section__text-desc">
                  <p class="fs_32 text_center">
                    Create unique blends, any pattern, any mortar colour.
                  </p>
                </div>
              </div>
              <div class="slide-section__btns position_relative d_flex justify-content_center">
                <a href="#" class="text_uppercase btn btn_primary text_uppercase">Try Brick Blender</a>
                <a href="#" class="text_uppercase btn btn_primary text_uppercase">Try Paving Blender</a>
              </div>
              <div class="slide-section__decor d_flex justify-content_center">
                <div class="slide-section__decor-video position_relative">
                  <Img :img="'blender-wall'" :resp="false" :alt="'Wall'"/>
                  <Img class="position_absolute" :img="'blender-wall-filled'" :resp="false" :alt="'Wall filled'"/>
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
      url('/images/decor/blender/black-md@x2.png'),
      url('/images/decor/blender/black-md@x2.webp');
    background-size: 0;
  }
</style>
<script setup>
  const pageTitle = 'Blender Add-on | Paver Picker',
        baseUrl = 'https://paverpicker.pages.dev',
        pageDescription = 'How does our blender work? ',
        imageAlt = 'Alternative text for the image',
        imageName = 'blender';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/software/blender-module/' },
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
      { property: 'linkedin:url', content: baseUrl+'/software/blender-module/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })

  let currentSlide = ref(0),
      pastSlide = ref(0),
      optionBrick = ref(1),
      ticking = ref(false),
      slideval = ref(50),
      slidevalStart = ref(50),
      scrlTicking = ref(true);

  const brickw = 'blender/bricks-white/brick-',
        brickr = 'blender/bricks-red/brick-',
        brickbl = 'blender/bricks-bl/',
        brickc = 'blender/bricks-cl/',
        brickb = 'blender/bricks-brown/brick-';
  const bricks = [
    {
      opacity: 1,
      bw: brickw+'0',
      href: brickb+'0'
    },
    {
      opacity: 1,
      bw: brickw+'8',
      href: brickb+'1'
    },
    {
      opacity: 0,
      bw: brickw+'1',
      href: brickb+'7',
      nestedr: brickr+'1',
      nestedb: brickbl+'1',
      nestedc: brickc+'1'
    },
    {
      opacity: 1,
      bw: brickw+'4',
      href: brickb+'2'
    },
    {
      opacity: 0,
      bw: brickw+'3',
      href: brickb+'10'
    },
    {
      opacity: 1,
      bw: brickw+'6',
      href: brickb+'3',
      nestedr: brickr+'3',
      nestedb: brickbl+'3',
      nestedc: brickc+'3'
    },
    {
      opacity: 0,
      bw: brickw+'4',
      href: brickb+'5'
    },
    {
      opacity: 1,
      bw: brickw+'5',
      href: brickb+'4'
    },
    {
      opacity: 1,
      bw: brickw+'6',
      href: brickb+'5'
    },
    {
      opacity: 0,
      bw: brickw+'5',
      href: brickb+'11'
    },
    {
      opacity: 1,
      bw: brickw+'7',
      href: brickb+'6'
    },
    {
      opacity: 0,
      bw: brickw+'6',
      href: brickb+'8',
      nestedr: brickr+'6',
      nestedb: brickbl+'6',
      nestedc: brickc+'6'
      
    },
    {
      opacity: 0,
      bw: brickw+'7',
      href: brickb+'1',
      nestedr: brickr+'7',
      nestedb: brickbl+'7',
      nestedc: brickc+'7'
    },
    {
      opacity: 1,
      bw: brickw+'9',
      href: brickb+'8'
    },
    {
      opacity: 0,
      bw: brickw+'8',
      href: brickb+'0',
      nestedr: brickr+'8',
      nestedb: brickbl+'8',
      nestedc: brickc+'8'
    },
    {
      opacity: 0,
      bw: brickw+'9',
      href: brickb+'3'
    },
    {
      opacity: 0,
      bw: brickw+'10',
      href: brickb+'9'
    },
    {
      opacity: 0,
      bw: brickw+'11',
      href: brickb+'2'
    },
    {
      opacity: 1,
      bw: brickw+'1',
      href: brickb+'10'
    },
    {
      opacity: 1,
      bw: brickw+'10',
      href: brickb+'11',
      nestedr: brickr+'11',
      nestedb: brickbl+'11',
      nestedc: brickc+'11'
    },
    {
      opacity: 0,
      bw: brickw+'13',
      href: brickb+'6',
      nestedr: brickr+'13',
      nestedb: brickbl+'13',
      nestedc: brickc+'13'
    },
    {
      opacity: 1,
      bw: brickw+'6',
      href: brickb+'13'
    },
    {
      opacity: 1,
      bw: brickw+'2',
      href: brickb+'14',
      nestedr: brickr+'14',
      nestedb: brickbl+'14',
      nestedc: brickc+'14'
    },
    {
      opacity: 0,
      bw: brickw+'14',
      href: brickb+'14'
    },
  ]
  function updateRangeValues() {
    slidevalStart.value = `${100 - slideval.value}`;
    document.querySelector('.range__track').style.left = slideval.value+'%'
    if(slideval.value == 0)
      op()
    else if(slideval.value <= 4){
      op()
      bricks[13].opacity = 1
    }
    else if(slideval.value <= 8){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
    }
    else if(slideval.value <= 12){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
    }
    else if(slideval.value <= 16){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
    }
    else if(slideval.value <= 20){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
    }
    else if(slideval.value <= 24){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
    }
    else if(slideval.value <= 28){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
    }
    else if(slideval.value <= 32){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
    }
    else if(slideval.value <= 36){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
    }
    else if(slideval.value <= 40){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
    }
    else if(slideval.value <= 44){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
    }
    else if(slideval.value <= 52){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
    }
    else if(slideval.value <= 53){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
    }
    else if(slideval.value <= 56){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
    }
    else if(slideval.value <= 60){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
    }
    else if(slideval.value <= 64){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
    }
    else if(slideval.value <= 68){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
    }
    else if(slideval.value <= 72){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
    }
    else if(slideval.value <= 76){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
      bricks[2].opacity = 1
    }
    else if(slideval.value <= 80){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
      bricks[2].opacity = 1
      bricks[11].opacity = 1
    }
    else if(slideval.value <= 84){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
      bricks[2].opacity = 1
      bricks[11].opacity = 1
      bricks[16].opacity = 1
    }
    else if(slideval.value <= 88){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
      bricks[2].opacity = 1
      bricks[11].opacity = 1
      bricks[16].opacity = 1
      bricks[4].opacity = 1
    }
    else if(slideval.value <= 92){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
      bricks[2].opacity = 1
      bricks[11].opacity = 1
      bricks[16].opacity = 1
      bricks[4].opacity = 1
      bricks[23].opacity = 1
    }
    else if(slideval.value >= 96){
      op()
      bricks[13].opacity = 1
      bricks[19].opacity = 1
      bricks[1].opacity = 1
      bricks[10].opacity = 1
      bricks[5].opacity = 1
      bricks[7].opacity = 1
      bricks[21].opacity = 1
      bricks[3].opacity = 1
      bricks[18].opacity = 1
      bricks[8].opacity = 1
      bricks[22].opacity = 1
      bricks[0].opacity = 1
      bricks[14].opacity = 1
      bricks[12].opacity = 1
      bricks[17].opacity = 1
      bricks[15].opacity = 1
      bricks[6].opacity = 1
      bricks[20].opacity = 1
      bricks[2].opacity = 1
      bricks[11].opacity = 1
      bricks[16].opacity = 1
      bricks[4].opacity = 1
      bricks[23].opacity = 1
      bricks[9].opacity = 1
    }
  }
  function nextPage(){
    slide(2000, 100)
  }
  function op(){
    bricks.forEach(e => {e.opacity = 0})
  }
  function option(o){
    optionBrick.value = o
    slide(2000, 100)
  }
  function slide(speed=2000, y=null, direction=null) {
    const scrl = document.querySelector('.blender-page__try');
    const lngth = 4;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    if(scrl){
      if(currentSlide.value!==4)
        scrl.classList.remove('oh')
      setTimeout(() => {
        if(currentSlide.value===4)
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
      const scrl = document.querySelector('.blender-page__try');
      const vid = document.querySelector('.section__video');
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