<!-- Please remove this file from your project -->
<template>
  <div class="progress-bar" :class="className">
    <div class="trailing">
      <div class="thumb" :style="`width: ${progress}%`"></div>
    </div>
    <div v-if="isShowNote" class="note">
      <span class="to-the-goal">{{ togo }} to the goal</span>
      <span><img src="~/static/images/unicef.png" alt="" /></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  width: 100%;

  .trailing {
    width: 100%;
    height: 40px;
    background: #5834bf;
    box-shadow: inset 0px 0px 16px 2px #25238c;
    border-radius: 20px;
    padding: 5px 6px;
  }

  .thumb {
    width: 50%;
    height: 100%;
    min-width: 40px;
    max-width: 100%;
    background: url(~/static/images/icons/bunny-ear.png) no-repeat right 10px
        center,
      $colorYellow;
    box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.15);
    border-radius: 40px;
  }

  .note {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px 0;
    font-size: 12px;
    line-height: 110%;

    .to-the-goal {
      padding-top: 4px;
    }
  }

  &.progress-bar--light {
    .trailing {
      background: #d0d0f5;
      mix-blend-mode: multiply;
      box-shadow: inset 0px 0px 16px 2px #bdbdd9;
    }
  }
}
</style>
<script>
export default {
  props: {
    goal: {
      type: Number,
      require: true,
    },
    current: {
      type: Number,
      require: true,
    },
    isShowNote: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "dark",
    },
  },
  computed: {
    progress() {
      return Math.min((this.current / this.goal) * 100, 100);
    },
    togo() {
      return new Intl.NumberFormat().format(this.goal - this.current);
    },
    className() {
      return ` progress-bar--${this.type}`;
    },
  },
};
</script>

