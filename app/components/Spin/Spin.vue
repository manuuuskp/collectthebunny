<template>
  <div class="spin">
    <h1>Spin the Wheel</h1>
    <p class="sub-head">and win exciting prizes!</p>
    <div class="img-wrapper">
      <img src="images/wheel.png" alt="" />
    </div>
    <Button :count="3">Spin the wheel</Button>
    <Button type="link" @click="$router.push({
      name: 'profile'
    })">View prize history</Button>
    <Button type="close" @click="$emit('close')"></Button>
  </div>
</template>

<style lang='scss' scoped>
.spin {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.img-wrapper {
  margin: auto;
}
button {
  margin-top: 20px;
}
</style>

<script>
export default {};
</script>