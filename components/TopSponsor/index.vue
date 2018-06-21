<template lang="pug" src="./sponsor.pug" />

<script>
  export default {
    name: 'top-sponsor',
    data(){
      return {
        // Todo: 本番ではStoreからAPIのデータを取得
        sponsor_array : [
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー1',

          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          {
            link: '#',
            image: 'https://placehold.jp/190x100.png',
            alt: 'スポンサー2',
          },
          
        ]
      }
    }
  }
</script>
<style src="./sponsor.sass" lang="sass" />
