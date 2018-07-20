export default {
  props: {'sponsor': {}, 'index': 0},
  data () {
    return {
      showRecruit: false,
    }
  },
  computed: {
    imgSrc: function(){
      if (!this.sponsor.imgPath || this.sponsor.imgPath === ""){
        return require("~/assets/img/noImage.png")
      } else {
        return require("~/assets/img/sponsor/" + this.sponsor.imgPath)
      }
    },
    name: function(){
      return this.sponsor.name_ja
    },
    siteUrl: function(){
      return this.sponsor.siteUrl_ja
    },
    desc: function(){
      return this.sponsor.description_ja
    },
    recruitText: function(){
      return this.sponsor.recruitText_ja
    },
    recruitUrl: function(){
      return this.sponsor.recruitUrl_ja
    }
  }
}
