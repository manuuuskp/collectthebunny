<template>
  <div class="leaderboard" v-if="isShow">
    <leaderboard-card
      ref="card"
      class="leaderboard__card"
      @back="$emit('close')"
    />
    <leaderboard-list ref="list" class="leaderboard__list" />
  </div>
</template>

<style lang="scss" scoped>
.leaderboard::v-deep {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  background: linear-gradient(
      194.13deg,
      rgba(208, 206, 234, 0) 25.61%,
      rgba(192, 190, 227, 0.6) 86.11%,
      rgba(226, 209, 255, 0.6) 105.12%
    ),
    linear-gradient(0deg, #e2e2fa, #e2e2fa), #d394ff;
  box-shadow: 0px 40px 36px -18px rgba(0, 0, 0, 0.27),
    inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
  z-index: 20;
  padding: 16px;

  @include screen(sm) {
    position: absolute;
    top: 80px;
    right: 80px;
    left: auto;
    width: 430px;
    height: 85vh;
    border-radius: 40px;
    padding: 24px;
  }

  .btn--back {
    @include screen(sm) {
      display: none;
    }
  }
}
.leaderboard__card {
  flex: 0 0 auto;
  max-width: 100%;
}
.leaderboard__list {
  flex: 1 1 auto;
}
</style>

<script>
import LeaderboardList from './LeaderboardList.vue';
export default {
  components: { LeaderboardList },
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>