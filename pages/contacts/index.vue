<template>
  <main class="main d_flex flex_column  overflow_auto">
    <section class="contacts flex_1 position_relative d_flex">
      <Img :img="'map'" :alt="'Background'" class="contacts__bg position_absolute"/>
      <div class="container contacts__container position_relative">
        <div class="contacts__row d_flex align-items_center justify-content_between">
          <div class="contacts__col">
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
                    PAVER PICKER LTD
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
          <div class="contacts__col">
            <div class="contacts__col-head">
              <h2 class="fs_r32 fw_regular">
                Do you have a question?
                <br>
                <span class="fs_r24">Check out <NuxtLink class="link" to="/faq/">FAQ's</NuxtLink> or feel free to ask</span>
              </h2>
            </div>
            <form class="contacts__form form">
              <div class="form__item">
                <div class="form__item-label">
                  <label for="name">Name</label>
                </div>
                <div class="form__item-input">
                  <input type="text" id="name">
                </div>
              </div>
              <div class="form__item">
                <div class="form__item-label">
                  <label for="mail">Email</label>
                </div>
                <div class="form__item-input">
                  <input type="email" id="mail">
                </div>
              </div>
              <div class="form__item">
                <div class="form__item-label">
                  <label  for="question">Your Question</label>
                </div>
                <div class="form__item-input">
                  <textarea name="question" id="question"></textarea>
                </div>
              </div>
              <div class="form__item">
                <div class="form__submit">
                  <button class="text_uppercase btn btn_primary">Send</button>
                </div>
              </div>
            </form>
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
</script>