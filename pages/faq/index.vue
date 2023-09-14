<template>
  <main class="faq main d_flex flex_column mh_100 overflow_auto">
    <div class="flex_1">
      <section class="faq__hero position_relative d_flex align-items_center justify-content_center">
        <div class="faq__hero-bg position_absolute">
          <picture>
            <source type="image/png" media="(min-width: 1140px)" :srcset="'/images/decor/faq-hero.png , /images/decor/faq-hero@x2.png 2x'"/>
            <source type="image/png" media="(max-width: 1139px)" :srcset="'/images/decor/faq-hero-md@x2.png , /images/decor/faq-hero.png 2x'"/>
            <source type="image/png" media="(max-width: 576px)" :srcset="'/images/decor/faq-hero-mb@x2.png'"/>
            <source type="image/webp" media="(min-width: 1140px)" :srcset="'/images/decor/faq-hero.webp , /images/decor/faq-hero@x2.webp 2x'"/>
            <source type="image/webp" media="(max-width: 1139px)" :srcset="'/images/decor/faq-hero-md@x2.webp , /images/decor/faq-hero.webp 2x'"/>
            <source type="image/webp" media="(max-width: 576px)" :srcset="'/images/decor/faq-hero-mb@x2.webp'"/>
            <img :src="'/images/decor/faq-hero@x2.png'" alt="Faq hero" width="500" height="500"/>
          </picture>
        </div>
        <div class="faq__hero-title position_relative">
          <h1 class="text_center fs_r68 fw_semibold">Frequently Asked Questions</h1>
        </div>
      </section>
      <section class="faq__main position_relative">
        <div class="container position_relative">
          <div class="faq__main-row" v-for="(item, key) in faq" v-bind:key="key">
            <div class="faq__main-head">
              <h2 class="text_center fs_42 fw_semibold">{{item.title}}</h2>
            </div>
            <div class="faq__main-list">
              <el-collapse accordion>
                <el-collapse-item v-for="(faqitem, idx) in item.items" :key="idx" :name="idx">
                  <template #title >
                    <div class="faq__main-list-head d_flex align-items_center justify-content_between">
                      <div class="faq__main-list-head-title">
                        <h3 class="fs_r32 fw_regular">
                          {{faqitem.question}}
                        </h3>
                      </div>
                      <div class="faq__main-list-head-icon" v-html="arrow"></div>
                    </div>
                  </template>
                  <div class="faq__main-list-body">
                    <p v-html="faqitem.answer"></p>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="faq__main-row faq__main-row-cta text_center">
            <h3 class="fw_regular fs_r32">Need more information?</h3>
            <NuxtLink class="fs_r32 color_green position_relative" to="/contacts/">Contact us</NuxtLink>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </main>
</template>
<style lang="scss" >
  @import 'main.scss';
