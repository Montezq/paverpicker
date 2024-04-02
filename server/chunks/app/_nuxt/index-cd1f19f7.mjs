import { d as useHead, b as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index-914e4bf9.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const pageTitle = "Scenes | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Bloc-Tec interactive visualisation software lets you see how different bricks, tiles, and other building materials will look in different areas of a home. Our immersive software lets you see first and then confidently choose the perfect products to enhance your space. See our selection of scenes for paving, walling, inside the home, and roof. Try our software today!", pageKeywords = "scene,view,location,home,house,visualize,visualise,paving,walling,wall,internal,inside home,roof,roofing,see,how look,building material,patio,room,tile,brick,paving,garden,living room,bedroom,kitchen,dining room,commercial,driveway,place,site", imageAlt = "Alternative text for the image", imageName = "scenes";
const route = "scenes/";
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
        { property: "og:url", content: baseUrl + "/scenes/" },
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
        { property: "linkedin:url", content: baseUrl + "/scenes/" },
        // Instagram meta tags
        { property: "instagram:title", content: pageTitle },
        { property: "instagram:description", content: pageDescription },
        { property: "instagram:image", content: baseUrl + `/images/meta/instagram/${imageName}.jpg` },
        { property: "instagram:image:alt", content: imageAlt }
      ]
    });
    const scenes = [
      {
        img: route + "paving",
        title: "Paving",
        url: "paving/"
      },
      {
        img: route + "walling",
        title: "Walling",
        url: "walling/"
      },
      {
        img: route + "flooring",
        title: "Flooring",
        url: "flooring/"
      },
      {
        img: route + "roofing",
        title: "Roofing",
        url: "roofing/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Img = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scenes d_flex flex_column mh_100" }, _attrs))}><main class="main flex_1 d_flex flex_column"><nav class="breadcrumbs"><ol itemscope itemtype="http://schema.org/BreadcrumbList" class="d_flex align-items_center justify-content_center"><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><span itemprop="name" class="fs_42 fw_semibold">Scenes</span><meta itemprop="position" content="1"></li></ol></nav><section class="scenes-general flex_1 d_flex align-items_center"><div class="container container_mw"><div class="row align-items_center justify-content_center flex"><!--[-->`);
      ssrRenderList(scenes, (item, idx) => {
        _push(`<div class="col col-lg-3 col-md-6 col-sm-12">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.url,
          class: "card scenes__card d_block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card__img scenes__card-img"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Img, {
                resp: false,
                scenes: false,
                img: item.img,
                alt: item.title
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="card__title scenes__card-title"${_scopeId}><h2 class="fs_r32 text_center"${_scopeId}>${ssrInterpolate(item.title)}</h2></div>`);
            } else {
              return [
                createVNode("div", { class: "card__img scenes__card-img" }, [
                  createVNode(_component_Img, {
                    resp: false,
                    scenes: false,
                    img: item.img,
                    alt: item.title
                  }, null, 8, ["img", "alt"])
                ]),
                createVNode("div", { class: "card__title scenes__card-title" }, [
                  createVNode("h2", { class: "fs_r32 text_center" }, toDisplayString(item.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scenes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cd1f19f7.mjs.map
