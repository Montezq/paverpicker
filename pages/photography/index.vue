<template>
  <div class="photography-page">
    <Rotate />
    <div class="animation-steps__wrapper">
      <div :class="'animation-steps animation-steps_'+currentSlide+' animation-lstep_'+pastSlide">
        <section class="photography-page__hero">
          <div class="slide-section"></div>
        </section>
        <section class="photography-page__brick">
          <div class="slide-section"></div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import 'main.scss';
</style>
<script setup>
  let currentSlide = ref(0),
      pastSlide = ref(0),
      ticking = ref(false),
      scrlTicking = ref(true);
  

  function slide(speed=3000, y=null, direction=null) {
    // const scrl = document.querySelector('.home__software');
    const lngth = 3;
    if((y>0 || direction==='up') && currentSlide.value < lngth){
      currentSlide.value+=1
      pastSlide.value = currentSlide.value-1
    }else if((y<0 || direction==='down') && currentSlide.value > 0){
      currentSlide.value-=1
      pastSlide.value = currentSlide.value+1
    }
    ticking.value = true;
    // if(currentSlide.value!==5)
    //   scrl.classList.remove('oh')
    setTimeout(() => {
      // if(currentSlide.value===5)
      //   scrl.classList.add('oh')
      ticking.value = false;
    }, speed);
  }
  function touch(){
    let touchstartY = 0
    let touchendY = 0
    function checkDirection() {
      if (touchendY < touchstartY && ticking.value === false && scrlTicking.value)
        slide(3000,null,'up')
      if (touchendY > touchstartY && ticking.value === false && scrlTicking.value)
        slide(3000,null,'down')
    }
    document.addEventListener('touchstart', e => {
      touchstartY = e.changedTouches[0].screenY
    })
    document.addEventListener('touchend', e => {
      touchendY = e.changedTouches[0].screenY
      checkDirection()
    })
  }
  onMounted(() => {
    setTimeout(() => {
      const wrapper = document.querySelector('.animation-steps');
      // const scrl = document.querySelector('.home__software');
      // scrl.addEventListener('scroll', (e) =>{
      //   if(scrl.scrollTop>1)
      //     scrlTicking.value=false
      //   else
      //     scrlTicking.value=true
      // })
      wrapper.addEventListener('wheel', (e) => {
        if (ticking.value === false && scrlTicking.value) {
          slide(3000, e.deltaY)
        }
      });
      touch();
    }, 510);
  })
</script>