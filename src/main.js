import { World } from './World/World.js';

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  const startButton = document.querySelector('#startButton');

  startButton.addEventListener('click', function() {
    // Render the scene when the button is clicked
    
  });
  
  world.render();
}

main();
