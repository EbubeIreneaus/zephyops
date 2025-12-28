<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs :items="[{ text: 'Home', to: '/' }, { text: 'About' }]" />
      <div class="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-primary">About ZephyOps</h1>
          <p class="mt-6 text-xl text-slate-700 leading-relaxed">We design engineering-grade AI automations and workflows that reduce manual work, surface insights faster, and scale operations.</p>
          <p class="mt-4 text-lg text-slate-700 leading-relaxed">Our team blends software engineering, data engineering, and practical ML/LLM integrations to deliver reliable, observable systems tailored to your business goals.</p>
          <div class="mt-6">
            <NuxtLink to="/contact" class="inline-block bg-accent text-white px-6 py-3 rounded-lg shadow">Work with us</NuxtLink>
          </div>
        </div>

        <div>
          <img src="/about-illustration.svg" alt="About - automation illustration" class="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <div class="p-6 bg-slate-50 rounded-lg">
          <h3 class="font-semibold">Mission</h3>
          <p class="mt-3 text-base text-slate-700">Our mission is to help engineering organizations reclaim time and reduce operational risk through practical, engineering-first automation. We build systems that automate repetitive work, enforce best practices, and deliver measurable business outcomes — from faster incident response to reduced manual reporting overhead.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-lg">
          <h3 class="font-semibold">Vision</h3>
          <p class="mt-3 text-base text-slate-700">We envision a future where teams focus on high-leverage engineering work while robust automation handles routine operations. By combining reliable data pipelines, strong observability, and safe AI-assisted workflows, organizations can scale confidently without proportionally increasing headcount or technical debt.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-lg">
          <h3 class="font-semibold">Approach</h3>
          <p class="mt-3 text-base text-slate-700">We follow a three-phase approach: discovery (map current workflows, identify bottlenecks, and quantify ROI), design & iterate (prototype minimally invasive automations, instrumenting observability and safety checks), and operate & improve (handover runbooks, monitoring, and continuous improvement loops). Our priorities are security, testability, and clear rollback paths so automation is an asset, not a liability.</p>
        </div>
      </div>
    </div>
  </section>
</template>

