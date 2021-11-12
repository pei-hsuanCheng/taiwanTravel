<template>
  <div class="lCnt">
    <Kv />
    <div class="mHome max-w-[1200px] mx-auto p:mt-92 t:mt-36 m:mt-44 over">
      <div class="mArticle city p:mb-60 t:mb-44 m:mb-40">
        <h3 class="hdTitle square text-20 text-x000c mb-12 font-bold">熱門美食</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in restaurants" :key="item.ID" class="p:w-1/5 t:w-1/4 m:w-1/2">
            <VerCard :data="item" />
          </li>
        </ul>
      </div>
      <div class="mArticle event">
        <h3 class="hdTitle square text-20 text-x000c mb-12 font-bold">推薦住宿</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in hotels" :key="item.ID" class="p:w-1/5 t:w-1/4 m:w-1/2">
            <VerCard :data="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
import Kv from "../../_components/common/Kv";
import VerCard from "../../_components/common/VerCard";
import Paper from "../../_components/common/Paper";
import axios from "axios";
import { getAuthorizationHeader } from '../../util';

export default {
  components: {
    Kv: Kv,
    Paper: Paper,
    VerCard: VerCard,
  },
  data() {
    return {
      hotels: null,
      restaurants: null,
    };
  },
  mounted() {
    axios.get(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=10&$format=JSON', 
      { headers: getAuthorizationHeader() }
    ).then((res)=>{
      this.hotels = res.data;
    });
    axios.get(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=10&$format=JSON', 
      { headers: getAuthorizationHeader() }
    ).then((res)=>{
      this.restaurants = res.data;
    });
  }
};
</script>

<style lang="postcss"></style>