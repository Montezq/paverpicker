<template>
  <div class="scenes scenes-inside d_flex flex_column mh_100">
    <main class="main flex_1 d_flex flex_column">
      <nav class="breadcrumbs">
        <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="d_flex align-items_center justify-content_center">
          <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <NuxtLink to="../../" itemprop="item">
              <span itemprop="name" class="fs_42 fw_semibold">Scenes</span>
            </NuxtLink>
            <meta itemprop="position" content="1" />
            <span class="ff_icon fs_r32"></span>
          </li>
          <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <NuxtLink to="../" itemprop="item">
              <span itemprop="name" class="fs_42 fw_semibold">Walling</span>
            </NuxtLink>
            <meta itemprop="position" content="2" />
            <span class="ff_icon fs_r32"></span>
          </li>
          <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <span itemprop="name" class="fs_42 fw_semibold">Garden</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
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
  const pageTitle = 'Walling Garden | BLOC-TEC',
        baseUrl = 'https://bloc-tec.com',
        pageDescription = 'Try out Bloc-Tec’s Interactive Visualisation software and see how your building materials will look on the wall in the garden area. Make adjustment to the layout and color of the materials and see if they match well with different buildings of different colors and designs.',
        pageKeywords = 'walling,wall,garden,backyard,frontyard,grass area,play area,green house,house,scene,home,location,visualisation,visualization,software,program,online,website,view,try,demo,samples,options,selection,realistic,house',
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
      { property: 'og:url', content: baseUrl+'/scenes/walling/garden/' },
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
      { property: 'linkedin:url', content: baseUrl+'/scenes/walling/garden/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })
  const route = 'scenes/walling/garden/'
  const scenes = [
    {
      img: route+'garden1',
      title: 'Garden Wall 1',
      url: '#'
    },
    {
      img: route+'garden2',
      title: 'Garden Wall 2',
      url: '#'
    }
  ]
</script>