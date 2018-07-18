<template lang="pug">
.card
  .img-block
    img.img(:src="this.imgSrc")
  .body.uk-flex.uk-flex-column
    .text-block
      h3
        a.name(:href="this.siteUrl" target="_blank") {{this.name}}
      p.desc {{this.desc}}
        //.recruit(v-if="this.recruitText")
          //h4
            //a(:href="this.recruitUrl" taget="_blank") {{$t('sponsor.recruitTitle')}}
          //.recruitText {{this.recruitText}}
    nav.card-nav
      a(href="#") 採用情報
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'medium-card',
  mixins: [cardMixin]
}
</script>

<style lang="sass" scoped>
.card
  @include card(270px, $sponsor-1-4-width)
  margin-right: 3.7rem
  margin-bottom: 5rem
  &:nth-child(4n)
    margin-right: 0
  @media (max-width: 1300px)
    &:nth-child(4n)
      margin-right: 3.7rem
    &:nth-child(3n)
      margin-right: 0
  @media (max-width: 985px)
    &:nth-child(3n)
      margin-right: 3.7rem
    &:nth-child(2n)
      margin-right: 0
  @media (max-width: $breakpoint-small)
    margin: 0 1rem 4rem
    &:nth-child(2n),
    &:nth-child(3n)
      margin: 0 1rem 4rem

.img-block
  height: 150px
  padding: 1rem 1rem 25px
  @media (max-width: $breakpoint-small)
    width: 100%
    height: 56vw

  img
    width: auto
    height: auto
    max-width: 100%
    max-height: 100%

.body
  padding: 0 1rem
  height: calc(100% - 150px)
  justify-content: space-between
  @media (max-width: $breakpoint-small)
    height: calc(100% - 56vw)

.name
  display: inline-block
  padding: 10px 0
  line-height: 28px
  font-size: 24px
  font-weight: 300
  color: #666666

.text-block
  min-height: 300px

p.desc, p.recruitText
  font-size: 14px
  line-height: 1.5rem
  margin-top: .6rem

nav.card-nav
  margin-bottom: 1rem
  padding: .2rem 0
  background-color: rgba(0, 0, 0, 0.1)
  border-radius: 1px
  width: 100%
  text-align: center
  a
    color: #666

</style>
