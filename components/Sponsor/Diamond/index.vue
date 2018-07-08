<template lang="pug">
section#DiamondSponsor.sponsor-section
  h2 Diamond Sponsor
  .uk-flex.uk-flex-wrap.sponsor-block(v-if="this.sponsor")
    .logo
        .decoration-box
        .logo-frame
            img.img(:src="this.imgSrc")  
    .text
       a.name(:href="this.siteUrl") {{ sponsor ? this.name : '' }} 
       .desc {{ sponsor ? this.desc : '' }}
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'diamond',
  mixins: [cardMixin]
}
</script>

<style lang="scss" scoped>
.sponsor-block {
  height: 326px;
}
.logo {
  position: relative;
  width: 40%;
}
.text {
  padding: 15px 0 0 67px;
  width: 60%;
}
.name {
  font-size: 50px;
  font-weight: 300;
  line-height: normal;
  color: #4a4a4a;
}
@media (max-width: $breakpoint-small) {
  .sponsor-block {
    height: auto;
  }
  .logo {
    height: 200px;
  }
  .logo, .text {
    width: 100%;
    margin: 10px 20px;
    padding: 0;
  }
  .name {
    font-size: 28px;
  }
}
.desc {
  padding: 20px 0 0 0;
}
.decoration-box, .logo-frame {
  position: absolute;
  width: 100%;
  height: 100%;
}
.decoration-box {
  transform: rotate(5deg);
  background-image: linear-gradient(62deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5));

}
.logo-frame {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.img {
  width: 100%;
}
</style>