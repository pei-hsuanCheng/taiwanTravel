<template>
  <div class="example">
    <h1 class="bg-red-900 text-white">Hello world</h1>
    {{ msg }}
    <img :src="url" />
  </div>
</template>

<script>
import logo from './assets/cover.png';
import getData from './utils/getData';

export default {
  data() {
    return {
      msg: 'Hello Webpack',
      url: logo,
    };
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.example {
  color: red;
}
</style>