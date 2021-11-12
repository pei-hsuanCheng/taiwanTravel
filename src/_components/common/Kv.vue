<template>
  <Paper class="mKv relative p-36 bg-xf">
    <template #Paper_children>
      <div
        class="mkvCnt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h2 class="kvHd font-bold text-xf text-60 mb-10">
          Welc<span class="opacity-0 w-0 h-0">o</span>me t<span class="opacity-0 w-0 h-0">o</span>
          <span class="text-xf16c">Ta<span class="icon_triangle">i</span>wan</span>
        </h2>
        <h3 class="text-xf text-14 mb-10">
          台北、台中、台南、屏東、宜蘭……遊遍台灣
        </h3>
        <form>
          <input type="text" class="w-full bg-xf rounded shadow px-24 py-8 mb-8 outline-none" name="keyword" placeholder="搜尋關鍵字" />
          <div class="flex -mx-3">
            <select class="bg-xf rounded shadow px-24 py-8 mb-8 outline-none mx-3 w-1/2" name="category">
              <option value="all" disabled selected hidden>類別</option>
              <option value="point">景點</option>
              <option value="campaign">活動</option>
              <option value="food">美食</option>
              <option>住宿</option>
            </select>
            <select class="bg-xf rounded shadow px-24 py-8 mb-8 outline-none mx-3 w-1/2" name="city">
              <option value="all" disabled selected hidden>不分縣市</option>
              <option v-for="item in cities" :key="item.value" value="item.value">
                {{item.title}}
              </option>
            </select>
          </div>
        </form>
      </div>
      <img
        :src="getKvImgSrc"
        alt="welcome to taiwan"
        width="100%"
        height="100%"
      />
    </template>
  </Paper>
</template>

<script>
import Paper from "./Paper";
import spring from "../../assets/img/kv/kv_spring.jpg";
import summer from "../../assets/img/kv/kv_summer.jpg";
import fall from "../../assets/img/kv/kv_fall.jpg";
import winter from "../../assets/img/kv/kv_winter.jpg";
import _global from "../../Global.vue";

export default {
  components: {
    'Paper': Paper,
  },
  data() {
    return {
      images: [spring, summer, fall, winter],
      cities: _global.cities
    };
  },
  computed: {
    getKvImgSrc() {
      let result = "";
      const random = Math.floor(Math.random() * 3);
      result = this.images[random];

      return result;
    },
  },
};
</script>

<style lang="postcss">
.kvHd {
  text-shadow: 0px 4px 3px rgba(#0d0b0c, 0.2);
  position: relative;

  &::before,
  &::after {
    content: "";
    border: 7px solid #FF1D6C;

    @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 shadow;
  }

  &::before {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: -118px;
  }

  &::after {
    width: 30px;
    height: 30px;
    margin-left: 50px;
  }
}

.icon_triangle {
  position: relative;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 16px 10px;
    border-color: transparent transparent #FF1D6C transparent;
    transform: translate(-50%, -50%) rotate(25deg);

    @apply absolute top-1/2 left-1/2 -mt-24 ml-4 shadow;
  }
}
</style>