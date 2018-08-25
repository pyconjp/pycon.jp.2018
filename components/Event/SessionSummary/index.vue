<template src="./summary.pug" lang="pug"/>
<style src="./summary.sass" lang="sass" />
<script>
  export default {
    name: 'session-summary',
    props: ['talk'],
    computed: {
      langage() {
        return (this.talk && this.talk.hasOwnProperty('lang')) ?  this.talk.lang : ""
      },
      room() {
        return (this.talk && this.talk.hasOwnProperty('room')) ?  this.talk.room : ""
      },
      talk_format() {
        return (this.talk && this.talk.hasOwnProperty('talk_format')) ?  this.talk.talk_format + "min" : ""
      },
      title() {
        return (this.talk && this.talk.hasOwnProperty('title')) ?  this.talk.title : ""
      },
      name() {
        return (this.talk && this.talk.hasOwnProperty('name')) ?  this.talk.name : ""
      },
      tags() {
        let tags = []
        if(this.talk && this.talk.hasOwnProperty('tags')){
            let tagStr = this.talk.tags
            tags = tagStr.split(',')
        }
        return tags
      }
    }
  }
</script>
