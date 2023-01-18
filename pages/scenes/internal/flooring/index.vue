<template>
  <div class="scenes scenes-inside d_flex flex_column mh_100">
    <main class="main flex_1 d_flex flex_column">
      <nav class="breadcrumbs">
        <ul class="d_flex align-items_center justify-content_center">
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <NuxtLink to="../../" itemprop="url">
              <span itemprop="title" class="fs_42 fw_semibold">Scenes</span>
            </NuxtLink>
            <span class="ff_icon fs_r32"> </span>
          </li>
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <NuxtLink to="../" itemprop="url">
              <span itemprop="title" class="fs_42 fw_semibold">Internal</span>
            </NuxtLink>
            <span class="ff_icon fs_r32"> </span>
          </li>
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <span itemprop="title" class="fs_42 fw_semibold">Flooring</span>
          </li>
        </ul>
      </nav>
      <section class="scenes-examples flex_1 d_flex align-items_center">
        <div class="container container_mw">
          <div class="row align-items_center">
            <div class="col col-lg-4 col-md-6 col-sm-12" v-for="(item,idx) in scenes" v-bind:key="idx">
              <NuxtLink :to="item.url" class="card scenes__card d_block">
                <div class="card__img scenes__card-img">
                  <Img :resp="false" :scenes="false" :img="item.img" :alt="item.title"/>
                </div>
                <div class="card__title scenes__card-title">
                  <h2 class="fs_r32 text_center">{{ item.title }} </h2>
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
  const route = 'scenes/internal/flooring/'
  const scenes = [
    {
      img: route+'floor1',
      title: 'Internal Floor 1',
      url: '#'
    },
    {
      img: route+'floor2',
      title: 'Internal Floor 2',
      url: '#'
    },
    {
      img: route+'floor3',
      title: 'Internal Floor 3',
      url: '#'
    }
  ]
</script>