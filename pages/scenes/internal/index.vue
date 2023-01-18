<template>
  <div class="scenes d_flex flex_column mh_100">
    <main class="main flex_1 d_flex flex_column">
      <nav class="breadcrumbs">
        <ul class="d_flex align-items_center justify-content_center">
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <NuxtLink to="../" itemprop="url">
              <span itemprop="title" class="fs_42 fw_semibold">Scenes</span>
            </NuxtLink>
            <span class="ff_icon fs_r32"> </span>
          </li>
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <span itemprop="title" class="fs_42 fw_semibold">Internal</span>
          </li>
        </ul>
      </nav>
      <section class="scenes-general flex_1 d_flex align-items_center">
        <div class="container container_mw">
          <div class="row align-items_center justify-content_center flex">
            <div class="col col-lg-3 col-md-6 col-sm-12" v-for="(item,idx) in scenes" v-bind:key="idx">
              <NuxtLink :to="item.url" class="card scenes__card d_block">
                <div class="card__img scenes__card-img">
                  <Img :resp="false" :img="item.img" :alt="item.title"/>
                </div>
                <div class="card__title scenes__card-title">
                  <h2 class="fs_r32 text_center">{{ item.title }}</h2>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<style lang="scss" >
  @import 'main.scss';
</style>
<script setup>
  const route = 'scenes/internal/'
  const scenes = [
    {
      img: route+'internal-walling',
      title: 'Walling',
      url: 'walling/'
    },
    {
      img: route+'flooring',
      title: 'Flooring',
      url: 'flooring/'
    }
  ]
</script>