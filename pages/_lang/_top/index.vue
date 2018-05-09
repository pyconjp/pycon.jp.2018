<template lang="pug" src="./index.pug"/>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'top',
    computed: mapGetters({
      locale: 'locale'
    }),
    // mounted(){
    //   console.log(this.$store);
    // },
    head () {
      return {
        title: this.$t('top.title')
      }
    }
  }
</script>

<style scoped>

</style>