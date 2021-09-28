import * as THREE from 'three';

export default class LeafObject {
  constructor(options) {
    this.register(options);
  }

  register(options) {
    this.options = options;
    this.scene = options.scene;
    this.width = options.size[0];
    this.height = options.size[1];
    this.initPosInfo = options.initPosition;
    this.endPosInfo = options.endPosition;
    this.range = options.range;
    this.tex = options.tex;
    this.delay = options.delay;
    this.smoothInOut = options.smoothInOut;
    this.geo = new THREE.PlaneBufferGeometry(this.width, this.height, 1, 1);
    this.mat = new THREE.MeshBasicMaterial({
      map: this.tex,
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: true,
      depthWrite: true
    });
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    //
    const rand = Math.random() * 2 * Math.PI;
    this.mesh.position.set(
      Math.cos(rand) * this.initPosInfo.x + Math.random() * this.range.x,
      this.initPosInfo.y + Math.random() * this.range.y,
      Math.sin(rand) * this.initPosInfo.z + Math.random() * this.range.z);
    this.emitPosition = this.mesh.position.clone();
    this.velocity = {
      y: Math.random() * -0.08 - 0.2,
      arcXZ: Math.random() * 2 * Math.PI,
      arcChange: Math.random() * 0.08 - 0.04,
      length: Math.random() * 0.6
    };
    this.rotation = {
      x: Math.random() * 0.1 - 0.05,
      z: Math.random() * 0.1 - 0.05
    }
    this.geo.rotateY(Math.atan2(this.mesh.position.x, this.mesh.position.z));
    setTimeout(() => {
      this.scene.add(this.mesh);
    }, this.delay);
  }

  update(delta) {
    this.velocity.arcXZ += this.velocity.arcChange * delta;
    const length = this.velocity.length * delta;
    this.mesh.position.set(
      this.mesh.position.x + Math.cos(this.velocity.arcXZ) * length,
      this.mesh.position.y + this.velocity.y * delta,
      this.mesh.position.z + Math.sin(this.velocity.arcXZ) * length
    )
    this.mesh.rotation.x += this.rotation.x * delta;
    this.mesh.rotation.z += this.rotation.z * delta;
    if (this.mesh.position[this.endPosInfo.type] < this.endPosInfo[this.endPosInfo.type]) {
      this.mesh.position.set(this.emitPosition.x, this.emitPosition.y, this.emitPosition.z);
    }
  }
}
