<template lang='pug'>
article
  ArticleHeader(:article='article')
  ArticleContent(:article='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
