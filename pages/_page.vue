<template lang='pug'>
article
  header
    // TODO: NuxtImg(v-if='page.image' :src='page.image' width='100vw')
    h1 {{ page.title }}
    time(:datetime='page.createdAt') {{ page.createdAt }}

  div
    NuxtContent(:document='page')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.page).fetch()

    return { page }
  }
}
</script>
