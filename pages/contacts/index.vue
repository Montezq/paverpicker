<template>
  <main class="main d_flex flex_column  overflow_auto">
    <section class="contacts flex_1 position_relative d_flex">
      <Img :img="'map'" :alt="'Background'" class="contacts__bg position_absolute"/>
      <div class="container contacts__container position_relative">
        <div class="contacts__row d_flex align-items_center justify-content_between">
          <div class="contacts__col">
            <div class="contacts__col-head">
              <h2 class="fs_r32 fw_regular">
                Do you have a question?
                <br>
                <span class="fs_r24">Check out <NuxtLink class="link" to="/faq/">FAQ's</NuxtLink> or feel free to ask</span>
              </h2>
            </div>
            <div class="contacts__details">
              <div class="contacts__details-item">
                <a href="tel:+353 (0)25 46682" class="d_flex ">
                  <div v-html="phone" class="icon icon_phone"></div>
                  <p class="fs_r32">+353 (0)25 46682</p>
                </a>
              </div>
              <div class="contacts__details-item">
                <a href="mailto:info@paverpicker.com" class="d_flex ">
                  <div v-html="email" class="icon icon_email"></div>
                  <p class="fs_r32">info@paverpicker.com</p>
                </a>
              </div>
              <div class="contacts__details-item">
                <div class="d_flex">
                  <div v-html="pinker" class="icon icon_pinker"></div>
                  <p class="fs_r32">
                    BLOC-TEC 
                    <br>
                    Ballinamona
                    <br>
                    Glanworth
                    <br>
                    County Cork
                    <br>
                    P51 C9Y7
                    <br>
                    Ireland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>
<style lang="scss" >
  @import 'main.scss';
</style>
<script setup>
  import phone  from '~/assets/svg/icons/phone.svg?raw';
  import email  from '~/assets/svg/icons/email.svg?raw';
  import pinker  from '~/assets/svg/icons/pin.svg?raw';
  const pageTitle = 'Contact Us | BLOC-TEC',
        baseUrl = 'https://paverpicker.com/',
        pageDescription = 'Send us an email or give us a call. ',
        imageAlt = 'Alternative text for the image',
        imageName = 'contact';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/contacts/' },
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
      { property: 'linkedin:url', content: baseUrl+'/contacts/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })
</script>