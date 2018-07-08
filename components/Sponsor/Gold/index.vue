<template lang="pug">
  section#MediumSponsor.sponsor-section
      h2 Gold Sponsor
      .card-block.uk-flex.uk-flex-wrap.uk-flex-space-between
        medium-card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor" :showDesc="true")
</template>

<script>
  import MediumCard from '~/components/Sponsor/Card/MediumCard';
  export default {
    name: 'platinum-sponsor',
    props: ["sponsors"],
    components: {
      MediumCard,
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