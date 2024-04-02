import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './index-299be528.mjs';
import { _ as __nuxt_component_1 } from './index-914e4bf9.mjs';
import { d as useHead, u as useRoute, a as useSlideStore, b as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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

const pageTitle = "Visualisation | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Experience the power of Bloc-Tec visualization software. Create stunning, realistic visuals of your products in various scenes with impeccable perspective and scale. This cutting-edge tool brings your products to life, giving them a natural and captivating look. Elevate your visual marketing strategy with Bloc-Tec today!", pageKeywords = "product visualization,visualisation,realistic,product rendering,accurate,perspective,scale,model,natural look,3D,software,visualisation services,services,presentation,lifelike,photorealistic,render,scene,locations,areas,spots,display,looks real", imageAlt = "Alternative text for the image", imageName = "visualisation";
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
        { property: "og:url", content: baseUrl + "/visualisation/" },
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
        { property: "linkedin:url", content: baseUrl + "/visualisation/" },
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
    ref(false);
    ref(true);
    function handleMenuNavigation(destinationPath) {
      slideStore.resetSlideState(destinationPath);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rotate = __nuxt_component_0;
      const _component_Img = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Cta = __nuxt_component_3;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "visualisation-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rotate, null, null, _parent));
      _push(`<div class="animation-steps__wrapper"><div class="${ssrRenderClass("animation-steps animation-steps_" + unref(currentSlide) + " animation-lstep_" + unref(pastSlide))}"><section class="visualisation-page__hero position_relative"><div class="slide-section position_relative d_flex align-items_center flex_column"><div class="slide-section__text"><div class="slide-section__text-head text_center"><h1>True to Life Visualisations</h1></div></div><div class="slide-section__hero-img">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "visualisation_hero",
        resp: false,
        alt: "Home hero visualisation"
      }, null, _parent));
      _push(`</div><div class="scrl-down position_absolute fs_32 text_center cursor_pointer"><div class="hero__link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text_uppercase btn btn_primary",
        to: "/scenes/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View our scenes `);
          } else {
            return [
              createTextVNode(" View our scenes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><p>What makes our visualisations so realistic?</p><p class="ff_icon fs_48">\uE74B</p></div></div></div></section><section class="visualisation-page__steps"><div><div class="slide-section position_relative d_flex align-items_center"><div class="slide-section__text-wrapper"><div class="slide-section__text position_relative"><div class="slide-section__text-inside slide-section__text_1 position_relative"><div class="slide-section__text-head"><h2>Precise Cut-Outs</h2></div><div class="slide-section__text-desc"><p class="fs_32"> We take no shortcuts when it comes to preparing the areas to be visualised. We ensure each and every blade of grass is properly preserved. </p></div></div><div class="slide-section__text-inside slide-section__text_2 position_absolute"><div class="slide-section__text-head"><h2>Realistic Shadows</h2></div><div class="slide-section__text-desc"><p class="fs_32"> To add to the realism, we redraw every detail of shadows and highlights back into the image. </p></div></div><div class="slide-section__text-inside slide-section__text_3 position_absolute"><div class="slide-section__text-head"><h2>Perfect Integration</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Finally, our software displays your products with perfect perspective and scale to ensure the visualisation looks natural. </p></div><div class="slider-section__text-cta">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/scenes/"),
        to: "/scenes/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fs_32 fw_regular"${_scopeId}> View our selection of scenes </span>`);
          } else {
            return [
              createVNode("span", { class: "fs_32 fw_regular" }, " View our selection of scenes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="slider-section__text-cta">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/"),
        to: "/software/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fs_32 fw_regular"${_scopeId}> Learn about our software </span>`);
          } else {
            return [
              createVNode("span", { class: "fs_32 fw_regular" }, " Learn about our software ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="slide-section__decor position_relative"><div class="slide-section__decor-box visualisation__bg-box position_absolute"><div class="visualisation__img-insde"></div></div><div class="slide-section__decor-box visualisation__garden-box">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "visualisation_garden",
        alt: "Box",
        class: "visualisation__img-insde visualisation__garden"
      }, null, _parent));
      _push(`</div><div class="slide-section__decor-box visualisation__paver-box position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "visualisation_paver",
        alt: "Box",
        class: "visualisation__img-insde visualisation__paver"
      }, null, _parent));
      _push(`</div><div class="slide-section__decor-box visualisation__shadows-box position_absolute"><div class="visualisation__img-insde">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "shadows",
        alt: "Box",
        class: "visualisation__shadows"
      }, null, _parent));
      _push(`</div></div><div class="slide-section__decor-box visualisation__paver2-box position_absolute"><div class="visualisation__img-insde">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "paver-2",
        alt: "Box",
        class: "visualisation__paver2"
      }, null, _parent));
      _push(`</div></div></div></div><div class="scrollable-section">`);
      _push(ssrRenderComponent(_component_Cta, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/visualisation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-924cd171.mjs.map
