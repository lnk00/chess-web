import * as THREE from "three/webgpu";

export function initGround(scene: THREE.Scene) {
  const geometry = new THREE.PlaneGeometry(200, 200);
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  scene.add(mesh);
}
