<template>
  <div class="profile__spinning-history">
    <div class="head">My Friends</div>
    <profile-spinning-history-row name="Santhosh sivan" points="540 points"/>
    <profile-spinning-history-row name="Vinish Wilson" points="370 points"/>
    <profile-spinning-history-row name="Jayachander" points="290 points"/>
    <profile-spinning-history-row name="Prakash" points="240 points"/>
    <profile-spinning-history-row name="Nandhini" points="90 points"/>
    <profile-spinning-history-row name="Kowshika" points="70 points"/>
    <profile-spinning-history-row name="Hari priya" points="20 points"/>
  </div>
</template>

<style lang="scss" scoped>
.profile__spinning-history {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.head {
  font-size: 20px;
  line-height: 1.1;
  text-align: center;
  color: #34337d;
  padding: 20px 15px;
  border-bottom: 1px solid #34337d;
  font-weight: bold;
}
</style>

<script>
import ProfileSpinningHistoryRow from './ProfileSpinningHistoryRow.vue';
export default {
  components: {
    ProfileSpinningHistoryRow,
  },
};
</script>