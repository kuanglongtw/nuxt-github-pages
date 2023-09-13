import { _ as __nuxt_component_0 } from "./Navbar-a2f582d9.js";
import { _ as __nuxt_component_1 } from "./Bubbles-f9884c43.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { g as getProjects } from "./index-0ac16786.js";
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
import "axios";
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = ref([]);
    const navHeight = ref("h-screen md:h-screen");
    const dataFetcher = async () => {
      projects.value = await getProjects();
      console.log(projects.value);
      navHeight.value = String(
        "h-[" + 70 * projects.value.length + "vh] md:h-[" + 70 * projects.value.length + "vh]"
      );
    };
    dataFetcher();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Bubbles = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "-z-10 w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, { navHeight: unref(navHeight) }, null, _parent));
      _push(ssrRenderComponent(_component_Bubbles, null, null, _parent));
      _push(`<div class="m-auto max-w-[90%] py-8 md:max-w-[70%]"><h2 class="mx-2 my-8 text-xl font-semibold text-white md:text-2xl"> 與聚華科技的成功合作案例 </h2><br><div class="grid w-full grid-cols-1 text-white md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"><div class="flex h-64 w-full justify-center md:h-80"><img${ssrRenderAttr("src", project.image)} class="w-full object-cover" alt="聚華數位科技" loading="lazy"></div><div class="h-44 overflow-hidden px-8 py-6"><h2 class="text-xl font-bold">${ssrInterpolate(project.title)}</h2><div class="h-[90px] overflow-hidden py-4 text-[#ebebeb]"><span>${ssrInterpolate(project.content)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-1be4d70a.js.map
