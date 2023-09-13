<template>
  <header>
    <title>光隆中醫診所</title>
    <Meta name="keywords" content="光隆中醫診所,桃園中醫,中壢中醫,光隆中醫" />
    <Meta name="theme-color" content="#81D8D0" />
  </header>
  <div class="scrollbar-hide w-screen overflow-x-hidden">
    <Navbar :navHeight="'h-[300vh] md:h-[200vh]'" />
    <Bubbles />
    <section id="first" class="h-screen">
      <div class="m-auto w-[80%] text-[1.6rem] text-white md:text-[2rem]">
        <div class="h-[90vh] md:grid md:grid-cols-5">
          <div class="mt-32 font-bold md:col-span-2">
            <h2
              class="my-6 text-5xl md:text-3xl"
              v-motion
              :initial="initial"
              :enter="{
                scale: 1,
                y: 0,
                opacity: 1,
              }"
            >
              本院以醫療服務為職志，
            </h2>
            <h2
              class="my-6 text-5xl md:text-3xl"
              v-motion
              :initial="initial"
              :enter="{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 300,
                },
              }"
            >
              用愛心、耐心提供專業醫療與照護，
            </h2>
            <h2
              class="my-6 mt-4 text-2xl text-primary md:text-3xl"
              v-motion
              :initial="initial"
              :enter="{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 600,
                },
              }"
            >
              以精湛醫術及專業醫療設備，深耕地方，<br />為居民健康把關。
            </h2>
            <div class="mt-32 flex justify-center md:justify-start">
              <a href="#second">
                <button
                  class="flex items-center gap-1 overflow-hidden rounded-xl bg-primary px-8 py-1 text-[18px] leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-secondary"
                >
                  了解更多
                  <DownArrow />
                </button>
              </a>
            </div>
          </div>
          <div class="relative hidden w-full p-32 md:col-span-3 md:block">
            <img
              class="m-auto h-full w-full"
              src="/static/images/main.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="second">
      <Services />
    </section>
    <section id="third">
      <Experience />
    </section>
    <section id="fourth">
      <Projects />
    </section>
    <section id="fifth">
      <Contact />
    </section>
    <MyFooter />
  </div>
</template>

<script setup>
const title = ref('光隆中醫診所')
useHead({
  title,
  meta: [{
    name: 'google-site-verification',
    content: '_QGfOq9CIrKWskl0mobjGr_yLLyZDDIuvWcENn-vLDs'
  }]
})
let id = ref();
const initial = ref({
  scale: 0.5,
  y: 100,
  opacity: 0,
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
