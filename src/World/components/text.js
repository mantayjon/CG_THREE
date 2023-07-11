import { Mesh, MeshStandardMaterial } from 'three';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'; 

function createText(){

    let textMesh;

    const fontLoader = new FontLoader();

    fontLoader.load('/src/World/fonts/Roboto Medium_Regular.json', function (font) {

        const textGeometry = new TextGeometry('hallo', {
            font: font,
            size: 10,
            height: 1,
            
        });

        const material = new MeshStandardMaterial({ color: 0xffFFFF });
        textMesh = new Mesh(textGeometry, material);
   
    });

    return textMesh;
}

export{createText}