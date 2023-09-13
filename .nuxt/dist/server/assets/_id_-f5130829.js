import { _ as __nuxt_component_0 } from "./Navbar-a2f582d9.js";
import { _ as __nuxt_component_1 } from "./Bubbles-f9884c43.js";
import { ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { a as useRouter, b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./nuxt-link-744fccd2.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "framesync";
import "popmotion";
import "style-value-types";
import "@vue/shared";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { id } = useRoute().params;
    const currentData = ref({
      title: "",
      subtitle: "",
      content: "",
      image: ""
    });
    const project = ref({
      id,
      title: "",
      subtitle: "",
      content: "",
      image: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Bubbles = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "-z-10 w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_Bubbles, null, null, _parent));
      _push(`<div class="m-auto min-h-screen max-w-[90%] py-8 md:max-w-[70%]"><div class="w-full"><div class="py-2">${ssrInterpolate(currentData.value)}</div><div class="py-2">${ssrInterpolate(project.value)}</div><div class="py-2"><label for="" class="px-1 text-white">標題</label><input${ssrRenderAttr("value", project.value.title)} type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"></div><div class="py-2"><label for="" class="px-1 text-white">副標題</label><input${ssrRenderAttr("value", project.value.subtitle)} type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"></div><div class="py-2"><label for="" class="px-1 text-white">內容</label><textarea type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20">${ssrInterpolate(project.value.content)}</textarea></div><div class="py-2"><label for="" class="px-1 text-white">圖片</label><input${ssrRenderAttr("value", project.value.image)} type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"></div></div><div class="flex w-full justify-center py-4"><button class="text-md overflow-hidden rounded-xl bg-pink-500 px-12 py-0 font-bold leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-pink-700"> 確認 </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-f5130829.js.map
