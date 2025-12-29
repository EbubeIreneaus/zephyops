<template>
  <section aria-label="Client testimonials" class="py-12 bg-slate-50" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-extrabold">What our clients say</h2>
        <p class="mt-2 text-slate-600">Real stories from businesses that scaled with our automations.</p>
      </div>

      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="24"
        :loop="true"
        :autoplay="{ delay: 4500, disableOnInteraction: false }"
        :breakpoints="{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }"
     
        pagination
        class="testimonials-swiper">

        <SwiperSlide v-for="(t, i) in testimonials" :key="i">
          <article class="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
            <div>
              <p class="text-slate-700 text-base leading-relaxed">"{{ t.quote }}"</p>
            </div>
            <div class="mt-6 flex items-center gap-4">
              <img :src="t.avatar" alt="avatar" class="w-12 h-12 rounded-full object-cover border" />
              <div>
                <div class="font-semibold text-slate-900">{{ t.name }}</div>
                <div class="text-sm text-slate-500">{{ t.role }} — {{ t.company }}</div>
              </div>
            </div>
          </article>
        </SwiperSlide>

      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  { Autoplay, Navigation, Pagination } from 'swiper/modules';


const modules = [Autoplay, Navigation, Pagination];

const testimonials = [
  {
    quote: 'ZephyOps transformed our content ops — we cut manual posting time by 90% and now publish twice as often.',
    name: 'Aisha Bello',
    role: 'Head of Marketing',
    company: 'BlueWave Inc',
    avatar: '/logo.png'
  },
  {
    quote: 'Their monitoring and alerting saved us from critical outages. Highly reliable and responsive team.',
    name: 'Jonas Okafor',
    role: 'CTO',
    company: 'DataCraft',
    avatar: '/logo.png'
  },
  {
    quote: 'Automations built by ZephyOps let our analysts focus on insights rather than collection and cleaning.',
    name: 'Maria Gonzales',
    role: 'Analytics Lead',
    company: 'RetailQ',
    avatar: '/logo.png'
  }
];
</script>

<style scoped>
.testimonials-swiper .swiper-pagination-bullet{background:rgba(8,43,102,0.8)}
.testimonials-swiper .swiper-button-next,.testimonials-swiper .swiper-button-prev{color:var(--primary)}
</style>
