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
              <span itemprop="title" class="fs_42 fw_semibold">Walling</span>
            </NuxtLink>
            <span class="ff_icon fs_r32"> </span>
          </li>
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <span itemprop="title" class="fs_42 fw_semibold">Commercial</span>
          </li>
        </ul>
      </nav>
      <section class="scenes-examples flex_1 d_flex align-items_center ">
        <div class="container container_mw">
          <div class="row align-items_center justify-content_center">
            <div class="col col-lg-4 col-md-6 col-sm-12" v-for="(item,idx) in scenes" v-bind:key="idx">
              <div :to="item.url" class="card scenes__card d_block">
                <div class="card__img scenes__card-img">
                  <Img :resp="false" :scenes="false" :img="item.img" :alt="item.title"/>
                </div>
                <div class="card__title scenes__card-title">
                  <h2 class="fs_r32 text_center">{{ item.title }} </h2>
                </div>
              </div>
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
  const pageTitle = 'Paver Picker | YOUR Online Showroom',
        baseUrl = 'https://paverpicker.pages.dev',
        pageDescription = 'View our extensive choice of scenes. ',
        imageAlt = 'Alternative text for the image',
        imageName = 'scenes';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/scenes/walling/commercial/' },
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
      { property: 'linkedin:url', content: baseUrl+'/scenes/walling/commercial/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })
  const route = 'scenes/walling/commercial/'
  const scenes = [
    {
      img: route+'commercial1',
      title: 'Commercial Wall 1',
      url: '#'
    },
    {
      img: route+'commercial2',
      title: 'Commercial Wall 2',
      url: '#'
    }
  ]
</script>