<template src="./summary.pug" lang="pug"/>
<style src="./summary.sass" lang="sass" />
<script>
  import sessionsMixin from '~/components/Event/mixins/sessionsMixin'
  export default {
    name: 'session-summary',
    props: ['session','category','isList'],
    mixins: [sessionsMixin],
    computed: {
      language () {
        if(!this.isList){
          return (this.session && this.session.hasOwnProperty('lang_of_talk') && this.session.lang_of_talk !="" ) ?  this.session.lang_of_talk : "-"
        }else{
          let _lang = ""
          if (this.session && this.session.hasOwnProperty('lang_of_talk') && this.session.lang_of_talk !="" ){
              _lang = this.session.lang_of_talk
              if(_lang == "ja") {
                _lang = this.$i18n.t("event.conference.language.japanese")
              }else if(_lang  == "en"){
                _lang = this.$i18n.t("event.conference.language.english")
            }
          }
          return _lang
        }
        return ""
      },
      dates () {
        if(this.category === "talk"){
          let _day
          let _time
          console.log(this.session)
          if( this.session.day === 1 ){
            _day =  "2018-9-17"
            switch(this.session.no){
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
          }else if( this.session.day === 2){
            _day =  "2018-9-18"
            switch(this.session.no){
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
        }
        return ""
      }
    },
    methods: {
      toModal() {
        this.$emit('summary-event')
      }
    }
  }
</script>
