<template lang="pug">
    div
        h1 Hello Pug
        button(uk-toggle="target: #test" type="button") test
        #test(uk-modal)
            .uk-modal-dialog.uk-modal-body
                h2 test

</template>

<script>
  // import UIkit from 'uikit';
  export default {
    name: 'index'
  }
</script>

<style scoped>

</style>