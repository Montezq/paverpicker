import { u as useRoute, a as useSlideStore, b as __nuxt_component_2$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const facebook = '<svg id="Icon_awesome-facebook" data-name="Icon awesome-facebook" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.664" viewBox="0 0 34.875 34.664">\r\n  <path id="Icon_awesome-facebook-2" data-name="Icon awesome-facebook" d="M35.438,18A17.438,17.438,0,1,0,15.275,35.227V23.041h-4.43V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.52,2.52,0,0,0-2.841,2.723V18h4.836l-.773,5.041H20.725V35.227A17.444,17.444,0,0,0,35.438,18Z" transform="translate(-0.563 -0.563)" fill="#666"/>\r\n</svg>\r\n';
const x = '<svg version="1.1" id="svg5"\r\n	 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1668.56 1221.19"\r\n	>\r\n<style type="text/css">\r\n	.st1{fill:#000;}\r\n</style>\r\n<g>\r\n	<circle fill="#666" class="st0" cx="834.28" cy="610.6" r="481.33"/>\r\n	<g id="layer1" transform="translate(52.390088,-25.058597)">\r\n		<path id="path1009" class="st1" d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32\r\n			L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17\r\n			z"/>\r\n	</g>\r\n</g>\r\n</svg>\r\n';
const linkedin = '<svg id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5">\r\n  <path id="Icon_awesome-linkedin-2" data-name="Icon awesome-linkedin" d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z" transform="translate(0 -2.25)" fill="#666"/>\r\n</svg>\r\n';
const youtube = '<svg id="Icon_awesome-youtube" data-name="Icon awesome-youtube" xmlns="http://www.w3.org/2000/svg" width="38.4" height="27" viewBox="0 0 38.4 27">\r\n  <path id="Icon_awesome-youtube-2" data-name="Icon awesome-youtube" d="M38.648,8.725a4.825,4.825,0,0,0-3.395-3.417c-2.995-.808-15-.808-15-.808s-12.008,0-15,.808A4.825,4.825,0,0,0,1.852,8.725c-.8,3.014-.8,9.3-.8,9.3s0,6.289.8,9.3a4.753,4.753,0,0,0,3.395,3.362c2.995.808,15,.808,15,.808s12.008,0,15-.808a4.753,4.753,0,0,0,3.395-3.362c.8-3.014.8-9.3.8-9.3s0-6.289-.8-9.3ZM16.323,23.737V12.318l10.036,5.71L16.323,23.737Z" transform="translate(-1.05 -4.5)" fill="#666"/>\r\n</svg>\r\n';
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = [
      {
        icon: facebook,
        url: "https://www.facebook.com/paverpicker",
        alt: "facebook"
      },
      {
        icon: x,
        url: "https://twitter.com/Paverpicker",
        alt: "twitter"
      },
      {
        icon: linkedin,
        url: "https://www.linkedin.com/company/bloc-tec/",
        alt: "linkedin"
      },
      {
        icon: youtube,
        url: "https://www.youtube.com/watch?v=6l6ty-bxAGk&ab_channel=BLOC-TEC",
        alt: "youtube"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "socials__list d_flex align-items_center justify-content_center" }, _attrs))}><!--[-->`);
      ssrRenderList(socials, (item, index) => {
        _push(`<li class="${ssrRenderClass("socials__item socials_" + item.alt)}"><a${ssrRenderAttr("href", item.url)} target="_blank"${ssrRenderAttr("aria-label", "Social link to " + item.alt)}>${item.icon}</a></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/socials/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    let slideStore = useSlideStore();
    function handleMenuNavigation(destinationPath) {
      slideStore.resetSlideState(destinationPath);
    }
    function navigateToSpecialSlide(destinationPath) {
      slideStore.setSlideState(destinationPath, {
        current: 6,
        next: 7,
        past: 5
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Socials = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container"><div class="row footer__top"><div class="col"><ul class="footer__list"><li class="footer__item"><p>What we do</p></li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/photography/"),
        to: "/photography/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Photography`);
          } else {
            return [
              createTextVNode("Photography")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/visualisation/"),
        to: "/visualisation/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visualisation`);
          } else {
            return [
              createTextVNode("Visualisation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/"),
        to: "/software/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Software`);
          } else {
            return [
              createTextVNode("Software")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col"><ul class="footer__list"><li class="footer__item"><p>Software Add-on&#39;s</p></li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/blender-module/"),
        to: "/software/blender-module/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blender`);
          } else {
            return [
              createTextVNode("Blender")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/textures-module/"),
        to: "/software/textures-module/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Texture`);
          } else {
            return [
              createTextVNode("Texture")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/api-module/"),
        to: "/software/api-module/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API`);
          } else {
            return [
              createTextVNode(" API")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col"><ul class="footer__list"><li class="footer__item"><p>Scenes</p></li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/scenes/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All scenes`);
          } else {
            return [
              createTextVNode("All scenes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/scenes/paving/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Paving`);
          } else {
            return [
              createTextVNode("Paving")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/scenes/walling/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Walling`);
          } else {
            return [
              createTextVNode("Walling")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/scenes/internal/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Internal`);
          } else {
            return [
              createTextVNode("Internal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/scenes/roofing/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Roofing`);
          } else {
            return [
              createTextVNode("Roofing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col"><ul class="footer__list"><li class="footer__item"><p>About Us</p></li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/faq/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQ`);
          } else {
            return [
              createTextVNode("FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => navigateToSpecialSlide("/"),
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Clients`);
          } else {
            return [
              createTextVNode("Our Clients")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacts/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="footer__bottom">`);
      _push(ssrRenderComponent(_component_Socials, null, null, _parent));
      _push(`<div class="footer__bottom-text"><p>BLOC-TEC is a trading name of Paver Picker Ltd.</p></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=index-a80c87c0.mjs.map
