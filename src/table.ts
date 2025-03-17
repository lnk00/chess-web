import * as THREE from "three/webgpu";

export function initTable(scene: THREE.Scene) {
  const height = 75;
  const width = 60;
  const depth = 60;

  const geometry = new THREE.BoxGeometry(width, height, depth);
  const material = new THREE.MeshLambertMaterial({ color: 0x654321 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, height / 2, 0);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  scene.add(mesh);
}
