<template lang='pug'>
header.py-4
  NuxtImg(v-if='article.image' :src='article.image' width='100vw')

  dl.inline-block.mr-3(v-if='article.categories')
    dt.hidden Categories
    dd(v-for='category in article.categories')
      NuxtLink(:to='`/blog/categories/${parameterize(category)}`') {{ category }}

  dl.inline-block.mr-3(v-if='article.series')
    dt.hidden Series
    dd(v-for='series in article.series')
      NuxtLink(:to='`/blog/series/${parameterize(series)}`') {{ series }}

  h1 {{ article.title }}

  dl.inline-block.mr-3(v-if='article.tags')
    dt.hidden Tags
    dd.inline-block.mr-2(v-for='tag in article.tags')
      NuxtLink(:to='`/blog/tags/${parameterize(tag)}`') {{ tag }}

  time.block(:datetime='article.createdAt') {{ article.createdAt }}
</template>

<script>
import { kebabCase } from 'lodash'

export default {
  props: ['article'],

  methods: {
    parameterize (term) {
      return kebabCase(term)
    }
  }
}
</script>
