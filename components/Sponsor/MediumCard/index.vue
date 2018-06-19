<template lang="pug">
.medium-card
    .image This is image
    .desc This is desc of Medium
        //- .name name
        //- .text
        //- .detail-link
</template>

<script>
  export default {
    name: 'medium-card'
  }
</script>

<style lang="scss" scoped>
.medium-card {
    display: inline-block;
    height: 200px;
    width: 300px;
    margin: 0 10px;
    background-color: green;
    color: white;
}
</style>