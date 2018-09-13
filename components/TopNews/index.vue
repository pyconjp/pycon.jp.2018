<template lang="pug" src="./news.pug"/>

<script>
  import moment from "moment"

  export default {
    name: 'top-news',
    props: ['blog_data'],
    methods: {
      getDate(pubDate){
        return moment(pubDate, "dddd, DD MMM YYYY").format("YYYY/MM/DD(ddd)")
      }
    }
  }
</script>

<style src="./news.sass" lang="sass" />
