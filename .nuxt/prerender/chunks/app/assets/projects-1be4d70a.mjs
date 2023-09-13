import { _ as __nuxt_component_0 } from './Navbar-a2f582d9.mjs';
import { _ as __nuxt_component_1 } from './Bubbles-f9884c43.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
import { g as getProjects } from './index-0ac16786.mjs';
import '../../renderer.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/devalue/index.js';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/pathe/dist/index.mjs';
import './nuxt-link-744fccd2.mjs';
import '../server.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/framesync/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/popmotion/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/style-value-types/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@vue/shared/index.js';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/axios/index.js';

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
      _push(`<div class="m-auto max-w-[90%] py-8 md:max-w-[70%]"><h2 class="mx-2 my-8 text-xl font-semibold text-white md:text-2xl"> \u8207\u805A\u83EF\u79D1\u6280\u7684\u6210\u529F\u5408\u4F5C\u6848\u4F8B </h2><br><div class="grid w-full grid-cols-1 text-white md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"><div class="flex h-64 w-full justify-center md:h-80"><img${ssrRenderAttr("src", project.image)} class="w-full object-cover" alt="\u805A\u83EF\u6578\u4F4D\u79D1\u6280" loading="lazy"></div><div class="h-44 overflow-hidden px-8 py-6"><h2 class="text-xl font-bold">${ssrInterpolate(project.title)}</h2><div class="h-[90px] overflow-hidden py-4 text-[#ebebeb]"><span>${ssrInterpolate(project.content)}</span></div></div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=projects-1be4d70a.mjs.map
