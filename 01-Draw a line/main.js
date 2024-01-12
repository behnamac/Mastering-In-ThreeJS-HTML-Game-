//import * as THREE from "three";
import * as THREE from "./node_modules/three/build/three.module.js";

//Create a Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

//Create Scene
const scene = new THREE.Scene();

//Create material
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

//Create Geometry With some vertices
const points = [];
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(0, 0, 10));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

renderer.render(scene, camera);
