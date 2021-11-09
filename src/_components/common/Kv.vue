<template>
  <div class="mKv relative border-36 border-solid border-xf">
    <div class="mkvCnt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <h2 class="kvHd font-bold text-xf text-60 mb-10">Welc<span class="circle">o</span>me t<span class="square">o</span> <span class="text-xf16c">Ta<span class="triangle">i</span>wan</span></h2>
      <h3 class="text-xf text-14 mb-10">台北、台中、台南、屏東、宜蘭……遊遍台灣</h3>
      <form>
        <input type="text" placeholder="搜尋關鍵字" />
        <select>
          <option value="point">景點</option>
          <option value="campaign">活動</option>
          <option value="food">美食</option>
          <option >住宿</option>
        </select>
      </form>
    </div>
    <img :src="getKvImgSrc" alt="welcome to taiwan" width="100%" height="100%" />
  </div>
</template>

<script>
import spring from '../../assets/img/kv_spring.jpg';
import summer from '../../assets/img/kv_summer.jpg';
import fall from '../../assets/img/kv_fall.jpg';
import winter from '../../assets/img/kv_winter.jpg';

export default {
  data() {
    return {
      images: [spring, summer, fall, winter]
    }
  },
  computed: {
    getKvImgSrc(){
      let result = '';
      const random = Math.floor(Math.random()*3);
      result = this.images[random];

      return result;
    }
  }
}
</script>

<style lang="postcss">
  .kvHd {
    text-shadow: 0px 4px 3px rgba(#0D0B0C, 0.2);
  }
</style>