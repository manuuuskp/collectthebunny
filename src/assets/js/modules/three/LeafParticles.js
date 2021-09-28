import LeafObject from './LeafObject';

export default class LeafParticles {
  constructor(options) {
    this.register({
      total: 100,
      size: [3, 3],
      delay: 0,
      ...options
    });
  }

  register(options) {
    this.options = options;
    this.scene = options.scene;
    this.size = options.size;
    this.delay = options.delay;
    this.smoothInOut = options.smoothInOut;
    this.textures = options.textures;
    this.particles = [...Array(this.options.total)].map(() => {
      return new LeafObject({
        size: this.size,
        scene: this.scene,
        tex: this.textures[~~(Math.random() * this.textures.length)],
        delay: Math.random() * this.delay,
        smoothInOut: this.smoothInOut,
        initPosition: {
          x: 60,
          y: 60,
          z: 60
        },
        range: {
          x: 20,
          y: 60,
          z: 20
        },
        endPosition: {
          type: 'y',
          y: -60
        }
      });
    });
  }

  update(delta) {
    this.particles.forEach(p => p.update(delta));
  }
}
