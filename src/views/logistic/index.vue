<template>
  <div class="lCnt">
    <Paper class="pt-36 bg-xf w-full">
      <template #Paper_children>
        <div class="logisticCtrl mx-auto">
          <form class="flex mb-40">
            <select
              class="
                bg-xf
                rounded
                shadow
                px-24
                py-8
                mb-8
                outline-none
                mx-3
                w-1/2
              "
              name="city"
              @change="getCityRoute($event)"
            >
              <option value="all" disabled selected hidden>不分縣市</option>
              <option
                v-for="item in cities"
                :key="item.value"
                :value="item.value"
              >
                {{ item.title }}
              </option>
            </select>
            <select
              class="
                bg-xf
                rounded
                shadow
                px-24
                py-8
                mb-8
                outline-none
                mx-3
                w-1/2
              "
              name="category"
              :disabled="!routes"
              @change="getCityRouteTimeTable($event)"
            >
              <option value="all" disabled selected hidden>選擇路線</option>
              <option
                v-for="(item, index) in routes"
                :key="item.RouteUID"
                :value="index"
              >
                {{ item.RouteName.Zh_tw }}
              </option>
            </select>
          </form>
          <ul class="mTabs flex justify-between">
            <li class="mTab">
              <button class="py-12 px-100">
                往 <span class="text-xf16c">{{selectedRouteDetail?selectedRouteDetail.DepartureStopNameZh:'--'}}</span>
              </button>
            </li>
            <li class="mTab">
              <button class="py-12 px-100">
                往 <span class="text-xf16c">{{selectedRouteDetail?selectedRouteDetail.DestinationStopNameZh:'--'}}</span>
              </button>
            </li>
          </ul>
        </div>
      </template>
    </Paper>
    <Paper
      class="
        mLogistic
        max-w-[1000px]
        min-h-[1000px]
        mx-auto
        p:mt-92
        t:mt-36
        m:mt-44
        pt:bg-xf
      "
    >
      <template #Paper_children>
        <div class="mLogisticCnt pt:p-52 m:p-16 relative">
          <p v-if="!data" class="text-xac text-24">請選擇公車路線</p>
        </div>
      </template>
    </Paper>
  </div>
</template>

<script>
import Paper from "../../_components/common/Paper";
import _global from "../../Global.vue";
import axios from "axios";
import { getAuthorizationHeader } from "../../util";

export default {
  components: {
    Paper: Paper,
  },
  data() {
    return {
      cities: _global.cities,
      selectedCity: "all",
      selectedRoute: "all",
      selectedRouteDetail: null,
      routes: null,
      data: null,
    };
  },
  methods: {
    getCityRoute(event) {
      const { target } = event;
      const { value } = target;
      this.selectedCity = value;
      axios
        .get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${value}`, {
          headers: getAuthorizationHeader(),
        })
        .then((res) => {
          this.routes = res.data;
        });
    },
    getCityRouteTimeTable(event) {
      const { target } = event;
      const { value } = target;
      debugger;
      const selected = this.routes[value];
      this.selectedRoute = selected.RouteName.Zh_tw;
      this.selectedRouteDetail = selected;
      axios.all([
          axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/${this.selectedCity}/${this.selectedRoute}`,
            { headers: getAuthorizationHeader() }
          ),
          axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${this.selectedCity}/${this.selectedRoute}`,
            { headers: getAuthorizationHeader() }
          ),
        ])
        .then((resBusPositions, resAllStops) => {
          const busPositions = resBusPositions.data;
          const allStops = resAllStops.data;
          this.data = allStops.map(item => {

          });
        });
    },
  },
};
</script>

<style lang="postcss">
.logisticCtrl {
  width: 572px;
}
.mLogisticCnt {
  &::before {
    content: "*每隔 15 秒自動更新";
    transform: translateY(-100%);

    @apply text-xf16c text-right pb-12 absolute top-0 right-0;
  }
}
</style>