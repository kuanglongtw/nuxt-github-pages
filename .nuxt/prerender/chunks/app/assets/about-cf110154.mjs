import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Navbar-a2f582d9.mjs';
import { _ as __nuxt_component_1 } from './Bubbles-f9884c43.mjs';
import { _ as __nuxt_component_2 } from './MyFooter-a78ae920.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0 = "" + buildAssetsURL("bubble.a5084d95.svg");
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
      _push(`<div class="pt-8"><section id="first" class="m-auto h-screen w-[85%] text-gray-100 md:w-[80%]"><h3 class="my-4 text-2xl font-bold">\u95DC\u65BC\u805A\u83EF</h3><h3 class="my-4 text-lg font-bold">\u6211\u5011\u7684\u4F7F\u547D\uFF1A</h3><h3> \u805A\u83EF\u7684\u4F7F\u547D\u662F\u6210\u70BA\u5BA2\u6236\u5728\u6578\u4F4D\u8F49\u578B\u65C5\u7A0B\u4E2D\u7684\u6700\u4F73\u5925\u4F34\u3002\u6211\u5011\u81F4\u529B\u65BC\u904B\u7528\u6700\u65B0\u7684\u6280\u8853\uFF0C\u7D50\u5408\u6211\u5011\u5353\u8D8A\u7684\u5C08\u696D\u77E5\u8B58\uFF0C\u70BA\u5BA2\u6236\u63D0\u4F9B\u6700\u5177\u7AF6\u722D\u529B\u7684\u8EDF\u9AD4\u89E3\u6C7A\u65B9\u6848\uFF0C\u5E6B\u52A9\u4ED6\u5011\u5728\u65E5\u76CA\u8B8A\u5316\u7684\u5E02\u5834\u4E2D\u53D6\u5F97\u6210\u529F\u3002 </h3><h3 class="my-4 text-lg font-bold">\u6838\u5FC3\u50F9\u503C\u89C0\uFF1A</h3><h3 class="text-md my-2 font-semibold">\u5275\u65B0\uFF1A</h3><h3> \u6211\u5011\u9F13\u52F5\u54E1\u5DE5\u4E0D\u65B7\u8FFD\u6C42\u5275\u65B0\uFF0C\u4E26\u63D0\u4F9B\u4E00\u500B\u958B\u653E\u7684\u74B0\u5883\uFF0C\u8B93\u4ED6\u5011\u80FD\u5920\u63D0\u51FA\u65B0\u9EDE\u5B50\u3001\u65B0\u65B9\u6CD5\uFF0C\u4EE5\u6EFF\u8DB3\u4E0D\u65B7\u8B8A\u5316\u7684\u5E02\u5834\u9700\u6C42\u3002 </h3><h3 class="text-md my-2 font-semibold">\u54C1\u8CEA\uFF1A</h3><h3> \u54C1\u8CEA\u59CB\u7D42\u662F\u6211\u5011\u6700\u91CD\u8981\u7684\u627F\u8AFE\u3002\u6211\u5011\u56B4\u683C\u9075\u5FAA\u8EDF\u9AD4\u958B\u767C\u6700\u4F73\u5BE6\u8E10\uFF0C\u78BA\u4FDD\u6211\u5011\u4EA4\u4ED8\u7684\u7522\u54C1\u548C\u670D\u52D9\u4E00\u76F4\u8655\u65BC\u9AD8\u6C34\u6E96\u3002 </h3><h3 class="text-md my-2 font-semibold">\u5BA2\u6236\u81F3\u4E0A\uFF1A</h3><h3> \u6211\u5011\u7684\u6210\u529F\u4F86\u81EA\u65BC\u5BA2\u6236\u7684\u6210\u529F\u3002\u6211\u5011\u8207\u5BA2\u6236\u5EFA\u7ACB\u9577\u671F\u7684\u5408\u4F5C\u5925\u4F34\u95DC\u4FC2\uFF0C\u6DF1\u5165\u4E86\u89E3\u4ED6\u5011\u7684\u9700\u6C42\uFF0C\u63D0\u4F9B\u91CF\u8EAB\u5B9A\u5236\u7684\u89E3\u6C7A\u65B9\u6848\u3002 </h3><h3 class="text-md my-2 font-semibold">\u5718\u968A\u5408\u4F5C\uFF1A</h3><h3> \u6211\u5011\u91CD\u8996\u5718\u968A\u5408\u4F5C\uFF0C\u76F8\u4FE1\u591A\u6A23\u6027\u548C\u5171\u4EAB\u77E5\u8B58\u80FD\u5920\u6FC0\u767C\u5275\u610F\u3002\u5728\u805A\u83EF\u79D1\u6280\uFF0C\u6211\u5011\u9F13\u52F5\u4E92\u76F8\u652F\u6301\u548C\u5171\u540C\u6210\u9577\u3002 </h3><img class="absolute -left-3 top-[130vh] z-10 h-44 w-full md:top-2/3"${ssrRenderAttr("src", _imports_0)} alt=""></section></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=about-cf110154.mjs.map
