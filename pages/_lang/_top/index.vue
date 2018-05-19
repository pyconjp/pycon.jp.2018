<template lang="pug" src="./index.pug"/>

<script>
  // import { mapGetters } from 'vuex'
  import TopHero from '~/components/TopHero'
  import TopKeyNote from '~/components/TopKeyNote'
  import TopNews from '~/components/TopNews'
  import TopPlace from '~/components/TopPlace'
  import TopOther from '~/components/TopOther'
  import TopSponsor from '~/components/TopSponsor'
  import TopStaff from '~/components/TopStaff'
  import CommonFooter from '~/components/CommonFooter'
  import fetch from 'node-fetch'
  import convert from 'xml-js'

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
        //Todo::ハードコード
        const response = await fetch('http://pyconjp.blogspot.com/feeds/posts/default/-/pyconjp2018?alt=rss&max-results=5')
        const text = await response.text()
        const json_text = convert.xml2json(text, {compact: true, spaces: 4})
        const blog_data = JSON.parse(json_text)
        return {blog_data}
      } catch (e) {
        console.log(e)
      }

    }
  }
</script>

<style scoped>

</style>