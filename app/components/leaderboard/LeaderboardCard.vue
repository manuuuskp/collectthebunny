<template>
  <card type="small" :showBack="true" @back="$emit('back')">
    <h1>Leaderboard</h1>
    <p>
      For every bunny you collect, <br />Milka donates
      <strong><u>20.000€</u></strong> to charity.
    </p>
    <progress-bar :goal="10000" :current="5245" />
  </card>
</template>

<style lang='scss' scoped>
.leaderboard__card {
  position: relative;
  width: 100%;
  padding: 20px;
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
  box-shadow: 0px 19px 26px -10px rgba(0, 0, 0, 0.17),
    inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
  border-radius: 40px;
  text-align: center;
  color: $colorWhite;
}
</style>

<script>
import ProgressBar from "../ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
};
</script>Card