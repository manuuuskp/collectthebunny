<template>
  <card type="small" :showBack="true" @back="$emit('back')">
    <h1>Profile</h1>
    <div class="profile">
      <div class="profile__image">
        <img src="~/static/images/leaderboard-avata.png" alt="" />
      </div>
      <div class="profile__info">
        <div class="name">Manoj prabhu</div>
        <div class="email" title="jasper.miguel@mail.com">
          manojprabhu@mail.com
        </div>
        <Button class="btn--edit-profile" type="link">Edit profile</Button>
        <Button class="btn--log-out" type="link">Log Out</Button>
      </div>
    </div>
  </card>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

.profile__image {
  flex: 0 0 auto;
  width: 96px;
  height: 96px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.19);

  img {
    width: 100%;
  }
}

.profile__info {
  flex: 1 1 auto;
  margin-left: 16px;
  text-align: left;
  width: calc(100% - 96px - 16px);

  .name {
    font-weight: 900;
    font-size: 32px;
    letter-spacing: -0.02em;
    color: $colorWhite;
  }

  .email {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.btn--edit-profile {
  margin-top: 20px;
  margin-right: 22px;
}

.btn--log-out {
  margin-top: 25px;
}
</style>

<script>
export default {};
</script>