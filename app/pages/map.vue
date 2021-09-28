<template>
  <App>
    <div ref="map" class="map"></div>
    <card-modal :isShow="showTutorial && false">
      <how-to-play @skip="showTutorial = false" />
    </card-modal>
    <card-modal :isShow="showSpin">
      <spin @close="showSpin = false" />
    </card-modal>
    <leaderboard :isShow="showLeaderboard" @close="showLeaderboard = false" />
    <search-location
      :isShow="showSearch"
      @changeLocation="changeLocation($event)"
      @close="showSearch = false"
    />
    <button class="btn-control btn-control--avatar">
      <img src="~/static/images/leaderboard-avata.png" alt="" />
    </button>
    <button class="btn-control btn-control--audio">
      <icons icon="circle-headphone" />
    </button>
    <button class="btn-control btn-control--glory" @click="toggleLeaderboard()">
      <icons :icon="showLeaderboard ? 'close' : 'circle-glory'" />
    </button>
    <button
      class="btn-control btn-control--prizes"
      :class="{ hidden: locationsActived }"
      :style="`transition-delay: ${locationsActived ? 0 : 0.5}s`"
      @click="showSpin = true"
    >
      <icons icon="wheel" />
    </button>
    <button
      class="btn-control btn-control--location"
      :class="locationsClassName"
      @click="handleSearch"
    >
      <icons v-if="!locationsActived" icon="circle-location-white" />
      <icons v-if="locationsActived" icon="circle-search-white" />
    </button>
    <button
      v-for="(item, index) in specialLocations"
      :key="index"
      class="btn-control btn-control--location btn-control--location--special"
      :class="locationsClassName"
      :style="`
        right: calc(((100% - 60px - (64px * 4)) / 3 + 64px) * ${
          index + 1
        } + 30px);
        transition-delay: ${
          (!locationsActived ? index : specialLocations.length - index) * 0.1
        }s
      `"
      @click="changeLocation(item.address)"
    >
      <img :src="`${item.image}`" alt="" />
    </button>
  </App>
</template>

<style lang='scss' scoped>
.app::v-deep {
  .app-container {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .map {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    [aria-label="Street View"] {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom right,
            transparent,
            rgba(49, 51, 118, 0) 75%,
            rgba(49, 51, 118, 0.9) 100%
          ),
          linear-gradient(
            to bottom,
            transparent,
            rgba(49, 51, 118, 0) 60%,
            rgba(49, 51, 118, 0.9) 100%
          ),
          linear-gradient(
            to top,
            transparent,
            rgba(49, 51, 118, 0) 90%,
            rgba(49, 51, 118, 0.3) 100%
          );
        pointer-events: none;
        mix-blend-mode: multiply;
        z-index: 2;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(49, 51, 118, 0.4);
        pointer-events: none;
        mix-blend-mode: screen;
      }
    }
  }

  .card-modal--search {
    .card {
      background: linear-gradient(
          194.13deg,
          rgba(208, 206, 234, 0) 25.61%,
          rgba(192, 190, 227, 0.6) 86.11%,
          rgba(226, 209, 255, 0.6) 105.12%
        ),
        linear-gradient(0deg, #e2e2fa, #e2e2fa), #d394ff;
      box-shadow: 0px 40px 16px 20px rgba(193, 97, 177, 0.17),
        inset 0px -5px 18px -4px rgba(255, 255, 255, 0.25);
    }
  }

  div[style*="width: 312px; height: 263px"],
  div[style*="width: 333px; height: 221px"],
  div[style*="width: 333px; height: 220px"],
  div[style*="width: 761px; height: 496px"],
  div[style*="width: 66px; height: 66px"]
    div[style*="width: 50px; height: 50px"] {
    pointer-events: none !important;

    img {
      pointer-events: none !important;
    }
  }

  .floating-score {
    position: absolute;
    z-index: 4;
    color: green;
    animation: floating 3s ease;
    font-size: 30px;
    font-weight: 700;
    opacity: 0;
  }
}

.btn-control {
  appearance: none;
  background: transparent;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 100%;
  position: absolute;
  z-index: 3;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: $colorWhite;

  .icon {
    width: 100%;
    flex: 0 0 auto;
  }
}

.btn-control--avatar {
  top: 30px;
  left: 30px;

  img {
    width: 100%;
    height: 100%;
  }
}

.btn-control--audio {
  top: 30px;
  right: 30px;
}
.btn-control--glory {
  top: 80px;
  right: 30px;
}

.btn-control--prizes {
  width: 56px;
  height: 56px;
  bottom: 46px;
  right: 50%;
  transform: translateX(50%);
  background-color: $colorWhite;
  color: $colorDarkLilac;
  transition: all 0.5s;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .icon {
    width: 32px;
  }
}

.btn-control--location {
  position: absolute;
  background-color: $colorWhite;
  color: $colorDarkLilac;
  bottom: 55px;
  right: 30px;
  z-index: 2;
  transition: all 0.5s;
  overflow: hidden;

  &.actived {
    width: 64px;
    height: 64px;
    bottom: 42px;
  }
}

.btn-control--location--special {
  &:not(.actived) {
    opacity: 0;
    right: 0 !important;
    z-index: -1;
    pointer-events: none;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@keyframes floating {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-40px);
    opacity: 0;
  }
}
</style>

<script>
import CardModal from "../components/Card/CardModal.vue";
import Leaderboard from '../components/Leaderboard/Leaderboard.vue';
import HowToPlay from "../components/HowToPlay/HowToPlay.vue";
import Icons from "../components/Icons/Icons.vue";
import SearchLocation from "../components/SearchLocation/SearchLocation.vue";
import Spin from '../components/Spin/Spin.vue';
export default {
  components: {
    CardModal,
    HowToPlay,
    Icons,
    SearchLocation,
    Leaderboard,
    Spin,
  },
  data() {
    return {
      showTutorial: true,
      showSearch: false,
      showLeaderboard: false,
      showSpin: false,
      locationsActived: false,
      specialLocations: [
        {
          name: "",
          address: "Paris, Pháp",
          pano: "",
          image: `./images/marquee-destinations-paris-640x640.jpg`,
        },
        {
          name: "",
          address: "Eiffel Tower, Avenue Anatole France, Pa ri, Pháp",
          pano: "",
          image: "./images/eiffel-tower-800x800.jpg",
        },
        {
          name: "",
          address:
            "Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Pa ri, Pháp",
          pano: "",
          image: "./images/Notre-Dame_facade-occidentale_parvis.jpg",
        },
      ],
      map: null,
      currentLatLng: null,
      rabbits: [],
      maxRabbit: 3,
      rabbitAppearChance: 0,
      assets: [],
      birdsCount: 0,
      grassCount: 10,
      collectedScore: 10,
      totalScore: 0
    };
  },
  computed: {
    locationsClassName() {
      return this.locationsActived ? "actived" : "";
    },
  },
  async mounted() {
    await this.init();
  },
  methods: {
    async init() {
      if (!window.google) {
        requestAnimationFrame(async () => {
          await this.init();
        });
      } else {
        await this.initMap(this.$refs.map);
        await this.changeLocation("current");
      }
    },
    toggleLocations() {
      this.locationsActived = !this.locationsActived;
    },
    toggleLeaderboard() {
      this.showLeaderboard = !this.showLeaderboard;
    },
    async changeLocation(address) {
      const latLng =
        address === "current"
          ? await this.getLocation()
          : await this.getLatLng(address);
      const res = await this.searchPanorama(latLng);
      console.log(res)
      if (!res?.data?.location) return
      this.currentLatLng = {
        lat: res.data.location.latLng.lat(),
        lng: res.data.location.latLng.lng(),
      };
      this.showPanorama(res.data.location.pano);
      this.showSearch = false;
      this.locationsActived = false;
      this.clearRabbits();
      this.clearAssets();
      this.addAssets();
    },
    async getLocation() {
      return new Promise((resolve, reject) => {
        try {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                resolve(pos);
              },
              () => {
                resolve(null);
              }
            );
          } else {
            // Browser doesn't support Geolocation
            reject();
          }
        } catch (e) {
          console.log(e);
          reject(e);
        }
      });
    },
    async initMap(el, config = {}) {
      this.map = new window.google.maps.Map(el, config);
      this.center = (await this.getLocation()) || this.map.getCenter();
      this.streetView = this.initStreetView(this.map);
    },
    initStreetView(map) {
      const streetView = map.getStreetView();
      streetView.setOptions({
        fullscreenControl: false,
        zoomControl: false,
        addressControl: false,
        enableCloseButton: false,
      });
      streetView.addListener("pano_changed", () => {
        if (
          streetView.getVisible() &&
          this.rabbits.length < this.maxRabbit &&
          this.ifAddRabbit(this.rabbitAppearChance)
        ) {
          this.rabbits.push(
            this.addRabbit(this.getRandomPosition(this.currentLatLng))
          );
          this.rabbitAppearChance = 0;
        } else {
          this.rabbitAppearChance += 10;
        }
      });

      streetView.addListener("pov_changed", () => {
        clearTimeout(this.timerPovChange);
        if (
          streetView.getLinks() &&
          !streetView.getLinks().length &&
          this.rabbits.length < this.maxRabbit
        ) {
          this.rabbitAppearChance += 0.2;
          this.timerPovChange = setTimeout(() => {
            if (this.ifAddRabbit(this.rabbitAppearChance)) {
              this.rabbits.push(
                this.addRabbit(this.getRandomPosition(this.currentLatLng))
              );
              this.rabbitAppearChance = 0;
            }
          }, 300);
        }
      });

      return streetView;
    },
    showPanorama(pano) {
      this.streetView.setPano(pano);
      this.streetView.setVisible(true);
    },
    async searchPanorama(location, radius = 1000) {
      const streetViewService = new window.google.maps.StreetViewService();
      try {
        return await streetViewService.getPanorama({ location, radius, source: google.maps.StreetViewSource.OUTDOOR });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    async getLatLng(address) {
      const geocoder = new google.maps.Geocoder();
      return new Promise((resolve) => {
        geocoder.geocode(
          {
            address: address,
          },
          (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              resolve({
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
              });
            } else {
              console.log(results);
              resolve();
            }
          }
        );
      });
    },
    handleSearch() {
      if (!this.locationsActived) {
        this.locationsActived = true;
      } else {
        this.locationsActived = false;
        this.showSearch = true;
      }
    },
    ifAddRabbit(ratio = 0) {
      return Math.random() < ratio / 100;
    },
    getRandomPosition(center, radius = 100) {
      const n = radius / 111300;
      const r = Math.random();
      const o = Math.random();
      const i = n * Math.sqrt(r);
      const a = 2 * Math.PI * o;
      let u = i * Math.cos(a);
      u /= Math.cos(center.lng);
      const c = i * Math.sin(a);
      return {
        lat: center.lat + u,
        lng: center.lng + c,
      };
    },
    addMarker(options = {}) {
      return new window.google.maps.Marker({
        map: this.map,
        ...options,
      });
    },
    addRabbit(position) {
      const icon = {
        url: "./images/Rabbit_2.webp",
        size: new window.google.maps.Size(234, 431),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(234 / 2, 0),
      };
      const marker = this.addMarker({
        position,
        icon,
        // animation: window.google.maps.Animation.BOUNCE
      });

      marker.addListener("click", (e) => {
        // marker.setIcon({
        //   url: "./images/Rabbit_1.webp",
        //   size: new window.google.maps.Size(761, 496),
        //   origin: new window.google.maps.Point(0, 0),
        //   anchor: new window.google.maps.Point(761 / 2, 496 - 431),
        // });
        this.collect(e.pixel);
        setTimeout(() => {
          marker.setMap(null);
          this.rabbits = this.rabbits.filter((r) => r !== marker);
        }, 0);
      });

      return marker;
    },
    addBird(position) {
      const icon = {
        url: "./images/bird.webp",
        size: new window.google.maps.Size(50, 50),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(0, Math.random() * 400 + 400),
      };
      const marker = this.addMarker({
        position,
        icon,
        animation: window.google.maps.Animation.BOUNCE,
      });

      return marker;
    },
    addGrass(position) {
      let icon;
      const rand = Math.random();
      if (rand < 1 / 3) {
        icon = {
          url: "./images/BUSH1_small.png",
          size: new window.google.maps.Size(312, 263),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(0, 0),
        };
      } else if (rand < 2 / 3) {
        icon = {
          url: "./images/BUSH2_small.png",
          size: new window.google.maps.Size(333, 221),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(0, 0),
        };
      } else {
        icon = {
          url: "./images/BUSH3_small.png",
          size: new window.google.maps.Size(333, 220),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(0, 0),
        };
      }

      const marker = this.addMarker({
        position,
        icon,
      });

      return marker;
    },
    addAssets() {
      for (let i = 0; i < this.birdsCount; i++) {
        this.assets.push(
          this.addBird(this.getRandomPosition(this.currentLatLng))
        );
      }
      for (let i = 0; i < this.grassCount; i++) {
        this.assets.push(
          this.addGrass(this.getRandomPosition(this.currentLatLng))
        );
      }
    },
    clearRabbits() {
      this.rabbits.forEach((r) => {
        r.setMap(null);
      });
      this.rabbits = [];
    },
    clearAssets() {
      this.assets.forEach((a) => {
        a.setMap(null);
      });
      this.assets = [];
    },
    collect(pixel) {
      const span = document.createElement("span");
      span.innerText = `+${this.collectedScore}`;
      span.classList.add("floating-score");
      span.style.top = `${pixel.y}px`;
      span.style.left = `${pixel.x - 30}px`;
      this.$el.appendChild(span);
      this.totalScore += this.collectedScore

      setTimeout(() => {
        span.remove();
      }, 5000);
    },
  },
};
</script>
    