</style>
<script setup>
  import arrow  from '~/assets/svg/icons/arrow.svg?raw';
  import { ElCollapse, ElCollapseItem } from 'element-plus';
  const pageTitle = 'FAQ | Bloc-Tec',
        baseUrl = 'https://paverpicker.com/',
        pageDescription = 'Find the answers to the most common questions. ',
        imageAlt = 'Alternative text for the image',
        imageName = 'home';
  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: pageDescription },

      // Facebook meta tags
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: baseUrl+`/images/meta/facebook/${imageName}.jpg` },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: baseUrl+'/faq/' },
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
      { property: 'linkedin:url', content: baseUrl+'/faq/' },

      // Instagram meta tags
      { property: 'instagram:title', content: pageTitle },
      { property: 'instagram:description', content: pageDescription },
      { property: 'instagram:image', content: baseUrl+`/images/meta/instagram/${imageName}.jpg` },
      { property: 'instagram:image:alt', content: imageAlt },
    ]
  })
  const faq = {
    images:{
      title: 'Images',
      items:[
        {
          question: 'Can we use our own images?',
          answer: 'In short, no. Images form the foundation of our software. We have taken years to perfect our photography methods to ensure that what is seen with the physical eye is what is displayed on screen.'
        },
        {
          question: 'How are the images created? ',
          answer: 'The images are created by photographing individual product samples. This allows us to show any pattern, joint colour and joint size. '
        },
        {
          question: 'Is security built-in?',
          answer: 'We have a hardware firewall limiting port access. The Database is only accessible to specific IP’s. Bloc-Tec uses an encrypted https connection between the client and the server. Comprehensive backup and recovery plans are in place; automated full instances backups are performed daily.'
        },
        {
          question: 'Do I need to send all my product samples to you?',
          answer: 'Often, it is more practical for us to travel to you with our compact mobile photography rig. We travel anywhere in the world.'
        }
      ]
    },
    hosting:{
      title: 'Hosting',
      items:[
        {
          question: 'Can we host it on our own servers?',
          answer: 'In short, no. For security reasons we host the software on our servers. This also allows for updates and maintenance. Additionally, we can remove, add, and alter products as required.'
        },
        {
          question: 'Which servers do you use?',
          answer: 'Bloc-Tec software is hosted in an AWS Data Centre. AWS is one of the leading cloud platforms and is used by companies such as Netflix, Facebook and the BBC. AWS provides a very robust platform with high availability and the ability to add additional processing capacity as required.'
        },
        {
          question: 'How many product samples do we need to send you?',
          answer: 'This depends on the type of product such as colour blends and size. Taking multiple photographs ensures realistic blends are achieved and repetition is avoided. We will advise on the number of products to send. '
        }
      ]
    },
    performance:{
      title: 'Performance',
      items:[
        {
          question: 'What platform does it run on?',
          answer: 'The software is built with HTML and JavaScript version ES6. This version is fully supported by all modern browsers. This client-side platform is what gives Bloc-Tec its speed.'
        },
        {
          question: 'Is your software available in responsive design for mobile display?',
          answer: 'Yes, it is responsive to all screen sizes.'
        }
      ]
    },
    user:{
      title: 'User accounts',
      items:[
        {
          question: 'How does your cost structure work for a new account?',
          answer: 'Our cost structure is in two parts. <br> <span class="row-span"><span>1.)</span> <span>We have a set-up cost for the initial build of your custom software which in part includes the photography of your products, image editing, building of unique data, custom theme colours and logos.</span> </span> <br> <span class="row-span"><span>2.)</span> <span>After the set-up stage is complete, a subscription fee will apply on an annual basis. This allows for a reduction in the upfront costs to our clients in association with the Software development, spreading the cost out over reoccurring fees. This cost in part also allows for maintenance to ensure the software is sustained indefinitely, minor upgrades, technical support, future research and development and hosting of your unique account on our servers.</span></span>'
        },
        {
          question: 'How do you calculate the cost of a new account?',
          answer: 'The cost is based on the number of products that need to be added. Other factors such as product size also come into consideration. We can provide a quote once we know more about your products.'
        },
        {
          question: 'How long does it take you to build a new account?',
          answer: 'Once we begin adding products into your account, we can complete 10 products per day. '
        },
        {
          question: 'How do we link our website to the software?',
          answer: 'The software can be housed directly on your website, or you can create a link to allow a full page view. <br> Your link will include your unique account name.'
        },
        {
          question: 'What level of technical support is offered?',
          answer: 'We work closely with our clients. We keep your software up to date with frequent maintenance updates to ensure that it is always up to date with the current web standards.'
        },
        {
          question: 'Where can we use our software?',
          answer: 'New accounts are granted approval to be used on a specific domain name. They will also run independently of a website so that they can be used in store or at exhibitions.'
        },
        {
          question: 'Can I add a Module?',
          answer: 'Yes, modules can be added at any time.'
        },
        {
          question: 'Can I add and remove products?',
          answer: 'Yes, once you inform us of which product(s) needs to be removed, we will make the update for you. New products can be added once we have received product samples.'
        },
      ]
    }
  }
</script>