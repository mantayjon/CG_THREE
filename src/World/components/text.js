import { Object3D, Mesh, MeshStandardMaterial } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'; 

// function createText(textMesh){
    
    
//     const fontLoader = new FontLoader();

//     fontLoader.load('src/World/components/fonts/Roboto Medium_Regular.json', function (font) {
// 		const textGeometry = new TextGeometry('hallooo', {
// 			font: font,
// 			size: 1,
// 			height: 1,
// 		});
	
// 		const material = new MeshStandardMaterial({ color: 0xffffff });
// 	    textMesh = new Mesh(textGeometry, material);

//         textGeometry.computeBoundingBox();
//         const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
//         textMesh.position.x = -textWidth / 2;
    
//         return textMesh;

// 	}, undefined, function (error) {
// 		console.error(error);
// 	});

//     return textMesh;
// }

function createText(textMesh) {
  
  const fontLoader = new FontLoader();

  return new Promise((resolve, reject) => {
    fontLoader.load('src/World/components/fonts/Roboto Medium_Regular.json', function (font) {
      const textGeometry = new TextGeometry('Klicken Sie Ihre Leertaste', {
        font: font,
        size: 1,
        height: 1,
      });

      const material = new MeshStandardMaterial({ color: 0xffffff });
      const mesh = new Mesh(textGeometry, material);

      textGeometry.computeBoundingBox();
      const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
      mesh.position.x = -textWidth / 2;

      resolve(mesh);
    }, undefined, function (error) {
      reject(error);
    });
  });
}

function rotateText(text3D) {
    text3D.rotation.y += 0.01;
    
}

function handleKeyDown(event, textMesh) {
    if (event.key === ' ') {
      if (!this.clickCount) {
        updateText('Wer reitet so spät durch Nacht und Wind? \nEs ist der Vater mit seinem Kind;\nEr hat den Knaben wohn in dem Arm,\nEr faβt ihn sicher, er hält ihn warm.', textMesh);
        this.clickCount = 1;
      } else if (this.clickCount === 1) {
        updateText('Mein Sohn, was birgst du so bang dein Gesicht?\n“Siehst, Vater, du den Erlkönig nicht?\nDen Erlenkönig mit Kron und Schweif?”\nMein Sohn, es ist ein Nebelstreif.', textMesh);
        this.clickCount = 2;
      }else if (this.clickCount === 2) {
      updateText('‘Du liebes Kind, komm, geh mit mir!\nGar schöne Spiele spiel ich mit dir\nManch bunte Blumen sind an dem Strand.\nMeine Mutter hat manch gülden Gewand.’', textMesh);
      this.clickCount = 3;
      }else if (this.clickCount === 3) {
        updateText('“Mein Vater, mein Vater, und hörest du nicht,\nWas Erlenkönig mir leise verspricht?”\nSei ruhig, bleibe ruhig, mein Kind;\nIn dürren Blättern säuselt der Wind.', textMesh);
        this.clickCount = 4;
      }else if (this.clickCount === 4) {
        updateText('‘Willst, feiner Knabe, du mit mir gehn?\nMeine Töchter solln dich warten schön;\nMeine Töchter führen den nächtlichen Reihn,\nUnd wiegen und tanzen und singen dich ein.’', textMesh);
        this.clickCount = 5;
      }else if (this.clickCount === 5) {
        updateText('“Mein Vater, mein Vater, und siehst du nicht\ndort Erlkönigs Töchter am düstern Ort?”\nMein Sohn, mein Sohn, ich seh es genau;\nEs scheinen die alten Weiden so grau.', textMesh);
        this.clickCount = 6;
      }else if (this.clickCount === 6) {
        updateText('‘Ich liebe dich, mich reizt deine schöne Gestalt;\nUnd bist du nicht willig, so brauch ich Gewalt.’\n“Mein Vater, mein Vater, jetzt fasst er mich an!\nErlkönig hat mir ein Leids getan!”', textMesh);
        this.clickCount = 7;
      }else if (this.clickCount === 7) {
        updateText('Dem Vater grauset’s, er reitet geschwind,\nEr hält in Armen das ächzende Kind,\nErreicht den Hof mit Mühe und Not;\nIn seinen Armen das Kind war tot.', textMesh);
        this.clickCount = 8;
      }else {
        const newText = '<3 ';
        updateText(newText);
        this.clickCount = 0;
      }
    }
  } 

//   function updateText(newText,textMesh) {
//     const fontLoader = new FontLoader();

//     fontLoader.load('./fonts/Roboto Medium_Regular.json', function (font) {
//       const textGeometry = new TextGeometry(newText, {
//         font: font,
//         size: 1,
//         height: 1,
//       });

//       const material = new MeshStandardMaterial({ color: 0xFFFFFF  });
//       textMesh.geometry.dispose();
//       textMesh.geometry = textGeometry;

//       textGeometry.computeBoundingBox();
//       const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
//       textMesh.position.x = -textWidth / 2;
//     });
//   }

function updateText(newText, textMesh) {
  const fontLoader = new FontLoader();

  return new Promise((resolve, reject) => {
    fontLoader.load('src/World/components/fonts/Roboto Medium_Regular.json', function (font) {
      const textGeometry = new TextGeometry(newText, {
        font: font,
        size: 1,
        height: 1,
      });

      textMesh.geometry.dispose();
      textMesh.geometry = textGeometry;

      textGeometry.computeBoundingBox();
      const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
      textMesh.position.x = -textWidth / 2;

      resolve(textGeometry); // Resolve with textGeometry, not textMesh
    }, undefined, function (error) {
      reject(error);
    });
  });
}


export{createText, rotateText, handleKeyDown, updateText}