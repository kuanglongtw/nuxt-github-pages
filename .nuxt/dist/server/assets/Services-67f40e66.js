import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("heart.f08dfe3e.png");
const _imports_1 = "" + __buildAssetsURL("doctor.23613969.png");
const _imports_2 = "" + __buildAssetsURL("med.04e110e3.png");
const _imports_3 = "" + __buildAssetsURL("skeleton.852c9421.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="m-auto w-full max-w-[80%] pb-8 pt-24 md:max-w-[70%]"><h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]"> 主治項目 </h2></div><div class="m-auto grid w-full max-w-[85%] grid-cols-1 text-white md:max-w-[70%] md:grid-cols-2"><div class="tranition m-auto mb-6 h-80 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"><div class="flex w-full justify-center pb-3"><img${ssrRenderAttr("src", _imports_0)} class="h-14 w-14 p-1"></div><h2 class="text-xl font-bold text-primary">一般內科</h2><div class="py-4 text-left text-[#ebebeb] md:px-12 md:py-8"><h3> 常見的內科症狀包含: 全身倦怠、失眠、食慾不振、體重減少或增加、水腫、黃疸、發燒、頭痛、頭暈、胸悶、胸痛、心悸、呼吸困難、咳嗽、噁心嘔吐、貧血、腹痛腹脹、排便異常、排尿異常等。 </h3></div></div><div class="tranition m-auto mb-6 h-80 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"><div class="flex w-full justify-center pb-3"><img${ssrRenderAttr("src", _imports_1)} class="h-14 w-14 p-1"></div><h2 class="text-xl font-bold text-primary">婦兒科</h2><div class="py-4 text-left text-[#ebebeb] md:px-12 md:py-8"><h3> 中醫婦科是根據中醫理論來處理婦女特有疾病的臨床醫學，其主要範圍，包括經、帶、胎、產四大類。 </h3></div></div><div class="tranition m-auto mb-6 h-96 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"><div class="flex w-full justify-center pb-3"><img${ssrRenderAttr("src", _imports_2)} class="h-14 w-14 p-1"></div><h2 class="text-xl font-bold text-primary">針灸科</h2><div class="py-4 text-left text-[#ebebeb] md:px-12 md:py-8"><h3> 針灸是中醫學中的一種傳統療法，已有數千年的歷史，在中醫針灸科中，醫生使用細針刺入特定的穴位，以調節和平衡患者的氣血、陰陽、經絡等身體的功能和狀態。通過針灸的刺激，可以調節這些能量的流動，以緩解疼痛、改善免疫功能、調整器官功能等。 </h3></div></div><div class="tranition m-auto mb-6 h-96 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"><div class="flex w-full justify-center pb-3"><img${ssrRenderAttr("src", _imports_3)} class="h-14 w-14 p-1"></div><h2 class="text-xl font-bold text-primary">傷骨科</h2><div class="py-4 text-left text-[#ebebeb] md:px-12 md:py-8"><h3> 中醫骨傷科是中醫學中的一個專門領域，主要處理與骨骼、關節和周邊組織相關的傷害、疼痛和疾病。這包括骨折、脫臼、扭傷、拉傷、肌肉勞損、關節炎等。 </h3></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=Services-67f40e66.js.map
