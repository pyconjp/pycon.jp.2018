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
      this.FETCH_LT()
    },
    destroyed(){
      // !uikitのmodalを利用すると閉じたあとnodeの位置が変ってしまい、ページ遷移の度に元の位置にあった分のコンポーネントがロードされてしまうのでdestroyedの度に場外（になってるはず）のmodalを殺しておく。
      let _modal = document.getElementById("modal-session")
      if(_modal != undefined) _modal.remove()
    },
    computed: {
      ...mapGetters({
        "talks": "talk_array",
        "posters": "poster_array",
        "lts": "lt_array"
      })
    },
    methods:{
      ...mapActions({
        FETCH_TALK: "FETCH_TALK",
        FETCH_POSTER: "FETCH_POSTER",
        FETCH_LT: "FETCH_LT"
      }),
      showDetail (category,session) {
        this.$data.currentSessionDetail.category = category
        this.$data.currentSessionDetail.session = session
        this.$data.currentSessionDetail.date = session.day
        this.$data.currentSessionDetail.no = session.no

        // show UIkit modal
        const uikit = require('uikit')
        uikit.modal('#modal-session').show()
      }
    }
  }
</script>
