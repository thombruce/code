---
title: My Vue Frontend
description: 'Building out a frontend application using Vue.js before integrating with a Ruby on Rails application.'
authors:
  - Thom Bruce
date:
categories:
  - Journal
series:
  - My Process
tags:
draft: true
---

So, before I dive in headfirst to create the backend I actually want to explore the frontend a little first. My hope was to use Nuxt so that I could benefit from my [TNT](https://thombruce.github.io/tnt) package, but I think that's a non-starter. It will be easier to integrate a more barebones Vue application into my Ruby on Rails app than a Nuxt one. I will revisit TNT and see if I can make it Vue-compatible too, because I don't want to lose the features I've worked hard on there. But first, the frontend UI application. Let's get started...

```sh
vue create dynamite-ui
```

This starts an interactive menu, and I'm going to manually select the features I want. We'll leave the defaults in place: `Babel` and `Linter / Formatter`. But I'll also select `Progressive Web App (PWA) Support`, `Router` and `Vuex` since I know I typically want these a ways down the line. We'll avoid `Typescript`, `CSS Pre-processors` and the testing options for the time being. I'll be using TailwindCSS, which works with PostCSS and this is always active by default I think. As for testing... I just can't decide between `Mocha + Chai` and `Jest`. I'm leaning towards `Jest` but we'll consider it a bit later.

In the next step, we'll say `Y`es to history mode.

We're going to go with `ESLint + Standard Config` because I like Standard JS a lot.

We'll `Lint on save` and use dedicated config files. And sure, we'll save this as a preset; call it... 'Barebones UI'.

Okay, so that generates the project. We can now jump into the freshly generated directory...

```sh
cd dynamite-ui
```
