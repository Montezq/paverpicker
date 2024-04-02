import { d as useHead, b as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index-914e4bf9.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const pageTitle = "Paving Commercial | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Try out Bloc-Tec\u2019s Interactive Visualisation software and see how your paving materials will look for different types of commercial buildings. Make adjustment to the layout and color of the materials and see if they match well with different buildings of different colors and designs.!", pageKeywords = "paving,business,office,hospital,condo,meeting room,commercial,scene,home,building,location,visualisation,visualization,software,program,online,website,view,try,demo,samples,options,selection,realistic,house", imageAlt = "Alternative text for the image", imageName = "software";
const route = "scenes/paving/commercial/";
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
        { property: "og:url", content: baseUrl + "/scenes/paving/commercial/" },
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
        { property: "linkedin:url", content: baseUrl + "/scenes/paving/commercial/" },
        // Instagram meta tags
        { property: "instagram:title", content: pageTitle },
        { property: "instagram:description", content: pageDescription },
        { property: "instagram:image", content: baseUrl + `/images/meta/instagram/${imageName}.jpg` },
        { property: "instagram:image:alt", content: imageAlt }
      ]
    });
    const scenes = [
      {
        img: route + "commercial1",
        title: "Commercial Paving 1",
        url: "#"
      },
      {
        img: route + "commercial2",
        title: "Commercial Paving 2",
        url: "#"
      },
      {
        img: route + "commercial3",
        title: "Commercial Paving 3",
        url: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Img = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scenes scenes-inside d_flex flex_column mh_100" }, _attrs))}><main class="main flex_1 d_flex flex_column"><nav class="breadcrumbs"><ol itemscope itemtype="http://schema.org/BreadcrumbList" class="d_flex align-items_center justify-content_center"><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "../../",
        itemprop: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span itemprop="name" class="fs_42 fw_semibold"${_scopeId}>Scenes</span>`);
          } else {
            return [
              createVNode("span", {
                itemprop: "name",
                class: "fs_42 fw_semibold"
              }, "Scenes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<meta itemprop="position" content="1"><span class="ff_icon fs_r32">\uE974</span></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "../",
        itemprop: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span itemprop="name" class="fs_42 fw_semibold"${_scopeId}>Paving</span>`);
          } else {
            return [
              createVNode("span", {
                itemprop: "name",
                class: "fs_42 fw_semibold"
              }, "Paving")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<meta itemprop="position" content="2"><span class="ff_icon fs_r32">\uE974</span></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><span itemprop="name" class="fs_42 fw_semibold">Commercial</span><meta itemprop="position" content="3"></li></ol></nav><section class="scenes-examples flex_1 d_flex align-items_center"><div class="container container_mw"><div class="row align-items_center"><!--[-->`);
      ssrRenderList(scenes, (item, idx) => {
        _push(`<div class="col col-lg-4 col-md-6 col-sm-12"><div${ssrRenderAttr("to", item.url)} class="card scenes__card d_block"><div class="card__img scenes__card-img">`);
        _push(ssrRenderComponent(_component_Img, {
          resp: false,
          scenes: false,
          img: item.img,
          alt: item.title
        }, null, _parent));
        _push(`</div><div class="card__title scenes__card-title"><h2 class="fs_r32 text_center">${ssrInterpolate(item.title)}</h2></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scenes/paving/commercial/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-de16f8f0.mjs.map
