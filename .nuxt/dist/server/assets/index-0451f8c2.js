import { defineComponent, mergeProps, useSSRContext, ref, unref, resolveDirective } from "vue";
import "./index-e12b288f.js";
import { u as useHead, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./Navbar-a2f582d9.js";
import { _ as __nuxt_component_1$1 } from "./Bubbles-f9884c43.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as __nuxt_component_1$2 } from "./Services-67f40e66.js";
import { _ as __nuxt_component_2 } from "./MyFooter-a78ae920.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "@unhead/shared";
import "framesync";
import "popmotion";
import "style-value-types";
import "@vue/shared";
import "destr";
import "klona";
import "./nuxt-link-744fccd2.js";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto max-w-[90%] pt-12 md:max-w-[70%] md:py-24" }, _attrs))}><h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]"> 門診時間 </h2><div class="mt-24 hidden w-full grid-cols-10 overflow-hidden rounded-xl text-2xl font-bold text-white md:grid"><div class="col-span-3 mr-1 h-24 bg-quaternary text-center"></div><div class="mx-1 h-24 bg-quaternary py-8 text-center">一</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">二</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">三</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">四</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">五</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">六</div><div class="ml-1 h-24 bg-quaternary py-8 text-center">日</div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>早診</h3><h3>08:30~11:50</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>午診</h3><h3>14:00~17:30</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 葉昀姿 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>晚診</h3><h3>18:00~21:00</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥<br>葉昀姿 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"> 郭炳宏<br>葉昀姿 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 郭炳宏 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div></div><div class="mt-4 grid w-full grid-cols-4 overflow-hidden rounded-xl text-2xl font-bold text-white md:hidden"><div class="mr-1 h-24 bg-quaternary text-center"></div><div class="mx-1 h-24 bg-quaternary py-8 text-center">早診</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">午診</div><div class="ml-1 h-24 bg-quaternary py-8 text-center">晚診</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>一</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div><div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center"> 丁漢祥<br>葉昀姿 </div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>二</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">林良德</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>三</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">林良德</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">丁漢祥</div><div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center"> 郭炳宏<br>葉昀姿 </div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>四</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">葉昀姿</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">丁漢祥</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>五</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">丁漢祥</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">郭炳宏</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>六</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">林良德</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>日</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$2 = "" + __buildAssetsURL("lin.ccea6cc9.jpg");
const _imports_1 = "" + __buildAssetsURL("ding.833abc32.jpg");
const _imports_2 = "" + __buildAssetsURL("kuo.fcd51a2b.jpg");
const _imports_3 = "" + __buildAssetsURL("yeh.6944d2fd.jpg");
const _sfc_main$4 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const doctors = ref([
      {
        name: "林良德",
        image: "/static/images/lin.jpg",
        role: "院長",
        experience: [
          "中國醫藥大學中醫學系  醫學士",
          "衛福部桃園醫院中醫科 兼任主治醫師",
          "桃園市中醫師公會 常務理事"
        ],
        profession: [
          "內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙",
          "兒科:注意力不集中、成長發育",
          "皮膚科:溼疹 蕁麻疹 皮膚炎",
          "針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷"
        ]
      },
      {
        name: "丁漢祥",
        image: "/static/images/ding.jpg",
        role: "專任醫師",
        experience: [
          "南京中醫藥大學 醫學博士",
          "中國醫大附設醫院 中醫婦科總醫師",
          "中國醫藥大學學士後中醫系 醫學士",
          "中國醫大附設醫院中醫藥 臨床實驗中心執行總醫師",
          "衛生福利部桃園醫院 中醫科主治醫師"
        ],
        profession: [
          "婦科:痛經、帶下、月經不調、產後調理、更年期障礙、不孕症",
          "內科:感冒、過敏性鼻炎、腸胃機能性障礙",
          "兒科:青春期體質調理",
          "皮膚科:青春痘、濕疹"
        ]
      },
      {
        name: "郭炳宏",
        image: "/static/images/kuo.jpg",
        role: "醫師",
        experience: [
          "中國醫藥大學中醫學院畢業",
          "花蓮慈濟醫院(中醫部)中醫師",
          "台北馬偕醫院(西醫部)婦產專科醫師",
          "台灣婦產科醫學會會員",
          "中華民國傷科醫學會會員",
          "中華民國中西整合醫學會會員"
        ],
        profession: [
          "內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙",
          "兒科:注意力不集中、成長發育",
          "皮膚科:溼疹 蕁麻疹 皮膚炎",
          "針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷"
        ]
      },
      {
        name: "葉昀姿",
        image: "/static/images/yeh.jpg",
        role: "醫師",
        experience: [
          "衛生福利部桃園醫院中醫師",
          "中國醫藥大學附設醫院中醫師",
          "中國醫藥大學學士後中醫系學士",
          "國立陽明大學物理治療系學士",
          "台中立人國中（國小）資源班物理治療師"
        ],
        profession: [
          "內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙",
          "兒科:注意力不集中、成長發育",
          "皮膚科:溼疹 蕁麻疹 皮膚炎",
          "針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷"
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto max-w-[95%] py-8 md:max-w-[70%]" }, _attrs))}><h2 class="pl-4 text-[1.6rem] font-bold text-primary md:text-[2rem]"> 醫師介紹 </h2><div class="mt-4 grid text-white md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(doctors), (doctor, index2) => {
        _push(`<div class="tranition grid grid-cols-3 duration-200 ease-in-out hover:scale-105 hover:opacity-90 md:grid-cols-4"><div class="m-6 flex h-44 w-[90%] justify-center overflow-hidden rounded-[20px] text-center shadow md:h-52">`);
        if (index2 === 0) {
          _push(`<img${ssrRenderAttr("src", _imports_0$2)} class="w-full object-cover" alt="光隆中醫" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 1) {
          _push(`<img${ssrRenderAttr("src", _imports_1)} class="w-full object-cover" alt="光隆中醫" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 2) {
          _push(`<img${ssrRenderAttr("src", _imports_2)} class="w-full object-cover" alt="光隆中醫" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 3) {
          _push(`<img${ssrRenderAttr("src", _imports_3)} class="w-full object-cover" alt="光隆中醫" loading="lazy">`);
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
const _imports_0$1 = "" + __buildAssetsURL("banner.acdf97e4.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Phone = __nuxt_component_0;
  const _component_Location = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto w-full max-w-[80%] py-24 md:max-w-[70%]" }, _attrs))}><h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]"> 聯絡本院 </h2><h2 class="text-xl font-bold text-primary">Contact</h2><div class="w-full gap-12 py-12 text-lg font-bold text-gray-200 md:flex"><div class="m-auto mb-8 h-32 w-32 overflow-hidden rounded-full md:m-0"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div><div class="flex items-center gap-2 py-2">`);
  _push(ssrRenderComponent(_component_Phone, null, null, _parent));
  _push(`<h3>03-4016505</h3></div><div class="flex items-center gap-2 py-2">`);
  _push(ssrRenderComponent(_component_Location, null, null, _parent));
  _push(`<h3>桃園市中壢區中央西路二段39號</h3></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + __buildAssetsURL("main.956681fe.svg");
const index_vue_vue_type_style_index_0_scoped_afe4329f_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("光隆中醫診所");
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
      _push(`<!--[--><header data-v-afe4329f><title data-v-afe4329f>光隆中醫診所</title>`);
      _push(ssrRenderComponent(_component_Meta, {
        name: "keywords",
        content: "光隆中醫診所,桃園中醫,中壢中醫,光隆中醫"
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
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-afe4329f> 本院以醫療服務為職志， </h2><h2${ssrRenderAttrs(mergeProps({
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
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-afe4329f> 用愛心、耐心提供專業醫療與照護， </h2><h2${ssrRenderAttrs(mergeProps({
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
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-afe4329f> 以精湛醫術及專業醫療設備，深耕地方，<br data-v-afe4329f>為居民健康把關。 </h2><div class="mt-32 flex justify-center md:justify-start" data-v-afe4329f><a href="#second" data-v-afe4329f><button class="flex items-center gap-1 overflow-hidden rounded-xl bg-primary px-8 py-1 text-[18px] leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-secondary" data-v-afe4329f> 了解更多 `);
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
export {
  index as default
};
//# sourceMappingURL=index-0451f8c2.js.map
