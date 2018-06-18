<template lang="pug">
  section#PlatinumSponsor.sponsor-section
      h2 Platinum Sponsor
      .card-block
          BigCard
          BigCard
          BigCard
</template>

<script>
  import BigCard from '../BigCard';
  export default {
    name: 'platinum-sponsor',
    components: {
      BigCard,
    }
  }
</script>

<style lang="scss" scoped>
</style>