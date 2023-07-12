import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Reziser.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
    console.log(textMesh);

    const fontLoader = new FontLoader();

    fontLoader.load('./fonts/Roboto Medium_Regular.json', function (font) {
		const textGeometry = new TextGeometry('Klicken sie Ihre Leertaste', {
			font: font,
			size: 1,
			height: 1,
		});
	
		const material = new MeshStandardMaterial({ color: 0xffffff  });
		textMesh = new Mesh(textGeometry, material);

    textGeometry.computeBoundingBox();
    const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
    textMesh.position.x = -textWidth / 2;
    
    
    

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
        this.updateText('Wer reitet so spaet durch Nacht und Wind? \nEs ist der Vater mit seinem Kind;\nEr hat den Knaben wohn in dem Arm,\nEr faβt ihn sicher, er hält ihn warm.');
        this.clickCount = 1;
      } else if (this.clickCount === 1) {
        this.updateText('Mein Sohn, was birgst du so bang dein Gesicht?\n“Siehst, Vater, du den Erlkoenig nicht?\nDen Erlenkoenig mit Kron und Schweif?”\nMein Sohn, es ist ein Nebelstreif.');
        this.clickCount = 2;
      }else if (this.clickCount === 2) {
      this.updateText('‘Du liebes Kind, komm, geh mit mir!\nGar schoene Spiele spiel ich mit dir\nManch bunte Blumen sind an dem Strand.\nMeine Mutter hat manch guelden Gewand.’');
      this.clickCount = 3;
      }else if (this.clickCount === 3) {
        this.updateText('“Mein Vater, mein Vater, und hoerest du nicht,\nWas Erlenkoenig mir leise verspricht?”\nSei ruhig, bleibe ruhig, mein Kind;\nIn dürren Blaettern saeuselt der Wind.');
        this.clickCount = 4;
      }else if (this.clickCount === 4) {
        this.updateText('‘Willst, feiner Knabe, du mit mir gehn?\nMeine Toechter solln dich warten schoen;\nMeine Toechter führen den nächtlichen Reihn,\nUnd wiegen und tanzen und singen dich ein.’');
        this.clickCount = 5;
      }else if (this.clickCount === 5) {
        this.updateText('“Mein Vater, mein Vater, und siehst du nicht\ndort Erlkoenigs Toechter am duestern Ort?”\nMein Sohn, mein Sohn, ich seh es genau;\nEs scheinen die alten Weiden so grau.');
        this.clickCount = 6;
      }else if (this.clickCount === 6) {
        this.updateText('‘Ich liebe dich, mich reizt deine schoene Gestalt;\nUnd bist du nicht willig, so brauch ich Gewalt.’\n“Mein Vater, mein Vater, jetzt fasst er mich an!\nErlkoenig hat mir ein Leids getan!”');
        this.clickCount = 7;
      }else if (this.clickCount === 7) {
        this.updateText('Dem Vater grauset’s, er reitet geschwind,\nEr haelt in Armen das aechzende Kind,\nErreicht den Hof mit Muehe un d Not;\nIn seinen Armen das Kind war tot.');
        this.clickCount = 8;
      }else {
        const newText = '<3 ';
        this.updateText(newText);
        this.clickCount = 0; 
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

      textGeometry.computeBoundingBox();
      const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
      textMesh.position.x = -textWidth / 2;
    });
  }


  render() {
    textMesh.rotation.y += 0.001 ;
   
    renderer.render(scene, camera);

    requestAnimationFrame(() => this.render());;
  }
}

export { World };

