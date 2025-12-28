<template>
  <section class="py-12">
    <div class="max-w-6xl mx-auto px-4">
      <Breadcrumbs :items="[{ text: 'Home', to: '/' }, { text: 'Blog' }]" />
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-extrabold">Insights</h1>
          <p class="mt-1 text-slate-600">Latest thinking on automation, reliability, and engineering culture.</p>
        </div>
        <div>
          <nuxt-link to="/blog/subscribe" class="text-sm text-primary underline">Subscribe</nuxt-link>
        </div>
      </div>

      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article class="bg-white rounded-lg shadow-sm overflow-hidden">
          <img src="/og-image.png" alt="Post" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">How we automate social posting with LLMs</h3>
            <p class="mt-2 text-sm text-slate-600">A quick overview of our approach to scheduling and quality control using model-guided prompts.</p>
            <div class="mt-4 flex items-center justify-between text-xs text-slate-500">
              <div>Mar 12, 2024</div>
              <nuxt-link to="/blog/automate-social-posting" class="text-primary underline">Read</nuxt-link>
            </div>
          </div>
        </article>

        <article class="bg-white rounded-lg shadow-sm overflow-hidden">
          <img src="/og-image.png" alt="Post" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Reliable scraping at scale</h3>
            <p class="mt-2 text-sm text-slate-600">Lessons from building resilient crawlers for large datasets.</p>
            <div class="mt-4 flex items-center justify-between text-xs text-slate-500">
              <div>Feb 2, 2024</div>
              <nuxt-link to="/blog/reliable-scraping" class="text-primary underline">Read</nuxt-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
