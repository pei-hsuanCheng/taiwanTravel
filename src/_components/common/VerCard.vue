<template>
  <Paper class="mVerCard p-12 bg-xf mb-32 mx-5">
    <template #Paper_children>
      <figure class="mb-10">
        <img class="mVerCardImg object-cover" :src="data.Picture.PictureUrl1?data.Picture.PictureUrl1:imgPlaceholder" width="100%" height="100%" alt="data.Name" />
      </figure>
      <div class="mVerCardCnt">
        <h4 class="mVerCardTxt text-14 text-x000c mb-14 --sm">{{data.Name}}</h4>
        <span class="mVerCardFtAddr text-12 text-x0750">{{data.Address.substring(0,6)}}</span>
      </div>
    </template>
  </Paper>
</template>

<script>
import Paper from './Paper';
import imgPlaceholder from '../../assets/img/common/verCard_placeholder.jpg';

export default {
  components: {
    Paper: Paper
  },
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      imgPlaceholder: imgPlaceholder
    }
  }
}
</script>

<style lang="postcss">
.mVerCardImg {
  height: 136px;
  overflow: hidden;
}

.mVerCardTxt {
  width: 278px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.mVerCardFtAddr {
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