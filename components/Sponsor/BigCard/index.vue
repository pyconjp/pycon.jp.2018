<template lang="pug">
.big-card
    .image This is image
    .desc This is desc of BigCard
        //- .name name
        //- .text
        //- .detail-link
</template>

<script>
  export default {
    name: 'card'
  }
</script>

<style lang="scss" scoped>
.big-card {
    display: inline-block;
    height: 300px;
    width: 400px;
    margin: 0 10px;
    background-color: green;
    color: white;
}
</style>