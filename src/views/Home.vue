<template>
  <div class="lCnt">
    <Kv />
    <div class="mHome max-w-[1200px] mx-auto p:mt-92 t:mt-36 m:mt-44">
      <div class="mEvent">
        <h3 class="hdTitle text-20 text-x000c mb-12 font-bold">熱門城市</h3>
        <ul class="mCityList">
          <li class="mCityItem">
            <div class="mCityItemCard bg-xf p-14 text-center">
              台北市
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
import Kv from '../_components/common/Kv';

export default {
  components: {
    'Kv': Kv
  }
}
</script>

<style lang="postcss">
</style>