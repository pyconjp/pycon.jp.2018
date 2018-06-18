<template lang="pug">
  section#MediumSponsor.sponsor-section
      h2 Gold Sponsor
      .card-block
          MediumCard
          MediumCard
          MediumCard
          MediumCard
</template>

<script>
  import MediumCard from '../MediumCard';
  export default {
    name: 'platinum-sponsor',
    components: {
      MediumCard,
    }
  }
</script>

<style lang="scss" scoped>
</style>