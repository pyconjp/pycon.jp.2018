<template lang="pug">
#pycon-sponsor
  div.uk-container.sponsor-sections
    diamond(:sponsor="diamondSponsor")
    platinum(:sponsors="platinumSponsors")
    gold(:sponsors="goldSponsors")
    sprint(:sponsors="sprintSponsors")
    silver(:sponsors="silverSponsors")
    lunch(:sponsors="lunchSponsors")
    lanyard(:sponsors="lanyardSponsors")
    water(:sponsors="waterSponsors")
    patron(:sponsors="patron")
    media(:sponsors="mediaSponsors")
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Diamond from '~/components/Sponsor/Diamond';
import Platinum from '~/components/Sponsor/Platinum';
import Gold from '~/components/Sponsor/Gold';
import Sprint from '~/components/Sponsor/Sprint';
import Silver from '~/components/Sponsor/Silver';
import Lunch from '~/components/Sponsor/Lunch';
import Lanyard from '~/components/Sponsor/Lanyard';
import Water from '~/components/Sponsor/Water';
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
    Lunch,
    Lanyard,
    Water,
    Patron,
    Media
  },
  mounted() {
    this.FETCH_SPONSOR()
  },
  computed: {
    ...mapGetters({
      "sponsors": "sponsor_array"
    }),
    diamondSponsor() { return this.sponsors.filter(s => s.package == "Diamond")[0] || {} },
    platinumSponsors() { return this.sponsors.filter(s => s.package == "Platinum") },
    goldSponsors() { return this.sponsors.filter(s => s.package == "Gold") },
    sprintSponsors() { return this.sponsors.filter(s => s.package == "Sprint") },
    silverSponsors() { return this.sponsors.filter(s => s.package == "Silver") },
    lunchSponsors() { return this.sponsors.filter(s => s.package == "Lunch") },
    lanyardSponsors() { return this.sponsors.filter(s => s.package == "Lanyard") },
    waterSponsors() { return this.sponsors.filter(s => s.package == "Water") },
    patron() { return this.sponsors.filter(s => s.package == "Patron") },
    mediaSponsors() { return this.sponsors.filter(s => s.package == "Media") }
  },
  methods: {
    ...mapActions({
      FETCH_SPONSOR: "FETCH_SPONSOR"
    })
  },
  head () {
    return {
      title: this.$t('sponsor.title')
    }
  }
}
</script>

<style lang="sass">
#pycon-sponsor
  margin-top: 3rem
  @media (max-width: $breakpoint-small)
    margin-top: 0
  section
    &:last-child
      margin-bottom: 10rem
      @media (max-width: $breakpoint-small)
        margin-bottom: 6rem

.sponsor-sections
  padding-top: 30px
  &> *
    margin-bottom: 10rem
    @media (max-width: $breakpoint-small)
      margin-bottom: 6rem
  h2
    @media (max-width: $breakpoint-small)
      margin: 10px 20px 3rem
      font-size: 36px
  h3
    margin: 0

.img
  width: auto
  height: auto
  max-width: 100%
  max-height: 100%

.img-block
  display: flex
  justify-content: center
  align-items: center
  padding: 20px
</style>
