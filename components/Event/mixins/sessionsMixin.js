export default {
  computed: {
    langage() {
      return (this.talk && this.talk.hasOwnProperty('lang_of_talk') && this.talk.lang_of_talk !="" ) ?  this.talk.lang_of_talk : "-"
    },
    room() {
      return (this.talk && this.talk.hasOwnProperty('room')) ?  this.talk.room : ""
    },
    talk_format() {
      return (this.talk && this.talk.hasOwnProperty('talk_format')) ?  this.talk.talk_format + "min" : ""
    },
    title() {
      return (this.talk && this.talk.hasOwnProperty('title')) ?  this.talk.title : ""
    },
    name() {
      return (this.talk && this.talk.hasOwnProperty('name')) ?  this.talk.name : ""
    },
    level() {
      return (this.talk && this.talk.hasOwnProperty('audience_level') ) ?  this.talk.audience_level : "-"
    }

  }
}
