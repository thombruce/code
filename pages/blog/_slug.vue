<template lang='pug'>
div
  ArticlePage(v-if='!Array.isArray(article)' :article='article')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    div
      article(v-for='term in article')
        header
          h2
            NuxtLink(:to='{ name: `blog-taxonomy-term`, params: { taxonomy: slug, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  async asyncData({ $content, params, store }) {
    const slug = params.slug

    const article = await $content('blog', slug)
      .fetch()
      .catch(async () => {
        const terms = await store.dispatch('blog/taxonomies/all', { taxonomy: slug })
        return terms
      })

    return { slug, article }
  }
}
</script>
