<template lang='pug'>
article
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('work', { deep: true })
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(() => {})

    return { articles }
  }
}
</script>
