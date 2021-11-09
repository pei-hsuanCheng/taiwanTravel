<template>
  <header class="lH fixed top-0 left-0 w-full bg-xf">
    <h1 class="absolute w-0 h-0 opacity-0">Taiwan Tourguid</h1>
    <div class="mHd box-border pt:pt-28 pt:pb-20 m:pt-14 m:pb-20 m:px-16 flex justify-between pt:items-start m:items-center m:flex-col">
      <SvgIcon icon="logo" class="logo"></SvgIcon>
      <ul class="flex items-center m:justify-around m:rounded m:shadow m:w-full m:mt-12">
        <li v-for="item in menu" :key="item.text" :class="item.icon" class="navitem pt:mx-14 m:py-10">
          <router-link
            class="pt:underline"
            :class="'pt:text-x'+item.color"
            :to="item.url"
          >
            {{ item.text }}
          </router-link>
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
          url: '/',
          name: 'Home',
          text: '台灣景點',
        }, {
          color: 'fb2c',
          icon: 'square',
          url: 'foodhotel',
          name: 'foodhotel',
          text: '美食住宿',
        }, {
          color: '0750',
          icon: 'circle',
          url: 'logistic',
          name: 'logistic',
          text: '景點交通',
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
  .lH {
    @apply z-5;
  }

  @screen p {
    .mHd {
      padding-left: 108px;
      padding-right: 108px;
    }

    .logo {
      width: 100px;
      height: 58px;
    }
  }

  @screen pt {
    .navitem {
      @apply relative;
 
      &::before {
        content: "";
        border-radius: 50%;
        width: 34px;
        height: 34px;
        
        @apply mr-8 inline-block align-bottom;
      }

      &::after {
        content: "";
        transform: translate(-50%, -50%);
        margin-left: 17px;

        @apply absolute top-1/2 left-0 bg-xf;
      }

      &.triangle {
        &::before {
          @apply bg-xf16c;
        }

        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 6px 10.4px 6px;
          border-color: transparent transparent #ffffff transparent;

          @apply absolute top-1/2 left-0;
        }
      }
      
      &.circle {
        &::before {
          @apply bg-xfb2c;
        }

        &::after {
          content: "";
          width: 10px;
          height: 10px;

          @apply absolute top-1/2 left-0 rounded-full;
        }
      }
      
      &.square {
        &::before {
          @apply bg-x0750;
        }

        &::after {
          content: "";
          width: 10px;
          height: 10px;

          @apply absolute top-1/2 left-0;
        }
      }
    }
  }

  @screen t {
    .logo {
      width: 86px;
      height: 50px;
    }
  }

  @screen m {
    .logo {
      width: 90px;
      height: 52px;
    }

    .router-link-exact-active {
      @apply text-xf16c;
    }
  }
</style>