import BaseModule from "./BaseModule"
import Main from "./three/Main"
export default class View3D extends BaseModule {
  register() {
    const main = new Main(this.el)
    main.start()
    //
    window.app = main
  }
}
