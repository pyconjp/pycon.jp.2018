<template lang="pug" src="./sponsor.pug" />

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'top-sponsor',
    mounted(){
      this.FETCH_SPONSOR()
      console.log(this.sponsor_array)
    },
    computed: {
      ...mapGetters([
        "sponsor_array"
      ])
    },
    methods: {
      ...mapActions({
        FETCH_SPONSOR: "FETCH_SPONSOR"
      })
    },
    data(){
      return {
        // Todo: 本番ではStoreからAPIのデータを取得
        // sponsor_array : [
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー1',
        //
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //   {
        //     link: '#',
        //     image: 'https://placehold.jp/190x100.png',
        //     alt: 'スポンサー2',
        //   },
        //
        // ]
      }
    }
  }
</script>
<style src="./sponsor.sass" lang="sass" />
