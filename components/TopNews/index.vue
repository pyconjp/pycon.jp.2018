<template lang="pug" src="./news.pug"/>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { FETCH_PYCON_JP_BLOG_ATOM } from '../../store/mutation-types'

  export default {
    name: 'top-news',
    props: {
      blog_data: {
        type: Object,
        default: {}
      }
    }
    // mounted () {
    //   this.FETCH_PYCON_JP_BLOG_ATOM()
    // },
    // methods: {
    //   ...mapActions([
    //     FETCH_PYCON_JP_BLOG_ATOM
    //   ])
    // }
  }
</script>
