import * as THREE from 'three';

export default class ResourceLoader {
  constructor() {
    this.register();
  }

  register() {
    this.queue = [];
    this.resource = {};
    this.loading = false;
  }

  addToQueue(path, name = '') {
    if (!name) {
      name = path;
    }
    this.queue.push({
      path,
      name
    });
  }

  startLoad(onProgress, onComplete) {
    if (this.loading) return;
    let completed = 0;
    const total = this.queue.length;
    this.loading = true;
    this.queue.forEach(rs => {
      new THREE.TextureLoader().loadAsync(rs.path).then(value => {
        completed++;
        const pct = Math.min(completed / total, 1)
        this.resource[rs.name] = value;
        onProgress(pct);
        if (pct === 1) {
          onComplete(this.resource);
          this.queue = [];
          this.loading = false;
        }
      });
    })
  }
}
