import * as THREE from 'three';

export default class RabbitObject {
  constructor(options) {
    this.register({
      position: {
        x: 0,
        y: 0,
        z: 0
      },
      jump: {
        base: Math.random(),
        step: 0.06
      },
      ...options
    });
  }

  register(options) {
    this.options = options;
    this.scene = options.scene;
    this.width = options.size[0];
    this.height = options.size[1];
    this.position = options.position;
    this.tex = options.tex;
    this.geo = new THREE.PlaneBufferGeometry(this.width, this.height, 1, 1);
    this.mat = new THREE.MeshBasicMaterial({
      map: this.tex,
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: true,
      depthWrite: true
    });
    this.jump = options.jump;
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.position.set(
      this.position.x,
      this.position.y,
      this.position.z);
    this.scene.add(this.mesh);
    this.mesh.rotateY(Math.atan2(this.position.x, this.position.z));
  }

  update(delta) {
    this.jump.base += this.jump.step * delta;
    this.mesh.position.y = this.position.y + Math.abs(Math.cos(this.jump.base));
  }
}
