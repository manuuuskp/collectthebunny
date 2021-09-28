<template>
  <div class="history__row">
    <div class="icon-wrapper">
      <icons icon="easter-basket" />
    </div>
    <div class="name">{{name}}</div>
    <div class="date">{{points}}</div>
  </div>
</template>

<style lang="scss" scoped>
.history__row {
  display: flex;
  width: 100%;
  padding: 24px 15px;
  align-items: center;
  font-size: 18px;
  line-height: 1.1;
  color: #34337d;
  background-image: linear-gradient(
    to right,
    #9d9de3 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 10px 2px;
  background-repeat: repeat-x;
}
.icon-wrapper {
  flex: 0 0 auto;
  width: 64px;
  height: 64px;
  background: linear-gradient(0deg, #f4eeff, #f4eeff), #d0d0f5;
  box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.15),
    inset 0px -6px 11px -6px rgba(88, 82, 123, 0.5),
    inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
  border-radius: 40px;
  margin-right: 15px;
  color: #34337d;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 24px;
  }
}

.name {
  flex: 1 1 auto;
  font-weight: bolder;
}

.date {
  flex: 0 0 auto;
}
</style>

<script>
export default {
  components: {},
  props: ["name", "points"]
};
</script>