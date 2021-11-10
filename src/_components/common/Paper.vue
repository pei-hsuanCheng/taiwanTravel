<template>
  <div class="mPaper">
    <slot name="Paper_children"/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.mPaper {
  @apply relative;

  &::before,
  &::after {
    content: "";
    width: 30%;
    height: 0;
    box-shadow: 0px 0px 50px 12px #0d0b0c;

    @apply absolute bottom-0 mb-16 -z-1;
  }

  &::before {
    transform: rotate(5deg);

    @apply right-0;
  }

  &::after {
    transform: rotate(-5deg);

    @apply left-0;
  }
}
</style>