import { b as buildAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("bubble4.72ad84de.svg");
const _imports_1 = "" + buildAssetsURL("bubble2.18b98f3a.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scrollbar-hide absolute -z-[1] min-h-[150vh] w-screen overflow-x-hidden" }, _attrs))}><img class="absolute -left-[20vh] top-[30vh] h-[50vh] w-[55vh] animate-[bounce_10s_linear_infinite] opacity-50 duration-500 md:-left-[20vw] md:top-[40vh] md:h-[50vw] md:w-[57vw]"${ssrRenderAttr("src", _imports_0)} alt=""><img class="absolute -right-10 top-[70vh] h-[50vh] w-[55vh] animate-[bounce_15s_linear_infinite] opacity-50 duration-500 md:h-[45vw] md:w-[50vw]"${ssrRenderAttr("src", _imports_1)} alt=""></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bubbles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Bubbles-f9884c43.mjs.map
