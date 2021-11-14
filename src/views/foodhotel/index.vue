<template>
  <div class="lCnt">
    <Kv />
    <div class="mHome max-w-[1200px] mx-auto p:mt-92 t:mt-36 m:mt-44 over">
      <div class="mArticle city p:mb-60 t:mb-44 m:mb-40">
        <h3 class="hdTitle square text-20 text-x000c mb-12 font-bold">熱門美食</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in restaurants" :key="item.ID" class="p:w-1/5 t:w-1/4 m:w-1/2">
            <VerCard :data="item" @clickFunc="openModal" />
          </li>
        </ul>
      </div>
      <div class="mArticle event">
        <h3 class="hdTitle square text-20 text-x000c mb-12 font-bold">推薦住宿</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in hotels" :key="item.ID" class="p:w-1/5 t:w-1/4 m:w-1/2">
            <VerCard :data="item" @clickFunc="openModal" />
          </li>
        </ul>
      </div>
    </div>
    <Model :data="modelData" :isOpen="isOpen" @closeFunc="closeModal"/>
  </div>
</template> 

<script>
import Kv from "../../_components/common/Kv";
import VerCard from "../../_components/common/VerCard";
import Paper from "../../_components/common/Paper";
import Model from "../../_container/mModel";
import axios from "axios";
import { getAuthorizationHeader } from '../../util';

export default {
  components: {
    Kv: Kv,
    Paper: Paper,
    VerCard: VerCard,
    Model: Model,
  },
  data() {
    return {
      hotels: null,
      restaurants: null,
      isOpen: false,
      modelData: null,
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
  },
  methods: {
    openModal(data){
      const vm = this;
      vm.modelData = data;
      vm.isOpen = true;
      document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden');
    },
    closeModal(){
      const vm = this;
      vm.isOpen = false;
      document.getElementsByTagName('body')[0].removeAttribute('style');
      const initTimeout = setTimeout(()=> {
        clearTimeout(initTimeout);
        vm.modelData = null;
      }, 400);
    }
  }
};
</script>

<style lang="postcss"></style>