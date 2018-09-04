<template src="./list.pug" lang="pug"/>
<style src="./list.sass" lang="sass" />

<script>
  import { mapGetters, mapActions } from 'vuex'
  import SessionSummary from '~/components/Event/SessionSummary'
  import SessionDetail from '~/components/Event/SessionDetail'

  export default {
    name: 'session-list',
    components: {
      SessionSummary,
      SessionDetail
    },
    data: () => {
      return{
        isFixed: false,
        currentTab: "talk",
        rooms: {
                "dayOne": ["ra","rb","rc","rd1","re","rf"],
                "dayTwo": ["ra","rb","rc","rd2","rd3","re","rf"]
        },
        currentSessionDetail: {
            category: "",
            session: "",
            date: "",
            no: ""
        }
      }
    },
    mounted(){
      this.FETCH_TALK()
      this.FETCH_POSTER()
    },
    computed: {
      ...mapGetters({
        "talks": "talk_array",
        "posters": "poster_array"
      })
    },
    methods:{
      ...mapActions({
        FETCH_TALK: "FETCH_TALK",
        FETCH_POSTER: "FETCH_POSTER"
      }),
      showDetail (category,session) {
        this.$data.currentSessionDetail.category = category
        this.$data.currentSessionDetail.session = session
        this.$data.currentSessionDetail.date = session.day
        this.$data.currentSessionDetail.no = session.no

        // show UIkit modal
        const uikit = require('uikit')
        uikit.modal('#modal-session').show()
      },
    }
  }
</script>
