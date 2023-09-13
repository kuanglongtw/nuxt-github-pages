<template>
  <div class="m-auto max-w-[90%] pt-12 md:max-w-[70%] md:py-24">
    <h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]">
      門診時間
    </h2>
    <div
      class="mt-24 hidden w-full grid-cols-10 overflow-hidden rounded-xl text-2xl font-bold text-white md:grid"
    >
      <!---->
      <div class="col-span-3 mr-1 h-24 bg-quaternary text-center"></div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">一</div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">二</div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">三</div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">四</div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">五</div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">六</div>
      <div class="ml-1 h-24 bg-quaternary py-8 text-center">日</div>
      <!---->
      <div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-4">
          <h3>早診</h3>
          <h3>08:30~11:50</h3>
        </div>
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        林良德
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        丁漢祥
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        林良德
      </div>
      <div
        class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <!---->
      <div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-4">
          <h3>午診</h3>
          <h3>14:00~17:30</h3>
        </div>
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        林良德
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        林良德
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        丁漢祥
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        葉昀姿
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        林良德
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <div
        class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <!---->
      <div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-4">
          <h3>晚診</h3>
          <h3>18:00~21:00</h3>
        </div>
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"
      >
        丁漢祥<br />葉昀姿
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        林良德
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"
      >
        郭炳宏<br />葉昀姿
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        丁漢祥
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        郭炳宏
      </div>
      <div
        class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
      <div
        class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"
      >
        x
      </div>
    </div>
    <div
      class="mt-4 grid w-full grid-cols-4 overflow-hidden rounded-xl text-2xl font-bold text-white md:hidden"
    >
      <div class="mr-1 h-24 bg-quaternary text-center"></div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">早診</div>
      <div class="mx-1 h-24 bg-quaternary py-8 text-center">午診</div>
      <div class="ml-1 h-24 bg-quaternary py-8 text-center">晚診</div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>一</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center">
        丁漢祥<br />葉昀姿
      </div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>二</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">林良德</div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>三</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">林良德</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">丁漢祥</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center">
        郭炳宏<br />葉昀姿
      </div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>四</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">葉昀姿</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">丁漢祥</div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>五</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">丁漢祥</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">郭炳宏</div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>六</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">林良德</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div>
      <div class="mr-1 mt-2 h-24 bg-white/30 text-center">
        <div class="py-8">
          <h3>日</h3>
        </div>
      </div>
      <div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div>
      <div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div>
      <div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div>
    </div>
  </div>
</template>

<script setup></script>
