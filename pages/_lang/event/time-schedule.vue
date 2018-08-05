<template lang="pug" src="./time-schedule.pug"/>

<script>
import TimeTable from '~/components/Event/TimeTable'

  export default {
    name: 'time-schedule',
    head () {
      return {
        title: 'タイムスケジュール',
      }
    },
    components: {
      TimeTable
    }
  }
</script>

<style src="./time-schedule.sass" lang="sass" />
