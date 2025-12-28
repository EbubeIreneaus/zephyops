<template>
  <nav aria-label="Breadcrumb" class="mb-4">
    <ol class="flex items-center text-sm text-slate-600">
      <li v-for="(item, idx) in items" :key="idx" class="flex items-center">
        <nuxt-link v-if="item.to" :to="item.to" class="hover:text-primary">{{ item.text }}</nuxt-link>
        <span v-else class="text-slate-800 font-medium">{{ item.text }}</span>
        <span v-if="idx < items.length - 1" class="mx-2 text-slate-400">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
