<template src="./header.pug" lang="pug"/>

<script>
  export default {
    name: 'global-header',
    methods: {
      isActive (route_name) {
        // console.log(this.$nuxt.$route.name);
        // const _route_name = this.$nuxt.$route.name
        return (this.$i18n.local !== 'en')? this.$nuxt.$route.name === route_name : (()=>{
          const _route_name = (route_name === 'index')? "lang-top" : "lang-" + route_name
          return this.$nuxt.$route.name === _route_name
        })()
      },
      getLangPath (path="") {
        // const _path = (this.$i18n.locale === 'en')? this.$route.fullPath.replace(/^\/[^\/]+/, '') : `/en` + this.$route.fullPath;
        // return process.env.baseUrl + _path;
        //const _path =  '/' + path
        //const __path = (this.$i18n.locale === 'ja')? "/en" + _path: _path
        //return process.env.baseUrl + __path;
        return (this.$i18n.locale === 'en') ? process.env.baseUrl + this.$route.fullPath.replace(/^\/[^\/]+/, '') : process.env.baseUrl + `/en` + this.$route.fullPath
      },
      getPath(path=""){
        // console.log(process.env.baseUrl);
        // Todo::Topへのリンクが重いための暫定処理
        const _path =  '/' + path
        const __path = (this.$i18n.locale === 'en')? "/" + this.$i18n.locale + _path: _path
        //return process.env.baseUrl + __path;
        return this.$route.path + path
      }
    }
  }
</script>

<style src="./header.sass" lang="sass" />
