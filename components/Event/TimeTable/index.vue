<template src="./table.pug" lang="pug"/>
<style src="./table.sass" lang="sass" />

<script>
export default {
  name: 'time-table',
  data: () => {
    return{
      isFixed: false,
      currentTab: "day-1",
    }
  },
  methods:{
    changeTab: function (evt) {
      this.$data.currentTab = evt.currentTarget.getAttribute('data-tab')
    },
    parallelScroll: function (evt, el) {
      let tableHeader = this.$refs[this.$data.currentTab]
      if(window.scrollY > (112+90)){
        const sLeft = el.scrollLeft
        tableHeader.scrollLeft = sLeft
      }else{
        tableHeader.scrollLeft = 0
      }
    },
    fixedHead: function(evt, el) {
      let tableHeader = this.$refs[this.$data.currentTab]
      if(tableHeader && (window.scrollY > (112+89))){
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
