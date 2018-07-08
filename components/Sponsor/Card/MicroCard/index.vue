<template lang="pug">
.card
  .decoration-box(:style="this.decorationStyle")
  .card-content.uk-flex.uk-flex-wrap
    .uk-width-2-5.img-block
      img.img(:src="this.imgSrc")
    .uk-width-3-5.text-block
      a.name(:href="this.siteUrl") {{this.name}}
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
  @include card(90px, $sponsor-1-4-width);
}
.img-block {
  height: 80px;
  padding: 10px;
}
.text-block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 15px;
}
.name {
  font-weight: 300;
  color: #666666;
}
</style>