import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './index-299be528.mjs';
import { _ as __nuxt_component_1 } from './index-63298a2b.mjs';
import { _ as __nuxt_component_1$1 } from './index-914e4bf9.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { d as useHead, u as useRoute, a as useSlideStore } from '../server.mjs';
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

const pageTitle = "API Add-on | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Bloc Tech's API allows you to easily integrate our visualisation software to your website. Your branding will be on it and you have full control over the layout, fonts, colors, and style. You can also easily track your analytics for the software. Give it a try today!", pageKeywords = "api,application programming interface,website integration,web,online,visualisation software,visualization software,embed,embedding,software,program,interactive,company brand,white label,control,analytics,track,Tobermore,Marshalls,Ibstock Brick,Kilsaran,Wienerberger,Banas Stones,Ethan Mason,AG,Global Stone,Forticrete,Roadstone,Outhaus", imageAlt = "Alternative text for the image", imageName = "software";
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
        { property: "og:url", content: baseUrl + "/software/api-module/" },
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
        { property: "linkedin:url", content: baseUrl + "/software/api-module/" },
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rotate = __nuxt_component_0;
      const _component_SoftwareNav = __nuxt_component_1;
      const _component_Img = __nuxt_component_1$1;
      const _component_Cta = __nuxt_component_3;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Rotate, null, null, _parent));
      _push(ssrRenderComponent(_component_SoftwareNav, null, null, _parent));
      _push(`<div class="animation-steps__wrapper"><div class="${ssrRenderClass("animation-steps animation-steps_" + unref(currentSlide) + " animation-lstep_" + unref(pastSlide))}"><section class="api-page__hero position_relative"><div class="slide-section position_relative d_flex align-items_center flex_column"><div class="slide-section__text"><div class="slide-section__text-head text_center"><h1>API Website Integration</h1></div></div><div class="scrl-down position_absolute fs_32 text_center cursor_pointer"><p>What can our API do for your website?</p><p class="ff_icon fs_48">\uE74B</p></div></div></section><section class="api-page__steps"><div><div class="slide-section position_relative"><div class="d_flex flex_column align-items_center h_100 position_relative"><div class="slide-section__text-wrapper"><div class="slide-section__text position_relative"><div class="slide-section__text-inside slide-section__text_1 position_relative"><div class="slide-section__text-head text_center"><h2>Any Layout</h2></div><div class="slide-section__text-desc text_center"><p class="fs_32"> Integrate key features of the BLOC-TEC software directly into your website with full control over the layout. </p></div></div><div class="slide-section__text-inside slide-section__text_2 position_absolute"><div class="slide-section__text-head text_center"><h2>Matched Styling</h2></div><div class="slide-section__text-desc text_center"><p class="fs_32"> You have full control over every element which means your fonts, your colours, your style. </p></div></div><div class="slide-section__text-inside slide-section__text_3 position_absolute"><div class="slide-section__text-head text_center"><h2>Your Analytics</h2></div><div class="slide-section__text-desc text_center"><p class="fs_32"> Since the software is embedded into your website, you can easily track your analytics. </p></div></div></div></div><div class="slide-section__decor position_absolute d_flex"><div class="slide-section__decor-box"><div class="picture api__bg">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "api-hero",
        alt: "Brick"
      }, null, _parent));
      _push(`</div></div><div class="slide-section__decor-box slide-section__decor-box-steps position_relative">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "api-steps",
        alt: "Hero"
      }, null, _parent));
      _push(`<div class="slide-section__decor-box-wall position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "api-bricks",
        alt: "Brick"
      }, null, _parent));
      _push(`</div><div class="slide-section__decor-box-aside position_absolute">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "engels_fogo",
        alt: "Brick"
      }, null, _parent));
      _push(`<div class="slide-section__decor-box-aside-controls position_relative">`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "controls_style-1",
        alt: "Brick"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Img, {
        class: "position_absolute",
        resp: false,
        img: "controls_style-2",
        alt: "Brick"
      }, null, _parent));
      _push(`</div></div><div class="slide-section__decor-box-variants position_absolute d_flex"><!--[-->`);
      ssrRenderList(7, (i) => {
        _push(ssrRenderComponent(_component_Img, {
          resp: false,
          class: "slide-section__decor-box-variants-item position_absolute",
          key: i,
          img: "api-bg-" + i,
          alt: "Variants"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Img, {
        resp: false,
        img: "analitics",
        alt: "Dashboard image",
        class: "slide-section__decor-box-analitics position_absolute"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/software/api-module/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e6fb489b.mjs.map
