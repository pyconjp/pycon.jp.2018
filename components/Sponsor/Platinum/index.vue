<template lang="pug">
  section#PlatinumSponsor.sponsor-section
      h2 Platinum Sponsor
      .card-block.uk-flex.uk-flex-wrap.uk-flex-space-between
        BigCard(v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import BigCard from '~/components/Sponsor/Card/BigCard';;

  export default {
    name: 'platinum-sponsor',
    props: ['sponsors'],
    components: {
      BigCard,
    }
  }
</script>

<style lang="scss" scoped>
.card-block {
  justify-content: space-between;
}
.card-block::after{
  content:"";
  display: block;
  width:30%;
}
</style>