import * as THREE from 'three'
// the first three important thing scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// to add and object to the scene 
const goemetry = new THREE.BoxGeometry(1,1,1,);
const material = new THREE.MeshBasicMaterial({color:0x00ff00 });
const cube = new THREE.Mesh(goemetry, material);
// after define the next import object create material we add to the scene
scene.add(cube);
// then add camera position to the scene
camera.position.z = 5;
// write a animation function 
function animate () {
requestAnimationFrame(animate);
// console.log('ite animate')
cube.rotation.x += 0.05;
cube.rotation.y += 0.05;
renderer.render( scene, camera );
}

animate();