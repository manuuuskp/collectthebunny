<template>
  <App>
    <card>
      <h1>Congrats!</h1>
      <div class="img-wrapper">
        <img src="images/congrats.png" alt="" />
      </div>
      <p class="text-center">
        You earned 1 raffle ticket. Claim your gift now!
      </p>
      <Button class="btn--sign-up">Play without rewards</Button>
      <Button class="btn--skip" type="link">Play without rewards</Button>
    </card>
  </App>
</template>

<style lang='scss'>
.app {
  background: url("~/static/images/blur-bg.png") no-repeat center / cover;
  position: relative;

  button {
    margin-bottom: 0;
    margin-top: 30px;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>

<script>
export default {};
</script>