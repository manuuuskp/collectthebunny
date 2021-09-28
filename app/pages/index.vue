<template>
  <App class="overlay">
    <div class="img-wrapper">
      <img src="~/static/images/home-logo.png" alt="" />
    </div>
    <Slider class="slider">
      <div class="swiper-slide">
        For every 10 points, you can redeem a raffle ticket to win an exciting
        gift.
      </div>
      <div class="swiper-slide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div class="swiper-slide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </Slider>
    <Button
      class="btn--start"
      type="primary"
      :count="3"
      @click="goto('loading')"
      >Start Collecting</Button
    >
    <Button class="btn--sign-in" type="link" @click="goto('sign-in')"
      >Sign in</Button
    >
    <Button class="btn--sign-in" type="link" @click="handleOnClick('facebook')"
      >Sign in with Facebook</Button
    >
    <Button class="btn--sign-in" type="link" @click="handleOnClick('google')"
      >Sign in with Google</Button
    >
    <Button class="btn--sign-in" type="link" @click="checkUser()"
      >Check user</Button
    >
    <Button class="btn--sign-in" type="link" @click="clickLogout()"
      >Logout</Button
    >
  </App>
</template>

<style lang='scss' scoped>
.app::v-deep {
  background: url("~/static/images/home-bg--mb.png") no-repeat top / cover;
  position: relative;

  @include screen(sm) {
    background-image: url("~/static/images/home-bg.png");
    background-position: bottom center;
  }

  .app-container {
    min-height: 100%;
    justify-content: flex-end;
  }
  .img-wrapper {
    width: 100%;
    max-width: 700px;
    margin: auto;

    @include screen(sm) {
      width: 49vw;
      margin: 0 auto;
    }
  }
  .slider {
    flex: 0 0 auto;
    width: 100%;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .btn--sign-in,
  .btn--start {
    margin-top: 30px;
  }
}
</style>

<script>
import Slider from "../components/Slider.vue";
import { facebookProvider, googleProvider } from "./../config/authmethod";
import socialMediaAuth from "./../services/auth";
import app, { db } from "./../config/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);
export default {
  components: { Slider },
  methods: {
    goto(name = null) {
      if (!name) return;
      this.$router.push({
        name,
      });
    },
    async handleOnClick(provider) {
      let res;
      switch (provider) {
        case "facebook":
          console.log(facebookProvider);
          res = await socialMediaAuth(facebookProvider, "facebook");

          this.insertDocument(res, "facebook");
          window.location.href = 'https://localhost:8000/milka-app/profile';
          console.log(res);
          break;
        case "google":
          console.log(googleProvider);
          res = await socialMediaAuth(googleProvider, "google");

          this.insertDocument(res, "google");
          console.log(res);
          break;
      }
    },
    async clickLogout() {
      signOut(auth)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkUser() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user is logged in");
          console.log(user);
        } else {
          console.log("user is logged out");
        }
      });
    },
    async insertDocument(res, signinMethod) {
      await setDoc(doc(db, "users", res.uid), {
        user_id: res.uid,
        full_name: res.displayName,
        signin_method: signinMethod,
        avatar_url: res.photoURL,
        points: 0,
        // created: app.FieldValue.serverTimestamp(),
      });
    },
  },
};
</script>
