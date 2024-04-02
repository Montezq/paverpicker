import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as __nuxt_component_2$1 } from '../server.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "notify d_flex align-items_center justify-content_center flex_column" }, _attrs))}><div class="phone"></div><h2>For a better experience,<br>please rotate your device</h2></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rotate/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_2$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta" }, _attrs))}><div class="cta__wrapper text_center"><div class="cta__header"><h2 class="fs_68">Ready to get started?</h2></div><div class="cta__link">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacts/",
    class: "fs_32 d_iflex align-items_center justify-content_center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="ff_icon fs_64"${_scopeId}>\uE72A</span> Let&#39;s talk`);
      } else {
        return [
          createVNode("span", { class: "ff_icon fs_64" }, "\uE72A"),
          createTextVNode(" Let's talk")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_3 as a };
//# sourceMappingURL=index-299be528.mjs.map
