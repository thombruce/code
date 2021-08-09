---
title: Playfair
description: 'A charts library for Vue.js'
simpleIcons:
  - slug: javascript
    color: '#F7DF1E'
  - slug: vuedotjs
    color: '#4FC08D'
  - slug: nuxtdotjs
    color: '#00C58E'
  - slug: chartdotjs
    color: '#FF6384'
---

<div class='w-72 mx-auto my-5'>
  <playfair-bar-chart :labels='[`One`, `Two`, `Three`]' :datasets='[{ label: `Data`, backgroundColor: [`#EF4444`, `#3B82F6`, `#10B981`], data: [40, 20, 12] }]'></playfair-bar-chart>
</div>

Playfair is a chart library for Vue.js and Nuxt. Currently it's just a very simple wrapper around vue-chartjs which I would recommend using instead for the time being. Soon, though, I want to remove that dependency and the dependency on Chart.js; I want to reproduce the charts already supported and extend this library even further with D3.js.