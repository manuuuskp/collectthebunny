<template>
  <App>
    <div class="logo-wrapper">
      <img src="~/static/images/big-tender-egg-hunt.png" alt="" />
    </div>
    <div class="img-wrapper">
      <img src="~/static/images/basket.png" alt="" />
    </div>
    <div class="tips-wrapper">
      <h2>Tips</h2>
      <p>Be minful to special bunnies. They can give you double points.</p>
    </div>
    <progress-bar
      class="loading-progress"
      type="light"
      :isShowNote="false"
      :current="current"
      :goal="timeToGo"
    />
  </App>
</template>

<style lang='scss' scoped>
.app::v-deep {
  background-color: $colorLightLilac;
  display: flex;
  justify-content: center;
  align-items: center;

  .app-container {
    position: relative;
    max-width: 375px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    height: 100%;

    @include screen(sm) {
      padding-bottom: 0;
      height: auto;
    }
  }
}

.logo-wrapper {
  width: 92px;
}

.img-wrapper {
  flex: 0 1 auto;
  height: 280px;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    display: block;
    height: 100%;
    width: auto;
    margin: auto;
  }
}

.tips-wrapper {
  font-size: 18px;
  line-height: 1.1;
  text-align: center;
  color: #34337d;
  margin-bottom: 30px;
  margin-top: 0;

  h2 {
    font-family: $font-jumble;
    font-size: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    margin-top: 0;
  }

  p {
    margin: 0;
  }
}
</style>

<script>
import ProgressBar from "../components/ProgressBar.vue";
export default {
  components: { ProgressBar },
  data() {
    return {
      timeToGo: 2000,
      current: 0,
    };
  },
  async mounted() {
    this.loop()
  },
  methods: {
    loop() {
      if (this.current >= this.timeToGo && window.google) {
        this.$router.push({ name: "map" });
      } else {
        this.current += 20;
        requestAnimationFrame(() => {
          this.loop();
        });
      }
    },
  },
};
</script>
