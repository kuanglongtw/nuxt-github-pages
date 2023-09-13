import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, ref, resolveDirective, mergeProps, unref, defineComponent } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './Navbar-a2f582d9.mjs';
import { _ as __nuxt_component_1$1 } from './Bubbles-f9884c43.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1$2 } from './Services-67f40e66.mjs';
import { _ as __nuxt_component_2 } from './MyFooter-a78ae920.mjs';
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
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/framesync/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/popmotion/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/style-value-types/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@vue/shared/index.js';
import './nuxt-link-744fccd2.mjs';

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Meta = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "h-6 w-6"
  }, _attrs))}><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DownArrow.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto max-w-[90%] pt-12 md:max-w-[70%] md:py-24" }, _attrs))}><h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]"> \u9580\u8A3A\u6642\u9593 </h2><div class="mt-24 hidden w-full grid-cols-10 overflow-hidden rounded-xl text-2xl font-bold text-white md:grid"><div class="col-span-3 mr-1 h-24 bg-quaternary text-center"></div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u4E00</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u4E8C</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u4E09</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u56DB</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u4E94</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u516D</div><div class="ml-1 h-24 bg-quaternary py-8 text-center">\u65E5</div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>\u65E9\u8A3A</h3><h3>08:30~11:50</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> \u6797\u826F\u5FB7 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> \u4E01\u6F22\u7965 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> \u6797\u826F\u5FB7 </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>\u5348\u8A3A</h3><h3>14:00~17:30</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> \u6797\u826F\u5FB7 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> \u6797\u826F\u5FB7 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> \u4E01\u6F22\u7965 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> \u8449\u6600\u59FF </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> \u6797\u826F\u5FB7 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>\u665A\u8A3A</h3><h3>18:00~21:00</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"> \u4E01\u6F22\u7965<br>\u8449\u6600\u59FF </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> \u6797\u826F\u5FB7 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"> \u90ED\u70B3\u5B8F<br>\u8449\u6600\u59FF </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> \u4E01\u6F22\u7965 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> \u90ED\u70B3\u5B8F </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div></div><div class="mt-4 grid w-full grid-cols-4 overflow-hidden rounded-xl text-2xl font-bold text-white md:hidden"><div class="mr-1 h-24 bg-quaternary text-center"></div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u65E9\u8A3A</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">\u5348\u8A3A</div><div class="ml-1 h-24 bg-quaternary py-8 text-center">\u665A\u8A3A</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u4E00</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">\u6797\u826F\u5FB7</div><div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center"> \u4E01\u6F22\u7965<br>\u8449\u6600\u59FF </div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u4E8C</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">\u6797\u826F\u5FB7</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">\u6797\u826F\u5FB7</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u4E09</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">\u6797\u826F\u5FB7</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">\u4E01\u6F22\u7965</div><div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center"> \u90ED\u70B3\u5B8F<br>\u8449\u6600\u59FF </div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u56DB</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">\u8449\u6600\u59FF</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">\u4E01\u6F22\u7965</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u4E94</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">\u4E01\u6F22\u7965</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">\u6797\u826F\u5FB7</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">\u90ED\u70B3\u5B8F</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u516D</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">\u6797\u826F\u5FB7</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>\u65E5</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$2 = "" + buildAssetsURL("lin.ccea6cc9.jpg");
