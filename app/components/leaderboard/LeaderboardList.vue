<template>
  <div class="list-container">
    <div class="tab">
      <div class="tab-item">Nationwide</div>
      <div class="tab-item active">
        My Friends <span class="count">10</span>
      </div>
    </div>
    <div class="list">
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
      <leaderboard-row />
    </div>
    <div class="sticky">
      <leaderboard-row class="leaderboard-row__sticky" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.list-container {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-flow: column;
  overflow: auto;
}
.tab {
  width: 100%;
  height: 60px;
  display: flex;
  flex: 0 0 auto;
}
.tab-item {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  color: #3734bf;
  opacity: 0.5;
  border-bottom: 1px solid #3734bf;

  &.active {
    opacity: 1;
    border-color: #3734bf;
  }

  .count {
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: $colorWhite;
    background-color: #3734bf;
    border-radius: 100%;
    padding-top: 1px;
    margin-left: 4px;
  }
}

.list {
  flex: 1 1 auto;
  overflow: auto;
}

.sticky {
  flex: 0 0 auto;
  margin-top: 15px;
}

.place-holder {
  width: 100%;
  height: 100px;
}
</style>

<script>
import LeaderboardRow from "./LeaderboardRow.vue";
export default {
  components: { LeaderboardRow },
};
</script>