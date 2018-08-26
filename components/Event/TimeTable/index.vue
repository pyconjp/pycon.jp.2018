<template src="./table.pug" lang="pug"/>
<style src="./table.sass" lang="sass" />

<script>
import { mapGetters, mapActions } from 'vuex'
import SessionSummary from '~/components/Event/SessionSummary';

export default {
  name: 'time-table',
  data: () => {
    return{
      isFixed: false,
      currentTab: "day-1",
      rooms: {
              "dayOne": ["ra","rb","rc","rd1","re","rf"],
              "dayTwo": ["ra","rb","rc","rd2","rd3","re","rf"]
              }
    }
  },
  components: {
    SessionSummary,
  },
  mounted(){
    this.FETCH_TALK()
  },
  computed: {
    ...mapGetters({
      "talks": "talk_array",
    })
  },
  methods:{
    ...mapActions({
      FETCH_TALK: "FETCH_TALK"
    }),
    getTracks (day,no,room) {
      let currentDayTracks = this.talks.filter( (item, index) => {
                                                if(parseInt(item.day) === parseInt(day)) return true
                                                })
      if(currentDayTracks[0]){
          return currentDayTracks.filter( (track) => {
                                          if(parseInt(track.no) === parseInt(no)  && String(track.room_id) === String(room) ) return true
                                          })[0]
      }
      return ""
    },
    changeTab (evt) {
      this.$data.currentTab = evt.currentTarget.getAttribute('data-tab')
    },
    parallelScroll (evt, el) {
      let tableHeader = this.$refs[this.$data.currentTab]
      if(tableHeader != undefined) {
        if(window.scrollY > (112+90)){
          const sLeft = el.scrollLeft
          tableHeader.scrollLeft = sLeft
        }else{
          tableHeader.scrollLeft = 0
        }
      }
    },
    fixedHead (evt, el) {
      let tableHeader = this.$refs[this.$data.currentTab]
      let windowWidth = window.innerWidth
      if(tableHeader != undefined){
        if(windowWidth > 640 && (window.scrollY > (112+89)) ){
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
}
</script>
