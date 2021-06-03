<template lang='pug'>
article
  div
    article(v-for='article in articles')
      header
        h2
          NuxtLink(:to='article') {{ article.title }}
        time(:datetime='article.createdAt') {{ article.createdAt }}
      div
        p {{ article.description }}
  footer.hidden
    NuxtLink(v-for='page in pages' :key='page.slug' :to='page') {{ page.title }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = await $content()
      .fetch()

    const articles = await $content('')
      .sortBy('createdAt', 'desc')
      .fetch()

    return { pages, articles }
  }
}
</script>
