<template lang="pug" src="./sponsor.pug" />

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'top-sponsor',
    mounted(){
      this.FETCH_TOP_SPONSOR()
    },
    computed: {
      ...mapGetters([
        "top_sponsor_array",
        "top_sponsor_loading"
      ])
    },
    methods: {
      ...mapActions({
        FETCH_TOP_SPONSOR: "FETCH_TOP_SPONSOR"
      }),
      getImagePath(path){
        let _path
          if( path != undefined && path != "" ){
              _path = require('~/assets/img/sponsor/' + path)
          }else{
              _path = require('~/assets/img/noImage.png')
          }
        return _path
      },
      showSponsorName(path){
        let _show = false
          if( path != undefined && path != "" ){
              _show = true
          }
        return _show
      }
    },
    data(){
      return {}
    }
  }
</script>

<style src="./sponsor.sass" lang="sass" />
