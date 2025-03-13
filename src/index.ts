import "./index.css";
import * as THREE from "three/webgpu";
import { initRenderer } from "./renderer";
import { initControls } from "./controls";
import { initCamera } from "./camera";
import { initSky } from "./sky";
import { initLights } from "./lights";
import { initGround } from "./ground";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGPURenderer;

function init() {
  scene = new THREE.Scene();
  camera = initCamera();
  renderer = initRenderer(animate);
  initControls(camera, renderer);
  initSky(scene);
  initLights(scene);
  initGround(scene);

  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  cube.position.set(0, 5, 0);
  scene.add(cube);

  window.addEventListener("resize", onWindowResize);
}

function animate() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
