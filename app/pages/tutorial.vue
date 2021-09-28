<template>
  <App>
    <card>
      <h1>How to play?</h1>
      <Slider class="slider">
        <div class="swiper-slide">
          <div class="img-wrapper">
            <img src="images/tutorial.png" alt="" />
          </div>
          <p>
            For every 10 points, you can redeem a raffle ticket to win an
            exciting gift.
          </p>
        </div>
        <div class="swiper-slide">
          <div class="img-wrapper">
            <img src="images/tutorial.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            dolor
          </p>
        </div>
        <div class="swiper-slide">
          <div class="img-wrapper">
            <img src="images/tutorial.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            dolor
          </p>
        </div>
      </Slider>
      <Button class="btn--skip" type="link">Skip tutorial</Button>
    </card>
  </App>
</template>

<style lang='scss' scoped>
.app::v-deep {
  background: url("~/static/images/blur-bg.png") no-repeat center / cover;
  position: relative;

  .app-container {
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-bottom: auto;
  }
}

.img-wrapper {
  margin-top: 20px;
  margin-bottom: 30px;

  img {
    margin: auto;
  }
}

.btn--skip {
  margin-top: 60px;
}
</style>

<script>
export default {};
</script>