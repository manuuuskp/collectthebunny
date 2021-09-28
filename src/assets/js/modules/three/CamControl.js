import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import {
  DeviceOrientationControls
} from 'three/examples/jsm/controls/DeviceOrientationControls';


export default class CamControl {
  constructor(options) {
    this.register(options);
  }

  register(options) {
    this.options = options;
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.y = 1;
    const onDevicemotion = event => {
      if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma) {
        this.control = new DeviceOrientationControls(this.camera);
        this.control.connect();
        window.removeEventListener('devicemotion', onDevicemotion);
      }
    }
    window.addEventListener('devicemotion', onDevicemotion);
    setTimeout(() => {
      if (!this.control) {
        this.control = new OrbitControls(this.camera, this.options.renderer.domElement);
        this.control.target.set(Math.cos(Math.PI * -0.5), 1, Math.sin(Math.PI * -0.5));
        this.control.enableDamping = true;
        this.control.dampingFactor = 0.06;
        this.control.rotateSpeed = -0.24; //negative to revert direction
        this.control.update();
      }
    }, 100);
  }

  update() {
    this.control && this.control.update();
  }
}
