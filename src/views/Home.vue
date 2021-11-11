<template>
  <div class="lCnt">
    <Kv />
    <div class="mHome max-w-[1200px] mx-auto p:mt-92 t:mt-36 m:mt-44 over">
      <div class="mCity">
        <h3 class="hdTitle text-20 text-x000c mb-12 font-bold">熱門城市</h3>
        <div class="mSlider overflow-hidden pb-12">
          <ul class="mSliderCnt whitespace-nowrap">
            <li class="inline-block">
              <div class="mCityList grid grid-cols-5 gap-4">
                <router-link
                  class="
                    mCityItemCard
                    border-12 border-solid border-xf
                    shadow-lg
                    relative
                  "
                  to=":taipei"
                >
                  <div
                    class="
                      mCityItemCardCnt
                      z-1
                      w-full
                      h-full
                      flex
                      justify-center
                      items-center
                      absolute
                      text-center text-xf text-20
                      bg-x0 bg-opacity-40
                    "
                  >
                    <p class="mCityItemCardTxt">台北市</p>
                  </div>
                  <img :src="imgTaipei" alt="台北市" width="100%" height="100%" />
                </router-link>
                <div class="grid grid-rows-2 gap-4">
                  <router-link
                    to=":newTaipei"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">新北市</p>
                    </div>
                    <img
                      :src="imgNewTaipei"
                      alt="新北市"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                  <router-link
                    to=":taoyuan"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">桃園市</p>
                    </div>
                    <img
                      :src="imgTaoyuan"
                      alt="桃園市"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                </div>
                <router-link
                  class="
                    mCityItemCard
                    border-12 border-solid border-xf
                    shadow-lg
                    relative
                  "
                  to=":hsinchu"
                >
                  <div
                    class="
                      mCityItemCardCnt
                      z-1
                      w-full
                      h-full
                      flex
                      justify-center
                      items-center
                      absolute
                      text-center text-xf text-20
                      bg-x0 bg-opacity-40
                    "
                  >
                    <p class="mCityItemCardTxt">新竹市</p>
                  </div>
                  <img
                    :src="imgHsinchu"
                    alt="新竹市"
                    width="100%"
                    height="100%"
                  />
                </router-link>
                <div class="grid grid-rows-2 gap-4">
                  <router-link
                    to=":taichung"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">台中市</p>
                    </div>
                    <img
                      :src="imgTaichung"
                      alt="台中市"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                  <router-link
                    to=":nantouCounty"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">南投縣</p>
                    </div>
                    <img
                      :src="imgNantouCounty"
                      alt="南投縣"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                </div>
                <router-link
                  class="
                    mCityItemCard
                    border-12 border-solid border-xf
                    shadow-lg
                    relative
                  "
                  to=":chiayi"
                >
                  <div
                    class="
                      mCityItemCardCnt
                      z-1
                      w-full
                      h-full
                      flex
                      justify-center
                      items-center
                      absolute
                      text-center text-xf text-20
                      bg-x0 bg-opacity-40
                    "
                  >
                    <p class="mCityItemCardTxt">嘉義市</p>
                  </div>
                  <img :src="imgChiayi" alt="嘉義市" width="100%" height="100%" />
                </router-link>
              </div>
            </li>
            <li class="inline-block">
              <div class="mCityList grid grid-cols-5 gap-4">
                <router-link
                  class="
                    mCityItemCard
                    border-12 border-solid border-xf
                    shadow-lg
                    relative
                  "
                  to=":taipei"
                >
                  <div
                    class="
                      mCityItemCardCnt
                      z-1
                      w-full
                      h-full
                      flex
                      justify-center
                      items-center
                      absolute
                      text-center text-xf text-20
                      bg-x0 bg-opacity-40
                    "
                  >
                    <p class="mCityItemCardTxt">台北市</p>
                  </div>
                  <img :src="imgTaipei" alt="台北市" width="100%" height="100%" />
                </router-link>
                <div class="grid grid-rows-2 gap-4">
                  <router-link
                    to=":newTaipei"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">新北市</p>
                    </div>
                    <img
                      :src="imgNewTaipei"
                      alt="新北市"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                  <router-link
                    to=":taoyuan"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">桃園市</p>
                    </div>
                    <img
                      :src="imgTaoyuan"
                      alt="桃園市"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                </div>
                <router-link
                  class="
                    mCityItemCard
                    border-12 border-solid border-xf
                    shadow-lg
                    relative
                  "
                  to=":hsinchu"
                >
                  <div
                    class="
                      mCityItemCardCnt
                      z-1
                      w-full
                      h-full
                      flex
                      justify-center
                      items-center
                      absolute
                      text-center text-xf text-20
                      bg-x0 bg-opacity-40
                    "
                  >
                    <p class="mCityItemCardTxt">新竹市</p>
                  </div>
                  <img
                    :src="imgHsinchu"
                    alt="新竹市"
                    width="100%"
                    height="100%"
                  />
                </router-link>
                <div class="grid grid-rows-2 gap-4">
                  <router-link
                    to=":taichung"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">台中市</p>
                    </div>
                    <img
                      :src="imgTaichung"
                      alt="台中市"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                  <router-link
                    to=":nantouCounty"
                    class="
                      mCityItemCard
                      border-5 border-solid border-xf
                      shadow-lg
                      relative
                    "
                  >
                    <div
                      class="
                        mCityItemCardCnt
                        z-1
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center
                        absolute
                        text-center text-xf text-20
                        bg-x0 bg-opacity-40
                      "
                    >
                      <p class="mCityItemCardTxt">南投縣</p>
                    </div>
                    <img
                      :src="imgNantouCounty"
                      alt="南投縣"
                      width="100%"
                      height="100%"
                    />
                  </router-link>
                </div>
                <router-link
                  class="
                    mCityItemCard
                    border-12 border-solid border-xf
                    shadow-lg
                    relative
                  "
                  to=":chiayi"
                >
                  <div
                    class="
                      mCityItemCardCnt
                      z-1
                      w-full
                      h-full
                      flex
                      justify-center
                      items-center
                      absolute
                      text-center text-xf text-20
                      bg-x0 bg-opacity-40
                    "
                  >
                    <p class="mCityItemCardTxt">嘉義市</p>
                  </div>
                  <img :src="imgChiayi" alt="嘉義市" width="100%" height="100%" />
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="mEvent">
        <h3 class="hdTitle text-20 text-x000c mb-12 font-bold">熱門活動</h3>
        <ul class="flex flex-wrap">
          <li v-for="item in events" :key="item.ID" class="w-1/2">
            <Paper class="flex p-16">
              <template #Paper_children>
                <img :src="item.Picture.PictureUrl1" width="100%" height="100%" alt="item.Picture.PictureDescription1" />
                <div class="cardCnt ml-16">
                  <h4 class="text-x000c mb-14">{{item.Name}}</h4>
                  <p class="cardTxt text-14 text-xac">{{item.DescriptionDetail}}</p>
                  <div class="cardFt">
                    <span class="cardFtAddr">{{item.Address.substring(0,5)}}</span>
                    <button type="button" class="text-xf16c border border-xf16c rounded py-10 px-32">活動詳情</button>
                  </div>
                </div>
              </template>
            </Paper>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
