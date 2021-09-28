<template>
  <div>
    <!-- Slider main container -->
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <slot></slot>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.swiper-container {
  width: 100%;
  max-width: 300px;
  margin: auto auto 0;
  overflow: hidden;
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  flex: 0 0 auto;
  width: 100%;
  font-size: 18px;
  color: $colorWhite;
  text-align: center;
}

.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 16px;

  &::v-deep .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: $colorWhite;
    opacity: 0.45;
    margin-left: 4px;
    margin-right: 4px;
  }

  &::v-deep .swiper-pagination-bullet-active {
    opacity: 1;
  }
}

</style>

<script>
import { Swiper, Pagination } from "swiper";
Swiper.use([Pagination])

export default {
  components: {
    Swiper,
  },
  mounted() {
    this.$nextTick(() => {
      this.initSlider()
    });
  },
  methods: {
    initSlider() {
      const container = this.$el.querySelector(".swiper-container")
      container?.swiper?.destroy && container?.swiper?.destroy()
      new Swiper(this.$el.querySelector(".swiper-container"), {
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        pagination: {
          el: this.$el.querySelector(".swiper-pagination")
        },
      });
    }
  },
};
</script>