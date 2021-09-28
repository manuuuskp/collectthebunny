<template>
  <transition name="fade">
    <div class="overlay" v-if="isShow" @click="$emit('close')">
      <card>
        <slot></slot>
      </card>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #ffffff, $alpha: 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import Card from "~/components/Card/Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>