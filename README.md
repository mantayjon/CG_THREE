# CG_Jonas Mantay Three.js Text Animation

This project demonstrates a text animation using Three.js

It displays the Poem 'Erlkönig' which you can click through, floating in Space using your space bar.
You can also use your Mouse to control the angle you watch the text from.
The text itself has a slow animation and spins around, simulation zero Gravity.



## Installation

1. Clone the repository or download and unzip the CG_Jonas Mantay Folder

   
2. The open the terminal from the folder and install vite and three.js

    npm install --save three vite npm install --save-dev vite

3. Lastly run the vite and host the site locally 

    npx vite

### technical challenges

To make this project structured, I tried to make js files for all the components. This worked fine and the Book was a great help for that. 
I did however, had proplems in putting the creation of the text in its own file. Due to that, I have the code for that still in the World.js. 

Another challenge was to include the space bar key and an eventListener. But after some figuring out it ended up working. 

To make the scenary a space environment I modified the scene.js and scaled the sphere correctly. And redered a galaxy picture as a sphere.

Another big challenge for me was to make the fontLoader work and actually get the font to load and render. 




