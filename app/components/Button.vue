<!-- Please remove this file from your project -->
<template>
  <button :class="computedClass" @click="$emit('click')">
    <slot></slot>
    <span class="count" v-if="isNumber(count)">{{ count }}</span>
  </button>
</template>

<style lang='scss' scoped>
@mixin button() {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  max-width: 100%;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid;
  border-radius: 999px;
  position: relative;

  @include screen(xs) {
    min-width: 350px;
  }

  &.show-count {
    padding-left: 70px;
    padding-right: 70px;
  }
}
@mixin buttonCircle() {
  display: flex;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: no-repeat center / 68%, $colorYellow;
  box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.15);
}

button {
  flex: 0 0 auto;
  appearance: none;
  font-family: $font-default;
  font-size: 20px;
  line-height: 1.1;
  cursor: pointer;
}

.count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  font-size: 18px;
  line-height: 20px;
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}

.btn--primary {
  @include button();
  border-color: $colorYellow;
  background-color: $colorYellow;
  color: $colorDarkLilac;
  box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.15);
  font-weight: 500;

  .count {
    background-color: $colorDarkLilac;
    color: $colorYellow;
    padding-top: 2px;
  }
}

.btn--primary-sm {
  @include button();
  border-color: $colorYellow;
  background-color: $colorYellow;
  color: $colorDarkLilac;
  box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  height: 32px;
  font-size: 14px;

  .count {
    background-color: $colorDarkLilac;
    color: $colorYellow;
    padding-top: 2px;
  }
}

.btn--secondary {
  @include button();
  border-color: $colorWhite;
  background-color: transparent;
  color: $colorWhite;
  font-weight: 500;

  .count {
    background-color: $colorDarkLilac;
    color: $colorYellow;
    padding-top: 2px;
  }
}

.btn--link {
  display: inline-flex;
  width: auto;
  height: auto;
  background-color: transparent;
  color: $colorWhite;
  border: none;
  border-radius: 0;
  text-decoration: underline;
  padding: 0
}

.btn--close {
  @include buttonCircle();
  background-image: url("~/static/images/icons/cross.svg");
}
.btn--back {
  @include buttonCircle();
  background-image: url("~/static/images/icons/back.svg");
  background-size: 30%;
  background-position: left 45% top 56%;
}
</style>

<script>
export default {
  props: {
    count: {
      type: Number,
    },
    type: {
      type: String,
      default: "primary",
    },
  },

  computed: {
    computedClass() {
      // let className = ['close', 'back'].includes(this.type) ? 'btn-circle' : 'btn';
      // className += this.type ? ` btn-${this.type}` : ` btn-primary`;
      // this.isNumber(this.count) && (className += ` show-count`);
      return ` btn--${this.type}`;
    },
  },

  created() {},

  mounted() {},

  methods: {
    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },
  },
};
</script>