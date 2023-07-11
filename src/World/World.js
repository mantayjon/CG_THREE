import { createCamera } from './components/camera.js';
import { createCube, animateCube, moveCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createPyramid, animatePyramide } from './components/pyramid.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Reziser.js';
import { createText } from './components/text.js';







// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let cube, cube1;
let pyramid;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    cube = createCube();
    cube1 = createCube();
    pyramid = createPyramid();

    const light = createLights();
    const text = createText();

    scene.add(cube, light);
    // scene.add(cube1, light);
    // scene.add(pyramid, light);
    scene.add(text);

  

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {

     //animateCube(cube);
    // moveCube(cube1);
    // animatePyramide(pyramid);

    renderer.render(scene, camera);

    requestAnimationFrame(() => this.render());;
  }
}

export { World };

