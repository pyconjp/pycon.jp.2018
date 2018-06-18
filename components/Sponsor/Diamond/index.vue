<template lang="pug" src="./index.pug" />

<script>
  export default {
    name: 'diamond'
  }
</script>

<style lang="scss" scoped>
.body {
    margin: 0;
    padding: 0;
}
.card, .desc {
    text-align: center;
    line-height: 300px;
    font-size: 30px;
    color: white;
    height: 300px;
    opacity: .7;
}
.card {
    background-color: brown;
}
.desc {
    background-color: purple;
}
</style>