<template src="./detail.pug" lang="pug"/>
<style src="./detail.sass" lang="sass" />

<script>
  import sessionsMixin from '~/components/Event/mixins/sessionsMixin'
  export default {
    name: 'session-details',
    props: ['talk','date','no'],
    mixins: [sessionsMixin],
    computed: {
      dates () {
        let _day
        let _time
        if( this.date === 1 ){
          _day =  "2018-9-17"
          switch(this.no){
            case 1:
              _time = "13:30"
              break
            case 2:
              _time = "14:30"
              break
            case 3:
              _time = "15:45"
              break
            case 4:
              _time = "16:30"
              break
          }
        }else if( this.date === 2){
          _day =  "2018-9-18"
          switch(this.no){
            case 1:
              _time = "11:15"
              break
            case 2:
              _time = "13:30"
              break
            case 3:
              _time = "14:30"
              break
            case 4:
              _time = "15:45"
              break
            case 5:
              _time = "16:30"
              break
          }
        }
        return _day + " " + _time
      },
      abstract() {
        return (this.talk && this.talk.hasOwnProperty('abstract') && this.talk.abstruct !="" ) ?  this.talk.abstract : "-"
      },
      profile() {
        return (this.talk && this.talk.hasOwnProperty('profile') && this.talk.profile !="" ) ?  this.talk.profile : "-"
      },
      description() {
        return (this.talk && this.talk.hasOwnProperty('description') && this.talk.description !="" ) ?  this.talk.description : "-"
      },
      slide_langage() {
        return (this.talk && this.talk.hasOwnProperty('lang_of_slide') && this.talk.lang_of_slide !="" ) ?  this.talk.lang_of_slide : "-"
      },
      tags() {
        let tags = []
        if(this.talk && this.talk.hasOwnProperty('tags')){
            let tagStr = String(this.talk.tags)
            tags = tagStr.split(',')
            if(Object.keys(tags).length <= 0 || tags[0] === ""){
               tags = false
              }
        }
        return tags
      }
    },
    methods: {
      showDescription() {
        this.more = !this.more
      }
    }
  }
</script>
