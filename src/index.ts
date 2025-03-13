import "./index.css";
import * as THREE from "three/webgpu";
import { initRenderer } from "./renderer";
import { initControls } from "./controls";
import { initCamera } from "./camera";
import { initSky } from "./sky";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGPURenderer;

function init() {
  scene = new THREE.Scene();
  camera = initCamera();
  renderer = initRenderer(animate);
  initControls(camera, renderer);
  initSky(scene);

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
