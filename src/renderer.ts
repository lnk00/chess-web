import * as THREE from "three/webgpu";

export function initRenderer(animateCb: () => void) {
  const renderer = new THREE.WebGPURenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animateCb);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  renderer.shadowMap.enabled = true;

  document.body.appendChild(renderer.domElement);

  return renderer;
}
