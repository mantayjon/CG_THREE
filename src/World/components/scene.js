import { Color, Scene, SphereGeometry, TextureLoader, MeshBasicMaterial, Mesh} from 'three';


function createScene() {

  const scene = new Scene();
  const geometry = new SphereGeometry(5,60,50);
  geometry.scale(-1, 1, 1);

  const loader = new TextureLoader();
  const texture = loader.load("src/World/360Degrees/sky.jpg");
  const material = new MeshBasicMaterial( {map: texture});

  const sphere = new Mesh(geometry, material);
  sphere.scale.set(12, 12, 12);
  sphere.position.set(0, 2, 0);
 
  scene.add(sphere);   

  scene.background = new Color('gray');

  return scene;
}

export { createScene };


