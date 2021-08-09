---
title: Fountain
description: 'A JavaScript parser for the screenplay format Fountain.'
simpleIcons:
  - slug: javascript
    color: '#F7DF1E'
  - slug: vuedotjs
    color: '#4FC08D'
  - slug: nuxtdotjs
    color: '#00C58E'
---

<nuxt-img src='/uploads/code/fountain.png' sizes='sm:50vw md:20vw lg:20vw' class='mx-auto'></nuxt-img>

<fountain-screenplay>
<template>
INT. MUSIC ROOM - EVENING

CASSANDRA (CONT'D)
(sign language)
What are we going to do?

David pulls a leaf of paper from his pocket.

He flattens it out onto the music sheet holder of the piano.

DAVID
(sign language)
Ben's work. He's a little genius.

Ben's drawing displays David sketching and Cassandra playing the piano.

DAVID (CONT'D)
(sign language)
We'll put on a proper show for you.
</template>
</fountain-screenplay>

Add a title page:

<fountain-screenplay title>
<template>
Title: A Silent Musical
Credit: written by
Author: Thom Bruce
Draft Date: 2010-06-06
</template>
</fountain-screenplay>