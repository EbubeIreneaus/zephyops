<template>
  <section class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <Breadcrumbs :items="[{ text: 'Home', to: '/' }, { text: 'Services' }]" />
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary">Services</h1>
        <p class="mt-3 text-slate-600 max-w-2xl mx-auto">End-to-end automation services: observability, data pipelines, AI workflows, and reporting.</p>
      </div>

      <div class="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <article class="p-6 bg-white rounded-lg border hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h3l3 8 4-16 3 8h4"></path></svg>
            </div>
            <div>
              <h3 class="font-semibold">Monitoring & Alerts</h3>
              <p class="mt-2 text-sm text-slate-600">Proactive observability: metrics, logs and anomaly detection with SLO-driven alerts and on-call playbooks.</p>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 3v4M8 3v4"></path></svg>
            </div>
            <div>
              <h3 class="font-semibold">Data Pipelines & Scraping</h3>
              <p class="mt-2 text-sm text-slate-600">Reliable ingestion and ETL: scalable crawlers, streaming pipelines, and schema-driven transforms with retries and observability.</p>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"></path><path d="M12 22v-6"></path><path d="M5 12h14"></path></svg>
            </div>
            <div>
              <h3 class="font-semibold">AI Workflows & Posting</h3>
              <p class="mt-2 text-sm text-slate-600">Controlled LLM orchestration: prompt templates, safety checks, caching and scheduled publishing across channels with review gates.</p>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v7H3z"></path><path d="M7 14h10v7H7z"></path></svg>
            </div>
            <div>
              <h3 class="font-semibold">Reporting & Dashboards</h3>
              <p class="mt-2 text-sm text-slate-600">Actionable dashboards and automated reports: KPIs, exports, and scheduled insights to demonstrate impact and ROI.</p>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14l2-2 2 2"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>
            </div>
            <div>
              <h3 class="font-semibold">Integrations & APIs</h3>
              <p class="mt-2 text-sm text-slate-600">Secure connectors and well-documented APIs for CRMs, CMS, analytics, and cloud services — with auth, retries and schema validation.</p>
            </div>
          </div>
        </article>

        <article class="p-6 bg-white rounded-lg border hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.2 4.2l1.4 1.4"></path><path d="M18.4 18.4l1.4 1.4"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <div>
              <h3 class="font-semibold">Managed Services</h3>
              <p class="mt-2 text-sm text-slate-600">Ongoing ops and support: monitoring, incident response, regular audits, and prioritized roadmap work under SLAs.</p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink to="/contact" class="inline-block bg-accent text-white px-6 py-3 rounded-lg shadow">Request a quote</NuxtLink>
      </div>
    </div>
  </section>
</template>
