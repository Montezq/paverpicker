<template>
  <div class="blender-page position_relative">
    <Rotate />
    <div class="animation-steps__wrapper position_relative">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <div class="blender-page__bg position_absolute">
          <Img :img="'blender/black'" :alt="'Background'"/>
        </div>
        <section class="blender-page__hero position_relative">
          <div class="slide-section position_relative d_flex align-items_center flex_column">
            <SoftwareNav />
            <div class="slide-section__text">
              <div class="slide-section__text-head">
                <h1>Introducing Paver Picker Blender</h1>
              </div>
            </div>
            <div class="blender__bricks d_flex flex_wrap position_absolute">
              <div class="blender__brick-item position_relative" v-for="(item, idx) in bricks" v-bind:key="idx">
                <Img :img="item.href" :resp="false" :alt="'Brick'"/>
                <Img v-if="item.nested" :img="item.nested" :alt="'Brick'" class="position_absolute"/>
              </div>
            </div>
            <div @click="nextPage" class="scrl-down position_absolute fs_32 text_center cursor_pointer">
              <p>How does Paver Picker create inspiring blends?</p>
              <p class="ff_icon fs_48"></p>
            </div>
          </div>
        </section>
        <div class="blender-page__create position_relative">
          <div class="slide-section">
            <div class="slide-section__text">
              <div class="slide-section__text-head">
                <h1>Introducing Paver Picker Blender</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="blender-page__unlimited position_relative">
          <div class="slide-section">
            <div class="slide-section__text">
              <div class="slide-section__text-head text_center">
                <h1>Unlimited Possibilities</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="blender-page__try position_relative">
          <div class="slide-section">
            <div class="slide-section__text">
              <div class="slide-section__text-head text_center">
                <h1>Unlimited Possibilities</h1>
              </div>
            </div>
          </div>
        </div>
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

  const brickw = 'blender/bricks-white/brick-',
        brickr = 'blender/bricks-red/brick-',
        brickb = 'blender/bricks-brown/brick-';
  const bricks = [
    {
      href: brickb+'0'
    },
    {
      href: brickb+'1'
    },
    {
      href: brickw+'1',
      nested: brickr+'1'
    },
    {
      href: brickb+'2'
    },
    {
      href: brickw+'3'
    },
    {
      href: brickb+'3',
      nested: brickr+'3'
    },
    {
      href: brickw+'4'
    },
    {
      href: brickb+'4'
    },
    {
      href: brickb+'5'
    },
    {
      href: brickw+'5'
    },
    {
      href: brickb+'6'
    },
    {
      href: brickw+'6',
      nested: brickr+'6'
    },
    {
      href: brickw+'7',
      nested: brickr+'7'
    },
    {
      href: brickb+'8'
    },
    {
      href: brickw+'8',
      nested: brickr+'8'
    },
    {
      href: brickw+'9'
    },
    {
      href: brickw+'10'
    },
    {
      href: brickw+'11'
    },
    {
      href: brickb+'10'
    },
    {
      href: brickb+'11',
      nested: brickr+'11'
    },
    {
      href: brickw+'13',
      nested: brickr+'13'
    },
    {
      href: brickb+'13'
    },
    {
      href: brickb+'14',
      nested: brickr+'14'
    },
    {
      href: brickw+'14'
    },
  ]

  function nextPage(){
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
    if(currentSlide.value!==4)
      scrl.classList.remove('oh')
    setTimeout(() => {
      if(currentSlide.value===4)
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
      });
      touch();
    }, 610);
  })
</script>