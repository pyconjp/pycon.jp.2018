<template lang="pug">
.card
  .decoration-box(:style="this.decorationStyle")
  .card-content
    .img-block
      img.img(:src="this.imgSrc")  
    .text-block
      a.name(:href="this.siteUrl") {{this.name}}
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'medium-card',
  props: ["sponsor", "index"],
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
    margin: 0 20px 50px;
  }
}
.card {
  @include card(200px, $sponsor-1-4-width);
}
.img-block {
  height: 120px;
}
.text-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 0;
}
.name {
  display: inline-block;
  padding: 10px 0;
  line-height: 28px;
  font-size: 20px;
  font-weight: 300;
  color: #666666;
}
</style>