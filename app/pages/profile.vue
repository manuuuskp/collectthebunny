<template>
  <app>
    <AppBg bg="images/blur-bg.png" />
    <div class="profile">
      <profile-card class="profile__card" @back="$router.go(-1)" />
      <profile-inventory class="profile__inventory" />
      <profile-spinning-history class="profile__history" />
    </div>
  </app>
</template>

<style lang='scss' scoped>
.app::v-deep {
  .app-container {
    padding: 0;
    background-color: $colorLightLilac;
    justify-content: flex-start;

    @include screen (xs) {
      padding: 15px;
    }
  }
}

.profile {
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: auto;
  width: 100%;
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
  padding: 16px 16px 40px;

  @include screen (xs) {
    border-radius: 40px;
    max-width: 430px;
  }
}

.profile__card {
  flex: 0 0 auto;
  padding: 20px 16px;
  width: 100%;
  max-width: 100%;
}
.profile__inventory {
  flex: 0 0 auto;
}
.profile__history {
  flex: 1 1 auto;
  overflow: auto;
}
</style>

<script>
import App from "../components/App.vue";
import Card from "~/components/Card/Card.vue";
import ProfileCard from "~/components/Profile/ProfileCard.vue";
import ProfileInventory from "~/components/Profile/ProfileInventory.vue";
import ProfileSpinningHistory from "~/components/Profile/ProfileSpinningHistory.vue";
export default {
  components: {
    App,
    Card,
    ProfileInventory,
    ProfileCard,
    ProfileSpinningHistory,
  },
};
</script>