import * as THREE from 'three';
import { getQueryValue } from '../../libs/Helper';
import BushObject from './BushObject';
import CamControl from './CamControl';
import CloudObject from './CloudObject';
// import ElementObject from './ElementObject';
import EnvObject from './EnvObject';
import {
  getScreenSize
} from './Helper';
import LeafParticles from './LeafParticles';
import LightControl from './LightControl';
import MapFromGoogle from './MapFromGoogle';
import RabbitObject from './RabbitObject';
// import PaperBurnObject from './PaperBurnObject';
import ResourceLoader from './ResourceLoader';
// import VortexObject from './VortexObject';
// import WaterFallObject from './WaterFallObject';
// import ThunderObject from './ThunderObject';

const clock = new THREE.Clock(false);
const resourceLoader = new ResourceLoader();
const root = window.root || '';
const debug = false;

export default class Main {
  constructor(container) {
    this.register(container);
  }

  async register(container) {
    const ss = getScreenSize();
    this.fps = 1 / 60;
    this.timeScale = 1;
    this.counter = 0;
    this.running = false;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(ss.width, ss.height);
    this.cc = new CamControl({
      renderer: this.renderer
    });
    this.light = new LightControl({
      scene: this.scene,
      debug
    });
    resourceLoader.addToQueue(`${root}/assets/images/custom-view/bg_3.jpg`, 'bgmap');
    resourceLoader.addToQueue(`${root}/assets/images/custom-view/leaf.png`);
    resourceLoader.addToQueue(`${root}/assets/images/milka_icon.png`);
    resourceLoader.addToQueue(`${root}/assets/images/custom-view/milka_balloon.png`);
    resourceLoader.addToQueue(`${root}/assets/images/custom-view/cloud_bunny.png`);
    resourceLoader.addToQueue(`${root}/assets/images/bush_1.png`);
    resourceLoader.addToQueue(`${root}/assets/images/bush_2.png`);
    const query = getQueryValue('location');
    if (query) {
      const data = new MapFromGoogle().getPanoID(query);
      console.log(data)
    }
    //
    resourceLoader.startLoad(console.log, resource => {
      const env = new EnvObject({
        tex: resource['bgmap']
      });
      this.scene.add(env.mesh);
      this.rabbits = [];
      for (let i = 0; i < 5; i++) {
        const rand = Math.random() * Math.PI * 2;
        const length = Math.random() * 60 + 10;
        const rabbit = new RabbitObject({
          tex: resource[`${root}/assets/images/milka_icon.png`],
          scene: this.scene,
          size: [1, 2],
          position: {
            x: Math.cos(rand) * length,
            y: -5 + 0.02 * length,
            z: Math.sin(rand) * length
          }
        });
        this.rabbits.push(rabbit);
      }
      this.bushes = [];
      for (let i = 0; i < 20; i++) {
        const rand = Math.random() * Math.PI * 2;
        const length = Math.random() * 40 + 10;
        const bush = new BushObject({
          tex: [
            resource[`${root}/assets/images/bush_1.png`],
            resource[`${root}/assets/images/bush_2.png`]
          ],
          scene: this.scene,
          size: [
            [2, 1.3],
            [2, 1.7]
          ],
          position: {
            x: Math.cos(rand) * length,
            y: -5 + 0.02 * length,
            z: Math.sin(rand) * length
          }
        });
        this.bushes.push(bush);
      }
      this.clouds = [];
      for (let i = 0; i < 20; i++) {
        const cloud = new CloudObject({
          tex: [
            resource[`${root}/assets/images/custom-view/milka_balloon.png`],
            resource[`${root}/assets/images/custom-view/cloud_bunny.png`]
          ],
          scene: this.scene,
          size: [8, 8]
        });
        this.clouds.push(cloud);
      }
      this.leafParticles = new LeafParticles({
        textures: [resource[`${root}/assets/images/custom-view/leaf.png`]],
        total: 80,
        size: [2, 2],
        delay: 3000,
        smoothInOut: true,
        scene: this.scene
      });
    });
    //
    (container || document.body).prepend(this.renderer.domElement);
  }

  start() {
    this.running = true;
    clock.start();
    this.loop();
  }

  stop() {
    clock.stop();
    this.running = false;
  }

  loop() {
    if (!this.running) return;
    this.render();
    this.update();
    requestAnimationFrame(this.loop.bind(this));
  }

  update() {
    const delta = clock.getDelta() / this.fps * this.timeScale;
    this.counter++;
    this.cc && this.cc.update();
    this.light && this.light.update();
    this.leafParticles && this.leafParticles.update(delta);
    this.el && this.el.update(delta);
    this.waterFall && this.waterFall.update(delta);
    this.paperBurn && this.paperBurn.update(delta);
    this.vortex && this.vortex.update(delta);
    this.thunder && this.thunder.update(delta);
    this.rabbits && this.rabbits.forEach(rabbit => rabbit.update(delta));
    this.bushes && this.bushes.forEach(bush => bush.update(delta));
    this.clouds && this.clouds.forEach(cloud => cloud.update(delta));
  }

  render() {
    this.renderer.render(this.scene, this.cc.camera);
  }
}
