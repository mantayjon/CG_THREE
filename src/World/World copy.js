import { createCamera } from './components/camera.js';
import { createCube, animateCube, moveCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createPyramid, animatePyramide } from './components/pyramid.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Reziser.js';
import { createText, rotateText} from './components/text.js';



import { Mesh, MeshStandardMaterial } from 'three';
import { Object3D } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'; 



// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let cube, cube1;
let pyramid;
let textMesh = new Object3D;

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
    //textMesh = createText();
    console.log(textMesh);

    //scene.add(cube, light);
   // scene.add(textMesh,light);
    // scene.add(cube1, light);
    // scene.add(pyramid, light);

    const fontLoader = new FontLoader();

    fontLoader.load('src/World/components/fonts/helvetiker_bold.typeface.json', function (font) {
		const textGeometry = new TextGeometry('hallo', {
			font: font,
			size: 1,
			height: 1,
		});
	
		const material = new MeshStandardMaterial({ color: 0xff3f2f });
		textMesh = new Mesh(textGeometry, material);
    
    textMesh.rotation.y = Math.PI;
    

		scene.add(textMesh,light);
    
	}, undefined, function (error) {
		console.error(error);
	});
    
    container.addEventListener('click', this.handleClick.bind(this));
    
    const resizer = new Resizer(container, camera, renderer);
  }

  handleClick(event) {
    if (!this.clickCount) {
      // First click
      this.updateText('Wow');
      this.clickCount = 1;
    } else if (this.clickCount === 1) {
      // Second click
      this.updateText('Cool');
      this.clickCount = 2;
    } else {
      // Third click
      const newText = 'New Text';
      this.updateText(newText);
      this.clickCount = 0; // Reset click count
    }
  }

  updateText(newText) {
    const fontLoader = new FontLoader();

    fontLoader.load('src/World/components/fonts/helvetiker_bold.typeface.json', function (font) {
      const textGeometry = new TextGeometry(newText, {
        font: font,
        size: 1,
        height: 1,
      });

      const material = new MeshStandardMaterial({ color: 0xff3f2f });
      textMesh.geometry.dispose();
      textMesh.geometry = textGeometry;
    });
  }


  render() {

    //animateCube(cube);
    // moveCube(cube1);
    // animatePyramide(pyramid);
    //cube.rotation.y += 0.01;
    textMesh.rotation.y += 0.01;

    renderer.render(scene, camera);

    requestAnimationFrame(() => this.render());;
  }
}

export { World };

