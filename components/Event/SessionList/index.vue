<template src="./list.pug" lang="pug"/>

<script>
  export default {
    name: 'session-list',
    mounted() {
      this.logkit()
    },
    beforeDestroy(){
      console.log("before destroy")
    },
    destroyed(){
      console.log("destroyed")
    },
    methods: {
      logkit: () => {
        const uikit = require('uikit')
        uikit.util.on('#modal-session','show',function(){
            console.log("hoge modal")
          })
      }
    }
  }
</script>

<style src="./list.sass" lang="sass" />
