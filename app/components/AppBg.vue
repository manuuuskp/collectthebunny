<!-- Please remove this file from your project -->
<template>
  <div class="app-bg" :style="`background-image: url(${bg})`">
  </div>
</template>

<style lang="scss" scoped>
.app-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  z-index: -1;
}
</style>
<script>
export default {
  props: {
    bg: {
      default: 'images/home-bg-gradient.jpg'
    }
  }
};
</script>

