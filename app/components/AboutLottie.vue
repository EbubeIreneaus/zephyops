<template>
  <div ref="container" :class="['w-full', className]" aria-hidden="false"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import lottie from 'lottie-web'

const props = defineProps({
  src: { type: String, default: 'https://assets10.lottiefiles.com/packages/lf20_touohxv0.json' },
  loop: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: true },
  className: { type: String, default: '' }
})

const container = ref(null)
let anim = null

onMounted(async () => {
  try {
    anim = lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: props.autoplay,
      path: props.src
    })
  } catch (e) {
    // fallback: do nothing
    console.error('Lottie load error', e)
  }
})

onBeforeUnmount(() => {
  if (anim) anim.destroy()
})
</script>

<style scoped>
div { max-width: 100%; }
</style>
