import * as THREE from "./node_modules/three/build/three.module.js";
//import * as THREE from "three";

//#region Creste a Scene
const scene = new THREE.Scene();
//#endregion

//#region Craate Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
//#endregion

//#region Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//#endregion

//#region light
const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
ambient.position.set(0.5, 1, 0.25);
scene.add(ambient);
//#endregion

//#region Create a box
const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const CubeMesh = new THREE.Mesh(cubeGeo, cubeMaterial);
scene.add(CubeMesh);
//#endregion

//#region Render The Scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  rotateCube();
}
animate();
//#endregion

function rotateCube() {
  CubeMesh.rotation.x += 0.01;
  CubeMesh.rotation.y += 0.02;
}
