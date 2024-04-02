import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    img: {
      type: String
    },
    alt: {
      type: String
    },
    resp: {
      type: Boolean,
      default: true
    },
    scenes: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "picture" }, _attrs))}><img${ssrRenderAttr(
        "srcset",
        "/images/decor/" + __props.img + ".webp 1x, /images/decor/" + __props.img + "@x2.webp 2x"
      )}${ssrRenderAttr(
        "sizes",
        __props.scenes ? "(max-width: 1139px) 100vw, 50vw" : "(min-width: 1140px) 500px, 100vw"
      )}${ssrRenderAttr("src", "/images/decor/" + __props.img + "@x2.webp")}${ssrRenderAttr("alt", __props.alt)} width="500" height="500"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/img/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-914e4bf9.mjs.map
