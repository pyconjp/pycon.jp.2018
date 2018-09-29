<template lang="pug" src="./sponsor.pug" />

<script>
  import { mapGetters, mapActions } from 'vuex'
  import sponsors from '~/static/sponsor/data.json'
  export default {
    name: 'top-sponsor',
    computed: {
      top_sponsor_array(){
        // 重複の削除
        const data = sponsors.data
        let _data = [], names = []
        data.forEach( function ( item ) {
          if ( names.indexOf( item.distinctName ) === -1 && item.package) {
            _data.push(item)
          }
          names.push( item.distinctName )
        })
      return _data
      }
    },
    methods: {
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
    }
  }
</script>

<style src="./sponsor.sass" lang="sass" />
