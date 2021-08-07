<template lang='pug'>
header
  span.py-24
    NuxtLink(to='/') UNDEFINED
  .navbar
    nav
      NuxtLink(v-for='(item, i) in items' :key='i' :to='item.to')
        span {{ item.title }}
    TntUIThemeToggle
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Blog',
          to: '/blog'
        },
        {
          title: 'Credits',
          to: '/credits'
        }
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
header {
  @apply flex flex-col justify-center py-5 px-4;
  & > span:first-of-type {
    @apply block w-min m-auto text-5xl sm:text-7xl md:text-8xl text-base-content font-poster;
  }
  & > div {
    @apply flex justify-center;
  }
}
</style>