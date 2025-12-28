<template>
  <section class="relative overflow-hidden" data-aos="fade-up">
    <div class="absolute inset-0 bg-linear-to-r from-white via-slate-50 to-slate-100"></div>
    <div class="absolute -left-32 -top-20 w-96 h-96 rounded-full bg-accent opacity-10 blur-3xl"></div>
    <div class="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary opacity-8 blur-2xl"></div>

    <div class="relative max-w-6xl mx-auto px-4 py-10 lg:py-14 grid gap-8 lg:grid-cols-2 items-center">
      <div class="lg:pr-6">
        <h1 class="text-3xl sm:text-4xl capitalize leading-tight font-extrabold text-primary" data-aos="fade-right">We build AI automations that move your business forward</h1>
        <p class="mt-6 text-lg text-slate-700 max-w-xl">From monitoring and scraping to AI-driven content workflows and scheduled reporting — we design reliable, secure automations that free your team to focus on higher-value work.</p>

        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink to="/contact" class="inline-block bg-accent text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">Get a free consult</NuxtLink>
          <NuxtLink to="/services" class="inline-block border border-slate-200 px-6 py-3 rounded-lg text-slate-800 hover:bg-slate-50 transition">Explore services</NuxtLink>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-4 max-w-md" data-aos="fade-left">
          <div class="flex items-center gap-3">
            <div class="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center">⚙️</div>
            <div>
              <div class="font-semibold">Reliable systems</div>
              <div class="text-sm text-slate-600">Engineered for uptime and observability</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="bg-accent/10 text-accent w-10 h-10 rounded-full flex items-center justify-center">🤖</div>
            <div>
              <div class="font-semibold">AI-first workflows</div>
              <div class="text-sm text-slate-600">Practical LLM integrations for content and insights</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end" data-aos="zoom-in">
        <div class="w-full max-w-md transform transition hover:scale-102">
          <img src="/hero-illustration.svg" alt="Illustration showing automation flows and nodes" class="w-full rounded-xl shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-10" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div class="lg:w-1/2">
          <AboutLottie class="rounded-lg" src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json" />
        </div>
        <div class="lg:w-1/2">
          <h2 class="text-2xl font-bold text-primary">We automate tasks — so you can focus on what matters.</h2>
          <p class="mt-4 text-slate-700">At ZephyOps we design and deliver automation systems that reduce manual work and speed up decision-making. Our engineering-first approach ensures automations are reliable, observable, and maintainable.</p>
          <p class="mt-3 text-slate-700">We combine data pipelines, scraping, AI content workflows and integrations to create end-to-end solutions — from monitoring and alerts to scheduled reporting and social posting.</p>

          <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-slate-700">24/7 monitoring & support</span>
            </li>
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              <span class="text-slate-700">Custom integrations & workflows</span>
            </li>
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18"/></svg>
              <span class="text-slate-700">Automated reporting & dashboards</span>
            </li>
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.657.895-3 2-3s2 1.343 2 3-1 3-2 3-2-1.343-2-3z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2"/></svg>
              <span class="text-slate-700">Security and compliance minded</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-12" data-aos="fade-up">
    <div class="relative overflow-hidden rounded-xl">
      <img src="/why-bg.svg" alt="decorative background" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60"></div>
      <div class="relative max-w-6xl mx-auto px-4 py-20 text-white">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl font-extrabold drop-shadow">Why choose ZephyOps</h2>
            <h3 class="mt-4 text-xl font-semibold drop-shadow">We automate tasks — so you can focus on what matters.</h3>
            <p class="mt-4 text-white">ZephyOps crafts automation solutions that remove repetitive work and cut operational risk. We apply engineering best-practices to automation design so your systems remain reliable and easy to iterate on.</p>
            <p class="mt-3 text-white">From data collection and monitoring to AI-driven content workflows and reporting, our team builds end-to-end automations tailored to your business goals. We prioritize observability, security, and maintainability so automations deliver lasting value.</p>
            <p class="mt-3 text-white">Working with ZephyOps means faster outcomes, fewer manual steps, and a partner that treats automation as a long-term investment in your operations.</p>
            <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white">
              <li class="flex items-start gap-3"><span class="font-semibold">100+</span><span>Happy clients</span></li>
              <li class="flex items-start gap-3"><span class="font-semibold">100+</span><span>Completed projects</span></li>
              <li class="flex items-start gap-3"><span class="font-semibold">24/7</span><span>Monitoring & support</span></li>
              <li class="flex items-start gap-3"><span class="font-semibold">99%</span><span>Client satisfaction</span></li>
            </ul>
          </div>

          <div class="space-y-4">
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <div class="text-4xl font-extrabold">100+</div>
              <div class="text-sm mt-1">Happy clients</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <div class="text-4xl font-extrabold">100+</div>
              <div class="text-sm mt-1">Completed projects</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <div class="text-3xl font-extrabold">24/7</div>
              <div class="text-sm mt-1">Support</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <div class="text-3xl font-extrabold">99%</div>
              <div class="text-sm mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <div>
        <div class="text-center">
          <h2 class="text-2xl font-semibold">What we do</h2>
          <p class="mt-2 text-sm text-slate-600 max-w-xl mx-auto">We design engineering-grade automations that reliably deliver business outcomes — from resilient data pipelines to AI-driven content workflows and operational reporting.</p>
        </div>
      </div>

      <div class="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <article class="p-6 bg-white rounded-lg border hover:shadow-lg transition group" data-aos="fade-up">
          <div class="flex flex-col items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9" stroke-width="1.5"/></svg>
            </div>

            <div class="flex-1">
              <h3 class="font-semibold text-lg">Monitoring & Alerts</h3>
              <p class="mt-2 text-sm text-slate-600">Continuous observability with tuned alerts so issues are caught and resolved fast.</p>
              <ul class="mt-3 text-sm text-slate-500 space-y-1">
                <li>Uptime & anomaly detection</li>
                <li>Custom routing & escalation</li>
              </ul>
              <NuxtLink to="/services#monitoring" class="mt-4 inline-block text-sm font-medium text-primary hover:underline">Learn more →</NuxtLink>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg transition group" data-aos="fade-up" data-aos-delay="80">
          <div class="flex flex-col items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 3v4"/></svg>
            </div>

            <div class="flex-1">
              <h3 class="font-semibold text-lg">Data Pipelines & Scraping</h3>
              <p class="mt-2 text-sm text-slate-600">Reliable extraction, transformation and delivery of clean data for analysis and automation.</p>
              <ul class="mt-3 text-sm text-slate-500 space-y-1">
                <li>Resilient ingestion & retries</li>
                <li>Normalized, schema-driven outputs</li>
              </ul>
              <NuxtLink to="/services#scraping" class="mt-4 inline-block text-sm font-medium text-primary hover:underline">Learn more →</NuxtLink>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg transition group" data-aos="fade-up" data-aos-delay="160">
          <div class="flex flex-col items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 10-8 0v4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 21h14v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2z"/></svg>
            </div>

            <div class="flex-1">
              <h3 class="font-semibold text-lg">AI Workflows & Integrations</h3>
              <p class="mt-2 text-sm text-slate-600">Practical LLM integrations and workflow automation that reduce manual content work.</p>
              <ul class="mt-3 text-sm text-slate-500 space-y-1">
                <li>Controlled LLM prompts & validation</li>
                <li>Scheduling, signing & cross-posting</li>
              </ul>
              <NuxtLink to="/services#ai-posting" class="mt-4 inline-block text-sm font-medium text-primary hover:underline">Learn more →</NuxtLink>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg transition group" data-aos="fade-up" data-aos-delay="240">
          <div class="flex flex-col items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18h18"/><rect x="6" y="10" width="4" height="7" rx="1"/><rect x="12" y="6" width="4" height="11" rx="1"/></svg>
            </div>

            <div class="flex-1">
              <h3 class="font-semibold text-lg">Reporting & Dashboards</h3>
              <p class="mt-2 text-sm text-slate-600">Actionable reports and dashboards so stakeholders get the insights they need on schedule.</p>
              <ul class="mt-3 text-sm text-slate-500 space-y-1">
                <li>Scheduled reporting & exports</li>
                <li>Custom dashboards & alerts</li>
              </ul>
              <NuxtLink to="/services#reporting" class="mt-4 inline-block text-sm font-medium text-primary hover:underline">Learn more →</NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <Testimonials />
  <FAQ />
</template>

<script setup>
const title = 'ZephyOps — AI Automation & Workflow Engineering'
const description = 'ZephyOps designs engineering-grade AI automations, data pipelines, monitoring, and reporting to help teams save time and scale operations.'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://zephyops.com/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://zephyops.com/og-image.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://zephyops.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ZephyOps",
        "url": "https://zephyops.com",
        "logo": "hhttps://zephyops.com/logo.png",
        "sameAs": [
          "https://twitter.com/zephyops",
          "https://www.linkedin.com/company/zephyops",
          "https://www.facebook.com/zephyops"
        ]
      })
    }
  ]
})
</script>