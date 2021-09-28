import * as THREE from 'three';

export default class BushObject {
  constructor(options) {
    this.register({
      position: {
        x: 0,
        y: 0,
        z: 0
      },
      ...options
    });
  }

  register(options) {
    const index = ~~(Math.random() * options.tex.length);
    this.options = options;
    this.scene = options.scene;
    this.width = options.size[index][0];
    this.height = options.size[index][1];
    this.position = options.position;
    this.tex = options.tex;
    this.geo = new THREE.PlaneBufferGeometry(this.width, this.height, 1, 1);
    this.mat = new THREE.MeshBasicMaterial({
      map: this.tex[index],
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: true,
      depthWrite: true
    });
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.position.set(
      this.position.x,
      this.position.y,
      this.position.z);
    this.scene.add(this.mesh);
    this.mesh.rotateY(Math.atan2(this.position.x, this.position.z));
  }

  update() {}
}
