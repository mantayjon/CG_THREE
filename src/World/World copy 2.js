import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Reziser.js';
import { createText, rotateText} from './components/text.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { KeyEvents } from './components/keyEvent.js';


import { Mesh, MeshStandardMaterial } from 'three';
import { Object3D } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'; 


let camera;
let renderer;
let scene;
let textMesh = new Object3D;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    container.append(renderer.domElement);

    const light = createLights();
    //textMesh = createText();
    console.log(textMesh);

    
   // scene.add(textMesh,light);

    const fontLoader = new FontLoader();

    fontLoader.load('./fonts/Roboto Medium_Regular.json', function (font) {
		const textGeometry = new TextGeometry('Klicken sie Ihre Leertaste', {
			font: font,
			size: 1,
			height: 1,
		});
	
		const material = new MeshStandardMaterial({ color: 0xffffff  });
		textMesh = new Mesh(textGeometry, material);
    
    textMesh.rotation.y = Math.PI;
    

		scene.add(textMesh,light);
    
	}, undefined, function (error) {
		console.error(error);
	});

  const controls = new OrbitControls(camera, renderer.domElement);
  
    
  document.addEventListener('keydown', this.handleKeyDown.bind(this));
    
    const resizer = new Resizer(container, camera, renderer);
  }

  handleKeyDown(event) {
    if (event.key === ' ') {
      if (!this.clickCount) {
        this.updateText('Wer reitet so spät durch Nacht und Wind? \nEs ist der Vater mit seinem Kind;\nEr hat den Knaben wohn in dem Arm,\nEr faβt ihn sicher, er hält ihn warm.');
        this.clickCount = 1;
      } else if (this.clickCount === 1) {
        this.updateText('Mein Sohn, was birgst du so bang dein Gesicht?\n“Siehst, Vater, du den Erlkönig nicht?\nDen Erlenkönig mit Kron und Schweif?”\nMein Sohn, es ist ein Nebelstreif.');
        this.clickCount = 2;
      }else if (this.clickCount === 2) {
      this.updateText('‘Du liebes Kind, komm, geh mit mir!\nGar schöne Spiele spiel ich mit dir\nManch bunte Blumen sind an dem Strand.\nMeine Mutter hat manch gülden Gewand.’');
      this.clickCount = 3;
      }else if (this.clickCount === 3) {
        this.updateText('“Mein Vater, mein Vater, und hörest du nicht,\nWas Erlenkönig mir leise verspricht?”\nSei ruhig, bleibe ruhig, mein Kind;\nIn dürren Blättern säuselt der Wind.');
        this.clickCount = 4;
      }else if (this.clickCount === 4) {
        this.updateText('‘Willst, feiner Knabe, du mit mir gehn?\nMeine Töchter solln dich warten schön;\nMeine Töchter führen den nächtlichen Reihn,\nUnd wiegen und tanzen und singen dich ein.’');
        this.clickCount = 5;
      }else if (this.clickCount === 5) {
        this.updateText('“Mein Vater, mein Vater, und siehst du nicht\ndort Erlkönigs Töchter am düstern Ort?”\nMein Sohn, mein Sohn, ich seh es genau;\nEs scheinen die alten Weiden so grau.');
        this.clickCount = 6;
      }else if (this.clickCount === 6) {
        this.updateText('‘Ich liebe dich, mich reizt deine schöne Gestalt;\nUnd bist du nicht willig, so brauch ich Gewalt.’\n“Mein Vater, mein Vater, jetzt fasst er mich an!\nErlkönig hat mir ein Leids getan!”');
        this.clickCount = 7;
      }else if (this.clickCount === 7) {
        this.updateText('Dem Vater grauset’s, er reitet geschwind,\nEr hält in Armen das ächzende Kind,\nErreicht den Hof mit Mühe und Not;\nIn seinen Armen das Kind war tot.');
        this.clickCount = 8;
      }else {
        const newText = '<3 ';
        this.updateText(newText);
        this.clickCount = 0; // Reset click count
      }
    }
  } 

  updateText(newText) {
    const fontLoader = new FontLoader();

    fontLoader.load('./fonts/Roboto Medium_Regular.json', function (font) {
      const textGeometry = new TextGeometry(newText, {
        font: font,
        size: 1,
        height: 1,
      });

      const material = new MeshStandardMaterial({ color: 0xFFFFFF  });
      textMesh.geometry.dispose();
      textMesh.geometry = textGeometry;
    });
  }


  render() {
    textMesh.rotation.y += 0.001 ;
    //textMesh.rotation.x += 0.01;
   
    renderer.render(scene, camera);

    requestAnimationFrame(() => this.render());;
  }
}

export { World };

