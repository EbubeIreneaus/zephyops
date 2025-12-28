<template>
  <section aria-labelledby="faq-heading" class="py-12 bg-white" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2 id="faq-heading" class="text-3xl font-extrabold text-primary">Frequently Asked Questions</h2>
        <p class="mt-2 text-slate-600">Clear, concise answers to the common questions our clients ask.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="(item, idx) in left" :key="idx">
          <details class="group bg-slate-50 p-4 rounded-lg border border-slate-100" :open="idx===0">
            <summary class="flex items-center justify-between cursor-pointer list-none text-slate-900 font-medium">
              <span>{{ item.q }}</span>
              <svg class="w-5 h-5 text-primary transform transition-transform" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </summary>
            <div class="mt-3 text-slate-700">
              {{ item.a }}
            </div>
          </details>
        </div>

        <div v-for="(item, idx) in right" :key="idx">
          <details class="group bg-slate-50 p-4 rounded-lg border border-slate-100">
            <summary class="flex items-center justify-between cursor-pointer list-none text-slate-900 font-medium">
              <span>{{ item.q }}</span>
              <svg class="w-5 h-5 text-primary transform transition-transform" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </summary>
            <div class="mt-3 text-slate-700">
              {{ item.a }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  { q: 'How quickly can you launch an automation project?', a: 'Typical timelines depend on scope; a targeted proof-of-value can be delivered in 2–4 weeks, while larger end-to-end systems often take 2–3 months with staged milestones.' },
  { q: 'What industries do you work with?', a: 'We serve a wide range of sectors including e-commerce, finance, marketing, media, and logistics — any team that benefits from reliable data and repeatable workflows.' },
  { q: 'Do you provide ongoing support?', a: 'Yes — we offer 24/7 monitoring and support plans, SLA-backed alerts, and optional managed services to keep automations healthy.' },
  { q: 'How do you handle data privacy and compliance?', a: 'We design systems with security and least-privilege access in mind, provide encryption in transit and at rest, and can comply with GDPR/industry-specific requirements as needed.' },
  { q: 'What does pricing look like?', a: 'Pricing follows a value-based model: initial scoping defines deliverables and recurring support; we provide transparent fixed quotes for projects and clear tiered support plans.' },
  { q: 'Which technologies do you use?', a: 'We use robust, widely-supported tools — Python, Node.js, orchestration platforms, and LLM integrations where appropriate — chosen to meet reliability and scalability goals.' },
  { q: 'Can you integrate with our existing systems?', a: 'Absolutely — integrations are a core capability. We design secure connectors and automated flows to work with CRMs, CMS, analytics, and cloud services.' },
  { q: 'Will you train our team to operate the automations?', a: 'Yes. We provide documentation, runbooks, and hands-on training sessions so your team can maintain and evolve automations confidently.' },
  { q: 'How do you measure success?', a: 'We define metrics up-front (time saved, error reduction, throughput) and deliver dashboards and scheduled reports so ROI is visible from day one.' },
  { q: 'What if requirements change?', a: 'We build iteratively with clear change processes; small pivots are absorbed into sprints and larger scope changes are handled through agreed change requests.' }
];

// split into two columns for layout balance
const mid = Math.ceil(faqs.length / 2);
const left = faqs.slice(0, mid);
const right = faqs.slice(mid);
</script>

<style scoped>
details[open] summary svg{ transform: rotate(180deg); }
summary::-webkit-details-marker{ display:none }
</style>
