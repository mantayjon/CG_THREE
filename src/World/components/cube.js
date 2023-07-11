import { BoxGeometry, Mesh, MeshStandardMaterial} from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 0xFF2300 });


  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);  
  cube.position.set(0, 2, -4);

  return cube;
}

function animateCube(cube) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
}

function moveCube(cube){
  cube.position.z += 0.01;
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

export { createCube, animateCube, moveCube };

