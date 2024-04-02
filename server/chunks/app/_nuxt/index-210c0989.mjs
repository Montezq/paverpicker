import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './index-299be528.mjs';
import { _ as __nuxt_component_1 } from './index-63298a2b.mjs';
import { _ as __nuxt_component_1$1 } from './index-914e4bf9.mjs';
import { d as useHead, u as useRoute, a as useSlideStore, b as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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

const folderBack = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="460" viewBox="0 0 500 460">\r\n  <path id="folder_back" d="M79.494,179.63,2.571,505.784ZM2.571,505.784v-460H175.648l76.923,76.923h250V179.63Z" transform="translate(-2.571 -45.784)" fill="#999"/>\r\n</svg>\r\n';
const folderFront = '<svg xmlns="http://www.w3.org/2000/svg" width="576.923" height="326.154" viewBox="0 0 576.923 326.154">\r\n  <path id="folder_front" d="M502.571,505.784,579.494,179.63h-500L2.571,505.784Zm-500,0Z" transform="translate(-2.571 -179.63)" fill="#999"/>\r\n</svg>\r\n';
const pageTitle = "Textures Add-on | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Bloc-Tec Textures gives you the freedom to change the layout of the building materials and change the color of the mortar. All this accomplished with seamless pixel perfect textures. See what we mean and give our Visualisation software a try today!", pageKeywords = "texture,color,interactive,seamless,layout,change,software,macro,clear,professional photography,brick,tile,slab,mortar,building,visualize,look,home,house,wall,ground,paving,patio,roof,view", imageAlt = "Alternative text for the image", imageName = "software";
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
        { property: "og:url", content: baseUrl + "/software/textures-module/" },
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
        { property: "linkedin:url", content: baseUrl + "/software/textures-module/" },
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
    let ios = ref(false);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "seamless-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rotate, null, null, _parent));
      _push(ssrRenderComponent(_component_SoftwareNav, { class: "black" }, null, _parent));
      _push(`<div class="animation-steps__wrapper"><div class="${ssrRenderClass(`animation-steps animation-steps_` + unref(currentSlide) + ` animation-lstep_` + unref(pastSlide) + ` ${unref(ios) ? "ios-true" : ""}`)}"><section class="seamless-page__hero position_relative"><div class="slide-section position_relative d_flex align-items_center flex_column"><div class="slide-section__text position_absolute"><div class="slide-section__text-head text_center"><h1>Seamless Textures</h1></div></div><div class="slide-section__decor"><!--[-->`);
      ssrRenderList(15, (i) => {
        _push(ssrRenderComponent(_component_Img, {
          resp: false,
          key: i,
          class: "position_absolute",
          img: "seamless/seamless_wall-animated",
          alt: "Wall"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="scrl-down position_absolute fs_32 text_center cursor_pointer"><p>What makes our textures unique?</p><p class="ff_icon fs_48">\uE74B</p></div></div></section><section class="seamless-page__layout"><div class="slide-section position_relative"><div class="slide-section__text slide-section__text_same text_center"><div class="slide-section__text-head"><h2>Any Layout</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Our textures give you the freedom to select any layout - they are <br> ALL seamless! </p></div></div><div class="slide-section__decor slide-section__decor_same position_absolute d_flex align-items_center"><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(ssrRenderComponent(_component_Img, {
          resp: false,
          key: i,
          class: "slide-section__decor-item position_absolute",
          img: "seamless/seamless_wall-layout-" + i,
          alt: "Wall"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="seamless-page__mortar"><div class="slide-section position_relative"><div class="slide-section__text slide-section__text_same text_center"><div class="slide-section__text-head"><h2>Any Mortar</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Mortar colour completely changes the products appearance - <br> you choose. </p></div></div><div class="slide-section__decor slide-section__decor_same position_absolute d_flex align-items_center"><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(ssrRenderComponent(_component_Img, {
          resp: false,
          key: i,
          class: "slide-section__decor-item position_absolute",
          img: "seamless/seamless_wall-mortar-" + i,
          alt: "Wall"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="seamless-page__blend"><div class="slide-section position_relative"><div class="slide-section__text slide-section__text_same text_center"><div class="slide-section__text-head"><h2>Any Blend</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Enjoy unlimited design options when coupled with the blender module. </p></div><div class="slider-section__text-cta">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/blender-module/"),
        to: "/software/blender-module/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about blender module`);
          } else {
            return [
              createTextVNode("Learn about blender module")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="slide-section__decor-scale"><div class="slide-section__decor_alternative slide-section__decor_alternative-left position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        class: "slide-section__decor-item position_absolute",
        img: "seamless/seamless_wall-big",
        alt: "Wall"
      }, null, _parent));
      _push(`</div><div class="slide-section__decor position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        scenes: false,
        class: "slide-section__decor-item position_absolute",
        img: "seamless/seamless_bricks-black",
        alt: "Wall"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        scenes: false,
        class: "slide-section__decor-item position_absolute",
        img: "seamless/seamless_wall-animated",
        alt: "Wall"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        scenes: false,
        class: "slide-section__decor-item position_absolute",
        img: "seamless/seamless_bricks-white",
        alt: "Wall"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        scenes: false,
        class: "slide-section__decor-item position_absolute",
        img: "seamless/seamless_wall-big",
        alt: "Wall"
      }, null, _parent));
      _push(`</div><div class="slide-section__decor_alternative position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        class: "slide-section__decor-item position_absolute",
        img: "seamless/seamless_wall-big",
        alt: "Wall"
      }, null, _parent));
      _push(`</div></div></div></section><section class="seamless-page__pxperfect position_relative"><div class="slide-section position_relative"><div class="slide-section__text slide-section__text_same text_center"><div class="slide-section__text-head"><h2>Pixel Perfect Textures</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Achieve seamless joins with both brick and mortar in incredible detail. </p></div></div><div class="slide-section__decor position_relative"></div></div></section><section class="seamless-page__packaged"><div><div class="slide-section position_relative"><div class="slide-section__text slide-section__text_same text_center"><div class="slide-section__text-head"><h2>Packaged and Ready to Go</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Download your design pack which includes various scales to suit your project. </p></div><div class="slider-section__text-cta"><a target="_blank" href="https://app.bloc-tec.com/demo/Walling/Clay%20Bricks/viewer/blend?c=VA_LIV_HA&amp;b=20&amp;c=VA_QU_HA&amp;b=20&amp;c=VA_TR_HA&amp;b=60&amp;l=Stretcher&amp;lv=Stretcher&amp;jf=Med+Grey&amp;js=10&amp;scene=None&amp;a=0">Try it</a></div></div><div class="slide-section__decor position_relative"><div class="slide-section__decor-item position_absolute">${unref(folderBack)}</div><div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "seamless/seamless_packed-1",
        alt: "Seamless Packed"
      }, null, _parent));
      _push(`<p>FrogUp_BriceBlend_L.jpeg</p></div><div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "seamless/seamless_packed-2",
        alt: "Seamless Packed"
      }, null, _parent));
      _push(`<p>FrogUp_BriceBlend_M.jpeg</p></div><div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "seamless/seamless_packed-3",
        alt: "Seamless Packed"
      }, null, _parent));
      _push(`<p>FrogUp_BriceBlend_S.jpeg</p></div><div class="slide-section__decor-item position_absolute d_flex flex_column align-items_center">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "seamless/seamless_packed-4",
        alt: "Seamless Packed"
      }, null, _parent));
      _push(`<p>FrogUp_BriceBlend_TextureInfo.pdf</p></div><div class="slide-section__decor-item position_absolute">${unref(folderFront)}</div></div></div><div class="scrollable-section">`);
      _push(ssrRenderComponent(_component_Cta, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/software/textures-module/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-210c0989.mjs.map
