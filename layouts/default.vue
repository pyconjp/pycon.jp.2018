<template lang="pug">
    div
        header-nav
        nuxt
        //common-footer
</template>
<script>
  import HeaderNav from '../components/HeaderNav'
  // import CommonFooter from '../components/CommonFooter'

  export default {
    name: 'default',
    components: {
      HeaderNav,
      // CommonFooter
    }
  }
</script>