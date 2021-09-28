<template>
  <App>
    <!-- <AppBg bg="images/blur-bg.png" /> -->
    <card>
      <h1>Share my <br>Contribution</h1>
      <p class="sub-head">With my collected bunnies on The Big Tender Egg Hunt Milka has donated XXX to charity. How about you?</p>
      <div class="img-wrapper">
        <img src="images/share.png" alt="" />
      </div>
      <p class="social-text">Share on social media</p>
      <div class="socials">
        <SocialIcon icon="facebook" />
        <SocialIcon icon="twitter" />
        <SocialIcon icon="instagram" />
      </div>
      <Button type="close"></Button>
    </card>
  </App>
</template>

<style lang='scss' scoped>
button {
  margin-top: 20px;
}

.social-text {
  margin-top: 0!important;
  margin-bottom: 24px;
}

.socials {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>

<script>
import Card from '../components/Card/Card.vue';
export default {
  components: { Card },};
</script>