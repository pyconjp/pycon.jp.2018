<template lang="pug" src="./index.pug"/>

<script>
  import { mapGetters } from 'vuex'
  import TopHero from '~/components/TopHero'
  import TopKeyNote from '~/components/TopKeyNote'
  import TopNews from '~/components/TopNews'
  import TopPlace from '~/components/TopPlace'
  import TopOther from '~/components/TopOther'
  import TopSponsor from '~/components/TopSponsor'
  import TopStaff from '~/components/TopStaff'
  import CommonFooter from '~/components/CommonFooter'
  import fetch from 'node-fetch'
  // import request from 'request'
  // import FeedParser from 'feedparser'
  import convert from 'xml-js'
  // import {parseString} from 'xml2js'
  export default {
    name: 'top',
    components: {
      TopHero,
      TopKeyNote,
      TopNews,
      TopPlace,
      TopOther,
      TopSponsor,
      TopStaff,
      CommonFooter
    },
    head () {
      return {
        title: this.$t('top.title'),
      }
    },
    async asyncData(){
      try{
        const response = await fetch('http://pyconjp.blogspot.com/feeds/posts/default/-/pyconjp2018?alt=rss')
        // console.log(response)
        // console.log(response.url)
        const text = await response.text()
        // console.log(text)
        // console.log(convert.xml2json(text, {compact: false, spaces: 4}))
        const blog_data = convert.xml2json(text, {compact: false, spaces: 4})
        // console.log("test")
        return {blog_data}
      } catch (e) {
        console.log(e)
      }

    }
  }
</script>

<style scoped>

</style>