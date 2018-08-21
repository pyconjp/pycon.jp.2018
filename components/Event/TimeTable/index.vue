<template src="./table.pug" lang="pug"/>
<style src="./table.sass" lang="sass" />

<script>
export default {
  name: 'time-table',
  data: () => {
    return{
      isFixed: false,
    }
  },
  methods:{
    parallelScroll: function (evt, el) {
      let tableHeader
      if( document.getElementById("day-1-rooms") != null ){
          tableHeader = document.getElementById("day-1-rooms")
      }else {
          tableHeader = document.getElementById("day-2-rooms")
      }      
      if(window.scrollY > (112+90)){
        const sLeft = el.scrollLeft
        tableHeader.scrollLeft = sLeft
      }else{
        tableHeader.scrollLeft = 0
      }
    },
    fixedHead: function(evt, el) {
      let tableHeader
      if( document.getElementById("day-1-rooms") != null ){
          tableHeader = document.getElementById("day-1-rooms")
      }else {
          tableHeader = document.getElementById("day-2-rooms")
      }
      if(window.scrollY > (112+89)){
        this.$data.isFixed = true
        const sLeft = el.scrollLeft
        tableHeader.scrollLeft = sLeft
      }else{
        this.$data.isFixed = false
        tableHeader.scrollLeft = 0
      }
    }
  }
}
</script>
