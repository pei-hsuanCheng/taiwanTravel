<template>
  <div id="app" class="overflow-hidden flex flex-col flex-grow">
    <Header />
    <article class="lM flex-grow">
      <router-view />
    </article>
    <Footer class="flex-shrink-0 p:mt-84 t:mt-64 m:mt-40" />
  </div>
</template>

<script>
import Header from "./_components/common/Header.vue";
import Footer from "./_components/common/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style>
.lM {
  margin-top: 106px;
}
</style>