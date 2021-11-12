<template>
  <div class="lCnt">
    <Kv />
    <div class="mHome max-w-[1200px] mx-auto p:mt-92 t:mt-36 m:mt-44">
      <div class="mArticle city p:mb-60 t:mb-44 m:mb-40">
        <h3 class="hdTitle triangle text-20 text-x000c mb-12 font-bold">熱門城市</h3>
        <HotCities />
      </div>
      <div class="mArticle event p:mb-60 t:mb-44 m:mb-40">
        <h3 class="hdTitle triangle text-20 text-x000c mb-12 font-bold">熱門活動</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in events" :key="item.ID" class="pt:w-1/2 m:w-full">
            <HrCard :data="item" />
          </li>
        </ul>
      </div>
      <div class="mArticle restaurant">
        <h3 class="hdTitle square text-20 text-x000c mb-12 font-bold">熱門餐飲</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in restaurants" :key="item.ID" class="p:w-1/5 t:w-1/4 m:w-1/2">
            <VerCard :data="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
import Kv from "../_components/common/Kv";
import HotCities from "../_container/home/HotCities";
import HrCard from "../_components/common/HrCard";
import VerCard from "../_components/common/VerCard";
import Paper from "../_components/common/Paper";
import axios from "axios";
import { getAuthorizationHeader } from '../util';

export default {
  components: {
    Kv: Kv,
    Paper: Paper,
    HotCities: HotCities,
    HrCard: HrCard,
    VerCard: VerCard,
  },
  data() {
    return {
      events: null,
      restaurants: null,
    };
  },
  mounted() {
    axios.get(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=4&$format=JSON', 
      { headers: getAuthorizationHeader() }
    ).then((res)=>{
      this.events = res.data;
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