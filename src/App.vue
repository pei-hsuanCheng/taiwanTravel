<template>
  <div id="app">
    <main class="overflow-hidden bg-background">
      <Header />
      <article class="max-w-[1366px] mx-auto p:px-52 t:px-32 m:px-10 p:pt-80 tm:pt-60">
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

<style></style>