import * as THREE from 'three';

export default class CloudObject {
  constructor(options) {
    this.register({
      rotation: Math.random() * Math.PI * 2,
      direction: (Math.random() * 2 - 1) * 0.002,
      far: Math.random() * 140 + 60,
      high: Math.random() * 100 + 60,
      ...options
    });
  }

  register(options) {
    this.options = options;
    this.scene = options.scene;
    this.width = options.size[0];
    this.height = options.size[1];
    this.rotation = options.rotation;
    this.tex = options.tex;
    this.direction = options.direction;
    this.far = options.far;
    this.high = options.high;
    this.mat = new THREE.SpriteMaterial({
      map: this.tex[~~(Math.random() * this.tex.length)],
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: true,
      depthWrite: true
    });
    this.mesh = new THREE.Sprite(this.mat);
    this.mesh.scale.set(this.width, this.height);
    //
    this.mesh.position.set(Math.cos(this.rotation) * this.far, this.high, Math.sin(this.rotation) * this.far);
    this.scene.add(this.mesh);
  }

  update(delta) {
    this.rotation += this.direction * delta;
    this.mesh.position.set(Math.cos(this.rotation) * this.far, this.high, Math.sin(this.rotation) * this.far);
  }
}
