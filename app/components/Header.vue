<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)

const openMenu = () => (mobileOpen.value = true)
const closeMenu = () => (mobileOpen.value = false)
</script>

<template>
  <header class="bg-white">
    <div class="flex items-center justify-between py-3 px-4 max-w-6xl mx-auto">
      <!-- Logo -->
      <img src="/logo.png" alt="ZephyOps logo" class="w-28 h-24" />

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center">
        <NuxtLink to="/" class="ml-4 text-primary hover:underline">Home</NuxtLink>
        <NuxtLink to="/services" class="ml-4 text-primary hover:underline">Services</NuxtLink>
        <NuxtLink to="/about" class="ml-4 text-primary hover:underline">About</NuxtLink>
        <NuxtLink
          to="/contact"
          class="ml-4 bg-accent text-white px-3 py-2 rounded-md"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden text-primary text-2xl"
        aria-label="Open menu"
        @click="openMenu"
      >
        ☰
      </button>
    </div>

    <!-- FULLSCREEN MOBILE NAV -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-50 bg-white flex items-center justify-center"
      >
        <!-- Close Button -->
        <button
          class="absolute top-6 right-6 text-3xl text-primary"
          aria-label="Close menu"
          @click="closeMenu"
        >
          ✕
        </button>

        <!-- Centered Links -->
        <nav class="flex flex-col items-center gap-8 text-xl font-medium">
          <NuxtLink to="/" @click="closeMenu" class="text-primary">
            Home
          </NuxtLink>

          <NuxtLink to="/services" @click="closeMenu" class="text-primary">
            Services
          </NuxtLink>

          <NuxtLink to="/about" @click="closeMenu" class="text-primary">
            About
          </NuxtLink>

          <NuxtLink
            to="/contact"
            @click="closeMenu"
            class="bg-accent text-white px-6 py-3 rounded-md"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
