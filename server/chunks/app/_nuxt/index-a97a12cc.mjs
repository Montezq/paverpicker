import { _ as __nuxt_component_1 } from './index-914e4bf9.mjs';
import { d as useHead, b as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-a80c87c0.mjs';
import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const phone = '<svg xmlns="http://www.w3.org/2000/svg" width="52.724" height="52.825" viewBox="0 0 52.724 52.825">\r\n  <path id="phone" d="M52.888,40.3v7.5a5,5,0,0,1-5.45,5,49.475,49.475,0,0,1-21.575-7.675,48.75,48.75,0,0,1-15-15A49.475,49.475,0,0,1,3.188,8.45,5,5,0,0,1,8.163,3h7.5a5,5,0,0,1,5,4.3,32.1,32.1,0,0,0,1.75,7.025A5,5,0,0,1,21.288,19.6l-3.175,3.175a40,40,0,0,0,15,15L36.288,34.6a5,5,0,0,1,5.275-1.125,32.1,32.1,0,0,0,7.025,1.75,5,5,0,0,1,4.3,5.075Z" transform="translate(-1.666 -1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>\r\n</svg>\r\n';
const email = '<svg xmlns="http://www.w3.org/2000/svg" width="54.178" height="43" viewBox="0 0 54.178 43">\r\n  <g id="email" transform="translate(2.089 1.5)">\r\n    <path id="\u041A\u043E\u043D\u0442\u0443\u0440_1" data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1" d="M8,6H48a5.015,5.015,0,0,1,5,5V41a5.015,5.015,0,0,1-5,5H8a5.015,5.015,0,0,1-5-5V11A5.015,5.015,0,0,1,8,6Z" transform="translate(-3 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>\r\n    <path id="\u041A\u043E\u043D\u0442\u0443\u0440_2" data-name="\u041A\u043E\u043D\u0442\u0443\u0440 2" d="M53,9,28,26.5,3,9" transform="translate(-3 -4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>\r\n  </g>\r\n</svg>\r\n';
const pinker = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="58" viewBox="0 0 48 58">\r\n  <g id="pin" transform="translate(1.5 1.5)">\r\n    <path id="\u041A\u043E\u043D\u0442\u0443\u0440_3" data-name="\u041A\u043E\u043D\u0442\u0443\u0440 3" d="M49.5,24C49.5,41.5,27,56.5,27,56.5S4.5,41.5,4.5,24a22.5,22.5,0,1,1,45,0Z" transform="translate(-4.5 -1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>\r\n    <path id="\u041A\u043E\u043D\u0442\u0443\u0440_4" data-name="\u041A\u043E\u043D\u0442\u0443\u0440 4" d="M28.5,18A7.5,7.5,0,1,1,21,10.5,7.5,7.5,0,0,1,28.5,18Z" transform="translate(1.5 4.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>\r\n  </g>\r\n</svg>\r\n';
const pageTitle = "Contact Us | BLOC-TEC", baseUrl = "https://bloc-tec.com", pageDescription = "Bloc-Tec office is based in Ireland, County Cork. We work with international companies around the world. You can contact us through email at info@bloc-tec.com or call use on phone at +353 25 46682.", pageKeywords = "Bloc Tec,Paver Picker,contact,call,email,location,message,get in touch,form,Ireland,Cork,phone,appointment,where,office,about,send,ship,number,address,at,shipping", imageAlt = "Alternative text for the image", imageName = "contact";
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
        { property: "og:url", content: baseUrl + "/contacts/" },
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
        { property: "linkedin:url", content: baseUrl + "/contacts/" },
        // Instagram meta tags
        { property: "instagram:title", content: pageTitle },
        { property: "instagram:description", content: pageDescription },
        { property: "instagram:image", content: baseUrl + `/images/meta/instagram/${imageName}.jpg` },
        { property: "instagram:image:alt", content: imageAlt }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Img = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Footer = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main d_flex flex_column overflow_auto" }, _attrs))}><section class="contacts flex_1 position_relative d_flex">`);
      _push(ssrRenderComponent(_component_Img, {
        img: "map",
        alt: "Background",
        class: "contacts__bg position_absolute"
      }, null, _parent));
      _push(`<div class="container contacts__container position_relative"><div class="contacts__row d_flex align-items_center justify-content_between"><div class="contacts__col"><div class="contacts__col-head"><h2 class="fs_r32 fw_regular"> Do you have a question? <br><span class="fs_r24">Check out `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/faq/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQ&#39;s`);
          } else {
            return [
              createTextVNode("FAQ's")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` or feel free to ask</span></h2></div><div class="contacts__details"><div class="contacts__details-item"><a href="tel:+353 (0)25 46682" class="d_flex"><div class="icon icon_phone">${unref(phone)}</div><p class="fs_r32">+353 (0)25 46682</p></a></div><div class="contacts__details-item"><a href="mailto:info@bloc-tec.com" class="d_flex"><div class="icon icon_email">${unref(email)}</div><p class="fs_r32">info@bloc-tec.com</p></a></div><div class="contacts__details-item"><div class="d_flex"><div class="icon icon_pinker">${unref(pinker)}</div><p class="fs_r32"> BLOC-TEC <br> Ballinamona <br> Glanworth <br> County Cork <br> P51 C9Y7 <br> Ireland </p></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a97a12cc.mjs.map
