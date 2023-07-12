import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Reziser.js';
import { createText, handleKeyDown} from './components/text.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Object3D } from 'three';



let camera;
let renderer;
let scene;
let textMesh1 = new Object3D;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    container.append(renderer.domElement);

    const light = createLights();

    createText().then((mesh) => {
      textMesh1 = mesh;
      scene.add(textMesh1, light);
    }).catch((error) => {
      console.error(error);
    });

    
    console.log(textMesh1);

    

    const controls = new OrbitControls(camera, renderer.domElement);
    
    document.addEventListener('keydown', handleKeyDown.bind(this, textMesh1));
    
    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // textMesh.rotation.y += 0.001 ;
    // textMesh.rotation.x += 0.01;
   
    renderer.render(scene, camera);

    requestAnimationFrame(() => this.render());;
  }
}

export { World };

