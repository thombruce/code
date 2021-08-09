<template lang='pug'>
article
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('work', params.section)
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(() => {})

    return { articles }
  }
}
</script>
