---
title: 'Reworking TNT: Thom's Nuxt Template without Nuxt'
description: 'Reconfiguring my Nuxt template module so that it also works with Vue.js'
authors:
  - Thom Bruce
date:
categories:
  - Journal
series:
  - My Process
tags:
  - Vue.js
  - NuxtJS
  - TNT
  - Dynamite
draft: true
---

If you don't already know, TNT is a work in progress Nuxt module I've been working on to simplify the setup of my Nuxt projects. It comes with TailwindCSS and DaisyUI, each with some pre-configurations so that things like theme-switching and CSS purging work. It also comes with the Nuxt Font Awesome module, my own Nuxt Taxonomies project, Lodash, Luxon and Pug... and it insists that Nuxt Content should be a peer dependency (meaning it doesn't install it itself, but your project would be expected to have it installed separately). So a lot of that is Nuxt-specific, but I would like to use Pug, Luxon, Lodash and Tailwind as common dependencies of my Vue projects too. And I would like many of the components I've written or will write for TNT to be available to Vue.js projects as well. What does this mean? Well... I'm going to have to do some rewriting. Ideally, I don't want to be maintaining two wholly distinct libraries to roughly do the same thing for two frameworks, particularly while the frameworks are very closely related. Instead... I either want one library that can be installed in projects of either framework, or I want my Nuxt-specific library to inherit from the Vue one, given that Nuxt is really just an extension of Vue. That's easier said than done. Like I said, this little library is heavily dependent on Nuxt at the moment. And it's possible we'll lose some of the desirable features of those Nuxt versions of libraries by replacing them with either packages made for just Vue instead, or general-purpose ones intended for any NPM-managed project. We'll have to ask the questions: What am I losing by replacing Nuxt Tailwind with just TailwindCSS? What am I losing by replacing Nuxt Font Awesome with Vue Font Awesome or with just Font Awesome? How do we reconcile the inclusion of Nuxt Taxonomies in Vue projects it's completely irrelevant to? If those losses are undesirable or even impermissible, what is the best approach to separate out Nuxt dependencies whilst keeping the core part of TNT's development in one place?

## Creating Dynamite

So, one small part of the reason I started TNT is that I thought such a template could ultimately be useful for creating websites for clients. It currently features two distinct styles of layout and, thanks to DaisyUI, more than a dozen themes. It's intended to be versatile, then. It's also intended to permit me to stop overthinking decisions about UI frameworks and CSS libraries. TailwindCSS makes every component very customisable, while DaisyUI provides a solid foundation for making those customisations. TNT, I thought, would be a strong starting point for any of my projects, whether it be a simple blogging website or a rich application dashboard. And honestly it's well on its way. But it's Nuxt dependent, and not all of my Vue projects will be Nuxt ones. At least I never intended for that to be the case, and now that I've reviewed how I might integrate a Vue or Nuxt frontend with a Rails backend... I don't think it can be. So, I need a new Vue project to play around with. For that, I'm going to make a start on Dynamite CMS, a sort of cousing to my TNT project - it's a content management system intended to work in particular with content websites created using TNT. We'll see if that intention remains the same as the project progresses, for now I just need a simple Vue application where I can play with my TNT template library. Let's create that...

```sh
vue create dynamite-ui
cd dynamite-ui
```

The `vue` command depends on Vue CLI being installed and runs an interactive menu allowing me to choose various options. Most of these aren't relevant to the discussion, except that I am specifically _not_ initialising the project with a CSS pre-processor. The project will be using TailwindCSS, PostCSS and - I think - PurgeCSS, which can't be installed that way. Plus, they will be part of TNT, not the parent project.

Here's what I'm thinking comes next...

```sh
yarn add --dev https://github.com/thombruce/tnt
```

This will install TNT, which I know I've said will be incompatible with Vue... but I don't really know just _how incompatible_ it will be. Maybe this way I can get a sense of what works, what doesn't, and what I need to change.

Predictably after running that command, there are a lot of things installed that I do not want. So I'm gonna jump on over to TNT...

```sh
cd ../tnt
git co -b vue
git push --set-upstream origin vue
```

I've also checked out a brand new branch called 'vue' and set the upstream branch on GitHub to this new branch. Not exactly what that means, but if you're unfamiliar with Git or version control at all... essentially now I can make as many modifications as I want without losing the previous state, which is saved as a separate branch on GitHub. Used properly, you always maintain a detailed history with version control meaning you can reset the project at any time to any previous point in time. It also facilitates collaboration, testing, etc. If you're a developer not using version control, start.

What next? Now I need to do what I just said and butcher TNT a little. Remove all the Nuxt dependencies and replace them with Vue or non-framework-specific ones.

The main script aside, the TNT project essentially consists of four folders: assets, components, layouts and plugins. Of these, assets and plugins should have no problems. We can incorporate their contents into a Vue project with relative ease. In my components and layouts folders, however... well, let's ignore layouts for now - it actually is Nuxt specific. The components folder, however, has several instances of `NuxtLink` and the `<Nuxt />` component being used. We can ignore the instances of the `<Nuxt />` component, as these are layout-specific, but those NuxtLinks do need to be addressed before the same components will work in Vue. That part's easy; for the most part, `NuxtLink` just becomes `RouterLink`... _I think that still works in Nuxt..._ But actually there are a lot of other problems with these components: uses of the `fetch()` hook, uses of Nuxt Content, Nuxt Taxonomies and some Nuxt variables. I don't want to sacrifice some of that, so I've made a decision...

There will at least be two directories (probably two separate libraries). One for Vue components, and one for Nuxt components. The Nuxt components will use, inherit from and extend the Vue ones with Nuxt functionality. The Vue ones will be more general purpose, unable to utilise some of Nuxt's features.

So we probably want to start a new project entirely. TNT should be general purpose, working for both Vue and Nuxt; a separate project, _Nuxt TNT_, should expand upon it. _Decision made!_

I've moved `@thombruce/tnt` to `@thombruce/nuxt-tnt` and have started a brand new project in the old namespace. The docs remain in the `@thombruce/tnt` repo, but other than that it is barebones at the moment. Time to start migrating some components and picking out our dependencies. I won't worry for now about having Nuxt TNT inherit from the new project - that can be left as an exercise for later. For now, I'm simply aiming to get some of that TNT goodness to work for Vue projects not using Nuxt.
