<template>
  <div class="leaderboard-row">
    <div class="rank">1</div>
    <div class="profile-image">
      <img src="~/static/images/leaderboard-avata.png" alt="" />
    </div>
    <div class="info">
      <div class="name">Joan Reyes</div>
      <div class="score">500</div>
    </div>
    <div class="rank-icon rank-1"></div>
  </div>
</template>

<style lang='scss' scoped>
.leaderboard-row {
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: linear-gradient(
    to right,
    #9D9DE3 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 10px 2px;
  background-repeat: repeat-x;

  &.leaderboard-row__sticky {
    height: 80px;
    background: $colorYellow;
    border-radius: 40px;

    .rank {
      width: 110px;
      text-align: left;
      padding-left: 30px;
    }
  }
}
.rank {
  flex: 0 0 auto;
  width: 50px;
  font-family: $font-jumble;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #3734bf;
  padding-right: 15px;
  text-align: right;
}
.profile-image {
  flex: 0 0 auto;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
}

.info {
  padding-left: 15px;

  .name {
    font-size: 18px;
    color: #3734bf;
    font-weight: 500;
  }

  .score {
    font-family: $font-jumble;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: #3734bf;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      display: block;
      width: 15px;
      height: 21px;
      background: url("~/static/images/icons/bunny-ear.png") no-repeat center /
        contain;
      margin-left: 5px;
      margin-top: 2px;
    }
  }
}
.rank-icon {
  width: 32px;
  height: 32px;
  background: no-repeat center / contain;
  margin-right: 10px;
  margin-left: auto;
}

.rank-1 {
  background-image: url("~/static/images/icons/rank-1.png");
}
</style>

<script>
export default {};
</script>