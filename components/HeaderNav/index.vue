<template src="./header.pug" lang="pug"/>

<script>
  export default {
    name: 'header',
    methods: {
      isActive (route_name) {
        return this.$nuxt.$route.name === route_name
      },
      getLangPath () {
        return (this.$i18n.locale === 'en')?　this.$route.fullPath.replace(/^\/[^\/]+/, '') : `/en` + this.$route.fullPath;
      },
    }
  }
</script>