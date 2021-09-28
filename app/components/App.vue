<!-- Please remove this file from your project -->
<template>
  <div class="app">
    <div class="app-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: relative;

  &.overlay {
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(
        180deg,
        rgba(54, 49, 123, 0) 14.92%,
        rgba(54, 49, 123, 0.8) 69.09%
      );
    }
  }
}
.app-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  overflow: auto;
  z-index: 2;
  height: 100%;

  @include screen (sm) {
    padding: 30px;
  }
}
</style>

<script>
export default {
  created() {},

  mounted() {
    const height = this.getScreenHeight();
    this.setScreenHeight(height);
    this.loadMapSDK()

    window.addEventListener("resize", () => {
      const height = this.getScreenHeight();
      this.setScreenHeight(height);
    });
  },

  methods: {
    setScreenHeight(height) {
      this.$el.style.height = height;
    },

    getScreenHeight() {
      const div = document.createElement("div");
      div.style.opacity = 0;
      div.style.pointerEvents = "none";
      div.style.position = "fixed";
      div.style.top = 0;
      div.style.height = "100%";
      div.style.width = "100%";
      document.body.appendChild(div);

      const height = window.getComputedStyle(div).height;
      div.remove();
      return height;
    },

    loadMapSDK() {
      if (!window.google && !this.$store.state.map.state) {
        this.$store.dispatch('upsertMap', {state: 'loading'})
        const script = document.createElement('script')
        script.hid = 'maps-googleapis'
        script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDYgB3CurAihKjIB-cE39Fl4vH8DJsixZo`
        script.defer = true
        script.callback = () => {
          this.$store.dispatch('upsertMap', {state: 'ready'})
        }
        document.head.appendChild(script)
      } 
    },

    goto() {
      this.$router.push({
        name: "test",
      });
    },
  },
};
</script>