<!-- Please remove this file from your project -->
<template>
  <div class="inventory">
    <div class="inventory__item">
      <div class="qty">1</div>
      <div class="unit">Raffle Ticket</div>
      <Button class="button" type="primary-sm">Spin now</Button>
    </div>
    <div class="inventory__item">
      <div class="qty">10</div>
      <div class="unit">Points</div>
      <Button class="button" type="primary-sm">Collect more</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inventory {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
}

.inventory__item {
  background: linear-gradient(0deg, #f4eeff, #f4eeff), #d0d0f5;
  box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.15),
    inset 0px -6px 11px -6px rgba(88, 82, 123, 0.5),
    inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
  border-radius: 40px;
  width: calc(50% - 8px);
  padding: 11px 28px 16px;

  .qty {
    font-family: $font-jumble;
    font-size: 40px;
    line-height: 1.1;
    text-align: center;
    letter-spacing: -0.02em;
    color: #34337d;
  }

  .unit {
    font-size: 14px;
    line-height: 1.1;
    font-weight: 500;
    text-align: center;
    color: #34337d;
  }

  button {
    margin-top: 10px;
    min-width: 0;
    width: 100%;
  }
}
</style>

<script>
export default {};
</script>