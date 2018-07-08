export default {
  props: {'sponsor': {}, 'index': 0},
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
    },
    decorationStyle: function(){
      if(this.index % 2 === 0)
        return "background-image: linear-gradient(62deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5));"
      if(this.index % 2 === 1)
        return "background-image: linear-gradient(62deg, rgba(255, 244, 63, 0.5), rgba(232, 214, 0, 0.5));";
    }
  }
}