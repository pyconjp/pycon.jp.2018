<template src="./summary.pug" lang="pug"/>
<style src="./summary.sass" lang="sass" />
<script>
  import sessionsMixin from '~/components/Event/mixins/sessionsMixin'
  export default {
    name: 'session-summary',
    props: ['talk'],
    mixins: [sessionsMixin],
    methods: {
      toModal() {
        this.$emit('summary-event')
      }
    }
  }
</script>
