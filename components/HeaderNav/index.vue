<template src="./header.pug" lang="pug" />

<script>
  export default {
    name: 'header',
    methods: {
        isActive(route_name){
          return this.$nuxt.$route.name === route_name
        }
    }
  }
</script>