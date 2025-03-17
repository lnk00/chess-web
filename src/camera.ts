import * as THREE from "three/webgpu";

let currentLookAtX = 0;
let currentLookAtY = 0;
const dampingFactor = 0.05; // Lower = smoother/slower

export function initCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 45;
  camera.position.y = 120;
  camera.lookAt(new THREE.Vector3(0, 75, 0));

  return camera;
}

export function updateCamera(
  mouseX: number,
  mouseY: number,
  camera: THREE.PerspectiveCamera,
) {
  const targetX = mouseX * 3;
  const targetY = mouseY * -5;

  currentLookAtX += (targetX - currentLookAtX) * dampingFactor;
  currentLookAtY += (targetY - currentLookAtY) * dampingFactor;

  const targetPoint = new THREE.Vector3(currentLookAtX, currentLookAtY + 80, 0);
  camera.lookAt(targetPoint);
}
