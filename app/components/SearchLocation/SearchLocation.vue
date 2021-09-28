<!-- Please remove this file from your project -->
<template>
  <card-modal
    :isShow="isShow"
    @changeLocation="changeLocation($event)"
    @close="$emit('close')"
    class="card-modal--search"
  >
    <div class="search-container">
      <input type="text" ref="input" v-model="term" @input="getPredicts()" />
      <div class="scroll-container">
        <div
          class="predict-item current-location"
          @click="$emit('changeLocation', 'current')"
        >
          <icons icon="location" /> Use my location
        </div>
        <div
          class="predict-item"
          v-for="p in predictions"
          :key="p.place_id"
          @click="$emit('changeLocation', p.description)"
        >
          {{ p.description }}
        </div>
      </div>
    </div>
  </card-modal>
</template>

<style lang="scss" scoped>
.search-container::v-deep {
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-flow: column;
}

input {
  flex: 0 0 auto;
  display: block;
  width: 100%;
  height: 80px;
  border: none;
  background: url(~/static/images/icons/search.svg) no-repeat left 24px center,
    linear-gradient(0deg, #f3f3ff, #f3f3ff), #facd55;
  box-shadow: 0px 23px 16px -10px rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  font-size: 20px;
  color: #34337d;
  padding: 0 24px 0 72px;

  &:focus {
    outline: none;
  }
}

.scroll-container {
  flex: 1 1 auto;
  overflow: auto;
  padding-right: 10px;
  margin-top: 32px;
}

.predict-item {
  font-size: 18px;
  color: #34337d;
  margin-top: 32px;
  cursor: pointer;

  .icon {
    width: 24px;
    margin-right: 9px;
  }

  &.current-location {
    display: flex;
    align-items: center;
    margin-top: 0;
  }
}
</style>
<script>
export default {
  data() {
    return {
      term: "",
      predictions: [],
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  async mounted() {
    this.init();
  },
  methods: {
    async init() {
      if (!window.google) {
        requestAnimationFrame(() => {
          this.init();
        });
      } else {
        this.acSV = this.initAutocompleteService();
      }
    },
    initAutocompleteService() {
      return new window.google.maps.places.AutocompleteService();
    },

    async getPredicts() {
      this.debounceGetPredicts && clearTimeout(this.debounceGetPredicts);
      this.debounceGetPredicts = setTimeout(async () => {
        console.log(this.acSV);
        const rs = await this.acSV.getPlacePredictions({
          input: this.term,
          // type: "geocode",
          componentRestrictions: {country: 'fr'}
        });
        this.predictions = rs.predictions;
      }, 400);
    },
  },
};
</script>

