<template lang="pug">
  section#WaterSponsor.sponsor-section
      h2 Water Sponsor
      .card-block.uk-flex.uk-flex-wrap.uk-flex-space-between
        small-card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import SmallCard from '~/components/Sponsor/Card/SmallCard';
  export default {
    name: 'Water-sponsor',
    props: ["sponsors"],
    components: {
      SmallCard,
    }
  }
</script>

<style lang="scss" scoped>
.card-block {
  justify-content: space-between;
}
.card-block::before{
  content:"";
  display: block;
  width: $sponsor-1-4-width;
  order:1;
}
.card-block::after{
  content:"";
  display: block;
  width: $sponsor-1-4-width;
}
</style>