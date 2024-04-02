import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './index-299be528.mjs';
import { _ as __nuxt_component_1 } from './index-63298a2b.mjs';
import { _ as __nuxt_component_1$1 } from './index-914e4bf9.mjs';
import { d as useHead, u as useRoute, a as useSlideStore, b as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const pageTitle = "Base Software | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Transform your product presentation with Bloc-Tec's cutting-edge custom-built software. Showcase your products in an interactive online showroom, featuring different scenes that will captivate your audience. Our software is responsive and will seamlessly integrates into your website, providing a seamless user experience. Elevate your brand and engage customers like never before. Experience the power of immersive product showcasing today!", pageKeywords = "software,app,api,responsive,web,online,interactive,program,website,integrates,own brand,white label,drag,drop,showcasing,bricks,tiles,slabs,embed,tool,product,3D viewer,showcase,display,representation tool,demonstration software,visualistion solution", imageAlt = "Alternative text for the image", imageName = "software";
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
        { property: "og:image", content: baseUrl + `/images/meta/facebook/${imageName}.png` },
        { property: "og:image:alt", content: imageAlt },
        { property: "og:url", content: baseUrl + "/software/" },
        { property: "og:type", content: "website" },
        // Twitter meta tags
        { property: "twitter:title", content: pageTitle },
        { property: "twitter:description", content: pageDescription },
        { property: "twitter:image", content: baseUrl + `/images/meta/twitter/${imageName}.png` },
        { property: "twitter:image:alt", content: imageAlt },
        { property: "twitter:card", content: "summary_large_image" },
        // LinkedIn meta tags
        { property: "linkedin:title", content: pageTitle },
        { property: "linkedin:description", content: pageDescription },
        { property: "linkedin:image", content: baseUrl + `/images/meta/linkedin/${imageName}.png` },
        { property: "linkedin:image:alt", content: imageAlt },
        { property: "linkedin:url", content: baseUrl + "/software/" },
        // Instagram meta tags
        { property: "instagram:title", content: pageTitle },
        { property: "instagram:description", content: pageDescription },
        { property: "instagram:image", content: baseUrl + `/images/meta/instagram/${imageName}.png` },
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
      const _component_SoftwareNav = __nuxt_component_1;
      const _component_Img = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Cta = __nuxt_component_3;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "software-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rotate, null, null, _parent));
      _push(ssrRenderComponent(_component_SoftwareNav, null, null, _parent));
      _push(`<div class="animation-steps__wrapper"><div class="${ssrRenderClass("animation-steps animation-steps_" + unref(currentSlide) + " animation-lstep_" + unref(pastSlide))}"><section class="software-page__hero position_relative"><div class="slide-section position_relative d_flex align-items_center flex_column"><div class="slide-section__text"><div class="slide-section__text-head"><h1>Custom Built <br> Software</h1></div></div><div class="slide-section__hero-img">`);
      _push(ssrRenderComponent(_component_Img, {
        scenes: false,
        resp: false,
        img: "pc-2",
        alt: "Home hero visualisation"
      }, null, _parent));
      _push(`</div><div class="scrl-down position_absolute fs_32 text_center cursor_pointer"><p>How can our software benefit you?</p><p class="ff_icon fs_48">\uE74B</p></div></div></section><section class="software-page__steps"><div class="slide-section d_flex align-items_center"><div class="slide-section__decor"><div class="slide-section__decor-video position_relative"><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="${ssrRenderClass(`slide-section__decor-video-inside slide-section__decor-video-inside_${i}`)}"><video autoplay playsinline muted class="software_video"${ssrRenderAttr("src", `/video/software-page-animation_${i}.mp4`)}></video></div>`);
      });
      _push(`<!--]--></div></div><div class="slide-section__text position_relative"><div class="slide-section__text-inside position_absolute slide-section__text_1"><div class="slide-section__text-head"><h2> Your Online <br> Showroom</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Present your products in one place, the use of filters make browsing easy.</p></div></div><div class="slide-section__text-inside position_absolute slide-section__text_2"><div class="slide-section__text-head"><h2>Any Layout</h2></div><div class="slide-section__text-desc"><p class="fs_32">Change laying patterns and angles. Do you have a laying pattern unique to your product? We can create that too!</p></div></div><div class="slide-section__text-inside position_relative slide-section__text_3"><div class="slide-section__text-head"><h2>Any Joint</h2></div><div class="slide-section__text-desc"><p class="fs_32">Change joint colour and size. Create limitless designs with the blender module.</p></div><div class="slider-section__text-cta">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/blender-module/"),
        to: "/software/blender-module/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about the blender module`);
          } else {
            return [
              createTextVNode("Learn about the blender module")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="slide-section__text-inside position_absolute slide-section__text_4"><div class="slide-section__text-head"><h2>Inspiring <br> Visualisation</h2></div><div class="slide-section__text-desc"><p class="fs_32">Check to see how products look by viewing them in a scene.</p></div><div class="slider-section__text-cta">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/visualisation/"),
        to: "/visualisation/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more about visualisation`);
          } else {
            return [
              createTextVNode("Learn more about visualisation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="software-page__device"><div><div class="slide-section"><div class="slide-section__text position_relative"><div class="slide-section__text-head text_center"><h2 class="text_center">Any Device</h2></div><div class="slide-section__text-desc text_center"><p class="fs_32">Fully Adaptable to screen sizes. If you want even more control we offer API for integrating straight into your website.</p></div><div class="slider-section__text-cta text_center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/api-module/"),
        to: "/software/api-module/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about the API module`);
          } else {
            return [
              createTextVNode("Learn about the API module")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="slide-section__decor d_flex justify-content_center position_relative">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "paver-3",
        class: "paver paver_1 position_absolute",
        alt: "Software"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        img: "paver-3",
        class: "paver paver_2 position_relative",
        alt: "Software"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        img: "paver-3mobile",
        class: "paver paver_3 position_absolute",
        alt: "Software"
      }, null, _parent));
      _push(`</div></div><div class="scrollable-section">`);
      _push(ssrRenderComponent(_component_Cta, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/software/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8b8bb447.mjs.map