import Kv from "../_components/common/Kv";
import Paper from "../_components/common/Paper";
import taipei from "../assets/img/common/taipei.jpg";
import newTaipei from "../assets/img/common/newTaipei.jpg";
import taoyuan from "../assets/img/common/taoyuan.jpg";
import hsinchu from "../assets/img/common/hsinchu.jpg";
import taichung from "../assets/img/common/taichung.jpg";
import nantouCounty from "../assets/img/common/nantouCounty.jpg";
import chiayi from "../assets/img/common/chiayi.jpg";
import { getEvents } from "../api";

export default {
  components: {
    Kv: Kv,
    Paper: Paper,
  },
  data() {
    return {
      imgTaipei: taipei,
      imgNewTaipei: newTaipei,
      imgTaoyuan: taoyuan,
      imgHsinchu: hsinchu,
      imgTaichung: taichung,
      imgNantouCounty: nantouCounty,
      imgChiayi: chiayi,
      events: null,
    };
  },
  mounted() {
    const getHomeEvents = async () => {
      await getEvents().then((res) => {
        this.events = res.data;
      })
    }

    getHomeEvents();
  }
};
</script>

<style lang="postcss">
.mCityItemCard {
  overflow: hidden;
  img {
    transition: 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.5);
    }
  }
}
.mCityItemCardTxt {
  &::before {
    content: "";
    background: url(~@/assets/img/common/icon_location_w.png) no-repeat center
      center;
    background-size: 100% auto;
    width: 16px;
    height: 20px;

    @apply block mx-auto;
  }
}
.cardTxt {
  width: 278px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;   /*省略第n行後的文字*/
  -webkit-box-orient: vertical;  /*設定元素是垂直布局*/
}
.cardFtAddr {
  &::before {
    content: '';
    dispaly: inline-block;
    background: url(~@/assets/img/common/icon_location.png) no-repeate center center;
    background-size: auto 100%;
    margin-right: 12px;
  }
}
</style>