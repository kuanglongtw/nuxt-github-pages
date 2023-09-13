<template>
  <div class="m-auto max-w-[95%] py-8 md:max-w-[70%]">
    <h2 class="pl-4 text-[1.6rem] font-bold text-primary md:text-[2rem]">
      醫師介紹
    </h2>
    <div class="mt-4 grid text-white md:grid-cols-2">
      <div
        v-for="(doctor, index) in doctors"
        :key="index"
        class="tranition grid grid-cols-3 duration-200 ease-in-out hover:scale-105 hover:opacity-90 md:grid-cols-4"
      >
        <div
          class="m-6 flex h-44 w-[90%] justify-center overflow-hidden rounded-[20px] text-center shadow md:h-52"
        >
          <img
            v-if="index === 0"
            src="/static/images/lin.jpg"
            class="w-full object-cover"
            alt="光隆中醫"
            loading="lazy"
          />
          <img
            v-if="index === 1"
            src="/static/images/ding.jpg"
            class="w-full object-cover"
            alt="光隆中醫"
            loading="lazy"
          />
          <img
            v-if="index === 2"
            src="/static/images/kuo.jpg"
            class="w-full object-cover"
            alt="光隆中醫"
            loading="lazy"
          />
          <img
            v-if="index === 3"
            src="/static/images/yeh.jpg"
            class="w-full object-cover"
            alt="光隆中醫"
            loading="lazy"
          />
        </div>
        <div
          class="col-span-2 mt-4 overflow-hidden px-6 pb-8 pt-2 md:col-span-3"
        >
          <h2 class="text-3xl font-bold">{{ doctor.name }}</h2>
          <h2 class="text-xl font-semibold text-primary">
            {{ doctor.role }}
          </h2>
          <div class="overflow-hidden py-2 font-normal text-[#ebebeb]">
            <h3 v-for="exp in doctor.experience">
              {{ exp }}
            </h3>
            <br />
            <h3 v-for="pro in doctor.profession">
              {{ pro }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const doctors = ref([
  {
    name: "林良德",
    image: "/static/images/lin.jpg",
    role: "院長",
    experience: [
      "中國醫藥大學中醫學系  醫學士",
      "衛福部桃園醫院中醫科 兼任主治醫師",
      "桃園市中醫師公會 常務理事",
    ],
    profession: [
      "內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙",
      "兒科:注意力不集中、成長發育",
      "皮膚科:溼疹 蕁麻疹 皮膚炎",
      "針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷",
    ],
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
      "衛生福利部桃園醫院 中醫科主治醫師",
    ],
    profession: [
      "婦科:痛經、帶下、月經不調、產後調理、更年期障礙、不孕症",
      "內科:感冒、過敏性鼻炎、腸胃機能性障礙",
      "兒科:青春期體質調理",
      "皮膚科:青春痘、濕疹",
    ],
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
      "中華民國中西整合醫學會會員",
    ],
    profession: [
      "內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙",
      "兒科:注意力不集中、成長發育",
      "皮膚科:溼疹 蕁麻疹 皮膚炎",
      "針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷",
    ],
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
      "台中立人國中（國小）資源班物理治療師",
    ],
    profession: [
      "內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙",
      "兒科:注意力不集中、成長發育",
      "皮膚科:溼疹 蕁麻疹 皮膚炎",
      "針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷",
    ],
  },
]);
</script>
