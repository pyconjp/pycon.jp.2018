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
      let tableHeader = document.getElementById('test')
      if(window.scrollY > (112+90)){
        const sLeft = el.scrollLeft
        tableHeader.scrollLeft = sLeft
      }else{
        //const tableHeader = document.getElementById('test')
        tableHeader.scrollLeft = 0
      }
    },
    fixedHead: function(evt, el) {
      let tableHeader = document.getElementById('test')
      if(window.scrollY > (112+89)){
        this.$data.isFixed = true
        const sLeft = el.scrollLeft
        tableHeader.scrollLeft = sLeft
      }else{
        this.$data.isFixed = false
        //const tableHeader = document.getElementById('test')
        tableHeader.scrollLeft = 0
      }
    }
  }
}
</script>
