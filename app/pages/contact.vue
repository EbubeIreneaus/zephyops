<template>
  <section class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <Breadcrumbs :items="[{ text: 'Home', to: '/' }, { text: 'Contact' }]" />
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="max-w-xl">
          <h1 class="text-3xl font-extrabold text-primary">Contact Us</h1>
          <p class="mt-4 text-slate-700">Interested in automation? Tell us about your project and we'll respond within one business day.</p>

          <div class="mt-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">📧</div>
              <div>
                <div class="text-sm font-semibold">Email</div>
                <div class="text-sm text-slate-600">contact@zephyops.com</div>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">📍</div>
              <div>
                <div class="text-sm font-semibold">Location</div>
                <div class="text-sm text-slate-600">Remote / Example City</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form class="bg-slate-50 p-6 rounded-lg shadow-sm" @submit.prevent>
            <div class="grid gap-4">
              <label class="block">
                <span class="text-sm text-slate-700">Name</span>
                <u-input size="lg" required type="text" placeholder="Your name" class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-accent" />
              </label>
              <label class="block">
                <span class="text-sm text-slate-700">Email</span>
                <u-input size="lg" required type="email" placeholder="you@company.com" class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-accent" />
              </label>
              <label class="block">
                <span class="text-sm text-slate-700">Company (optional)</span>
                <u-input size="lg" type="text" placeholder="Company" class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-accent" />
              </label>
              <label class="block">
                <span class="text-sm text-slate-700">Message</span>
                <u-textarea required :rows="6" placeholder="Tell us about your needs" class="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-accent"></u-textarea>
              </label>

              <div class="flex items-center justify-between">
                <u-button color="primary" class=" text-white px-4 py-2 rounded-md" type="submit">Send inquiry</u-button>
                <span class="text-sm text-slate-500">Or email us at <a href="mailto:contact@zephyops.com" class="text-primary underline">contact@zephyops.com</a></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
