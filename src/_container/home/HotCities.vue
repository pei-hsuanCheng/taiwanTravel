<template>
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
              <img :src="imgTaoyuan" alt="桃園市" width="100%" height="100%" />
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
            <img :src="imgHsinchu" alt="新竹市" width="100%" height="100%" />
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
              <img :src="imgTaichung" alt="台中市" width="100%" height="100%" />
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
              <img :src="imgTaoyuan" alt="桃園市" width="100%" height="100%" />
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
            <img :src="imgHsinchu" alt="新竹市" width="100%" height="100%" />
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
              <img :src="imgTaichung" alt="台中市" width="100%" height="100%" />
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
</template>

<script>
import taipei from "../../assets/img/common/taipei.jpg";
import newTaipei from "../../assets/img/common/newTaipei.jpg";
import taoyuan from "../../assets/img/common/taoyuan.jpg";
import hsinchu from "../../assets/img/common/hsinchu.jpg";
import taichung from "../../assets/img/common/taichung.jpg";
import nantouCounty from "../../assets/img/common/nantouCounty.jpg";
import chiayi from "../../assets/img/common/chiayi.jpg";

export default {
  data() {
    return {
      imgTaipei: taipei,
      imgNewTaipei: newTaipei,
      imgTaoyuan: taoyuan,
      imgHsinchu: hsinchu,
      imgTaichung: taichung,
      imgNantouCounty: nantouCounty,
      imgChiayi: chiayi
    };
  },
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
</style>