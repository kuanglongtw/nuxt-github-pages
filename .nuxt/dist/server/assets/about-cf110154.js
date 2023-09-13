import { _ as __nuxt_component_0 } from "./Navbar-a2f582d9.js";
import { _ as __nuxt_component_1 } from "./Bubbles-f9884c43.js";
import { _ as __nuxt_component_2 } from "./MyFooter-a78ae920.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "./nuxt-link-744fccd2.js";
import "ufo";
import "hookable";
import "../server.mjs";
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
const _imports_0 = "" + __buildAssetsURL("bubble.a5084d95.svg");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Bubbles = __nuxt_component_1;
      const _component_MyFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scrollbar-hide w-screen overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, { navHeight: "h-[170vh] md:h-[160vh]" }, null, _parent));
      _push(ssrRenderComponent(_component_Bubbles, null, null, _parent));
      _push(`<div class="pt-8"><section id="first" class="m-auto h-screen w-[85%] text-gray-100 md:w-[80%]"><h3 class="my-4 text-2xl font-bold">關於聚華</h3><h3 class="my-4 text-lg font-bold">我們的使命：</h3><h3> 聚華的使命是成為客戶在數位轉型旅程中的最佳夥伴。我們致力於運用最新的技術，結合我們卓越的專業知識，為客戶提供最具競爭力的軟體解決方案，幫助他們在日益變化的市場中取得成功。 </h3><h3 class="my-4 text-lg font-bold">核心價值觀：</h3><h3 class="text-md my-2 font-semibold">創新：</h3><h3> 我們鼓勵員工不斷追求創新，並提供一個開放的環境，讓他們能夠提出新點子、新方法，以滿足不斷變化的市場需求。 </h3><h3 class="text-md my-2 font-semibold">品質：</h3><h3> 品質始終是我們最重要的承諾。我們嚴格遵循軟體開發最佳實踐，確保我們交付的產品和服務一直處於高水準。 </h3><h3 class="text-md my-2 font-semibold">客戶至上：</h3><h3> 我們的成功來自於客戶的成功。我們與客戶建立長期的合作夥伴關係，深入了解他們的需求，提供量身定制的解決方案。 </h3><h3 class="text-md my-2 font-semibold">團隊合作：</h3><h3> 我們重視團隊合作，相信多樣性和共享知識能夠激發創意。在聚華科技，我們鼓勵互相支持和共同成長。 </h3><img class="absolute -left-3 top-[130vh] z-10 h-44 w-full md:top-2/3"${ssrRenderAttr("src", _imports_0)} alt=""></section></div>`);
      _push(ssrRenderComponent(_component_MyFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-cf110154.js.map
