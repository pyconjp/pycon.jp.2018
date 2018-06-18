<template lang="pug">
    div
        global-header
        nuxt
        //global-footer
</template>
<script>
  import GlobalHeader from '../components/GlobalHeader'
  // import GlobalFooter from '../components/GlobalFooter'

  export default {
    name: 'default',
    components: {
      GlobalHeader,
      // GlobalFooter
    }
  }
</script>
