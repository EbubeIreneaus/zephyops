import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

export default defineNuxtPlugin(() => {
  if (process.client) {
    onMounted(() => {
      AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' })
    })
  }
})
