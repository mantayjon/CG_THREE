import { Mesh, MeshStandardMaterial, CylinderGeometry } from 'three';

function createPyramid() {

  var radius = 1;
  var height = 1;
  
  
  const geometry = new CylinderGeometry(0, radius, height, 4, 1);
  const material = new MeshStandardMaterial({ color: 0xFFFF00 });
  const pyramid = new Mesh(geometry, material);



  /*
  // create a BufferGeometry
  const geometry = new BufferGeometry();

  // specify the vertices of the pyramid
  const vertices = [
    0, 1, 0,   // vertex 0 (top)
    -1, -1, 1, // vertex 1 (bottom-left)
    1, -1, 1,  // vertex 2 (bottom-right)
    1, -1, -1, // vertex 3 (back-right)
    -1, -1, -1 // vertex 4 (back-left)
  ];

  // specify the indices to form the faces of the pyramid
  const indices = [
    0, 1, 2, // front face
    0, 2, 3, // right face
    0, 3, 4, // back face
    0, 4, 1, // left face
    1, 2, 4, // bottom face 1
    2, 3, 4  // bottom face 2
  ];

  // create a Float32Array and set the vertices
  const verticesArray = new Float32Array(vertices);
  geometry.setAttribute('position', new BufferAttribute(verticesArray, 3));

  // create an Uint16Array and set the indices
  const indicesArray = new Uint16Array(indices);
  geometry.setIndex(new BufferAttribute(indicesArray, 1));

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 0xFFFF00 });

  // create a Mesh containing the geometry and material
  const pyramid = new Mesh(geometry, material);

  */

  return pyramid;
}

function animatePyramide(pyramid) {
  pyramid.rotation.y += 0.01;
  pyramid.rotation.x += 0.01;
}

export { createPyramid, animatePyramide };
