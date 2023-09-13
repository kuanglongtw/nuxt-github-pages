import { _ as __nuxt_component_0 } from './Navbar-a2f582d9.mjs';
import { _ as __nuxt_component_1 } from './Bubbles-f9884c43.mjs';
import { ref, mergeProps, useSSRContext } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { a as useRouter, b as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
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
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/framesync/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/popmotion/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/style-value-types/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@vue/shared/index.js';

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
      _push(`<div class="m-auto min-h-screen max-w-[90%] py-8 md:max-w-[70%]"><div class="w-full"><div class="py-2">${ssrInterpolate(currentData.value)}</div><div class="py-2">${ssrInterpolate(project.value)}</div><div class="py-2"><label for="" class="px-1 text-white">\u6A19\u984C</label><input${ssrRenderAttr("value", project.value.title)} type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"></div><div class="py-2"><label for="" class="px-1 text-white">\u526F\u6A19\u984C</label><input${ssrRenderAttr("value", project.value.subtitle)} type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"></div><div class="py-2"><label for="" class="px-1 text-white">\u5167\u5BB9</label><textarea type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20">${ssrInterpolate(project.value.content)}</textarea></div><div class="py-2"><label for="" class="px-1 text-white">\u5716\u7247</label><input${ssrRenderAttr("value", project.value.image)} type="text" class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"></div></div><div class="flex w-full justify-center py-4"><button class="text-md overflow-hidden rounded-xl bg-pink-500 px-12 py-0 font-bold leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-pink-700"> \u78BA\u8A8D </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-f5130829.mjs.map
