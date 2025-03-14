import * as THREE from "three/webgpu";

export function initCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 12;
  camera.position.y = 43;
  camera.lookAt(new THREE.Vector3(0, 30, 0));

  return camera;
}
