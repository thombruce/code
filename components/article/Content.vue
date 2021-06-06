<template lang='pug'>
div
  aside
    h2.mb-2 Table of Contents
    TntUITableOfContents(:toc='article.toc')
  hr.my-3
  NuxtContent(:document='article')
</template>

<script>
export default {
  props: ['article']
}
</script>
