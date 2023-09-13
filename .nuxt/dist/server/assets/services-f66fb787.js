import { _ as __nuxt_component_0 } from "./Navbar-a2f582d9.js";
import { _ as __nuxt_component_1 } from "./Services-67f40e66.js";
import { _ as __nuxt_component_2 } from "./MyFooter-a78ae920.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-744fccd2.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "framesync";
import "popmotion";
import "style-value-types";
import "@vue/shared";
import "destr";
import "klona";
const services_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_Services = __nuxt_component_1;
  const _component_MyFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "service" }, _attrs))}><div class="-z-10 min-h-screen w-full bg-[#28282B]">`);
  _push(ssrRenderComponent(_component_Navbar, { navHeight: "h-screen md:h-screen" }, null, _parent));
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(ssrRenderComponent(_component_MyFooter, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  services as default
};
//# sourceMappingURL=services-f66fb787.js.map
