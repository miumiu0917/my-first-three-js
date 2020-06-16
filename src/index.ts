import "./assets/style.css";
import * as THREE from 'three';

 
const { mesh, renderer, scene, camera } = init();
animate();
 
function init() {
 
  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  const material = new THREE.MeshNormalMaterial();

  const mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  return { mesh, renderer, scene, camera };
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
}