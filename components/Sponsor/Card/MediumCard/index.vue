<template lang="pug">
.card
  .decoration-box(:style="this.decorationStyle")
  .card-content
    .img-block
      img.img(:src="this.imgSrc")  
    .text-block
      a.name(:href="this.siteUrl" target="_blank") {{this.name}}
      .scroll-text
        .desc {{this.desc}}
        h4
          a(:href="this.recruitUrl" taget="_blank") {{$t('sponsor.recruitTitle')}}
        .reccuitText {{this.recruitText}}
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'medium-card',
  mixins: [cardMixin]
}
</script>

<style lang="scss" scoped>
@mixin card($height, $width) {
  width: $width;
  height: $height;
  position: relative;
  margin: 0 10px 50px;
  @media (max-width: $breakpoint-small) {
    width: 100%;
    margin: 0 20px 30px;
  }
}
.card {
  @include card(400px, $sponsor-1-4-width);
}
.img-block {
  height: 150px;
}
.text-block {
  height: 250px;
}
.name {
  display: inline-block;
  padding: 10px 0;
  line-height: 28px;
  font-size: 24px;
  font-weight: 300;
  color: #666666;
}
.scroll-text {
  height: 150px;
  overflow: scroll;
}
.desc, .recruitText {
  font-size: 14px;
}
</style>