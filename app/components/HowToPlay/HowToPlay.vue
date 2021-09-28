<template>
  <div>
    <h1>How to play?</h1>
    <Slider class="slider">
      <div class="swiper-slide">
        <div class="img-wrapper">
          <img src="images/tutorial.png" alt="" />
        </div>
        <p>
          For every 10 points, you can redeem a raffle ticket to win an exciting
          gift.
        </p>
      </div>
      <div class="swiper-slide">
        <div class="img-wrapper">
          <img src="images/tutorial.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor
        </p>
      </div>
      <div class="swiper-slide">
        <div class="img-wrapper">
          <img src="images/tutorial.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor
        </p>
      </div>
    </Slider>
    <Button class="btn--skip" type="link" @click="$emit('skip')">Skip tutorial</Button>
  </div>
</template>

<style lang='scss' scoped>
h1 {
  margin-bottom: auto;
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