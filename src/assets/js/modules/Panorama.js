import BaseModule from "./BaseModule"
import { $helper } from "../libs/Helper"

export default class Panorama extends BaseModule {
  register() {
    this.mapEl = this.el.querySelector('.js--map')
    this.scoreEl = this.el.querySelector('.js--score')
    this.config = {}
    this.decorations = []
    this.rabbits = []
    this.maxRabbit = 3
    this.rngChance = 0
    this.score = 0
    this.collectedScore = 10
    this.center = null

    this.init()

    $helper.subscribe('showPanorama', (data) => {
      this.el.hidden = false
      this.center = data?.location?.latLng?.toJSON()
      this.showPanorama(data?.location?.pano)
    })
  }

  async init() {
    this.map = await this.initMap(this.mapEl, this.config)
    if (!this.map) return
    this.streetView = this.initPano()
  }

  async initMap(el, config) {
    let count = 0
    return await new Promise(resolve => {
      this.intervalInit = setInterval(() => {
        if (count > 1000) {
          clearInterval(this.intervalInit)
          resolve(null)
        } else if (window.mapSDKReady) {
          clearInterval(this.intervalInit)
          resolve(new window.google.maps.Map(el, config))
        } else {
          count++
        }
      }, 100)
    })
  }

  initPano() {
    const panorama = this.map.getStreetView()
    panorama.setOptions({
      fullscreenControl: false,
      zoomControl: false,
      addressControl: false,
      enableCloseButton: false
    })
    panorama.addListener("pano_changed", (() => {
      if (panorama.getVisible() && this.rabbits.length < this.maxRabbit && this.isAdd(this.rngChance)) {
        this.rabbits.push(this.addRabbit(this.getRandomPosition(this.center)))
        this.rngChance = 0
      } else {
        this.rngChance += 10
      }
    }))

    panorama.addListener("pov_changed", (() => {
      clearTimeout(this.timerPovChange)
      if (panorama.getLinks() && !panorama.getLinks().length && this.rabbits.length < this.maxRabbit) {
        this.rngChance += 0.2
        this.timerPovChange = setTimeout(() => {
          if (this.isAdd(this.rngChance)) {
            this.rabbits.push(this.addRabbit(this.getRandomPosition(this.center)))
            this.rngChance = 0
          }
        }, 300)
      }
    }))

    return panorama
  }

  showPanorama(pano) {
    this.streetView.setPano(pano)
    this.streetView.setVisible(true)
    this.decorations.push(this.addBird(this.getRandomPosition(this.center)))
    this.decorations.push(this.addBird(this.getRandomPosition(this.center)))
    this.decorations.push(this.addBird(this.getRandomPosition(this.center)))
    this.decorations.push(this.addBird(this.getRandomPosition(this.center)))
    this.decorations.push(this.addGrass(this.getRandomPosition(this.center, 50)))
    this.decorations.push(this.addGrass(this.getRandomPosition(this.center, 40)))
    this.decorations.push(this.addGrass(this.getRandomPosition(this.center, 30)))
    this.decorations.push(this.addGrass(this.getRandomPosition(this.center, 20)))
    this.decorations.push(this.addGrass(this.getRandomPosition(this.center, 10)))
  }

  addMarker(options = {}) {
    return new window.google.maps.Marker({
      map: this.map,
      ...options
    })
  }

  addRabbit(position) {
    const icon = {
      url: "./assets/images/Rabbit_2.webp",
      size: new window.google.maps.Size(234, 431),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(234/2, 0)
    }
    const marker = this.addMarker({
      position,
      icon,
      // animation: window.google.maps.Animation.BOUNCE
    })

    marker.addListener("click", (e) => {
      marker.setIcon({
        url: "./assets/images/Rabbit_1.webp",
        size: new window.google.maps.Size(761, 496),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(761/2, 496 - 431)
      })
      this.collect(e.pixel)
      setTimeout(() => {
        marker.setMap(null)
        this.rabbits = this.rabbits.filter(r => r !== marker)
      }, 2000);
    })

    return marker
  }

  addBird(position) {
    const icon = {
      url: "./assets/images/bird.webp",
      size: new window.google.maps.Size(50, 50),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(0, Math.random() * 400 + 400)
    }
    const marker = this.addMarker({
      position,
      icon,
      animation: window.google.maps.Animation.BOUNCE,
    })

    return marker
  }

  addGrass(position) {
    let icon
    const rand = Math.random()
    if (rand < 1/3) {
      icon = {
        url: "./assets/images/BUSH1_small.png",
        size: new window.google.maps.Size(312, 263),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(0, 0)
      }
    } else if (rand < 2/3) {
      icon = {
        url: "./assets/images/BUSH2_small.png",
        size: new window.google.maps.Size(333, 221),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(0, 0)
      }
    } else {
      icon = {
        url: "./assets/images/BUSH3_small.png",
        size: new window.google.maps.Size(333, 220),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(0, 0)
      }
    }

    const marker = this.addMarker({
      position,
      icon
    })

    return marker
  }

  getRandomPosition(center, radius = 20) {
    const n = radius / 111300
    const r = Math.random()
    const o = Math.random()
    const i = n * Math.sqrt(r)
    const a = 2 * Math.PI * o
    let u = i * Math.cos(a)
    u /= Math.cos(center.lng)
    const c = i * Math.sin(a)
    return {
      lat: center.lat + u,
      lng: center.lng + c
    }
  }

  isAdd(ratio = 0) {
    return Math.random() < ratio / 100
  }

  collect(pixel) {
    const span = document.createElement('span')
    span.innerText = `+${this.collectedScore}`
    span.classList.add('floating-score')
    span.style.top = `${pixel.y}px`
    span.style.left = `${pixel.x - 30}px`
    this.el.appendChild(span)
    this.score += this.collectedScore
    this.scoreEl.innerText = this.score

    setTimeout(() => {
      span.remove()
    }, 5000)
  }
}
