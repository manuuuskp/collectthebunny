import * as THREE from 'three';

export default class EnvObject {
  constructor(options) {
    this.register({
      radius: 200,
      width: 60,
      height: 60,
      ...options
    });
  }

  register(options) {
    this.options = options;
    this.tex = this.options.tex;
    this.geo = new THREE.SphereBufferGeometry(this.options.radius, this.options.width, this.options.height);
    this.mat = new THREE.MeshBasicMaterial({
      map: this.tex
    });
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.geo.scale(-1, 1, 1);
  }
}
