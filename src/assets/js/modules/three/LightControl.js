import * as THREE from 'three';

export default class LightControl {
  constructor(options) {
    this.register(options);
  }

  register(options) {
    this.options = options;
    this.scene = options.scene;
    this.debug = options.debug;
    this.helpers = [];
    this.lights = [];
    this.lights.push(new THREE.DirectionalLight(0xffffff));
    this.lights[0].position.set(Math.cos(Math.PI * -0.4), 2, Math.sin(Math.PI * -0.4));
    this.lights.push(new THREE.DirectionalLight(0xffffff, 0.65));
    this.lights[1].position.set(Math.cos(Math.PI * 0.8), 0, Math.sin(Math.PI * 0.8));
    this.lights.forEach(l => this.scene.add(l));
    //
    if (this.debug) {
      this.lights.forEach(l => {
        const helper = new THREE.DirectionalLightHelper(l, 10);
        this.helpers.push(helper);
        this.scene.add(helper);
        helper.update();
      });
    }
  }

  update() {
    this.helpers.forEach(h => h.update);
  }
}
