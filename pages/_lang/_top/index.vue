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
    computed: mapGetters({
      locale: 'locale'
    }),
    head () {
      return {
        title: this.$t('top.title')
      }
    }
  }
</script>

<style scoped>

</style>