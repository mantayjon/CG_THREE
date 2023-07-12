import { Object3D, Mesh, MeshStandardMaterial } from 'three';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'; 

function createText(){
    
    let textMesh = new Object3D;
    const fontLoader = new FontLoader();

    fontLoader.load('./fonts/Roboto Medium_Regular.json', function (font) {
		const textGeometry = new TextGeometry('hallooo', {
			font: font,
			size: 1,
			height: 1,
		});
	
		const material = new MeshStandardMaterial({ color: 0xffffff });
	    textMesh = new Mesh(textGeometry, material);
    
        return textMesh;
	}, undefined, function (error) {
		console.error(error);
	});

}

function rotateText(text3D) {
    text3D.rotation.y += 0.01;
    
}

export{createText, rotateText}