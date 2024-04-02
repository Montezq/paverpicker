import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './index-299be528.mjs';
import { _ as __nuxt_component_1 } from './index-63298a2b.mjs';
import { _ as __nuxt_component_1$1 } from './index-914e4bf9.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { d as useHead, u as useRoute, a as useSlideStore } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const pageTitle = "Blender Add-on | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Bloc-Tech Blender lets you blend multiple building products together in different ways with options to change colours and patterns until you get the look you want. See how the patio or exterior wall will look with different blend of tiles, bricks, and mortar. Try our powerful visualisation software today and see what we mean!", pageKeywords = "blender,blend,brick,tile,mortar,Bloc Tec,create,merge,layout,change,interactive,color,colour,mortar,different,pattern,possibilities,look,see,visualiser,visualizer,demo,try,software,program,api,online,website", imageAlt = "Alternative text for the image", imageName = "software";
const brickw = "blender/bricks-white/brick-", brickr = "blender/bricks-red/brick-", brickbl = "blender/bricks-bl/", brickc = "blender/bricks-cl/", brickb = "blender/bricks-brown/brick-";
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
        { property: "og:url", content: baseUrl + "/software/blender-module/" },
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
        { property: "linkedin:url", content: baseUrl + "/software/blender-module/" },
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
    let optionBrick = ref(1);
    ref(false);
    let slideval = ref(50), slidevalStart = ref(50);
    ref(true);
    const bricks = [
      {
        opacity: 1,
        bw: brickw + "0",
        href: brickb + "0"
      },
      {
        opacity: 1,
        bw: brickw + "8",
        href: brickb + "1"
      },
      {
        opacity: 0,
        bw: brickw + "1",
        href: brickb + "7",
        nestedr: brickr + "1",
        nestedb: brickbl + "1",
        nestedc: brickc + "1"
      },
      {
        opacity: 1,
        bw: brickw + "4",
        href: brickb + "2"
      },
      {
        opacity: 0,
        bw: brickw + "3",
        href: brickb + "10"
      },
      {
        opacity: 1,
        bw: brickw + "6",
        href: brickb + "3",
        nestedr: brickr + "3",
        nestedb: brickbl + "3",
        nestedc: brickc + "3"
      },
      {
        opacity: 0,
        bw: brickw + "4",
        href: brickb + "5"
      },
      {
        opacity: 1,
        bw: brickw + "5",
        href: brickb + "4"
      },
      {
        opacity: 1,
        bw: brickw + "6",
        href: brickb + "5"
      },
      {
        opacity: 0,
        bw: brickw + "5",
        href: brickb + "11"
      },
      {
        opacity: 1,
        bw: brickw + "7",
        href: brickb + "6"
      },
      {
        opacity: 0,
        bw: brickw + "6",
        href: brickb + "8",
        nestedr: brickr + "6",
        nestedb: brickbl + "6",
        nestedc: brickc + "6"
      },
      {
        opacity: 0,
        bw: brickw + "7",
        href: brickb + "1",
        nestedr: brickr + "7",
        nestedb: brickbl + "7",
        nestedc: brickc + "7"
      },
      {
        opacity: 1,
        bw: brickw + "9",
        href: brickb + "8"
      },
      {
        opacity: 0,
        bw: brickw + "8",
        href: brickb + "0",
        nestedr: brickr + "8",
        nestedb: brickbl + "8",
        nestedc: brickc + "8"
      },
      {
        opacity: 0,
        bw: brickw + "9",
        href: brickb + "3"
      },
      {
        opacity: 0,
        bw: brickw + "10",
        href: brickb + "9"
      },
      {
        opacity: 0,
        bw: brickw + "11",
        href: brickb + "2"
      },
      {
        opacity: 1,
        bw: brickw + "1",
        href: brickb + "10"
      },
      {
        opacity: 1,
        bw: brickw + "10",
        href: brickb + "11",
        nestedr: brickr + "11",
        nestedb: brickbl + "11",
        nestedc: brickc + "11"
      },
      {
        opacity: 0,
        bw: brickw + "13",
        href: brickb + "6",
        nestedr: brickr + "13",
        nestedb: brickbl + "13",
        nestedc: brickc + "13"
      },
      {
        opacity: 1,
        bw: brickw + "6",
        href: brickb + "13"
      },
      {
        opacity: 1,
        bw: brickw + "2",
        href: brickb + "14",
        nestedr: brickr + "14",
        nestedb: brickbl + "14",
        nestedc: brickc + "14"
      },
      {
        opacity: 0,
        bw: brickw + "14",
        href: brickb + "14"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rotate = __nuxt_component_0;
      const _component_SoftwareNav = __nuxt_component_1;
      const _component_Img = __nuxt_component_1$1;
      const _component_Cta = __nuxt_component_3;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blender-page position_relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rotate, null, null, _parent));
      _push(ssrRenderComponent(_component_SoftwareNav, null, null, _parent));
      _push(`<div class="animation-steps__wrapper position_relative"><div class="${ssrRenderClass("animation-steps animation-steps_" + unref(currentSlide) + " animation-lstep_" + unref(pastSlide))}"><div class="blender-page__bg position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "blender/black",
        alt: "Background"
      }, null, _parent));
      _push(`</div><section class="blender-page__hero position_relative"><div class="slide-section position_relative d_flex align-items_center flex_column"><div class="slide-section__text position_relative"><div class="slide-section__text-head text_center"><h1>Introducing BLOC-TEC Blender</h1></div></div><div class="${ssrRenderClass(`blender__bricks d_flex flex_wrap position_absolute option-${unref(optionBrick)}`)}"><!--[-->`);
      ssrRenderList(bricks, (item, idx) => {
        _push(`<div class="blender__brick-item position_relative"><div class="${ssrRenderClass(`picture position_absolute opacity opacity_${item.opacity}`)}"><picture><source type="image/png"${ssrRenderAttr("srcset", "/images/decor/" + item.href + ".png , /images/decor/" + item.href + "@x2.png 2x")}><source type="image/webp"${ssrRenderAttr("srcset", "/images/decor/" + item.href + ".webp , /images/decor/" + item.href + "@x2.webp 2x")}><img${ssrRenderAttr("src", "/images/decor/" + item.href + "@x2.png")} alt="Bricks" width="500" height="500"></picture></div><div class="picture"><picture><source type="image/png"${ssrRenderAttr("srcset", "/images/decor/" + item.bw + ".png , /images/decor/" + item.bw + "@x2.png 2x")}><source type="image/webp"${ssrRenderAttr("srcset", "/images/decor/" + item.bw + ".webp , /images/decor/" + item.bw + "@x2.webp 2x")}><img${ssrRenderAttr("src", "/images/decor/" + item.bw + "@x2.png")} alt="Bricks" width="500" height="500"></picture></div>`);
        if (item.nestedr) {
          _push(`<div class="picture position_absolute"><picture><source type="image/png"${ssrRenderAttr("srcset", "/images/decor/" + item.nestedr + ".png , /images/decor/" + item.nestedr + "@x2.png 2x")}><source type="image/webp"${ssrRenderAttr("srcset", "/images/decor/" + item.nestedr + ".webp , /images/decor/" + item.nestedr + "@x2.webp 2x")}><img${ssrRenderAttr("src", "/images/decor/" + item.nestedr + "@x2.png")} alt="Bricks" width="500" height="500"></picture></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.nestedb) {
          _push(`<div class="picture position_absolute"><picture><source type="image/png"${ssrRenderAttr("srcset", "/images/decor/" + item.nestedb + ".png , /images/decor/" + item.nestedb + "@x2.png 2x")}><source type="image/webp"${ssrRenderAttr("srcset", "/images/decor/" + item.nestedb + ".webp , /images/decor/" + item.nestedb + "@x2.webp 2x")}><img${ssrRenderAttr("src", "/images/decor/" + item.nestedb + "@x2.png")} alt="Bricks" width="500" height="500"></picture></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.nestedc) {
          _push(`<div class="picture position_absolute"><picture><source type="image/png"${ssrRenderAttr("srcset", "/images/decor/" + item.nestedc + ".png , /images/decor/" + item.nestedc + "@x2.png 2x")}><source type="image/webp"${ssrRenderAttr("srcset", "/images/decor/" + item.nestedc + ".webp , /images/decor/" + item.nestedc + "@x2.webp 2x")}><img${ssrRenderAttr("src", "/images/decor/" + item.nestedc + "@x2.png")} alt="Bricks" width="500" height="500"></picture></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_Img, {
        class: "blender__bricks-decor position_absolute",
        img: "blender/bricks-white/brick-0",
        resp: false,
        alt: "Brick"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "blender__bricks-decor position_absolute",
        img: "blender/bricks-white/brick-2",
        resp: false,
        alt: "Brick"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "blender__bricks-decor position_absolute",
        img: "blender/bricks-brown/brick-7",
        resp: false,
        alt: "Brick"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "blender__bricks-decor position_absolute",
        img: "blender/bricks-brown/brick-9",
        resp: false,
        alt: "Brick"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "blender__bricks-decor position_absolute",
        img: "blender/bricks-brown/brick-12",
        resp: false,
        alt: "Brick"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "blender__bricks-decor position_absolute",
        img: "blender/bricks-white/brick-12",
        resp: false,
        alt: "Brick"
      }, null, _parent));
      _push(`</div><div class="blender-page__shadow position_abosolute"></div><div class="scrl-down position_absolute fs_32 text_center cursor_pointer"><p>How does our blender work?</p><p class="ff_icon fs_48">\uE74B</p></div></div></section><section class="blender-page__create position_relative"><div class="slide-section d_flex"><div class="slide-section__decor position_absolute"><div class="range d_flex align-items_center position_absolute"><div class="range__text position_relative"><strong class="opacity_0">100%</strong><strong class="position_absolute">${ssrInterpolate(unref(slidevalStart))}%</strong></div><div class="range__input position_relative"><input type="range"${ssrRenderAttr("value", unref(slideval))} max="100" min="0"><div class="range__track"></div></div><div class="range__text position_relative"><strong class="opacity_0">100%</strong><strong class="position_absolute text_right">${ssrInterpolate(unref(slideval))}%</strong></div></div></div><div class="slide-section__text"><div class="slide-section__text-head"><h2>Create Bespoke Blends</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Blend multiple products together and change the blend percentages to suit your needs. </p></div></div></div></section><section class="blender-page__unlimited position_relative"><div class="slide-section"><div class="slide-section__decor d_flex justify-content_center position_absolute"><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="slider-section__decor-brick position_relative cursor_pointer"><div class="slider-section__decor-brick-icon"></div><picture><source type="image/png"${ssrRenderAttr("srcset", `/images/decor/blender/brick-option-${i}.png`)}><source type="image/webp"${ssrRenderAttr("srcset", `/images/decor/blender/brick-option-${i}.webp`)}><img${ssrRenderAttr("src", `/images/decor/blender/brick-option-${i}.png`)} alt="Brick option" width="430" height="130"></picture></div>`);
      });
      _push(`<!--]--></div><div class="slide-section__text"><div class="slide-section__text-head text_center"><h2>Unlimited Possibilities</h2></div><div class="slide-section__text-desc"><p class="fs_32 text_center"> Add more products to create the look you want. </p></div></div></div></section><section class="blender-page__try position_relative"><div><div class="slide-section"><div class="slide-section__text"><div class="slide-section__text-head text_center"><h2>Try it for yourself</h2></div><div class="slide-section__text-desc"><p class="fs_32 text_center"> Create unique blends, any pattern, any mortar colour. </p></div></div><div class="slide-section__btns position_relative d_flex justify-content_center"><a target="_blank" href="https://app.bloc-tec.com/demo/Walling/Clay+Bricks/viewer/blend?c=EN_KOREBL_HA&amp;b=32&amp;c=VA_TR_HA&amp;b=34&amp;c=VA_QU_HA&amp;b=34&amp;l=Stretcher&amp;lv=Stretcher&amp;jf=Med+Grey&amp;js=10&amp;scene=None&amp;angle=0&amp;a=0" class="text_uppercase btn btn_primary text_uppercase">Try Brick Blender</a><a target="_blank" href="https://app.bloc-tec.com/demo/Paving/Paving%20Blocks/viewer/blend?c=BR_ALSI_GRTE&amp;b=32&amp;c=BR_JUGR_GRTE&amp;b=34&amp;c=BR_INBL_GRTE&amp;b=34&amp;l=Stretcher&amp;lv=200x100&amp;jf=Silver+Granite&amp;js=4&amp;scene=None&amp;angle=0&amp;a=0" class="text_uppercase btn btn_primary text_uppercase">Try Paving Blender</a></div><div class="slide-section__decor d_flex justify-content_center"><div class="slide-section__decor-video position_relative">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "blender-wall",
        resp: false,
        alt: "Wall"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "position_absolute",
        img: "blender-wall-filled",
        resp: false,
        alt: "Wall filled"
      }, null, _parent));
      _push(`</div></div></div><div class="scrollable-section">`);
      _push(ssrRenderComponent(_component_Cta, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/software/blender-module/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-311ee1c2.mjs.map
