<template>
  <div class="mModel fixed top-0 left-0 right-0 bottom-0 flex flex-row-reverse justify-center items-center" :class="{'--show': isOpen}">
    <button type="button" class="closeBtn relative ml-12 bg-xf16c rounded shadow self-start" @click="closeFunc()"></button>
    <Paper class="mModelBox bg-xf pt:p-32 m:p-16">
      <template #Paper_children>
        <div v-if="!data">Loading...</div>
        <div v-else>
        <img class="mModelImg mb-20" :src="data.Picture.PictureUrl1?data.Picture.PictureUrl1:imgPlaceholder" :alt="data.Name" width="100%" height="100%" />
        <h2 class="text-18 mb-20">{{data.Name}}</h2>
        <p class="text-14 mb-24">{{data.DescriptionDetail?data.DescriptionDetail:data.Description}}</p>
        <ul class="flex justify-between items-center flex-wrap">
          <li class="w-1/2 mModelIcon clock my-10">{{data.OpenTime?data.OpenTime: '--'}}</li>
          <li class="w-1/2 mModelIcon ticket my-10">{{data.TicketInfo?data.TicketInfo:'--'}}</li>
          <li class="w-1/2 mModelIcon location my-10">{{data.Address?data.Address:'--'}}</li>
          <li class="w-1/2 mModelIcon phone my-10">{{data.Phone?data.Phone:'--'}}</li>
        </ul>
        </div>
      </template>
    </Paper>
  </div>
</template>

<script>
import Paper from '../_components/common/Paper';
import imgPlaceholder from '../assets/img/common/modle_placeholder.png';

export default {
  components: {
    Paper: Paper,
  },
  props: {
    data: {
      require: true,
    },
    isOpen: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      imgPlaceholder: imgPlaceholder
    }
  },
  methods: {
    closeFunc(){
      this.$emit('closeFunc', null);
    }
  }
}
</script>

<style lang="postcss">
.mModel {
  z-index: 10;
  background-color: rgba(#d2d2d2, 0.75);
  backdrop-filter: blur(2px);
  padding: 32px;
  transition: 0.3s;

  &:not(.\-\-show) {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
}

.mModelIcon {
  &::before {
    content: '';
    display: inline-block;
    background-size: auto 100%;
    margin-right: 12px;
    vertical-align: middle;
  }

  &.clock {
    &::before {
      background: url(~@/assets/img/common/icon_clock.png) no-repeat center center;
      width: 20px;
      height: 20px;
    }
  }

  &.ticket {
    &::before {
      background: url(~@/assets/img/common/icon_ticket.png) no-repeat center center;
      width: 20px;
      height: 16px;
    }
  }

  &.location {
    &::before {
      background: url(~@/assets/img/common/icon_location.png) no-repeat top left;
      width: 16px;
      height: 20px;
    }
  }

  &.phone {
    &::before {
      background: url(~@/assets/img/common/icon_tel.png) no-repeat center center;
      width: 20px;
      height: 20px;
    }
  }
}

.mModelBox {
  max-width: 676px;
  height: 100%;
  overflow-y: scroll;
}

.closeBtn{
  width: 45px;
  height: 45px;

  &::before,
  &::after {
    content: "";
    width: 3px;
    height: 16px;

    @apply absolute top-1/2 left-1/2 bg-xf rounded-10;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
    
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
    
  }
}

@screen pt{
  .mModelImg {
    width: 612px;
    height: 460px;
    object-fit: cover;
    object-position: center;
  }
}

@screen m{
  .mModelImg {
    width: 260px;
    height: 196px;
    object-fit: cover;
    object-position: center;
  }
}

</style>