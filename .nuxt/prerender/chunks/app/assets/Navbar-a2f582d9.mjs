import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, toRef, ref, resolveDirective, mergeProps, withCtx, createVNode } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';

const _imports_0 = "" + buildAssetsURL("logo.0ea3eb47.svg");
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["navHeight"],
  setup(__props) {
    const props = __props;
    const navHeight = toRef(props, "navHeight");
    const isOpen = ref(false);
    const initial = ref({
      scale: 0.5,
      y: 100,
      opacity: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-20 md:pt-0" }, _attrs))}><div class="${ssrRenderClass([navHeight.value, "absolute left-0 top-0 -z-10 w-full bg-[#28282B]"])}"></div><div class="m-auto hidden max-w-[80%] justify-between py-4 text-white md:flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2 pt-4 transition delay-100 ease-in-out hover:opacity-70"${_scopeId}><div class="p-1"${_scopeId}><img class="h-11 w-11"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div><div${_scopeId}><h1 class="text-2xl font-bold text-white"${_scopeId}>\u5149\u9686\u4E2D\u91AB\u8A3A\u6240</h1><h2 class="text-sm font-bold"${_scopeId}>Kuang Long Clinic</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2 pt-4 transition delay-100 ease-in-out hover:opacity-70" }, [
                createVNode("div", { class: "p-1" }, [
                  createVNode("img", {
                    class: "h-11 w-11",
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                createVNode("div", null, [
                  createVNode("h1", { class: "text-2xl font-bold text-white" }, "\u5149\u9686\u4E2D\u91AB\u8A3A\u6240"),
                  createVNode("h2", { class: "text-sm font-bold" }, "Kuang Long Clinic")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex min-w-[70%] justify-end gap-4"><button${ssrRenderAttrs(mergeProps({
        initial: initial.value,
        enter: {
          scale: 1,
          y: 0,
          opacity: 1
        },
        class: "col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#second">\u4E3B\u6CBB\u9805\u76EE</a></button><button${ssrRenderAttrs(mergeProps({
        initial: initial.value,
        enter: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: {
            delay: 200
          }
        },
        class: "col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#third">\u9580\u8A3A\u6642\u9593</a></button><button${ssrRenderAttrs(mergeProps({
        initial: initial.value,
        enter: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: {
            delay: 400
          }
        },
        class: "col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#fourth">\u91AB\u5E2B\u4ECB\u7D39</a></button><button${ssrRenderAttrs(mergeProps({
        initial: initial.value,
        enter: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: {
            delay: 600
          }
        },
        class: "col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#fifth">\u806F\u7D61\u672C\u9662</a></button></div></div><div class="fixed top-0 z-30 flex h-24 w-full justify-between bg-[#28282B] p-4 shadow-sm md:hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2 p-2 hover:opacity-50"${_scopeId}><div class="p-1 opacity-70"${_scopeId}><img class="h-11 w-11"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div><div${_scopeId}><h1 class="text-2xl font-bold text-white"${_scopeId}>\u5149\u9686\u4E2D\u91AB\u8A3A\u6240</h1><h2 class="text-sm font-bold text-white opacity-70"${_scopeId}> Kuang Long Clinic </h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2 p-2 hover:opacity-50" }, [
                createVNode("div", { class: "p-1 opacity-70" }, [
                  createVNode("img", {
                    class: "h-11 w-11",
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                createVNode("div", null, [
                  createVNode("h1", { class: "text-2xl font-bold text-white" }, "\u5149\u9686\u4E2D\u91AB\u8A3A\u6240"),
                  createVNode("h2", { class: "text-sm font-bold text-white opacity-70" }, " Kuang Long Clinic ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="flex items-center gap-3 text-white"><div class="h-12 w-12 flex-none items-center rounded-full bg-white/30 pt-4 shadow backdrop-blur-sm"><div class="${ssrRenderClass([{ openTop: isOpen.value }, "menu m-auto"])}"></div><div class="${ssrRenderClass([{ hidden: isOpen.value }, "menu mx-auto my-1"])}"></div><div class="${ssrRenderClass([{ openBottom: isOpen.value }, "menu m-auto"])}"></div></div></button></div>`);
      if (isOpen.value) {
        _push(`<div class="md:hidden"><div class="fixed z-30 mt-4 h-screen w-full bg-gradient-to-tr from-[#28282B] to-[#36363b] pt-12 text-xl"><button${ssrRenderAttrs(mergeProps({
          initial: initial.value,
          enter: {
            scale: 1,
            y: 0,
            opacity: 1
          },
          class: "w-full px-4 py-4 font-semibold text-white"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#second">\u4E3B\u6CBB\u9805\u76EE</a></button><button${ssrRenderAttrs(mergeProps({
          initial: initial.value,
          enter: {
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 200
            }
          },
          class: "w-full px-4 py-4 font-semibold text-white"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#third">\u9580\u8A3A\u6642\u9593</a></button><button${ssrRenderAttrs(mergeProps({
          initial: initial.value,
          enter: {
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 400
            }
          },
          class: "w-full px-4 py-4 font-semibold text-white"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#fourth">\u91AB\u5E2B\u4ECB\u7D39</a></button><button${ssrRenderAttrs(mergeProps({
          initial: initial.value,
          enter: {
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 600
            }
          },
          class: "w-full px-4 py-4 font-semibold text-white"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><a href="#fifth">\u806F\u7D61\u672C\u9662</a></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Navbar-a2f582d9.mjs.map
