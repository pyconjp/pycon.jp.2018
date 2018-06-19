<template lang="pug" src="./index.pug" />

<script>
  import Diamond from '~/components/Sponsor/Diamond';
  import Platinum from '~/components/Sponsor/Platinum';
  import Gold from '~/components/Sponsor/Gold';
  import Sprint from '~/components/Sponsor/Sprint';
  import Silver from '~/components/Sponsor/Silver';
  import Patron from '~/components/Sponsor/Patron';
  import Media from '~/components/Sponsor/Media';

  export default {
    name: 'sponsor',
    components: {
      Diamond,
      Platinum,
      Gold,
      Sprint,
      Silver,
      Patron,
      Media
    },
    head () {
      return {
        title: this.$t('sponsor.title')
      }
    }
  }
</script>

<style src="./index.sass" lang="sass" />