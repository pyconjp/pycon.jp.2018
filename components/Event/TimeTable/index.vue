<template src="./table.pug" lang="pug"/>

<script>
  export default {
    name: 'time-table',
    data () {
      return {
        isFixed: false,
      }
    },
    methods:{
      parallelScroll: function (evt, el) {
           const tableHeader = document.getElementById('test')
           const sLeft = el.scrollLeft
           tableHeader.scrollLeft = sLeft
      }
    }
  }
</script>

<style src="./table.sass" lang="sass" />
