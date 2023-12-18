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
              <span itemprop="name" class="fs_42 fw_semibold">Paving</span>
            </NuxtLink>
            <meta itemprop="position" content="2" />
            <span class="ff_icon fs_r32"></span>
          </li>
          <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <span itemprop="name" class="fs_42 fw_semibold">Driveways</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </nav>
      <section class="scenes-examples flex_1 d_flex align-items_center">
        <div class="container container_mw">
          <div class="row align-items_center">
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
  const pageTitle = 'Paving Driveways | BLOC-TEC',
        baseUrl = 'https://bloc-tec.com',
        pageDescription = 'Try out Bloc-Tec’s Interactive Visualisation software and see how your paving materials will look for the driveway. Make adjustment to the layout and color of the materials and see if they match well with different buildings of different colors and designs.',
        pageKeywords = 'paving,driveway,cars,parking,garage,shed,scene,home,building,location,visualisation,visualization,software,program,online,website,view,try,demo,samples,options,selection,realistic,house',
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
      { property: 'og:url', content: baseUrl+'/scenes/paving/driveways/' },
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
      { property: 'linkedin:url', content: baseUrl+'/scenes/paving/driveways/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })
  const route = 'scenes/paving/driveway/'
  const scenes = [
    {
      img: route+'driveway1',
      title: 'Driveway 1',
      url: '#'
    },
    {
      img: route+'driveway2',
      title: 'Driveway 2',
      url: '#'
    },
    {
      img: route+'driveway3',
      title: 'Driveway 3',
      url: '#'
    },
    {
      img: route+'driveway4',
      title: 'Driveway 4',
      url: '#'
    },
    {
      img: route+'driveway5',
      title: 'Driveway 5',
      url: '#'
    },
    {
      img: route+'driveway6',
      title: 'Driveway 6',
      url: '#'
    },
    {
      img: route+'driveway7',
      title: 'Driveway 7',
      url: '#'
    },
    {
      img: route+'driveway8',
      title: 'Driveway 8',
      url: '#'
    },
  ]
</script>