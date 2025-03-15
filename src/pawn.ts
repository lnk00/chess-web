import * as THREE from "three/webgpu";

export function initPawn(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(3, 3, 30);
  const material = new THREE.MeshLambertMaterial({ color: 0x000000 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 280, 0);
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  scene.add(mesh);
}
