import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three/webgpu";

export function initControls(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGPURenderer,
) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;
}
