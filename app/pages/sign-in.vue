<template>
  <App>
    <AppBg bg="images/blur-bg.png" />
    <card :showBack="true" type="small" @back="$router.go(-1)">
      <h1>Sign in</h1>
      <p class="sub-head">And save your contribution and redeem exciting gifts.</p>
      <p class="social-text">Sign in with social media</p>
      <div class="socials">
        <SocialIcon icon="facebook" />
        <SocialIcon icon="twitter" />
        <SocialIcon icon="instagram" />
      </div>
      <p class="or">
        or
      </p>
      <Button class="btn--enter-email" type="secondary">Enter your email</Button>
      <Button class="btn--next">Next</Button>
    </card>
  </App>
</template>

<style lang='scss' scoped>
.app::v-deep {
  .app-container {
    justify-content: center;
    height: 100%;
  }
}
.card {
  height: auto;

  .sub-head {
    margin-top: 24px;
  }

  .social-text {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  .socials {
    width: 100%;
  }

  .or {
    margin-top: 32px;
    margin-bottom: 32px;
  }
}
.btn--back {
  position: absolute;
  left: 20px;
  top: 25px;
  margin: 0;
}
.socials {
  display: flex;
  justify-content: space-around;
}
.btn--enter-email {
  margin-top: 0;
}
.btn--next {
  margin-top: 16px;
}
</style>

<script>
export default {};
</script>