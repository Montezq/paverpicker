<template>
  <div class="scenes d_flex flex_column mh_100">
    <main class="main flex_1 d_flex flex_column">
      <nav class="breadcrumbs">
        <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="d_flex align-items_center justify-content_center">
          <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <span itemprop="name" class="fs_42 fw_semibold">Scenes</span>
            <meta itemprop="position" content="1" />
          </li>
        </ol>
      </nav>
      <section class="scenes-general flex_1 d_flex align-items_center">
        <div class="container container_mw">
          <div class="row align-items_center justify-content_center flex">
            <div class="col col-lg-3 col-md-6 col-sm-12" v-for="(item,idx) in scenes" v-bind:key="idx">
              <NuxtLink :to="item.url" class="card scenes__card d_block">
                <div class="card__img scenes__card-img">
                  <Img :resp="false" :scenes="false" :img="item.img" :alt="item.title"/>
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
  const pageTitle = 'Scenes | BLOC-TEC',
        baseUrl = 'https://bloc-tec.com',
        pageDescription = 'Bloc-Tec interactive visualisation software lets you see how different bricks, tiles, and other building materials will look in different areas of a home. Our immersive software lets you see first and then confidently choose the perfect products to enhance your space. See our selection of scenes for paving, walling, inside the home, and roof. Try our software today!',
        pageKeywords = 'scene,view,location,home,house,visualize,visualise,paving,walling,wall,internal,inside home,roof,roofing,see,how look,building material,patio,room,tile,brick,paving,garden,living room,bedroom,kitchen,dining room,commercial,driveway,place,site',
        imageAlt = 'Alternative text for the image',
        imageName = 'scenes';
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
      { property: 'og:url', content: baseUrl+'/scenes/' },
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
      { property: 'linkedin:url', content: baseUrl+'/scenes/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })
  const route = 'scenes/'
  const scenes = [
    {
      img: route+'paving',
      title: 'Paving',
      url: 'paving/'
    },
    {
      img: route+'walling',
      title: 'Walling',
      url: 'walling/'
    },
    {
      img: route+'flooring',
      title: 'Flooring',
      url: 'flooring/'
    },
    {
      img: route+'roofing',
      title: 'Roofing',
      url: 'roofing/'
    },
  ]
</script>