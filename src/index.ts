import "./index.css";
import * as THREE from "three/webgpu";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { initRenderer } from "./renderer";
import { initCamera, updateCamera } from "./camera";
import { initSky } from "./sky";
import { initGround } from "./ground";
import { initTable } from "./table";
import { initChess } from "./chess";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGPURenderer;
let gui: GUI;

let mouseX = 0;
let mouseY = 0;

function init() {
  scene = new THREE.Scene();
  camera = initCamera();
  renderer = initRenderer(update);
  gui = new GUI();

  initSky(scene, gui);
  initGround(scene);
  initTable(scene);
  initChess(scene);

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);
}

function update() {
  updateCamera(mouseX, mouseY, camera);
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e: MouseEvent) {
  mouseX = (e.clientX - window.innerWidth / 2) / 100;
  mouseY = (e.clientY - window.innerHeight / 2) / 100;
}

init();
