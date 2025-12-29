<template>
  <footer class="bg-primary text-white pt-12 pb-8 mt-16" style="background:var(--primary);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/10 pb-8">
        <div>
          <NuxtLink to="/" class="flex items-center gap-3 mb-4 no-underline">
            <img src="/logo.png" alt="ZephyOps" class="w-24 h-24 rounded" />
          </NuxtLink>
          <p class="text-sm text-white/80">We build AI automation & workflow engineering solutions to help teams move faster and reduce manual work.</p>
        </div>

        <div>
          <h4 class="font-semibold mb-3">Services</h4>
          <ul class="space-y-2 text-sm text-white/80">
            <li><NuxtLink to="/services" class="hover:underline">All services</NuxtLink></li>
            <li><NuxtLink to="/services#monitoring" class="hover:underline">Monitoring</NuxtLink></li>
            <li><NuxtLink to="/services#scraping" class="hover:underline">Scraping & Data</NuxtLink></li>
            <li><NuxtLink to="/services#ai-posting" class="hover:underline">AI Social Posting</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-3">Company</h4>
          <ul class="space-y-2 text-sm text-white/80">
            <li><NuxtLink to="/about" class="hover:underline">About</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:underline">Privacy</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-3">Contact</h4>
          <p class="text-sm text-white/80">contact@zephyops.com</p>
          <p class="text-sm text-white/80 mt-2">Follow us</p>
          <div class="flex items-center gap-3 mt-3">
            <a href="https://twitter.com/zephyops" target="_blank" rel="noopener noreferrer" class="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-white/20" aria-label="Twitter">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 19c7 0 10.8-5.8 10.8-10.8v-.5A7.7 7.7 0 0022 4.8a7.5 7.5 0 01-2.2.6 3.9 3.9 0 001.7-2.2 7.7 7.7 0 01-2.5.9A3.85 3.85 0 0015 3a3.9 3.9 0 00-3.9 3.9c0 .3 0 .6.1.9A11 11 0 013 4.9a3.9 3.9 0 001.2 5.2 3.8 3.8 0 01-1.8-.5v.1c0 1.9 1.3 3.5 3.1 3.9a3.9 3.9 0 01-1.7.1c.5 1.6 2 2.8 3.7 2.8A7.8 7.8 0 013 17.5 11 11 0 008 19"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/zephyops" target="_blank" rel="noopener noreferrer" class="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-white/20" aria-label="LinkedIn">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.55V24H.22zM8.98 8h4.37v2.2h.06c.61-1.1 2.1-2.2 4.33-2.2 4.63 0 5.48 3.05 5.48 7.01V24h-4.55v-7.5c0-1.79 0-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.98V24H8.98z"/></svg>
            </a>
            <a href="https://www.facebook.com/zephyops" target="_blank" rel="noopener noreferrer" class="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-white/20" aria-label="Facebook">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.4c0-2.2 1.3-3.5 3.3-3.5.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <div>© {{ new Date().getFullYear() }} ZephyOps · AI Automation & Workflow Engineering</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// enhanced footer with sections
</script>

<style scoped>
.no-underline{ text-decoration: none }
a {
  color: whitesmoke;
}
</style>

<style>
.site-footer-fallback{ background:var(--primary); }
</style>
