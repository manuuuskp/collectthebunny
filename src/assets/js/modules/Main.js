import BaseModule from "./BaseModule"

export default class Main extends BaseModule {
  register() {
    this.player = {
      name: "Rabbit Collector",
      score: 0
    }
    this.screens = {
      address: this.el.querySelector('.js--screen-address'),
      pano: this.el.querySelector('.js--screen-address'),
    }
    this.init()
  }

  init() {
    // this.process = new f
    // this.initScreens()
    // this.process.showScreen("info")
    // this.screenInfo()
    // this.screenMap(this.process.screens.map)
  }
}
