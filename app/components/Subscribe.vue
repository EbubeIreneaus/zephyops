<template>
  <section class="bg-linear-to-r from-primary to-accent text-white py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div class="flex-1">
          <h3 class="text-2xl font-bold">Subscribe to our newsletter</h3>
          <p class="mt-2 text-white/90">Get practical automation tips, case studies, and product updates delivered to your inbox.</p>
        </div>

        <form @submit.prevent="onSubmit" class="w-full md:w-auto flex gap-2 items-center">
          <label for="email" class="sr-only">Email address</label>
          <input id="email" v-model="email" type="email" required placeholder="you@company.com" class="px-4 py-2 rounded-md text-slate-900 w-full md:w-72" />
          <button type="submit" class="bg-white text-primary px-4 py-2 rounded-md font-semibold">Subscribe</button>
        </form>
      </div>
      <p v-if="message" class="mt-3 text-sm text-white/90">{{ message }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const message = ref('')

function onSubmit() {
  // placeholder behaviour — hook to form service later
  message.value = `Thanks — ${email.value} has been subscribed (placeholder).`;
  email.value = ''
}
</script>

<style scoped>
.sr-only{position:absolute!important;height:1px;width:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
</style>
