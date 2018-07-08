<template lang="pug">
  section#Patron.sponsor-section
      h2 Patron
      .card-block.uk-flex.uk-flex-wrap.uk-flex-space-between
        MicroCard(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import MicroCard from '~/components/Sponsor/Card/MicroCard';;
  export default {
    name: 'media-sponsor',
    props: ["sponsors"],
    components: {
      MicroCard,
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