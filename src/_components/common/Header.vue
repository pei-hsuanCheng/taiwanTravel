<template>
  <header class="lH fixed top-0 left-0 w-full">
    <h1 class="absolute w-0 h-0 opacity-0">Taiwan Tourguid</h1>
    <div class="mHd box-border pt-28 pb-20 flex justify-between items-start">
      <SvgIcon icon="logo" class="logo"></SvgIcon>
      <ul class="flex">
        <li v-for="item in menu" :key="item.text" :class="[item.icon, item.color]" class="navitem">
          <a
            class="underline"
            :class="'text-x'+item.color"
            :to="item.url"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          color: 'f16c',
          icon: 'triangle',
          url: 'home',
          text: '台灣景點',
        }, {
          color: 'fb2c',
          icon: 'square',
          url: 'foodhotel',
          text: '美食住宿',
        }, {
          color: 'f16c',
          icon: 'circle',
          url: 'logistic',
          text: '景點交通',
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
  .logo {
    width: 100px;
    height: 58px;
  }

  @screen p {
    .mHd {
      padding-left: 108px;
      padding-right: 108px;
    }
  }

  @screen pt {
    .navitem {
      &::before {
        content: "";
        border-radius: 50%;
        width: 34px;
        height: 34px;
        
        @apply pr-8;
      }

      &::after {
        content: "";
      }
    }
  }
</style>