import "./index.css";
import * as THREE from "three/webgpu";
import { initRenderer } from "./renderer";
import { initCamera } from "./camera";
import { initSky } from "./sky";
import { initLights } from "./lights";
import { initGround } from "./ground";
import { initTable } from "./table";
import { initChess } from "./chess";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGPURenderer;
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
let currentLookAtX = 0;
let currentLookAtY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;
const dampingFactor = 0.05; // Lower = smoother/slower

function init() {
  scene = new THREE.Scene();
  camera = initCamera();
  renderer = initRenderer(animate);
  initSky(scene);
  initLights(scene);
  initGround(scene);
  initTable(scene);
  initChess(scene);

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);
}

function animate() {
  targetX = mouseX * 2;
  targetY = mouseY * -5;

  currentLookAtX += (targetX - currentLookAtX) * dampingFactor;
  currentLookAtY += (targetY - currentLookAtY) * dampingFactor;

  const targetPoint = new THREE.Vector3(currentLookAtX, currentLookAtY + 10, 0);
  camera.lookAt(targetPoint);

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e: MouseEvent) {
  mouseX = (e.clientX - windowHalfX) / 100;
  mouseY = (e.clientY - windowHalfY) / 100;
}

init();
