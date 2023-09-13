import { _ as __nuxt_component_0 } from './Navbar-a2f582d9.mjs';
import { _ as __nuxt_component_1 } from './Services-67f40e66.mjs';
import { _ as __nuxt_component_2 } from './MyFooter-a78ae920.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

export { services as default };
//# sourceMappingURL=services-f66fb787.mjs.map
