<template>
  <svg class="fill-current" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="link" />
  </svg>
</template>

<script>

export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    link () {
      return `#${this.icon}`
    }
  }
}
</script>
