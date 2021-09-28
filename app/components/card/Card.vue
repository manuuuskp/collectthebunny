<template>
  <div class="card" :class="computedClass" @click="handleClick($event)">
    <Button v-if="showBack" type="back" @click="$emit('back')"></Button>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  max-width: 430px;
  width: 100%;
  height: 100%;
  padding: 40px 30px 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 26.13%,
      rgba(0, 0, 0, 0.1) 66.01%,
      rgba(0, 0, 0, 0) 78.97%
    ),
    radial-gradient(
      155.97% 43.44% at 98.3% 4.8%,
      rgba(16, 9, 37, 0.4) 0%,
      rgba(45, 29, 88, 0.064) 51.96%
    ),
    linear-gradient(
      194.13deg,
      rgba(204, 174, 255, 0) 25.61%,
      rgba(204, 174, 255, 0.6) 86.11%,
      rgba(226, 209, 255, 0.6) 105.12%
    ),
    linear-gradient(0deg, #5834bf, #5834bf), #d394ff;
  background-blend-mode: overlay, normal, normal, normal, normal;
  box-shadow: 0px 40px 16px 20px rgba(193, 97, 177, 0.17),
    inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
  border-radius: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  color: #ebeaff;

  @include screen (sm) {
    height: auto;
  }

  > * {
    flex: 0 0 auto;
  }
}

.card--full {
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .sub-head {
    margin-top: 8px;
    margin-bottom: auto;
  }

  .img-wrapper {
    flex: 0 1 auto;
    margin: auto;

    @include screen (sm) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
}

.card--small {
  height: auto;
  padding: 20px;
  box-shadow: 0px 19px 26px -10px rgba(0, 0, 0, 0.17), inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
}

.btn--back {
  position: absolute;
  left: 20px;
  top: 25px;
}
</style>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass() {
      return this.type === "small" ? " card--small" : " card--full";
    },
  },
  methods: {
    handleClick(e) {
      e.stopPropagation()
    }
  }
};
</script>