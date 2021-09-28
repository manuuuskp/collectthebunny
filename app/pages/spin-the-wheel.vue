<template>
  <App>
    <AppBg bg="images/blur-bg.png" />
    <card>
      <h1>Spin the Wheel</h1>
      <p class="sub-head">and win exciting prizes!</p>
      <div class="img-wrapper">
        <img src="images/wheel.png" alt="" />
      </div>
      <Button :count=3>Spin the wheel</Button>
      <Button type="link">View prize history</Button>
      <Button type="close"></Button>
    </card>
  </App>
</template>

<style lang='scss' scoped>
button {
  margin-top: 20px;
}
</style>

<script>
export default {};
</script>