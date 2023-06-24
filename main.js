import * as THREE from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js';
// the first three important thing scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0,100);
// camera.position.z = 5;
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// to add and object to the scene 
const boxGoemetry = new THREE.BoxGeometry(1,1,1,);
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00ff00 });
const cube = new THREE.Mesh(boxGoemetry, boxMaterial);
// create a line metarial
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );
// after define the next import object create material we add to the scene
scene.add(cube);
scene.add( line );
// write a animation function 
function animate () {
requestAnimationFrame(animate);
// console.log('ite animate')
cube.rotation.x += 0.05;
cube.rotation.y += 0.05;
renderer.render( scene, camera );
}

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}