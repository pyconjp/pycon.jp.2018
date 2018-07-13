<template lang="pug">
.card
  .decoration-box
  .card-content
    .img-block
      img.img(:src="this.imgSrc")  
    .body 
      a.name(:href="this.siteUrl" taget="_blank") {{this.name}}
      .text-block
        .desc {{this.desc}}
        .recruit(v-if="this.recruitText")
          h4
            a(:href="this.recruitUrl" taget="_blank") {{$t('sponsor.recruitTitle')}}
          .recruitText {{this.recruitText}}
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'card',
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
  @include card(470px, $sponsor-1-3-width);
}
.img-block {
  height: 200px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.name {
  display: inline-block;
  padding: 10px 0;
  line-height: 28px;
  font-size: 24px;
  font-weight: 300;
  color: #666666;
}
.text-block {
  height: 180px;
  overflow: scroll;
}
.desc, .recruitText {
  font-size: 14px;
}
</style>