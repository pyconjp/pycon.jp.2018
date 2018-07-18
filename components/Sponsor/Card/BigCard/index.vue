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
      //p.recruitText {{this.recruitText}}
    nav.card-nav
      a(href="#") 採用情報
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin'
export default {
  name: 'card',
  mixins: [cardMixin]
}
</script>

<style lang="sass" scoped>
.card
  @include card(470px, $sponsor-1-3-width)
  &:after
    background-image: linear-gradient(62deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5))
  &:nth-child(3n)
    margin-right: 0
  @media (max-width: $breakpoint-small)
    &:last-child
      margin-right: 1rem

.img-block
  height: calc(222px + 1rem + 25px)
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
  height: calc(100% - 222px - 1rem - 25px)
  justify-content: space-between
  @media (max-width: $breakpoint-small)
    height: calc(100% - 56vw)

.name
  display: inline-block
  line-height: 28px
  font-size: 24px
  font-weight: 300
  color: #666666

.text-block
  min-height: 180px

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
