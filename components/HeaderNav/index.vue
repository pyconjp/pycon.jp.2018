<template src="./header.pug" lang="pug"/>

<script>
  export default {
    name: 'header',
    methods: {
      isActive (route_name) {
        // console.log(this.$nuxt.$route.name);
        // const _route_name = this.$nuxt.$route.name
        return (this.$i18n.local !== 'en')? this.$nuxt.$route.name === route_name : (()=>{
          const _route_name = (route_name === 'index')? "lang-top" : "lang-" + route_name
          return this.$nuxt.$route.name === _route_name
        })()
      },
      getLangPath () {
        return (this.$i18n.locale === 'en')?　this.$route.fullPath.replace(/^\/[^\/]+/, '') : `/en` + this.$route.fullPath;
      },
    }
  }
</script>