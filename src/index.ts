import "./index.css";
import * as THREE from "three/webgpu";
import { initRenderer } from "./renderer";
import { initControls } from "./controls";
import { initCamera } from "./camera";
import { initSky } from "./sky";
import { initLights } from "./lights";
import { initGround } from "./ground";
import { initTable } from "./table";
import { initChess } from "./chess";

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
  initTable(scene);
  initChess(scene);

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
