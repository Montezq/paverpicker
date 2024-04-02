import { u as useRoute, a as useSlideStore, b as __nuxt_component_2$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const logo = '<svg xmlns="http://www.w3.org/2000/svg" width="33" height="28.036" viewBox="0 0 33 28.036">\r\n  <path id="logo_icon" d="M-1651.76-25.179V-40.192h8.565v2.985h-5.58v9.043h14.486v-9.043h-5.921V-42.59h-.007v-9.626h20.456V-37.2h-8.549v-2.985h5.564V-49.23h-14.486v9.043h5.929v15.008Z" transform="translate(1652.26 52.715)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-width="1"/>\r\n</svg>\r\n';
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    let slideStore = useSlideStore();
    function handleMenuNavigation(destinationPath) {
      slideStore.resetSlideState(destinationPath);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "software-nav position_fixed d_flex align-items_center justify-content_center" }, _attrs))}><div class="software-nav__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/"),
        to: "/software/",
        class: "software-nav__item-link position_relative d_flex flex_column align-items_center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="software-nav__item-link-icon"${_scopeId}>${unref(logo)}</div><div class="software-nav__item-link-text"${_scopeId}><p class="fw_semibold"${_scopeId}>Base Software</p></div>`);
          } else {
            return [
              createVNode("div", {
                class: "software-nav__item-link-icon",
                innerHTML: unref(logo)
              }, null, 8, ["innerHTML"]),
              createVNode("div", { class: "software-nav__item-link-text" }, [
                createVNode("p", { class: "fw_semibold" }, "Base Software")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="software-nav__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/blender-module/"),
        to: "/software/blender-module/",
        class: "software-nav__item-link position_relative d_flex flex_column align-items_center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="software-nav__item-link-icon"${_scopeId}><p class="ff_icon"${_scopeId}>\uE9E9</p></div><div class="software-nav__item-link-text"${_scopeId}><p class="fw_semibold"${_scopeId}>Blender Add-on</p></div>`);
          } else {
            return [
              createVNode("div", { class: "software-nav__item-link-icon" }, [
                createVNode("p", { class: "ff_icon" }, "\uE9E9")
              ]),
              createVNode("div", { class: "software-nav__item-link-text" }, [
                createVNode("p", { class: "fw_semibold" }, "Blender Add-on")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="software-nav__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/textures-module/"),
        to: "/software/textures-module/",
        class: "software-nav__item-link position_relative d_flex flex_column align-items_center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="software-nav__item-link-icon"${_scopeId}><p class="ff_icon"${_scopeId}>\uF232</p></div><div class="software-nav__item-link-text"${_scopeId}><p class="fw_semibold"${_scopeId}>Textures Add-on</p></div>`);
          } else {
            return [
              createVNode("div", { class: "software-nav__item-link-icon" }, [
                createVNode("p", { class: "ff_icon" }, "\uF232")
              ]),
              createVNode("div", { class: "software-nav__item-link-text" }, [
                createVNode("p", { class: "fw_semibold" }, "Textures Add-on")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="software-nav__item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: () => handleMenuNavigation("/software/api-module/"),
        to: "/software/api-module/",
        class: "software-nav__item-link position_relative d_flex flex_column align-items_center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="software-nav__item-link-icon"${_scopeId}><p class="ff_icon"${_scopeId}>\uF308</p></div><div class="software-nav__item-link-text"${_scopeId}><p class="fw_semibold"${_scopeId}>API Add-on</p></div>`);
          } else {
            return [
              createVNode("div", { class: "software-nav__item-link-icon" }, [
                createVNode("p", { class: "ff_icon" }, "\uF308")
              ]),
              createVNode("div", { class: "software-nav__item-link-text" }, [
                createVNode("p", { class: "fw_semibold" }, "API Add-on")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/softwareNav/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-63298a2b.mjs.map
