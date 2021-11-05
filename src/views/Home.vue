<template>
  <p>home</p>
</template>

<script>
import $global from '../Global.vue';

export default {
  data() {
    return {
      test: $global.testGlobal,
    }
  },
  mounted() {
    this.test = 'I changed the value!'
  }
}
</script>

<style lang="postcss">
</style>