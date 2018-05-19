<template src="./header.pug" lang="pug"/>

<script>
  // import { mapGetters } from 'vuex'

  export default {
    name: 'header',
    // computed: mapGetters({
    //   locale: 'locale'
    // }),
    methods: {
      isActive (route_name) {
        return this.$nuxt.$route.name === route_name
      },
      getLangPath () {
        // $nuxt.$route.path
        return (this.$i18n.locale === 'en')?　this.$route.fullPath.replace(/^\/[^\/]+/, '') : `/en` + this.$route.fullPath;
        // if(this.locale === 'en')
      },
    }
  }
</script>