const _imports_1 = "" + buildAssetsURL("ding.833abc32.jpg");
const _imports_2 = "" + buildAssetsURL("kuo.fcd51a2b.jpg");
const _imports_3 = "" + buildAssetsURL("yeh.6944d2fd.jpg");
const _sfc_main$4 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const doctors = ref([
      {
        name: "\u6797\u826F\u5FB7",
        image: "/static/images/lin.jpg",
        role: "\u9662\u9577",
        experience: [
          "\u4E2D\u570B\u91AB\u85E5\u5927\u5B78\u4E2D\u91AB\u5B78\u7CFB  \u91AB\u5B78\u58EB",
          "\u885B\u798F\u90E8\u6843\u5712\u91AB\u9662\u4E2D\u91AB\u79D1 \u517C\u4EFB\u4E3B\u6CBB\u91AB\u5E2B",
          "\u6843\u5712\u5E02\u4E2D\u91AB\u5E2B\u516C\u6703 \u5E38\u52D9\u7406\u4E8B"
        ],
        profession: [
          "\u5167\u79D1:\u5FC3\u8840\u7BA1\u75BE\u75C5\u3001\u9AD8\u8840\u8102\u75C7\u3001\u80C3\u8178\u529F\u80FD\u7570\u5E38\u3001\u6D88\u5316\u9053\u6F70\u760D \u809D\u529F\u80FD\u7570\u5E38\u3001\u7761\u7720\u969C\u7919",
          "\u5152\u79D1:\u6CE8\u610F\u529B\u4E0D\u96C6\u4E2D\u3001\u6210\u9577\u767C\u80B2",
          "\u76AE\u819A\u79D1:\u6EBC\u75B9 \u8541\u9EBB\u75B9 \u76AE\u819A\u708E",
          "\u91DD\u50B7\u79D1:\u9AA8\u95DC\u7BC0\u75BE\u75C5\u3001\u4E94\u5341\u80A9\u3001\u5750\u9AA8\u795E\u7D93\u75DB\u3001\u819D\u95DC\u7BC0\u75BE\u75C5\u3001\u904B\u52D5\u50B7\u5BB3\u3001\u7DB2\u7403\u8098\u3001\u626D\u62C9\u50B7"
        ]
      },
      {
        name: "\u4E01\u6F22\u7965",
        image: "/static/images/ding.jpg",
        role: "\u5C08\u4EFB\u91AB\u5E2B",
        experience: [
          "\u5357\u4EAC\u4E2D\u91AB\u85E5\u5927\u5B78 \u91AB\u5B78\u535A\u58EB",
          "\u4E2D\u570B\u91AB\u5927\u9644\u8A2D\u91AB\u9662 \u4E2D\u91AB\u5A66\u79D1\u7E3D\u91AB\u5E2B",
          "\u4E2D\u570B\u91AB\u85E5\u5927\u5B78\u5B78\u58EB\u5F8C\u4E2D\u91AB\u7CFB \u91AB\u5B78\u58EB",
          "\u4E2D\u570B\u91AB\u5927\u9644\u8A2D\u91AB\u9662\u4E2D\u91AB\u85E5 \u81E8\u5E8A\u5BE6\u9A57\u4E2D\u5FC3\u57F7\u884C\u7E3D\u91AB\u5E2B",
          "\u885B\u751F\u798F\u5229\u90E8\u6843\u5712\u91AB\u9662 \u4E2D\u91AB\u79D1\u4E3B\u6CBB\u91AB\u5E2B"
        ],
        profession: [
          "\u5A66\u79D1:\u75DB\u7D93\u3001\u5E36\u4E0B\u3001\u6708\u7D93\u4E0D\u8ABF\u3001\u7522\u5F8C\u8ABF\u7406\u3001\u66F4\u5E74\u671F\u969C\u7919\u3001\u4E0D\u5B55\u75C7",
          "\u5167\u79D1:\u611F\u5192\u3001\u904E\u654F\u6027\u9F3B\u708E\u3001\u8178\u80C3\u6A5F\u80FD\u6027\u969C\u7919",
          "\u5152\u79D1:\u9752\u6625\u671F\u9AD4\u8CEA\u8ABF\u7406",
          "\u76AE\u819A\u79D1:\u9752\u6625\u75D8\u3001\u6FD5\u75B9"
        ]
      },
      {
        name: "\u90ED\u70B3\u5B8F",
        image: "/static/images/kuo.jpg",
        role: "\u91AB\u5E2B",
        experience: [
          "\u4E2D\u570B\u91AB\u85E5\u5927\u5B78\u4E2D\u91AB\u5B78\u9662\u7562\u696D",
          "\u82B1\u84EE\u6148\u6FDF\u91AB\u9662(\u4E2D\u91AB\u90E8)\u4E2D\u91AB\u5E2B",
          "\u53F0\u5317\u99AC\u5055\u91AB\u9662(\u897F\u91AB\u90E8)\u5A66\u7522\u5C08\u79D1\u91AB\u5E2B",
          "\u53F0\u7063\u5A66\u7522\u79D1\u91AB\u5B78\u6703\u6703\u54E1",
          "\u4E2D\u83EF\u6C11\u570B\u50B7\u79D1\u91AB\u5B78\u6703\u6703\u54E1",
          "\u4E2D\u83EF\u6C11\u570B\u4E2D\u897F\u6574\u5408\u91AB\u5B78\u6703\u6703\u54E1"
        ],
        profession: [
          "\u5167\u79D1:\u5FC3\u8840\u7BA1\u75BE\u75C5\u3001\u9AD8\u8840\u8102\u75C7\u3001\u80C3\u8178\u529F\u80FD\u7570\u5E38\u3001\u6D88\u5316\u9053\u6F70\u760D \u809D\u529F\u80FD\u7570\u5E38\u3001\u7761\u7720\u969C\u7919",
          "\u5152\u79D1:\u6CE8\u610F\u529B\u4E0D\u96C6\u4E2D\u3001\u6210\u9577\u767C\u80B2",
          "\u76AE\u819A\u79D1:\u6EBC\u75B9 \u8541\u9EBB\u75B9 \u76AE\u819A\u708E",
          "\u91DD\u50B7\u79D1:\u9AA8\u95DC\u7BC0\u75BE\u75C5\u3001\u4E94\u5341\u80A9\u3001\u5750\u9AA8\u795E\u7D93\u75DB\u3001\u819D\u95DC\u7BC0\u75BE\u75C5\u3001\u904B\u52D5\u50B7\u5BB3\u3001\u7DB2\u7403\u8098\u3001\u626D\u62C9\u50B7"
        ]
      },
      {
        name: "\u8449\u6600\u59FF",
        image: "/static/images/yeh.jpg",
        role: "\u91AB\u5E2B",
        experience: [
          "\u885B\u751F\u798F\u5229\u90E8\u6843\u5712\u91AB\u9662\u4E2D\u91AB\u5E2B",
          "\u4E2D\u570B\u91AB\u85E5\u5927\u5B78\u9644\u8A2D\u91AB\u9662\u4E2D\u91AB\u5E2B",
          "\u4E2D\u570B\u91AB\u85E5\u5927\u5B78\u5B78\u58EB\u5F8C\u4E2D\u91AB\u7CFB\u5B78\u58EB",
          "\u570B\u7ACB\u967D\u660E\u5927\u5B78\u7269\u7406\u6CBB\u7642\u7CFB\u5B78\u58EB",
          "\u53F0\u4E2D\u7ACB\u4EBA\u570B\u4E2D\uFF08\u570B\u5C0F\uFF09\u8CC7\u6E90\u73ED\u7269\u7406\u6CBB\u7642\u5E2B"
        ],
        profession: [
          "\u5167\u79D1:\u5FC3\u8840\u7BA1\u75BE\u75C5\u3001\u9AD8\u8840\u8102\u75C7\u3001\u80C3\u8178\u529F\u80FD\u7570\u5E38\u3001\u6D88\u5316\u9053\u6F70\u760D \u809D\u529F\u80FD\u7570\u5E38\u3001\u7761\u7720\u969C\u7919",
          "\u5152\u79D1:\u6CE8\u610F\u529B\u4E0D\u96C6\u4E2D\u3001\u6210\u9577\u767C\u80B2",
          "\u76AE\u819A\u79D1:\u6EBC\u75B9 \u8541\u9EBB\u75B9 \u76AE\u819A\u708E",
          "\u91DD\u50B7\u79D1:\u9AA8\u95DC\u7BC0\u75BE\u75C5\u3001\u4E94\u5341\u80A9\u3001\u5750\u9AA8\u795E\u7D93\u75DB\u3001\u819D\u95DC\u7BC0\u75BE\u75C5\u3001\u904B\u52D5\u50B7\u5BB3\u3001\u7DB2\u7403\u8098\u3001\u626D\u62C9\u50B7"
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto max-w-[95%] py-8 md:max-w-[70%]" }, _attrs))}><h2 class="pl-4 text-[1.6rem] font-bold text-primary md:text-[2rem]"> \u91AB\u5E2B\u4ECB\u7D39 </h2><div class="mt-4 grid text-white md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(doctors), (doctor, index2) => {
        _push(`<div class="tranition grid grid-cols-3 duration-200 ease-in-out hover:scale-105 hover:opacity-90 md:grid-cols-4"><div class="m-6 flex h-44 w-[90%] justify-center overflow-hidden rounded-[20px] text-center shadow md:h-52">`);
        if (index2 === 0) {
          _push(`<img${ssrRenderAttr("src", _imports_0$2)} class="w-full object-cover" alt="\u5149\u9686\u4E2D\u91AB" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 1) {
          _push(`<img${ssrRenderAttr("src", _imports_1)} class="w-full object-cover" alt="\u5149\u9686\u4E2D\u91AB" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 2) {
          _push(`<img${ssrRenderAttr("src", _imports_2)} class="w-full object-cover" alt="\u5149\u9686\u4E2D\u91AB" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 3) {
          _push(`<img${ssrRenderAttr("src", _imports_3)} class="w-full object-cover" alt="\u5149\u9686\u4E2D\u91AB" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-span-2 mt-4 overflow-hidden px-6 pb-8 pt-2 md:col-span-3"><h2 class="text-3xl font-bold">${ssrInterpolate(doctor.name)}</h2><h2 class="text-xl font-semibold text-primary">${ssrInterpolate(doctor.role)}</h2><div class="overflow-hidden py-2 font-normal text-[#ebebeb]"><!--[-->`);
        ssrRenderList(doctor.experience, (exp) => {
          _push(`<h3>${ssrInterpolate(exp)}</h3>`);
        });
        _push(`<!--]--><br><!--[-->`);
        ssrRenderList(doctor.profession, (pro) => {
          _push(`<h3>${ssrInterpolate(pro)}</h3>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$4;
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path></svg></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Phone.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "h-6 w-6"
  }, _attrs))}><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Location.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = "" + buildAssetsURL("banner.acdf97e4.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Phone = __nuxt_component_0;
  const _component_Location = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto w-full max-w-[80%] py-24 md:max-w-[70%]" }, _attrs))}><h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]"> \u806F\u7D61\u672C\u9662 </h2><h2 class="text-xl font-bold text-primary">Contact</h2><div class="w-full gap-12 py-12 text-lg font-bold text-gray-200 md:flex"><div class="m-auto mb-8 h-32 w-32 overflow-hidden rounded-full md:m-0"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div><div class="flex items-center gap-2 py-2">`);
  _push(ssrRenderComponent(_component_Phone, null, null, _parent));
  _push(`<h3>03-4016505</h3></div><div class="flex items-center gap-2 py-2">`);
  _push(ssrRenderComponent(_component_Location, null, null, _parent));
  _push(`<h3>\u6843\u5712\u5E02\u4E2D\u58E2\u5340\u4E2D\u592E\u897F\u8DEF\u4E8C\u6BB539\u865F</h3></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("main.956681fe.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("\u5149\u9686\u4E2D\u91AB\u8A3A\u6240");
    useHead({
      title,
      meta: [{
        name: "google-site-verification",
        content: "_QGfOq9CIrKWskl0mobjGr_yLLyZDDIuvWcENn-vLDs"
      }]
    });
    ref();
    const initial = ref({
      scale: 0.5,
      y: 100,
      opacity: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Meta = Meta;
      const _component_Navbar = __nuxt_component_0$1;
      const _component_Bubbles = __nuxt_component_1$1;
      const _component_DownArrow = __nuxt_component_3;
      const _component_Services = __nuxt_component_1$2;
      const _component_Experience = __nuxt_component_5;
      const _component_Projects = __nuxt_component_6;
      const _component_Contact = __nuxt_component_7;
      const _component_MyFooter = __nuxt_component_2;
      const _directive_motion = resolveDirective("motion");
      _push(`<!--[--><header data-v-afe4329f><title data-v-afe4329f>\u5149\u9686\u4E2D\u91AB\u8A3A\u6240</title>`);
      _push(ssrRenderComponent(_component_Meta, {
        name: "keywords",
        content: "\u5149\u9686\u4E2D\u91AB\u8A3A\u6240,\u6843\u5712\u4E2D\u91AB,\u4E2D\u58E2\u4E2D\u91AB,\u5149\u9686\u4E2D\u91AB"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "theme-color",
        content: "#81D8D0"
      }, null, _parent));
      _push(`</header><div class="scrollbar-hide w-screen overflow-x-hidden" data-v-afe4329f>`);
      _push(ssrRenderComponent(_component_Navbar, { navHeight: "h-[300vh] md:h-[200vh]" }, null, _parent));
      _push(ssrRenderComponent(_component_Bubbles, null, null, _parent));
      _push(`<section id="first" class="h-screen" data-v-afe4329f><div class="m-auto w-[80%] text-[1.6rem] text-white md:text-[2rem]" data-v-afe4329f><div class="h-[90vh] md:grid md:grid-cols-5" data-v-afe4329f><div class="mt-32 font-bold md:col-span-2" data-v-afe4329f><h2${ssrRenderAttrs(mergeProps({
        class: "my-6 text-5xl md:text-3xl",
        initial: unref(initial),
        enter: {
          scale: 1,
          y: 0,
          opacity: 1
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-afe4329f> \u672C\u9662\u4EE5\u91AB\u7642\u670D\u52D9\u70BA\u8077\u5FD7\uFF0C </h2><h2${ssrRenderAttrs(mergeProps({
        class: "my-6 text-5xl md:text-3xl",
        initial: unref(initial),
        enter: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: {
            delay: 300
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-afe4329f> \u7528\u611B\u5FC3\u3001\u8010\u5FC3\u63D0\u4F9B\u5C08\u696D\u91AB\u7642\u8207\u7167\u8B77\uFF0C </h2><h2${ssrRenderAttrs(mergeProps({
        class: "my-6 mt-4 text-2xl text-primary md:text-3xl",
        initial: unref(initial),
        enter: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: {
            delay: 600
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-afe4329f> \u4EE5\u7CBE\u6E5B\u91AB\u8853\u53CA\u5C08\u696D\u91AB\u7642\u8A2D\u5099\uFF0C\u6DF1\u8015\u5730\u65B9\uFF0C<br data-v-afe4329f>\u70BA\u5C45\u6C11\u5065\u5EB7\u628A\u95DC\u3002 </h2><div class="mt-32 flex justify-center md:justify-start" data-v-afe4329f><a href="#second" data-v-afe4329f><button class="flex items-center gap-1 overflow-hidden rounded-xl bg-primary px-8 py-1 text-[18px] leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-secondary" data-v-afe4329f> \u4E86\u89E3\u66F4\u591A `);
      _push(ssrRenderComponent(_component_DownArrow, null, null, _parent));
      _push(`</button></a></div></div><div class="relative hidden w-full p-32 md:col-span-3 md:block" data-v-afe4329f><img class="m-auto h-full w-full"${ssrRenderAttr("src", _imports_0)} alt="" data-v-afe4329f></div></div></div></section><section id="second" data-v-afe4329f>`);
      _push(ssrRenderComponent(_component_Services, null, null, _parent));
      _push(`</section><section id="third" data-v-afe4329f>`);
      _push(ssrRenderComponent(_component_Experience, null, null, _parent));
      _push(`</section><section id="fourth" data-v-afe4329f>`);
      _push(ssrRenderComponent(_component_Projects, null, null, _parent));
      _push(`</section><section id="fifth" data-v-afe4329f>`);
      _push(ssrRenderComponent(_component_Contact, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_MyFooter, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afe4329f"]]);

export { index as default };
//# sourceMappingURL=index-0451f8c2.mjs.map
