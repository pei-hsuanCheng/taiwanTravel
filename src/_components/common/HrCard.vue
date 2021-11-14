<template>
  <Paper class="mHrCard flex p-16 bg-xf mb-48 mx-10">
    <template #Paper_children>
      <figure class="flex-shrink-0">
        <img class="mHrCardImg object-cover" :src="data.Picture.PictureUrl1?data.Picture.PictureUrl1:imgPlaceholder" width="100%" height="100%" alt="data.Name" />
      </figure>
      <div class="mHrCardCnt ml-16 flex-grow">
        <h4 class="text-x000c mb-14">{{data.Name}}</h4>
        <p class="mHrCardTxt text-14 text-xac mb-10">{{data.DescriptionDetail}}</p>
        <div class="mHrCardFt flex justify-between items-center">
          <span class="mHrCardFtAddr">{{data.Address.substring(0,6)}}</span>
          <button type="button" class="text-xf16c border border-xf16c hover:text-red-700 hover:border-red-700 transition duration-300 rounded-lg py-10 px-32" @click="click()">活動詳情</button>
        </div>
      </div>
    </template>
  </Paper>
</template>

<script>
import Paper from './Paper';
import imgPlaceholder from '../../assets/img/common/hrCard_placeholder.jpg';

export default {
  components: {
    Paper: Paper,
  },
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      imgPlaceholder:  imgPlaceholder
    }
  },
  methods: {
    click(){
      this.$emit('clickFunc', this.data);
    }
  }
}
</script>

<style lang="postcss">
.mHrCardImg {
  width: 188px;
  height: 196px;
  overflow: hidden;
}

.restaurant {
  .mCardImg {
    height: 136px;
    overflow: hidden;
  }
}

.mHrCardTxt {
  width: 278px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

.mHrCardFtAddr {
  &::before {
    content: '';
    display: inline-block;
    background: url(~@/assets/img/common/icon_location.png) no-repeat top left;
    background-size: auto 100%;
    margin-right: 12px;
    width: 16px;
    height: 20px;
    vertical-align: middle;
  }
}
</style>