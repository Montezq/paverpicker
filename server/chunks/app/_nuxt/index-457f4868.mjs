import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './index-299be528.mjs';
import { _ as __nuxt_component_1 } from './index-914e4bf9.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { d as useHead, u as useRoute, a as useSlideStore } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const arrowSlide = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="56.084" viewBox="0 0 30 56.084">\r\n  <path id="arrow" d="M3259.36,4442.07l-18.522,28.041h-11.476l18.52-28.041-18.522-28.043h11.478Z" transform="translate(-3229.36 -4414.027)" fill="#59bfae"/>\r\n</svg>\r\n';
const pageTitle = "Photography | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = `Elevate your product imagery to new heights with Bloc Tec's photographic expertise. Our dedicated team specializes in capturing products with realistic lighting, incredible details, and accurate color representation. Showcase your products in the best possible light and leave a lasting impression on your customers. See the difference Bloc Tec can make for your brand today.">`, pageKeywords = "photography,product,brick,house,patio,accurate color,texture,detail,lighting,realistic lighting,professional equipment,experts,experience,knowledgable,showcase,studio,techniques,gear,manufacturing,tiles,garden", imageAlt = "Alternative text for the image", imageName = "photography";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: pageTitle,
      meta: [
        { name: "description", content: pageDescription },
        { name: "keywords", content: pageKeywords },
        // Facebook meta tags
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:image", content: baseUrl + `/images/meta/facebook/${imageName}.jpg` },
        { property: "og:image:alt", content: imageAlt },
        { property: "og:url", content: baseUrl + "/photography/" },
        { property: "og:type", content: "website" },
        // Twitter meta tags
        { property: "twitter:title", content: pageTitle },
        { property: "twitter:description", content: pageDescription },
        { property: "twitter:image", content: baseUrl + `/images/meta/twitter/${imageName}.jpg` },
        { property: "twitter:image:alt", content: imageAlt },
        { property: "twitter:card", content: "summary_large_image" },
        // LinkedIn meta tags
        { property: "linkedin:title", content: pageTitle },
        { property: "linkedin:description", content: pageDescription },
        { property: "linkedin:image", content: baseUrl + `/images/meta/linkedin/${imageName}.jpg` },
        { property: "linkedin:image:alt", content: imageAlt },
        { property: "linkedin:url", content: baseUrl + "/photography/" },
        // Instagram meta tags
        { property: "instagram:title", content: pageTitle },
        { property: "instagram:description", content: pageDescription },
        { property: "instagram:image", content: baseUrl + `/images/meta/instagram/${imageName}.jpg` },
        { property: "instagram:image:alt", content: imageAlt }
      ]
    });
    const route = useRoute();
    const pageIdentifier = route.path;
    let slideStore = useSlideStore(), slideState = slideStore.getSlideState(pageIdentifier), currentSlide = ref(slideState.current);
    ref(slideState.next);
    let pastSlide = ref(slideState.past);
    ref(false);
    let videoCount = ref(1), slideval = ref(50), slideInteract = ref(false);
    ref(false);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rotate = __nuxt_component_0;
      const _component_Img = __nuxt_component_1;
      const _component_Cta = __nuxt_component_3;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "photography-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rotate, null, null, _parent));
      _push(`<div class="animation-steps__wrapper"><div class="${ssrRenderClass("animation-steps animation-steps_" + unref(currentSlide) + " animation-lstep_" + unref(pastSlide))}"><section class="photography-page__hero position_relative"><div class="slide-section position_relative"><div class="photography-page__hero-video position_absolute"><video class="section__video" autoplay="autoplay" muted="muted" playsinline="playsinline"${ssrRenderAttr("src", `/video/brick${unref(videoCount)}.mp4`)} id="brickVideo"></video></div><div class="slide-section__text"><div class="slide-section__text-head text_center"><h1>Your Products, <br> Professionally Captured</h1></div></div><div class="scrl-down position_absolute fs_32 text_center cursor_pointer"><p>What makes our photography so true to life?</p><p class="ff_icon fs_48">\uE74B</p></div></div></section><section class="photography-page__brick"><div><div class="slide-section position_relative"><div class="slide-section__bg position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "light",
        alt: "Light",
        class: "light_bg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        img: "butterfly",
        alt: "Butterfly",
        class: "butterfly_bg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        img: "colour_calibration",
        alt: "Colour Calibration",
        class: "colour_calibration_bg"
      }, null, _parent));
      _push(`</div><div class="container d_flex flex_column justify-content_center"><div class="slide-section__text"><div class="slide-section__text-inside slide-section__text_1"><div class="slide-section__text-head"><h2>Realistic <br> Lighting</h2></div><div class="slide-section__text-desc"><p class="fs_32"> We mimic sunlight in our lighting setup which enables us <br> to capture texture. Shown here is the contrast between a <br> scanned image and our method. </p></div></div><div class="slide-section__text-inside slide-section__text_2 position_absolute"><div class="slide-section__text-head"><h2>Incredible <br> Detail</h2></div><div class="slide-section__text-desc"><p class="fs_32"> We take it to the next level with our photography, our <br> process involves techniques used in the macro world for <br> insect photography. Simply put - details are captured. </p></div></div><div class="slide-section__text-inside slide-section__text_3 position_absolute"><div class="slide-section__text-head"><h2>Accurate <br> Colour</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Colour accuracy checks are carried out on each image to <br> ensure we capture the true nature of your products. </p></div></div></div><div class="slide-section__brick"><div class="slide-section__brick-box position_relative"><label class="background-slider position_absolute"><input type="range" class="${ssrRenderClass({ "animation_false": unref(slideInteract) })}"${ssrRenderAttr("value", unref(slideval))} max="100" min="0"><span class="background-slider__icon"><span class="background-slider__icon-wrapper"><div class="background-slider__icon-wrapper-inside d_flex align-items_center"><span>${unref(arrowSlide)}</span><span></span><span>${unref(arrowSlide)}</span></div></span></span></label><div class="background-img">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "brick_1",
        alt: "Door"
      }, null, _parent));
      _push(`</div><div class="foreground-img">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "brick_2",
        alt: "Door",
        class: "foreground-img-inside foreground-img_1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        img: "brick_1",
        alt: "Door",
        class: "foreground-img-inside foreground-img_2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        img: "brick_4",
        alt: "Door",
        class: "foreground-img-inside foreground-img_3"
      }, null, _parent));
      _push(`</div></div><div class="slide-section__brick-text position_relative"><div class="slide-section__brick-text-inside slide-section__brick-text_1 d_flex justify-content_between"><p><strong>Scanned</strong></p><p><strong>Photograph</strong></p></div><div class="slide-section__brick-text-inside slide-section__brick-text_2 position_absolute d_flex justify-content_between"><p><strong>Low Res</strong></p><p><strong>High Res</strong></p></div><div class="slide-section__brick-text-inside slide-section__brick-text_3 position_absolute d_flex justify-content_between"><p><strong>Uncalibrated</strong></p><p><strong>Calibrated</strong></p></div></div></div></div></div><div class="scrollable-section">`);
      _push(ssrRenderComponent(_component_Cta, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/photography/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-457f4868.mjs.map
