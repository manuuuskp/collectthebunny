import BaseModule from "./BaseModule"
import { $helper } from "../libs/Helper"

export default class Address extends BaseModule {
  register() {
    this.input = this.el.querySelector('.js--address')
    this.btnPlay = this.el.querySelector('.js--btn-play')

    this.init()
  }

  async init() {
    this.autocomplete = await this.initAutocomplete(this.input, {componentRestrictions: { country: "fr" }})
    if (!this.autocomplete) return

    this.btnPlay.addEventListener('click', async () => {
      this.permission()
      const location = await this.getGeocode(this.input.value)
      if (location) {
        const res = await this.searchSV(location, 100)
        console.log(res.data)
        if (res && res.data) {
          $helper.publish('showPanorama', res.data)
          this.el.hidden = true
        } else {
          console.log('no pano')
        }
      } else {
        console.log('no address')
      }
    })
  }

  async initAutocomplete(el, options = {}) {
    let count = 0
    return await new Promise(resolve => {
      this.intervalInit = setInterval(() => {
        if (count > 1000) {
          clearInterval(this.intervalInit)
          resolve(null)
        } else if (window.mapSDKReady) {
          clearInterval(this.intervalInit)
          resolve(new window.google.maps.places.Autocomplete(el, options))
        } else {
          count++
        }
      }, 100)
    })
  }

  async getGeocode(address) {
    const geocoder = new window.google.maps.Geocoder()
    try {
      const geocode = await geocoder.geocode({address})
      return geocode?.results[0]?.geometry?.location
    } catch(e) {
      console.log(e)
      return null
    }
  }

  async searchSV(location, radius) {
    const streetViewService = new window.google.maps.StreetViewService()
    try {
      return await streetViewService.getPanorama({ location, radius, source: 'outdoor' })
    } catch(e) {
      console.log(e)
      return null
    }
  }

  permission() {
    if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
      // (optional) Do something before API request prompt.
      DeviceMotionEvent.requestPermission()
        .then(response => {
          // (optional) Do something after API prompt dismissed.
          if (response === "granted") {
            window.addEventListener("devicemotion", (e) => {
              console.log(e)
              // do something for 'e' here.
            })
          }
        })
        .catch(console.error)
    } else {
      console.log('DeviceMotionEvent is not defined')
    }
  }
}
