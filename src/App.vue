<template>
  <div id="app">
    <main class="overflow-hidden bg-background">
      <Header />
      <article class="lM">
        <router-view />
      </article>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from './_components/common/Header.vue';
import Footer from './_components/common/Footer.vue';

export default {
  components: {
    Header, Footer
  },
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  },
};
</script>

<style>
.lM {
  margin-top: 106px;
}
</style>