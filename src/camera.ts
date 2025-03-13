import * as THREE from "three/webgpu";

export function initCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 20;
  camera.position.y = 40;

  return camera;
}
